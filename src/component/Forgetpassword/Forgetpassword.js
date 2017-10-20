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
						<li><span>手机号：</span></li>
						<li><span>验证码：</span></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Forgetpassword