import Link from "next/link";
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import Image from "next/image"
import instagram from "../assets/svg/insta.svg";
import whats from "../assets/svg/whasp.svg";
import telegram from "../assets/svg/tg.svg";
import facebook from "../assets/svg/fb.svg";
import location from "../assets/svg/location.svg";
import telephone from "../assets/svg/telephone.svg";
import email from "../assets/svg/email.svg";
import {redirectTo, redirectToAnchor} from './commonFunctions';
import React from "react";

export default function Footer() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

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
            <footer style={{backgroundColor: "rgba(239,239,239,0.43)"}} className="footer pt-5 pb-6">
                <div className="container has-text-centered mt-2">
                    <div className="columns display-columns is-flex">
                        <div className="column order ">
                            <h4 className="is-size-4 mb-1">Навигация</h4>
                            <div className={"is-flex is-flex-direction-column"}>
                                <a>
                                    <span onClick={() => redirectToAnchor("#product-block", router)}
                                          className="icon-text">
                                        {t.layout.product}
                                    </span>
                                </a>
                                <a>
                                    <span onClick={() => redirectToAnchor("#category-block", router)}
                                          className="icon-text">
                                        {t.layout.category}
                                    </span>
                                </a>
                                <a>
                                    <span onClick={() => redirectToAnchor("#features-block", router)}
                                          className="icon-text">
                                        {t.layout.features}
                                    </span>
                                </a>
                                <a>
                                    <span onClick={() => redirectToAnchor("#pricing-block", router)}
                                          className="icon-text">
                                        {t.layout.price}
                                    </span>
                                </a><br/>
                                <button style={{color: '#ffffff'}} onClick={() => redirectTo("/demo", router)}
                                        className='button btn-orange-grad is-small mb-2'>
                                    Заказать Демо
                                </button>
                                <button style={{backgroundColor: '#7367F0FF'}}
                                        onClick={() => redirectTo("/test_drive", router)}
                                        className='button btn-grad is-small'>
                                    Тест Драйв
                                </button>
                            </div>
                        </div>

                        <div className="column is-align-self-center order">
                            <p className="content">
                                <h2 className="has-text-blue mb-2">{t.footer.title}</h2>
                                <div className="is-size-7">
                                    <Link href={"/privacy-policy"}>
                                        <a>
                                            {t.footer.privacy}
                                        </a>
                                    </Link>
                                    <div>
                                        {t.footer.copyright}
                                    </div>
                                </div>
                                <div className="is-flex is-justify-content-center">
                                    <a href={t.banner.instagram} target='_blank' rel="noreferrer" className={"mr-3"}>
                                        <Image src={instagram} alt="instagram-link" width="21px"/>
                                    </a>
                                    <br/>
                                    <a href={t.banner.facebook} target='_blank' rel="noreferrer" className={"mr-3"}>
                                        <Image src={facebook} alt="facebook-link" width="21px"/>
                                    </a>
                                    <br/>
                                    <a href={t.banner.telegram} target='_blank' rel="noreferrer" className={"mr-3"}>
                                        <Image src={telegram} alt="telegram-link" width="21px"/>
                                    </a>
                                    <br/>
                                    <a href={t.banner.whatsapp} target='_blank' rel="noreferrer">
                                        <Image src={whats} alt="whats-link" width="21px"/>
                                    </a>
                                </div>
                            </p>
                        </div>
                        <div className="column order">
                            <h4 className="is-size-4 mb-2 ">{t.contacts.title}</h4>
                                <p className="mb-2 ">
                                     <span style={{position:'relative', top:'2px'}}>
                                       <Image src={location} alt="place" width={17} height={17}/>
                                     </span>
                                    <span style={{marginLeft: '12px'}}>
                                     Исанова 105\3
                                     </span>
                                </p>
                                <p className="mb-2 ">
                                    <span style={{position:'relative', top:'1px'}}>
                                        <Image src={telephone} alt="tel" width={15} height={15}/>
                                    </span>
                                    <a href={"tel:+996223333480"} style={{marginLeft: '12px'}}>
                                        +996223333480
                                    </a>
                                </p>
                                <p className="mb-2 ">
                                    <span style={{position:'relative', top:'3px'}}>
                                        <Image src={email} alt="email" width={15} height={15}/>
                                    </span>
                                    <a href={"mailto:lms@codifylab.com"} style={{marginLeft: '12px'}}>
                                        lms@codifylab.com
                                    </a>
                                </p>
                        </div>
                    </div>
                    <hr className="has-background-grey-lighter"/>
                    <div className="has-text-centered mt-5">
                        <p>Copyright © Codify LMS CRM 2019-2022</p>
                    </div>
                </div>
            </footer>
        </>
    )
}