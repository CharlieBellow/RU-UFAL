function SmallButton(){
    return(
        <div className="flex flex-row gap-5 p-5">
            <button className="bg-[#797D9A] text-white text-sm font-bold px-[0.5rem] py-[0.35rem] rounded-md shadow-md hover:bg-gray-500">Botão Principal</button>
            <button className="bg-white text-[#797D9A] text-sm font-bold px-[0.5rem] py-[0.35rem] rounded-md hover:text-gray-500">Botão Secundário</button>
        </div>
    )
}
export default SmallButton;