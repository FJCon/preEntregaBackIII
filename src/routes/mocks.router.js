import { Router } from "express";

import petsGenerator from "../utils/mocks/petMock.js"
import usersGenerator from "../utils/mocks/userMock.js"

import User from '../dao/models/User.js';
import Pet from '../dao/models/Pet.js';

//--------------------------------------------------------

const router = Router();

router.get("/mockingpets", (req, res) =>{
    const pets = petsGenerator(100);
    res.status(200).json(pets);
})

router.get("/mockingusers", (req, res) =>{
    const pets = usersGenerator(50);
    res.status(200).json(users);
})

router.post('/generateData', async (req, res) => {
    const { usersQuanty, petsQuantity } = req.body;

    if(!usersQuanty || !petsQuantity) {
       return res.status(400).json({information: 'You must speficy both number of users and pets to generate'});
    }

    try{
        const pets = petsGenerator(petsQuantity);
        const users = usersGenerator(usersQuanty);

        const insertPets = await Pet.insertMany(pets);
        const insertUser = await User.insertMany(users);

        const message = `${usersQuanty} users and ${pets} pets were created successfully`

        res.status(200).json({information: message})

    }catch (error){
        res.status(500).json(
            {
                information: 'Something gone wrong during the process of creation of users and pets',
                details: error.message
            }
        );

    }
});


export default router;