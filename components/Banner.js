import Image from "next/image";
import laptop from "../assets/img/main.png"
import insta from "../assets/svg/insta.svg"
import fb from "../assets/svg/fb.svg"
import tg from "../assets/svg/tg.svg"
import whats from "../assets/svg/whasp.svg"
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import { redirectTo } from "./commonFunctions";

export default function Banner(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    return (
        <div className='container mb-6'>
            <div className='banner'>
                <div className="container">
                    <div className="side description">
                        <h1 data-aos='fade-up' data-aos-delay='100'>{t.banner.title}</h1>
                        <p data-aos='fade-up' data-aos-delay='200'>{t.banner.subtitle}</p>
                        <button
                            data-aos='fade-left'
                            data-aos-delay='300'
                            className="btn-grad demo-btn"
                            onClick={() => redirectTo("/demo",router)}>
                            <label className="label has-text-weight-semibold has-text-white">{t.sign}</label>
                        </button>
                        <button
                            data-aos='fade-right'
                            data-aos-delay='400'
                            className="btn-orange-grad mt-3 test-drive-btn"
                            onClick={() => redirectTo("/test_drive",router)}>
                            <label htmlFor="" className="label has-text-weight-semibold has-text-white">{t.testDriveStart}</label>
                        </button>

                    </div>
                    <div className="side ban-img">
                        <div data-aos='zoom-in' data-aos-delay='400' className="ellipse">
                        </div>
                        <div data-aos='zoom-in' className="img">
                            <Image src={laptop}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}