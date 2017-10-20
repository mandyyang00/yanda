import React from 'react'
import './systemadministrator.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'


const TabPane = Tabs.TabPane;


class Systemadministrator extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'系统管理员',
			visible: false
		}
	}


	showModal = () => {
	    this.setState({
	      visible: true,
	    });
  	}
  	handleOk = (e) => {
	    console.log(e);
	    this.setState({
	      visible: false,
	    });
  	}
  	handleCancel = (e) => {
	    console.log(e);
	    this.setState({
	      visible: false,
	    });
  	}


	render(){
		return(
			<div className='systemadministrator'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>

				<div style={{'width':'94%','margin':'0 auto'}}>
					<Tabs defaultActiveKey="1">
					    <TabPane tab="总管理员设置" key="1">
					    	<table>
					    		<thead>
						    		<tr>
						    			<td style={{'width':'10%'}}>序号</td>
						    			<td style={{'width':'30%'}}>姓名</td>
						    			<td style={{'width':'50%'}}>手机号</td>
						    			<td style={{'width':'10%'}}>选中</td>
						    		</tr>
					    		</thead>
					    		<tbody>
						    		<tr>
						    			<td>1</td>
						    			<td><Link to='/chiefadministrator'>11111</Link></td>
						    			<td>111111111111</td>
						    			<td>
						    				<input type="checkbox"/>
						    			</td>
						    		</tr>
					    		</tbody>

					    	</table>
							
					    	<Icon type="plus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%'}} onClick={this.showModal}/>



					    	<Modal
					          title="添加总管理员"
					          visible={this.state.visible}
					          onOk={this.handleOk}
					          onCancel={this.handleCancel}>
					          <p style={{'lineHeight':'30px'}}>姓名：<input type="text" className="name" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'224px','textIndent':'15px'}}/></p>
					          <p style={{'lineHeight':'30px'}}>电话：<input type="text" className="tel" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'224px','textIndent':'15px'}}/></p>
					        </Modal>



					    	<Icon type="minus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%'}}/>
					    </TabPane>


					    <TabPane tab="其他系统设置" key="2">
					    	<ul style={{'width':'94%','textAlign':'left','margin':'0 auto','lineHeight':'30px'}}>
					    		<li>
					    			<span style={{'width':'60px','display':'inline-block'}}>网址：
					    			</span>
					    			<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'70%','textIndent':'10px'}}/>
					    		</li>
					    		<li>
					    			<span style={{'width':'60px','display':'inline-block'}}>发送方式：
					    			</span>
					    			<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'70%','textIndent':'10px'}}/>
					    		</li>
					    	</ul>

					    	<div style={{'width':'50%','display':'inline-block'}}>
								<Icon type="save" style={{'fontSize':'30px','marginTop':'40px','background':'rgba(0,0,0,0.65)','color':'white','borderRadius':'50%'}}/>
							</div>


					    </TabPane>


				  	</Tabs>
				</div>
			</div>
		)
	}
}


export default Systemadministrator