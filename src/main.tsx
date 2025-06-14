import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { LoginPage, SignUpPage } from "@/routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/auth">
                    <Route path="signin" element={<LoginPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
