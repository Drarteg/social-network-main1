import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MessengerPage from "./pages/MessengerPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import SettingsPage from "./pages/SettingsPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const navigate = useNavigate();
  const login = sessionStorage.getItem("login");
  useEffect(() => {
    if (!login) {
      navigate("/login");
    } 
  },[login, navigate]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/messenger" element={<MessengerPage />} />
      </Routes>
    </>
  );
}

export default App;
