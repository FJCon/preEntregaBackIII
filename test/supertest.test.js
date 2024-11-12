const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('AdoptMe Test', () => {

        // Users testing
        describe('Users Endpoints', () => {
            it('GET /users - It has to show all users', async () => {
                const response = await requester.get('/api/users');
                expect(response.status).to.equal(200);
                expect(response.body.payload).to.be.an('array');
            });
    
            it('GET /users/:uid - It has to show a user by an ID', async () => {
                const userId = '66fd5e6f760839f44ce5d564';
                const response = await requester.get(`/api/users/${userId}`);
                if (response.status === 404) {
                    expect(response.body).to.have.property('error', 'User not found');
                } else {
                    expect(response.status).to.equal(200);
                    expect(response.body.payload).to.have.property('_id', userId);
                }
            });
    
            it('PUT /users/:uid - It has to update a user', async () => {
                const userId = '66fd5e6f760839f44ce5d573';
                const updateData = { firstName: 'Isabel' };
                const response = await requester.put(`/api/users/${userId}`).send(updateData);
                expect(response.status).to.equal(200);
            });


    // Adoption testing
    describe('Adoptions Endpoints', () => {
        it('GET /adoptions - It has to show all adoptions', async () => {
            const response = await requester.get('/api/adoptions/');
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body.payload).to.be.an('array');
        });
    });

        it('GET /adoptions/:aid - It has to show an adoption by an ID', async () => {
            const adoptionId = '673096f40f50baab1e0e3b7c'; 
            const response = await requester.get(`/api/adoptions/${adoptionId}`);
            if (response.status === 404) {
                expect(response.body).to.have.property('error', 'Adoption not found');
            } else {
                expect(response.status).to.equal(200);
                expect(response.body.payload).to.have.property('_id', adoptionId);
            }
        });


    //Pets testing
    describe('Pets Endpoints', () => {
        it('GET /pets - It has to show all pets', async () => {
            const response = await requester.get('/api/pets');
            expect(response.status).to.equal(200);
            expect(response.body.payload).to.be.an('array');
        });

       it('POST /pets - It has to create a new pet', async () => {
            const newPet = { name: 'Firulais', specie: 'Dog', birthDate: '2020-01-01' };
            const response = await requester.post('/api/pets').send(newPet);
            expect(response.status).to.equal(200);
            expect(response.body.payload).to.have.property('_id');
        });

        it('PUT /pets/:pid - It has to update a pet', async () => {
            const petId = '66feb5805cb2b9be9779b97f';
            const updateData = { name: 'Firulais Actualizado' };
            const response = await requester.put(`/api/pets/${petId}`).send(updateData);
            expect(response.status).to.equal(200);
        });

        it('DELETE /pets/:pid - It has to delete a pet', async () => {
            const petId = '66feb5a5a3053e04fa146f99';
            const response = await requester.delete(`/api/pets/${petId}`);
            expect(response.status).to.equal(200);
        });
    });


    });

    // Session testing
    describe('Sessions Endpoints', () => {

        it('POST /sessions/login - It has to log in', async () => {
            const loginData = { email: 'john@example.com', password: '123456' };
            const response = await requester.post('/api/sessions/login').send(loginData);
            expect(response.status).to.equal(200);
        });
    });

    // Testing date generation
    describe('Mocking Data Endpoints', () => {
        it('GET /adoptions/mockingpets - It has to generate testing pets', async () => {
            const response = await requester.get('/api/mocks/mockingpets');
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
        });

        it('POST /adoptions/generateData - It has to generate testing data', async () => {
            const mockData = { users: 5, pets: 10 };
            const response = await requester.post('/api/mocks/generateData').send(mockData);
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('message', 'Data generated successfully');
        });
    });
})