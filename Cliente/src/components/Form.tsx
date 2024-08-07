import { ChangeEvent, FormEvent } from "react";

export default function Form() {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Formulario enviando info")
    }

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
            />
            <label>Precio</label>
            <input 
            id="precio" 
            name="precio"
            type="text" 
            placeholder="$00.0"
            />
            
            <label>Cantidad</label>
            <input 
            id="cantidad" 
            name="cantidad"
            type=""
            placeholder="Cantidad"
            />

            <input  className="pointer-events-none m-8 uppercase bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 focus:outline-none focus:ring focus:ring-cyan-300 p-8" type="submit" value="Agregar Producto" />
          </form>
        </div>
      </div>
    </div>
  );
}
