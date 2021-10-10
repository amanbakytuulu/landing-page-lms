import ReactPlayer from "react-player";

export default function VideoFeedback(props) {
    return (
        <>
            <div className="column">
                <div className="video-block">
                    <ReactPlayer
                        url={props.videoUrl} key={props.key}
                    />
                </div>
            </div>
        </>
    )
}