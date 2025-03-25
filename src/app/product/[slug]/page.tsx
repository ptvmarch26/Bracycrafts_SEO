import { products } from "@/data/MockProduct";

interface ProductDetailProps {
  params: { slug: string };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <p className="text-center text-red-500">Sản phẩm không tồn tại</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold mt-2">{product.price}</p>
    </div>
  );
}
