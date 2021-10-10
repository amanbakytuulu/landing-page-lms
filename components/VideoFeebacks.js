import client98 from "../assets/img/vladimir.PNG"
import Image from "next/image";

export default function VideoFeedbacks() {
    const videoUrls = []

    return (
        <>
            <div className="container">
                <div className="box mt-6">
                    <div className="content">
                        <h1>Reviews</h1>
                    </div>
                    <div className="columns is-wrapped video-block-wrapper">
                        <div className="column">
                            <div style={{width: 300}} className="card">
                                <div className="card-content">
                                    <div className="content">
                                        Платформа Codify на данный момент решила достаточно много проблем, которые у нас возникали в онлайн
                                        обучении. Мы не нашли подходящих ресурсов, где могли бы загружать свои материалы. Платформа удобная
                                        тем, что есть аспекты, такие как учет посещения,оценок, рейтинг.
                                    </div>

                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                          <span>
                                             <p className="has-text-centered">Виктор Владимирович</p>
                                          </span>
                                        </p>
                                        <p className="card-footer-item">
                                          <span>
                                            <p className="has-text-centered">98 лицей</p>
                                          </span>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div style={{width: 300}} className="card">
                                <div className="card-content">
                                    <div className="content">
                                        За счет внедрения Codify LMS системы в нашей Академии улучшились: менеджмент всех действующих и
                                        выпускающихся групп; автоматизация работы менторов и студентов; автоматизация процессов продаж и
                                        финансовый учет; преподаватели академии могут отслеживать успеваемость, загружать материалы и
                                        проверять домашние задания из любого места в любое время.
                                    </div>

                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                          <span>
                                             <p className="has-text-centered">Жыргал Карасартова</p>
                                          </span>
                                        </p>
                                        <p className="card-footer-item">
                                          <span>
                                            <p className="has-text-centered">Codifylab Academy</p>
                                          </span>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div style={{width: 300}} className="card">
                                <div className="card-content">
                                    <div className="content">
                                        За счет внедрения Codify LMS системы в нашей Академии улучшились: менеджмент всех действующих и
                                        выпускающихся групп; автоматизация работы менторов и студентов; автоматизация процессов продаж и
                                        финансовый учет; преподаватели академии могут отслеживать успеваемость, загружать материалы и
                                        проверять домашние задания из любого места в любое время.
                                    </div>

                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                          <span>
                                             <p className="has-text-centered">Жыргал Карасартова</p>
                                          </span>
                                        </p>
                                        <p className="card-footer-item">
                                          <span>
                                            <p className="has-text-centered">Codifylab Academy</p>
                                          </span>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}