import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { HomeFeed, LoginPage, PeoplePage, SearchPage, SettingsPage, SignUpPage } from "@/routes";
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
                <Route path="/home" element={<DashboardLayout />}>
                    <Route path="" element={<HomeFeed />} />
                    <Route path="people" element={<PeoplePage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
