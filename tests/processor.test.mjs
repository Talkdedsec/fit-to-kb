import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import ts from 'typescript';
const source=ts.transpileModule(fs.readFileSync(new URL('../app/processor.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const {compress}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
let closed=0;
globalThis.createImageBitmap=async()=>({width:1600,height:1000,close(){closed++;}});
globalThis.document={createElement:()=>{const canvas={width:0,height:0,getContext:()=>({clearRect(){},fillRect(){},drawImage(){}}),toBlob(callback,mime,q){const size=Math.ceil(this.width*this.height*(mime==='image/png'?1:q)*.5)+100;callback(new Blob([new Uint8Array(size)],{type:mime}));}};return canvas;}};
test('lossy output never exceeds target',async()=>{const r=await compress(new Blob([new Uint8Array(2e6)],{type:'image/jpeg'}),{target:150000,width:0,height:0,mime:'image/jpeg'});assert.ok(r.blob.size<=150000);assert.equal(r.w,1600);assert.equal(r.h,1000);});
test('PNG reduces resolution while preserving aspect ratio',async()=>{const r=await compress(new Blob([]),{target:20000,width:0,height:0,mime:'image/png'});assert.ok(r.blob.size<=20000);assert.ok(r.w<1600);assert.ok(Math.abs(r.w/r.h-1.6)<.03);});
test('dimension limits and no upscaling',async()=>{const r=await compress(new Blob([]),{target:1e6,width:800,height:200,mime:'image/webp'});assert.ok(r.w<=800&&r.h<=200);assert.equal(r.w,320);assert.equal(r.h,200);});
test('impossible targets reject and release bitmap',async()=>{const before=closed;await assert.rejects(compress(new Blob([]),{target:50,width:0,height:0,mime:'image/png'}),/target/);assert.equal(closed,before+1);});
test('already compliant smaller original is reused',async()=>{const original=new Blob([new Uint8Array(1000)],{type:'image/jpeg'});const r=await compress(original,{target:1e6,width:0,height:0,mime:'image/jpeg'});assert.equal(r.blob,original);});

