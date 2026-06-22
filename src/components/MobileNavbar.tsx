'use client'

import Link from "next/link";
import {useState} from "react";

interface Language {
    code: string;
    label: string;
    flag: string; // URL or Emoji
}

const languages: Language[] = [
    {code: 'de', label: 'German', flag: '🇩🇪'},
    {code: 'en', label: 'English', flag: '🇺🇸'},
    {code: 'dk', label: 'Danish', flag: '🇩🇰'},
];

export default function MobileNavbar() {
    const [currentLangIndex, setCurrentLangIndex] = useState(0);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleLanguageMenu() {
        setIsLangOpen(!isLangOpen);
    }

    const handleLanguageSwitch = (index: number) => {
        setCurrentLangIndex(index);
        setIsLangOpen(false);
    }

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const currentLang = languages[currentLangIndex];

    return (
        <div
            className="md:hidden sticky top-0 z-1000 w-full bg-[whitesmoke] border-b border-border-light backdrop-blur-[6px]">
            {/* Header Area */}
            <div className="flex items-center justify-between p-3 px-5">
                <img id="logo" src="/img/logo.png" alt="Logo" className="h-12 w-auto"/>

                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="relative">
                        <button onClick={toggleLanguageMenu} className="cursor-pointer text-xl">
                            {currentLang.flag}
                        </button>
                        {isLangOpen && (
                            <div className="absolute right-0 bg-secondary-blue rounded-xl mt-2 p-2 z-1001 shadow-lg">
                                <ul className="flex flex-col items-start min-w-30">
                                    {languages.map((lang, index) => (
                                        <li
                                            className="w-full hover:bg-slate-700/50 rounded-lg cursor-pointer"
                                            key={lang.code}
                                            onClick={() => handleLanguageSwitch(index)}
                                        >
                                            <div className="flex items-center text-white gap-2 m-2!">
                                                <p>{lang.flag}</p>
                                                <p className="text-sm font-semibold">{lang.label}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

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