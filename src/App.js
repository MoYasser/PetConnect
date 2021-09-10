import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './pages/Signup';
import Main from "./pages/Main";
import Search from "./pages/Search";


function App() {
const title ="Welcome dumb";
const likes = 50;

  return (
     <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path ="/">
                  <Main />
              </Route>
              <Route path =" /search">
                  <Search />
              </Route>
            </Switch>
          </div>
        </div>
     </Router>
  );
}

export default App;
