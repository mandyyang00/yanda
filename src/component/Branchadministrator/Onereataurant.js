import React from 'react'
import './onereataurant.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'

const TabPane = Tabs.TabPane;




class Onereataurant extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'档口名称'
		}
	}
	render(){
		return(
			<div className='onereataurant'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>
				<div style={{'width':'94%','margin':'0 auto'}}>
					<Tabs defaultActiveKey="1">
					    <TabPane tab="精品菜" key="1">
					    	<table>
					    		<thead>
						    		<tr>
						    			<td style={{'width':'10%'}}>序号</td>
						    			<td style={{'width':'40%'}}>菜品</td>
						    			<td style={{'width':'20%'}}>查看</td>
						    			<td style={{'width':'20%'}}>选中</td>
						    		</tr>
					    		</thead>
					    		<tbody>
						    		<tr>
						    			<td>1</td>
						    			
						    			<td>111111111111</td>
						    			<td>
						    				<Link to='/Addbestdish'><Icon type="idcard" style={{'color':'#009dd9','fontSize':'16px'}}/>
						    				</Link>
						    			</td>
						    			<td>
						    				<input type="checkbox"/>
						    			</td>
						    		</tr>
					    		</tbody>

					    	</table>

					    	<Link to='/Addbestdish'><Icon type="plus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%','color':'rgba(0,0,0,0.65)'}} />
					    	</Link>

					    	<Icon type="minus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%'}}/>
					    </TabPane>
					    <TabPane tab="其他菜品" key="2">
					    	<div>
					    	<input type="file" accept='image' capture='camera' className='addpicture'/>
					    	</div>
					    	<div style={{'width':'200px','height':'100px','border':'1px solid #aaaaaa','marginTop':'20px'}}></div>
					    </TabPane>
				  	</Tabs>
				</div>
			</div>
		)
	}
}

export default Onereataurant