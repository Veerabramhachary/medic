import type { ButtonProps } from "../types/types";

const Button = (props: ButtonProps) => {
    return (
        <button
            className={`font-bold py-2 px-4 rounded-[0.8rem] ${props.cn || ""}`}
            {...props}
        >
            {props.text}
        </button>
    );
};
export default Button;
