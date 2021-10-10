import {useRouter} from "next/router";

export default function MainFeatures(props) {
    let router = useRouter()
    let locale = router.locale

    let crm =
        locale === 'en' ? `An automated system that helps to disperse the routine process of working with a customer base, as well as
                                allows you to store all customer data in your own cloud.`
            : locale === 'ru' ? `Автоматизированная система, которая помогает разгрузить рутинный процесс работы с клиентской базой, а также
             а также позволяет хранить все данные о клиентах в собственном облаке`
                :
                `An automated system that helps to disperse the routine process of working with a customer base, as well as
                allows you to store all customer data in your own cloud.`


    let lms =
        locale === 'en' ? `The system is designed for training, knowledge testing and certification of your students/employees.
         Thanks to the mobile app, users will be able to easily learn, take tests and always be up to date with news and announcements.`
            : locale === 'ru' ? `Система предназначена для обучения, проверки знаний и сертификации ваших студентов/ сотрудников.
             Благодаря мобильному приложению пользователи смогут легко учиться, проходить тесты и всегда быть в курсе новостей и объявлений.`
                :
                `The system is designed for training, knowledge testing and certification of your students/employees.
         Thanks to the mobile app, users will be able to easily learn, take tests and always be up to date with news and announcements.`

    let crm_lms =
        locale === 'en' ? `This is a single system in which 2 platforms are connected. Manage your business and train and test the knowledge
         of your employees in one place!`
            : locale === 'ru' ? `Это единая система, в которой соединены 2 платформы. Управляйте своим бизнесом, обучайте и проверяйте
             знания своих сотрудников в одном месте!`
                :
                `This is a single system in which 2 platforms are connected. Manage your business and train and test the knowledge of your
                 employees in one place!`

    return (
        <>
            <div className="container mt-6">
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <div className="content-body">
                                        <h4 {...props} className="violet-text">CRM</h4>
                                        <p>{crm}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <div className="content-body">
                                        <h4 className="violet-text">LMS</h4>
                                        <p>{lms}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <h4 className="violet-text">CRM + LMS</h4>
                                    <p>{crm_lms}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}