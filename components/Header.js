import logo from "../assets/svg/logo.svg"
import Image from 'next/image'
import Link from "next/link";
import {useRouter} from "next/router";

import en from '/locales/en';
import ru from '/locales/ru';

import usa from "../assets/img/usa1.png"
import rus from "../assets/img/rus1.png"

export default function Header() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    let product = router.locale === 'en' ? 'Products' : router.locale === 'ru' ? "Продукты" : "Products"
    let category = router.locale === 'en' ? 'Category' : router.locale === 'ru' ? "Категории" : "Category"
    let features = router.locale === 'en' ? 'Features' : router.locale === 'ru' ? "Особенности" : "Features"
    let price = router.locale === 'en' ? 'Price' : router.locale === 'ru' ? "Цена" : "Price"
    let news = router.locale === 'en' ? 'News' : router.locale === 'ru' ? "Новости" : "News"
    let contacts = router.locale === 'en' ? 'Contacts' : router.locale === 'ru' ? "Контакты" : "Contacts"


    const changeLanguage = (e) => {
        const locale = e.target.id;
        router.push(router.pathname, router.asPath, {locale, scroll: false},);
    };


    return (
        <>
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

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="true">
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
                                <a>
                                </a>
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

                    {/*<div className="navbar-item">*/}
                    {/*    <div className="violet-text">*/}
                    {/*        <h4>{contacts}</h4>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="navbar-item">*/}
                    {/*    <div className="violet-text">*/}
                    {/*        <h4>*/}
                    {/*            <Link href="/about">*/}
                    {/*                <a>*/}
                    {/*                    {t.about}*/}
                    {/*                </a>*/}
                    {/*            </Link>*/}
                    {/*        </h4>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <div className="navbar-end">
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


                    {/*<div className="navbar-item navbar-end">*/}
                    {/*    <div className="language_block">*/}
                    {/*        <select className="select is-small"*/}
                    {/*                onChange={changeLanguage}*/}
                    {/*                defaultValue={locale}*/}
                    {/*        >*/}
                    {/*            <option value="en">EN</option>*/}
                    {/*            <option value="ru">RU</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </nav>
        </>
    )
}