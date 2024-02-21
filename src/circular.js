
import React, { Component } from "react";
import ZingTouch from "zingtouch";


// The circular wheel that consists of Menu button , fast forward , backward, play/pause and also the center
//button
class Circular extends Component {
  componentDidMount() {
    let{updateActiveIndex,handleCentreClick,handleMenuButton} = this.props;
    const touchArea = document.querySelector(".circular_menu");
    const myRegion = new ZingTouch.Region(touchArea);
    var changeInAngle = 0;
    myRegion.bind(touchArea, "rotate", (event) => {   // It is event handler to change the Active Index when wheel is rotated
        changeInAngle++;
        const distanceFromLast  = event.detail.distanceFromLast;
        if(Math.abs(distanceFromLast) >1.5){
            const  direction = distanceFromLast > 0 ? "clockwise":"counterclockwise";
            updateActiveIndex(direction);
        }
    });
    const innercircle = document.querySelector(".inner-circle");
    const myRegiontwo = new ZingTouch.Region(innercircle);
    myRegiontwo.bind(innercircle,"tap",(event)=>{     // It is the event handler to click the center button
        handleCentreClick();
    });
    const menuButton = document.querySelector("#menu-button");
    const myRegionthree = new ZingTouch.Region(menuButton);
    myRegionthree.bind(menuButton,"tap",(event)=>{    // It is the event handler to click the menu button
        console.log("its menu button")
        handleMenuButton();
    });
  }

  render() {
   
    return (
      <div className="circular_menu">
        <p id="menu-button">MENU</p>
        <img id="forward" src="https://cdn-icons-png.flaticon.com/128/31/31085.png"></img>
            <img id="backward" src="https://cdn-icons-png.flaticon.com/128/4402/4402628.png"></img>
           
          <img id="play_pause" src="https://cdn-icons-png.flaticon.com/128/5725/5725942.png"></img>
             
            <div className="inner-circle">
                  
            </div>

      </div>
    );
  }
}

export default Circular;

