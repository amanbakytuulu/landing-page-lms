export default function DynamicBanner(props) {
    return (
        <>
            <div className="container mt-6">
                <div className="content is-center has-text-centered">
                    <section style={{backgroundColor:props.bgColor}} className="hero">
                        <div className="hero-body">
                            <p className="title has-text-white">{props.title}</p>
                            <button className="button has-text-weight-bold"><a href={props.btnUrl}>{props.btnText}</a></button>
                            <p className="subtitle mt-3 has-text-white">{props.subtitle}</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )

}