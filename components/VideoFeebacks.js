import VideoFeedback from "./VideoFeedback";

export default function VideoFeedbacks() {
    const videoUrls =
        ["https://www.youtube.com/watch?v=k3_009Uyz4M"]

    return (
        <>
            <div className="container">
                <div className="box mt-6">
                    <div className="content is-inline-flex">
                        <h1>Reviews</h1>
                        {videoUrls.map(url => <VideoFeedback key={url.index} videoUrl={url}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}