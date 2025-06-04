# 🚀 cpp-react-app

This is a full-stack Dockerized application that combines a **C++ backend API** and a **React (Next.js) frontend**. It demonstrates how a high-performance C++ service can be connected to a modern web interface using REST APIs.

---

## 📂 Project Structure

```
cpp-react-app/
├── cpp-analysis-api/               # C++ backend API
│   ├── main.cpp
│   ├── Dockerfile
│   └── ... (other source files)
├── final-frontend-step-by-step/    # React/Next.js frontend
│   ├── pages/
│   ├── public/
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml              # Orchestrates frontend + backend
├── .gitignore
└── README.md
```

---

## ⚙️ Prerequisites

- Docker installed and running
- Docker Compose (v2+)
- (Optional) Git

---

## 🛠️ Build & Run the App

### 🔁 1. Clone the repo
```bash
git clone https://github.com/SHAILU99/cpp-react-app.git
cd cpp-react-app
```

### 🧱 2. Build and run with Docker Compose
```bash
docker-compose up --build
```

This:
- Builds the C++ backend and starts it on port `5000`
- Builds the React frontend and starts it on port `3000`

### 🌐 3. Access the app

- Frontend: http://localhost:3000
- Backend (API): http://localhost:5000

---

## 🧪 Testing Backend (C++)
You can test your backend by:
```bash
curl http://localhost:5000
```

---

## 📦 Production Build (Optional)
```bash
docker-compose -f docker-compose.yml --env-file .env.prod up --build
```

---

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).