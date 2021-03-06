import React from 'react'
import './mycomments.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'

const TabPane = Tabs.TabPane;



class Mycomments extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'我的评论'
		}
	}
	render(){
		return(
			<div className='mycomments'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>
				<div className='allpinglun'>
					<div style={{'borderBottom': '1px dashed #aaaaaa'}}>
						<h4>152动员软件6789</h4>
						<div className='pingluncontent'>所哟普评论内容就是打不过粉红色灯光v发货的v不杀光发货速度v不会受到广泛v成都v合适的v</div>
						<img className='pinglunpicture' src={require('../img/webwxgetmsgimg.jpg')}></img>
						<img className='pinglunpicture' src={require('../img/webwxgetmsgimg.jpg')}></img>
					</div>

					<div style={{'borderBottom': '1px dashed #aaaaaa'}}>
						<h4>152动员软件6789</h4>
						<div className='pingluncontent'>所哟普评论内容就是打不过粉红色灯光v发货的v不杀光发货速度v不会受到广泛v成都v合适的v</div>
						
					</div>
				</div>
			</div>
		)
	}
}


export default Mycomments