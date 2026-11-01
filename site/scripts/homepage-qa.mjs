import { chromium } from "playwright";
import { mkdir, access } from "node:fs/promises";
import path from "node:path";

const base = "http://localhost:3000";
const out = "C:/medifaith web/site/qa-screenshots/polish-pass";
const imgDir = "C:/medifaith web/site/public";
await mkdir(out, { recursive: true });

const servicePaths = [
  // Large service-row photos (servicePhotos in lib/content/home-images.ts)
  "/images/University11.png",
  "/images/services/Admissionsassistance.png",
  "/images/services/visa-processing.png",
  "/images/services/Airport Travel Assistance Consultation.png",
  "/images/services/Scholarship-guidance (2).png",
  // Service thumbnails (serviceThumbnails in lib/content/home-images.ts)
  "/images/services/university-selectio.png",
  "/images/services/University Application Assistance Office.png",
  "/images/students-airport.png",
  "/images/services/pre-departure-support.png",
  "/images/services/scholarship-guidance.png",
];

const missing = [];
for (const p of servicePaths) {
  try {
    await access(path.join(imgDir, p.replace(/^\//, "")));
  } catch {
    missing.push(p);
  }
}

const browser = await chromium.launch();
const report = { missing, overflow: [], hero: [], services: [] };

for (const [w, h, tag] of [
  [390, 844, "390"],
  [768, 1024, "768"],
  [1280, 900, "1280"],
  [1440, 900, "1440"],
]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(base, { waitUntil: "networkidle", timeout: 60000 });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  if (overflow) report.overflow.push({ w });
  const pos = await page.evaluate(() =>
    document.querySelector("img.hero-feature__photo")
      ? getComputedStyle(document.querySelector("img.hero-feature__photo")).objectPosition
      : null,
  );
  report.hero.push({ w, objectPosition: pos });
  if (w === 1280) {
    const rows = await page.evaluate(() => {
      const decode = (s) => {
        if (!s) return s;
        const m = s.match(/url=%2Fimages%2F([^&]+)/);
        return m ? `/images/${decodeURIComponent(m[1].replace(/%2F/g, "/"))}` : s;
      };
      const section = document.querySelector("#services-heading")?.closest("section");
      return [...(section?.querySelectorAll("ul > li") || [])].map((li) => {
        const imgs = [...li.querySelectorAll("img")];
        return {
          title: li.querySelector("h3")?.textContent?.trim(),
          large: decode(imgs[0]?.src),
          thumb: decode(imgs[1]?.src),
        };
      });
    });
    report.services = rows;
  }
  await page.screenshot({ path: `${out}/home-${tag}.png`, fullPage: false });
  await page.close();
}

const page2 = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page2.goto(`${base}/countries/russia`);
await page2.getByRole("link", { name: /enquire about russia/i }).click();
await page2.waitForURL(/contact/);
report.prefill = await page2.locator('input[name="interest"]').inputValue();
await browser.close();
console.log(JSON.stringify(report, null, 2));
