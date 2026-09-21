import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/portfolio-shell";
import { MediaLightbox } from "@/components/media-lightbox";
import { photoCategories, photography } from "@/lib/photo-data";

export const Route=createFileRoute('/fotografia')({head:()=>({meta:[{title:'Fotografía | Isaac Espinoza'},{name:'description',content:'Portafolio fotográfico real de eventos, sesiones, urbano y colaciones.'},{property:'og:title',content:'Fotografía | Isaac Espinoza'},{property:'og:description',content:'Historias capturadas en un instante por Isaac Espinoza.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:PhotographyPage});

function PhotographyPage(){
  const [category,setCategory]=useState("Todos");
  const [active,setActive]=useState<number|null>(null);
  const visible=category==="Todos"?photography:photography.filter(photo=>photo.category===category);
  const activePhoto=active===null?undefined:visible[active];
  return <main><PageIntro number="04" title="Fotografía">Historias capturadas en un instante. Una selección real de eventos, retratos y momentos cotidianos.</PageIntro><div className="flex gap-2 overflow-x-auto border-b border-border px-5 py-4 md:px-10">{photoCategories.map(item=><button key={item} onClick={()=>{setCategory(item);setActive(null)}} className={`shrink-0 border px-4 py-2 font-mono text-[10px] uppercase ${category===item?'border-primary bg-primary text-primary-foreground':'border-border'}`}>{item}</button>)}</div><section className="columns-1 gap-4 p-4 sm:columns-2 md:p-10 lg:columns-3">{visible.map((photo,index)=><button key={photo.src} onClick={()=>setActive(index)} className="group mb-4 block w-full break-inside-avoid overflow-hidden bg-muted text-left"><img src={photo.src} alt={photo.alt} loading="lazy" className="h-auto w-full transition duration-700 group-hover:scale-[1.025]"/><span className="block border-b border-border py-3 font-mono text-[10px] uppercase">{photo.category} / Jhona Fotografía</span></button>)}</section>{activePhoto&&<MediaLightbox images={visible.map(photo=>photo.src)} title={activePhoto.category} startIndex={active??0} onClose={()=>setActive(null)}/>}</main>;
}