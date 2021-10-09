import axios from "axios";
import {useState} from "react";
import Banner from "./Banner";

export default function SingleForm(props) {
    const [values, setValues] = useState({});
    const change = (name, event) => {
        values[name] = event.target.value;
        setValues(values);
    };
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
                    props.setShowDoneModal(true)
                    props.setShowModal(false)
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
                    <label className="label has-text-weight-semibold">Name</label>
                    <div className="control">
                        <input className="input is-small is-centered"
                               onChange={e => change('first_name', e)}
                               type="text"
                               placeholder="Cletus Kasady"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">Phone number</label>
                    <div className="control">
                        <input className="input is-small" type="phone" onChange={e => change('phone_number', e)}
                               placeholder="+996 666 666 666"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">Email</label>
                    <div className="control">
                        <input className="input is-small" type="email" onChange={e => change('email', e)}
                               placeholder="cletuscarnage@gmail.com"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-weight-semibold">Company`s name</label>
                    <div className="control">
                        <input className="input is-small" type="text" onChange={e => change('company_name', e)}
                               placeholder="Ravencroft LLC"/>
                    </div>
                </div>

                <div className="has-text-centered-desktop has-text-centered-mobile">
                    <button type="submit" style={{backgroundColor: "#7367F0"}}
                            className='button has-text-white  has-text-weight-bold'>
                        Send Request
                    </button>
                    <br/>
                    <a className='violet-text label is-small'>
                        <u>
                            By submitting an application you agree with politics confidentiality
                        </u>
                    </a>
                </div>
            </form>
        </>
    )
}