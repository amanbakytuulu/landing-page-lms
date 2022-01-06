import Image from "next/image";
import checklistWoman from "../assets/svg/Group.svg"
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import {useState} from "react";
import Modal from "./Modal";

export default function ChecklistBanner(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="container mt-6">
                <div className="box content">
                    <section className="hero">
                        <div className="bubbles">
                            <div className="hero-body">
                                <div className="columns">
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="bubble"/>
                                    <div className="column">
                                        <p className="title">{t.checklist.title}</p>
                                        <form target="_blank" action={router.locale === 'en' ? "en_checklist.pdf":"ru_checklist.pdf"}>
                                            <button className="button is-danger is-center has-text-weight-bold">{t.checklist.btnText}</button>
                                        </form>
                                        <Modal show={showModal} onClose={() => setShowModal(false)}
                                        >
                                            Test
                                        </Modal>
                                        <p className=" mt-3">{t.checklist.subtitle}</p>
                                    </div>
                                    <div className="column checklist-svg">
                                        <Image src={checklistWoman}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}