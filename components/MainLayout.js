import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";
import Header from "./Header";

export function MainLayout({children, title}) {
    let router = useRouter()
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

            <footer style={{marginTop:70}} className="footer has-background-grey-dark">
                <div className="content has-text-centered has-text-white">
                    <div className="columns">
                        <div className="content has-text-white">
                            <div className="column">
                                <h1>Codify LMS CRM</h1>
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns">
                                <div className="column">
                                    <p>CRM для спортивных секций и кружков</p>
                                    <p>CRM для спортивных секций и кружков</p>
                                    <p>CRM для спортивных секций и кружков</p>
                                </div>
                                <div className="column">
                                    <p>CRM для спортивных секций и кружков</p>
                                    <p>CRM для спортивных секций и кружков</p>
                                    <p>CRM для спортивных секций и кружков</p>
                                    <p>CRM для спортивных секций и кружков</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}