import * as Icon from "phosphor-react";

interface optionProps {
    title: String;
    Icon: Icon.IconProps;
}


function OptionCard(props: optionProps){
    return(
        <div className="flex flex-none">
            <div className="bg-white shadow-card rounded-xl text-sm flex flex-col p-[0.75rem] w-[10.5rem]">
                <>{props.Icon}</>
                <span className="mt-[1rem]">{props.title}</span>
            </div>
        </div>

    )
}
export default OptionCard;