import React from "react"
import "./index.css"
import Sound from "./audio.mp3"

// This is the interface that will open when Music is opened
class Music extends React.Component{
  
   play =()=>{
    new Audio(Sound).play()
   }
    
    render(){
        return(
            <>
             <div className="music-container">
                <img src="https://wallpapercave.com/wp/wp7717911.jpg" ></img>
                <div className="song-details">
                <h2>Tum Hi Ho</h2>
                <p>Arijit Singh</p>
                </div>
             </div>
             
            </>
        )
    }
}

export default Music