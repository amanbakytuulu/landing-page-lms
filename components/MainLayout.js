import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";
import Header from "./Header";
import en from "../locales/en/en.js";
import ru from "../locales/ru/ru.js";
import Footer from "./Footer";

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
            <Footer/>
        </>
    )
}