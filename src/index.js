import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter ,
    Route,
    Link
      } from 'react-router-dom';
  


import App from './components/app';
import Details from './components/details';
import Books from './books'



ReactDOM.render(
<BrowserRouter>
<div>
<Route exact path='/' component={App}/>

<Route exact path ='/:id' component={Details} />
</div>
</BrowserRouter>, document.getElementById('root'));