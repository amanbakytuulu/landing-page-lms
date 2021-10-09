import logo from "../assets/svg/logo.svg"
import Image from 'next/image'
import Link from "next/link";
import {useRouter} from "next/router";
import {i18n} from "../next.config";

export default function Header() {
    let router = useRouter()
    let product = router.locale === 'en' ? 'Products' : router.locale === 'ru' ? "Продукты" : "Products"
    let category = router.locale === 'en' ? 'Category' : router.locale === 'ru' ? "Категории" : "Category"
    let features = router.locale === 'en' ? 'Features' : router.locale === 'ru' ? "Особенности" : "Features"
    let price = router.locale === 'en' ? 'Price' : router.locale === 'ru' ? "Цена" : "Price"
    let news = router.locale === 'en' ? 'News' : router.locale === 'ru' ? "Новости" : "News"
    let contacts = router.locale === 'en' ? 'Contacts' : router.locale === 'ru' ? "Контакты" : "Contacts"


    return (
        <>
            <style jsx>{`
              .navbar {
                font-family: 'Montserrat', sans-serif;
              }
            `}</style>
            <nav className="navbar has-text-justified-desktop is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <Image width="169" height="35" alt="Codify LMS x CRM" src={logo}/>
                        </a>
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <div className="navbar-menu">

                    <div className="navbar-item">
                        <div className="violet-text">
                            <h4>{product}</h4>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="violet-text">
                            <h4>{category}</h4>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="violet-text">
                            <h4>{features}</h4>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="violet-text">
                            <h4>{price}</h4>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="violet-text">
                            <h4>{contacts}</h4>
                        </div>
                    </div>
                    <div className="navbar-item navbar-end">
                        <div className="language_block">
                                <span onClick={() => router.push({
                                    pathname: "/ru",
                                }, undefined, {scroll: false})}>
							 Русский
						</span>
                            <span className="media-left media-right">|</span>
                            <span onClick={() => router.replace({
                                pathname: "/ru",
                            }, "/en", {scroll: false})}>
							English
						</span>

                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}