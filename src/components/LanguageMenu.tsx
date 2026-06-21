'use client';

import React, {useState} from 'react';

interface Language {
    code: string;
    label: string;
    flag: string; // URL or Emoji
}

const languages: Language[] = [
    {code: 'de', label: 'Deutsch', flag: '🇩🇪'},
    {code: 'en', label: 'English', flag: '🇺🇸'},
    {code: 'dk', label: 'Danish', flag: '🇩🇰'},
];

export default function LanguageMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(languages[0]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const selectLanguage = (lang: Language) => {
        setCurrentLang(lang);
        setIsOpen(false);
        // Add your Next.js internationalization (i18n) logic here
    };

    // Menu configuration
    const radius = 90; // Distance from the center in pixels
    const totalItems = languages.length;

    return (
        <div className="fixed bottom-0 right-0 flex items-center justify-center h-16 w-16 m-4!">

            {/* SUB-MENU ITEMS (The Outer Flags) */}
            {languages.map((lang, index) => {
                // 1. Define your arc constraints (e.g., Top-Right Quadrant)
                const startAngle = 180; // 0 is directly right
                const endAngle = 270; // 90 is directly down
                const arcLength = endAngle - startAngle;

                // 2. Distribute items evenly across the arc
                // We use (totalItems - 1) so the first item is exactly at startAngle
                // and the last item is exactly at endAngle.
                const angle = totalItems > 1
                    ? startAngle + (index * arcLength) / (totalItems - 1)
                    : startAngle;

                // 3. Convert to Radians for JavaScript's Math functions
                const angleRad = (angle * Math.PI) / 180;

                // 4. Calculate X and Y offsets
                const x = isOpen ? Math.round(radius * Math.cos(angleRad)) : 0;
                const y = isOpen ? Math.round(radius * Math.sin(angleRad)) : 0;
                return (
                    <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang)}
                        disabled={!isOpen}
                        className={`
              absolute z-10 flex h-12 w-12 items-center justify-center 
              rounded-full bg-white text-xl shadow-lg border border-gray-100
              transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-50
              ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}
            `}
                        style={{
                            transform: `translate(${x}px, ${y}px)`,
                        }}
                        title={lang.label}
                    >
                        {/* Replace with <Image> or flag component as needed */}
                        <span className="select-none">{lang.flag}</span>
                    </button>
                );
            })}

            {/* MAIN TOGGLE BUTTON (The Center Flag) */}
            <button
                onClick={toggleMenu}
                className={`
          relative z-20 flex h-16 w-16 items-center justify-center 
          rounded-full bg-white text-3xl shadow-xl border-2 border-indigo-500
          transition-transform duration-300 active:scale-95 focus:outline-none
        `}
            >
                <span className="select-none">{currentLang.flag}</span>
            </button>

            {/* BACKDROP CLOSURE (Click anywhere outside to close) */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-0 bg-transparent"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
