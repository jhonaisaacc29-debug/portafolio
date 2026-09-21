# Revisión final, optimización y preparación para producción

## Objetivo
Mantener la dirección editorial aprobada y pulir el portfolio completo: usar todo el material visual relevante, equilibrar la tipografía, mejorar movimiento e interacción, asegurar una adaptación real a cada pantalla y dejar una salida preparada para GitHub Pages bajo `/portafolio/`.

## Trabajo visual
- Incorporar las cinco imágenes de **Fierro Punta** como un nuevo caso de identidad visual, usando únicamente información visible y verificable: identidad, papelería, folleto, aplicación digital y publicidad exterior.
- Incorporar **SANBER**, **LB Tienda**, **Stickers impermeables**, **El último campeón** y **Anderson Paul** al archivo de diseño gráfico con títulos descriptivos basados en el contenido visible, sin atribuir clientes, fechas o servicios no confirmados.
- Mantener completas las piezas gráficas mediante proporciones intrínsecas y `contain`; reservar recortes artísticos para fotografías donde no se pierda información esencial.
- Hacer que Fierro Punta aparezca en el archivo de proyectos y tenga un caso individual con galería completa y visor.
- Reducir de forma global los titulares extremos de portada, archivo, diseño, fotografía, Jhona, contacto, perfil y casos, conservando la presencia editorial.
- Afinar los ritmos asimétricos para que las imágenes tengan igual o mayor protagonismo que el texto.

## Movimiento e interacción
- Mejorar las entradas escalonadas, reveals y microinteracciones de enlaces/proyectos sin añadir efectos pesados.
- Añadir un parallax mínimo y seguro solo a imágenes protagonistas, desactivado en pantallas táctiles y con reducción de movimiento.
- Convertir el visor actual en una navegación completa: anterior/siguiente, teclado, swipe táctil, contador y señal visual de continuidad.
- Mantener filtros navegables sin provocar desplazamiento horizontal de la página.
- Añadir feedback activo más claro a la navegación y transiciones coherentes entre estados.

## Responsive
- Revisar cuatro rangos: móvil, tablet, laptop y escritorio.
- Reorganizar realmente cada composición en lugar de limitarse a reducirla: portada, grillas, casos, fotografía, Jhona, contacto, CV y pie.
- Evitar palabras cortadas, botones fuera de pantalla y cualquier overflow horizontal accidental.
- Limitar alturas de imagen con proporciones estables para evitar saltos durante la carga.

## Rendimiento y limpieza
- Aplicar lazy loading y decodificación asíncrona fuera del primer viewport; preservar carga prioritaria de la portada.
- Mantener los archivos originales nítidos y usar dimensiones/proporciones correctas sin recomprimir destructivamente.
- Eliminar componentes, imports, recursos duplicados y dependencias solo después de comprobar que no tienen consumidores.
- Mantener los metadatos únicos de todas las páginas y completar los del nuevo caso.

## GitHub Pages
- Crear una salida de producción estática compatible con la ruta base `/portafolio/`, incluyendo todas las rutas conocidas y los casos de proyecto.
- Hacer que navegación, favicon, CV e imágenes funcionen bajo esa ruta sin referencias locales rotas.
- Incluir los recursos necesarios en el repositorio/exportación; los punteros CDN actuales no serán la única dependencia de la versión para GitHub Pages.
- Añadir instrucciones de instalación y publicación para el repositorio indicado, sin ejecutar acciones de Git ni sobrescribir su historial.
- Verificar `npm install` y `npm run build` con la configuración final.

## Verificación final
- Ejecutar comprobaciones de tipos, lint y build de producción.
- Recorrer todas las páginas y cada caso en 390×844, 768×1024, 1092×639 y 1280×1800.
- Comprobar visualmente imágenes completas, proporciones, navegación, filtros, visor con botones/teclado/swipe, descarga de CV y enlaces externos.
- Confirmar ausencia de imágenes rotas, errores de consola, overflow horizontal, rutas inválidas y contenido inventado.

## Límite técnico
GitHub Pages es alojamiento estático y no ejecuta el servidor de TanStack Start. Se conservará la aplicación actual para Lovable y se añadirá una salida estática específica para GitHub Pages; no se convertirá el proyecto a otro framework ni se cambiará el diseño.
