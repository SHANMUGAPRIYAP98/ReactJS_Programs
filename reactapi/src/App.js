import logo from './logo.svg';
import './App.css';
import PizzaOrderForm from './Components/PizzaOrderForm';
import WebinarFormData from './Components/WebinarFormData';
import { Component } from 'react';
import WebinarFormAPI from './Components/WebinarFormAPI';
import PizzaViewData from './Components/PizzaViewData'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Sample from './Components/Sample';
import WebFormRxJS from './Components/WebFormRxJS';

export default class App extends Component {
  onReadData(data) {
    console.log("I am in Parent Component")
    console.log("Child Values")
    if (data != null) {
       console.log(data)
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ol className="navbar-nav mr-auto">
              <li><Link to='/pizzaorderform' >Pizza Order Form</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
              <li><Link to='/pizzaviewform' >Pizza View Form</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
              {/* <li><Link to='/webinarctop' > Webinar Form Child-Parent Interaction</Link></li>&nbsp;&nbsp;&nbsp; */}
              <li><Link to='/webinarapi' >Webinar Form with Axios</Link></li>
            </ol>
          </nav>
          <Switch>
            <Route path='/pizzaorderform' exact component={PizzaOrderForm}></Route>
            <Route path='/pizzaviewform' exact component={PizzaViewData}></Route>
            {/* <Route path='/webinarctop' exact component={WebinarFormData}   ></Route> */}
            <Route path='/webinarapi' exact component={WebinarFormAPI}></Route>
          </Switch>
          </div>
        <div>
          <WebinarFormData onChildFunc={this.onReadData} />

        </div>
        <div>
          <WebFormRxJS/>
        </div>
      </Router>
    );
  }

}

