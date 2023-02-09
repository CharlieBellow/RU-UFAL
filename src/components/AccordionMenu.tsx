
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import * as Icon from "phosphor-react";
    
function AccordionMenu(){
    const Menus = [
        { title: "Dashboard", src: <Icon.Database size={24}/>, children: [{title: "Aoption1"}, {title: "Aoption2"}]},
        { title: "User", src: <Icon.Database size={24}/>, children: [{title: "Boption1"}, {title: "Boption2"}]},
        { title: "Login", src: <Icon.Database size={24}/>, children: [{title: "Coption1"}, {title: "Coption2"}]},
    ];
    
    return(
        <Accordion className="flex flex-col w-full justify-center">
            {Menus.map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionHeader className="text-white flex flex-row pl-4 mx-1 py-4  gap-4 rounded-lg  ease-in-out duration-300 hover:bg-blue-500 cursor-pointer">
                        {item.src}
                        <h3>{item.title}</h3>
                    </AccordionHeader> 
                </AccordionItem>
            ))}
        </Accordion>
    );
}
export default AccordionMenu;