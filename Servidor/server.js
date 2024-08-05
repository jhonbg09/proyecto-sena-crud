const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos MySQL |    nombre      |usuario|contraseña
const sequelize = new Sequelize('productos_sena_crud', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
});

// Definir un modelo (crear tablas)
const producto = sequelize.define('producto', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    disponibilidad: {
        type: DataTypes.STRING,
        allowNull: false,
    }},{
    timestamps: false, //desactivar la creacion de las columnas "CreateAt" y "UpdateAt"
});

// Sincronizar el modelo con la base de datos
sequelize.sync().then(() => {
    console.log('Tablas creadas');
}).catch(err => {
    console.error('Error al crear tablas', err);
});

// Ruta principal del proyecto
app.get('/', (req, res) => {
    res.send('Hola Mundo'); 
});
//

// Ruta para obtener todos los productos
app.get('/productos', async (req, res) => {
    const productos = await producto.findAll();
    res.json(productos);
});

// Ruta para crear un nuevo producto
app.post('/productos', async (req, res) => {
    try {
        const nuevoProducto = await producto.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Ruta para eliminar un producto
app.delete('/productos/:id', async (req, res) => {
    try {
        const eliminarProducto = await producto.findByPk(req.params.id);
        if (eliminarProducto) {
            await eliminarProducto.destroy();
            res.status(204).send();
        } else {
            res.status(400).json({error: 'Producto no encontrado'});
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

//Ruta para editar un producto
app.put('/productos/:id', async (req, res) =>{
    try {
        const editarProducto = await producto.findByPk(req.params.id);
        if (editarProducto) {
            await editarProducto.update(req.body);
            res.json(editarProducto);
        } else {
            res.status(400).json({error: 'Producto no encontrado'});
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
