import axios from "axios";
import {useState} from "react";

export default function SingleForm() {
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

        let res = axios.post("https://stage.crm.codifylab.com/api/crm/leads/?org_id=17", values, httpConfig).then(
        )

    }
    return (
        <>
            <form onSubmit={sendLeadInfo}>
                <div className="box">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input is-small"
                                   onChange={e => change('first_name', e)}
                                   type="text"
                                   placeholder="Cletus Kasady"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Phone number</label>
                        <div className="control">
                            <input  className="input is-small" type="phone" onChange={e => change('phone_number', e)}
                                   placeholder="+996 666 666 666"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input is-small" type="email" onChange={e => change('email', e)}
                                   placeholder="cletuscarnage@gmail.com"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label ">Company`s name</label>
                        <div className="control">
                            <input className="input is-small" type="text" onChange={e => change('company_name', e)}
                                   placeholder="Ravencroft LLC"/>
                        </div>
                    </div>

                    <div className="has-text-centered-desktop">
                        <button type="submit" style={{backgroundColor: "#7367F0"}}
                                className='button has-text-white  has-text-weight-bold'>
                            Send Request
                        </button>
                        <br/>
                        <a className='violet-text is-small'>
                            By submitting an application you agree with politics confidentiality
                        </a>
                    </div>
                </div>
            </form>
        </>
    )
}