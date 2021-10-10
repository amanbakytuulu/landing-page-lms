import Image from "next/image";
import laptop from "../assets/img/main.png"
import insta from "../assets/svg/insta.svg"
import fb from "../assets/svg/fb.svg"
import tg from "../assets/svg/tg.svg"
import whats from "../assets/svg/whasp.svg"

export default function Banner(props) {
    return (
        <div className='container mb-6'>
            <div className='banner'>
                <div className="container">
                    <div className="side description">
                        <h1>{props.title}</h1>
                        <p>{props.subtitle}</p>
                        <button className="btn-grad" onClick={() => props.setShowModal(true)}>
                            <label htmlFor="" className="label has-text-weight-semibold has-text-white">{props.btn}</label>
                        </button>

                    </div>
                    <div className="side ban-img">
                        <div className="ellipse">
                        </div>
                        <div className="columns">
                            <div className="column">
                                <div className="img">
                                    <Image src={laptop}/>
                                </div>
                            </div>
                            <div className="column">
                                <ul className="social-media-links">
                                    <li><Image src={insta}/></li>
                                    <li><Image src={fb}/></li>
                                    <li><Image src={tg}/></li>
                                    <li><Image src={whats}/></li>
                                </ul>
                            </div>
                        </div>









                    </div>
                </div>
            </div>
        </div>
    )
}