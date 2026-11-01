import { chromium, devices } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.QA_BASE_URL ?? "http://localhost:3000";
const OUT = path.join(process.cwd(), "qa-screenshots");

const pages = [
  { name: "home", path: "/" },
  { name: "contact", path: "/contact" },
  { name: "admission", path: "/admission-process" },
  { name: "russia", path: "/countries/russia" },
  { name: "germany", path: "/countries/germany" },
  { name: "contact-russia-prefill", path: "/contact?country=russia" },
];

const viewports = [
  { tag: "375", width: 375, height: 812 },
  { tag: "1280", width: 1280, height: 900 },
];

async function checkOverflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const overflow =
      doc.scrollWidth > doc.clientWidth + 1 ||
      document.body.scrollWidth > document.body.clientWidth + 1;
    return {
      overflow,
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
    };
  });
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const results = [];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();

    for (const route of pages) {
      const url = `${BASE}${route.path}`;
      const res = await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(500);
      const file = path.join(OUT, `${route.name}-${vp.tag}.png`);
      await page.screenshot({ path: file, fullPage: true });
      const overflow = await checkOverflow(page);
      results.push({
        route: route.path,
        viewport: vp.tag,
        status: res?.status(),
        ...overflow,
      });
    }
    await context.close();
  }

  // Country → contact prefill (normal motion)
  const ctx2 = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: "no-preference",
  });
  const page2 = await ctx2.newPage();
  await page2.goto(`${BASE}/countries/russia`, { waitUntil: "networkidle" });
  const enquire = page2.getByRole("link", { name: /enquire about russia/i }).first();
  await enquire.click();
  await page2.waitForURL(/\/contact/);
  const interestPrefill = await page2.locator('input[name="interest"]').inputValue();
  results.push({
    check: "country-prefill-flow",
    url: page2.url(),
    interestPrefill,
    interestOk: interestPrefill === "MBBS in Russia",
  });

  // Mobile nav
  const mobile = await browser.newContext({
    ...devices["iPhone 12"],
  });
  const mpage = await mobile.newPage();
  await mpage.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await mpage.getByRole("button", { name: /open menu/i }).click();
  await mpage.waitForTimeout(300);
  await mpage.screenshot({
    path: path.join(OUT, "home-mobile-nav-open.png"),
    fullPage: false,
  });
  const navVisible = await mpage.locator("#mobile-nav").isVisible();
  results.push({ check: "mobile-nav", navVisible });

  await mobile.close();
  await ctx2.close();
  await browser.close();

  console.log(JSON.stringify(results, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
