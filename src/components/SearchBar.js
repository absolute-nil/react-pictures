import React from 'react'

class SearchBar extends React.Component{
    state={text:''}

    onInputChange = (event) =>{
        this.setState({text:event.target.value})
    }

    onFromSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.text)
    }
    render(){
        return (
            <div className="ui segment" style={{"marginTop":"10px"}}>
                <form className="ui form" onSubmit={this.onFromSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.text} onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar
