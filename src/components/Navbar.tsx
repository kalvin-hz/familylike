'use client'

import Link from "next/link";
import LanguageMenu from "@/components/LanguageMenu";


export default function Navbar() {
    return (
        <div className="nav hidden! md:flex!">
            <a href="/" className="mr-auto!"><img id="logo" src="/img/logo.png" alt="Logo" /></a>

            <LanguageMenu />

            <Link href="/">Home</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
}