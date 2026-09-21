import { media } from "@/lib/media";

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

export const isaacProfile = media("isaac-perfil.jpeg");

export const projects: Project[] = [
  {
    slug: "teranet",
    title: "Teranet",
    category: "Identidad visual",
    description: "Sistema de identidad para una propuesta digital, presentado a través de marca, paleta, tipografía y aplicaciones.",
    coverImage: media("teranet-identidad.jpg"),
    images: [media("teranet-logo.png"), media("teranet-credenciales.jpg"), media("teranet-identidad.jpg")],
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
    coverImage: media("hause-acai-menu.jpg"),
    images: [media("hause-acai-menu.jpg")],
    tags: ["Publicidad", "Contenido digital"],
    featured: true,
    overview: "Diseño de menú comercial para presentar productos e información de compra.",
  },
  {
    slug: "tercera-avenida-traslados",
    title: "3AV. Traslados",
    category: "Diseño impreso",
    description: "Tarjeta informativa para un servicio de traslados.",
    coverImage: media("tercera-avenida.png"),
    images: [media("tercera-avenida.png"), media("3av-shakira.jpeg")],
    tags: ["Impresos", "Pieza gráfica"],
    featured: true,
    overview: "Piezas informativas y publicitarias para un servicio de traslados.",
  },
  {
    slug: "serprovet-los-colonos",
    title: "Serprovet / Los Colonos",
    category: "Diseño publicitario",
    description: "Piezas informativas y comerciales para comunicar servicios veterinarios y productos de nutrición animal.",
    coverImage: media("serprovet-servicios.jpeg"),
    images: [media("serprovet-servicios.jpeg"), media("serprovet-campana.jpeg")],
    tags: ["Publicidad", "Contenido digital"],
    featured: true,
    overview: "Comunicación visual aplicada a servicios veterinarios y nutrición animal.",
  },
  {
    slug: "am-asesoria-consultoria",
    title: "A&M Asesoría Consultoría",
    category: "Diseño impreso",
    description: "Tarjeta de presentación y pieza informativa de servicios.",
    coverImage: media("am-asesoria.png"),
    images: [media("am-asesoria.png")],
    tags: ["Identidad", "Impresos"],
    featured: false,
    overview: "Aplicación de identidad e información profesional en soporte impreso.",
  },
  {
    slug: "wiipand",
    title: "Wiipand",
    category: "Diseño impreso",
    description: "Aplicación de identidad en tarjeta de presentación.",
    coverImage: media("wiipand.png"),
    images: [media("wiipand.png")],
    tags: ["Identidad", "Impresos"],
    featured: false,
    overview: "Aplicación de identidad en una pieza de contacto profesional.",
  },
  {
    slug: "nandekuete-barberia",
    title: "Ñandekuete Barbería",
    category: "Diseño impreso",
    description: "Diseño de gift card aplicado a la identidad de la barbería.",
    coverImage: media("nandekuete.jpg"),
    images: [media("nandekuete.jpg")],
    tags: ["Gift card", "Impresos"],
    featured: true,
    overview: "Gift card diseñada como extensión de la identidad visual de la barbería.",
  },
  {
    slug: "fierro-punta",
    title: "Fierro Punta",
    category: "Identidad visual",
    description: "Sistema visual aplicado a papelería, soporte digital, folleto, objeto promocional y publicidad exterior.",
    coverImage: media("fierro-punta-identidad.jpeg"),
    images: [media("fierro-punta-identidad.jpeg"), media("fierro-punta-digital.jpeg"), media("fierro-punta-bolsa.jpeg"), media("fierro-punta-folleto.jpeg"), media("fierro-punta-carteleria.jpeg")],
    tags: ["Marca", "Identidad", "Aplicaciones"],
    featured: true,
    overview: "Identidad visual de Fierro Punta presentada mediante un sistema coherente de aplicaciones físicas y digitales.",
    concept: "Una construcción gráfica inspirada en el puente y el paisaje, reconocible en distintos formatos de comunicación.",
  },
];

export const designCategories = Array.from(new Set(projects.flatMap((project) => project.tags)));
