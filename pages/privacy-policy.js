import {MainLayout} from "../components/MainLayout";
import en from '/locales/en';
import ru from '/locales/ru';
import {useRouter} from "next/router";

export default function PrivacyPolicy(props){
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    return(
        <MainLayout title={t.privacyContent.title}>
            <div className="container">
                <div className="box">
                    <div className="content">
                        <h1>{t.privacyContent.title}</h1>
                        <hr/>

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}