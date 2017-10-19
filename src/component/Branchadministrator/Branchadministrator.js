import React from 'react'
import './branchadministrator.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'

const TabPane = Tabs.TabPane;


class Branchadministrator extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'分管理员'
		}
	}
	render(){
		return(
			<div className='branchadministrator'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>
				<div style={{'width':'90%','margin':'0 auto'}}>
					<table>
					    <thead>
						    <tr>
						    	<td style={{'width':'20%'}}>序号</td>
						    	<td style={{'width':'50%'}}>餐厅名称</td>
						    	<td style={{'width':'30%'}}>编辑</td>
						    	
						    </tr>
					    </thead>
					    <tbody>
						    <tr>
						    	<td>1</td>
						    	<td>111111111111</td>
						    	<td>
						    		<Link to='/controlreataurant'><Icon type="idcard" style={{'color':'#009dd9','fontSize':'16px'}}/>
						    		</Link>
						    	</td>
						    </tr>

						    <tr>
						    	<td>1</td>
						    	<td>111111111111</td>
						    	<td>
						    		<Icon type="idcard" style={{'color':'#009dd9','fontSize':'16px'}}/>
						    	</td>
						    </tr>
					    </tbody>

					</table>
				</div>
			</div>
		)
	}
}

export default Branchadministrator