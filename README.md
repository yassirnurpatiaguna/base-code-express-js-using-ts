# Express TypeScript REST API

A clean and modular REST API boilerplate built with Express, TypeScript, PostgreSQL, and Redis. The project uses Docker for easy setup and deployment. Features include JWT authentication, pagination, filtering, validation, and caching.

---

## **Features**
- Clean and modular architecture
- Authentication with JWT
- Pagination and filtering
- Input validation and sanitization
- Rate limiting for API security
- PostgreSQL for database
- Redis for caching
- Dockerized environment for seamless setup

---

## **Prerequisites**
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/products/docker-desktop) and Docker Compose
- (Optional) PostgreSQL and Redis clients (e.g., [DBeaver](https://dbeaver.io/), [RedisInsight](https://redis.com/redis-enterprise/redis-insight/))

---

## **Setup Instructions**

### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_folder>

# App
PORT=3000
JWT_SECRET=your_jwt_secret

# Database
DB_HOST=db
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_PORT=5432

# Redis
REDIS_HOST=redis
REDIS_PORT=6379

npx sequelize-cli db:seed --seed 20250123044152-seed-super-admin.ts


#if build with docker and Start the Project with Docker
docker-compose build
docker-compose up

#if build with local development
npm install
npm run dev


