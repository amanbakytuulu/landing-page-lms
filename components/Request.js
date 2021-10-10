import SingleForm from "./SingleForm";

export default function Request(props) {
    return (
        <>
            <div className="container mt-6">
                <div className="columns">
                    <div className="column">
                        <div className="content">
                            <h1>Reviews</h1>
                            <p>If you have any questions, we will help you!
                                Fill out the application and we will contact you!</p>
                        </div>
                    </div>
                    <div className="column has-text-centered-desktop has-text-centered-mobile">
                        <button onClick={() => props.setShowModal(true)} type="submit"
                                style={{backgroundColor: "#7367F0", paddingLeft: 60, paddingRight: 60}}
                                className='button has-text-white has-text-weight-bold'>
                            Send Request
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}