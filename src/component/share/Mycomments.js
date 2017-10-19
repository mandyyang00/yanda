import React from 'react'
import './mycomments.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'

const TabPane = Tabs.TabPane;



class Mycomments extends React.Component{
	render(){
		return(
			<div className='mycomments'>
				<p>我的评论</p>
			</div>
		)
	}
}


export default Mycomments