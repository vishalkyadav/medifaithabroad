/**
 * Verifies that every static `/images/...` path referenced from source code
 * resolves to a real file in public/ with an EXACT filename match
 * (case-sensitive even on Windows, which would otherwise hide case bugs
 * that 404 on case-sensitive deployment hosts).
 *
 * Usage: node scripts/verify-image-paths.mjs
 * Exits 1 if any referenced image is missing.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "qa-screenshots", "tmp-previews"]);

function walkSource(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.isDirectory()) {
      if (!SKIP_DIRS.has(ent.name)) walkSource(path.join(dir, ent.name), acc);
    } else if (/\.(tsx?|mjs)$/.test(ent.name)) {
      acc.push(path.join(dir, ent.name));
    }
  }
  return acc;
}

/** Exact-case relative paths of every file under public/, using "/" separators. */
function listPublicFiles(dir, base = publicDir, acc = new Set()) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      listPublicFiles(p, base, acc);
    } else {
      acc.add(path.relative(base, p).split(path.sep).join("/"));
    }
  }
  return acc;
}

const onDisk = listPublicFiles(publicDir);
const onDiskLower = new Map([...onDisk].map((p) => [p.toLowerCase(), p]));

const paths = new Set();
for (const file of walkSource(root)) {
  const text = fs
    .readFileSync(file, "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "") // strip block comments
    .replace(/(^|[^:])\/\/.*$/gm, "$1"); // strip line comments (keep http://)
  for (const m of text.matchAll(/["'`](\/images\/[^"'`$]+)["'`]/g)) {
    paths.add(m[1]);
  }
}

const missing = [];
const caseMismatches = [];
let totalBytes = 0;
for (const rel of [...paths].sort()) {
  const diskRel = rel.replace(/^\//, "");
  if (onDisk.has(diskRel)) {
    totalBytes += fs.statSync(path.join(publicDir, diskRel)).size;
    continue;
  }
  const lowerHit = onDiskLower.get(diskRel.toLowerCase());
  if (lowerHit) {
    caseMismatches.push({ referenced: rel, actualOnDisk: `/images/${lowerHit}` });
  } else {
    missing.push(rel);
  }
}

console.log(
  JSON.stringify(
    { referenced: paths.size, missing, caseMismatches, totalBytes },
    null,
    2,
  ),
);

if (caseMismatches.length) {
  console.error(
    `\nFAIL: ${caseMismatches.length} path(s) differ from the file on disk only by letter case. They may work on Windows but 404 on the deployment host.`,
  );
}
if (missing.length) {
  console.error(`\nFAIL: ${missing.length} referenced image file(s) do not exist in public/.`);
}
if (missing.length || caseMismatches.length) process.exit(1);
console.log("OK: all referenced images exist with exact filename case.");
