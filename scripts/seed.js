const db = require('../config/database');
const Incident = require('../models/Incident');

// Sample incidents data
const sampleIncidents = [
  {
    title: 'Model Generated Harmful Content',
    description: 'AI system produced inappropriate content despite safety measures',
    severity: 'Medium'
  },
  {
    title: 'Privacy Leak',
    description: 'System inadvertently exposed user data in responses',
    severity: 'High'
  },
  {
    title: 'Resource Overconsumption',
    description: 'AI system consumed excessive computational resources during routine operation',
    severity: 'Low'
  }
];

// Function to seed the database
async function seedDatabase() {
  try {
    // Sync database
    await db.sync({ force: true }); // This will drop the table if exists
    console.log('Database synchronized');
    
    // Create incident records
    for (const incident of sampleIncidents) {
      await Incident.create(incident);
      console.log(`Added: ${incident.title}`);
    }
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase(); 