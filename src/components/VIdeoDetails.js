import React from 'react';

const VideoDetails = (props) => {
    if(!props.video){
        return <div>loading...</div>
    }

    const source = `https://www.youtube.com/embed/${props.video.id.videoId}`; 

    return(
        <div>
            <div className="ui embed">
                <iframe src = {source}></iframe>
            </div>
            <div className="jumbotron jumbotron-fluid">
                {props.video.snippet.title}
            </div>
            <div>
                {props.video.snippet.description}
            </div>
        </div>
    );
};

export default VideoDetails;