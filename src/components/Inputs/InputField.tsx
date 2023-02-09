import * as Icon from "phosphor-react";

function InputField(){
    return(
        <div className="flex flex-row gap-5 p-5">
            <div className="relative flex items-start justify-between flex-row">
                <div className="flex flex-col">
                    <label htmlFor="input_full" className="block mb-2 text-sm text-gray-400">Label</label>
                    <input type="text" id="input_full" placeholder="Informação" className="border-b border-gray-400 text-gray-900 w-full"></input>
                </div>
                <Icon.Eye size={24} className="flex items-center"/>
            </div>
        </div>
    )
}
export default InputField;