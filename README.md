# Unit 7: Amazing Animals Quiz

Una web educativa, tierna e interactiva para practicar ingles antes de un examen de la **Unit 7: Amazing Animals**.

La idea es simple: la niña responde preguntas de animales, adjetivos, `was/were`, `there was/there were` y verbos en pasado. Al final, la web muestra cuantas respuestas tuvo buenas, cuantas debe repasar y un mensaje para motivarla a seguir aprendiendo.

---

## Que hace esta web

Esta aplicacion funciona como un quiz:

1. Muestra una pantalla de inicio bonita.
2. Tiene tarjetas con consejos de estudio.
3. Muestra una pregunta a la vez.
4. Cada pregunta tiene 4 opciones.
5. Cuando eliges una respuesta, la web pregunta al backend si esta correcta.
6. Al terminar, el backend calcula el resultado final.
7. La web muestra el porcentaje y un mensaje motivador.
8. Tambien guarda el mejor puntaje en el navegador.

---

## Como esta organizada

```text
project/
├── api/
│   └── index.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

---

## Explicado para Todo Público

Piensa que la web tiene dos partes:

### 1. La parte que ves

Esta parte esta en la carpeta `public/`.

Es como la mesa de juego:

- Muestra los botones.
- Muestra las preguntas.
- Muestra los colores.
- Muestra si vas avanzando.
- Muestra el resultado final.

Pero esta parte **no sabe las respuestas correctas**.

### 2. La parte secreta

Esta parte esta en la carpeta `api/`.

Es como la profesora que tiene la hoja con las respuestas:

- Guarda todas las preguntas completas.
- Sabe cual respuesta es correcta.
- Revisa si la respuesta elegida esta bien.
- Calcula el puntaje final.

Asi nadie puede mirar fácilmente las respuestas correctas desde el navegador.

---

## Archivos principales

### `public/index.html`

Es el esqueleto de la página.

Aqui están:

- La pantalla de inicio.
- El titulo del quiz.
- Las tarjetas de Study Tips.
- La zona donde aparece cada pregunta.
- La pantalla del resultado final.

### `public/styles.css`

Es la ropa bonita de la web.

Aqui están:

- Los colores.
- Los fondos suaves.
- Los botones grandes.
- Las tarjetas.
- El diseno para celular, tablet y computador.
- Las animaciones suaves.

### `public/script.js`

Es el cerebro de la parte visual.

Hace cosas como:

- Pedir las preguntas al backend.
- Mostrar una pregunta a la vez.
- Enviar la respuesta elegida al backend.
- Mostrar si la respuesta fue correcta o necesita practica.
- Pedir el resultado final.
- Guardar el mejor puntaje en `localStorage`.

Importante: este archivo **no tiene las respuestas correctas**.

### `api/index.js`

Es el backend serverless para Vercel.

Aqui están:

- Las preguntas completas.
- Las respuestas correctas.
- La revision de cada respuesta.
- El cálculo del resultado final.

Este archivo usa **Express**, pero no usa `app.listen()` cuando corre en Vercel. Vercel se encarga de ejecutar la funcion.

### `vercel.json`

Le dice a Vercel como ordenar las rutas:

- Las rutas `/api/...` van al backend.
- La web se sirve desde `public/`.
- Si alguien entra a la página principal, se muestra `index.html`.

### `package.json`

Guarda los comandos y dependencias del proyecto.

Dependencia principal:

- `express`

Comandos:

```bash
npm start
npm run dev
```

---

## Como funciona el quiz paso a paso

### Paso 1: Iniciar

La niña presiona:

```text
Start Quiz
```

Entonces `public/script.js` pide las preguntas:

```js
fetch("/api/questions")
```

El backend responde con preguntas, opciones y tema, pero sin respuesta correcta.

---

### Paso 2: Responder una pregunta

Cuando la niña elige una opción, el frontend envia:

```js
fetch("/api/answer")
```

Con un mensaje parecido a este:

```json
{
  "questionId": 1,
  "selectedAnswer": "tiny"
}
```

El backend responde solamente:

```json
{
  "correct": true
}
```

O:

```json
{
  "correct": false
}
```

No devuelve la respuesta correcta.

---

### Paso 3: Terminar el quiz

Cuando se terminan las preguntas, el frontend envia todas las respuestas:

```js
fetch("/api/finish")
```

El backend calcula el resultado y responde algo como:

```json
{
  "totalQuestions": 48,
  "correctAnswers": 40,
  "percentage": 83,
  "message": "Very good! Keep practicing a little more."
}
```

El navegador muestra ese resultado de forma bonita.

---

## Endpoints del backend

### `GET /api/questions`

Devuelve las preguntas para jugar.

No devuelve respuestas correctas.

### `POST /api/answer`

Revisa una sola respuesta.

Recibe:

```json
{
  "questionId": 1,
  "selectedAnswer": "tiny"
}
```

Responde:

```json
{
  "correct": true
}
```

### `POST /api/finish`

Calcula el resultado final.

Recibe todas las respuestas y devuelve:

- Total de preguntas.
- Respuestas correctas.
- Porcentaje.
- Mensaje motivador.

---

## Mensajes motivadores

La web muestra un mensaje según el porcentaje:

| Porcentaje | Mensaje |
|---|---|
| 90% a 100% | Excellent! You are ready for the exam! |
| 70% a 89% | Very good! Keep practicing a little more. |
| 50% a 69% | Good effort! Review the difficult topics. |
| Menos de 50% | Don't worry! Try again and keep learning. |

---

## Como probar en tu computador

Primero instala las dependencias:

```bash
npm install
```

Luego ejecuta Vercel en modo local:

```bash
npx vercel dev
```

Abre en el navegador:

```text
http://localhost:3000
```

Para probar la API:

```text
http://localhost:3000/api/questions
```

---

## Como subir a Vercel

Opcion 1: desde la terminal

```bash
vercel
```

Opcion 2: desde GitHub

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a Vercel.
3. Crea un nuevo proyecto.
4. Conecta el repositorio.
5. Presiona Deploy.

---

## Como revisar que las respuestas no están expuestas

En el navegador:

1. Abre la web.
2. Presiona `F12` para abrir DevTools.
3. Entra a la pestana `Sources`.
4. Abre `public/script.js`.
5. Revisa que no hay un listado de respuestas correctas.
6. Entra a la pestana `Network`.
7. Abre la llamada `/api/questions`.
8. Verás preguntas y opciones, pero no verás `answer`.

Eso significa que las respuestas correctas están guardadas en el backend.

---

## Temas que practica

- Animals.
- Adjectives and opposites.
- Was / Were.
- There was / There were.
- Past simple regular verbs.
- Past simple irregular verbs.

---

## Objetivo educativo

Esta web ayuda a practicar de una manera tranquila, visual y entretenida. No busca presionar: busca que la nina pueda equivocarse, repasar y volver a intentarlo.

Aprender inglés es más fácil cuando se practica jugando.
