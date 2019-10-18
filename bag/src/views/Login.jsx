import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.usernameRef = React.createRef();
    }


    handleInput(field, e) {
        this.setState({
            [field]: e.target.value
        })
        console.log(e.target.value)
    }
    componentDidMount() {
        this.usernameRef.current.focus()
    }
    handleClick() {
        let { username, password } = this.state;
        console.log(username, password)
        if (username.trim() === '') {
            alert('用户名不能为空');
        } else {
            axios({
                url: '/api/login',
                method: 'post',
                data: {
                    username,
                    password
                }
            }).then(res => {
                if (res.data.code === 200) {
                    localStorage.setItem('username', res.data.data.username);
                    this.props.history.push('/index');
                } else {
                    alert(res.data.message)
                }
            })
        }

    }
    render() {
        let { username, password } = this.state;
        return (
            <div>
                123
                <input type={username} value={username} ref={this.usernameRef} placeholder="请输入账号" onChange={this.handleInput.bind(this, 'username')} />
                <input type={password} value={password} placeholder="请输入密码" onChange={this.handleInput.bind(this, 'password')} />
                <button onClick={this.handleClick.bind(this)}>登录</button>
            </div>
        )
    }
}
export default Login