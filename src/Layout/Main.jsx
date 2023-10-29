
import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";




const Main = () => {
    return (
        <div className="mx">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;