import {useRouter} from "next/router";
import {useState} from "react";

export default function Category() {
    let router = useRouter()

    const [toggleState, setToggleState] = useState(2)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    let business =
        router.locale === 'en' ? 'Business' :
            router.locale === 'ru' ? "Для бизнеса" : "Business"

    let school =
        router.locale === 'en' ? 'School' :
            router.locale === 'ru' ? "Для школ" : "School"

    let kindergarten =
        router.locale === 'en' ? 'Kindergarten' :
            router.locale === 'ru' ? "Для детских садов" : "Kindergarten"

    let content =
        router.locale === 'en' && toggleState === 2 ?
            `<h1>CRM for courses and educational centers</h1>
            <ul>
                <li> Manage the curriculum of classes</li>
                <li> Mobile learning are accessible wherever and whenever through mobile app.</li>
                <li> Managing courses, schedules and visits</li>
                <li> Gamification that allow mentors and teachers to create courses with extra motivation and engagement</li>
                <li> Collaboration tools: team works, chats</li>
                <li> Database of all students and accounting for online and cash payments</li>
            </ul>`

            : router.locale === 'ru' && toggleState === 2 ?
                `<h1>CRM для курсов и образовательных центров</h1>
            <ul>
                <li>Управление учебным планом занятий</li>
                <li>Мобильное обучение и доступны в любом месте и в любое время через мобильное приложение.</li>
                <li>Управление курсами, расписаниями и посещениями</li>
                <li>Геймификация, которая позволяет менторам и учителям создавать курсы с дополнительной мотивацией и вовлеченностью</li>
                <li>Инструменты совместной работы: командная работа, чаты</li>
                <li>База данных всех студентов и учет платежей</li>
            </ul>`

            : router.locale === 'en' && toggleState === 1 ?
                `<h1>Business</h1>
                 <ul>
                    <li> Store a database of your customers</li>
                    <li> Lead forms gather applications from multiple channels into a single sales funnel</li>
                    <li> Conveniently create deals at each stage</li>
                    <li> Accounting for online and cash payments</li>
                    <li> A corporate LMS for delivering online/offline training and learning content to your employees</li>
                 </ul>`
            : router.locale === 'ru' && toggleState === 1 ?
                 `<h1>Бизнес</h1>
                  <ul>
                    <li> Храните базу данных о своих клиентах</li>
                    <li> Лид-формы собирают заявки из нескольких каналов в единую воронку продаж</li>
                    <li> Удобное создание сделок на каждом этапе</li>
                    <li> Учет онлайн- и наличных платежей</li>
                    <li> Корпоративная LMS для проведения онлайн/оффлайн тренингов и обучения сотрудников</li>
                 </ul>`
            : router.locale === 'en' && toggleState === 3 ?
                  `<h1>Kindergarten</h1>
                  <ul>
                    <li> Database of children and their parents</li>
                    <li> Report on children's activity for parents on the mobile app</li>
                    <li> Online accounting and cash payments</li>
                    <li> Quick accounting of all debtors</li>
                    <li> Automatic calculation of teachers' salaries</li>
                 </ul>`
            :
                  `<h1>Для детских садов</h1>
                  <ul>
                    <li> База данных детей и их родителей</li>
                    <li> Отчет об активности детей для родителей в мобильном приложении</li>
                    <li> Онлайн-бухгалтерия и денежные платежи</li>
                    <li> Быстрый учет всех должников</li>
                    <li> Автоматический расчет заработной платы учителей</li>
                 </ul>`

    return (
        <>
            <ul>

            </ul>

            <div style={{scrollMarginTop: 100}} id="category-block" data-aos='fade-up'  className="container mt-6">
                <div  className="box">
                    <div className="content">
                        <h1>{router.locale === 'en'? "Category or who it suits" : router.locale === "ru" ? "Категории или кому это подходит" : "Category"}</h1><br/>
                        <div className="tabs is-centered">
                            <ul>
                                <li className={toggleState === 1 ? "is-active violet-text" : ""}
                                    onClick={() => toggleTab(1)}><a>{business}</a></li>
                                <li className={toggleState === 2 ? "is-active violet-text" : ""}
                                    onClick={() => toggleTab(2)}><a>{school}</a>
                                </li>
                                <li className={toggleState === 3 ? "is-active violet-text" : ""}
                                    onClick={() => toggleTab(3)}><a>{kindergarten}</a></li>
                            </ul>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <div dangerouslySetInnerHTML={{__html: content}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}