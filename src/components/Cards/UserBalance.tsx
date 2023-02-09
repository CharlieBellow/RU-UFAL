import { useState } from "react";
import * as Icon from "phosphor-react";

function UserBalance() {
    const [showBalance, setShowBalance] = useState(false);
    return(
        <div className="flex flex-row justify-between px-[1.5rem] text-white font-medium">
            <h2>Saldo Atual</h2>
            <div className="z-2 cursor-pointer"onClick={() => setShowBalance((showBalance) => !showBalance)}>
                {showBalance ? (
                    <div className="flex items-center text-[#1BD273] gap-2">
                        <h2>R$ 30,00 </h2>
                        <Icon.EyeSlash size={24}/>
                    </div> 
                ) : (
                    <div className="flex items-center text-[#1BD273] gap-2">
                        <h2>********</h2>
                        <Icon.Eye size={24}/>
                    </div> 
                )}
            </div>
        </div>
    );
}
export default UserBalance;