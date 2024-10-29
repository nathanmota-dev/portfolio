type BadgeProps = {
    name: string;
}

export const Badge = ({ name }: BadgeProps) => {
    return (
        <span className={`flex items-center text-white bg-red-500 text-[0.75rem] py-1 px-2 rounded-2xl`}>
            {name}
        </span>
    )
}