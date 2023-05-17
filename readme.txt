/------------------------ COMO VISUALIZAR EL PROYECTO ------------------------/

Opción 1 - Instalación en modo desarrollo

    1) Descarga el proyecto
    2) Utilizando una CMD, navega hasta la carpeta raiz del proyecto
    3) Ejecuta el comando "ng serve --open"

Opción 2 - Instalación en modo producción

    1) Descarga el proyecto
    2) Copia la carpeta "dist" a la carpeta publica de un servidor (En local se puede utilizar un servidor del tipo XAMPP) 
    3) Utiliza un navegador para acceder a la ruta del proyecto (Que usualmente sería la siguiente http://localhost/dist/angular-super-heroes)

Opción 3 - Instalación con Docker

    1) Descarga el archivo comprimido que contiene la imagen de Docker
    2) Utilizando una CMD, navega hasta donde tengas dicho archivo comprimido
    3) Ejecuta el siguiente comando "docker load -i angular-super-heroes.tar"
    4) Ejecuta el siguiente comando "docker run -d -it -p 80:80 angular-super-heroes" 
    5) Utilizando un navegador, accede a localhost (http://localhost)
    ***Nota*** Si tienes algún servicio ejecutandose en el puerto 80, tendras que apagarlo o utilizar otro puerto en el comando anterior.

/------------------------ COMO EJECUTAR LOS TESTS ------------------------/

    1) Instala el proyecto en modo desarrollo
    2) Utilizando una CMD, navega hasta la carpeta raiz del proyecto
    3) Ejecuta el comando "ng test"

/------------------------ GITHUB Y DOCKERHUB ------------------------/

    También es posible hacer un pull del proyecto desde mi github: https://github.com/Codemeacoffee/Angular-Super-Heroes

    O desde mi dockerhub: https://hub.docker.com/repositories/emmanuelcastromartel