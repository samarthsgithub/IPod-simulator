import React from "react"
import Menu from "./menu.js"
import "./index.css"
import CoverFlow from "./coverflow.js"
import Games from "./games.js"
import Music from "./Music.js"
import Settings from "./Settings.js"


class Screen extends React.Component {

         // It is the ultimate screen , everything will render here on the basis of currentMenu that can be changed 
    render(){
        let{menuItems,activeIndex,showMenuItems,currentMenu} = this.props
        return (
            <>
             <div className="screen">
                { currentMenu===0 ?<Menu menuItems={menuItems} activeIndex={activeIndex} showMenuItems={showMenuItems}
                ></Menu>:null}
                {/* <Menu menuItems={menuItems} activeIndex={activeIndex} showMenuItems={showMenuItems}
                ></Menu> */}
                {currentMenu===1?<CoverFlow></CoverFlow>:null}
                {currentMenu===2?<Music></Music>:null}
                {currentMenu===3?<Games></Games>:null}
                {currentMenu===4?<Settings></Settings>:null}
              { currentMenu===0? <div className="wallpaper"></div>:null}
                
             </div>
            
            
            </>
        )
            
        
    }
}

export default Screen