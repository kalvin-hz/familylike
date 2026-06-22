'use client'

import Link from "next/link";
import LanguageMenu from "@/components/LanguageMenu";
import {useState} from "react";

export default function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div
            className="md:hidden sticky top-0 z-1000 w-full bg-[whitesmoke] border-b border-border-light backdrop-blur-[6px]">
            {/* Header Area */}
            <div className="flex items-center justify-between p-3 px-5">
                <img id="logo" src="/img/logo.png" alt="Logo" className="h-12 w-auto"/>

                <div className={"flex items-center gap-2"}>
                    <LanguageMenu />

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="flex flex-col justify-center items-center gap-1.5 w-max h-max cursor-pointer focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
                        <span
                            className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}/>
                        <span
                            className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            {isMenuOpen && (
                <div className="flex flex-col bg-[whitesmoke] px-5 pb-5 pt-2 border-t border-border-light">
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="py-3 text-dark-blue hover:text-hover font-semibold text-lg border-b border-gray-100"
                    >
                        Home
                    </Link>
                    <Link
                        href="/team"
                        onClick={() => setIsMenuOpen(false)}
                        className="py-3 text-dark-blue hover:text-hover font-semibold text-lg border-b border-gray-100"
                    >
                        Team
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="py-3 text-dark-blue hover:text-hover font-semibold text-lg"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </div>
    );
}