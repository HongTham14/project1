import axios from "axios";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./css/tuitiontable.css"
import Vector from "./Vector.png"
import Rectangle from "./Rectangle.png"
import Money from "./money.png"
import Folder from "./foldercheck.png"



export default class Login extends Component{
    
    render(){
        return(
        <div className='Contaniners'>
            <div className="navbar">
                
                
                <div className="navbar-icon">
                <div className="navbar-logo">{<img src={Vector}/>}</div>
                    <ul className="navbar-icon-list">
                        <li className="navbar-icon-items">{<img src={Rectangle}/>}</li>
                        <li className="navbar-icon-items" id="Small-icon">{<img src={Money}/>}</li>
                        <li className="navbar-icon-items"id="Small-icon"> {<img src={Folder}/>}</li>
                    </ul>
                    
              
                </div>
                <div className="navbar-menu">
                <ul className="navbar-menu-list">
                    <li className="menu-list"> 
                    <h5>Danh sách học phí</h5>
                     <ul className="sub-menu">
                         <li className="sub-menu-list-items" id="sub-menu-hover">Danh sách lớp học</li>
                         <li className="sub-menu-list-items">Danh sách biểu phí</li>
                         <li className="sub-menu-list-items">Danh sách khoản thu</li>
                         <li className="sub-menu-list-items">Hình thức thu</li>
                         <li className="sub-menu-list-items">Danh sách chế độ miễn giảm</li>
                         <li className="sub-menu-list-items">Thu học phí</li>
                     </ul>
                    </li>
                       
                    <li className="menu-list" id="Luong"><h5>Quản lý lương</h5></li>
                    <li className="menu-list"><h5>Đề xuất và phê duyệt</h5></li>
                    
                    
                </ul>

                </div>
                
            </div>
           
      </div>
        );
    }
}