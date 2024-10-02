import { Router } from "express";
import petsGenerator from "../utils/mocks/petMock.js"
import usersGenerator from "../utils/mocks/userMock.js"

const router = Router();

router.get("/mockingpets", petsGenerator(100))
//PENDIENTE: Crear diccionario de errores al crear/modificar una user/pet
router.get("/mockingusers", usersGenerator(50))


export default router;