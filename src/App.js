import React from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './redux/store'
// import {connect} from 'react-redux'

import Login from './component/Login/Login'
import Head from './component/share/head'
import Cantingye from './component/Cantingye/Cantingye'
import Biaoti from './component/share/biaoti'
import Banner from './component/Banner/Banner'
import Shopye from './component/Shopye/Shopye'
import Oneshop from './component/Oneshop/Oneshop'
import Bestdish from './component/Bestdish/Bestdish'
import Systemadministrator from './component/Systemadministrator/Systemadministrator'


import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return (

    	
    		<HashRouter>
		      	<div className="App">
		       		<Route path='/' exact component={Login} />
              <Route path='/cantingye' component={Cantingye}/>
              <Route path='/shopye' component={Shopye}/>
              <Route path='/oneshop' component={Oneshop}/>
              <Route path='/bestdish' component={Bestdish}/>
              <Route path='/systemadministrator' component={Systemadministrator}/>
		      	</div>
		    </HashRouter>
      
    );
  }
}

export default App;
