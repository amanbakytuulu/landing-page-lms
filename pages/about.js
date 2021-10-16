import {MainLayout} from "../components/MainLayout";
import en from "../locales/en.js";
import ru from "../locales/ru.js";
import {useRouter} from "next/router";

export default function About(){
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;

    return(
        <MainLayout title={'About page'}>
            <div className="container">
                <div className="content">
                    <h1>{t.about}</h1>
                </div>

            </div>
        </MainLayout>
    )
}
