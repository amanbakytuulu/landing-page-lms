import {useState} from "react";
import Modal from "./Modal";
import SingleForm from "./SingleForm";
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";

export default function Pricing(props) {
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;

    const [toggleState, setToggleState] = useState(false)

    const togglePriceMode = () => {
        setToggleState(prev => !prev)
    }

    return (
        <>
            <div style={{scrollMarginTop: 99}} id="pricing-block" className="container mt-6">
                <div>
                    <div className="content has-text-centered-desktop has-text-centered-mobile">
                        <h1>{t.pricing.title}</h1>
                        <div className="content-body has-text-centered-desktop has-text-centered-mobile">
                            <div className="label mb-6">
                                <span className="mr-3">{t.pricing.month}</span>
                                <label className="form-switch">
                                    <input type="checkbox" onClick={() => togglePriceMode()}/>
                                    <i/>
                                    <span className={toggleState ?"ml-3 violet-text":"ml-3"}>{t.pricing.year}</span>
                                </label>
                            </div>
                        </div>

                        <div className="columns is-flex-mobile block-wrapper">
                            <div className="column">
                                <div className="price-block zoomable">
                                    <div className={toggleState ? "title title-active":"title"}>{t.pricing.small}</div>
                                    <span className="dollar">$</span> <span className="cost">{toggleState ? "288" : "29"}</span>/{toggleState ? t.pricing.year : t.pricing.month} <br/>
                                    <h6 className="subtitle is-6">{t.pricing.activeUsers}</h6>
                                    <h6 className="subtitle is-6">{t.pricing.a1_100}</h6>
                                    <button onClick={() => props.setShowModal(true)}
                                            style={{width: "80%", margin: "auto", marginTop: "90px"}} className="btn-grad zoomable">
                                        {t.pricing.btnText}
                                    </button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="price-block zoomable">
                                    <div className={toggleState ? "title title-active":"title"}>{t.pricing.medium}</div>
                                    <span className="dollar">$</span><span className="cost">{toggleState ? "600" : "50"}</span>/{toggleState ? t.pricing.year : t.pricing.month} <br/>
                                    <h6 className="subtitle is-6">{t.pricing.activeUsers}</h6>
                                    <h6 className="subtitle is-6">{t.pricing.a101_200}</h6>
                                    <button onClick={() => props.setShowModal(true)}
                                        style={{width: "80%", margin: "auto", marginTop: "90px"}} className="btn-grad zoomable">
                                        {t.pricing.btnText}
                                    </button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="price-block zoomable">
                                    <div className={toggleState ? "title title-active":"title"}>{t.pricing.large}</div>
                                    <span className="dollar">$</span><span className="cost">{toggleState ? "1188" : "99"}</span>/{toggleState ? t.pricing.year : t.pricing.month} <br/>
                                    <h6 className="subtitle is-6">{t.pricing.activeUsers}</h6>
                                    <h6 className="subtitle is-6">{t.pricing.a201_500}</h6>
                                    <button onClick={() => props.setShowModal(true)}
                                            style={{width: "80%", margin: "auto", marginTop: "90px"}} className="btn-grad zoomable">
                                        {t.pricing.btnText}
                                    </button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="price-block zoomable">
                                    <div className={toggleState ? "title title-active":"title"}>{t.pricing.enterprise}</div>
                                    <span className="dollar">$</span><span className="cost">{toggleState ? "2388" : "199"}</span>/{toggleState ? t.pricing.year : t.pricing.month} <br/>
                                    <h6 className="subtitle is-6">{t.pricing.activeUsers}</h6>
                                    <h6 className="subtitle is-6">{t.pricing.a501_1000}</h6>
                                    <button onClick={() => props.setShowModal(true)}
                                            style={{width: "80%", margin: "auto", marginTop: "90px"}} className="btn-grad zoomable">
                                        {t.pricing.btnText}
                                    </button>
                                </div>
                            </div>

                        </div>
                        <h5>{t.pricing.labelText}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}