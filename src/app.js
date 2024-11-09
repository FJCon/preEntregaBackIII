import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import {dirname} from 'path';
import { config } from 'dotenv';
import router from './routes/index.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerOptions from './utils/swagger.js';


/*
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js'
*/


const app = express();
config();

const PORT = process.env.PORT||8080;
console.log("base de datos:", (process.env.MONGODB_HOST+process.env.MONGODB_NAME))
const connection = mongoose.connect(process.env.MONGODB_HOST+process.env.MONGODB_NAME)

//DOCUMENTACION DE API
const specs = swaggerJSDoc(swaggerOptions);

//MIDLEWARES
app.use('/apidocs',swaggerUiExpress.serve,swaggerUiExpress.setup(specs))
app.use(express.json());
app.use(cookieParser());

app.use(router)
/*app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);*/

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

