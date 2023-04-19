import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, RecommendationLoading, Selection} from "../screens";

const RoutesIndex = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={Home}/>
                    <Route path="/pilih-tempat" element={Selection}/>
                    <Route path="/dalam-proses" element={RecommendationLoading}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RoutesIndex;