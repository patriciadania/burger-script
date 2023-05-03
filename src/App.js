
import Login from './Paginas/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TelaInicial from './componentes/TelaInicial/TelaInicial';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Login />
        </Route>
      <Route path="/TelaInicial" component={TelaInicial}>
        <TelaInicial />
      </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
