import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexChart from "./Components/ChartJS";
import Products from "./Components/Products/Products";
import SideBar from "./Components/SideBar/SideBar";

function App() {
    return (
        <div className="bodyApp">
            {/* <NavBar /> */}
            <Routes>
                <Route path="/" element={<SideBar/>} />
                <Route path="productos" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
