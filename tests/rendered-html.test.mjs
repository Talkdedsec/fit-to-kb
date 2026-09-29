import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
test('static build has relative assets for GitHub repository paths',async()=>{const html=await readFile(new URL('../pages-dist/index.html',import.meta.url),'utf8');assert.match(html,/src="\.\/assets\//);assert.match(html,/KB’ye Sığdır/);assert.doesNotMatch(html,/site-preview/);});
