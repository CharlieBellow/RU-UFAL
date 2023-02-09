import * as Icon from "phosphor-react";
import { useState } from "react";
import ufalLogo from "../assets/ufal-sigla-branca-fundo-transparente.png";
function Sidebar(){

    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "Dashboard", src: <Icon.Database size={24}/>, children: [{title: "Aoption1"}, {title: "Aoption2"}]},
        { title: "User", src: <Icon.Database size={24}/>, children: [{title: "Boption1"}, {title: "Boption2"}]},
        { title: "Login", src: <Icon.Database size={24}/>, children: [{title: "Coption1"}, {title: "Coption2"}]},
    ];

    return(
        <div className="flex">
            <div className={`${open ? "w-72 shadow-2xl lg:w-48 shadow-none" : "w-0 lg:w-16"} h-screen bg-blue-600 ease-in-out duration-300 lg:block`}>
                <div className="flex flex-row w-full justify-center mb-4">
                    <img className="mt-4 max-h-[8rem]" src={ufalLogo} alt="logo"/>
                </div>   
                <ul className={`flex flex-col w-full justify-center`}>         
                    {Menus.map((menu, index)=>(
                        <li key={index} className="text-white flex flex-row pl-4 mx-1 py-4  gap-4 rounded-lg  ease-in-out duration-300 hover:bg-blue-500 cursor-pointer">
                            {menu.src}
                            <div className={`${open ? "opacity-100" : "opacity-0"} ease-in-out duration-300`}>{open ? menu.title : ""}</div>
                        </li>
                    ))}
                </ul> 
            </div>       
            <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            </div>

        </div>
    )
}
export default Sidebar;
