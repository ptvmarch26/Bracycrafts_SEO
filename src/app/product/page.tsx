import Link from "next/link";
import { products } from "@/data/MockProduct";

export default function ProductList() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Danh sách sản phẩm</h1>
      <ul className="mt-4">
        {products.map((product) => (
          <li key={product.slug} className="border p-2 my-2">
            <Link href={`/product/${product.slug}`}>
              <span className="text-blue-600 cursor-pointer">
                {product.name} - {product.price}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
