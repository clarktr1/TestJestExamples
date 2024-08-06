const request = require('supertest');
const createDatabase = require('../db/db');
const app = require('../app');

let db;
let server;

beforeAll((done) => {
  db = createDatabase();
  app.locals.db = db;
  
  server = app.listen(3000, () => {
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    db.close((err) => {
      if (err) console.error('Error closing the database:', err);
      done();
    });
  });
});


describe('API Tests', () => {
  test('Get all users', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: "Lil" },
      { id: 2, name: "Aman" }
    ]);
  });

  test('Get a single user', async () => {
    const response = await request(app).get('/users/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ id: 1, name: "Lil" });

    const notFoundResponse = await request(app).get('/users/999');
    expect(notFoundResponse.statusCode).toBe(404);
    expect(notFoundResponse.text).toBe('User not found');
  });

  test('Create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ id: 3, name: "NewUser" });

    expect(response.statusCode).toBe(201);
    expect(response.text).toBe('User added');
  });

  test('Create a new user with existing ID', async () => {
    const response = await request(app)
      .post('/users')
      .send({ id: 1, name: "DuplicateUser" });

    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('User already exists');
  });
});
