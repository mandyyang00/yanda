import React from 'react'
import './controlbranchadministrator.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'

const TabPane = Tabs.TabPane;



class Controlbranchadministrator extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'分管理员设置'
		}
	}
	render(){
		return(
			<div className='Controlbranchadministrator'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>
				<ul style={{'width':'90%','textAlign':'left','margin':'0 auto','lineHeight':'30px'}}>
					<li>
						<span style={{'width':'60px','display':'inline-block',}}>姓名：</span>
						<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'70%','textIndent':'10px'}}/>
					</li>
					<li>
						<span style={{'width':'60px','display':'inline-block'}}>电话：</span>
						<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'70%','textIndent':'10px'}}/>
					</li>
					<li>
						<span style={{'width':'60px','display':'inline-block','float':'left'}}>负责餐厅：</span>
						<div style={{'float':'left','width':'68%','marginRight':'11%'}}>

							<div>
								<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'90%','textIndent':'10px'}}/>
								<Icon type="close" style={{'fontSize':'14px','paddingTop':'10px','color':'red'}}/>
							</div>
							<div>
								<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'90%','textIndent':'10px'}}/>
								<Icon type="close" style={{'fontSize':'14px','paddingTop':'10px','color':'red'}}/>
							</div>
							<div>
								<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'90%','textIndent':'10px'}}/>
								<Icon type="close" style={{'fontSize':'14px','paddingTop':'10px','color':'red'}}/>
							</div>

						</div>


					</li>
				</ul>

				<Icon type="plus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%'}}/>

				<div style={{'width':'50%','display':'inline-block'}}>
					<Icon type="save" style={{'fontSize':'30px','marginTop':'40px','background':'rgba(0,0,0,0.65)','color':'white','borderRadius':'50%'}}/>
				</div>
			</div>
		)
	}
}

export default Controlbranchadministrator