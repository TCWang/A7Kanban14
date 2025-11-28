#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const patches = [
  {
    file: 'node_modules/mlly/dist/index.cjs',
    apply: (content) => patchMlly(content, 'fs.Stats')
  },
  {
    file: 'node_modules/mlly/dist/index.mjs',
    apply: (content) => patchMlly(content, 'Stats')
  },
  {
    file: 'node_modules/c12/dist/index.cjs',
    apply: patchC12
  },
  {
    file: 'node_modules/c12/dist/index.mjs',
    apply: patchC12
  },
  {
    file: 'node_modules/jiti/dist/jiti.js',
    apply: (content) => patchMlly(content, 'external_node_fs_namespaceObject.Stats')
  }
];

// Include bundled nuxi chunks that inline mlly helpers.
try {
  const sharedDir = path.resolve(repoRoot, 'node_modules/nuxi/dist/shared');
  for (const entry of readdirSync(sharedDir)) {
    if (entry.startsWith('nuxi.') && entry.endsWith('.mjs')) {
      patches.push({
        file: path.join('node_modules/nuxi/dist/shared', entry),
        apply: (content) => patchMlly(content, 'Stats')
      });
    }
  }
} catch {
  // optional dependency not installed yet
}

const emptyStatsBlock = 'const emptyStats = { isDirectory: () => false, isFile: () => false };';

function patchMlly(content, ctorName) {
  if (!content.includes('const emptyStats')) {
    let marker = '/**\n * @param {string} path\n * @returns {Stats}\n */';
    let idx = content.indexOf(marker);
    if (idx === -1) {
      marker = 'function tryStatSync';
      idx = content.indexOf(marker);
      if (idx === -1) {
        return content;
      }
    }
    content = `${content.slice(0, idx)}${emptyStatsBlock}\n\n${content.slice(idx)}`;
  }

  const needle =
    ctorName === 'Stats'
      ? /return new [\w.]*Stats(?:\(\))?/g
      : new RegExp(
          `return new ${ctorName.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}(?:\\(\\))?`,
          'g'
        );

  content = content.replace(needle, 'return emptyStats');

  return content;
}

function patchC12(content) {
  if (
    content.includes('!res.configFile || !existsSync(res.configFile)') ||
    content.includes('!res.configFile || !node_fs.existsSync(res.configFile)')
  ) {
    return content;
  }
  return content
    .replace(
      'if (!existsSync(res.configFile)) {',
      'if (!res.configFile || !existsSync(res.configFile)) {'
    )
    .replace(
      'if (!node_fs.existsSync(res.configFile)) {',
      'if (!res.configFile || !node_fs.existsSync(res.configFile)) {'
    );
}

for (const { file, apply } of patches) {
  const target = path.resolve(repoRoot, file);
  try {
    const original = readFileSync(target, 'utf8');
    const patched = apply(original);
    if (patched === original) {
      console.log(`[patch] ${file} already up to date`);
      continue;
    }
    writeFileSync(target, patched);
    console.log(`[patch] ${file} patched`);
  } catch (error) {
    console.warn(`[patch] skipped ${file}: ${error.message}`);
  }
}
