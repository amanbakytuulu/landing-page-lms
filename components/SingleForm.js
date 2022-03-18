import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import Image from "next/image";
import check from "../assets/img/QuaintLikelyFlyingfish-size_restricted.gif";
import Modal from "./Modal";
import { redirectTo, sendEvent } from "./commonFunctions";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useForm, Controller } from "react-hook-form";
import { Validations } from "./validate/validateSingleForm";



export default function SingleForm(props) {
    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;

    const { formOptions } = Validations();

    const { register, handleSubmit, formState, control } = useForm(formOptions);
    let { errors } = formState;

    const [showDoneModal, setShowDoneModal] = useState(false)

    const sendLeadInfo = data => {
        let comments = []

        if (Object.keys(router.query)) {
            for (let [key, value] of Object.entries(router.query)) {
                if (key.startsWith("utm_")) {
                    comments.push(`${key}: ${value}`)
                }
            }
        }
        comments.push(`Company name: ${data.company_name}`)
        comments.push(`<b> DEMO </b>`)

        let values = {
            "first_name": data.first_name,
            "company_name": data.company_name,
            "phone": data.phone,
            "email": data.email || 'example@mail.ru',
            "extra_comments": comments
        }

        const headers = {
            mode: "cors",
            headers: {
                Authorization: process.env.NEXT_PUBLIC_STAGE_CRM_API_TOKEN,
            }
        }
        axios.post(process.env.NEXT_PUBLIC_STAGE_CRM_API_URL, values, headers).then(res => {
            if (res.status === 201) {
                console.log('Success!')
                redirectTo("demo/thanks_demo",router)
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (<>
        <form onSubmit={handleSubmit(sendLeadInfo)}>
            <div className="field">
                <label className="label has-text-weight-semibold">{t.form.name}</label>
                <div className="control">
                    <input
                        className={`input is-centered ${errors.first_name ? 'is-danger' : ''}`}
                        type="text"
                        {...register('first_name')}
                        placeholder="John Doe" />
                </div>
                <p className="help is-danger">{errors.first_name?.message}</p>
            </div>

            <div className="field">
                <label className="label has-text-weight-semibold">{t.form.phone}</label>
                <div className="control">
                    <Controller
                        name="phone-input"
                        control={control}
                        {...register('phone')}
                        ref={null}
                        render={({ field: { onChange } }) => (<PhoneInput
                            key={1}
                            onChange={onChange}
                            country="ru"
                            inputStyle={errors.phone ? {
                                width: "100%", height: "40px", borderRadius: "15px", borderColor: "red"
                            } : { width: "100%", height: "40px", borderRadius: "15px" }}
                            buttonStyle={{ borderTopLeftRadius: '13px', borderBottomLeftRadius: '13px' }}
                        />)}
                    />
                </div>
                <p className="help is-danger">{errors.phone?.message}</p>
            </div>

            <div className="field">
                <label className="label has-text-weight-semibold">{t.form.email}</label>
                <div className="control">
                    <input className={`input is-centered `}
                        type="email"
                        placeholder="john@mail.ru"
                        {...register('email')}
                    />
                </div>
            </div>

            <div className="field">
                <label className="label has-text-weight-semibold">{t.form.company}</label>
                <div className="control">
                    <input className={`input is-centered`}
                        type="text"
                        placeholder="Company GmbH"
                        {...register('company_name')}
                    />
                </div>
            </div>

            <div className={`has-text-centered-desktop has-text-centered-mobile ${errors.first_name ? 'mt-5' : 'mt-6'}`}>
                <button type="submit"
                    style={{ backgroundColor: "#7367F0", paddingLeft: 60, paddingRight: 60 }}
                    className='button has-text-white has-text-weight-bold'>
                    {t.form.sendBtnText}
                </button>
                <br />
                <a className='violet-text is-small' onClick={() => redirectTo("/privacy-policy",router)}>
                    <small>
                        <u>{t.form.politicsLabel}</u>
                    </small>
                </a>
            </div>
        </form>

        <Modal
            onClose={() => setShowDoneModal(false)}
            show={showDoneModal}
        >
            <div className="content is has-text-centered-desktop has-text-centered-mobile">
                <Image src={check} />
                <h5 className="is-success violet-text is-light is-large">{t.form.successText}</h5>
            </div>
        </Modal>
    </>)
}

