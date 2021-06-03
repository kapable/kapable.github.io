import axios from 'axios';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './Users.css';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            Name: "",
            Password: "",
            ConfirmPassword: "",
            server_origin: ""
        }
        this.onEmailHandler = this.onEmailHandler.bind(this);
        this.onNameHandler = this.onNameHandler.bind(this);
        this.onPasswordHandler = this.onPasswordHandler.bind(this);
        this.onConfirmPasswordHandler = this.onConfirmPasswordHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        this.setState({
            server_origin: window.location.origin.replace(window.location.port, "5000")
        })
    }

    onEmailHandler(e) {
        e.preventDefault();
        this.setState({
            Email:e.target.value
        })
    }

    onNameHandler(e) {
        e.preventDefault();
        this.setState({
            Name:e.target.value
        })
    }

    onPasswordHandler(e) {
        e.preventDefault();
        this.setState({
            Password:e.target.value
        })
    }

    onConfirmPasswordHandler(e) {
        e.preventDefault();
        this.setState({
            ConfirmPassword:e.target.value
        })
    }

    onSubmitHandler(e){
        e.preventDefault();

        if(this.state.Password.length < 5) {
            return alert("비밀번호의 길이는 다섯 글자 이상이어야 합니다.")
        }

        if(this.state.Password !== this.state.ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다.")
        }

        let body = {
            email: this.state.Email,
            name: this.state.Name,
            password: this.state.Password
        }
        const history = this.props.history
        
        axios.post(this.state.server_origin + '/api/users/register', body)
        .then(response => {
            if(response.data.success) {
                history.push('/login')
                
            } else {
                console.log(response);
                alert("회원 가입에 실패했습니다.")
            }
        })
    }

    render() {
        return (
            <div className="register-submit-div" style={{
                
            }}>
               <form
                className="register-submit-form"
                onSubmit={this.onSubmitHandler}
               >
                   <label>이메일</label>
                   <input
                    type="email"
                    value={this.state.Email}
                    onChange={this.onEmailHandler}
                    className="register-email-form"
                    placeholder="이메일을 입력하세요."
                    required/>
                   <label>닉네임</label>
                   <input
                    type="text"
                    value={this.state.Name}
                    onChange={this.onNameHandler}
                    className="register-nickname-form"
                    placeholder="닉네임을 입력하세요."
                    required/>
                   <label>비밀번호</label>
                   <input
                    type="password"
                    value={this.state.Password}
                    onChange={this.onPasswordHandler}
                    className="register-password-form"
                    placeholder="비밀번호를 입력하세요."
                    required/>
                   <label>비밀번호 확인</label>
                   <input
                    type="password"
                    value={this.state.ConfirmPassword}
                    onChange={this.onConfirmPasswordHandler}
                    className="register-passwordConfirm-form"
                    placeholder="확인을 위해 비밀번호를 한번 더 입력하세요."
                    required/>
                   <br />
                   <button type="submit" className="register-submit-btn">
                       회원가입
                   </button>
               </form>
            </div>
        )
    }
}

export default withRouter(RegisterPage)