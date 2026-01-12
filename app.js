// 1. Importar la librería para crear aplicaciones WEB
const express = require("express");

// 2. Crear una instancia de express (aplicación principal)
const app = express();

//3. Definir un puerto sobre el cual funciona nuestra app
const PORT = 3000;

// 4. Crear la primnera "Ruta" cuando el usuario ingresa a la raiz de nuestra app
app.get('/', (req,res)=> {
    res.send('<h1>Servidor de E-commerce iniciado </h1><p>NPM y Express funcionando')
});

// 5. Encender el servidor
app.listen(PORT, () => {
    console.log(`>>> Servidor corriendo en http://localhost:${PORT}`);
    console.log(` `);
});
