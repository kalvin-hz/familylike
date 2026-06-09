import Link from "next/link";

export default function Navbar() {
    return (
        <div className="nav">
            <img id="logo" src="/img/logo.png" alt="Logo" />
            <Link href="/">Home</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Contact</Link>
        </div>
    );
}