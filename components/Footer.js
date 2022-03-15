import Link from "next/link";
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import { redirectToAnchor } from './commonFunctions';

export default function Footer() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    function redirectTo(path) {
        return router.push({pathname: path, query: router.query}, undefined, {scroll: true});
    }

    return (
        // <>
        //     <footer className="footer has-background-grey-dark has-text-grey">
        //         <div className="content has-text-centered-desktop has-text-centered-mobile">
        //             <h1 className="has-text-white">Codify LMS CRM</h1>
        //             <div className="columns">
        //                 <div className="column">Features</div>
        //                 <div className="column">Price</div>
        //             </div>
        //             <p>Codify LMS © 2020-2022</p>
        //             <span className="ml-1"><Link href="/privacy-policy"><a className="has-text-grey">{t.privacyPolicy.title}</a></Link></span>
        //         </div>
        //
        //     </footer>
        // </>
        <>
            <footer style={{backgroundColor: "rgba(239,239,239,0.43)"}} className="footer">
                <div className="container mt-3">
                    <div className="content has-text-centered">
                        <p>Copyright © Codify LMS CRM 2019-2022</p>

                    </div>

                    <div className="columns">
                        <div className="column">
                            <h4 className="bd-footer-title has-text-weight-medium has-text-left">
                                {t.footer.title}
                            </h4>
                            <p className="bd-footer-link has-text-left">
                                {t.footer.description}
                            </p>

                        </div>

                        <div className="column">
                            <p className="bd-footer-link">
                                <a>
                                    <span onClick={() => redirectToAnchor("#product-block",router)}
                                          className="icon-text">
                                        {t.layout.product}
                                    </span>
                                </a>
                                <br/>
                                <a>
                                    <span onClick={() => redirectToAnchor("#category-block",router)}
                                          className="icon-text">
                                        {t.layout.category}
                                    </span>
                                </a>
                                <br/>
                                <a>
                                    <span onClick={() => redirectToAnchor("#features-block",router)}
                                          className="icon-text">
                                        {t.layout.features}
                                    </span>
                                </a>
                                <br/>
                                <a>
                                    <span onClick={() => redirectToAnchor("#pricing-block",router)}
                                          className="icon-text">
                                        {t.layout.price}
                                    </span>
                                </a>
                            </p>
                        </div>
                        <div className="column">
                            <p className="bd-footer-link">
                                <a href={t.banner.insta} target='_blank' rel="noreferrer">
                                    <span className="icon-text">
                                        Instagram
                                    </span>
                                </a>
                                <br/>
                                <a href={t.banner.facebook} target='_blank' rel="noreferrer">
                                    <span className="icon-text">
                                        Facebook
                                    </span>
                                </a>
                                <br/>
                                <a href={t.banner.telegram} target='_blank' rel="noreferrer">
                                    <span className="icon-text">
                                        Telegram
                                    </span>
                                </a>
                                <br/>
                                <a href={t.banner.whatsapp} target='_blank' rel="noreferrer">
                                    <span className="icon-text">
                                        WhatsApp
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}