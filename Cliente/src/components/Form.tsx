import { ChangeEvent, FormEvent } from "react";
import { useState } from 'react';
import axios from 'axios'; //se necesita axios para enviar solicitudes http

export default function Form() {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState(""); 

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      axios.post("http://localhost:3000/productos", {
        nombre: producto,
        precio: precio,
        disponibilidad: cantidad,
      })
      .then(response => {
        console.log("Producto agregado:", response.data);
      })
      .catch(error => {
        console.error("Error al agregar el producto:", error);
      });
    };

  return (
    <div className="flex justify-center items-center mt-20 bg-cyan-100 w-1/2">
      <div>
        <div>
          <h2 className="text-center uppercase p-10 font-bold">agregar nuevo producto</h2>
        </div>
        <div className="p-2">
          <form 
          onSubmit={handleSubmit} 
          className="flex flex-col">
            <label>Producto</label>
            <input
              id="producto"
              name="producto"
              type="text"
              placeholder="Producto"
              onChange={(e) => setProducto(e.target.value)}
            />
            <label>Precio</label>
            <input 
            id="precio" 
            name="precio"
            type="text" 
            placeholder="$00.0"
            onChange={(e) => setPrecio(e.target.value)}
            />
            
            <label>Cantidad</label>
            <input 
            id="cantidad" 
            name="cantidad"
            type=""
            placeholder="Cantidad"
            onChange={(e) => setCantidad(e.target.value)}
            />

            <button  className="m-8 uppercase bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 focus:outline-none focus:ring focus:ring-cyan-300 p-8" type="submit">Agregar Producto</button>
          </form>
        </div>
      </div>
    </div>
  );
}
