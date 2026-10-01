# Reto 4 - AJAX Interactive

Pagina web interactiva que consume la API publica **JSONPlaceholder** usando **AJAX con jQuery**, mostrando los posts de forma dinamica con un diseno inspirado en un templo japones.

## Estructura del proyecto
Reto4_AJAX_Interactive/
|-- ajax.html # Pagina principal
|-- api-request.js # Logica AJAX con jQuery
|-- styles.css # Estilos personalizados
|-- README.md
|-- capturas/
|-- screenshot-1.png
|-- screenshot-2.png

text

## Como ejecutar

1. Clona o descarga este repositorio.
2. Abre el archivo `ajax.html` en tu navegador (Chrome, Firefox, Edge...).
3. Haz clic en el boton **Cargar Posts**.
4. Veras un indicador de carga y, al terminar, una cuadricula con los posts.

> No requiere servidor local: usa jQuery por CDN y una API publica con CORS habilitado.

## Que hace

- Realiza una peticion **GET** con `$.ajax()` a `https://jsonplaceholder.typicode.com/posts`.
- Maneja:
  - Exito -> renderiza los posts (titulo y cuerpo).
  - Error -> muestra mensajes segun el tipo (timeout, sin conexion, 404, 5xx).
  - `complete` -> oculta el spinner siempre.
- Incluye **loader animado** (spinner) y boton de **Limpiar**.
- Escapa el HTML de los datos recibidos para evitar inyecciones.

## Capturas

![Posts cargados](capturas/screenshot-1.png)
![Loader activo](capturas/screenshot-2.png)

## Tecnologias

- HTML5
- CSS3 puro (sin frameworks)
- JavaScript + jQuery 3.6.0
- API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Autor

Judit Giravent - Codigo Samurai - Curso Desarrollo Web Frameworks 3
'@ | Out-File -Encoding utf8 README.md