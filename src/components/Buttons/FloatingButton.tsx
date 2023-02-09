import * as Icon from "phosphor-react";

function FloatingButton(){
    return(
        <div className="flex flex-row gap-5 p-5">
            <button className="bg-[#0095DA] rounded-full px-[1rem] py-[1.15rem] font-bold text-white inline-flex items-center gap-1 hover:bg-[#33AAE1]">
                <Icon.PencilSimple size={24}/>
                FAB Completo
            </button>
            <button className="bg-[#0095DA] rounded-full font-bold text-white hover:bg-[#33AAE1]">
                <Icon.PencilSimple size={24} className="m-[1.15rem]"/>
            </button>
        </div>
    )
}
export default FloatingButton;