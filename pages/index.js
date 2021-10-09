import {MainLayout} from "../components/MainLayout";
import Banner from "../components/Banner";
import {useRouter} from "next/router";
import MainFeatures from "../components/MainFeatures";
import DemoMacbook from "../components/demoMacbook";
import Program from "../components/Program";
import DynamicBanner from "../components/DynamicBanner";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import ChecklistBanner from "../components/ChecklistBanner";
import VideoFeedbacks from "../components/VideoFeebacks";
import Request from "../components/Request";
import Header from "../components/Header";

export default function Home() {
    const violetHex = "#7367F0"
    let router = useRouter()
    let bannerTitle =
        router.locale === 'en' ? 'Now 70% Off for 3 Months' :
        router.locale === 'ru' ? "Теперь 70% скидки на 3 месяца" : "Now 70% Off for 3 Months"
    let bannerSubtitle =
        router.locale === 'en' ? 'Accounting software built for owners' :
        router.locale === 'ru' ? "Бухгалтерское программное обеспечение, созданное для владельцев" : "Now 70% Off for 3 Months"


    return (
        <MainLayout title={"Home page"}>
            <Banner/>
            <MainFeatures/>
            <DemoMacbook/>
            <Program/>
            <DynamicBanner
                title={bannerTitle}
                bgColor={violetHex}
                subtitle={bannerSubtitle}
                btnUrl={"google.com"}
                btnText={"FREE TRIAL"} />
            <Features/>
            <ChecklistBanner text bgColor={violetHex}/>
            <Pricing/>
            <VideoFeedbacks/>
            <Request/>

        </MainLayout>
    )
}