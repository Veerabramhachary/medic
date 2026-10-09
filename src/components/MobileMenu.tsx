import { type MobileMenuProps } from "../types/types";

const MobileMenu = (props: MobileMenuProps) => {
    return (
        <nav
            aria-label="Mobile navigation"
            className={`absolute inset-x-0 top-full z-50 border-t border-gray-200 bg-white shadow-lg md:hidden ${props.cn}`}
        >
            <ul className="flex flex-col px-4 py-2">
                {props.items.map((item, index) => (
                    <li
                        key={index}
                        className="border-b border-gray-100 last:border-b-0"
                    >
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="block py-3 text-gray-700 transition-colors hover:text-gray-900"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default MobileMenu;
