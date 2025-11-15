const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Mock data storage (in-memory)
const applications = [];
const contacts = [];
const campusVisits = [];
const newsletters = [];

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running', timestamp: new Date().toISOString() });
});

// Applications
app.post('/api/applications', (req, res) => {
  const appNumber = `SEDC${new Date().getFullYear()}${String(applications.length + 1).padStart(5, '0')}`;
  const application = { ...req.body, applicationNumber: appNumber, _id: Date.now(), status: 'pending', createdAt: new Date() };
  applications.push(application);
  res.status(201).json({ success: true, message: 'Application submitted successfully', data: { applicationNumber: appNumber, _id: application._id } });
});

app.get('/api/applications/:id', (req, res) => {
  const app = applications.find(a => a._id == req.params.id);
  if (!app) return res.status(404).json({ success: false, message: 'Application not found' });
  res.json({ success: true, data: app });
});

// Contacts
app.post('/api/contacts', (req, res) => {
  const contact = { ...req.body, _id: Date.now(), status: 'new', createdAt: new Date() };
  contacts.push(contact);
  res.status(201).json({ success: true, message: 'Contact form submitted successfully', data: contact });
});

// Campus Visits
app.post('/api/campus-visits', (req, res) => {
  const visit = { ...req.body, _id: Date.now(), status: 'pending', createdAt: new Date() };
  campusVisits.push(visit);
  res.status(201).json({ success: true, message: 'Campus visit scheduled successfully', data: visit });
});

// Newsletter
app.post('/api/newsletter/subscribe', (req, res) => {
  const { email } = req.body;
  const existing = newsletters.find(n => n.email === email);
  
  if (existing && existing.isActive) {
    return res.status(400).json({ success: false, message: 'Email already subscribed to newsletter' });
  }
  
  if (existing) {
    existing.isActive = true;
    existing.subscribedAt = new Date();
    return res.json({ success: true, message: 'Newsletter subscription reactivated', data: existing });
  }
  
  const subscriber = { email, _id: Date.now(), isActive: true, subscribedAt: new Date() };
  newsletters.push(subscriber);
  res.status(201).json({ success: true, message: 'Successfully subscribed to newsletter', data: subscriber });
});

app.post('/api/newsletter/unsubscribe', (req, res) => {
  const { email } = req.body;
  const subscriber = newsletters.find(n => n.email === email);
  
  if (!subscriber) {
    return res.status(404).json({ success: false, message: 'Email not found in newsletter subscribers' });
  }
  
  subscriber.isActive = false;
  res.json({ success: true, message: 'Successfully unsubscribed from newsletter', data: subscriber });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`Backend server running on port ${PORT}`);
  console.log(`API available at: http://localhost:${PORT}/api`);
  console.log(`Using IN-MEMORY storage (data not persisted)`);
  console.log(`========================================`);
});
