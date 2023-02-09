import * as Icon from "phosphor-react";

function IconButton(){
    return(
        <div className="flex flex-row p-5 gap-5">
            <button className="bg-[#0095DA] font-bold text-white px-[1rem] py-[1.15rem] inline-flex items-center gap-1 rounded-md shadow-md hover:bg-[#33AAE1]">
                <Icon.PencilSimple size={24}/>
                Botão Principal
            </button>
            <button className="bg-white font-bold text-[#0095DA] px-[1rem] py-[1.15rem] inline-flex items-center gap-1 rounded-md border border-gray-300 rounded-md hover:bg-gray-100">
                <Icon.PencilSimple size={24}/>
                Botão Secundário
            </button>
            <button className="bg-white font-bold text-[#797D9A] px-[1rem] py-[1.15rem] inline-flex items-center gap-1 rounded-md rounded-md hover:text-gray-500">
                <Icon.PencilSimple size={24}/>
                Botão Terceiro
            </button>
            <button className="bg-white font-bold text-[#797D9A] px-[1rem] py-[1.15rem] inline-flex items-center gap-1 rounded-md rounded-md hover:text-gray-500">
                Botão Quarto
                <Icon.PencilSimple size={24}/>
            </button>
            <button className="bg-gray-400 font-bold text-white px-[1rem] py-[1.15rem] inline-flex items-center gap-1 rounded-md shadow-md cursor-not-allowed">
                <Icon.PencilSimple size={24}/>
                Botão Desativado
            </button>
        </div>
    )
}
export default IconButton;