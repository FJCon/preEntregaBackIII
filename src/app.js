import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import {addLogger, logger} from "./utils/logger.js";
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
logger.info("base de datos:", (process.env.MONGODB_HOST+process.env.MONGODB_NAME))
const connection = mongoose.connect(process.env.MONGODB_HOST+process.env.MONGODB_NAME)

//DOCUMENTACION DE API
const specs = swaggerJSDoc(swaggerOptions);

//MIDLEWARES
app.use('/apidocs',swaggerUiExpress.serve,swaggerUiExpress.setup(specs))
app.use(express.json());
app.use(cookieParser());

app.use(router)

app.listen(PORT,()=>logger.info(`Listening on ${PORT}`))

