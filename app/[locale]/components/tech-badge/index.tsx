import { IconType } from 'react-icons';

type TechBadgeProps = {
    name: string;
    Icon?: IconType;
}

export const TechBadge = ({ name, Icon }: TechBadgeProps) => {
    return (
        <span className="flex items-center text-emerald-200 dark:text-emerald-400 bg-emerald-700/80 dark:bg-emerald-900/80 text-sm py-1 px-3 rounded-lg">
            {Icon && <Icon className="mr-2" />}
            {name}
        </span>
    )
}
