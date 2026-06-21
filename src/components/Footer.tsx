import Link from "next/link";
import LanguageMenu from "@/components/LanguageMenu";

export default function Footer() {
    return (
        <div className="footer">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <LanguageMenu />
        </div>
    );
}