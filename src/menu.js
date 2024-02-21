import React from "react";
import "./index.css";

class Menu extends React.Component {
 // It is the front opening menu interface showing all the menuItems 
 // Also it will be hidden when showMenuItem is changed to false
         
    render(){
        let{menuItems,activeIndex,showMenuItems} = this.props
        return (
            <>
             <div>
                <div className="side-menu" style={{visibility:showMenuItems?"visible":"hidden"}}>
                <h2>iPod</h2>
                {menuItems.map((item,index) =>(
                    <p key={index} className={index=== activeIndex ? "active":" "}>{item}</p>
                ))}
                
                {/* <p className="active">Cover Flow</p>
                <p >Music</p>
                <p >Games</p>
                <p >Settings</p> */}
                </div>
                
             </div>
            
            </>
        )
            
        
    }
}

export default Menu
