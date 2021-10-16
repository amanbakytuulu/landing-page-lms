import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";
import Header from "./Header";
import en from "../locales/en.js";
import ru from "../locales/ru.js";

export function MainLayout({children, title}) {
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;
    return (
        <>
            <Head>
                <link rel="icon" href="/assets/img/logo.png"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
                <title>{title} | Codify CRM</title>
                <meta charSet="utf-8"/>
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

            <footer style={{marginTop: 70}} className="footer has-background-grey-dark has-text-grey">
                    <div className="content has-text-centered-desktop has-text-centered-mobile">
                        <h1 className="has-text-white">Codify LMS CRM</h1>
                        <span><a className="has-text-grey">Договор оферта</a></span> •
                        <span className="ml-1"><a className="has-text-grey">Политика конфедициальности</a></span>
                        <p>Codify LMS © 2020-2021</p>
                    </div>
            </footer>
        </>
    )
}