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

export default function Header(...props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    const [asideShow, setAsideShow] = useState(false)


    let product = router.locale === 'en' ? 'Product' : router.locale === 'ru' ? "Продукт" : "Product"
    let category = router.locale === 'en' ? 'Category' : router.locale === 'ru' ? "Категории" : "Category"
    let features = router.locale === 'en' ? 'Features' : router.locale === 'ru' ? "Особенности" : "Features"
    let price = router.locale === 'en' ? 'Price' : router.locale === 'ru' ? "Цена" : "Price"
    let news = router.locale === 'en' ? 'News' : router.locale === 'ru' ? "Новости" : "News"
    let contacts = router.locale === 'en' ? 'Contacts' : router.locale === 'ru' ? "Контакты" : "Contacts"


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
                    <Link href="/" scroll={true}>
                        <a className="navbar-item">
                            <Image width="169" height="35" alt="Codify LMS x CRM" src={logo}/>
                        </a>
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="true" onClick={() => setAsideShow(true)}>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <div className="navbar-menu">

                    <div className="navbar-item">
                        <div className="violet-text">
                            <h4>
                                <Link href="/#product-block">
                                    {product}
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="violet-text">
                            <Link href="/#category-block">
                                <a>
                                    <h4>{category}</h4>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="violet-text">
                            <Link href="/#features-block">
                                <a>
                                    <h4>{features}</h4>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="violet-text">
                            <Link href="/#pricing-block">
                                <a>
                                    <h4>{price}</h4>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button className='button btn-orange-grad demo-btn is-small' onClick={() => setShowModal(true)}>
                                        {t.sign}
                            </button>
                        </div>
                        <div className="navbar-item">
                            <button style={{backgroundColor:'#7367F0FF'}} className='button btn-grad is-small test-drive-btn'>
                                <Link href="/test_drive">
                                    <a className='has-text-white'>
                                        {t.test_drive.title}
                                    </a>
                                </Link>
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
                        <div className="navbar-item has-dropdown is-hoverable lang-dropdown">
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
                    <Image src={closeIcon} onClick={() => setAsideShow(false)}/>
                    <ul className="menu-list">
                        <li className="menu-label">
                            <p>{router.locale === "ru" ? "Навигация" : "Navigation"}</p>
                        </li>
                        <li>
                            <Link href="/#product-block">
                                <a onClick={() => setAsideShow(false)}>
                                    {product}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#category-block">
                                <a onClick={() => setAsideShow(false)}>{category}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#features-block">
                                <a onClick={() => setAsideShow(false)}>{features}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#pricing-block">
                                <a onClick={() => setAsideShow(false)}>{price}</a>
                            </Link>
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
                        <button className='button btn-orange-grad is-small demo-btn' onClick={() => showModalHideMenu()}>
                            {t.sign}
                        </button>
                    </div>
                    <div className="navbar-item">
                        <button style={{backgroundColor:'#7367F0FF'}} className='button btn-grad is-small test-drive-btn'>
                            <Link href="/test_drive">
                                <a className='has-text-white'>
                                    {t.test_drive.title}
                                </a>
                            </Link>
                        </button>
                    </div>

                </aside>
            </div>
        </>
    )
}