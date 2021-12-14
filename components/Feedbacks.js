import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";

// Todo: Rewrite or do refactor
export default function Feedbacks() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    const videoUrls = []

    return (
        <>
            <div className="container">
                <div className="box mt-6">
                    <div className="columns is-flex-mobile block-wrapper">
                        <div className="feedback-block">
                            <h6 className="subtitle is-6">
                                <div className="content is-normal">
                                    За счет внедрения Codify LMS системы в нашей Академии улучшились: менеджмент
                                    всех действующих и выпускающихся групп; автоматизация работы менторов и студентов; автоматизация
                                    процессов продаж и финансовый учет; преподаватели академии могут отслеживать успеваемость, загружать
                                    материалы и проверять домашние задания из любого места в любое время.
                                </div>
                            </h6>

                        </div>
                        <div className="feedback-block">
                            <h6 className="subtitle is-6">За счет внедрения Codify LMS системы в нашей Академии улучшились: менеджмент
                                всех действующих и выпускающихся групп; автоматизация работы менторов и студентов; автоматизация
                                процессов продаж и финансовый учет; преподаватели академии могут отслеживать успеваемость, загружать
                                материалы и проверять домашние задания из любого места в любое время.</h6>

                        </div>
                        <div className="feedback-block">
                            <h6 className="subtitle is-6">За счет внедрения Codify LMS системы в нашей Академии улучшились: менеджмент
                                всех действующих и выпускающихся групп; автоматизация работы менторов и студентов; автоматизация
                                процессов продаж и финансовый учет; преподаватели академии могут отслеживать успеваемость, загружать
                                материалы и проверять домашние задания из любого места в любое время.</h6>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}