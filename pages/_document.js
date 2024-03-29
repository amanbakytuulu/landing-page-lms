import Document, {Html, Head, Main, NextScript} from "next/dist/pages/_document";

class MainDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                    <link rel="bower_components/aos/dist/aos.js"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                <div id="modal-root"></div>
                </body>
            </Html>
        );
    }
}

export default MainDocument;