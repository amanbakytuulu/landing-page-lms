import {useEffect, useState} from "react";
import SingleForm from "./SingleForm";
import Modal from "./Modal";

export default function DynamicBanner(props) {
    return (
        <>

                <div style={{cursor:"pointer"}} className="container mt-6" onClick={()=> props.setShowModal(true)}>
                    <div className="context">
                        <div className="content is-centered has-text-centered-desktop has-text-centered-mobile">
                            <h2 className="has-text-white mt-6">{props.title}</h2>
                            <h1 className="has-text-white mt-6">{props.btnText}</h1>
                            <small className="has-text-white">{props.subtitle}</small>
                        </div>
                    </div>


                    <div className="area">
                        <ul className="circles">
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                        </ul>
                    </div>

                </div>



            {/*<div className="container mt-6">*/}
            {/*    <div className="content is-center has-text-centered">*/}
            {/*        <section style={{backgroundColor:props.bgColor}} className="hero">*/}
            {/*            <div className="hero-body">*/}
            {/*                <p className="title has-text-white">{props.title}</p>*/}
            {/*                <button className="button has-text-weight-bold"><a href={props.btnUrl}>{props.btnText}</a></button>*/}
            {/*                <p className="subtitle mt-3 has-text-white">{props.subtitle}</p>*/}
            {/*            </div>*/}
            {/*        </section>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )

}