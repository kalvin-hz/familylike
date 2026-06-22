import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import "./countdown.css";
import "./landing_style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Viewport } from "next";
import MobileNavbar from "@/components/MobileNavbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Familylike",
    description: "Eine neue Perspektive für ländliche Räume",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <MobileNavbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
