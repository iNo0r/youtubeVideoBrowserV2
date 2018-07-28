import _ from 'lodash';
import React from "react";
import ReactDOM from "react-dom";
import YTsearch from 'youtube-api-search';


import './styles.css'
import VideoDetail from './component/video_detail'
import VideoList from './component/video_list'
import SearchBar from './component/search_bar'
const API_KEY =   'AIzaSyAgdRKPEiYXt5JJ9EsU6URB90BTE9DXtXg';



class App extends React.Component {
  constructor(props){
    super(props)

  this.state= {
    videos : [],
    selectedVideo :null
  }
  this.videoSearch('what the hell')
  }
  videoSearch(term){

    YTsearch({ key: API_KEY, term: term },  (videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      })

    })
    
  }

 
  render(){

    const videoSearch = _.debounce((term) => this.videoSearch(term),1000)
    return(
      <div className='App'>


        <SearchBar
        onSearchTermChange={term => videoSearch(term)} />


        <VideoDetail 
        
        video={this.state.selectedVideo} />



        <VideoList 

          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        videos={this.state.videos} />




      </div>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
