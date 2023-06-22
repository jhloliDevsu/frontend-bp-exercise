import axios from "axios";
import { AUTHOR_ID, BASE_URL } from "constants/axiosConfig";
import { Product } from "models/Product";

const URL_PRODUCTS = "/bp/products";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorId: AUTHOR_ID,
  },
});

export const getProducts = async (): Promise<Product[]> => {
  const response = await instance.get<Product[]>(URL_PRODUCTS);

  return response.data;
}

export const getProductById = async (id: string): Promise<Product | undefined> => {
  const response = await instance.get<Product[]>(URL_PRODUCTS);
  const product = response.data.filter((item) => item.id === id);

  if (product.length === 0) return;

  return product[0];
}

export const createProduct = async (product: Product) => {
  await instance.post(URL_PRODUCTS, product);
}

export const updateProduct = async (product: Product) => {
  await instance.post(URL_PRODUCTS, product);
}

export const deleteProduct = async (id: string) => {
  const url = `${URL_PRODUCTS}?id=${id}`;
  await instance.delete(url);
}

export const checkProduct = async (id: string) => {
  const url = `${URL_PRODUCTS}/verification?id=${id}`;
  const response = await instance.get(url);

  return response.data;
}