import {useRouter} from "next/router";
import en from "../../locales/en/en";
import ru from "../../locales/ru/ru";
import {MainLayout} from "../../components/MainLayout";
import Image from "next/image";
import success from "../../assets/svg/Character14.svg";
import Link from "next/link";
import Router from 'next/router'
import {useEffect} from "react";

export default function ThanksTestDrive(props) {
    let router = useRouter()

    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    function redirectTo(path) {
        return router.push({pathname: path, query: router.query});
    }

    function redirectToAnchor(anchor) {
        return router.push({pathname: "/", hash: anchor, query: router.query});
    }

    useEffect(() => {
        if (typeof (localStorage.accept_url) === "undefined") {
            redirectTo("/")
        }
    })

    function redirectToAcceptUrl() {
        if (typeof (localStorage.accept_url) !== "undefined") {
            window.open(localStorage.accept_url, '_blank')
        } else {
            redirectTo("/")
        }
    }


    return (
        <MainLayout title={t.thanks_test_drive.title}>
            <div className={router.locale === 'en' ? 'content has-en-lms-background' : 'content has-ru-lms-background'}>
                <div style={{maxWidth: "900px"}} className="container box pb-6">
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
                                    {t.thanks_test_drive.title}
                                </h2>
                                <button className="button is-success has-text-weight-semibold" onClick={redirectToAcceptUrl}>
                                    {t.thanks_test_drive.start}
                                </button>
                                <p className='help mt-3'>
                                    {t.thanks_test_drive.subtitle}
                                </p>
                                <p>
                                    <a className='violet-text'
                                    onClick={()=> redirectTo("/")}>
                                        {t.goBackBtnText}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <Image className="image" src={success} alt='success'/>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}