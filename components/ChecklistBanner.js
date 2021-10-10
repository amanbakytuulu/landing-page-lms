import Image from "next/image";
import checklistWoman from "../assets/svg/Group.svg"

export default function ChecklistBanner(props) {
    let title = "Still not convinced? Start with a 14-day FREE trial"
    let subtitle = "You will get full access to with all the features for 14 days."
    let checklist = "Download checklist"
    return (
        <>
            <div className="container mt-6">
                <div className="content">
                    <section style={{backgroundColor: props.bgColor}} className="hero is-dark">
                        <div className="hero-body">
                            <div className="columns">
                                <div className="column">
                                    <p className="title">{title}</p>
                                    <button className="button is-danger is-center has-text-weight-bold">{checklist}</button>
                                    <p className="subtitle mt-3 has-text-white">{subtitle}</p>
                                </div>
                                <div className="column checklist-svg">
                                    <Image src={checklistWoman}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}