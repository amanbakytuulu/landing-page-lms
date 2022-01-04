import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import Accordion from "../components/ReactAccordion";

export function createQuestionAnswerAccordionBlock(question, answer, setShowing){
    return(
        <>
            <Accordion title={question} content={answer} setShowing={setShowing}/>
        </>
    )
}
export default function QuestionAnswer() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    return (
        <>
            <div className="container mt-6">
                <div className="box">
                    <div className="content">
                        <h1>{t.qa.title}</h1>
                        {createQuestionAnswerAccordionBlock(t.qa.work,t.qa.workAns , true)}
                        {createQuestionAnswerAccordionBlock(t.qa.cost,t.qa.costAns )}
                        {createQuestionAnswerAccordionBlock(t.qa.active,t.qa.activeAns )}
                        {createQuestionAnswerAccordionBlock(t.qa.role,t.qa.roleAns )}
                        {createQuestionAnswerAccordionBlock(t.qa.staff,t.qa.staffAns )}
                        {createQuestionAnswerAccordionBlock(t.qa.implement,t.qa.implementAns )}
                    </div>
                </div>
            </div>
        </>
    )
}