import {Link} from "react-router-dom";
import { useState, useContext, ReactNode } from "react"
import SidebarContext from "./SidebarContext";
import * as Icon from "phosphor-react";
interface Item extends React.HTMLAttributes<HTMLElement> {
    item: any;
}
function SidebarItem(props: Item){
    const [selected, setSelected] = useState(false);
    const [hover, setHover] = useState(false);
    const { open } = useContext(SidebarContext);
    const selectItem = () => {
        if(open){
            setSelected(!selected);
        }else{
            setSelected(false);
        }    
    }
    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Link to={props.item.path? props.item.path : "#"} className={`flex flex-col w-full justify-center`} onClick={() => selectItem()} >
                <div  className={`flex flex-row justify-between items-center text-white mx-2 my-2 py-2 gap-4 rounded-lg ease-in-out duration-300 hover:bg-blue-700 cursor-pointer ${selected && open && !props.item.path ? "bg-blue-700" : "bg-blue-600"}`}>
                   <div className="flex flex-row items-center gap-2">
                        <div className="pl-2">
                            {props.item.icon}
                        </div>
                        {open ? <>{props.item.title}</> : <></>}
                    </div>
                    <div className="pr-2">
                        {!props.item.path ? !selected? <Icon.CaretDown size={24} className="flex flex-col justify-self-end"/> :  <Icon.CaretUp size={24} className="flex flex-col justify-self-end"/> : <></>}
                    </div>
                    
                </div>  
            </Link>
            <div className="flex flex-col w-full relative">                
                    {open && selected && props.item.children ? props.item.children.map((child : Item, index : number) => {
                        return <div className={`text-white flex flex-col mx-2 px-6 py-2 gap-4 rounded-lg items-start ease-in-out duration-300 hover:bg-blue-700 cursor-pointer`}>
                            <Link to={child.dir? child.dir : "#"} key={index}>{child.title}</Link>
                        </div>
                    }) : <></>} 
                    {!open && props.item.children ? 
                    <div className="bg-blue-600 text-white absolute left-14 -bottom-2 w-40 rounded-md z-10">
                        {props.item.children.map((child: Item, index : number) => {
                            return <Link to={child.dir? child.dir : "#"} key={index} className={`hover:bg-blue-700 rounded-md p-2 ${hover ? "block" : "hidden"}`}>{child.title}</Link>
                        })}
                    </div> 
                    : <></>}
            </div>

        </div>
    )

}
export default SidebarItem;