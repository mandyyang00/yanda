import React from 'react'
import './shopcomments.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'

const TabPane = Tabs.TabPane;



class Shopcomments extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'所有评论',
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
			<div className='shopcomments'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>
				<div className='allpinglun'>
					<div style={{'borderBottom': '1px dashed #aaaaaa'}}>
						<h4>152动员软件6789
							<span style={{'float':'right','width':'30px','lineHeight':'20px','fontSize':'12px','color':'#009dd9'}} onClick={this.showModal}>删除
							</span>
						</h4>
						<div className='pingluncontent'>所哟普评论内容就是打不过粉红色灯光v发货的v不杀光发货速度v不会受到广泛v成都v合适的v</div>
						<img className='pinglunpicture' src={require('../img/webwxgetmsgimg.jpg')}></img>
						<img className='pinglunpicture' src={require('../img/webwxgetmsgimg.jpg')}></img>
					</div>

					<div style={{'borderBottom': '1px dashed #aaaaaa'}}>
						<h4>152动员软件6789
							<span style={{'float':'right','width':'30px','lineHeight':'20px','fontSize':'12px','color':'#009dd9'}} onClick={this.showModal}>删除
							</span>

							

						</h4>
						<div className='pingluncontent'>所哟普评论内容就是打不过粉红色灯光v发货的v不杀光发货速度v不会受到广泛v成都v合适的v</div>
						
					</div>


					<Modal
					          title="是否删除"
					          visible={this.state.visible}
					          onOk={this.handleOk}
					          onCancel={this.handleCancel}>
					          
					        </Modal>
				</div>
			</div>
		)
	}
}


export default Shopcomments