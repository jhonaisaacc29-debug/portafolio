import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/portfolio-shell";

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
  ["2019", "Bachiller Científico", "Col. Nac. Dr. Felipe Molas López"],
  ["2022", "Técnico Superior en Diseño Gráfico", "Universidad Autónoma de Encarnación"],
  ["Actualmente", "Licenciatura en Diseño Gráfico", "Universidad Autónoma de Encarnación · 9.º semestre"],
];
const experience = [
  ["2018", "Carpintería Santa Inés", "Información de cargo pendiente"],
  ["2021", "Grafic Artes Imprenta", "Pasantía laboral de 200 horas realizando trabajos de diseño e impresión."],
  ["2023", "Corlez Construcciones", "Información de cargo pendiente"],
  ["2024", "Surtidor La Q-Eva", "Información de cargo pendiente"],
  ["Actualmente", "Freelance", "Diseño gráfico, fotografía, edición y creación de piezas visuales."],
];

function Timeline({items}:{items:string[][]}){return <div className="border-t border-foreground">{items.map(([year,title,detail])=><article key={`${year}-${title}`} className="grid gap-4 border-b border-foreground py-7 md:grid-cols-[12rem_1fr]"><span className="font-display text-4xl uppercase text-primary">{year}</span><div><h3 className="font-display text-3xl uppercase">{title}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{detail}</p></div></article>)}</div>}
function CvPage(){return <main><PageIntro number="06" title="Currículum">Trayectoria de formación y trabajo presentada sin porcentajes, cargos añadidos ni información no verificada.</PageIntro><section className="grid gap-20 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2"><div><span className="section-number">Educación</span><h2 className="my-7 font-display text-5xl uppercase">Formación</h2><Timeline items={education}/></div><div><span className="section-number">Experiencia</span><h2 className="my-7 font-display text-5xl uppercase">Trayectoria</h2><Timeline items={experience}/></div></section><section className="border-t border-foreground px-5 py-16 md:px-10"><span className="section-number">Habilidades</span><div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-display text-[clamp(2rem,6vw,5rem)] uppercase leading-none"><span>Graphic design</span><span className="text-primary">Photography</span><span>Photo editing</span><span>Print design</span><span className="text-primary">Content creation</span><span>Visual communication</span></div><p className="mt-12 font-mono text-[10px] uppercase text-muted-foreground">CV original en PDF — archivo pendiente de incorporar</p></section></main>}