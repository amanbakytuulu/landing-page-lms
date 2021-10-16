import axios from "axios";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import en from "../locales/en";
import ru from "../locales/ru";
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
                'Authorization': 'aba8203a396003b3cafb2d66e1a709c7'
            }
        };
        axios.post('https://stage.crm.codifylab.com/api/crm/leads/?org_id=17', values, httpConfig)
            .then(res => {
                if (res.status === 201) {
                    setShowDoneModal(true)
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
                        <input className="input is-small is-centered" required
                               onChange={e => change('first_name', e)}
                               type="text"
                               placeholder="Adam Adamson"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.phone}</label>
                    <div className="control">
                        <input className="input is-small" type="text" required onChange={e => change('phone_number', e)}
                               placeholder="123456789"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.email}</label>
                    <div className="control">
                        <input className="input is-small" type="email" onChange={e => change('email', e)}
                               placeholder="username@email.com"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.form.company}</label>
                    <div className="control">
                        <input className="input is-small" type="text" onChange={e => change('company_name', e)}
                               placeholder="Company GmbH"/>
                    </div>
                </div>

                <div className="has-text-centered-desktop has-text-centered-mobile">
                    <button type="submit" style={{backgroundColor: "#7367F0", paddingLeft: 60, paddingRight: 60}}
                            className='button has-text-white has-text-weight-bold'>
                        {t.form.sendBtnText}
                    </button>
                    <br/>
                    <Link href="privacy-policy">
                        <a className='violet-text is-small'>
                            <u>    {t.form.politicsLabel}</u>
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