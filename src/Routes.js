import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import App from './components/App';
import About from './components/About';

const Routes = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon" component={App} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
