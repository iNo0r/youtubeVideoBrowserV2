import React from 'react'

const VideoDetail = ({video}) => {
  if(!video){
    return <div> loading </div>

  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <h5>{video.snippet.title}</h5>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail ;