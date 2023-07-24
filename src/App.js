//import logo from './logo.svg';

import Create from './Create';
import Entry from './Entry';
import Navbar from './Navbar';
import Home from './Phonebook';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  //const title='welcome to the phone book'
  return (
    <Router>
    <div className="App">
      <Navbar/>
     <div className="content">
     <Switch>
      <Route exact path="/">
        <Home/>

      </Route>
      <Route path ="/create">
        <Create/>

      </Route>
      <Route exact path="/entry">
        <Entry/>

      </Route>

     </Switch>
     </div>
    </div>
    </Router>
  );  
}

export default App;
