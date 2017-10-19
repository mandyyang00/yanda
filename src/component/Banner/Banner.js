import React from 'react'
import './banner.css'
import {Icon,Button,Tabs,Modal} from 'antd'
import {Link} from 'react-router-dom'




class Banner extends React.Component{

	render(){
		return(
			
				<div className='banner'>
					<div className='bannerlittle'>
						<div className='img'></div>
					</div>
					<Link to='/cantingye'>	
						<p style={{'background':'#009dd9','position':'fixed','left':'7%','top':'20px','color':'white','fontSize':'14px','borderRadius':'5px','width':'55px','boxShadow':'3px 3px 3px rgba(0,0,0,0.65)'}}>
						<Icon type="home" style={{'color':'white','fontSize':'14px'}}/>首页
						</p>
					</Link>
				</div>

		)
	}
}

export default Banner