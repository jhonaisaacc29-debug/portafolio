import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/portfolio-data";
import { MediaLightbox } from "@/components/media-lightbox";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/proyectos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} | Isaac Espinoza` : "Proyecto no disponible | Isaac Espinoza" },
    { name: "description", content: loaderData?.description ?? "Proyecto visual de Isaac Espinoza." },
    { property: "og:title", content: loaderData ? `${loaderData.title} | Isaac Espinoza` : "Proyecto no disponible" },
    { property: "og:description", content: loaderData?.description ?? "Proyecto visual de Isaac Espinoza." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const [active,setActive]=useState<number|null>(null);
  return <main><section className="grid min-h-[70svh] border-b border-border md:grid-cols-12"><div className="flex flex-col justify-between p-5 py-12 md:col-span-5 md:p-10 md:py-20"><Link to="/proyectos" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase"><ArrowLeft className="size-3"/> Volver al archivo</Link><div className="mt-20"><span className="section-number">{project.category}</span><h1 className="mt-4 font-display text-6xl uppercase leading-[.86] md:text-8xl">{project.title}</h1><p className="mt-7 max-w-md leading-relaxed">{project.description}</p></div><div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-5 font-mono text-[10px] uppercase"><div><span className="text-muted-foreground">Año</span><p>{project.year ?? "No especificado"}</p></div><div><span className="text-muted-foreground">Rol</span><p>{project.role ?? "No especificado"}</p></div></div></div><div className="bg-muted md:col-span-7"><img src={project.coverImage} alt={`Portada del proyecto ${project.title}`} className="h-full min-h-[50svh] w-full object-contain"/></div></section><section className="px-5 py-16 md:px-10 md:py-24"><div className="mb-12 grid gap-4 md:grid-cols-2"><div><span className="section-number">Material disponible</span><h2 className="mt-3 font-display text-5xl uppercase md:text-7xl">Resultado</h2></div><p className="max-w-lg text-sm leading-relaxed md:pt-8">Se muestran las piezas finales proporcionadas. Seleccioná una imagen para verla completa y recorrer el proyecto.</p></div><div className="grid items-start gap-7 md:grid-cols-12">{project.images.map((image,index)=><Reveal key={image} className={index%3===0?'md:col-span-8':'md:col-span-4'}><button type="button" onClick={()=>setActive(index)} className="group block w-full bg-muted"><img src={image} alt={`${project.title} — pieza ${index+1}`} className="h-auto max-h-[90svh] w-full object-contain transition duration-700 group-hover:scale-[1.015]"/></button></Reveal>)}</div></section>{active!==null&&<MediaLightbox images={project.images} title={project.title} startIndex={active} onClose={()=>setActive(null)}/>}</main>
}