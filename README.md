
# Flow-Craft

# FlowCraft

FlowCraft is a web application that allows users to generate flowcharts based on a given scenario description. The application is built using React for the frontend and Node.js with Express for the backend.

## 🚀 Features
- Accepts user input describing a website scenario.
- Generates a flowchart using Mermaid.js.
- Displays the generated flowchart to the user.

---

## 📌 Setup Instructions

### 1️⃣ Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v16 or later)
- **npm** (comes with Node.js)
- **MongoDB** (if database support is required)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/flowcraft.git
cd flowcraft
```


### 3️⃣ Install Dependencies and Start 
#### Backend (Server)
cd backend
npm install  # Install dependencies

Create a .env file in the backend directory and add your OpenAI API key: 
OPENAI_API_KEY=your-openai-api-key-here

node server.js  # Start the server

The backend runs on http://localhost:5000 by default.


#### Frontend (Client)
cd frontend
npm install  # Install dependencies

npm run dev  # Start the development server

The frontend runs on http://localhost:5173 by default.

### 5️⃣ Open in Browser
Go to `http://localhost:3000/` to access the application.

---

## 📡 API Endpoints

### 🔹 Generate Flowchart
**Endpoint:** `POST /generate-flowchart`

**Description:** Accepts a website scenario description and returns the generated Mermaid.js flowchart code.

**Request:**
```json
{
  "scenario": "User logs in, navigates to dashboard, edits profile, and logs out."
}
```

**Response:**
```json
{
  "mermaidCode": "graph TD; A[User] -->|Logs in| B[Dashboard]; B -->|Edits Profile| C[Profile]; C -->|Logs out| A;"
}
```

---

## 🛠️ Technologies Used
- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (optional)
- **Mermaid.js** for flowchart rendering

---



---

**Happy Coding! 🚀**



