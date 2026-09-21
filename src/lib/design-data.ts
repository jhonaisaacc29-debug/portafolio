import serprovetServices from "@/assets/serprovet-servicios.jpeg.asset.json";
import serprovetCampaign from "@/assets/serprovet-campana.jpeg.asset.json";
import shakira from "@/assets/3av-shakira.jpeg.asset.json";
import dulcesBrici from "@/assets/dulces-brici.jpeg.asset.json";
import itakaru from "@/assets/itakaru.jpeg.asset.json";
import stickers from "@/assets/stickers-impermeables.jpeg.asset.json";
import mandiokita from "@/assets/mandiokita.jpeg.asset.json";

export const newDesignPieces = [
  { image: serprovetServices.url, title: "Serprovet / Los Colonos", category: "Pieza informativa" },
  { image: serprovetCampaign.url, title: "Serprovet / Los Colonos", category: "Comunicación comercial" },
  { image: shakira.url, title: "3AV. Traslados", category: "Publicidad digital" },
  { image: dulcesBrici.url, title: "Dulces Brici", category: "Identidad y comunicación" },
  { image: itakaru.url, title: "Agua Mineral Itakaru", category: "Publicidad digital" },
  { image: stickers.url, title: "Stickers impermeables", category: "Promoción" },
  { image: mandiokita.url, title: "Mandiokita", category: "Publicidad de producto" },
] as const;