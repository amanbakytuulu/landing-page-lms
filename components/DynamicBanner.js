import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";

export default function DynamicBanner(props) {
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;
    return (
        <>
                <div style={{cursor:"pointer"}} className="container mt-6" onClick={()=> props.setShowModal(true)}>
                    <div className="context mt-6">
                        <div className="content is-centered has-text-centered-desktop has-text-centered-mobile">
                            <h3 className="has-text-white mt-6">{props.btnText}</h3>
                            <div className="button demo-btn is-danger has-text-weight-semibold">{t.sign}</div>
                        </div>
                    </div>


                    <div className="area">
                        <ul className="circles">
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                        </ul>
                    </div>
                </div>
        </>
    )

}