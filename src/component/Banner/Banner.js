import React from 'react'
import './banner.css'
import {Icon,Button,Tabs,Modal} from 'antd'
import {Link} from 'react-router-dom'




class Banner extends React.Component{
	constructor(){
		super()
		this.state={
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
			
				<div className='banner'>
					<div className='bannerlittle'>
						<div className='img'></div>
					</div>
					<Link to='/cantingye'>	
						<p style={{'background':'#009dd9','position':'fixed','left':'7%','top':'20px','color':'white','fontSize':'14px','borderRadius':'5px','width':'55px','boxShadow':'3px 3px 3px rgba(0,0,0,0.65)'}}>
						<Icon type="home" style={{'color':'white','fontSize':'14px'}}/>首页
						</p>
					</Link>

					<div onClick={this.showModal}>

						<Link to='/systemadministrator' >
							<p style={{'background':'#009dd9','position':'fixed','left':'7%','top':'44px','color':'white','fontSize':'14px','borderRadius':'5px','width':'55px','boxShadow':'3px 3px 3px rgba(0,0,0,0.65)'}} >管理员</p>
						</Link>

					</div>


					 <Modal
			          title="Basic Modal"
			          visible={this.state.visible}
			          onOk={this.handleOk}
			          onCancel={this.handleCancel}>
			          <p style={{'lineHeight':'30px'}}>
			          	请输入密码:
			          	<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'5px','textIndent':'10px'}}/>
			          </p>
			          <p style={{'textAlign':'center','marginTop':'20px'}}><Link to='/forgetpassword'>忘记密码</Link></p>
			        </Modal>
				</div>

		)
	}
}

export default Banner