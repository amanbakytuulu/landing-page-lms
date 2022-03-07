import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import academy from '../assets/company_logos/codify_academy.png'
import lyceum from '../assets/company_logos/licey.png'
import beFree from '../assets/company_logos/befree.jpg'

export function Feedback(name, companyName, companyLink, text, companyLogoUrl) {
    return (
        <>
            <div className="column is-flex">
                <div className="box">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={companyLogoUrl} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <a href={companyLink} target='_blank' rel="noreferrer">
                                    <p className="title is-5 has-text-info mb-3">{companyName}</p>
                                </a>
                                <p className="subtitle is-7">{name}</p>
                            </div>
                        </div>
                        <div className="content mt-4 is-italic is-small">
                            {text}
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Feedbacks() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    return (
        <>
            <div className="container" data-aos="fade-up">
                <div className="box mt-6">
                    <div className="content">
                        <h1>{t.fb.title}</h1>
                    </div>
                    <div className="columns block-wrapper">
                        {[Feedback(
                            t.fb.academyZhyrgal,
                            t.fb.academyTitle,
                            'https://www.codifylab.com/',
                            t.fb.academyText,
                            academy.src)]}

                        {[Feedback(
                            t.fb.highSchool98Victor,
                            t.fb.highSchool98Title,
                            'http://pls98.kg/',
                            t.fb.highSchool98text,
                            lyceum.src)]}

                        {[Feedback(
                            t.fb.beFreeShirin,
                            t.fb.beFreeTitle,
                            'http://befreekg.com/',
                            t.fb.beFreeText,
                            beFree.src)]}
                    </div>
                </div>
            </div>
        </>
    )
}