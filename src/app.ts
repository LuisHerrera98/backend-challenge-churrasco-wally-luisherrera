import express, { Application } from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes'
import productRoutes from './routes/product.routes'
import cors from 'cors'
// Swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";


const app: Application = express();

// settings
app.set('port', 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
const specs = swaggerJsDoc(options);

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

// routes
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/api/auth',authRoutes);
app.use('/api/product',productRoutes);


export default app;

