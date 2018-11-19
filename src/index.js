import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
  


import App from './components/app';
import Details from './components/details';




ReactDOM.render(
<BrowserRouter>
<div>
<Route exact path='/' component={App}/>

<Route exact path ='/:id' component={Details} />
</div>
</BrowserRouter>, document.getElementById('root'));