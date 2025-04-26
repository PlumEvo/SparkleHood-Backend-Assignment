const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

// Get all incidents
router.get('/', async (req, res) => {
  try {
    let items = await Incident.findAll();
    res.json(items);
  } catch (err) {
    console.log('Error getting incidents:', err);
    res.status(500).json({ error: 'Could not fetch incidents' });
  }
});

// Get single incident
router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let item = await Incident.findByPk(id);
    
    if (!item) {
      return res.status(404).json({ error: 'Not found' });
    }
    
    res.json(item);
  } catch (err) {
    console.log('Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add new incident
router.post('/', async (req, res) => {
  try {
    let data = req.body;
    
    // Check required fields
    if (!data.title || !data.description || !data.severity) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        fields: ['title', 'description', 'severity']
      });
    }

    // Check severity is valid
    let validSeverity = ['Low', 'Medium', 'High'];
    if (!validSeverity.includes(data.severity)) {
      return res.status(400).json({ 
        error: 'Bad severity value', 
        valid: validSeverity
      });
    }

    // Create record
    let newItem = await Incident.create({
      title: data.title,
      description: data.description,
      severity: data.severity,
    });

    res.status(201).json(newItem);
  } catch (err) {
    console.log('Error creating incident:', err);
    
    // Handle validation errors
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Validation failed',
        details: err.errors.map(e => ({ field: e.path, message: e.message }))
      });
    }
    
    res.status(500).json({ error: 'Server error' });
  }
});

// Remove incident
router.delete('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let item = await Incident.findByPk(id);
    
    if (!item) {
      return res.status(404).json({ error: 'Not found' });
    }
    
    await item.destroy();
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.log('Error deleting:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 