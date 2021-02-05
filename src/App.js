import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './Route';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        { routes.map( route => <Route key={ route.path } { ...route } /> ) }
    </Switch>
    </BrowserRouter>
  );
}

export default App;
