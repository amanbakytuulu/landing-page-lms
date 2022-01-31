import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import {MainLayout} from "../components/MainLayout";
import TestDriveForm from "../components/TestDriveForm";
import Image from "next/image";
import laptop from "../assets/img/main.png";

export default function TestDrivePage(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    return (
        <MainLayout title={t.test_drive.title}>
            <div className="container">
                <div className="decor-ellipse">
                </div>
                <div className="hero is-fullheight">
                    <div className=" columns is-mobile-flex mt-6 p-3">
                        <div className="column">
                            <div className="image is-flex">
                                <Image src={laptop} alt='laptop'/>
                            </div>
                            <p className="title is-small">
                                {t.test_drive.bannerTitle}
                            </p>
                            <p className="subtitle">
                                {t.test_drive.bannerSubtitle}
                            </p>
                        </div>
                        <div className="column is-two-fifths">
                            <div className="box p-6">
                                <TestDriveForm/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    )
}