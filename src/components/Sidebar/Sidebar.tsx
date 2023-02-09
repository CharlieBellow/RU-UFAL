import * as Icon from "phosphor-react"
import ufalLogo from "../../assets/ufal-sigla-branca-fundo-transparente.png";
import { useState, useContext } from "react";
import SidebarContext from "./SidebarContext";
import SidebarItem from "./SidebarItem";
import CardMenu from "../Cards/CardMenu";

function Sidebar({children} :any){

    const { open } = useContext(SidebarContext);
    const { openMenu } = useContext(SidebarContext);

    const Menus = [
        {
            title: 'Dashboard',
            path: '/dashboard',
            icon: <Icon.SquaresFour size={32}/>,
        },
        {
            title: 'Perfil',
            icon: <Icon.User size={32}/>,
            children: [
                {
                    title: "Alterar Dados",
                    dir: "/AlterarLogin",
                },
                {
                    title: "Editar Perfil",
                    dir: "/EditarPerfil",
                }
            ]
        },
    ];
    return(
        <div className="flex w-full">
            <div className={`${open ? "w-[45rem] shadow-2xl lg:w-48 shadow-none" : "w-0 lg:w-16"} h-screen bg-blue-600 ease-in-out duration-300 lg:block`}>
                <div className="flex flex-row w-full justify-center mb-4">
                    <img className="mt-4 max-h-[8rem]" src={ufalLogo} alt="logo"/>
                </div>   
                {Menus.map((item, index) => {
                    return <SidebarItem item={item} key={index}/>
                })} 
            </div>       
            <div className="text-2xl font-semibold w-full h-screen">
                {children}
            </div>
        </div>
    )
}
export default Sidebar;