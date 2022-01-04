import React, { Component } from "react";
import Slider from "react-slick";
import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";


export default class AutoPlay extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2100,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let router = useRouter()
        const {locale} = router;
        const t = locale === 'en' ? en : ru;
        return (
            <div>
                <h2>Auto Play</h2>

            </div>
        );
    }
}