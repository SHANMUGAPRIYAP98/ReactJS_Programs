import logo from './logo.svg';
import './App.css';
import PizzaOrderForm from './Components/PizzaOrderForm';
import WebinarFormData from './Components/WebinarFormData';
import { Component } from 'react';
import WebinarFormAPI from './Components/WebinarFormAPI';
import PizzaViewData from './Components/PizzaViewData'

export default class App extends Component {
  onReadData(data)
  {
    console.log("I am in Parent Component")
    console.log("Child Values")
    if(data!=null)
    {
      var display;
    }
  }
render()
{
  return (
    <div className="App">
    {/* <PizzaOrderForm /> */}
    {/* <PizzaViewData /> */}
    {/* {
      display
    } */}
    <div>
    {/* <WebinarFormData onChildFunc={this.onReadData}/> */}
    <WebinarFormAPI />
    </div>
  
    </div>
  );
}
 
}

