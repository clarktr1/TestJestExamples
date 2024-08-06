const request = require('supertest');
const createDatabase = require('../db/db');
const app = require('../app');

let db;
let server;

beforeAll((done) => {
  //TODO: create the database and add it to the app.locals

  //Turn on the server
  server = app.listen(3000, () => {
    done();
  });
});

afterAll((done) => {
  //TODO: Close the server and the database
});


describe('API Tests', () => {

  test('Get all users', async () => {
    //TODO: Write code here

  });

  test('Get a single user', async () => {
    //TODO: Write code here

  });

  test('Create a new user', async () => {
    //TODO: Write code here

  });

  test('Create a new user with existing ID', async () => {
    //TODO: Write code here 

  });
});
