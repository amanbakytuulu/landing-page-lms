import { useRouter } from "next/router";
import en from "../../locales/en/en";
import ru from "../../locales/ru/ru";
import { MainLayout } from "../../components/MainLayout";
import TestDriveForm from "../../components/TestDriveForm";
import Image from "next/image";
import laptop from "../../assets/img/main.png";
import { NextSeo } from "next-seo";
import {useEffect, useState} from "react";
import CallbackModal from "../../components/CallbackModal";

export default function TestDrivePage(props) {
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;

    const baseURL = "https://lms.codifylab.com/";
    const SEO = {
        description: t.openGraph.test_drive,
        openGraph: {
            url: `${baseURL}${locale}${router.pathname}`,
            title: t.test_drive.title,
            description: t.openGraph.test_drive
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <MainLayout title={t.test_drive.title}>
                <div className="container">
                    <div data-aos='zoom-in' data-aos-delay='100' className="decor-ellipse">
                    </div>
                    <div className="hero is-fullheight">
                        <div className=" columns is-mobile-flex mt-6 p-3">
                            <div className="column">
                                <div className="image is-flex" data-aos='fade-up'>
                                    <Image src={laptop} alt='laptop' />
                                </div>
                                <p data-aos='fade-right' className="title is-small">
                                    {t.test_drive.bannerTitle}
                                </p>
                                <p data-aos='fade-right' data-aos-delay='100' className="subtitle">
                                    {t.test_drive.bannerSubtitle}
                                </p>
                            </div>
                            <div className="column is-two-fifths">
                                <div data-aos='flip-right' className="box p-6">
                                    <TestDriveForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}