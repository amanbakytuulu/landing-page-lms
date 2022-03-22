import { useRouter } from "next/router";
import en from "../../locales/en/en";
import ru from "../../locales/ru/ru";
import { MainLayout } from "../../components/MainLayout";
import Image from "next/image";
import ru_laptop from "../../assets/img/ru-main-with-book.png";
import en_laptop from "../../assets/img/en-main-with-book.png";
import SingleForm from "../../components/SingleForm";
import { NextSeo } from "next-seo";

export default function ThanksDemo(props) {
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;

    const baseURL = "https://lms.codifylab.com/";
    const SEO = {
        description: t.openGraph.demo,
        openGraph: {
            url: `${baseURL}${locale}${router.pathname}`,
            site_name: t.sign,
            title: t.sign,
            description: t.openGraph.demo
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <MainLayout title={t.sign}>
                <div className="container mb-6">
                    <div data-aos='zoom-in' data-aos-delay='100' className="decor-ellipse">
                    </div>
                    <div className="hero">
                        <div className="columns">
                            <div className="content mt-6 column is-two-thirds">
                                <h2 data-aos='fade-right' data-aos-delay='100'>
                                    {t.demo.title}
                                </h2>
                                <h5 data-aos='fade-right' data-aos-delay='200'>
                                    {t.demo.title2}
                                </h5>
                            </div>
                        </div>
                        <div className="columns is-mobile-flex p-3">
                            <div className="column is-two-fifths content">
                                <div className="box p-6" data-aos='flip-left'>
                                    <SingleForm />
                                </div>
                            </div>
                            <div className="column reverse-column content">
                                <div className="image mb-6 is-flex zoomable">
                                    <Image data-aos='fade-up' src={locale === 'en' ? en_laptop : ru_laptop}
                                        alt='laptop' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}