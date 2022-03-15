import logo from "../assets/svg/logo.svg"
import Image from 'next/image'
import Link from "next/link";
import {useRouter} from "next/router";

import en from '/locales/en/en';
import ru from '/locales/ru/ru';

import usa from "../assets/img/usa1.png"
import rus from "../assets/img/rus1.png"
import React, {useState} from "react";
import closeIcon from "../assets/img/XcloseImage.png";
import aperture from "../public/aperture.svg"
import insta from "../assets/svg/insta.svg";
import whats from "../assets/svg/whasp.svg";
import tg from "../assets/svg/tg.svg";
import fb from "../assets/svg/fb.svg";
import SingleForm from "./SingleForm";
import Modal from "./Modal";
import { redirectToAnchor } from './commonFunctions';

export default function Header(...props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    const [asideShow, setAsideShow] = useState(false)

    function redirectTo(path) {
        setAsideShow(false)
        return router.push({pathname: path, query: router.query}, undefined, {scroll: true});
    }

    const changeLanguage = (e) => {
        const locale = e.target.id;
        router.push(router.pathname, router.asPath, {locale, scroll: false});
        setAsideShow(false)
    };
    const [showModal, setShowModal] = useState(false)

    const showModalHideMenu = (e) => {
        setShowModal(true)
        setAsideShow(false)
    }

    return (
        <>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                <SingleForm/>
            </Modal>
            <style jsx>
                {`
                  .navbar {
                    font-family: 'Montserrat', sans-serif;
                    box-shadow: 60px -16px teal;
                  }
                `}
            </style>
            <nav className="navbar has-text-justified-desktop is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a>
                        <div className='navbar-item' onClick={() => redirectTo("/")}>
                            <Image width="169" height="35" alt="Codify LMS x CRM" src={logo}/>
                        </div>
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="true" onClick={() => setAsideShow(!asideShow)}>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <div className="navbar-menu">

                    <div className="navbar-item" onClick={() => redirectToAnchor('#product-block',router)}>
                        <div className="violet-text">
                            <h4>
                                <a>
                                    {t.layout.product}
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="navbar-item" onClick={() => redirectToAnchor("#category-block",router)}>
                        <div className="violet-text">
                            <a>
                                <h4>{t.layout.category}</h4>
                            </a>
                        </div>
                    </div>
                    <div className="navbar-item" onClick={() => redirectToAnchor("#features-block",router)}>
                        <div className="violet-text">
                            <a>
                                <h4>{t.layout.features}</h4>
                            </a>
                        </div>
                    </div>
                    <div className="navbar-item" onClick={() => redirectToAnchor("#pricing-block",router)}>
                        <div className="violet-text">
                            <a>
                                <h4>{t.layout.price}</h4>
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button style={{color: '#ffffff'}} onClick={() => redirectTo("/demo")} className='button btn-orange-grad demo-btn is-small'>
                                {t.sign}
                            </button>
                        </div>
                        <div className="navbar-item">
                            <button
                                onClick={() => router.push({
                                    pathname: '/test_drive',
                                    query: router.query
                                })
                                }
                                style={{backgroundColor: '#7367F0FF'}}
                                className='button btn-grad is-small test-drive-btn'>
                                <a className='has-text-white'>
                                    {t.test_drive.title}
                                </a>
                            </button>
                        </div>
                        <div className="navbar-item">
                            <a href={t.banner.insta} target='_blank' rel="noreferrer">
                                <Image src={insta}/>
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a href={t.banner.whatsapp} target='_blank' rel="noreferrer">
                                <Image src={whats}/>
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a href={t.banner.telegram} target='_blank' rel="noreferrer">
                                <Image src={tg}/>
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a href={t.banner.facebook} target='_blank' rel="noreferrer">
                                <Image src={fb}/>
                            </a>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable lang-dropdown mr-6">
                            <a className="navbar-link is-arrowless">
                                <Image className="language_img" src={locale === "en" ? usa : locale === "ru" ? rus : en}
                                       alt=""/>
                            </a>

                            <div style={{cursor: "pointer"}} className="navbar-dropdown is-boxed is-right">
                                <a className="navbar-item" id="en" onClick={changeLanguage}>
                                    <Image id="en" onClick={changeLanguage}
                                           src={usa} className="language_img"
                                           alt=""/>
                                    <div id="en" onClick={changeLanguage} style={{marginLeft: 10}}>English</div>
                                </a>
                                <a className="navbar-item" id="ru" onClick={changeLanguage}>
                                    <Image id="ru" onClick={changeLanguage}
                                           src={rus} className="language_img"
                                           alt=""/>
                                    <div id="ru" onClick={changeLanguage} style={{marginLeft: 10}}>Русский</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={asideShow === false ? "dont-show" : null}>
                <aside className="menu side-menu">
                    <ul className="menu-list">
                        <li className="menu-label mt-2">
                            <p>{router.locale === "ru" ? "Навигация" : "Navigation"}</p>
                        </li>
                        <li>
                            <a onClick={() => redirectToAnchor("#product-block",router)}>
                                {t.layout.product}
                            </a>
                        </li>
                        <li>
                            <a onClick={() => redirectToAnchor("#category-block",router)}>
                                {t.layout.category}
                            </a>
                        </li>
                        <li>
                            <a onClick={() => redirectToAnchor("#features-block",router)}>
                                {t.layout.features}
                            </a>
                        </li>
                        <li>
                            <a onClick={() => redirectToAnchor("#pricing-block",router)}>
                                {t.layout.price}
                            </a>
                        </li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                    </ul>
                    <ul className="menu-list">
                        <li className="menu-label">
                            <p>{router.locale === "ru" ? "Выбор языка" : "Language"}</p>
                        </li>
                        <li>
                            <div style={{cursor: "pointer"}} className="navbar-dropdown is-boxed is-right mb-3">
                                <a style={{display:'flex', alignItems:'center'}} className="navbar-item" id="en" onClick={changeLanguage}>
                                    <Image id="en" onClick={changeLanguage}
                                           src={usa} className="language_img"
                                           alt="usa"/>
                                    <div id="en" onClick={changeLanguage} style={{marginLeft: 12}}>English</div>
                                </a>
                                <a style={{display:'flex', alignItems:'center'}} className="navbar-item" id="ru" onClick={changeLanguage}>
                                    <Image id="ru" onClick={changeLanguage}
                                           src={rus} className="language_img"
                                           alt="rus"/>
                                    <div id="ru" onClick={changeLanguage} style={{marginLeft: 12}}>Русский</div>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul className="menu-list is-inline-flex">
                        <li>
                            <a href={t.banner.insta} target='_blank' rel="noreferrer">
                                <Image src={insta}/>
                            </a>
                        </li>
                        <li>
                            <a href={t.banner.whatsapp} target='_blank' rel="noreferrer">
                                <Image src={whats}/>
                            </a>
                        </li>
                        <li>
                            <a href={t.banner.telegram} target='_blank' rel="noreferrer">
                                <Image src={tg}/>
                            </a>
                        </li>
                        <li>
                            <a href={t.banner.facebook} target='_blank' rel="noreferrer">
                                <Image src={fb}/>
                            </a>
                        </li>
                    </ul>
                    <div className="navbar-item">
                        <button className='button btn-orange-grad is-small demo-btn pb-5' onClick={() => redirectTo("/demo")}>
                            {t.sign}
                        </button>
                    </div>
                    <div className="navbar-item" onClick={() => redirectTo("/test_drive")}>
                        <button className='button btn-grad is-small test-drive-btn pb-5'>
                            {t.test_drive.title}
                        </button>
                    </div>

                </aside>
            </div>
        </>
    )
}