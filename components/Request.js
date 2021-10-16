import SingleForm from "./SingleForm";
import {useRouter} from "next/router";
import en from "../locales/en";
import ru from "../locales/ru";

export default function Request(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    return (
        <>
            <div className="container mt-6">
                <div className="columns">
                    <div className="column">
                        <div className="content has-text-left">
                            <h1>{t.contacts.title}</h1>
                            <p>{t.contacts.subtitle}</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box request-box zoomable">
                            <SingleForm/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}