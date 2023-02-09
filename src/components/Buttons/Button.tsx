function Button(){
    return(
        <div className="flex flex-row gap-5 p-5">
            <button className="bg-[#0095DA] font-bold text-white px-[1rem] py-[1.15rem] rounded-md shadow-md hover:bg-[#33AAE1]">
                Botão Principal
            </button>
            <button className="bg-white font-bold text-[#0095DA] px-[1rem] py-[1.15rem] border border-gray-300 rounded-md hover:bg-gray-100">
                Botão Secundário
            </button>
            <button className="bg-white font-bold text-[#797D9A] px-[1rem] py-[1.15rem] rounded-md hover:text-gray-600">
                Botão Terceiro
            </button>
            <button className="bg-gray-400 font-bold text-white px-[1rem] py-[1.15rem] rounded-md shadow-md cursor-not-allowed">
                Botão Desativado
            </button>
        </div>

    )
}
export default Button;