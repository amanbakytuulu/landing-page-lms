import Link from "next/link";
import Image from "next/image";
import laptop from "../assets/img/main.png"
import ModalForm from "./ModalForm";
import {useState} from "react";



export default function Banner() {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
        <div>
            <div className='banner'>
                <div className="container">
                    <div className="side description">
                        <h1>Accounting Software Built for Owners</h1>
                        <p>Now 70% Off for 3 Months</p>
                            <button onClick={openModal} style={{backgroundColor: "#7367F0"}} className='button has-text-white has-text-weight-bold'>
                                Demo
                            </button>
                            <ModalForm showModal={showModal} setShowModal={setShowModal}/>
                    </div>
                    <div className="side ban-img">
                        <div className="ellipse">
                            <div style={{marginTop: 180}}>
                                <Image src={laptop}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}