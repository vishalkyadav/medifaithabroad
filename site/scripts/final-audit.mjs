import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = "http://localhost:3000";
const out = "C:/medifaith web/site/qa-screenshots/final-audit";
await mkdir(out, { recursive: true });

const browser = await chromium.launch();
const report = { branding: [], routes: [], services: [], issues: [], hero: [] };

const countries = [
  "russia",
  "poland",
  "china",
  "uzbekistan",
  "kazakhstan",
  "georgia",
  "nepal",
  "kyrgyzstan",
  "bangladesh",
  "germany",
  "united-kingdom",
];

for (const slug of countries) {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const res = await page.goto(`${base}/countries/${slug}`, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  report.routes.push({ path: `/countries/${slug}`, status: res?.status() });
  await ctx.close();
}

for (const [w, tag] of [[390, "m"], [1280, "d"]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 844 } });
  const page = await ctx.newPage();

  for (const path of [
    "/",
    "/about",
    "/services",
    "/contact",
    "/admission-process",
    "/countries/russia",
  ]) {
    await page.goto(`${base}${path}`, { waitUntil: "networkidle", timeout: 60000 });
    const bodyText = await page.locator("body").innerText();
    if (/Earthly|Elegance/i.test(bodyText)) {
      report.branding.push({ path, w, match: true });
    }
    const logo = await page.locator("header img").first().getAttribute("src");
    if (!logo?.includes("medifaith-abroad-logo")) {
      report.branding.push({ path, w, logo });
    }
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    if (overflow) report.issues.push({ path, w, overflow });

    if (path === "/") {
      await page.locator("#services-heading").scrollIntoViewIfNeeded();
      const rows = await page.evaluate(() => {
        const decode = (s) => {
          if (!s) return s;
          const m = s.match(/url=%2Fimages%2F([^&]+)/);
          if (!m) return s;
          return `/images/${decodeURIComponent(m[1].replace(/%2F/g, "/"))}`;
        };
        const section = document.querySelector("#services-heading")?.closest("section");
        const items = section ? [...section.querySelectorAll("ul > li")] : [];
        return items.map((li) => {
          const imgs = [...li.querySelectorAll("img")];
          return {
            title: li.querySelector("h3")?.textContent?.trim(),
            large: decode(imgs[0]?.src),
            thumb: decode(imgs[1]?.src),
          };
        });
      });
      report.services.push({ w, rows });
      const hero = await page.evaluate(() => ({
        pos: getComputedStyle(document.querySelector("img.hero-home__photo")).objectPosition,
        h1: getComputedStyle(document.querySelector("#hero-heading")).color,
      }));
      report.hero.push({ w, ...hero });
      await page.screenshot({
        path: `${out}/home-${tag}.png`,
        clip: { x: 0, y: 0, width: w, height: Math.min(720, 844) },
      });
      await page.screenshot({ path: `${out}/home-services-${tag}.png`, fullPage: true });
    }
  }
  await ctx.close();
}

const ctx2 = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const p2 = await ctx2.newPage();
await p2.goto(`${base}/countries/russia`);
await p2.getByRole("link", { name: /enquire about russia/i }).click();
await p2.waitForURL(/contact/);
report.prefill = await p2.locator('input[name="interest"]').inputValue();
await ctx2.close();
await browser.close();

console.log(JSON.stringify(report, null, 2));
