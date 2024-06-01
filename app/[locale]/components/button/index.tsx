import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    customClassName?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
    const baseClass = 'bg-emerald-400 dark:bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 transition-all';
    const hoverClass = !props.disabled ? 'hover:bg-emerald-300 dark:hover:bg-emerald-500' : '';
    const disabledClass = props.disabled ? 'disabled:opacity-50' : '';

    return (
        <button className={`${baseClass} ${hoverClass} ${disabledClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
