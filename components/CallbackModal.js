import Image from "next/image";
import Link from "next/link"
import gift from '../assets/img/gift.svg'

export default function CallbackModal({show, setShow}) {

    return (
        <div className={`modal ${show ? 'is-active' : ''} has-text-centered `}>
            <div className="modal-background"></div>
            <div className="modal-content box m-2" style={{width:'500px'}} >
                <Image className={"image"} src={gift}/>
                <button className="delete is-large" aria-label="close" style={{position: 'absolute', right: '20px'}}
                        onClick={() => setShow(false)}
                >
                </button>

                <h3 className={"is-size-4 has-text-weight-bold has-text-black mt-2 mb-4"}>У НАС ДЛЯ ВАС ПОДАРОК</h3>
                <p className={" has-text-black"}>14 ДНЕЙ БЕСПЛАТНОГО ТЕСТОВОГО ПЕРИОДА </p>
                <div className={"has-text-weight-semibold is-size-4"}>+</div>
                {'\n'}
                <p className={" has-text-black"}>ЭЛЕКТРОННАЯ КНИГА ПО ВЫБОРУ ПЛАТФОРМЫ
                    ДЛЯ ПРОВЕДЕНИЯ ЭФФЕКТИВНОГО ОБУЧЕНИЯ
                </p>{'\n'}
                <p className={"mt-5 has-text-black"}>Оставьте заявку, чтобы забрать подарок,
                    а также подробнее узнать о возможностях платформы.
                </p>
                <Link href="https://lms.codifylab.com/ru/demo?utm_source=site&utm_medium=banner&utm_campaign=present">
                    <a className={"button btn-grad btn-modal has-text-weight-semibold mt-5"}> Оставить заявку </a>
                </Link>
            </div>
        </div>
    )
}