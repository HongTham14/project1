import React, {Component} from "react";
import logo from "./Style/images/logo123.png"
import "./Style/css/forgotpassword.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as freeSolidSvgIcons from "@fortawesome/free-solid-svg-icons";
 
export default class ForgotPassword extends Component{
    render(){
        return(
        <div className='Contaniner'>
            <div className='logo'>
                { <img src={logo}/> }
            </div>
            <div className="content_login">
                {/* <div className='col-left'>
                    
                </div> */}
                <div className='col-right'>
                    
                    <form onSubmit={this.handleSubmit} className="form-right">
                        <h3 className="login-title" >Cấp lại mật khẩu</h3>
                        <div className="form-group ">
                            <label className="lable-login">Tên đăng nhập</label>
                            <input className="input-login" type="text"  placeholder=""
                            onChange={e => this.userName = e.target.value }/>
                        </div>
                        
                        <div className="form-group ">
                            <label className="lable-login">Mật khẩu</label>
                            <input className="input-login" type="password"  placeholder=""
                            onChange={e => this.password = e.target.value }/>
                        </div>
                        <div className="fogot-password">
                            <div>
                                <FontAwesomeIcon icon={['fas', 'chevron-left']}></FontAwesomeIcon>
                            </div>
                        <a href="" className="fogot-password-link">Quay lại trang chủ</a>
                        </div>
                        
                        
                        <button className="button-login"> <p className="P-Login">Cấp lại mật khẩu</p></button>
                    </form>

                </div>
            </div>
      </div>
        );
    }
}