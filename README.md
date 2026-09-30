# etimologia.es

Juego diario gratuito para descubrir el origen de las palabras. En cada partida debes identificar el significado de las raíces que forman la palabra propuesta; al terminar, la aplicación muestra una definición breve, explica su formación y enlaza a la entrada correspondiente del Diccionario de la lengua española (DLE).

La aplicación está pensada para jugarse en español y funciona completamente en el navegador. No requiere cuentas, servidor, base de datos ni dependencias de npm.

## Características

- Palabra y reto deterministas por día.
- Raíces de origen griego, latino y de otras lenguas presentes en el español.
- Pista opcional con la definición de la palabra.
- Resultado con desglose de raíces, puntuación y enlace al DLE.
- Compartición mediante WhatsApp, Telegram, Facebook, X, Threads, LinkedIn y el menú nativo del dispositivo.
- Estadísticas locales de partidas, aciertos, media y actividad reciente.
- Tema automático según el sistema, con selector manual claro/oscuro.
- Metadatos SEO y GEO: datos estructurados, `robots.txt`, `sitemap.xml`, `llms.txt`, manifest y tarjeta social WebP.

## Ejecutar en local

Solo necesitas un servidor HTTP estático. Desde la raíz del proyecto:

```sh
python3 -m http.server 8080
```

Abre después [http://localhost:8080](http://localhost:8080) en el navegador.

No abras `index.html` directamente: servir la carpeta por HTTP permite cargar correctamente los recursos, el favicon y las rutas absolutas.

## Estructura

```text
├── index.html          Interfaz, metadatos SEO y diálogos
├── app.js              Lógica del juego, tema, estadísticas y compartición
├── word-bank.js        Banco de palabras y datos etimológicos
├── styles.css          Diseño adaptable y temas claro/oscuro
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

## Despliegue

Puede publicarse en cualquier alojamiento de archivos estáticos. Esta copia está configurada para GitHub Pages en `https://todomagichere.github.io/etimologia/`; si se despliega bajo otro dominio, actualiza esa URL en `index.html`, `app.js`, `robots.txt`, `sitemap.xml` y `llms.txt`.

Tras el despliegue, registra el dominio en Google Search Console y Bing Webmaster Tools para solicitar la indexación.
