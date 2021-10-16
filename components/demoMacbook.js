import macbook from "../assets/img/laptop.png"
import Image from "next/image";
import ReactPlayer from "react-player";
import {useRouter} from "next/router";

export default function DemoMacbook() {
    const router = useRouter()
    let title = router.locale === "ru" ? "Демонстрация работы системы":"Demo of system"
    return (
        <>
            <div style={{scrollMarginTop: 100}} id="product-block" className="container mt-6">
                <div className="box has-text-centered-desktop">
                    <div className="content level-left">
                        <h1>{title}</h1>
                    </div>
                    <div className="laptop">
                        <Image src={macbook} alt=""/>
                        <div className="video">
                            <video src="/promo.mp4" controls>
                                <source src="/promo.mp4" type="video/mp4"/>
                            </video>
                            {/*<ReactPlayer className="video" url="superman.mp4" width="100%" height="100%" controls={true} />*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}