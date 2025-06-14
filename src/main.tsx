import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { HomeFeed, ProfilePage, LoginPage, PeoplePage, ExplorePage, SettingsPage, SignUpPage } from "@/routes";
import DashboardLayout from "@/layouts/dashboard-layout.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<h1>404</h1>} />
                <Route path="/" element={<App />} />
                <Route path="/flow">
                    <Route path="signin" element={<LoginPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                </Route>
                <Route path="/u" element={<DashboardLayout />}>
                    <Route path="home" element={<HomeFeed />} />
                    <Route path="people" element={<PeoplePage />} />
                    <Route path="explore" element={<ExplorePage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
