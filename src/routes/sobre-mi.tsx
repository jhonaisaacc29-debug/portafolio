import { createFileRoute } from "@tanstack/react-router";
import { isaacProfile } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";
export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí | Isaac Espinoza" },
      {
        name: "description",
        content:
          "Perfil, formación y experiencia de Isaac Espinoza, diseñador gráfico y fotógrafo.",
      },
      { property: "og:title", content: "Sobre mí | Isaac Espinoza" },
      {
        property: "og:description",
        content: "Diseño, fotografía y edición visual con dirección estética coherente.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
function Page() {
  return (
    <main>
      <section className="about-hero">
        <div>
          <span className="section-number">Perfil</span>
          <h1>
            Sobre
            <br />
            <i>Isaac</i>
          </h1>
          <Reveal>
            <p>
              Soy Isaac Espinoza, Licenciado en Diseño Gráfico y fotógrafo. Combino diseño,
              fotografía y edición para desarrollar propuestas con una dirección estética coherente
              y funcional.
            </p>
          </Reveal>
        </div>
        <div className="image-reveal">
          <img src={isaacProfile} alt="Retrato de Isaac Espinoza" decoding="async" />
          <span>Encarnación · Paraguay</span>
        </div>
      </section>
      <section className="about-statement">
        <Reveal>
          <h2>Ideas transformadas en propuestas visuales estratégicas.</h2>
        </Reveal>
        <p>
          Me especializo en identidad visual y contenido digital, apoyándome en fotografía, edición,
          composición y dirección de arte para crear comunicación con impacto y conexión.
        </p>
      </section>
      <section className="about-timeline">
        <span className="section-number">Formación y experiencia</span>
        <div>
          <Timeline
            year="Finalizado"
            title="Licenciatura en Diseño Gráfico"
            text="Universidad Autónoma de Encarnación"
          />
          <Timeline year="2024 — Actualidad" title="Diseñador Gráfico Freelance" />
          <Timeline
            year="2025 — Actualidad"
            title="Juan Román Prod"
            text="Laboratorio Fotográfico"
          />
        </div>
      </section>
    </main>
  );
}
function Timeline({ year, title, text }: { year: string; title: string; text?: string }) {
  return (
    <div className="grid gap-3 border-b border-foreground py-6 sm:grid-cols-[10rem_1fr]">
      <span className="font-mono text-xs text-primary">{year}</span>
      <div>
        <strong className="block uppercase">{title}</strong>
        {text && <span className="text-sm">{text}</span>}
      </div>
    </div>
  );
}
