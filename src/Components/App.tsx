import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import Renovation from './Renovation';
import Webshop from './Webshop';


function App () {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Renovation} />
          <Route path="/otthon" component={Renovation} />
          <Route path="/shop" component={Webshop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
