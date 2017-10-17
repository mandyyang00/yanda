import React from 'react'
import './cantingye.css'
import {Link} from 'react-router-dom'
import {Icon,Button} from 'antd'
import axios from 'axios'
import Head from '../share/head'
import Biaoti from '../share/biaoti'




class Cantingye extends React.Component{
	constructor(){
		super()
		this.state={
			titles:'餐厅风采',
			biaoti:'首页'
		}
	}
	render(){
		return(
			<div className='cantingye'>
				<Head titles={this.state.titles}></Head>


				<div className='banner'>
					<div className='bannerlittle'>
						<div className='img'></div>
					</div>
				</div>

				
				<Biaoti biaoti={this.state.biaoti}></Biaoti>


				<div className='liebiao'>
					<div className='tupian'>
						<img src={require('../img/1.jpg')}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Cantingye