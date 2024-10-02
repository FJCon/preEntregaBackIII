import { Router } from "express";
import generatePets from "../utils/mocks/petMock.js"

const router = Router();

router.get("/mockingpets", generatePets(100))
//PENDIENTE: Crear diccionario de errores al crear/modificar una user/pet

export default router;