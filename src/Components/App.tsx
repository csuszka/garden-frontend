import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import AdminPage from './AdminPage';
import Contact from './Contact';
import Navbar from './Navbar';
import References from './References';
import Renovation from './Renovation';
import Services from './Services';
import Webshop from './Webshop';

function App () {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Renovation} />
          <Route path="/otthon" component={Renovation} />
          <Route path="/termekek" component={Webshop} />
          <Route path="/referenciak" component={References} />
          <Route path="/elerhetosegek" component={Contact} />
          <Route path="/szolgaltatasok" component={Services} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
