import Image from "next/image";
import laptop from "../assets/img/main.png"
import insta from "../assets/svg/insta.svg"
import fb from "../assets/svg/fb.svg"
import tg from "../assets/svg/tg.svg"
import whats from "../assets/svg/whasp.svg"
import {useRouter} from "next/router";
import en from "../locales/en";
import ru from "../locales/ru";

export default function Banner(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    return (
        <div className='container mb-6'>
            <div className='banner'>
                <div className="container">
                    <div className="side description">
                        <h1>{t.banner.title}</h1>
                        <p>{t.banner.subtitle}</p>
                        <button className="btn-grad" onClick={() => props.setShowModal(true)}>
                            <label htmlFor="" className="label has-text-weight-semibold has-text-white">{t.banner.btnText}</label>
                        </button>

                    </div>
                    <div className="side ban-img">
                        <div className="ellipse">
                        </div>
                        <div className="img">
                            <Image src={laptop}/>
                        </div>
                    </div>
                    <div className="social-media-links">
                        <ul>
                            <li className="social-media-item zoomable">
                                <a href={t.banner.insta} target='_blank' rel="noreferrer">
                                    <Image src={insta}/>
                                </a>
                            </li >
                            <li className="social-media-item zoomable">
                                <a href={t.banner.facebook} target='_blank' rel="noreferrer">
                                    <Image src={fb}/>
                                </a>
                            </li>
                            <li className="social-media-item zoomable">
                                <a href={t.banner.telegram} target='_blank' rel="noreferrer">
                                    <Image src={tg}/>
                                </a>
                            </li>
                            <li className="social-media-item zoomable">
                                <a href={t.banner.whatsapp} target='_blank' rel="noreferrer">
                                    <Image src={whats}/>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}