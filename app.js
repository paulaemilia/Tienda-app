// 1. Importar la librería para crear aplicaciones Web
const express = require('express');

// 2. Crear una instancia de express
const app = express();

// 3. Definir el puerto
const PORT = 3000;

// --- CONFIGURACIÓN ---
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Lista simulada de productos
const listaProductos = [
  {
    nombre: "Laptop Pro",
    precio: 850,
    categoria: "computadores",
    imagen: "https://dummyimage.com/200x200/000/fff&text=Laptop"
  },
  {
    nombre: "PC Desktop Gamer",
    precio: 1200,
    categoria: "computadores",
    imagen: "https://dummyimage.com/200x200/000/fff&text=PC+Gamer"
  },
  {
    nombre: "Audífonos Sony",
    precio: 125,
    categoria: "perifericos",
    imagen: "https://dummyimage.com/200x200/000/fff&text=Audifonos"
  },
  {
    nombre: "Mouse ergonómico",
    precio: 50,
    categoria: "perifericos",
    imagen: "https://dummyimage.com/200x200/000/fff&text=Mouse"
  },
  {
    nombre: "Teclado Mecánico",
    precio: 80,
    categoria: "perifericos",
    imagen: "https://dummyimage.com/200x200/000/fff&text=Teclado"
  }
];

// --- RUTAS ---
app.get('/', (req, res) => {
  res.render('index', {
    productos: listaProductos,
    titulo: "Todos los Productos"
  });
});

// Ruta dinámica por categoría
app.get('/categoria/:nombreCategoria', (req, res) => {
  const cat = req.params.nombreCategoria;

  const productosFiltrados = listaProductos.filter(
    p => p.categoria === cat
  );

  res.render('index', {
    productos: productosFiltrados,
    titulo: cat.charAt(0).toUpperCase() + cat.slice(1)
  });
});

// Encender el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
