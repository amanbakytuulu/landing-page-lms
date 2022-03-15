import SingleForm from "./SingleForm";
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import Image from "next/image";
import en_laptop from "../assets/img/en-main-with-book.png";
import ru_laptop from "../assets/img/ru-main-with-book.png";

export default function Request(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    return (
        <>
            <div className="container mt-6 mb-6">
                <div className="content has-text-left">
                    <h1>{t.contacts.title}</h1>
                    <p>{t.contacts.subtitle}</p>
                    <h5 data-aos='fade-right' data-aos-delay='200'>
                        {t.demo.title2}
                    </h5>
                </div>
                <div className="columns">
                    <div className="columns is-mobile-flex p-3">
                        <div className="column is-two-fifths content">
                            <div className="box p-6" data-aos='flip-left'>
                                <SingleForm/>
                            </div>
                        </div>
                        <div className="column reverse-column content">
                            <div className="image mb-6 is-flex zoomable">
                                <Image data-aos='fade-up' src={locale === 'en' ? en_laptop : ru_laptop} alt='laptop'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}