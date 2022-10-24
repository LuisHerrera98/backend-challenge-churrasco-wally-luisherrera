#  CHALLENGE CHURRASCO WALLY BACKEND (apis)
Proyecto de Login de un usuario, se valida si esta activo y que rol tiene. CRUD de productos, listar todos los productos si el usuario esta logueado y tiene el token, crear productos y manejo de errores. Basado en el Challenge Churrasco / Wally -- CRUD de Productos.

Este proyecto esta desarrollado con: Nodejs, Express, Typescript, MongoDB, JWT
Para la conexion con la db: moongoose
Para el testing de las apis: Jest y SuperTest
Para la documentacion: Swagger (prueba de los usuarios) / Readme
Para las validaciones: Joi Js 

## Instalación
### Paso 1
**1 LINK DEL REPO**. 

    git clone https://github.com/LuisHerrera98/backend-challenge-churrasco-wally-luisherrera

### Paso 2
#### Crear el archivo .env a base del .env.example

### COMANDOS
1- generar la carpeta dist

    npm install

2- generar la carpeta dist

    npm run tsc

3- Correr el proyecto y la interfaz de swagger

    npm run dev

4- Correr los test

    npm run test

### RUTAS / APIS 
#### Usuario
Login del usuario
POST:
    localhost:3000/api/auth/login

Listar Usuarios
GET:
    localhost:3000/api/auth/users

#### Productos  (Necesita el token)
header: Authorization :  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMzI4OTEwMmE0YjUzMDhjODAzNDkiLCJpYXQiOjE2NjYyODkwNjd9.RQ3FwbETA6xk9exVD0uu6RAqPV8wv1-YzhMwxU1avXc

Listar los productos
GET:
    localhost:3000/api/product

Crear producto:
POST:
    localhost:3000/api/product/create
    
Filtrar producto por id:
GET:
    localhost:3000/api/product/ (_id)
