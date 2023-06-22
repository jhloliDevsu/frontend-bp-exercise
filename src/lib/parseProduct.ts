import { Product } from "models/Product";
import { getDateFromString } from "utils/getDateFromString";

export const parseProduct = (product: Product) => {
  const data: Product = {
    ...product,
    date_release: getDateFromString(product.date_release).toISOString(),
    date_revision: getDateFromString(product.date_revision).toISOString(),
  };

  return data;
}