import { MainLayout } from "../components/MainLayout";
import Banner from "../components/Banner";
import { useRouter } from "next/router";
import MainFeatures from "../components/MainFeatures";
import DemoMacbook from "../components/DemoMacbook";
import Category from "../components/Category";
import DynamicBanner from "../components/DynamicBanner";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import ChecklistBanner from "../components/ChecklistBanner";
import Request from "../components/Request";
import {useEffect, useState} from "react";
import { NextSeo } from "next-seo";
import Modal from "../components/Modal";
import SingleForm from "../components/SingleForm";
import en from '/locales/en/en';
import ru from '/locales/ru/ru';
import Feedbacks from "../components/Feedbacks";
import Advantages from "../components/Advantages";
import QuestionAnswer from "../components/QuestionAnswer";
import Stats from "../components/Stats";
import CallbackModal from "../components/CallbackModal";

export default function HomePage() {
    const violetHex = "#7367F0"
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;

    let title =
        router.locale === "en" ? "Home page" :
            router.locale === "ru" ? "Главная" : "Home page"

    let trialBtnText = router.locale === "ru" ? "Запишись на консультацию прямо сейчас, и получи индивидуальную скидку!" : "Sign up for a consultation right now and get an individual discount!"
    let trialRequestBtnText = router.locale === "ru" ? "Попробовать бесплатно 7 дней" : "Try free 7 day trial"


    let bannerSubtitle =
        router.locale === 'en' ? 'Accounting software built for owners' :
            router.locale === 'ru' ? "Бухгалтерское программное обеспечение, созданное для владельцев" : "Now 70% Off for 3 Months"

    const [show,setShow]= useState(false);
    const [showModal, setShowModal] = useState(false)
    const [showDoneModal, setShowDoneModal] = useState(false)

    const baseURL="https://lms.codifylab.com/";
    const SEO = {
        description: t.openGraph.main,
        openGraph: {
            url: `${baseURL}${locale}${router.pathname}`,
            title,
            description: t.openGraph.main
        }
    }

    useEffect(()=>{
        let timeID= setTimeout(()=>{
            if(!sessionStorage.getItem('popup1'))
            {
                setShow(true);
                sessionStorage.setItem('popup1','true');
            }
            else if(!sessionStorage.getItem('popup2'))
            {
                setShow(true);
                sessionStorage.setItem('popup2','true');
            }

        },40000)
        return ()=>clearTimeout(timeID)
    },[])

    return (
        <>
            <NextSeo {...SEO} />
            <MainLayout title={title}>
                <Banner show={showModal} setShowModal={setShowModal} />
                <MainFeatures />
                <DemoMacbook />
                <Category />
                <Stats />
                <DynamicBanner
                    show={showModal} setShowModal={setShowModal}
                    bgColor={violetHex}
                    subtitle={bannerSubtitle}
                    btnUrl={"google.com"}
                    btnText={trialBtnText}
                />
                <Features />
                <Advantages />
                <Feedbacks />
                <ChecklistBanner text bgColor={violetHex} />
                <QuestionAnswer />
                <Pricing show={showModal} setShowModal={setShowModal} />
                <Request />
                <Modal
                    onClose={() => setShowModal(false)}
                    show={showModal}
                >
                    <SingleForm />
                </Modal>
                <CallbackModal show={show} setShow={setShow}/>
            </MainLayout>
        </>
    )
}