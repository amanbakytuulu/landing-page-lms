import ReactPlayer from "react-player";

export default function VideoFeedback(props){
    return(
        <>
        <div className="video-block">
            <ReactPlayer
                url={props.videoUrl}
                />
        </div>
        </>
    )
}