'use client'

import { useEffect } from "react";
import Link from "next/link";

export default function Page() {

    useEffect(() => {
        // No event listener wrapper needed here!
        const gallery = document.querySelector('.polaroid-gallery');

        // Safety check: Make sure the gallery exists in the DOM
        if (gallery) {
            const items = gallery.querySelectorAll('a');

            items.forEach((item, index) => {
                // Set the delay based on item position (0ms, 100ms, 200ms, etc.)
                const delay = index * 100;
                (item as HTMLElement).style.animationDelay = `${delay}ms`; // Added simple TS type casting for style
            });

            setTimeout(() => {
                gallery.classList.add('animate');
            }, 100);
        }
    }, []);

    return (
        <>
            <div className="main-content">
                <h1>FamilyLike</h1>
                <div className="polaroid-gallery">
                    <a href="#">
                        <img src="/img/estate.png" alt="img" className="grayscale-100"/>
                        <p>
                            Estate<br/>
                            (geplant 20.6.2026)
                        </p>
                    </a>
                    <a href="#">
                        <img src="/img/nachher.png" alt="img" className="grayscale-100"/>
                        <p>
                            Revitalisierung im Ländlichen Raum<br/>
                            (geplant 20.6.2026)
                        </p>
                    </a>
                    <a href="#">
                        <img src="/img/pai.jpg" alt="img" className="grayscale-100"/>
                        <p>
                            Professional / Administrative / Institutional<br/>
                            (geplant 20.6.2026)
                        </p>
                    </a>
                    <a href="#">
                        <img src="/img/ecological-agriculture.jpg" alt="img" className="grayscale-100"/>
                        <p>
                            Ecological Agriculture<br/>
                            (Is' bald soweit)
                        </p>
                    </a>
                    <a href="#">
                        <img src="/img/social.jpg" alt="img" className="grayscale-100"/>
                        <p>
                            Social<br/>
                            (Is' bald soweit)
                        </p>
                    </a>
                    <a href="#">
                        <img src="/img/environmental.png" alt="img" className="grayscale-100"/>
                        <p>
                            Environmental<br/>
                            (Is' bald soweit)
                        </p>
                    </a>
                </div>
            </div>
        </>
    );
}