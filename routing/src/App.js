import logo from './logo.svg';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import AddStudent from './Components/AddStudent';
import ViewStudent from './Components/ViewStudent';
import ReactTable from 'react-table'
import EditStudent from './Components/EditStudent';
import DashboardStud from './Components/DashboardStud';
import { BrowserRouter as Router, Switch,Route,Link  } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ProtectedRoute from './Components/ProtectedRoute';
import Navbar from './Components/Navbar';
import EditStud from './Components/EditStud';
import ErrorPage from './Components/ErrorPage';
function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar /> */}
      <DashboardStud/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/about" exact component={About}/>
       <Route path="/login" exact component={AdminLogin}/>
       <Route path="/error" exact component={ErrorPage}/>
       <Route path="/dashboard/addStudent" exact component={AddStudent} />
       <Route path="/dashboard/viewStudent" exact component={EditStudent} />
       <Route path="/dashboard/updateStudent" exact component={EditStud} />
       <Route path="/dashboard/deleteStudent" exact component={EditStud} />
       <ProtectedRoute path="/dashboard" exact component={DashboardStud}/>
     </Switch>
    </div>

    </Router>
  );
}

export default App;
