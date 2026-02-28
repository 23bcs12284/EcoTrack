🌱 EcoTrack – Smart Sustainability Dashboard
EcoTrack is a modern React-based sustainability tracking dashboard that helps users monitor their eco-friendly activities and daily wellness habits.
This project includes:
🌊 Daily Water Intake Tracker
📊 Carbon Activity Logs (Redux Toolkit)
🔐 Protected Routes with Authentication
⚡ Performance Optimization (React.memo + useCallback)
🎨 Tailwind CSS UI
🚀 Features
🔐 Authentication
Fake login system
Token stored in localStorage
Protected routes using custom logic
💧 Daily Water Tracker
Add / Remove water glasses
Reset counter
Set custom daily goal
Persistent storage using localStorage
Displays progress bar
Shows "Goal Reached" message
Fetches daily health tip from API:
https://api.adviceslip.com/advice
Loading and error handling included
🌱 Activity Logs (Redux Toolkit)
Async data fetching using createAsyncThunk
Loading / Success / Error states
Filters logs based on carbon emission
Styled badge indicators:
🔴 High carbon
🟢 Low carbon
⚡ Performance Optimization
React.memo() for CounterDisplay component
useCallback() for handler functions
StrictMode-safe localStorage implementation
🛠️ Tech Stack
React 18+
React Router DOM
Redux Toolkit
Tailwind CSS
JavaScript (ES6+)
📁 Project Structure
src/
│
├── components/
│   ├── CounterDisplay.jsx
│
├── pages/
│   ├── WaterTracker.jsx
│   ├── Log.jsx
│
├── store/
│   ├── logSlice.js
│   ├── store.js
│
├── context/
│   ├── AuthContext.jsx
│
├── App.jsx
└── main.jsx
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <your-repo-url>
cd ecotrack
2️⃣ Install dependencies
npm install
3️⃣ Start development server
npm run dev
🔒 Protected Routes Logic
If user is not authenticated:
→ Redirect to /login
Authentication state is managed using:
React Context
localStorage token
💾 Persistent Storage
Water tracker uses:
localStorage.setItem("waterData", JSON.stringify({ count, goal }))
Uses lazy initialization to prevent StrictMode reset issues.
🧠 Redux Flow
dispatch(fetchLogs())
        ↓
pending → loading state
        ↓
fulfilled → data stored in state.logs.data
        ↓
UI renders filtered logs
🎯 Learning Outcomes
This project demonstrates:
React Hooks mastery
State management patterns
Async logic with Redux Toolkit
Performance optimization
UI design with Tailwind
StrictMode-safe coding practices
🌟 Future Improvements
📅 Daily history tracking
📊 Chart.js carbon graph
🌙 Dark mode
🔔 Water reminder notifications
🏆 Achievement badges
👨‍💻 Author
Your Name
Frontend Developer | React Enthusiast