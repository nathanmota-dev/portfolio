import { IconType } from "react-icons";

type TechBadgeProps = {
    name: string;
    Icon?: IconType;
    bgColor: string;
}

export const TechBadge = ({ name, Icon, bgColor }: TechBadgeProps) => {
    return (
        <span className={`flex items-center text-black dark:text-white ${bgColor} text-sm py-1 px-3 rounded-2xl`}>
            {Icon && <Icon className="mr-2 text-2xl" />}
            {name}
        </span>
    )
}