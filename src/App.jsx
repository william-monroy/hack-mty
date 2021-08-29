import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Pages/login/Login';
import Home from './Pages/home/Home';
import Dashboard from './Pages/dashboard/Dashboard';
import Materia from './Pages/materia/Materia';
import Tema from './Pages/tema/Tema';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route exact path="/Cursos/Materia/" component={Materia} />
        <Route path="/Cursos/Materia/Tema" component={Tema} />
      </Switch>
    </Router >
  );
}

export default App;
