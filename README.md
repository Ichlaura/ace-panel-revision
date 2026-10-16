# ACE — Panel de revisión de prototipos

Un único proyecto para publicar las siete propuestas en Vercel. No necesita Supabase ni cuentas de evaluadores.

## Abrir en VS Code
1. Abre la carpeta `ace-panel-revision`.
2. Ejecuta `npm install`.
3. Ejecuta `npm run dev` (compila las siete propuestas y abre un servidor local).
4. Abre la URL indicada, normalmente http://localhost:4173.

## Publicar en Vercel
1. Sube **esta carpeta completa** a un repositorio nuevo de GitHub.
2. En Vercel selecciona Add New → Project → Import Repository.
3. Framework Preset: Other; Build Command: `npm run build`; Output Directory: `dist`; Install Command: `npm install`.
4. Deploy.
5. Comparte el enlace de Vercel. Cada tarjeta abre una versión navegable; cada prototipo también tiene URL propia bajo `/proyectos/NOMBRE/`.

## Notas
- Se incluye una sola copia de cada proyecto (se descartaron ZIP duplicados).
- Cada prototipo es independiente. Sus datos son demostrativos y no guardan cambios.
- El panel no recopila ni almacena comentarios; los participantes dan opiniones en vivo.
- El emblema ACE del panel es un marcador provisional; no sustituye al logotipo oficial.
- Las vistas previas de tarjetas son ilustrativas, no capturas reales de las páginas.
