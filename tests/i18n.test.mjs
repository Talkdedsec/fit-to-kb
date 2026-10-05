import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
test('English and Turkish catalogs line up entry for entry',async()=>{const src=await readFile(new URL('../src/App.tsx',import.meta.url),'utf8');const text=Function(`return ${src.match(/const text=(\{en:\[[\s\S]*?\]\});/)[1]}`)();assert.equal(text.tr.length,text.en.length);for(const lang of ['en','tr'])for(const [i,s] of text[lang].entries())assert.ok(s.trim(),`${lang}[${i}] is empty`);});
