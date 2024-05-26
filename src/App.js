import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Main from "./Pages/Main";
import NotFound from "./Pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
