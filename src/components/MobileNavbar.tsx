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
            className="md:hidden sticky top-0 z-1000 w-full bg-white">
            {/* Header Area */}
            <div className="flex items-center justify-between p-3 px-5">
                <img id="logo" src="/img/logo.png" alt="Logo" className="h-12 w-auto"/>

                <div className={"flex items-center gap-2"}>
                    <LanguageMenu />

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="flex flex-col justify-center items-center gap-1.5 w-16 h-12 cursor-pointer focus:outline-none"
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
                <div className="flex flex-col px-3! py-2! ml-auto! text-end w-fit">
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="pb-2! text-dark-blue hover:text-hover font-semibold text-2xl"
                    >
                        Home
                    </Link>
                    <Link
                        href="/team"
                        onClick={() => setIsMenuOpen(false)}
                        className="pb-2! text-dark-blue hover:text-hover font-semibold text-2xl"
                    >
                        Team
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="pb-2! text-dark-blue hover:text-hover font-semibold text-2xl"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </div>
    );
}