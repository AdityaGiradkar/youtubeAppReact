import './VideoItem.css';
import React from 'react';

const videoItem = (props) => {
    //console.log(video);
    return(
        <div  onClick={() => props.onVideoSelect(props.video)} className="item video-item" id={props.video.id.videoId}>
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
            <div className="content">
                <div className="header"> {props.video.snippet.title} </div>
            </div>
        </div>
    );

};

export default videoItem;