import { Request, Response } from "express";
import User from "../models/User";
import { findUser, loginService, verifyUser } from "../services/authService";
import { IUser } from "interfaces/User";
import { signinValidation } from "../validators/loginUserValidator";


export const login = async (req: Request, res: Response) => {
  const { password, email, username } = req.body;

  const { error } = signinValidation(req.body);
  if (error) return res.status(400).json(error.message);

  const user: IUser|null = await findUser(email, username)
  if(!user) return res.status(400).json("User not register");

  const verify = await verifyUser(user);
  if(!verify) return res.status(400).json("User not permissions or not validated");

  const tokenResponse = await loginService(user, password)
  if (!tokenResponse) return res.status(400).json('Invalid email or password');

  res.header("Authorization", tokenResponse).json(tokenResponse);
};

export const getAllUser = async (req: Request, res: Response) => {
  const users = await User.find();
  res.send(users);
};
