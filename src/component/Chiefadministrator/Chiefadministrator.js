import React from 'react'
import './chiefadministrator.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'

const TabPane = Tabs.TabPane;



class Chiefadministrator extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'总管理员',
			
			visible1: false,
			visible2: false
		}
	}



	showModal1 = () => {
	    this.setState({
	      visible1: true,
	    });
  	}
  	handleOk1 = (e) => {
	    console.log(e);
	    this.setState({
	      visible1: false,
	    });
  	}
  	handleCancel1 = (e) => {
	    console.log(e);
	    this.setState({
	      visible1: false,
	    });
  	}


  	showModal2 = () => {
	    this.setState({
	      visible2: true,
	    });
  	}
  	handleOk2= (e) => {
	    console.log(e);
	    this.setState({
	      visible2: false,
	    });
  	}
  	handleCancel2 = (e) => {
	    console.log(e);
	    this.setState({
	      visible2: false,
	    });
  	}


  
	render(){
		return(
			<div className='chiefadministrator'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>

				<div style={{'width':'94%','margin':'0 auto'}}>
					<Tabs defaultActiveKey="1" >


					    <TabPane tab="分管理员" key="1">
					    	<table>
					    		<thead>
						    		<tr>
						    			<td style={{'width':'10%'}}>序号</td>
						    			<td style={{'width':'24%'}}>姓名</td>
						    			<td style={{'width':'40%'}}>手机号</td>
						    			<td style={{'width':'13%'}}>查看</td>
						    			<td style={{'width':'13%'}}>选中</td>
						    		</tr>
					    		</thead>
					    		<tbody>
						    		<tr>
						    			<td>1</td>
						    			<td>张晶晶</td>
						    			<td>111111111111</td>
						    			<td>
						    				<Link to='/controlbranchadministrator'><Icon type="idcard" style={{'color':'#009dd9','fontSize':'16px'}}/>
						    				</Link>
						    			</td>
						    			<td>
						    				<input type="checkbox"/>
						    			</td>
						    		</tr>
					    		</tbody>

					    	</table>

					    	<Link to='/controlbranchadministrator'><Icon type="plus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%','color':'rgba(0,0,0,0.65)'}} />
					    	</Link>
					    	
							<Icon type="minus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%'}}/>
						</TabPane>


					    <TabPane tab="餐厅管理" key="2">

					    	<table>
					    		<thead>
						    		<tr>
						    			<td style={{'width':'10%'}}>序号</td>
						    			<td style={{'width':'80%'}}>餐厅名</td>
						    			<td style={{'width':'10%'}}>选中</td>
						    		</tr>
					    		</thead>
					    		<tbody>
						    		<tr>
						    			<td>1</td>
						    			<td>111111111111</td>
						    			<td>
						    				<input type="checkbox"/>
						    			</td>
						    		</tr>
					    		</tbody>

					    	</table>

					    	<Icon type="plus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'33.3333%'}} onClick={this.showModal1}/>


					    	<Modal
					          title="餐厅资料"
					          visible={this.state.visible1}
					          onOk={this.handleOk1}
					          onCancel={this.handleCancel1}>
					          <p style={{'lineHeight':'30px'}}>餐厅名：
					          	<input type="text" className="name" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'210px','textIndent':'15px'}}/></p>
					          <p style={{'lineHeight':'30px'}}>图片：
					          	<input type="text" className="tel" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'224px','textIndent':'15px'}}/></p>
					          <div style={{'lineHeight':'30px'}}>介绍：
						          <div className="tel" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'260px','textIndent':'15px'}} contentEditable='true'> 
						          </div>
					          </div>
					        </Modal>

					        <div style={{'width':'33.3333%','display':'inline-block'}}>
					        	<Icon type="edit" style={{'fontSize':'30px','marginTop':'40px','background':'rgba(0,0,0,0.65)','color':'white','borderRadius':'50%'}} onClick={this.showModal2}/>

					        </div>

					        <Modal
					          title="餐厅资料"
					          visible={this.state.visible2}
					          onOk={this.handleOk2}
					          onCancel={this.handleCancel2}>
					          <p style={{'lineHeight':'30px'}}>餐厅名：
					          <input type="text" className="name" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'210px','textIndent':'15px'}}/></p>
					          <p style={{'lineHeight':'30px'}}>图片：
					          <input type="text" className="tel" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'224px','textIndent':'15px'}}/></p>
					          <div style={{'lineHeight':'30px'}}>介绍：
					          	<div className="tel" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'260px','textIndent':'15px'}} contentEditable='true'> 
						         </div>
					          </div>
					        </Modal>


					    	<Icon type="minus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'33.3333%'}}/>


						</TabPane>


					</Tabs>
				</div>

			</div>
		)
	}
}

export default Chiefadministrator