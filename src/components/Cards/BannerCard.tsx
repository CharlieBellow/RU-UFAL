import placeholder from "../../assets/placeholder-200.png";
import ufalLogo from "../../assets/ufal-sigla-branca-fundo-transparente-40por-cento.png";
import UserBalance from "./UserBalance";

function BannerCard() {
	return (
        <div className="w-full max-w-[32rem] px-[1rem] ease-in-out duration-300">     
            <div className="bg-gradient block h-[13.5rem] w-full rounded-lg shadow-lg relative">
                <div className="opacity-40 absolute right-0 w-[10rem] h-[12rem] pointer-events-none">
                    <img className="rotate-12 -skew-y-2" src={ufalLogo} alt="logo"/>
                </div>
                <div className="flex p-[1.5rem] pb-[1rem]">
                    <div className="w-[5rem] h-[5rem]">
                        <img className="object-cover rounded-xl shadow-lg"src={placeholder} alt="profile"/>
                    </div>
                    <div className="flex flex-col justify-between px-[1.5rem] text-white text-sm">
                        <p>Amora Gusmão de Oliveira</p>
                        <p>Campus: Arapiraca</p>
                        <p>Matrícula: 99999999</p>
                    </div>
                </div>
                <div className="flex flex-col px-[2rem] text-white mb-[0.5rem] text-sm">
                    <div className="flex justify-between w-full items-center mb-[0.5rem]">
                        <div className="flex gap-1">
                            <h5>Vínculo:</h5>
                            <h5>Estudante</h5>
                        </div>
                        <div className="flex gap-1">
                            <h5>Status:</h5>
                            <h5 className="text-[#1BD273]">Ativo</h5>
                        </div>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <div className="flex gap-1">
                            <h5>Confirma Presença</h5>
                        </div>
                        <div className="flex gap-1">
                            <h5>Resposta:</h5>
                            <h5 className="text-[#DC3545]">Não</h5>
                        </div>
                    </div>  
                </div>
                <UserBalance/>
            </div>
        </div>
	);
}

export default BannerCard;
