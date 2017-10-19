import React from 'react'
import './controlreataurant.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'

const TabPane = Tabs.TabPane;



class Controlreataurant extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'档口管理',
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
			<div className='controlreataurant'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>
				<div style={{'width':'90%','margin':'0 auto'}}>
					<table>
					    <thead>
						    <tr>
						    	<td style={{'width':'10%'}}>序号</td>
						    	<td style={{'width':'50%'}}>档口名称</td>
						    	<td style={{'width':'20%'}}>查看</td>
						    	<td style={{'width':'23%'}}>选中</td>
						    	
						    </tr>
					    </thead>
					    <tbody>
						    <tr>
						    	<td>1</td>
						    	<td>111111111111</td>
						    	<td>
						    		<Link to='/onereataurant'><Icon type="idcard" style={{'color':'#009dd9','fontSize':'16px'}}/>
						    		</Link>
						    	</td>
						    	<td>
						    		<input type='checkbox'/>
						    	</td>
						    </tr>

						    
					    </tbody>

					</table>

					<Icon type="plus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%'}} onClick={this.showModal}/>
					<Modal
					          title="新增档口"
					          visible={this.state.visible}
					          onOk={this.handleOk}
					          onCancel={this.handleCancel}>
					          <p style={{'lineHeight':'30px'}}>档口名：
					          	<input type="text" className="name" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'210px','textIndent':'15px'}}/></p>
					          <p style={{'lineHeight':'30px'}}>图片：
					          	<input type="text" className="tel" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'224px','textIndent':'15px'}}/></p>
					          <p style={{'lineHeight':'30px'}}>介绍：
					          	<div className="tel" style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'260px','textIndent':'15px'}} contentEditable='true'> 
						         </div>
						       </p>
					        </Modal>
					<Icon type="minus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%'}}/>
				</div>
			</div>
		)
	}
}

export default Controlreataurant