import React from 'react'
import './shopye.css'
import {Link} from 'react-router-dom'
import {Icon,Button} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'



class Shopye extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'大榕树餐厅'
		}
	}
	render(){
		return(
			<div className='shopye'>


				<Banner/>

				
				<Biaoti biaoti={this.state.biaoti}></Biaoti>

				<div>
					<Link to='/oneshop'>
					<div className='liebiao'>
						<div className='tupian'>
							<img src={require('../img/webwxgetmsgimg.jpg')}/>
						</div>
						<div className='content'>
							<div className='top'>
								<h3>三叔面皮</h3>
								<div>2333</div>
								<Icon type="like" style={{'float':'right','color':'red','lineHeight':'25px'}}> </Icon>
								
							</div>
							<div className='down'>出版社的好处是胆固醇过多VCD到处打工虚构随便吃水果的v船公司的v船公司的v成功</div>
						</div>
					</div>
					<div className='shadow'></div>
					</Link>
				</div>


				
				<div>
					<div className='liebiao'>
						<div className='tupian'>
							<img src={require('../img/webwxgetmsgimg.jpg')}/>
						</div>
						<div className='content'>
							<div className='top'>
								<h3>三叔面皮</h3>
								<div>2333</div>
								<Icon type="like" style={{'float':'right','color':'red','lineHeight':'25px'}}> </Icon>
								
							</div>
							<div className='down'>出版社的好处是胆固醇过多VCD到处打工虚构随便吃水果的v船公司的v船公司的v成功</div>
						</div>
					</div>
					<div className='shadow'></div>
				</div>


				


			</div>
		)
	}
}

export default Shopye