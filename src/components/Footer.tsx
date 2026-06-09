import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
        </div>
    );
}