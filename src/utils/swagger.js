import { dirname } from "path"

const swaggerOptions = {
    definition:{
        openapi: "3.0.1",
        info:{
            title:"Documentación de Adoptame",
            description:"API pensada para los endpoints de Adoptame"
        }
    },
    apis:[`${dirname}/docs/**/*.yaml`]
}

export default swaggerOptions