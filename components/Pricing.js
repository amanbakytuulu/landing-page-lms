import {useState} from "react";

export default function Pricing() {
    const [toggleState, setToggleState] = useState(false)

    const togglePriceMode = () => {
        setToggleState(prev => !prev)
    }

    return (
        <>

            <div className="container mt-6">
                <div className="box">
                    <div className="content has-text-centered-desktop">
                        <h1>Tariffs</h1>
                        <div className="content-body has-text-centered-desktop">
                            <div className="label mb-6">
                                <span className="mr-3">month</span>
                                <label className="form-switch">
                                    <input type="checkbox" onClick={() => togglePriceMode()}/>
                                    <i/>
                                    <span className="ml-3">year</span>
                                </label>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                <div className="price-block">
                                    <div className="title">Small</div>
                                    <span className="cost">{toggleState ? "$288" : "$29"}</span>{toggleState ? "/year" : "/month"} <br/>
                                    <h5 className="subtitle is-5">Active users:</h5>
                                    <h6 className="subtitle is-6">From 1 to 100</h6>
                                    <button style={{width: "65%", margin: "auto", marginTop: "90px"}} className="btn-grad">
                                        Buy now
                                    </button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="price-block">
                                    <div className="title">Medium</div>
                                    <span className="cost">{toggleState ? "$600" : "$50"}</span>{toggleState ? "/year" : "/month"} <br/>
                                    <h5 className="subtitle is-5">Active users:</h5>
                                    <h6 className="subtitle is-6">From 101 to 200</h6>
                                    <button style={{width: "65%", margin: "auto", marginTop: "90px"}} className="btn-grad">
                                        Buy now
                                    </button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="price-block">
                                    <div className="title">Large</div>
                                    <span className="cost">{toggleState ? "$1188" : "$99"}</span>{toggleState ? "/year" : "/month"} <br/>
                                    <h5 className="subtitle is-5">Active users:</h5>
                                    <h6 className="subtitle is-6">From 201 to 500</h6>
                                    <button style={{width: "65%", margin: "auto", marginTop: "90px"}} className="btn-grad">
                                        Buy now
                                    </button>
                                </div>
                            </div>
                            <div className="column">
                                <div className="price-block">
                                    <div className="title">Enterprise</div>
                                    <span className="cost">{toggleState ? "$2388" : "$199"}</span>{toggleState ? "/year" : "/month"} <br/>
                                    <h5 className="subtitle is-5">Active users:</h5>
                                    <h6 className="subtitle is-6">From 501 to 1000</h6>
                                    <button style={{width: "65%", margin: "auto", marginTop: "90px"}} className="btn-grad">
                                        Buy now
                                    </button>
                                </div>
                            </div>

                        </div>
                        <h5>Leave a request to find out the conditions and detailed information for your institution</h5>
                    </div>
                </div>
            </div>
        </>
    )
}