import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contacto")({
  head: () => ({ meta: [
    { title: "Contacto | Isaac Espinoza" },
    { name: "description", content: "Contactá a Isaac Espinoza para proyectos de diseño gráfico, fotografía y producción visual." },
    { property: "og:title", content: "Contacto | Isaac Espinoza" },
    { property: "og:description", content: "Creemos algo juntos desde Encarnación, Paraguay." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ContactPage,
});

function ContactPage(){
  const [error,setError]=useState("");
  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const name=String(form.get("name")||"").trim();
    const email=String(form.get("email")||"").trim();
    const message=String(form.get("message")||"").trim();
    if(!name||name.length>100||!/^\S+@\S+\.\S+$/.test(email)||message.length<10||message.length>1000){setError("Revisá el nombre, email y mensaje antes de continuar.");return;}
    setError("");
    const subject=encodeURIComponent(`Consulta de ${name}`);
    const body=encodeURIComponent(`${message}\n\nEmail: ${email}\nWhatsApp: ${String(form.get("whatsapp")||"").slice(0,30)}\nTipo: ${String(form.get("type")||"").slice(0,80)}`);
    window.location.href=`mailto:jhonaisaacc29@gmail.com?subject=${subject}&body=${body}`;
  }
  return <main><section className="bg-foreground px-5 py-20 text-background md:px-10 md:py-28"><span className="font-mono text-[10px] uppercase text-primary">07 / Contacto</span><h1 className="mt-8 font-display text-[clamp(4.8rem,14vw,12rem)] uppercase leading-[.78]">Creemos<br/>algo<br/><span className="text-primary">juntos.</span></h1></section><section className="grid gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24"><div><h2 className="font-display text-4xl uppercase">Isaac Espinoza</h2><p>Diseñador gráfico · Fotógrafo · Creador visual</p><p className="mt-2 text-sm text-muted-foreground">Encarnación, Paraguay</p><div className="mt-10 font-mono text-xs uppercase leading-8"><a href="mailto:jhonaisaacc29@gmail.com">Email →</a><br/><a href="https://wa.me/595982946365" target="_blank" rel="noreferrer">WhatsApp →</a><br/><a href="https://www.instagram.com/df_jhona/" target="_blank" rel="noreferrer">Instagram →</a></div></div><form onSubmit={submit} className="grid gap-5">{[["name","Nombre","text"],["email","Email","email"],["whatsapp","WhatsApp","tel"],["type","Tipo de proyecto","text"]].map(([name,label,type])=><label key={name} className="font-mono text-xs uppercase">{label}<input name={name} type={type} maxLength={name==="email"?255:100} required={name==="name"||name==="email"} className="mt-2 h-12 w-full border-b border-foreground bg-background px-1 font-sans text-base outline-none focus:border-primary"/></label>)}<label className="font-mono text-xs uppercase">Mensaje<textarea name="message" required minLength={10} maxLength={1000} rows={5} className="mt-2 w-full border border-foreground bg-background p-3 font-sans text-base outline-none focus:border-primary"/></label>{error&&<p role="alert" className="text-sm text-primary">{error}</p>}<Button type="submit" variant="editorial" className="justify-self-start">Enviar mensaje</Button></form></section></main>;
}