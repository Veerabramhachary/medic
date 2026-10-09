import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { CircleX, MenuIcon } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const items = ["Home", "About", "Services", "Contact"];

    const goToSite = () => {
        window.open("https://www.example.com", "_blank");
    };

    return (
        <header className="relative w-full shadow-sm h-20">
            <div className=" flex min-h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-10">
                    <a
                        href="#home"
                        className="shrink-0 text-lg font-semibold text-accent"
                    >
                        MEDIC
                    </a>

                    <nav
                        aria-label="Primary navigation"
                        className="hidden lg:block"
                    >
                        <ul className="flex items-center gap-6">
                            {items.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-700 transition-colors hover:text-accent"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="hidden lg:block">
                    <Button
                        text="Get Appointment"
                        cn="bg-accent text-white hover:bg-blue-700"
                        onClick={goToSite}
                    />
                </div>

                {isMenuOpen && (
                    <MobileMenu
                        items={items}
                        cn="animate-in fade-in slide-in-from-top-2 duration-200"
                    />
                )}

                {!isMenuOpen ? (
                    <MenuIcon
                        className="cursor-pointer lg:hidden"
                        aria-label="Open menu"
                        onClick={() => setIsMenuOpen(true)}
                    />
                ) : (
                    <CircleX
                        className="cursor-pointer lg:hidden"
                        aria-label="Close menu"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </div>
        </header>
    );
};
export default Navbar;
