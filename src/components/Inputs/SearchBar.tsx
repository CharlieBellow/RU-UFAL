import * as Icon from "phosphor-react";

function SearchBar(){
    return(
        <div className="relative w-[28rem] opacity-80 text-lg text-slate-700 mr-44">
            <div className="absolute inset-y-0 left-0 flex items-center pl-[1.5rem] pointer-events-none"> 
                <Icon.MagnifyingGlass size={24}/>
            </div>
            <input className="block w-full py-2 px-2 pl-[4rem] rounded-2xl shadow-xl focus:outline-blue-500" type="search" placeholder="O que está procurando?"></input>
        </div>
    )
}
export default SearchBar;