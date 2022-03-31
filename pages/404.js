import {useEffect} from "react"
import {useRouter} from "next/router"
import {MainLayout} from "../components/MainLayout";
import img404 from "../assets/svg/404.svg"
import Image from "next/image";
import Link from "next/link";
import en from "../locales/en/en.js";
import ru from "../locales/ru/ru.js";

export default function Custom404() {
    const router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    // useEffect(() => {
    //         if (!(location.pathname.startsWith("/en")) || (!(location.pathname.startsWith("/ru")))){
    //             const locale = 'en';
    //             router.push(router.asPath, {locale, scroll: false, shallow: true});
    //         }
    //         else if (location.pathname === "/_error") {
    //             router.push("/", {locale, scroll: false, shallow: true});
    //         }
    //     }, []);

    return (
        <MainLayout title="Page not found">
            <div style={{margin: "0 auto"}} className="container mb-6 is-centered is-center has-text-centered-desktop">
                <div className="box">
                    <Image src={img404} alt="error"/>
                    <Link href="/">
                        <a>
                            <button className="btn-grad">{t.goBackBtnText}</button>
                        </a>
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}