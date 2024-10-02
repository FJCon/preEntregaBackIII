import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

const usersGenerator = (quantity) => {
    const users = [];

    for (let i = 0; i < quantity; i++) {
        const user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: bcrypt.hashSync('coder123', 10), 
            role: faker.helpers.arrayElement(['user', 'admin']), 
            pets: [],
        };

        users.push(user);
    }

    return users;
};

export default usersGenerator