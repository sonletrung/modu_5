import Navbar from "../../Components/Navbar";
import {Outlet} from "react-router-dom";

export default function Home(){
    return(
        <>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </>
    )
}