import axios from "axios";
import { useRouter } from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import RenderServerError from "./serverErrorRenderer";
import { redirectTo, sendEvent } from "./commonFunctions";
import { Validations } from './validate/validateTestDriveForm';
import PhoneInput from "react-phone-input-2";

export default function TestDriveForm(props) {

    let router = useRouter()
    const { locale } = router;
    const t = locale === 'en' ? en : ru;
    const [isFormLoading, setIsFormLoading] = useState(false)
    const [isHasServerErrors, setHasServerErrors] = useState(false)
    const [serverErrors, setServerErrors] = useState([])

    const { formOptions } = Validations();

    const { register, handleSubmit, formState, control } = useForm(formOptions);
    let { errors } = formState;

    function sendTestInfo(data) {
        data['currency'] = "USD"
        data['language'] = router.locale
        data['type'] = "courses"

        let comments = [];

        if (Object.keys(router.query)) {
            for (let [key, value] of Object.entries(router.query)) {
                if (key.startsWith("utm_")) {
                    comments.push(`${key}: ${value}`)
                }
            }
        }
        comments.push(`Company name: ${data.name}`)
        comments.push(`<b> FROM TEST DRIVE </b>`)

        setIsFormLoading(true)
        sendEvent("submit_test_drive")


        const headers_admin = {
            mode: "cors",
            headers: {
                Authorization: process.env.NEXT_PUBLIC_STAGE_ADMIN_API_TOKEN,
            }
        }

        axios.post(process.env.NEXT_PUBLIC_STAGE_ADMIN_API_URL, data, headers_admin)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('accept_url', response.data.accept_url);

                    setHasServerErrors(false)
                    setServerErrors([]);

                    let values = {
                        "first_name": data.full_name,
                        "company_name": data.name,
                        "phone": data.phone,
                        "email": data.email,
                        "extra_comments": comments
                    }

                    const headers_lead = {
                        mode: "cors",
                        headers: {
                            Authorization: process.env.NEXT_PUBLIC_STAGE_CRM_API_TOKEN,
                        }
                    }

                    axios.post(process.env.NEXT_PUBLIC_STAGE_CRM_API_URL, values, headers_lead).then(res => {
                        console.log("Success!")
                    }).catch(function (error) {
                        console.log(error)
                    });
                    redirectTo("test_drive/thanks_test_drive",router)
                }
            }).catch(({ response }) => {
                setIsFormLoading(false);
                for (let message in response?.data.errors) {
                    setServerErrors(response.data.errors[message]);
                }
                setHasServerErrors(true);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(sendTestInfo)}>
                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.orgName}</label>
                    <div className="control">
                        <input
                            disabled={isFormLoading ? true : ''}
                            {...register('name')}
                            className={`input is-centered ${errors.name ? 'is-danger' : ''}`}
                            type="text"
                            placeholder="Company LLC" />
                    </div>
                    <p className="help is-danger">{errors.name?.message}</p>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.fullName}</label>
                    <div className="control">
                        <input
                            disabled={isFormLoading ? true : ''}
                            {...register('full_name')}
                            className={`input is-centered ${errors.full_name ? 'is-danger' : ''}`}
                            type="text"
                            placeholder="John Doe" />
                    </div>
                    <p className="help is-danger">{errors.full_name?.message}</p>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.email}</label>
                    <div className="control">
                        <input
                            disabled={isFormLoading ? true : ''}
                            {...register('email')}
                            className={`input is-centered ${errors.email ? 'is-danger' : ''}`}
                            type="email"
                            placeholder="john@mail.ru" />
                    </div>
                    <p className="help is-danger">{errors.email?.message}</p>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.phone}</label>
                    <div className="control">
                        <Controller
                            name="phone-input"
                            control={control}
                            {...register('phone')}
                            ref={null}
                            // rules={{ required: true,disabled:true }}
                            render={({ field: { onChange } }) => (
                                <PhoneInput
                                    key={1}
                                    disabled={isFormLoading ? true : ''}
                                    onChange={onChange}
                                    country="ru"
                                    inputStyle={
                                        errors.phone ?
                                            { width: "100%", height: "40px", borderRadius: "15px", borderColor: "red" }
                                            : { width: "100%", height: "40px", borderRadius: "15px" }}
                                    buttonStyle={{ borderTopLeftRadius: '13px', borderBottomLeftRadius: '13px' }}
                                />
                            )}
                        />
                        <p className="help is-danger">{errors.phone?.message}</p>
                    </div>
                </div>
                <div className="mb-3">
                    {isHasServerErrors ? RenderServerError(serverErrors) : ''}
                </div>
                <div className={`control has-text-centered ${errors.full_name ? 'mt-5' : 'mt-6'}`}>
                    <button className={`button btn-grad ${isFormLoading ? 'is-loading' : ''}`} type='submit'>
                        {t.testDriveStart}
                    </button>
                    <br />
                    <a className='violet-text is-small' onClick={() => redirectTo("/privacy-policy",router)}>
                        <small>
                            <u>{t.form.politicsLabel}</u>
                        </small>
                    </a>
                </div>
            </form>
        </>
    )
}
