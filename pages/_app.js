import "/styles/main.scss"
import TagManager from 'react-gtm-module'
import React, {useEffect} from "react";

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
                <Component {...pageProps} />
        </>

    )
}