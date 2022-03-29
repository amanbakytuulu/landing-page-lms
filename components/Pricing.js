import {useState} from "react";
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";

export default function Pricing(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    const [toggleState, setToggleState] = useState(1)


    const updateToggleState = (index) => {
        setToggleState(index)
    }

    function createSwitcher(label, toggle) {
        let isEnabled = toggleState === toggle
        return (
            <>
                <div className="column box m-1">
                    <div className="label">
                        <span className={isEnabled ? "violet-text" : ""}>{label}</span>
                        <br/>
                        <label className="form-switch">
                            <input type="checkbox" checked={isEnabled} onClick={() => updateToggleState(toggle)}/>
                            <i/>
                        </label>
                    </div>
                </div>
            </>
        )
    }

    function createTable(price1, price2, price3, price4, discount1, discount2, discount3, discount4, economy1, economy2, economy3, economy4) {
        return (
            <>
                <table className="table is-striped is-hoverable">
                    <thead>
                    <th>{t.pricing.activeUsers}</th>
                    <th>{t.pricing.price}</th>
                    <th></th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{t.pricing.a1_100}</td>
                        <td><strong className='violet-text is_18'>$ {price1}</strong></td>
                        <td>
                            <s className='is_18 has-text-danger has-text-weight-semibold'>{discount1}</s>&emsp;
                            {toggleState !== 1 ? <span className="has-text-success has-text-weight-semibold"> {t.pricing.saving} $ {economy1} </span> : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>{t.pricing.a101_200}</td>
                        <td><strong className='violet-text is_18'>$ {price2}</strong></td>
                        <td>
                            <s className='is_18 has-text-danger has-text-weight-semibold'>{discount2}</s>&emsp;
                            {toggleState !== 1 ? <span className="has-text-success has-text-weight-semibold">{t.pricing.saving} $ {economy2} </span> : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>{t.pricing.a201_500}</td>
                        <td><strong className='violet-text is_18'>$ {price3}</strong></td>
                        <td>
                            <s className='is_18 has-text-danger has-text-weight-semibold'>{discount3}</s>&emsp;
                            {toggleState !== 1 ? <span className="has-text-success has-text-weight-semibold">{t.pricing.saving} $ {economy3} </span> : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>{t.pricing.a501_1000}</td>
                        <td><strong className='violet-text is_18'>$ {price4}</strong></td>
                        <td>
                            <s className='is_18 has-text-danger has-text-weight-semibold'>{discount4}</s>&emsp;
                            {toggleState !== 1 ? <span className="has-text-success has-text-weight-semibold">{t.pricing.saving} $ {economy4} </span> : ''}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }

    function getPrice(){
        if (toggleState === 1){
            return  toggleState + ' ' + t.pricing.month}
        else if(toggleState === 3){
            return  toggleState + ' ' + t.pricing.monthsRu
        }
        else {
            return toggleState + ' ' + t.pricing.months
        }
    }

    function updateTableData(){
        if (toggleState === 1){
            return createTable(29,49,99,199)
        }
        else if (toggleState === 3){
            return createTable(
                78,132,267,537,
                '$ 87','$ 147','$ 297','$ 597',
                9,15,30,60
            )
        }
        else if(toggleState === 6){
            return createTable(
                139,235,475,955,
                '$ 174','$ 294','$ 594','$ 1194',
                35,59,119,239
            )
        }
        else if (toggleState === 12){
            return createTable(
                243,410,830,1670,
                '$ 348','$ 588','$ 1188','$ 2388',
                105,178,358,718
            )
        }
    }
    function getDiscount(){
        if (toggleState === 3){
            return <sup className='mt-6 has-text-danger'> -10% </sup>
        }
        else if(toggleState === 6){
            return <sup className='mt-6 has-text-danger'> -20% </sup>
        }
        else if (toggleState === 12){
            return <sup className='mt-6 has-text-danger'> -30% </sup>
        }
        else {
            return ''
        }
    }

    return (
        <>
            <div style={{scrollMarginTop: 99}}
                 id="pricing-block"
                 className="container mt-6">
                <div className="box">
                    <div className="content has-text-centered">
                        <h1>{t.pricing.title} </h1>
                        <h1 className='has-text-centered-desktop violet-text'>{getPrice()}{getDiscount()}</h1>
                        <hr/>
                        <div className="columns">
                            {createSwitcher(`1 ${t.pricing.month}`, 1)}
                            {createSwitcher(`3 ${t.pricing.monthsRu}`, 3)}
                            {createSwitcher(`6 ${t.pricing.months}`, 6)}
                            {createSwitcher(`12 ${t.pricing.months}`, 12)}
                        </div>
                        {updateTableData()}
                    </div>
                    <div className="columns is-centered has-text-centered-mobile">
                            <button className="btn-grad demo-btn full" onClick={() => props.setShowModal(true)}>
                                <label className="label dropdown has-text-weight-semibold has-text-white ">{t.callback}</label>
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}