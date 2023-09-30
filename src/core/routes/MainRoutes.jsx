import { Navigate, Route, Routes } from "react-router";


import Home from "../../pages/home/Home";
import NotFound from "../../pages/home/NotFound";
import Login from "../../pages/authentication/Login";
import ListAllCars from "../../pages/ListAllCars";
import AllCarsBrand from "../../pages/AllCarsBrand";
import CarCreation from "../../pages/CarCreation";
import EditCar from "../../pages/EditCar";
import Header from "../components/layout/Header";
import CarAdmin from "../../pages/CarAdmin";


const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars">
                    <Route index caseSensitive element={<ListAllCars />} />
                    <Route path=":idMarque" element={<AllCarsBrand />} />
                    <Route path="creation" element={<CarCreation />} />
                    <Route path="edit/:idCar" element={<EditCar />} />
                    <Route path="admin" element={<CarAdmin />} />
                </Route>
                <Route path="/auth/login" caseSensitive element={<Login />} />
                <Route path="404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="404" replace />} />
            </Routes>
        </>
    );
}

export default MainRoutes;