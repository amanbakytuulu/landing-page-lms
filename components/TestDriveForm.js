import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import axios from "axios";
import {useState} from "react";

export default function TestDriveForm(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    const [values, setValues] = useState({type: 'courses', currency: 'USD', language: 'en'});
    const change = (name, event) => {
        values[name] = event.target.value;
        setValues(values);
    };



    const sendInfo = async event => {
        event.preventDefault()

        const httpConfig = {
            headers: {
                'Authorization': 'xk2n92ishah2nja028aha'
            }
        };

        const leadHttpConfig = {
            headers:{
                'Authorization': '88ce8238ec37ec28901ad76b529a2e92'
            }
        }
        axios.post('https://stage.admin.codifylab.com/api/test-drive/', values, httpConfig)
            .then(res => {
                if (res.status === 200) {
                    axios.post('https://stage.crm.codifylab.com/api/crm/leads/?org_id=54',values, leadHttpConfig)
                    router.push("/thanks_test_drive")
                }
            },
                )
            .catch(function (error) {
              console.log(error)
            });
    }

    return (
        <>
            <form onSubmit={sendInfo}>
                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.orgName}</label>
                    <div className="control">
                        <input className="input is-small is-centered is-rounded" required
                               onChange={e => change('name', e)}
                               type="text"
                               placeholder="Company LLC"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.fullName}</label>
                    <div className="control">
                        <input className="input is-small is-centered is-rounded" required
                               onChange={e => change('full_name', e)}
                               type="text"
                               placeholder="John Doe"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.email}</label>
                    <div className="control">
                        <input className="input is-small is-centered is-rounded" required
                               onChange={e => change('email', e)}
                               type="email"
                               placeholder="username@gmail.com"/>
                    </div>

                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">{t.test_drive.testDriveForm.phone}</label>
                    <div className="control">
                        <input className="input is-small is-centered is-rounded" required
                               onChange={e => change('phone', e)}
                               type="phone"
                               placeholder="username@gmail.com"/>
                    </div>
                </div>
                <div className="control has-text-centered">
                    <button className="button btn-grad" type='submit'>
                        {t.testDriveStart}
                    </button>
                </div>
            </form>
        </>
    )
}