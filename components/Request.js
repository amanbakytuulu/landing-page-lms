import SingleForm from "./SingleForm";

export default function Request() {
    return (
        <>
            <div className="container">
                <div className="box mt-6">
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <h1>Reviews</h1>
                                <p>If you have any questions, we will help you!
                                    Fill out the application and we will contact you!</p>
                            </div>
                        </div>
                        <div className="column">

                            <div className="box">
                                <SingleForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}