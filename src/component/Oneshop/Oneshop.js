import React from 'react'
import './oneshop.css'
import {Link} from 'react-router-dom'
import {Icon,Button,Tabs} from 'antd'
import axios from 'axios'
import Biaoti from '../share/biaoti'
import Banner from '../Banner/Banner'
import Mycomments from '../share/Mycomments'


const TabPane = Tabs.TabPane;



class Shopye extends React.Component{
	constructor(){
		super()
		this.state={
			biaoti:'三叔面皮皮皮皮皮皮',
			key:'1'
		}
	}


	

	shangchuan(){
	let value=document.querySelector('.addpicture').value
	console.log(value)
	}


	render(){
		return(
			<div className='oneshop'>

				<Banner/>

				<Biaoti biaoti={this.state.biaoti}></Biaoti>

				<div>

					<Tabs defaultActiveKey="1" style={{'textAlign':'left','width':'96%','margin':'0 auto','paddingBottom':'5px'}}>
					    <TabPane tab="精品菜" key="1">


					    	<div>
								<Link to='/bestdish'>
								<div className='liebiao'>
									<div className='tupian'>
										<img src={require('../img/webwxgetmsgimg.jpg')}/>
									</div>
									<div className='content'>
										<div className='top'>
											<h3>三叔面皮</h3>
											<div>2333</div>
											<Icon type="like" style={{'float':'right','color':'red','lineHeight':'25px'}}> </Icon>
											
										</div>
										<div className='down'>出版社的好处是胆固醇过多VCD到处打工虚构随便吃水果的v船公司的v船公司的v成功</div>
									</div>
								</div>
								<div className='shadow'></div>
								</Link>
							</div>


							<div>
								<div className='liebiao'>
									<div className='tupian'>
										<img src={require('../img/webwxgetmsgimg.jpg')}/>
									</div>
									<div className='content'>
										<div className='top'>
											<h3>三叔面皮</h3>
											<div>2333</div>
											<Icon type="like" style={{'float':'right','color':'red','lineHeight':'25px'}}> </Icon>
											
										</div>
										<div className='down'>出版社的好处是胆固醇过多VCD到处打工虚构随便吃水果的v船公司的v船公司的v成功</div>
									</div>
								</div>
								<div className='shadow'></div>
							</div>



					    </TabPane>
					    <TabPane tab="评论" key="2">
					    	<div className='quanbucaipin'>
								<img src={require('../img/webwxgetmsgimg.jpg')}/>
							</div>
							<div className='addpinglun'>
								<textarea name="" id="" cols="30" rows="10" placeholder='发表评论'></textarea>
								<input type="file" accept='image' capture='camera' className='addpicture'/>
								<Button type="primary" style={{'float':'right','marginRight':'10px','marginTop':'5px'}} onClick={this.shangchuan.bind(this)} className="tijiao">提交</Button>
							</div>
							<div className='allpinglun'>
								<h2>所有评论

								<Link to='/mycomments'>
									<span style={{'float':'right','width':'60px','lineHeight':'20px','fontSize':'12px','color':'#009dd9'}}>我的评论
									</span>
								</Link>
								</h2>

								<div style={{'borderBottom': '1px dashed #aaaaaa'}}>
									<h4>152动员软件6789</h4>
									<div className='pingluncontent'>所哟普评论内容就是打不过粉红色灯光v发货的v不杀光发货速度v不会受到广泛v成都v合适的v</div>
									<img className='pinglunpicture' src={require('../img/webwxgetmsgimg.jpg')}></img>
									<img className='pinglunpicture' src={require('../img/webwxgetmsgimg.jpg')}></img>
								</div>

								<div style={{'borderBottom': '1px dashed #aaaaaa'}}>
									<h4>152动员软件6789</h4>
									<div className='pingluncontent'>所哟普评论内容fgfdgfdg fdsgsvgrgwervgrdgrdgdrgrdgrdvgrdgvdgvdgdrgrgtedrtgrgvgdgrgrdgrgrfgd</div>
									<img className='pinglunpicture' src={require('../img/webwxgetmsgimg.jpg')}></img>
									<img className='pinglunpicture' src={require('../img/webwxgetmsgimg.jpg')}></img>
								</div>
							</div>

					    </TabPane>
					   
					</Tabs>

				</div>
				

				


			</div>
		)
	}
}

export default Shopye