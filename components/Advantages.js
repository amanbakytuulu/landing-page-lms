import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";

export function checkTimesTimes() {
    return (
        <>
            <td><strong className='has-text-success'>✓</strong></td>
            <td><strong className='has-text-danger'>X</strong></td>
            <td><strong className='has-text-danger'>X</strong></td>
        </>
    )
}

export function checkTimesCheck() {
    return (
        <>
            <td><strong className='has-text-success'>✓</strong></td>
            <td><strong className='has-text-danger'>X</strong></td>
            <td><strong className='has-text-success'>✓</strong></td>
        </>
    )
}

export function checkCheckTimes() {
    return (
        <>
            <td><strong className='has-text-success'>✓</strong></td>
            <td><strong className='has-text-success'>✓</strong></td>
            <td><strong className='has-text-danger'>X</strong></td>
        </>
    )
}

export function createNotCheckedRow(advantage) {
    return (
        <>
            <tr>
                <td>{advantage}</td>
                {[checkTimesTimes()]}
            </tr>
        </>
    )
}

export function createSecondColumnCheckedRow(advantage) {
    return (
        <>
            <tr>
                <td>{advantage}</td>
                {[checkCheckTimes()]}
            </tr>
        </>
    )
}

export function createThirdColumnCheckedRow(advantage) {
    return (
        <>
            <tr>
                <td>{advantage}</td>
                {[checkTimesCheck()]}
            </tr>
        </>
    )
}

export default function Advantages() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    return (
        <>
            <div data-aos='fade-up' className="container mt-6">
                <div id='advantages-block' className="box">
                    <div className="content">
                        <table className="table is-striped is-hoverable">
                            <tbody className='has-text-centered-desktop'>
                            <tr>
                                <th>{t.a8s.title}</th>
                                <th className='violet-text'>Codify LMS CRM</th>
                                <th>Bitrix24</th>
                                <th>GetCourse</th>
                            </tr>
                            {createNotCheckedRow(t.a8s.first)}
                            {createNotCheckedRow(t.a8s.second)}
                            {createNotCheckedRow(t.a8s.third)}
                            {createThirdColumnCheckedRow(t.a8s.fourth)}
                            {createNotCheckedRow(t.a8s.fives)}
                            {createSecondColumnCheckedRow(t.a8s.seventh)}
                            {createSecondColumnCheckedRow(t.a8s.eighth)}
                            {createNotCheckedRow(t.a8s.nines)}
                            {createNotCheckedRow(t.a8s.tens)}
                            {createNotCheckedRow(t.a8s.elevens)}
                            {createNotCheckedRow(t.a8s.twelves)}
                            {createNotCheckedRow(t.a8s.thirteens)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}