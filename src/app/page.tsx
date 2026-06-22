import Link from 'next/link';
import LanguageMenuCircular from "@/components/LanguageMenu-circular";

export default function Home() {
    return (
        <>
            <div className="hero-video">
                <video
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    style={{
                        objectFit: 'cover',
                        position: 'fixed',
                        top: 0,       // 2. Lock to top boundary
                        left: 0,      // 3. Lock to left boundary
                        width: '100vw',  // 4. Force strict viewport width coverage
                        height: '100vh', // 5. Force strict viewport height coverage
                        zIndex: -1,
                        filter: 'brightness(0.7)'
                    }}
                >
                    <source src="/vid/background-vid.mp4" type="video/mp4"/>
                </video>

                <div className="hero">
                    <div className="hero-text">
                        <h1>
                            Eine neue Perspektive für<br/>
                            <span>ländliche Räume</span>
                        </h1>
                        <p>
                            Ein strukturierter Ansatz, der einzelne Flächen in vernetzte, zukunftsfähige
                            Lebens- und Arbeitsräume verwandelt.<br/><br/>
                            Sozial. Gesellschaftsfähig. Nachhaltig.
                        </p>

                        <Link href="/besiedlung-laendlicher-raeume">
                            <button>Guck dich um</button>
                        </Link>
                    </div>
                </div>

                {/* Social Media Link */}
                <div className="social-media-homepage-div">
                    <a
                        href="https://www.linkedin.com/in/jörg-matthias-schimmer-4a5375309?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/img/linkedin-logo.png" alt="LinkedIn" className="social-media-logo"/>
                    </a>
                </div>
            </div>

        </>
    );
}