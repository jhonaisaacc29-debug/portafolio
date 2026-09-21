# Revisión técnica responsive y reemplazo del CV

## Objetivo
Conservar el diseño editorial actual mientras se corrigen problemas reales de adaptación, especialmente el solapamiento de proyectos en móvil, y sustituir el CV por el PDF adjunto exacto.

## Implementación
1. **Diagnóstico responsive**
   - Revisar todas las páginas y componentes compartidos en los anchos solicitados: 375, 390, 414, 768, 1024, 1280 y 1440 px.
   - Detectar desbordes, elementos superpuestos, alturas rígidas, textos largos, imágenes mal contenidas y controles táctiles incómodos.

2. **Proyectos en móvil**
   - Corregir la estructura de cada proyecto para que imagen, título y categoría ocupen flujo normal y altura automática.
   - Ajustar columnas, anchos mínimos, separación, saltos de línea y proporciones sin ocultar contenido ni añadir espacios artificiales.
   - Aplicar la misma solución a la portada y al archivo completo de proyectos.

3. **Resto del sitio**
   - Afinar header, hero, perfil, diseño, fotografía, casos de estudio, experiencia/CV, Jhona, contacto y footer.
   - Mantener colores, tipografías, contenido, estilo y animaciones; conservar la reducción de movimiento.
   - Evitar scroll horizontal y asegurar que enlaces, botones e imágenes sean utilizables con mouse y tacto.

4. **CV oficial**
   - Verificar tamaño, páginas y contenido básico del PDF adjunto sin modificarlo.
   - Reemplazar el archivo anterior por el adjunto exacto dentro de los archivos publicados por GitHub Pages.
   - Unificar la referencia del botón y eliminar referencias antiguas para que el PDF real quede incluido en el build.

5. **Validación de producción**
   - Ejecutar comprobaciones de TypeScript, lint y builds normal/GitHub Pages.
   - Probar visualmente todas las páginas en los siete anchos pedidos, incluyendo navegación móvil, proyectos, descarga del CV, imágenes y consola.
   - Confirmar que el PDF servido después del build coincide en tamaño y contenido con el adjunto.

## Entrega y GitHub
- Revisar el conjunto final de cambios y dejarlo listo para sincronizar con el repositorio conectado.
- El entorno de Lovable gestiona el historial del proyecto y no permite ejecutar manualmente `git commit` o `git push`; la entrega quedará guardada en el proyecto para que Git Sync la envíe al repositorio conectado.
