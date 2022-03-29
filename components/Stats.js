import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import {createRef, useEffect, useState} from "react";

export function createStatBlock(title, K, subtitle) {
    let [num, setNum] = useState(0);
    const refComponent = createRef();

    useEffect(() => {
        const top = refComponent.current.getBoundingClientRect().top;

        window.addEventListener('scroll', function onScroll() {
            if (window.scrollY > top - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                let interval = setInterval(function () {
                    setNum(++num);
                    if (num == title) {
                        clearInterval(interval);
                    }
                }, 50);
            }
        });
    }, []);

    return (
        <>
            <div className="column">
                <span ref={refComponent} className='number stats violet-text has-text-weight-semibold'>
                    {'+'}{num}{`${K}`}
                </span>
                <div/>
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
            <div data-aos="fade-up" className="container mt-6">
                <div className="box">
                    <div className="content">
                        <div className="columns mt-3 mb-3 has-text-centered">
                            {createStatBlock(35, 'K', t.stats.activeUsers)}
                            {createStatBlock(71, '', t.stats.partners)}
                            {createStatBlock(2, 'K', t.stats.courses)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}