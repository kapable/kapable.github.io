import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './Users.css';

// const history = require("history").createBrowserHistory // {forceRefresh:true}

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            Password: "",
            server_origin: ""
        }
        this.onEmailHandler = this.onEmailHandler.bind(this);
        this.onPasswordHandler = this.onPasswordHandler.bind(this);
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

    onPasswordHandler(e) {
        e.preventDefault();
        this.setState({
            Password:e.target.value
        })
    }

    onSubmitHandler(e){
        e.preventDefault();

        let body = {
            email: this.state.Email,
            password: this.state.Password
        }
        const history = this.props.history
        console.log(this.state.server_origin + '/api/users/login');
        axios.post(this.state.server_origin + '/api/users/login', body)
        .then(response => {
            if(response.data.loginSuccess) {
                history.push('/')
                window.location.reload();
            } else {
                alert("잘못된 메일 또는 비밀번호입니다.")
            }
        })
    }

    logoutHandler = (e) => {
        e.preventDefault();
        axios.get(this.state.server_origin + '/api/users/logout').then(response => {
          if (response.status === 200) {
            this.props.history.push("/login");
            window.location.reload();
          } else {
            alert('Log Out Failed')
          }
        });
      };

    render() {
        return (
            <Fragment>
                <div className="login-submit-div">
                <form
                    className="login-submit-form"
                    onSubmit={this.onSubmitHandler}
                >
                    <label>Email</label>
                    <input
                        type="text"
                        value={this.state.Email}
                        onChange={this.onEmailHandler}
                        placeholder={"email@ktest.com"}
                        className="login-email-form"
                        required/>
                    <label>Password</label>
                    <input
                        type="password"
                        value={this.state.Password}
                        onChange={this.onPasswordHandler}
                        placeholder={"password"}
                        className="login-password-form"
                        required/>
                    <br />
                    <button type="submit" className="login-submit-btn">
                        로그인
                    </button>
                </form>
                </div>
                <div className="login-to-register-div">
                    <h3 >
                    ▼케이테스트 회원가입▼
                    </h3>
                    <a
                        href="/register"
                        className="login-to-register-link">
                        <p>이메일로 간편가입</p>
                    </a>
                </div>
                <button onClick={this.logoutHandler}>
                    로그아웃
                </button>
            </Fragment>
        )
    }
}

export default withRouter(LoginPage)