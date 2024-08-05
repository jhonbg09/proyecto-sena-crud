
import  data  from '../data/data'
import type { Product } from '../types'
export default function TableProducts() {
  return (
    <div>
      <table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Available</th>
    </tr>
  </thead>
  <tbody>
    {data.map((products : Product) => (
      <tr key={data.id}>
        <td>{products.product}</td>
        <td>{products.price}</td>
        <td>{products.available}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}


