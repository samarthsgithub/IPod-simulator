import React from "react"
import "./index.css"
import Screen from "./screen.js"
import Circular from "./circular.js"


class App extends React.Component {
  
 constructor(){
  super();
  this.state = {
    activeIndex:0, // to check which menu item needs to be blue or selected
    menuItems:["Cover Flow","Music","Games","Settings"], // state items to be rendered on menu 
    showMenuItems:true,  // to check if menu items need to be shown or not
    currentMenu:0, // index for checking currentMenu to be rendered on screen
    changeInAngle:0
    
  };
 }
 //function to update activeMenuIndex on rotating wheel
  updateActiveIndex = (direction)=>{
    let{activeIndex} = this.state;
    if(direction==="clockwise"){
      activeIndex = (activeIndex+1) % 4;
    }else if(direction==="counterclockwise"){
       activeIndex = (activeIndex-1 +4)%4;
    }
    this.setState({
      activeIndex
    })
  }
  // function to handle the centre click button
  handleCentreClick = ()=>{
    let{currentMenu,activeIndex,showMenuItems} = this.state;
       if(activeIndex===0){
        currentMenu = 1;
       }else if(activeIndex===1){
         currentMenu = 2;
       }else if(activeIndex===2){
        currentMenu = 3;
       }else if(activeIndex===3){
        currentMenu = 4;
       }
       showMenuItems=!showMenuItems
       this.setState({
           currentMenu,
           showMenuItems
       })
       console.log(showMenuItems)
       
  }
  // to handle the menu button for going back to menu
  handleMenuButton= ()=>{
          let{currentMenu,showMenuItems}  =this.state;
          currentMenu = 0;
          showMenuItems= true;
          this.setState({
            currentMenu,
            showMenuItems
          })
          console.log(showMenuItems);
  }
  

  render(){

    return(
      <>
        <h1>IPOD APP</h1>
      
        <div className="IPOD-Container">
         
           <Screen menuItems={this.state.menuItems} activeIndex={this.state.activeIndex}
                   showMenuItems={this.state.showMenuItems} onclickshowitems={this.state.onclickshowitems}
                   currentMenu={this.state.currentMenu}
           ></Screen>
           <Circular updateActiveIndex = {this.updateActiveIndex}
                     handleCentreClick={this.handleCentreClick}
                     handleMenuButton={this.handleMenuButton}
                     changeInAngle={this.state.changeInAngle}
           ></Circular>
        </div>
      </>
    )
  }

}

export default App;
