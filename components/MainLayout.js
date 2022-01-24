import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";
import Header from "./Header";
import en from "../locales/en/en.js";
import ru from "../locales/ru/ru.js";

export function MainLayout({children, title}) {
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;
    return (
        <>
            <Head>
                <link rel="icon" href="/aperture.svg"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
                <title>{title} | Codify CRM</title>
                <meta charSet="utf-8"/>
                <script src="//code-ya.jivosite.com/widget/tNypJU48Vz" async/>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="https://kit.fontawesome.com/e4dd657689.js" crossOrigin="anonymous"/>
            </Head>
            <Header/>
            <main>
                {children}
            </main>

            <style jsx>{`
              main {
                font-family: 'Montserrat', sans-serif;
                margin-top: 60px;
              }
            `}</style>

            <footer className="footer has-background-grey-dark has-text-grey">
                    <div className="content has-text-centered-desktop has-text-centered-mobile">
                        <h1 className="has-text-white">Codify LMS CRM</h1>
                        <span className="ml-1"><Link href="/privacy-policy"><a className="has-text-grey">{t.privacyPolicy.title}</a></Link></span>
                        <p>Codify LMS © 2020-2022</p>
                    </div>

            </footer>
        </>
    )
}