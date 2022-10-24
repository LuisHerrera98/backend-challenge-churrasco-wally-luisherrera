import User from "../models/User";
import jwt from "jsonwebtoken";
import { IUser } from "interfaces/User";

export const loginService = async (
  user: IUser,
  password: string
): Promise<string | null> => {

  try {
    const correctPassword = await user.validatePassword(password);
    if (!correctPassword) return null;

    await User.findOneAndUpdate({ _id: user._id }, { lastLogin: new Date() });

    const token: string = jwt.sign(
      { _id: user?._id },
      process.env.TOKEN_SECRET || "tokentest"
    );
    return token;
  } catch (error) {
    return null;
  }
};

export const findUser = async (email: string | null, username: string | null): Promise<IUser | null> => {
  try {
    let user;
    if (email != null) {
      user = await User.findOne({ email: email });
    } else {
      user = await User.findOne({ username: username });
    }
    return user;
  } catch (error) {
    return null;
  }
};

export const verifyUser = async (user: IUser): Promise<void | boolean> => {
  if (user.role === "admin" && user.active === true) return true;
};
