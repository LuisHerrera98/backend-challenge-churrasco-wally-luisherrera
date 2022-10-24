import { IProduct } from "interfaces/Product";
import Product from "../models/Product";

export const createService = async (data: IProduct): Promise<IProduct | null> => {
  try {
    const product: IProduct = new Product({
      ...data,
    });
    const savedProducto = await product.save();
    return savedProducto;
  } catch (error) {
    return null;
  }
};

export const getOneService = async (id: string): Promise<IProduct | null> => {
  try {
    const product = await Product.findOne({ _id: id });
    return product;
  } catch (error) {
    return null;
  }
};

export const getAllProducts = async (): Promise<IProduct[] | null> => {
  try {
    const products = await Product.find().sort({$natural:-1}).limit(9);
    return products;
  } catch (error) {
    return null;
  }
};
