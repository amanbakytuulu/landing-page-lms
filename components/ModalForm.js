import axios from "axios";

export default function ModalForm(showModal, setShowModal){
    return(
        <>
            {showModal ? <div>Modal</div> : null}
        </>
    )
}