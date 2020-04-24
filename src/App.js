import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';  
import ShopPage from './pages/shop/shop.component';

const Hatspage = () => {
    return(
      <h1>Hats Page</h1>
    );
}
const JacketPage = () =>{
  return(
    <h1>Jacket page</h1>
  );
}
function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
        
    </div>
  );
}

export default App;
