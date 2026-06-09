import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";

export default function Page() {
    return (
        <>

            <div className="main-content">

                {/* Isolate the video box */}
                <div className="w-full block overflow-hidden">
                    <video width="100%" height="100%" controls className="block">
                        <source src="/vid/meerkat.mp4" type="video/mp4" />
                        Your Browser doesn't support Video Tags...
                    </video>
                </div>

                {/* Tailwind v4 Explicit Spacing Box */}
                <div className="w-full flex justify-center !my-8">
                    <ImageSlider
                        beforeImage={"/img/vorher.jpg"}
                        afterImage={"/img/nachher.png"}
                        beforeAlt={"before"}
                        afterAlt={"after"}
                    />
                </div>
                <div className="container">
                    <h1>Hey du Farm - Mach was aus dir</h1>
                    <p>Problem behafteter Standort? Keine gescheite Idee für was Neues?</p>
                    <p>Dann prüf’ doch mal deine Möglichkeiten - Schaut gut aus? Dann interessieren wir uns für dich -
                        nimm gerne
                        Kontakt zu uns auf Was dann passieren kann</p>
                    <button>Kontaktieren</button>
                </div>

                <div className="why-us-section container">
                    <h2>Warum mit uns?</h2>
                    <p className="why-us-intro">
                        Oftmals ist der Weg zur erfolgreichen Standortentwicklung unübersichtlich. Wir bieten eine klare
                        Vision und
                        ein starkes Konzept, das alle Beteiligten an einen Tisch bringt.
                    </p>

                    <div className="divider"></div>

                    <div className="flex-container comparison-container">
                        <div className="comparison-card usual">
                            <h3>Der übliche Weg</h3>
                            <p>Standard-Pläne werden zusammengewürfelt und heben Dich kaum von der Konkurrenz ab. Ohne
                                exzellentes
                                Konzept und starkes Netzwerk wird die Umsetzung schwierig, aufwändig und
                                kostenintensiv.</p>
                        </div>

                        <div className="comparison-card with-us">
                            <h3>On Top: Der Weg mit uns</h3>
                            <p>Aus Deinen Wünschen werden Ziele. Ein marktfähiges Flächenkonzept ist das Zentrum Deiner
                                Planung. Mit
                                unserer Kompetenz und unseren Business-Netzwerken verwandeln wir Dein Vorhaben in einen
                                vollen
                                Erfolg.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}