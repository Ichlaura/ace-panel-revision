import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
fs.rmSync(path.join(root,'dist'),{recursive:true,force:true});
fs.mkdirSync(path.join(root,'dist','proyectos'),{recursive:true});
for(const slug of ['aprobada','blanca','colores','profesional','tres','opciones','original']) {
  console.log('Compilando '+slug);
  execFileSync(process.execPath,[path.join(root,'node_modules/vite/bin/vite.js'),'build','--base',`/proyectos/${slug}/`,'--outDir',path.join(root,'dist/proyectos',slug),'--emptyOutDir'],{cwd:path.join(root,'proyectos',slug),stdio:'inherit'});
}
for(const f of ['index.html','styles.css','app.js','propuestas.json']) fs.copyFileSync(path.join(root,f),path.join(root,'dist',f));
