import { data } from "../data/data";
import type { Product } from "../types";

export default function TableProducts({ productos }) {
  return (
    <div className="w-full">
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="p-2 mx-7 text-center uppercase">Producto</th>
              <th className="p-2 mx-7 text-center uppercase">Precio</th>
              <th className="p-2 mx-7 text-center uppercase">Disponible</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((products: Product) => (
              <tr key={products.id} className="flex">
                <td className="p-3 mx-10">
                  <p className="text-left">{products.nombre}</p>
                </td>
                <td className="p-1 mx-10">
                  <p className="text-left">${products.precio}</p>
                </td>
                <td className="p-3 mx-10">
                  <p className="text-left">{products.disponibilidad}</p>
                </td>
                {/* <td className="p-3 mx-10">{products.available}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
