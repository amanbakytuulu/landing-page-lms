import {useRouter} from "next/router";

export default function Program() {
    let router = useRouter()
    let business =
        router.locale === 'en' ? 'Business' :
            router.locale === 'ru' ? "Для бизнеса" : "Business"

    let school =
        router.locale === 'en' ? 'School' :
            router.locale === 'ru' ? "Для школ" : "School"

    let kindergarten =
        router.locale === 'en' ? 'Kindergarten' :
            router.locale === 'ru' ? "Для детских садов" : "Kindergarten"
    let title =
        router.locale === 'en' ? 'CRM for courses and educational centers' :
            router.locale === 'ru' ? "CRM для курсов и образовательных центров" : "CRM for courses and educational centers"
    let content =
        router.locale === 'en' ? `<li>Convenient sales funnel with notifications of new orders</li>
                                  <li>Lead forms gather applications from multiple channels into a single sales funnel!</li>
                                  <li>Sales reports with filtering by date and manager</li>
                                  <li>Accounting for online and cash payments</li>
                                  <li>Quick record of all debtors</li>
                                  <li>Manager tasks</li>
                                  <li>Automatic calculation of teachers salaries</li>
                                  <li>Managing courses, schedules and visits</li>
                                  <li>Database of all applications, customers and employees</li>`

            : router.locale === 'ru' ? `<li>Удобная воронка продаж с уведомлениями о новых заказах</li>
                                  <li> Формы лидов собирают заявки из нескольких каналов в единую воронку продаж!</li>
                                  <li>Отчеты о продажах с фильтрацией по дате и менеджеру</li>
                                  <li>Учет онлайн-платежей и платежей наличными</li>
                                  <li>Быстрый учет всех должников</li>
                                  <li>Задачи менеджера</li>
                                  <li>Автоматический расчет заработной платы учителей</li>
                                  <li>Управление курсами, расписаниями и посещениями</li>
                                  <li>База данных всех приложений, клиентов и сотрудников</li>`
                : "CRM for courses and educational centers"


    return (
        <>
            <div className="container mt-6">
                <div className="box">
                    <div className="content">
                        <div className="tabs is-centered">
                            <h1>Program</h1>
                            <ul>
                                <li><a>{business}</a></li>
                                <li className="is-active violet-text"><a>{school}</a></li>
                                <li><a>{kindergarten}</a></li>
                            </ul>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <h1>{title}</h1>
                                <ul>
                                    <div dangerouslySetInnerHTML={{__html: content}}/>
                                </ul>
                            </div>
                            <div className="column">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}