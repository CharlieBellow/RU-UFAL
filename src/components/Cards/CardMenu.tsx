import * as Icon from "phosphor-react";
import placeholder from "../../assets/placeholder-200.png";
import { useState, useContext } from "react";
import SidebarContext from "../Sidebar/SidebarContext";
import SearchBar from "../Inputs/SearchBar";

interface CardMenuProps extends React.HTMLAttributes<HTMLElement> {
	pagetitle: string;
}
function CardMenu(props: CardMenuProps){
    const { openMenu } = useContext(SidebarContext);
    return(

        <div className="bg-blue-600 w-full bg-[#DEE2E6] text-[#212529] h-[12rem] p-6 lg:rounded-none lg:bg-blue-600 lg:text-white relative z-0 lg:pt-16">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4 w-[15rem]">
                    <Icon.List size={32} onClick={() => openMenu()} className="cursor-pointer"/>
                    <h3 className="hidden lg:block">{props.pagetitle}</h3>
                </div>
                <div className="hidden justify-self-center lg:block">
                    <SearchBar/>
                </div>
                <div className="flex flex-row items-center gap-[1.5rem]">
                    <Icon.Question size={32}/>
                    <div className="w-[2rem] h-[2rem]">
                        <img src={placeholder} alt="profile" className="object-cover rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardMenu;