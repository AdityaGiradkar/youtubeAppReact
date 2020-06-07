import React from 'react';

class SearchBar extends React.Component{
    state = {term: ""};
onFormSubmit = (event) => {
    event.preventDefault();

    this.props.submit(this.state.term);
}

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className="ui icon input" style = {{width: '100%',}}>
                        <input className="prompt" type="text" value = {this.state.term} onChange={(e) => {this.setState({term: e.target.value})}} placeholder="Search..." />
                        <i className="search icon"></i>
                    </div>
                   
                </form>
            </div>
        );
    };
};

export default SearchBar;