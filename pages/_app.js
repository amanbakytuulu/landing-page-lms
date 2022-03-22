import "/styles/main.scss"
import TagManager from 'react-gtm-module'
import React, {useEffect} from "react";
import NextNProgress from "nextjs-progressbar";
import AOS from "aos";
import {DefaultSeo} from "next-seo";
import "aos/dist/aos.css";
import SEO from '../next-seo.config'

const tagManagerArgs = {
    gtmId: "GTM-MDJLVR4",
    events: {
        sendUserInfo: 'userInfo'
    }
}
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init()
        AOS.refresh();
        TagManager.initialize(tagManagerArgs)
    }, []);
    return(
        <>
            <DefaultSeo {...SEO}/>
            <NextNProgress color="#DD00FFFF" height={5} showOnShallow={true} options={{ easing: 'ease', speed: 500 }} />
                <Component {...pageProps} />
        </>

    )
}