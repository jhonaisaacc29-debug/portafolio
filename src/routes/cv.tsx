import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/media";

export const Route = createFileRoute("/cv")({
  head: () => ({ meta: [
    { title: "Currículum | Isaac Espinoza" },
    { name: "description", content: "Formación y trayectoria profesional verificable de Isaac Espinoza." },
    { property: "og:title", content: "Currículum | Isaac Espinoza" },
    { property: "og:description", content: "Educación y experiencia de Isaac Espinoza en diseño gráfico y otros ámbitos laborales." },
    { property: "og:type", content: "profile" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: CvPage,
});

const education = [
  ["Finalizado", "Licenciatura en Diseño Gráfico", "Universidad Autónoma de Encarnación"],
];
const experience = [
  ["2025 — Actualidad", "Juan Román Prod — Laboratorio Fotográfico", "Atención y asesoramiento, edición y retoque, diseño y producción de piezas personalizadas, preparación de archivos y gestión comercial."],
  ["2024 — Actualidad", "Diseñador Gráfico Freelance", "Identidad visual, piezas para redes, contenido digital, fotografía, video, edición y comunicación de marca."],
  ["2021 / 2025", "Grafic Artes Imprenta", "Pasantía profesional de 200 horas y posterior colaboración en proyectos gráficos, diseño y preparación para impresión."],
];

function Timeline({items}:{items:string[][]}){return <div className="border-t border-foreground">{items.map(([year,title,detail])=><article key={`${year}-${title}`} className="grid gap-4 border-b border-foreground py-7 md:grid-cols-[12rem_1fr]"><span className="font-display text-4xl uppercase text-primary">{year}</span><div><h3 className="font-display text-3xl uppercase">{title}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{detail}</p></div></article>)}</div>}
function CvPage(){return <main><section className="cv-intro"><div><span className="section-number">05 / Currículum</span><h1>Experiencia<br/><i>y formación</i></h1></div><div><p>Diseñador gráfico especializado en identidad visual y contenido digital, con experiencia en fotografía y edición.</p><Button asChild variant="editorial"><a href={media("Isaac_Espinoza_CV.pdf")} target="_blank" rel="noreferrer" download>Descargar CV <Download/></a></Button></div></section><section className="grid gap-20 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-2"><div><span className="section-number">Educación</span><h2 className="my-7 font-display text-5xl uppercase">Formación</h2><Timeline items={education}/></div><div><span className="section-number">Experiencia</span><h2 className="my-7 font-display text-5xl uppercase">Trayectoria</h2><Timeline items={experience}/></div></section><section className="border-t border-foreground px-5 py-20 md:px-10"><span className="section-number">Habilidades</span><div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-display text-[clamp(2rem,6vw,5rem)] uppercase leading-none"><span>Diseño gráfico</span><span className="text-primary">Fotografía</span><span>Retoque fotográfico</span><span>Diseño impreso</span><span className="text-primary">Creación de contenido</span><span>Comunicación visual</span></div></section></main>}