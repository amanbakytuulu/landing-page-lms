import Link from "next/link";
import Image from "next/image";
import laptop from "../assets/img/main.png"
import ModalForm from "./Modal";
import {useState} from "react";
import Modal from "./Modal";
import SingleForm from "./SingleForm";




export default function Banner() {

    const [showModal, setShowModal] = useState(false)
    const [showDoneModal, setShowDoneModal] = useState(false)

    const openDoneModal = () => {
      setShowDoneModal(true)
    }

    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
        <div className='container mb-6'>
            <div className='banner'>
                <div className="container">
                    <div className="side description">
                        <h1>Accounting Software Built for Owners</h1>
                        <p>Now 70% Off for 3 Months</p>
                        <button className="btn-grad" onClick={() => setShowModal(true)}>
                            <label htmlFor="" className="label has-text-weight-semibold has-text-white">Free 7 day trial</label>
                        </button>
                        <Modal
                            onClose={() => setShowModal(false)}
                            show={showModal}
                        >
                            <SingleForm setShowModal={setShowModal}  setShowDoneModal={setShowDoneModal}/>

                        </Modal>

                        <Modal
                            onClose={()=>setShowDoneModal(false)}
                            show={showDoneModal}
                            >
                            <h1>Your application successfully sent!</h1>
                        </Modal>

                    </div>
                    <div className="side ban-img">
                        <div className="ellipse">
                        </div>
                        <div className="img">
                            <Image src={laptop}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}