import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import List from './components/List'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <div>
            <h1>Welcome to Surajit Mirbar assignment work</h1>
            <ul>
              <li>For Login interface go "/login"</li>
              <li>For Register interface go "/register"</li>
              <li>For view user emails list go "/list"</li>
            </ul>
          </div>
        </Route>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
