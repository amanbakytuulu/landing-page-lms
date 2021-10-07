import Image from "next/image";
import channel from "../assets/svg/icons/channel.svg"
import manager from "../assets/svg/icons/manager.svg"
import {useRouter} from "next/router";


export default function Features() {
    let router = useRouter()
    let title1 =
        router.locale === 'en' ? `Channel efficiency` :
        router.locale === 'ru' ? "Эффективность каналлов" : "Channel efficiency"

    let description1 =
        router.locale === 'en' ? `Accept and distribute applications from social networks, sites, advertising` :
            router.locale === 'ru' ? "Принимайте и распространяйте заявки из социальных сетей, сайтов, рекламы" :
                "Accept and distribute applications from social networks, sites, advertising"

    let title2 =
        router.locale === 'en' ? `Manager tasks` :
            router.locale === 'ru' ? "Задачи менеджера" : "Manager tasks"

    let description2 =
        router.locale === 'en' ? `Set daily tasks for each client and track staff performance` :
        router.locale === 'ru' ? "Устанавливайте ежедневные задачи для каждого клиента и следите за работой персонала" :
            "Set daily tasks for each client and track staff performance"

    let title3 =
        router.locale === 'en' ? "Customer accounting" :
        router.locale === 'ru' ? "Учет клиентов" :
            "Customer accounting"

    let description3
        = router.locale === 'en' ? `Track the number of customers at each stage, starting from the application to the conclusion of the deal` :
        router.locale === 'ru' ? "Отслеживайте количество клиентов на каждом этапе, начиная с подачи заявки и заканчивая заключением сделки" :
            "Track the number of customers at each stage, starting from the application to the conclusion of the deal"



    return (
        <>
            <div className="container mt-6">
                <div className="columns">

                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <Image src={channel}/>
                                    <h3>{title1}</h3>
                                    {description1}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <Image src={manager}/>
                                    <h3>{title2}</h3>
                                    {description2}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <Image src={channel}/>
                                    <h3>Channel efficiency</h3>
                                    Accept and distribute applications from social
                                    networks, sites, advertising
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="columns">

                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <Image src={channel}/>
                                    <h3>Channel efficiency</h3>
                                    Accept and distribute applications from social
                                    networks, sites, advertising
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <Image src={channel}/>
                                    <h3>Channel efficiency</h3>
                                    Accept and distribute applications from social
                                    networks, sites, advertising
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <Image src={channel}/>
                                    <h3>Channel efficiency</h3>
                                    Accept and distribute applications from social
                                    networks, sites, advertising
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}