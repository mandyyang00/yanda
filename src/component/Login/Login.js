import React from 'react'
import {Link} from 'react-router-dom'
import {Icon,Button} from 'antd'
import axios from 'axios'
import Head from '../share/head'
import './login.css'



class Login extends React.Component{
	constructor(){
		super()
		this.state={
			titles:'注册用户'
		}
	}
	render(){
		return(
			<div className='login'>
				<Head titles={this.state.titles}></Head>
				<div className='yanzheng'>
					<Icon type="phone" style={{'color':'#1E90FF','fontSize':'14px','marginLeft':'10px'}}/>
					<input type='text' className='text' placeholder='请输入手机号'/>
				</div>
				<div className='yanzheng'>
					<Icon type="exception" style={{'color':'#1E90FF','fontSize':'14px','marginLeft':'10px'}}/>
					<input type='text' className='password' placeholder='验证码'/>
				</div>
				<Button type="primary" style={{'marginTop':'30px'}}>登陆</Button>
				<p className='wenxintishi'><span></span> 温馨提示</p>
				<p className='tishi'>请使用手机号绑定注册燕大餐饮进行留言评价<br/>燕大餐饮不会泄露您的个人隐私</p>
			</div>

		)
	}
}

export default Login