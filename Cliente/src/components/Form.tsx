export default function Form() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div>
        <div>
          <h2 className="text-center uppercase p-10">agregar nuevo producto</h2>
        </div>
        <div>
          <form action="" className="flex flex-col">
            <label>Producto</label>
            <input />
            <label>Precio</label>
            <input />
            <label>Cantidad</label>
            <input />
          </form>
        </div>
      </div>
    </div>
  );
}
