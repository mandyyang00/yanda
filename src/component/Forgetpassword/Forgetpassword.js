import React from 'react'
import './forgetpassword.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'
import Mycomments from '../share/Mycomments'



class Forgetpassword extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'修改密码'
		}
	}
	render(){
		return(
			<div className='forgetpassword'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>
				<div>
					<ul>
						<li>
							<Icon type="phone" style={{'color':'#1E90FF','fontSize':'14px'}}/>
							<input type='input'  placeholder='请输入手机号' className='tel'/>
						</li>
						<li>
							<Icon type="exception" style={{'color':'#1E90FF','fontSize':'14px'}}/>
							<input type='text' style={{'width': '41%','line-height': '35px','border':'0px','outline':' 0','margin-left': '10px'}} placeholder='验证码' className='password'/>
							<span type="primary" style={{'float':'right','lineHeight':'35px','color':'#1E90FF'}}>获取验证码</span>
						</li>
						
					</ul>

					<Button type="primary" style={{'marginTop':'30px'}}>提交验证码</Button>

					<ul style={{'marginTop':'20px'}}>
						<li>
							<Icon type="edit" style={{'color':'#1E90FF','fontSize':'14px'}}/>
							<input type='input'  placeholder='新密码（6位纯数字）' className='newpassword'/>
						</li>
						<li>
							<Icon type="reload" style={{'color':'#1E90FF','fontSize':'14px'}}/>
							<input type='text'  placeholder='确认新密码' className='resetpassword'/>
							
						</li>
						
					</ul>
					<Button type="primary" style={{'marginTop':'30px'}}>提交新密码</Button>
				</div>

			</div>
		)
	}
}

export default Forgetpassword