# ARCHITECTURE

## System Overview

AI Spend Audit follows a full-stack architecture with frontend, backend, and database layers.

## Frontend

### Technologies
- Next.js
- React
- Tailwind CSS
- TypeScript

### Responsibilities
- User interface
- Form handling
- Analytics visualization
- Report generation
- API communication

## Backend

### Technologies
- Spring Boot
- Java
- REST APIs

### Responsibilities
- Process API requests
- Store audit data
- Retrieve audit history
- Database communication

## Database

### Technology
- MySQL

### Responsibilities
- Store audit records
- Persist application data

## Workflow

1. User fills audit form
2. Frontend sends POST request
3. Spring Boot API processes request
4. Data stored in MySQL
5. Frontend generates audit analysis
6. User receives savings recommendations

## API Endpoints

### POST /api/audits
Stores audit data in MySQL database.

### GET /api/audits
Fetches all previous audits.

## Architecture Diagram

```text
Frontend (Next.js)
       ↓
REST API (Spring Boot)
       ↓
Database (MySQL)