#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "content", "insights");
const DRAFTS_DIR = path.join(CONTENT_DIR, "_drafts");

function slugifyFilename(name) {
  // normalize file name (keep extension)
  const ext = path.extname(name);
  let base = path.basename(name, ext);
  // strip leading date_ if present
  base = base.replace(/^\d{4}-\d{2}-\d{2}_/, "");
  base = base.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  if (!base) base = "post";
  return base + ext.toLowerCase();
}

function main() {
  if (!fs.existsSync(DRAFTS_DIR)) {
    console.log("No drafts directory; nothing to release.");
    process.exit(0);
  }
  const files = fs.readdirSync(DRAFTS_DIR)
    .filter(f => f.endsWith(".md") || f.endsWith(".txt"))
    .sort();

  if (files.length === 0) {
    console.log("No drafts to release.");
    process.exit(0);
  }

  const pick = files[0];
  const from = path.join(DRAFTS_DIR, pick);
  const normalized = slugifyFilename(pick);
  const to = path.join(CONTENT_DIR, normalized);

  if (fs.existsSync(to)) {
    // if collision, append short suffix
    const ext = path.extname(normalized);
    const base = path.basename(normalized, ext);
    const alt = path.join(CONTENT_DIR, `${base}-${Date.now().toString().slice(-6)}${ext}`);
    fs.renameSync(from, alt);
    console.log(`Released (collision): ${pick} -> ${path.basename(alt)}`);
    return;
  }

  fs.renameSync(from, to);
  console.log(`Released: ${pick} -> ${path.basename(to)}`);
}

main();
