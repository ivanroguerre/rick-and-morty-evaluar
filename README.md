# Prueba técnica Evaluar

## Pasos para desplegar el proyecto en un ambiente local:

1. Clonar este proyecto.
2. Moverse a la raíz del proyecto.
3. Cambiar a la rama `main` con `git checkout main`.
4. `npm install`.
5. `npm run dev`.

## Versiones

Este proyecto cuenta con dos versiones:

- `v1.0` que tiene una barra de búsqueda que consulta la API cada vez que hay un cambio (con un debounce).
- `v2.0` que tiene una barra de búsqueda que consulta la API cada vez que se presiona el botón `buscar`.

Se incluyeron dos versiones ya que al momento de realizar la prueba en la entrevista técnica se implemento
con la versión `v1.0` pero en la maqueta de Figma esta la versión `v2.0`. Para cambiar a la versión `v1.0`
se debe usar el comando: `git checkout v1.0`. Para ver la versión `v2.0` simplemente se debe usar la rama
`main` con sus cambios al día: `git checkout main`.

## Reporte lighthouse

Para generar el reporte lighthouse y aplicar las mejoras propuestas se siguieron estos pasos:

1. Se genero un build de la aplicación: `npm run build`
2. Se desplegó localmente. Se puede usar cualquier solución, p. Ej: Live Server en VSCode.
3. Se deshabilitaron todas las extensiones para evitar que se vean reflejadas en el reporte.
4. Se generó el reporte.

## NOTAS:

- ¿Por qué se incluyeron las fuentes tipográficas como se incluyeron? [Ver acá](https://v2.chakra-ui.com/community/recipes/using-fonts#option-1-install-with-npm).
- ¿Por qué se creó un cliente como capa de abstracción encima de `fetch`? [Ver acá](https://www.bennadel.com/blog/4179-building-an-api-client-with-the-fetch-api-in-javascript.htm)
