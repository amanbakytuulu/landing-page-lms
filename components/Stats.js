import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";

export function createStatBlock(title, subtitle) {
    return (
        <>
            <div className="column">
                <span className='stats violet-text has-text-weight-semibold'>
                    {title}
                </span>
                <br/>
                <span className='violet-text has-text-weight-semibold is-uppercase'>
                    {subtitle}
                </span>
            </div>
        </>
    )
}

export default function Stats() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    return (
        <>
            <div className="container mt-6">
                <div className="box">
                    <div className="content">
                        <div className="columns mt-3 mb-3 has-text-centered">
                            {createStatBlock('+35K', t.stats.activeUsers)}
                            {createStatBlock('+71', t.stats.partners)}
                            {createStatBlock('+2K', t.stats.courses)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}