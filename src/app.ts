import morgan from 'morgan';
import express, { Application } from 'express';
import cors from 'cors'
import authRoutes from './routes/auth.routes'
import productRoutes from './routes/product.routes'
import swaggerDocs from './swaggerOptions';


const app: Application = express();

// settings
app.set('port', 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
swaggerDocs(app);


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

// routes
app.use('/api/auth',authRoutes);
app.use('/api/product',productRoutes);


export default app;

