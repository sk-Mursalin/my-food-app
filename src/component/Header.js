import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import { useDispatch, useSelector } from "react-redux";
import {  sidebarOpen } from "../utils/sidebarSlice";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = ()=>{
    const [logStatus,setLogStatus] = useState("login");
    const item = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    function openMenu(){
        dispatch(sidebarOpen());
    }
    
    return(
        <header className="bg-gray-100 shadow-md py-2 sticky top-0 z-10">
            <nav className="max-w-6xl mx-auto flex justify-between items-center  px-5">
                <div>
                    <Link to={"/"}><img src={logo} className="w-16 rounded-full"/></Link>
                </div>
                <div className="flex gap-8 items-center nav">
                    <p className="font-bold  hover:text-slate-700 cursor-pointer transition-all hover:underline hover:underline-offset-4 hover:decoration-gray-500 hover:decoration-2"><Link to={"/"}>Home</Link></p>
                    <p className="font-bold  hover:text-slate-700 cursor-pointer transition-all hover:underline hover:underline-offset-4 hover:decoration-gray-500 hover:decoration-2"><Link to={"/about"}>About</Link></p>
                    <p className="font-bold  hover:text-slate-700 cursor-pointer transition-all hover:underline hover:underline-offset-4 hover:decoration-gray-500 hover:decoration-2"><Link to={"/contact"}>Contact Us</Link></p>
                    <p className="font-bold  hover:text-slate-700 cursor-pointer transition-all hover:underline hover:underline-offset-4 hover:decoration-gray-500 hover:decoration-2"><Link to={"/cart"}>Cart ({item.length})</Link></p>
                    <button className="px-3 py-1 bg-neutral-600 rounded-md text-white hover:bg-neutral-500 transition-all" onClick={()=>{logStatus == "login"?setLogStatus("logout"):setLogStatus("login")}}>
                    <Link to={"/login"}>{logStatus}</Link></button>
                    {/* <button onClick={sidebarClose}>click</button> */}
                </div>
                <FontAwesomeIcon icon={faBars} onClick={openMenu} className="text-xl text-slate-500 cursor-pointer hidden hamburger-menu"/>
            </nav>
        </header>
    );
};

export default Header;