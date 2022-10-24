import dotenv from "dotenv";
dotenv.config();

const { DATABASE_USER, DATABASE_PASSWORD, MONGODB_URI } = process.env;

export const options = {
  user: DATABASE_USER,
  pass: DATABASE_PASSWORD,
  authSource: "admin",
};

export const url = `mongodb://${MONGODB_URI}`;
