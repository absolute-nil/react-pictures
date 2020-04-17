import React from 'react'
import axios from '../apis/unsplash'
import SearchBar from "./SearchBar"
import ImageList from './ImageList'

class App extends React.Component {

    state = {images:[]}

    handleImageSearch= async (term)=>{
        const response = await axios.get('/search/photos',{
            params: {query: term},
        })
        this.setState({images:response.data.results})
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.handleImageSearch}/>
                <ImageList images={this.state.images} />
            </div>
        )
    }

}

export default App;