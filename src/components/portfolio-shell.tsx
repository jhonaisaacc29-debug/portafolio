import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { media } from "@/lib/media";

export const jhonaLogo = media("logojhona-actual.jpeg");
const links = [
  ["Inicio", "/"],
  ["Proyectos", "/proyectos"],
  ["Diseño", "/diseno-grafico"],
  ["Fotografía", "/fotografia"],
  ["Sobre mí", "/sobre-mi"],
  ["CV", "/cv"],
  ["Contacto", "/contacto"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center px-5 md:px-10">
        <Link to="/" className="min-w-0 truncate font-display text-xl uppercase md:text-2xl">
          Isaac Espinoza<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-6 font-mono text-[9px] uppercase lg:flex">
          {links.map(([label, to], index) => (
            <Link
              key={to}
              to={to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: to === "/" }}
            >
              <span className="mr-1 text-muted-foreground">0{index + 1}</span>
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="grid size-10 place-items-center lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background px-5 py-6 font-display text-[clamp(1.9rem,9vw,3.5rem)] uppercase leading-none lg:hidden">
          {links.map(([label, to], index) => (
            <Link
              key={to}
              to={to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: to === "/" }}
              onClick={() => setOpen(false)}
              className="grid grid-cols-[2rem_minmax(0,1fr)] border-b border-border py-3"
            >
              <span className="font-mono text-[9px] text-primary">0{index + 1}</span>
              <span className="min-w-0">{label}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
export function PageIntro({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="page-intro border-b border-foreground px-5 py-16 md:px-10 md:py-24">
      <span className="section-number animate-fade-in">{number} /</span>
      <h1 className="mt-5 max-w-6xl animate-fade-in font-display text-6xl uppercase leading-[.9] md:text-9xl">
        {title}
      </h1>
      <div className="mt-8 max-w-2xl animate-fade-in text-lg leading-relaxed">{children}</div>
    </section>
  );
}
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground px-5 py-12 text-background md:px-10">
      <div className="grid gap-12 md:grid-cols-2">
        <h2 className="font-display text-5xl uppercase leading-[.9] md:text-7xl">
          Isaac
          <br />
          Espinoza<span className="text-primary">.</span>
        </h2>
        <div className="font-mono text-[10px] uppercase leading-7 md:text-right">
          <p>Licenciado en Diseño Gráfico · Fotógrafo</p>
          <p>Encarnación, Paraguay</p>
          <Link to="/jhona-fotografia" className="mt-3 inline-flex items-center gap-2">
            Jhona Fotografía <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-background/20 pt-5 font-mono text-[9px] uppercase">
        <span>© 2026 Isaac Espinoza</span>
        <span>Portafolio personal</span>
      </div>
    </footer>
  );
}
