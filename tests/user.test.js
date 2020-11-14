const request = require('supertest');
const app = require('../server');


test('Should signup', async () => {
    await request(app).post('/api/registerUser')
        .set('Accept', 'application/json')
        .send({
            email : "supunrrajaisnghe@gmail.com",
            password : "test",
            cPassword : "test",
            fName : "supun"
        })
        .expect(200)
})

test('Should login', async () => {
    await request(app).post('/api/login')
        .set('Accept', 'application/json')
        .send({
            email : "supunrrajaisnghe@gmail.com",
            password : "test",
        })
        .expect(200)
})

test('Should get profile', async () => {
    await request(app).get('/api/user')
        .set('Accept', 'application/json')
        .set('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWUzOTExNTE4NDZkMzY1NGY5MmVkZCIsImVtYWlsIjoic3VwdW5yYWphaXNuZ2hlQGdtYWlsLmNvbSIsImlhdCI6MTYwNTI1NDYwNX0.ygiC49izrIxPIJwmkKRVqdHd0wR6_bswSegh7zqqBAI')
        .send({
            email : "supunrrajaisnghe@gmail.com",
            password : "test",
        })
        .expect(200)
})

test('Should logout', async () => {
    await request(app).get('/api/user/logout')
        .set('Accept', 'application/json')
        .set('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWUzOTExNTE4NDZkMzY1NGY5MmVkZCIsImVtYWlsIjoic3VwdW5yYWphaXNuZ2hlQGdtYWlsLmNvbSIsImlhdCI6MTYwNTI1NDYwNX0.ygiC49izrIxPIJwmkKRVqdHd0wR6_bswSegh7zqqBAI')
        .send({
            email : "supunrrajaisnghe@gmail.com",
            password : "test",
        })
        .expect(200)
})

