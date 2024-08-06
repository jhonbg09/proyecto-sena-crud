import TableProducts from "./TableProducts";
import axios from "axios";

export default function Products() {

  async function getUser() {
    try {
      const {data} = await axios.get('http://localhost:3000/productos');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  getUser();

  return (
    <div className="justify-center my-8 w-4/5">
      <div className="text-center">
        <h2 className="uppercase">Productos</h2>
      </div>
      <TableProducts />
    </div>
  );
}
