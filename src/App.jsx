import Dashboard from "./pages/dashboard.jsx";
import Log from "./pages/log.jsx";
import Header from "./components/Header.jsx";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Login from "./pages/login.jsx";
import ProtectedRoute from "./Routes/ProtectedRoutes.jsx";

import WaterTracker from "./pages/WaterTracker";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header title="Dashboard" />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/log"
              element={
                <ProtectedRoute>
                  <Log />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route
            path="/dashboard/water"             // New route for Water Tracker
            element={
              <ProtectedRoute>
                <WaterTracker />
              </ProtectedRoute>
            }
          />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
