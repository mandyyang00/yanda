import React from 'react'
import './head.css'
import { Icon,Progress } from 'antd';








const Head =({titles})=>(
  	<div className='head'>
  		
  		<div className='goback'>
			<Icon type="left" style={{'color':'white','fontSize':'20px','float':'left','marginTop':'16px','marginLeft':'5px'}}/>
		</div>
		<h3 style={{'color':'white','marginLeft':'20px'}}>{titles}</h3>
		<div className='close'>
			<Icon type="close"  style={{'color':'white','fontSize':'20px','float':'right','marginTop':'16px','marginRight':'5px'}}/>
		</div>

    
  </div>
)

export default Head