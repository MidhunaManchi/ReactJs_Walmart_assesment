import './App.css';
import Home from './components/home/home';
import Products from './components/products/products';
import Settings from './components/settings/settings';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/header/headerComponent';
import {FnameContext, LnameContext,CurrentPage} from './components/contextFile/contextFile';
import { useState } from 'react';


function App() {
  const [firstName, setFirstName] = useState('Midhuna');
  const [lastName, setLastName] = useState('Manchi');
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <FnameContext.Provider value={{firstName, setFirstName}}>
      <LnameContext.Provider value={{lastName, setLastName}}>
      <CurrentPage.Provider value={{currentPage, setCurrentPage}}>
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact render={(props) => (<Home {...props} />)} />
      <Route path="/home" exact render={(props) => (<Home {...props} />)} />
      <Route path="/products" exact render={(props) => (<Products {...props} />)} />
      <Route path="/settings" exact render={(props) => (<Settings {...props} />)} />
      </Switch>
      </Router>
      </CurrentPage.Provider>
      </LnameContext.Provider>
    </FnameContext.Provider>
  );
}

export default App;
