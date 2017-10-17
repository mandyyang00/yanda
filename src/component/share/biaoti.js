import React from 'react'
import './biaoti.css'
import { Icon,Progress } from 'antd';


const Biaoti =({biaoti})=>(
  	<div className='biaoti'>
  		
		  	<span className='left'></span>
		  		<div>
		  			<Icon type="environment-o" style={{'color':'#009dd9','fontSize':'16px','marginRight':'5px'}}/>{biaoti}
		  		</div>
	
  		
	</div>
)

export default Biaoti