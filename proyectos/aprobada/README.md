# Directorio ACE — Capítulo El Dorado

Prototipo React + Vite + TypeScript basado en el diseño visual aprobado.

## Ejecutar

```bash
npm install
npm run dev
```

## Incluye
- Portada blanca con foto, buscador y acentos rojos y dorados.
- Categorías, directorio filtrable, perfiles y enlaces de contacto.
- Negocios de demostración.
- Panel de ejemplo con creación/edición, categorías, destacados y borradores/publicación en memoria.

## Importante
- El panel es una **demostración sin autenticación** y no debe publicarse como panel administrativo real.
- Los datos se reinician al recargar. Antes de producción, conectar Supabase Auth, PostgreSQL, Storage y políticas RLS para que solo administradores autorizados puedan crear/editar negocios.
- Sustituir el símbolo provisional por el **SVG oficial** de ACE sin alterar sus proporciones, colores o composición.
- Las fotografías de demostración se cargan desde Unsplash. Sustituirlas por imágenes autorizadas y propias.
- La galería de imágenes por emprendimiento y enlaces permanentes requieren implementación al conectar Supabase.
- `public/referencia-aprobada.png` contiene la imagen de referencia aprobada; no es un recurso usado en el frontend.
