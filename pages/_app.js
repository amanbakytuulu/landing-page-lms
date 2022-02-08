import "/styles/main.scss"
import TagManager from 'react-gtm-module'
import React, {useEffect} from "react";
import NextNProgress from "nextjs-progressbar";

const tagManagerArgs = {
    gtmId: "GTM-MDJLVR4",
    events: {
        sendUserInfo: 'userInfo'
    }
}
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize(tagManagerArgs)
    }, []);
    return(
        <>
            <NextNProgress color="#DD00FFFF" height={5} showOnShallow={true} options={{ easing: 'ease', speed: 500 }} />
                <Component {...pageProps} />
        </>

    )
}