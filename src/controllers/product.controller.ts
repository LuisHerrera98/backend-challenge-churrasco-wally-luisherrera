import { Request, Response } from "express";
import { createProductValidation } from "../validators/createProductValidator";
import { createService, getOneService, getAllProducts } from "../services/productService"

export const create = async (req: Request, res: Response) => {

  const {error} = createProductValidation(req.body);
  if (error) return res.status(400).json(error.message);

  const product = await createService(req.body)
  if(!product) return res.status(400).json("error product create, verified fields")
  res.status(200).json(product);
};

export const getAll = async (req: Request, res: Response) => {
  const products = await getAllProducts();
  if(!products) return res.status(400).json("error can't get the products")
  res.status(200).json(products);
};

export const getOne = async (req: Request, res: Response) => {
  const {id} = req.params
  const product = await getOneService(id)
  if(!product) return res.status(400).json("product does not exist")
  res.status(200).json(product);
}
