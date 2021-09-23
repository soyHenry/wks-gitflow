# Arturito ✨

Instalar dependencias con `yarn` o `npm install`.

Levantar aplicación con `yarn start` o `npm start`.

## Descripción

Esta pequeña aplicación create-react-app con [TypeScript](https://typescriptlang.org) y otras bondades (como [TailwindCSS](https://tailwindcss.com), [swr](https://swr.vercel.app) y [prettier](https://prettier.io)) tiene una sección Planets que obtiene los planetas de Star Wars mediante la API libre (no necesita key) [SWAPI](https://www.swapi.it).

## Homework 👷

En grupos de 2, trabajar con una metodología Git Flow para cumplir 4 funcionalidades nuevas:

1. Juntos, arreglar la vista existente Planets para que no muestre solo 3 planetas sino todos los que recibe. Esta parte debería ser rápida pero para que puedan explorar juntos el código existente.
2. Integrante 1 debe completar la sección Spaceships, instrucciones incluidas.
3. Al mismo tiempo, en paralelo, integrante 2 debe completar la sección People, instrucciones incluidas.
4. [Si llegan.] Agregar una nueva sección similar a las anteriores que aproveche otro endpoint de la API (o se puede incluir info de otra API a sugerencia).

En todos los casos se debe trabajar en **ramas**, separando el trabajo en **commits pequeños**, con **PRs a main** que deben ser revisados por el otro integrante. ¡Lo normal es que haya varios comentarios! **Hacer las correcciones** que propone el compañero.


*Sugerencia:* aprovechar lo dado para armar las nuevas vistas con el mínimo código posible, evitando repetir código que no haga falta.

¡Seguir las **buenas prácticas** de las que hablamos! 👉🏼 https://gist.github.com/henry-labs/fde7766161fb098a8e4edc04cc4caa97


#### Advertencia al crear los PRs

Por default cuando hacen PRs de GitHub desde un fork este apuntará al repo original. Asegúrense de que sea desde su feature branch a su main, siempre dentro del repo forkeado. La forma más fácil de hacer esto es revisar cuando estén creando el PR que la URL sea `https://github.com/<SU USUARIO>/wks-gitflow/...` (y no el usuario del repo original, en este caso `soyHenry` ❌). La _base branch_ debe decir **solo** `main` (o `master`), como en la siguiente imagen.

![image](https://user-images.githubusercontent.com/14017665/128374474-bbc72f3f-1a0c-4a63-8185-7c0b6110e2ef.png)

