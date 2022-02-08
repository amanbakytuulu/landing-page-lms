import axios from "axios";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import Image from "next/image";
import check from "../assets/img/QuaintLikelyFlyingfish-size_restricted.gif";
import Modal from "./Modal";
import {sendEvent} from "./commonFunctions";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

export default function SingleForm(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    const [values, setValues] = useState({});
    const change = (name, event) => {
        values[name] = event.target.value;
        setValues(values);
    };
    const changePhone = (name, phone_number) => {
        values[name] = `+${phone_number}`;
        setValues(values);
    }
    const [showDoneModal, setShowDoneModal] = useState(false)

    const sendLeadInfo = async event => {
        event.preventDefault()
        sendEvent('submit_demo')

        const httpConfig = {
            headers: {
                'Authorization': '88ce8238ec37ec28901ad76b529a2e92'
            }
        };
        axios.post('https://stage.crm.codifylab.com/api/crm/leads/?org_id=54', values, httpConfig)
            .then(res => {
                if (res.status === 201) {
                    router.push('/thanks_demo')
                }
            })
            .catch(function (error) {
                console.log('error', error);
            });
    }
    return (
        <>
            <form onSubmit={sendLeadInfo}>
                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.name}</label>
                    <div className="control">
                        <input className="input is-centered" required
                               onChange={e => change('first_name', e)}
                               type="text"
                               placeholder="John Doe"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.phone}</label>
                    <div className="control">
                        <input className="input is-centered" type="number" required onChange={e => change('phone', e)}
                               placeholder="123456789"/>
                    </div>
                    {/*<PhoneInput*/}
                    {/*    country={'sg'}*/}
                    {/*    inputStyle={{width:"100%", height:"40px", borderRadius:"15px"}}*/}
                    {/*    buttonStyle={{borderRadius:"15px"}}*/}
                    {/*    onChange={phone => changePhone('phone', phone)}*/}
                    {/*    />*/}
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.email}</label>
                    <div className="control">
                        <input className="input" type="email" onChange={e => change('email', e)}
                               placeholder="useremail@email.com"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.company}</label>
                    <div className="control">
                        <input className="input" type="text" onChange={e => change('company_name', e)}
                               placeholder="Company GmbH"/>
                    </div>
                </div>

                <div className="has-text-centered-desktop has-text-centered-mobile mt-6">
                    <button type="submit" style={{backgroundColor: "#7367F0", paddingLeft: 60, paddingRight: 60}}
                            className='button has-text-white has-text-weight-bold'>
                        {t.form.sendBtnText}
                    </button>
                    <br/>
                    <Link href="/privacy-policy">
                        <a className='violet-text is-small'>
                            <small>
                                <u>{t.form.politicsLabel}</u>
                            </small>
                        </a>
                    </Link>
                </div>
            </form>

            <Modal
                onClose={()=>setShowDoneModal(false)}
                show={showDoneModal}
            >
                <div className="content is has-text-centered-desktop has-text-centered-mobile">
                    <Image src={check}/>
                    <h5 className="is-success violet-text is-light is-large">{t.form.successText}</h5>
                </div>
            </Modal>
        </>
    )
}