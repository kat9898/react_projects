import {React} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import {Header} from './components';
import {Home, Cart} from './pages';



function App() {
  

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
