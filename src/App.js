import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { Header } from './Components';
import { Home, Cart } from './pages';
function App() {
  const [pizzas, setPzzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(resp =>{
      console.log(resp);
    })

    /* fetch('http://localhost:3000/db.json')
    .then(resp=>{
      console.log(resp);
      return resp.json();
    })
    .then((resp) => resp.json())
    .then((json) => {
      setPzzas(json.pizzas );
    }); */
  }, []);
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={()=><Home items={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
