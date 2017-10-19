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
import Biaoti from './component/share/biaoti'
import Mycomments from './component/share/Mycomments'
import Cantingye from './component/Cantingye/Cantingye'
import Banner from './component/Banner/Banner'
import Shopye from './component/Shopye/Shopye'
import Oneshop from './component/Oneshop/Oneshop'
import Bestdish from './component/Bestdish/Bestdish'

import Systemadministrator from './component/Systemadministrator/Systemadministrator'
import Chiefadministrator from './component/Chiefadministrator/Chiefadministrator'
import Branchadministrator from './component/Branchadministrator/Branchadministrator'

import Controlbranchadministrator from './component/Chiefadministrator/Controlbranchadministrator'

import Controlreataurant from './component/Branchadministrator/Controlreataurant'
import Onereataurant from './component/Branchadministrator/Onereataurant'
import Addbestdish from './component/Branchadministrator/Addbestdish'


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
              <Route path='/chiefadministrator' component={Chiefadministrator}/>
              <Route path='/controlbranchadministrator' component={Controlbranchadministrator}/>
              <Route path='/branchadministrator' component={Branchadministrator}/>
              <Route path='/controlreataurant' component={Controlreataurant}/>
              <Route path='/onereataurant'  component={Onereataurant}/>
              <Route path='/addbestdish'  component={Addbestdish}/>
              
		      	</div>
		    </HashRouter>
      
    );
  }
}

export default App;
