import mongoose from "mongoose";
import {options, url} from '../consts'

const db = mongoose.connect(url, options)
  .then((db) => console.log("Database connected"))
  .catch((err) => console.error(err));

export default options