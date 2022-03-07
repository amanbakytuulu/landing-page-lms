import {useRouter} from "next/router";
import en from "../../locales/en/en";
import ru from "../../locales/ru/ru";
import {MainLayout} from "../../components/MainLayout";
import Image from "next/image";
import success from "../../assets/svg/happy_2.svg";
import Link from "next/link";
import en_ebook from "../../assets/img/en-e-book.png"
import ru_ebook from "../../assets/img/ru-e-book.png"
import {useHistory} from "react-router-dom";
import {useEffect} from "react";

export default function Demo(props) {
    let router = useRouter()
    let history = useHistory()
    const {locale} = router
    const t = locale === 'en' ? en : ru
    function redirectTo(path) {
        return router.push({pathname: path, query: router.query});
    }

    function redirectToAnchor(anchor) {
        return router.push({pathname: "/", hash: anchor, query: router.query});
    }

    return (
        <MainLayout title={t.form.successText}>
            <div className={router.locale === 'en' ? 'content has-en-lms-background' : 'content has-ru-lms-background'}>
                <div className="container mt-6 box pb-6">
                    <div className="columns">
                        <div className="column">
                            <div className="success-checkmark mt-6">
                                <div className="check-icon">
                                    <span className="icon-line line-tip"/>
                                    <span className="icon-line line-long"/>
                                    <div className="icon-circle"/>
                                    <div className="icon-fix"/>
                                </div>
                            </div>
                            <div className="content has-text-centered-desktop mt-6">
                                <h2 className="title">
                                    {t.thanks_demo.title}
                                </h2>
                                <h3 className='subtitle mt-6'>
                                    {t.thanks_demo.subtitle}
                                </h3>
                                <p>
                                        <a className='violet-text' onClick={() => redirectTo("/")}>
                                            {t.goBackBtnText}
                                        </a>
                                </p>
                            </div>
                        </div>
                        <div className="column has-text-centered">
                            <Image className="image is-1by3" src={locale === 'en' ? en_ebook : ru_ebook} alt='laptop'/>

                            <a className="button btn-grad" style={{color: "white"}} target='_blank' href={locale === 'ru' ? '/ebook.pdf' : '/en_ebook.pdf'} rel="noreferrer">
                                {t.thanks_demo.btnText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}