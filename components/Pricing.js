export default function Pricing() {
    return (
        <>

            <div className="container mt-6">
                <div className="box">
                    <div className="content has-text-centered-desktop">
                        <h1>Tariffs</h1>
                        <div className="content-body has-text-centered-desktop">
                            <div className="label mb-6">
                                Year
                                <label className="form-switch">
                                    <input type="checkbox" defaultChecked/>
                                    <i/>
                                    Month
                                </label>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                <div className="price-block">
                                    <br/>$7/month
                                    <br/>Active users:
                                    <br/>From 0 to 100
                                    Small
                                </div>
                            </div>
                            <div className="column">
                                <div className="price-block">
                                    <br/>$7/month
                                    <br/>Active users:
                                    <br/>From 0 to 100
                                    Small
                                </div>
                            </div>
                            <div className="column">
                                <div className="price-block">
                                    <br/>$7/month
                                    <br/>Active users:
                                    <br/>From 0 to 100
                                    Small
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