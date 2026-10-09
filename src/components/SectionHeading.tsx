import { type SectionHeadingProps } from "../types/types";
const SectionHeading = (props: SectionHeadingProps) => {
    return (
        <h3
            className={`text-[1.25rem] sm:text-[1.6rem] md:text-[2.5rem] lg:text-[3rem] font-bold ${props.cn}`}
        >
            {props.text}

            {props.spanText && (
                <span className={`${props.spanCn}`}> {props.spanText}</span>
            )}
        </h3>
    );
};
export default SectionHeading;
