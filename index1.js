const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For hashing passwords
const app = express();
const port = process.env.port;

app.use(cors({
    origin: 'http://127.0.0.1:3000', // The frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Include cookies if needed
  }));

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password:process.env.password,
  database:process.env.database,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// User signup
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send('All fields are required');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Server error');
      }
      res.status(201).send('User registered successfully');
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error during signup');
  }
});

// User login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('All fields are required');
  }

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }

    if (results.length === 0) {
      return res.status(401).send('Invalid email or password');
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send('Invalid email or password');
    }

    res.json({ message: 'Login successful' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Server is running on http://127.0.0.1:${port}`);
});


