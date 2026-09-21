import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jhonaLogo } from "@/lib/media";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Isaac Espinoza" },
      {
        name: "description",
        content:
          "Contactá a Isaac Espinoza para proyectos de diseño gráfico, fotografía y producción visual.",
      },
      { property: "og:title", content: "Contacto | Isaac Espinoza" },
      { property: "og:description", content: "Creemos algo juntos desde Encarnación, Paraguay." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <section className="contact-hero">
        <span className="font-mono text-[10px] uppercase text-primary">Contacto</span>
        <h1>
          Creemos
          <br />
          algo
          <br />
          <span className="text-primary">juntos.</span>
        </h1>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <span className="font-mono text-xs uppercase text-primary">Contacto</span>
            <h2 className="mt-4 font-display text-4xl uppercase md:text-5xl">Isaac Espinoza</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Licenciado en Diseño Gráfico · Fotógrafo
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Encarnación, Paraguay</p>

            <div className="mt-10 grid gap-5 font-mono text-xs uppercase">
              <a
                href="mailto:jhonisaacc29@gmail.com"
                className="group grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-2 border-b border-foreground py-4 sm:gap-3"
              >
                <span>Correo electrónico</span>
                <span className="min-w-0 break-all text-right text-muted-foreground group-hover:text-primary">
                  jhonisaacc29@gmail.com →
                </span>
              </a>
              <a
                href="https://wa.me/595982946365"
                target="_blank"
                rel="noreferrer"
                className="group grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-2 border-b border-foreground py-4 sm:gap-3"
              >
                <span>WhatsApp</span>
                <span className="text-right text-muted-foreground group-hover:text-primary">
                  +595 982 946365 →
                </span>
              </a>
              <a
                href="https://www.instagram.com/df_jhona/"
                target="_blank"
                rel="noreferrer"
                className="group grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-2 border-b border-foreground py-4 sm:gap-3"
              >
                <span>Instagram</span>
                <span className="text-right text-muted-foreground group-hover:text-primary">
                  @df_jhona →
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="max-w-md text-balance font-sans text-xl text-muted-foreground md:text-2xl">
              Hablemos y transformemos tu idea en una propuesta visual. Diseño identidad, creo
              imágenes y desarrollo proyectos con dirección estética coherente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-5 py-20 text-background md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <span className="font-mono text-xs uppercase text-primary">Emprendimiento propio</span>
            <h2 className="mt-4 font-display text-4xl uppercase md:text-6xl">Jhona Fotografía</h2>
            <p className="mt-5 max-w-md text-background/70">
              Proyecto personal de Isaac Espinoza. Fotografía, edición y producción visual para
              eventos, sesiones y contenido.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                variant="editorialOutline"
                className="border-background bg-background text-foreground"
              >
                <a
                  href="https://luzohinggins.github.io/jhonafotografia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar web <ExternalLink />
                </a>
              </Button>
              <Button
                asChild
                variant="editorialOutline"
                className="border-background bg-transparent text-background"
              >
                <a href="https://www.instagram.com/df_jhona/" target="_blank" rel="noreferrer">
                  Ver Instagram <ExternalLink />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid place-items-center bg-primary p-8">
            <img
              src={jhonaLogo}
              alt="Logo original de Jhona Diseño y Fotografía"
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
