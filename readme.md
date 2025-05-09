# AI Safety Incidents API

A RESTful API service to log and manage hypothetical AI safety incidents.

## Clone the repository:

First, open your terminal and run the following command to clone the repository:

```bash
git clone https://github.com/PlumEvo/SparkleHood-Backend-Assignment.git
```

## Setup
1. After cloning, go into the project directory:
   ```
   cd SparkleHood-Backend-Assignment
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
You'll see basic interface on ``localhost:3000`` (use Browser)
Various Endpoints like 
```json
   "get_all": "GET /incidents",
   "get_one": "GET /incidents/:id",
   "create": "POST /incidents",
   "delete": "DELETE /incidents/:id"
```
are mentioned. Since there's nothing in Database on ``localhost:3000/incidents`` might show you nothing.

## Populating Sample Data

### Option 1: Using the Seed Script (Recommended)

Run the following command to populate the database with sample incidents:

```
npm run seed
```

This will reset the database and create three sample incidents.

### Option 2: Using curl Commands

You can also populate the database with sample incidents using the following curl commands:

#### Windows (PowerShell):

```powershell
# Sample Incident 1
curl.exe -X POST http://localhost:3000/incidents -H "Content-Type: application/json" -d "{\"title\":\"Model Generated Harmful Content\",\"description\":\"AI system produced inappropriate content despite safety measures\",\"severity\":\"Medium\"}"

# Sample Incident 2
curl.exe -X POST http://localhost:3000/incidents -H "Content-Type: application/json" -d "{\"title\":\"Privacy Leak\",\"description\":\"System inadvertently exposed user data in responses\",\"severity\":\"High\"}"

# Sample Incident 3
curl.exe -X POST http://localhost:3000/incidents -H "Content-Type: application/json" -d "{\"title\":\"Resource Overconsumption\",\"description\":\"AI system consumed excessive computational resources during routine operation\",\"severity\":\"Low\"}"
```

#### macOS/Linux:

```bash
# Sample Incident 1
curl -X POST http://localhost:3000/incidents \
  -H "Content-Type: application/json" \
  -d '{"title":"Model Generated Harmful Content","description":"AI system produced inappropriate content despite safety measures","severity":"Medium"}'

# Sample Incident 2
curl -X POST http://localhost:3000/incidents \
  -H "Content-Type: application/json" \
  -d '{"title":"Privacy Leak","description":"System inadvertently exposed user data in responses","severity":"High"}'

# Sample Incident 3
curl -X POST http://localhost:3000/incidents \
  -H "Content-Type: application/json" \
  -d '{"title":"Resource Overconsumption","description":"AI system consumed excessive computational resources during routine operation","severity":"Low"}'
```

## API Endpoints

### GET /incidents
- Retrieves all incidents
- Response: Array of incident objects

### POST /incidents
- Creates a new incident
- Request body:
  ```json
  {
    "title": "Incident title",
    "description": "Detailed description of the incident",
    "severity": "Low" | "Medium" | "High"
  }
  ```
- Response: Created incident object

### GET /incidents/:id
- Retrieves a specific incident by ID
- Response: Incident object or 404 if not found

### DELETE /incidents/:id
- Deletes a specific incident by ID
- Response: Success message or 404 if not found

## Data Model

### Incident
- `id`: Unique identifier (auto-generated)
- `title`: Short summary (string)
- `description`: Detailed description (text)
- `severity`: Level of severity ("Low", "Medium", "High")
- `reported_at`: Timestamp when logged (auto-generated with current time)

## Technologies Used
- Node.js
- Express.js
- SQLite (with Sequelize ORM)

Had a lot of fun making this, Thanks!!
