import Image from "next/image";
import laptop from "../assets/img/main.png"
import insta from "../assets/svg/insta.svg"
import fb from "../assets/svg/fb.svg"
import tg from "../assets/svg/tg.svg"
import whats from "../assets/svg/whasp.svg"
import {useRouter} from "next/router";
import en from "../locales/en";
import ru from "../locales/ru";

export default function MainBanner(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    return (
        <>
            <section className="hero is-large">

                    <div className="columns">
                        <div className="column">
                            <div className="hero-body">
                                <div className="content has-text-centered-desktop is-center is-centered">
                                    <h1 className="violet-text">{t.banner.title}</h1>
                                    <button className="btn-grad" onClick={() => props.setShowModal(true)}>
                                        <label htmlFor="" className="label has-text-weight-semibold has-text-white">{t.banner.btnText}</label>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="column is-two-thirds">
                            <Image src={laptop} alt="main" />
                        <div className="ellipse"/>
                        </div>
                    </div>

            </section>
        </>
    )
}