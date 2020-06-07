import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetails from './VIdeoDetails';

class App extends React.Component{
    state = {videos: [], SelectedVideo: null};
    onSearchSubmit = async (term) => {
        //console.log(term);
        const response = await Youtube.get('/search', {
            params: {
                q: term,
            }
        })
        this.setState({ videos: response.data.items })
        console.log( response.data.items);
    }

    onVideoSelect  = (video) => {
        //console.log(video);
        this.setState({SelectedVideo: video});
        //console.log(this.state.SelectedVideo);
    };

    render(){

        return (
            <div className="ui container">
                <SearchBar submit = {this.onSearchSubmit}></SearchBar>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetails video={this.state.SelectedVideo}></VideoDetails>
                        </div>
                        <div className="six wide column">
                            <VideoList onVideoSelect = {this.onVideoSelect} videoList = {this.state.videos}></VideoList>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;