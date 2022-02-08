import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import {useState} from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import RenderServerError from "./serverErorRenderer";
import axios from "axios";
import {sendEvent} from './commonFunctions'
import PhoneInput from "react-phone-input-2";
import Link from "next/link";

export default function TestDriveForm(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    const [isFormLoading, setIsFormLoading] = useState(false)
    const [isHasServerErrors, setHasServerErrors] = useState(false)
    const [serverErrors, setServerErrors] = useState([])

    const validationScheme = Yup.object().shape({
        full_name: Yup.string()
            .required(t.validation.required),
        name: Yup.string()
            .required(t.validation.required),
        email: Yup.string()
            .required(t.validation.required),
        phone: Yup.string()
            .required(t.validation.required),
    })

    const formOptions = {resolver: yupResolver(validationScheme)};
    const {register, handleSubmit, reset, formState} = useForm(formOptions);
    const [values, setValues] = useState({});
    let {errors} = formState;


    const change = (name, event) => {
        values[name] = event.target.value;
        setValues(values);
    };

    const changePhone = (name, phone_number) => {
        values[name] = `+${phone_number}`;
        setValues(values);
    }

    function postData(data) {
        data['currency'] = "USD"
        data['language'] = `${router.locale}`
        data['type'] = "courses"
        sendEvent('submit_demo')

        setIsFormLoading(true)
        sendEvent("submit_test_drive")
        fetch('https://stage.admin.codifylab.com/api/test-drive/', {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'xk2n92ishah2nja028aha'
            }
        }).then((response_data) => {
            if (response_data.status !== 200) {
                response_data.json().then(data => {
                    setIsFormLoading(false)
                    if (data.errors !== null) {
                        setHasServerErrors(true)
                        for (let message in data["errors"]) {
                            setServerErrors(`${data['errors'][message]}`)
                        }
                    }
                })
            }
            if (response_data.status === 200) {
                setHasServerErrors(false)
                const httpConfig = {
                    headers: {
                        'Authorization': '88ce8238ec37ec28901ad76b529a2e92',
                    }
                };

                let values = {
                    "first_name": `${data['full_name']}`,
                    "company_name": `${data['name']}`,
                    "phone": `${data['phone']}`,
                    "email": `${data['email']}`
                }
                axios.post('https://stage.crm.codifylab.com/api/crm/leads/?org_id=54', values, httpConfig)
                    .then(res =>{
                        console.log("Success!")
                    }).catch(function (error) {
                        console.log(error)
                    });
                router.push("/thanks_test_drive")
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit(postData)}>
                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.orgName}</label>
                    <div className="control">
                        <input name="name" disabled={isFormLoading ? 'True' : ''}
                               {...register('name')}
                               className={`input is-centered ${errors.name ? 'is-danger' : ''}`}
                               onChange={e => change('company_name', e)}
                               type="text"
                               placeholder="Company LLC"/>
                    </div>
                    <p className="help is-danger">{errors.name?.message}</p>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.fullName}</label>
                    <div className="control">
                        <input name="full_name" disabled={isFormLoading ? 'True' : ''}
                               onChange={e => change('first_name', e)}
                               {...register('full_name')}
                               className={`input is-centered ${errors.full_name ? 'is-danger' : ''}`}
                               type="text"
                               placeholder="John Doe"/>
                    </div>
                    <p className="help is-danger">{errors.full_name?.message}</p>
                </div>


                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.email}</label>
                    <div className="control">
                        <input name="email" disabled={isFormLoading ? 'True' : ''}
                               onChange={e => change('email', e)}
                               {...register('email')}
                               className={`input is-centered ${errors.email ? 'is-danger' : ''}`}
                               type="email"
                               placeholder="username@gmail.com"/>
                    </div>
                    <p className="help is-danger">{errors.email?.message}</p>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.phone}</label>
                    <div className="control">
                        <input name="phone" disabled={isFormLoading ? 'True' : ''}
                               onChange={e => change('phone', e)}
                               {...register('phone')}
                               className={`input is-centered ${errors.phone ? 'is-danger' : ''}`}
                               type="number"
                               placeholder="123456789"/>
                        {/*<PhoneInput*/}
                        {/*    inputProps={register('phone')}*/}
                        {/*    country={'ru'}*/}
                        {/*    inputStyle={{width:"100%", height:"40px", borderRadius:"15px"}}*/}
                        {/*    buttonStyle={{borderRadius:"15px"}}*/}
                        {/*    onChange={phone => changePhone('phone', phone)}*/}
                        {/*/>*/}

                        <p className="help is-danger">{errors.phone?.message}</p>
                    </div>
                </div>
                <div className="mb-3">
                    {isHasServerErrors ? RenderServerError(serverErrors) : ''}
                </div>
                <div className="control has-text-centered">
                    <button className={`button btn-grad ${isFormLoading ? 'is-loading' : ''}`} type='submit'>
                        {t.testDriveStart}
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

        </>
    )
}
