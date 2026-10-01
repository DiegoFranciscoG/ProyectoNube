# ProyectoNube · frontend

Interfaz en React 19 + Vite para el gestor de tareas: lista, crea, edita, marca como completadas y elimina tareas contra la API de [`../backend`](../backend) con axios.

```bash
npm ci
npm run dev       # http://localhost:5173 (la API debe correr en http://localhost:8080)
npm run build
npm run deploy    # publica dist/ en GitHub Pages (rama gh-pages)
```

La URL de la API está en `src/services/api.js`.
