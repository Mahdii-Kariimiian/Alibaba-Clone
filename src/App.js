import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import NotFound from "./Pages//NotFound/NotFound";
import UseWindowWidth from "./hooks/UseWindowWidth";
import Layout from "./Pages/Home/Components/Mobile/Layout";
import Products from "./Pages/Home/Components/Mobile/Products";
import Manufacturers from "./Pages/Home/Components/Mobile/Manufacturers";

function App() {
    const isMobile = UseWindowWidth();
    console.log(isMobile);
    return (
        <BrowserRouter>
            {isMobile ? (
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Products />} />
                        <Route
                            path="/manufacturers"
                            element={<Manufacturers />}
                        />
                    </Route>
                </Routes>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;
