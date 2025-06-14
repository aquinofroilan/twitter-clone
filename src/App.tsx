import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/auth"></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
