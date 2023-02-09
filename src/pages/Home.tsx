import BannerCard from "../components/Cards/BannerCard";
import CardMenu from "../components/Cards/CardMenu";
import OptionCard from "../components/Cards/OptionCard";
import * as Icon from "phosphor-react";
function Home(){
    return(
        <div>
            <CardMenu pagetitle="Dashboard"/>
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="absolute flex flex-col items-center top-[6rem] w-full lg:static lg:items-start lg:p-20">
                    <BannerCard/>
                </div>
                <div className="pt-[10rem] pl-[1rem] lg:pt-0">
                    <h2 className="font-bold text-lg text-[#212529]">GRU</h2>
                    <div className="flex snap-x snap-mandatory flex-nowrap overflow-x-auto py-[1rem] snap-always snap-center gap-[1rem]">
                        <OptionCard Icon={<Icon.ListDashes size={24}/>} title={"Minha GRU"}/>
                        <OptionCard Icon={<Icon.PlusCircle size={24}/>} title={"Adicionar Créditos"}/>
                        <OptionCard Icon={<Icon.FilePlus size={24}/>} title={"Cadastrar GRU"}/>
                    </div>
                </div>
            </div>

        </div>
        /*
                    <BannerCard/>

            <div className="pt-[3rem] pl-[1rem]">
                <h2 className="font-bold text-lg text-[#212529]">Almoço</h2>
                <div className="flex snap-x snap-mandatory flex-nowrap overflow-x-auto py-[1rem] snap-always snap-center gap-[1rem] no-scrollbar">
                    <OptionCard Icon={<Icon.ChartPie size={24}/>} title={"Extrato"}/>
                    <OptionCard Icon={<Icon.UserPlus size={24}/>} title={"Confirmar Presença"}/>
                    <OptionCard Icon={<Icon.FilePlus size={24}/>} title={"Minhas GRU"}/>
                </div>
            </div>
            */
    )   

}
export default Home;