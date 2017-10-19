import React from 'react'
import './onereataurant.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs,Modal} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'

const TabPane = Tabs.TabPane;





class Addbestdish extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'菜品'
		}
	}
	render(){
		return(
			<div className='addbestdish'>
				<Banner/>
				<Biaoti biaoti={this.state.biaoti}/>
				<ul style={{'width':'90%','textAlign':'left','margin':'0 auto','lineHeight':'30px'}}>
					<li>
						<span style={{'width':'60px','display':'inline-block',}}>菜品名：</span>
						<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'70%','textIndent':'10px'}}/>
					</li>
					<li>
						<span style={{'width':'60px','display':'inline-block'}}>图片：</span>
						<input type='text' style={{'border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','width':'70%','textIndent':'10px'}}/>
					</li>
					<li>
						<span style={{'width':'60px','display':'inline-block','float':'left'}}>简介：</span>
						<div style={{'float':'left','width':'70%','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} contentEditable='true'>

						</div>


					</li>
				</ul>

				<Icon type="plus-circle" style={{'fontSize':'30px','marginTop':'40px','width':'50%'}}/>

				<div style={{'width':'50%','display':'inline-block','marginTop':'40px'}}>
					<Icon type="save" style={{'fontSize':'30px','background':'rgba(0,0,0,0.65)','color':'white','borderRadius':'50%'}}/>
				</div>
			</div>
		)
	}
}

export default Addbestdish