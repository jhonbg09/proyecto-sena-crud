import { data } from "../data/data";
import type { Product } from "../types";
export default function TableProducts() {
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
          {data.map((products: Product) => (
            <tr key={products.id} className="flex">
              <td className="p-3 mx-10">
                <p className="text-center">{products.product}</p>
              </td>
              <td className="p-3 mx-10">
                <p>${products.price}</p>
              </td>
              <td className="p-3 mx-10">{products.available}</td>
              <td className="p-3 mx-10">{products.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
