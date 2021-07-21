import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import App from './components/App';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';

const Routes = () => (
  <>
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon" component={App} />
          <Route exact path="/about" component={About} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  </>
);

export default Routes;
