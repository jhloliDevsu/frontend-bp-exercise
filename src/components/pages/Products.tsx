import React, { useEffect, useState } from "react";
import ProductsSkeleton from "components/templates/ProductsSkeleton";
import { getProducts } from "services";
import { Product } from "models/Product";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();

      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <ProductsSkeleton
      products={products}
    />
  )
}

export default Products;