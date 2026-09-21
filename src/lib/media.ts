const base = import.meta.env.BASE_URL;

export const media = (filename: string) => `${base}media/${filename}`;

export const jhonaLogo = media("logojhona-actual.jpeg");
