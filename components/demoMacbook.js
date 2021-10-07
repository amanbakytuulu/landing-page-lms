import macbook from "../assets/svg/MacBook Pro.svg"
import Image from "next/image";

export default function DemoMacbook() {
    return (
        <>
            <div className="container mt-6">
                <div className="box has-text-centered-desktop">
                    <div className="content level-left">
                        <h1>Demo of system</h1>
                    </div>
                    <Image src={macbook} alt=""/>
                </div>
            </div>
        </>
    )
}