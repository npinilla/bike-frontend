## Descripción

Aplicación frontend desarrollada en React que obtiene información sobre las estaciones de BikeSantiago desde una api, mostrando en un grafico las bicicletas utilizadas en el tiempo y una lista con todas las estaciones y su información correspondiente.

## Componentes
### API.js
Obtiene la información de la api usando 'Axios'.

### CanvasJS
Muestra la información recibida en un gráfico.

### CurrentUsage.js
Componente que se usa para desplegar los contadores numéricos.

### Home.js
Vista en la que se muestra los contadores numéricos de la utilización de la red y el gráfico, el que se puede desplegar por hora o por minuto.

### StationList.js
Vista que muestra todas las estaciones en orden alfabetico.

### StationDetail.js
Componente utilizado en StationList.js que muestra la información detallada de cada estación.

### NavBar.js
Barra de navegación que permite el cambio entre Home.js y StationList.js

## Como ejecutar

1. Crear carpeta para aplicación
  * mkdir name
  * cd name
  
2. Descargar aplicación de Github
  * git init
  * git remote add origin https://github.com/npinilla/bike-frontend.git
  * git pull origin master
  
3. Ejecutar el backend
  * Instrucciones en https://github.com/npinilla/bike-backend.git

4. Ejecutar aplicación
  * npm start

5. Usar aplicación en un navegador
  * ir a localhost:8080
