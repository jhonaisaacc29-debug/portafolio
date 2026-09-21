# Portfolio de Isaac Espinoza

Portfolio profesional de Isaac Espinoza, Licenciado en Diseño Gráfico y fotógrafo. Presenta proyectos de identidad visual, diseño gráfico, fotografía y el emprendimiento propio Jhona Fotografía.

## Desarrollo local

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

La aplicación local estará disponible en la dirección indicada por Vite.

## Compilación de producción

```bash
npm run build
```

## Publicación en GitHub Pages

El repositorio incluye el workflow `.github/workflows/deploy-pages.yml`. Al publicar en la rama `main`, GitHub Actions:

1. instala las dependencias;
2. genera todas las páginas estáticas;
3. aplica el base path `/portafolio/`;
4. publica la carpeta estática `dist/client`.

En GitHub, seleccionar **Settings → Pages → Source → GitHub Actions**.

Para comprobar localmente esa variante:

```bash
npm run build:github
```

## Contenido y recursos

- Código fuente: `src/`
- Imágenes y CV portables: `public/media/`
- Rutas y casos de estudio: `src/routes/`
- Datos editoriales: `src/lib/portfolio-data.ts`, `design-data.ts` y `photo-data.ts`

Los recursos están incluidos en el repositorio y no dependen de rutas locales de Lovable.