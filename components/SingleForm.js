import axios from "axios";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import Image from "next/image";
import check from "../assets/img/QuaintLikelyFlyingfish-size_restricted.gif";
import Modal from "./Modal";

export default function SingleForm(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    const [values, setValues] = useState({});
    const change = (name, event) => {
        values[name] = event.target.value;
        setValues(values);
    };
    const [showDoneModal, setShowDoneModal] = useState(false)

    const sendLeadInfo = async event => {
        event.preventDefault()

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
                        <input className="input is-small is-centered is-rounded" required
                               onChange={e => change('first_name', e)}
                               type="text"
                               placeholder="John Doe"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.phone}</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" required onChange={e => change('phone', e)}
                               placeholder="123456789"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.email}</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="email" onChange={e => change('email', e)}
                               placeholder="useremail@email.com"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.company}</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" onChange={e => change('company_name', e)}
                               placeholder="Company GmbH"/>
                    </div>
                </div>

                <div className="has-text-centered-desktop has-text-centered-mobile mt-6">
                    <button type="submit" style={{backgroundColor: "#7367F0", paddingLeft: 60, paddingRight: 60}}
                            className='button has-text-white has-text-weight-bold'>
                        {t.form.sendBtnText}
                    </button>
                    <br/>
                    <Link href="privacy-policy">
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