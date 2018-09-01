import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import Store from './store';
import ItemModel from './components/ItemModel'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
class App extends Component {
  render() {
    return (
<Provider store = {Store}>
      <div className="App">
        <AppNavbar/>
        <ItemModel/>
        <ShoppingList/>

      </div>
      </Provider>
    );
  }
}

export default App;
