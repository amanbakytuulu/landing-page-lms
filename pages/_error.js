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

    useEffect(() => {
        if (!(location.pathname.startsWith("/en"))){
            const locale = 'en';
            router.push(router.pathname, router.asPath, {locale, scroll: false});
        }
        else if (location.pathname === "/_error") {
            router.push("/", router.asPath, {locale, scroll: false});
        }
    }, []);

    const t = locale === 'en' ? en : ru;

    return (
        <MainLayout title="Loading...">
            <div style={{margin: "0 auto"}} className="container is-centered is-center has-text-centered-desktop">
                <div className="box">
                    <Image src={img404}/>
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