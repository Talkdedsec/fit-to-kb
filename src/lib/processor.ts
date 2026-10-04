export type Options={target:number;width:number;height:number;mime:string};
export async function compress(file:Blob,o:Options){
 const image=await createImageBitmap(file,{imageOrientation:'from-image'});
 try{const ow=image.width,oh=image.height,scale=Math.min(1,(o.width||ow)/ow,(o.height||oh)/oh,Math.sqrt(16000000/(ow*oh)));
 let w=Math.max(1,Math.floor(ow*scale)),h=Math.max(1,Math.floor(oh*scale));
 const c=document.createElement('canvas'),ctx=c.getContext('2d');if(!ctx)throw Error('canvas');
 const encode=(q:number)=>new Promise<Blob>((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(Error('encode')),o.mime,q));
 for(let attempt=0;attempt<45;attempt++){
 c.width=w;c.height=h;if(o.mime==='image/jpeg'){ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);}ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(image,0,0,w,h);
 let best:Blob|undefined;const high=await encode(.95);if(high.type!==o.mime)throw Error('format');
 if(high.size<=o.target)best=high;
 else if(o.mime!=='image/png'){const low=await encode(.15);if(low.size<=o.target){best=low;let l=.15,r=.95;for(let i=0;i<9;i++){const m=(l+r)/2,b=await encode(m);if(b.size<=o.target){best=b;l=m;}else r=m;}}}
 if(best){if(file.type===o.mime&&file.size<=o.target&&file.size<best.size&&w===ow&&h===oh)best=file;return {blob:best,w,h,ow,oh};}
 if(w===1&&h===1)break;const s=Math.min(w*.8/ow,h*.8/oh);w=Math.max(1,Math.floor(ow*s));h=Math.max(1,Math.floor(oh*s));await new Promise(r=>setTimeout(r,0));
 }throw Error('target');}finally{image.close();}
}
