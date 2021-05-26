import {React, useState, useEffect, useRef} from 'react';
import {Route} from 'react-router-dom';
import { createStore } from 'redux';
import axios from 'axios';
import store from './redux/store';
import {useDispatch} from 'react-redux';

import {Header, PizzaBlock} from './components';
import {Home, Cart} from './pages';
import {setPizzas} from './redux/actions/pizzas';



function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    // axios.get('http://localhost:3000/db.json').then(({data}) => 
    //   setPizzas(data.pizzas)
    // );
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then((json) => dispatch(setPizzas(json.pizzas)));
  }, []);

  return (
    <div className="App">
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
      </div>
    </div>
    </div>
  );



  // class App extends React.Component {
  //   componentDidMount () {
  //     fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then((json) => 
  //     window.store.dispatch(setPizzasAction(json.pizzas)));
  //   }

  //   render() {
  //     return (
  //       <div className="App">
  //       <div className="wrapper">
  //         <Header />
  //         <div className="content">
  //           <Route path="/" render={ () => <Home items={this.props.items} />} exact></Route>
  //           <Route path="/cart" component={Cart} exact></Route>
  //         </div>
  //       </div>
  //       </div>
  //     );
  //   }
  // }

}
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   };
// };


export default App;
