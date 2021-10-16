import {useEffect} from "react"
import {useRouter} from "next/router"
import {MainLayout} from "../components/MainLayout";
import img404 from "../assets/svg/404.svg"
import Image from "next/image";
import Link from "next/link";
import en from "../locales/en.js";
import ru from "../locales/ru.js";

export default function Custom404() {
    const router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;

    return (
        <MainLayout title="Page not found">
            <div style={{margin:"0 auto"}} className="container is-centered is-center">
                    <Image src={img404}/>
                    <Link href="/">
                        <a>
                        <button className="btn-grad"> Go back home</button>
                    </a></Link>
            </div>
        </MainLayout>
    )
}