const express = require('express');
const createDatabase = require('./db/db');
const app = express();
const port = 3000;

app.use(express.json());

db = createDatabase();

// Get all users
app.get('/users', (req, res) => {
  db.all("SELECT * FROM user", (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.get("SELECT * FROM user WHERE id = ?", [userId], (err, row) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if (!row) {
      res.status(404).send('User not found');
      return;
    }

    res.json(row);
  });
});

// Add a new user
app.post('/users', (req, res) => {
  const { id, name } = req.body;
  db.get("SELECT * FROM user WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if (row) {
      res.status(400).send('User already exists');
      return;
    }

    db.run("INSERT INTO user (id, name) VALUES (?, ?)", [id, name], (err) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.status(201).send('User added');
    });
  });
});


module.exports = app;
