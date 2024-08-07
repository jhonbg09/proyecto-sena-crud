import { useState } from "react";
import TableProducts from "./TableProducts";
import axios from "axios";
import Menu from "./Menu";


export default function Products() {
  const [productos, useProductos] = useState([]);
  async function getUser() {
    try {
      const { data } = await axios.get("http://localhost:3000/productos");
      useProductos(data);
    } catch (error) {
      console.error(error);
    }
  }

  getUser();

 

  return (
    <div className="justify-center h-full">
      <div className="w-full">
        <h2 className="uppercase">Productos</h2>
        <TableProducts productos={productos} />
      </div>
    </div>
  );
}
