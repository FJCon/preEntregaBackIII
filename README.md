# Entrega final - Backend III CoderHouse
## Descripción
Adoptme API es un proyecto backend que permite a usuarios interactuar con endpoints para consultar, crear, actualizar y eliminar información de mascotas, usuarios y adopciones. El objetivo es facilitar la administración de una plataforma de adopción de mascotas.

## Dockerización
La imagen de Docker para esta API está disponible en Docker Hub y puede descargarse con el siguiente comando:
```
docker pull fjcon/entrega-final-backend3
```

Para construir y ejecutar la imagen localmente:
```bash
docker build -t adoptmeimage .
docker run -p 8080:8080 adoptmeimage
```

## Link a la Imagen en Docker Hub
[Adoptme API en Docker Hub](https://hub.docker.com/r/fjcon/entrega-final-backend3)
