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
    {code: 'nl', label: 'Dutch', flag: '🇳🇱'},
    {code: 'tr', label: 'Turkish', flag: '🇹🇷'},
    {code: 'es', label: 'Spanish', flag: '🇪🇸'}
];

export default function LanguageMenu() {
    const [currentLangIndex, setCurrentLangIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    function toggleLanguageMenu() {
        setIsOpen(!isOpen);
    }

    const handleLanguageSwitch = (index: number) => {
        setCurrentLangIndex(index);
        setIsOpen(false);
    }

    const currentLang = languages[currentLangIndex];

    return (
        <div className={"relative ml-4!"}>
            <button onClick={toggleLanguageMenu}>
                {currentLang.flag}
            </button>
            {isOpen && (
                <div className={"absolute bg-secondary-blue rounded-xl mt-2! p-2!"}>
                    <ul className={"flex flex-col items-start"}>
                        {languages.map((lang, index) => (
                            <li className={""} key={lang.code} onClick={() => handleLanguageSwitch(index)}>
                                <div className={"flex items-center text-white gap-2 m-2!"}>
                                    <p>{lang.flag}</p>
                                    <p>{lang.label}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )

}
