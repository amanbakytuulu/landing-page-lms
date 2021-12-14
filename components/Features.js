import Image from "next/image";
import channel from "../assets/svg/icons/channel.svg"
import cross from "../assets/svg/icons/cross.svg"
import manager from "../assets/svg/icons/manager.svg"
import customer from "../assets/svg/icons/customer.svg"
import payments from "../assets/svg/icons/payments.svg"
import database from "../assets/svg/icons/database.svg"
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";


export default function Features() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    return (
        <>
            <div style={{scrollMarginTop: 100}} id="features-block" className="container mt-6">
                <div className="columns">

                    <div className="column">
                        <div className="card rounded">
                            <div className="card-content">
                                <div className="content">
                                    <Image width="70" height="70" src={channel}/>
                                    <h3>{t.features.channelTitle}</h3>
                                    <p>
                                        {t.features.channelDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card rounded">
                            <div className="card-content">
                                <div className="content">
                                    <Image width="70" height="70" src={manager}/>

                                    <h3>{t.features.managerTitle}</h3>
                                    <p>
                                        {t.features.managerDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card rounded">
                            <div className="card-content">
                                <div className="content">
                                    <Image width="70" height="70" src={customer}/>
                                    <h3>{t.features.clientsTitle}</h3>
                                    <p>
                                        {t.features.clientsDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="columns">

                    <div className="column">
                        <div className="card rounded">
                            <div className="card-content">
                                <div className="content">
                                    <Image width="70" height="70" src={payments}/>
                                    <h3>{t.features.paymentsTitle}</h3>
                                    <p>{t.features.paymentsDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card rounded">
                            <div className="card-content">
                                <div className="content">
                                    <Image width="70" height="70" src={database}/>
                                    <h3>{t.features.databaseTitle}</h3>
                                    <p>{t.features.databaseDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card rounded">
                            <div className="card-content">
                                <div className="content">
                                    <Image width="70" height="70" src={cross}/>
                                    <h3>{t.features.crossTitle}</h3>
                                    {t.features.crossDescription}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}