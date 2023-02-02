import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, Selection} from "../screens";

const RoutesIndex = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={Home}/>
                    <Route path="/pilihan" element={Selection}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RoutesIndex;