import { Product } from "models/Product";

export const filterProducts = (products: Product[], search: string, limit: number): Product[] => {
  const tempList = products.filter((item) => item.name.includes(search) || item.description.includes(search));
  return tempList.slice(0, limit);
}