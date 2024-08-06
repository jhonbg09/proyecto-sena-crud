import { data } from "../data/data";
import type { Product } from "../types";
export default function TableProducts({productos}) {
  return (
    <div className="w-full">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="p-3 mx-20">Producto</th>
            <th className="p-3 mx-20">Precio</th>
            <th className="p-3 mx-20">Disponible</th>
            <th className="p-3 mx-20">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((products: Product) => (
            <tr key={products.id} className="flex">
              <td className="p-3 mx-10">
                <p className="text-center">{products.nombre}</p>
              </td>
              <td className="p-3 mx-10">
                <p>${products.precio}</p>
              </td>
              <td className="p-3 mx-10">{products.disponibilidad}</td>
              {/* <td className="p-3 mx-10">{products.available}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
