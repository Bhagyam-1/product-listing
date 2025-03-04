interface ButtonProps {
    name: string;
    buttonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    classNames?: string;
    disabled?: boolean;
}

const Button = ({ name, buttonClick, classNames, disabled }: ButtonProps) => {
    return (
        <button
            type="button"
            disabled={disabled}
            title={name}
            className={`rounded-full px-4 py-2 transition-all ${disabled
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                    : "bg-button-color text-primary-text cursor-pointer hover:scale-110"
                } ${classNames}`}
            onClick={disabled ? undefined : buttonClick}
        >{name}</button>
    )
}

export default Button;