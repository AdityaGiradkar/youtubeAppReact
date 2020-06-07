import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    

    const renderList = props.videoList.map((video) => {
        return(<VideoItem onVideoSelect = {props.onVideoSelect} video = {video}></VideoItem>);
    });

    return (<div className="ui relaxed divided list selection">{renderList}</div>);
    
}

export default VideoList;