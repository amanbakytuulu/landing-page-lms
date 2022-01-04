import { useState } from "react";

export default function Accordion(props) {
    const [isShowing, setIsShowing] = useState(false);
    if(props.setShowing === true && isShowing === false){
        setIsShowing(true)
    }
    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div>
            <button
                style={{
                    width: "100%",
                    position: "relative",
                    textAlign: "left",
                    padding: "4px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer"
                }}
                onClick={toggle}
                type="button"
            >
                <h5 className='violet-text'>
                    {isShowing ? '▼':'►'}&#32;&#x20;{props.title}
                </h5>
            </button>
            <div
                style={{ display: isShowing ? "block" : "none", padding: "5px", transition:'5s' }}
                dangerouslySetInnerHTML={{
                    __html: props.content
                }}
            />
        </div>
    );
}