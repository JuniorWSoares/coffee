import type React from "react"
import clsx from "clsx"

interface ButtonProps {
    children: React.ReactNode
    variant: 'primary' | 'secondary' | 'tertiary'
    classList?: string  
}

export const Button: React.FC<ButtonProps> = ({children, variant = 'primary', classList}) => {
    const variantStyles = {
        primary: "bg-primary-200 text-black hover:bg-primary-200/90 ring-tertiary",
        secondary: "bg-secondary text-white hover:bg-secondary/95 ring-tertiary",
        tertiary: "bg-tertiary text-white hover:bg-tertiary/90 ring-primary-200"
    };
    return (
        <button 
            className={clsx(
                "px-4 py-2 rounded-2xl font-semibold transition duration-400 ease-in-out cursor-pointer hover:ring-2 focus:ring-2 ",
                variantStyles[variant],
                classList
            )}
        >
            {children}
        </button>
    )
}