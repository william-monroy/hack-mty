import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Pages/login/Login';
import Home from './Pages/home/Home';
import Dashboard from './Pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router >
  );
}

export default App;
