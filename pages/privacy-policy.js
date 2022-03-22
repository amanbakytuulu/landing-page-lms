import { MainLayout } from "../components/MainLayout";
import en from '/locales/en/en';
import ru from '/locales/ru/ru';
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function PrivacyPolicy(props) {
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;

    const baseURL = "https://lms.codifylab.com/";
    const SEO = {
        description: t.openGraph.privacy_policy,
        openGraph: {
            url: `${baseURL}${locale}${router.pathname}`,
            title: t.privacyContent.title,
            description: t.openGraph.privacy_policy
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <MainLayout title={t.privacyContent.title}>
                <div className="container mb-6">
                    <div className="box">
                        <div className="content">
                            <h1>{t.privacyContent.title}</h1>
                            <hr />
                            <h5>{t.privacyContent.g1}</h5>
                            <p>{t.privacyContent.gDesc}</p>
                            <p>{t.privacyContent.g1_1}</p>
                            <p>{t.privacyContent.g1_2}</p>

                            <h5>{t.privacyContent.g2}</h5>
                            <p>{t.privacyContent.g2_1}</p>
                            <p>{t.privacyContent.g2_2}</p>
                            <p>{t.privacyContent.g2_3}</p>
                            <p>{t.privacyContent.g2_4}</p>
                            <p>{t.privacyContent.g2_5}</p>
                            <p>{t.privacyContent.g2_6}</p>
                            <p>{t.privacyContent.g2_7}</p>
                            <p>{t.privacyContent.g2_8}</p>
                            <p>{t.privacyContent.g2_9}</p>
                            <p>{t.privacyContent.g2_10}</p>
                            <p>{t.privacyContent.g2_11}</p>
                            <p>{t.privacyContent.g2_12}</p>
                            <p>{t.privacyContent.g2_13}</p>

                            <h5>{t.privacyContent.g3}</h5>

                            <p>{t.privacyContent.g3_1}</p>
                            <p>{t.privacyContent.g3_2}</p>
                            <p>{t.privacyContent.g3_3}</p>
                            <p>{t.privacyContent.g3_4}</p>
                            <p>{t.privacyContent.g3_5}</p>
                            <p>{t.privacyContent.g3_6}</p>
                            <p>{t.privacyContent.g3_7}</p>

                            <h5>{t.privacyContent.g4}</h5>
                            <p>{t.privacyContent.g4_1}</p>
                            <p>{t.privacyContent.g4_2}</p>
                            <p>{t.privacyContent.g4_3}</p>

                            <h5>{t.privacyContent.g5}</h5>
                            <p>{t.privacyContent.g5_1}</p>
                            <p>{t.privacyContent.g5_2}</p>

                            <h5>{t.privacyContent.g6}</h5>
                            <p>{t.privacyContent.g6Desc}</p>
                            <p>{t.privacyContent.g6_1}</p>
                            <p>{t.privacyContent.g6_2}</p>
                            <p>{t.privacyContent.g6_3}</p>
                            <p>{t.privacyContent.g6_4}</p>

                            <h5>{t.privacyContent.g7}</h5>
                            <p>{t.privacyContent.g7_1}</p>
                            <p>{t.privacyContent.g7_2}</p>

                            <h5>{t.privacyContent.g8}</h5>
                            <p>{t.privacyContent.g8_1}</p>
                            <p>{t.privacyContent.g8_2}</p>
                            <p>{t.privacyContent.g8_3}</p>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}