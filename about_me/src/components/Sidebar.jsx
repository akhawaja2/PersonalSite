import React, {Component} from 'react'
import "../App.css"
import {SidebarData} from "./SidebarData.jsx"


//https://codepen.io/robstinson/pen/bGwpNMV
function Sidebar () {
      return (
        <div className = "w-fit:content flex-none items-center h-full overflow-hidden text-gray-400 bg-gray-900 rounded ">
          <ul className = "items-left w-full px-3 ">
            {SidebarData.map((val, key) => {
              return (
              <li key={key} 
                className = "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                id = {window.location.pathname == val.Link ? "active" : ""} 
                onClick ={() => {window.location.pathname = val.link}}> {" "}
                <div id = "icon" className = "w-8 h-8 fill-current">{val.icon}</div> {" "}
                <div id = "title" className = "ml-2 text-sm font-medium">{val.title}</div> {" "}
              </li>);
            })} 
          </ul>
        </div>
         
          
      )
    
  }

export default Sidebar;