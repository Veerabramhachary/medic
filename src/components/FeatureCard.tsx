import { type FeatureCardProps } from "../types/types";
const FeatureCard = (props: FeatureCardProps) => {
    return (
        <div className={`shadow-md rounded-lg p-6 m-4 w-80 ${props.cn}`}>
            {props.icon && (
                <div className="flex  justify-between mb-16 items-center">
                    {props.icon}
                    {props.bridge && (
                        <span
                            className={`rounded  mt-2 inline-block bg-accent ${props.cn}`}
                        >
                            <p className="text-white font-bold p-1 px-2">
                                {props.bridge}
                            </p>
                        </span>
                    )}
                </div>
            )}
            <h3 className="text-xl font-bold mb-4">{props.title}</h3>
            <p className="text-gray-600">{props.description}</p>
        </div>
    );
};
export default FeatureCard;
