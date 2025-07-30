📄 README.md
# 🐳 Docker Compose Assignment – Multi-Service Application

This project demonstrates a full-stack microservices environment using **Docker Compose**, featuring:

- ✅ MySQL with PHPMyAdmin UI
- ✅ PostgreSQL with pgAdmin4
- ✅ ReactJS frontend with multi-stage build
- ✅ NodeJS API backend
- ✅ Scaled frontend containers with Docker Compose

---

## 🛠️ Technologies & Tools

| Tech            | Version     |
|-----------------|-------------|
| Docker          | 24.x        |
| Docker Compose  | 2.x         |
| MySQL           | 5.7         |
| PostgreSQL      | latest      |
| ReactJS         | 18.x        |
| NodeJS          | 18-alpine   |
| PHPMyAdmin      | latest      |
| pgAdmin4        | latest      |

---

## 📁 Project Structure

docker-compose-assignment/
├── part1-mysql-phpmyadmin/
│ └── docker-compose.yml
│
├── part2-mysql-persistence/
│ └── docker-compose.yml
│
├── part3-postgres-pgadmin/
│ └── docker-compose.yml
│
├── part4-react-node-multistage/
│ ├── backend/
│ │ ├── Dockerfile
│ │ ├── index.js
│ │ └── package.json
│ ├── frontend/
│ │ ├── Dockerfile
│ │ ├── package.json
│ │ ├── public/index.html
│ │ └── src/
│ │ ├── App.js
│ │ └── index.js
│ └── docker-compose.yml

---

## 🚀 Running the Services

### 🧪 Part 1: MySQL + PHPMyAdmin

```bash
cd part1-mysql-phpmyadmin
docker-compose up -d
•	Access: http://localhost:8081

💾 Part 2: MySQL with Volume Persistence
cd part2-mysql-persistence
docker-compose up -d
•	MySQL volume ensures persistent data between restarts

🐘 Part 3: PostgreSQL + pgAdmin4
cd part3-postgres-pgadmin
docker-compose up -d
•	Access pgAdmin4: http://localhost:5050

🌐 Part 4: Scalable React + NodeJS App (Multi-Stage Build)
cd part4-react-node-multistage
docker-compose up --build -d
•	React Frontend: http://localhost:3000
•	NodeJS Backend: http://localhost:5000/api
⚠️ Only one frontend replica is exposed for demo purposes. Use a load balancer for multi-replica routing.

🧪 API Test (Backend)
curl http://localhost:5000/api
Expected response:
{ "message": "Hello from NodeJS backend!" }


📦 Git Commands
git init
git add .
git commit -m "🚀 Full Docker Compose assignment"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
