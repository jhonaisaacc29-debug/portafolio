import isaacProfileAsset from "@/assets/isaac-perfil.jpeg.asset.json";
import teranetLogoAsset from "@/assets/teranet-logo.png.asset.json";
import teranetCredentialsAsset from "@/assets/teranet-credenciales.jpg.asset.json";
import teranetIdentityAsset from "@/assets/teranet-identidad.jpg.asset.json";
import terceraAvenidaAsset from "@/assets/tercera-avenida.png.asset.json";
import amAsesoriaAsset from "@/assets/am-asesoria.png.asset.json";
import wiipandAsset from "@/assets/wiipand.png.asset.json";
import hauseAcaiAsset from "@/assets/hause-acai-menu.jpg.asset.json";
import nandekueteAsset from "@/assets/nandekuete.jpg.asset.json";
import serprovetServicesAsset from "@/assets/serprovet-servicios.jpeg.asset.json";
import serprovetCampaignAsset from "@/assets/serprovet-campana.jpeg.asset.json";
import shakiraAsset from "@/assets/3av-shakira.jpeg.asset.json";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  description: string;
  role?: string;
  coverImage: string;
  images: string[];
  tags: string[];
  featured: boolean;
  overview?: string;
  concept?: string;
};

export const isaacProfile = isaacProfileAsset.url;

export const projects: Project[] = [
  {
    slug: "teranet",
    title: "Teranet",
    category: "Identidad visual",
    description: "Sistema de identidad para una propuesta digital, presentado a través de marca, paleta, tipografía y aplicaciones.",
    coverImage: teranetIdentityAsset.url,
    images: [teranetLogoAsset.url, teranetCredentialsAsset.url, teranetIdentityAsset.url],
    tags: ["Marca", "Identidad", "Aplicaciones"],
    featured: true,
    overview: "Sistema de identidad visual desarrollado para una propuesta digital.",
    concept: "Una identidad organizada para comunicar tecnología, conexión y claridad.",
  },
  {
    slug: "hause-acai-menu",
    title: "Ha’use Açaí — Menú",
    category: "Diseño gráfico",
    description: "Pieza de menú comercial con información de productos, precios y canales de contacto.",
    coverImage: hauseAcaiAsset.url,
    images: [hauseAcaiAsset.url],
    tags: ["Publicidad", "Contenido digital"],
    featured: true,
    overview: "Diseño de menú comercial para presentar productos e información de compra.",
  },
  {
    slug: "tercera-avenida-traslados",
    title: "3AV. Traslados",
    category: "Diseño impreso",
    description: "Tarjeta informativa para un servicio de traslados.",
    coverImage: terceraAvenidaAsset.url,
    images: [terceraAvenidaAsset.url, shakiraAsset.url],
    tags: ["Impresos", "Pieza gráfica"],
    featured: true,
    overview: "Piezas informativas y publicitarias para un servicio de traslados.",
  },
  {
    slug: "serprovet-los-colonos",
    title: "Serprovet / Los Colonos",
    category: "Diseño publicitario",
    description: "Piezas informativas y comerciales para comunicar servicios veterinarios y productos de nutrición animal.",
    coverImage: serprovetServicesAsset.url,
    images: [serprovetServicesAsset.url, serprovetCampaignAsset.url],
    tags: ["Publicidad", "Contenido digital"],
    featured: true,
    overview: "Comunicación visual aplicada a servicios veterinarios y nutrición animal.",
  },
  {
    slug: "am-asesoria-consultoria",
    title: "A&M Asesoría Consultoría",
    category: "Diseño impreso",
    description: "Tarjeta de presentación y pieza informativa de servicios.",
    coverImage: amAsesoriaAsset.url,
    images: [amAsesoriaAsset.url],
    tags: ["Identidad", "Impresos"],
    featured: false,
    overview: "Aplicación de identidad e información profesional en soporte impreso.",
  },
  {
    slug: "wiipand",
    title: "Wiipand",
    category: "Diseño impreso",
    description: "Aplicación de identidad en tarjeta de presentación.",
    coverImage: wiipandAsset.url,
    images: [wiipandAsset.url],
    tags: ["Identidad", "Impresos"],
    featured: false,
    overview: "Aplicación de identidad en una pieza de contacto profesional.",
  },
  {
    slug: "nandekuete-barberia",
    title: "Ñandekuete Barbería",
    category: "Diseño impreso",
    description: "Diseño de gift card aplicado a la identidad de la barbería.",
    coverImage: nandekueteAsset.url,
    images: [nandekueteAsset.url],
    tags: ["Gift card", "Impresos"],
    featured: true,
    overview: "Gift card diseñada como extensión de la identidad visual de la barbería.",
  },
];

export const designCategories = Array.from(new Set(projects.flatMap((project) => project.tags)));
