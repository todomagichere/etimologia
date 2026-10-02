# etimologia.es

Juego diario gratuito para descubrir el origen de las palabras. En cada partida debes identificar el significado de las raíces que forman la palabra propuesta; al terminar, la aplicación muestra una definición breve, explica su formación y enlaza a la entrada correspondiente del Diccionario de la lengua española (DLE).

La aplicación está pensada para jugarse en español y funciona completamente en el navegador. No requiere cuentas, base de datos ni dependencias de npm. El entorno local se ejecuta con Docker.

## Características

- Palabra y reto deterministas por día.
- Raíces de origen griego, latino y de otras lenguas presentes en el español.
- Pista opcional con la definición de la palabra.
- Resultado con desglose de raíces, puntuación y enlace al DLE.
- Compartición mediante WhatsApp, Telegram, Facebook, X, Threads, LinkedIn y el menú nativo del dispositivo.
- Estadísticas locales de partidas, aciertos, media y actividad reciente.
- Tema automático según el sistema, con selector manual claro/oscuro.
- Eventos de Google Analytics para progreso del reto, consulta de ayuda y estadísticas, uso del DLE, tema y compartición.
- Metadatos SEO y GEO: datos estructurados, `robots.txt`, `sitemap.xml`, `llms.txt`, manifest y tarjeta social WebP.

## Ejecutar en local con Docker

### Requisitos

- Docker Engine o Docker Desktop.
- Docker Compose v2.

Desde la raíz del proyecto, construye e inicia el servicio:

```sh
docker compose up --build
```

Abre [http://localhost:8080](http://localhost:8080) en el navegador.

El contenedor sirve los archivos estáticos con Nginx. La carpeta del proyecto se monta en modo lectura, por lo que los cambios en HTML, CSS o JavaScript se reflejan al recargar el navegador sin reconstruir la imagen.

Para ejecutarlo en segundo plano:

```sh
docker compose up --build -d
```

Para detenerlo:

```sh
docker compose down
```

Si el puerto 8080 ya está ocupado, usa otro, por ejemplo:

```sh
PORT=8081 docker compose up --build
```

No abras `index.html` directamente: el contenedor debe servir la carpeta por HTTP para cargar correctamente los recursos, el favicon y las rutas absolutas.

## Estructura

```text
├── index.html          Interfaz, metadatos SEO y diálogos
├── app.js              Lógica del juego, tema, estadísticas y compartición
├── word-bank.js        Banco de palabras y datos etimológicos
├── styles.css          Diseño adaptable y temas claro/oscuro
├── Dockerfile           Imagen Nginx para el entorno local
├── compose.yaml         Servicio local con Docker Compose
├── .dockerignore        Archivos excluidos de la imagen
├── favicon.ico         Icono del sitio
├── social-card.webp    Imagen para previsualizaciones sociales
├── site.webmanifest    Datos de instalación web
├── robots.txt          Directivas para rastreadores
├── sitemap.xml         Índice de URL públicas
└── llms.txt            Resumen estructurado para asistentes de IA
```

## Contenido y reto diario

El reto se elige a partir de la fecha local y del banco de palabras. Para ampliar o corregir el contenido editorial, modifica `word-bank.js`; la interfaz y la lógica del juego permanecen separadas en `index.html`, `styles.css` y `app.js`.

Las definiciones mostradas en la aplicación son resúmenes educativos. El resultado incluye un enlace directo al DLE de la RAE para consultar la entrada lexicográfica oficial.

## Analítica

Además de la visita de página que registra GA4, la aplicación envía estos eventos personalizados: `help_viewed`, `help_started`, `statistics_viewed`, `answer_selected`, `challenge_completed`, `result_viewed`, `dictionary_opened`, `theme_changed`, `share_result` y `share_site`. Los eventos del reto solo incluyen métricas agregadas (posición de la raíz, si fue correcta y puntuación); no se envían respuestas textuales ni datos personales.

## Despliegue

Puede publicarse en cualquier alojamiento de archivos estáticos. La configuración SEO usa como URL canónica `https://etimologia.es/`; si se despliega bajo otro dominio, actualiza esa URL en `index.html`, `robots.txt`, `sitemap.xml` y `llms.txt`.

Tras el despliegue, registra el dominio en Google Search Console y Bing Webmaster Tools para solicitar la indexación.
