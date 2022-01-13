import axios from "axios";
import React, {Component} from "react";


export default class Login extends Component{
    handleSubmit = e =>{
        e.preventDefault();
        const data ={
            user_name: this.userName,
            password: this.password,
            
        }
        axios.post('http://localhost:8000/', data).then(
            res => {
                localStorage.setItem('token');
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }
    render(){
        return(
        <div className='Contaniner'>
            <div className='logo'>
                {/* <img src={logo}/> */}
            </div>
            <div className="content_login">
                {/* <div className='col-left'>
                    

                </div> */}
                <div className='col-right'>
                    
                    <form onSubmit={this.handleSubmit} className="form-right">
                        <h3 className="login-title" >Đăng nhập</h3>
                        <div className="form-group ">
                            <label className="lable-login">Tên đăng nhập</label>
                            <input className="input-login" type="text"  placeholder=""
                            onChange={e => this.firstName = e.target.value }/>
                        </div>
                        
                        <div className="form-group ">
                            <label className="lable-login">Mật khẩu</label>
                            <input className="input-login" type="password"  placeholder=""
                            onChange={e => this.password = e.target.value }/>
                        </div>
                        
                        <button className="button-login"> <p className="P-Login">Đăng nhập</p></button>
                    </form>

                </div>
            </div>
      </div>
        );
    }
}