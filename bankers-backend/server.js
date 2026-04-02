require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'db.json');
const QUERIES_DB_FILE = path.join(__dirname, 'db_queries.json');

// CORS: Allow production frontend, admin portal, and localhost dev servers
const allowedOrigins = [
  'https://next-bankers.vercel.app',      // production frontend
  'https://next-bankers-admin.vercel.app', // production admin portal
  'http://localhost:3000',                 // local frontend dev
  'http://localhost:3001',                 // local admin dev
];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g. mobile apps, curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize DB if not exists
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
}
if (!fs.existsSync(QUERIES_DB_FILE)) {
  fs.writeFileSync(QUERIES_DB_FILE, JSON.stringify([], null, 2));
}

// Validation helpers
const validateName = (name) => name && name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
const validatePhone = (phone) => phone && /^[6-9]\d{9}$/.test(phone);
const validateEmail = (email) => email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Get all applications
app.get('/api/applications', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  res.json(data);
});

// Post a new application
app.post('/api/applications', (req, res) => {
  const { name, phone } = req.body;
  if (!validateName(name)) {
    return res.status(400).json({ message: 'Invalid name. Only letters and spaces are allowed, minimum 2 characters.' });
  }
  if (!validatePhone(phone)) {
    return res.status(400).json({ message: 'Invalid phone number. Please enter a valid 10-digit number.' });
  }

  const newApp = {
    id: `APP-${Date.now()}`,
    ...req.body,
    status: 'Pending',
    date: new Date().toISOString().split('T')[0]
  };

  const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  data.unshift(newApp); // Add to the beginning
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

  res.status(201).json({ message: 'Application received', application: newApp });
});

// Update application status
app.patch('/api/applications/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  const appIndex = data.findIndex(a => a.id === id);

  if (appIndex === -1) {
    return res.status(404).json({ message: 'Application not found' });
  }

  data[appIndex].status = status;
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

  res.json({ message: 'Status updated', application: data[appIndex] });
});

// Get all queries
app.get('/api/queries', (req, res) => {
  const data = JSON.parse(fs.readFileSync(QUERIES_DB_FILE, 'utf8'));
  res.json(data);
});

// Post a new query
app.post('/api/queries', (req, res) => {
  const { name, email, phone } = req.body;
  if (!validateName(name)) {
    return res.status(400).json({ message: 'Invalid name. Only letters and spaces are allowed, minimum 2 characters.' });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }
  if (!validatePhone(phone)) {
    return res.status(400).json({ message: 'Invalid phone number. Please enter a valid 10-digit number.' });
  }

  const newQuery = {
    id: `QRY-${Date.now()}`,
    ...req.body,
    status: 'Unread',
    date: new Date().toISOString().split('T')[0]
  };

  const data = JSON.parse(fs.readFileSync(QUERIES_DB_FILE, 'utf8'));
  data.unshift(newQuery); // Add to the beginning
  fs.writeFileSync(QUERIES_DB_FILE, JSON.stringify(data, null, 2));

  res.status(201).json({ message: 'Query received', query: newQuery });
});

// Update query status
app.patch('/api/queries/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const data = JSON.parse(fs.readFileSync(QUERIES_DB_FILE, 'utf8'));
  const queryIndex = data.findIndex(q => q.id === id);

  if (queryIndex === -1) {
    return res.status(404).json({ message: 'Query not found' });
  }

  data[queryIndex].status = status;
  fs.writeFileSync(QUERIES_DB_FILE, JSON.stringify(data, null, 2));

  res.json({ message: 'Status updated', query: data[queryIndex] });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
