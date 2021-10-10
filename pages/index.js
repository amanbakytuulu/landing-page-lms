import {MainLayout} from "../components/MainLayout";
import Banner from "../components/Banner";
import {useRouter} from "next/router";
import MainFeatures from "../components/MainFeatures";
import DemoMacbook from "../components/demoMacbook";
import Category from "../components/Category";
import DynamicBanner from "../components/DynamicBanner";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import ChecklistBanner from "../components/ChecklistBanner";
import VideoFeedbacks from "../components/VideoFeebacks";
import Request from "../components/Request";
import Header from "../components/Header";
import {useState} from "react";
import Modal from "../components/Modal";
import SingleForm from "../components/SingleForm";
import Image from "next/image";
import check from "../assets/img/QuaintLikelyFlyingfish-size_restricted.gif";

export default function Home() {
    const violetHex = "#7367F0"
    let router = useRouter()

    let trialBtnText = router.locale === "ru"? "Попробуй бесплатный период прямо сейчас!" : "Try free trial now!"
    let trialRequestBtnText = router.locale === "ru"? "Попробовать бесплатно 7 дней" : "Try free 7 day trial"

    let bannerTitle =
        router.locale === 'en' ? 'Now 70% Off for 3 Months' :
        router.locale === 'ru' ? "Теперь 70% скидки на 3 месяца" : "Now 70% Off for 3 Months"
    let bannerSubtitle =
        router.locale === 'en' ? 'Accounting software built for owners' :
        router.locale === 'ru' ? "Бухгалтерское программное обеспечение, созданное для владельцев" : "Now 70% Off for 3 Months"

    const [showModal, setShowModal] = useState(false)
    const [showDoneModal, setShowDoneModal] = useState(false)

    return (
        <MainLayout title={"Home page"}>
            <Banner title={bannerSubtitle} btn={trialRequestBtnText} subtitle={bannerTitle} show={showModal} setShowModal={setShowModal}/>
            <MainFeatures/>
            <DemoMacbook/>
            <Category/>
            <DynamicBanner
                show={showModal} setShowModal={setShowModal}
                title={bannerTitle}
                bgColor={violetHex}
                subtitle={bannerSubtitle}
                btnUrl={"google.com"}
                btnText={trialBtnText} />
            <Features/>
            <ChecklistBanner text bgColor={violetHex}/>
            <Pricing show={showModal} setShowModal={setShowModal}/>
            {/*<VideoFeedbacks/>*/}
            <Request setShowModal={setShowModal}/>

            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                <SingleForm setShowModal={setShowModal}  setShowDoneModal={setShowDoneModal}/>

            </Modal>

            <Modal
                onClose={()=>setShowDoneModal(false)}
                show={showDoneModal}
            >
                <div className="content is has-text-centered-desktop">
                    <Image src={check}/>
                    <h5 className="tag is-success is-light is-large">Your application successfully sent!</h5>
                </div>
            </Modal>

        </MainLayout>

    )
}