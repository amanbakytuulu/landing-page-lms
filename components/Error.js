import Modal from "./Modal";

export default function Error(props){
    return(
        <>
        <Modal {...props}/>
            <div className="message is-danger">
                <div className="message-body">
                    {props.errorText}
                </div>
            </div>
        </>
    )
}