import * as Icon from "phosphor-react";
function StatementCard(){
    return(
        <div className="flex flex-col p-5">
            <div className="flex flex-row justify-between w-[26.75rem] border-b p-[1.5rem] font-medium">
                <div className="flex flex-row gap-[1rem]">
                    <Icon.Coffee size={24}/>
                    <h2>Almoço</h2>
                </div>
                <div className="text-red-500">
                    <h2> - R$ 3,00</h2>
                </div>
            </div>
            <div className="flex flex-row justify-between w-[26.75rem] border-b p-[1.5rem] font-medium">
                <div className="flex flex-row gap-[1rem]">
                    <Icon.PlusCircle size={24}/>
                    <h2>Crédito Adicionado</h2>
                </div>
                <div className="text-green-500">
                    <h2>R$ 30,00</h2>
                </div>
            </div>
        </div>
    )
}
export default StatementCard;