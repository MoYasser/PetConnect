import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import About from './pages/About'
import Results from './pages/Results'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  return (
<<<<<<< HEAD
   <Router>
       <div className= "App">
           <Navbar />
           <div className="content">
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Router path "/about">
                        <About />
                    </Router>
                    <Route path ="/Forgot">
                        <Forgot />
                    </Route>
                    <Route path ="/Login">
                        <Login />
                    </Route>
                    <Route path ="/Main">
                        <Main />
                    </Route>
                    <Route path ="/Results">
                        <Results />
                    </Route>
                    <Route path ="/Search">
                        <Search />
                    </Route>
                    <Route path ="/Signup">
                        <Signup />
                    </Route>
                </Switch>
           </div>
       </div>
   </Router>
=======
    <Router>
      <Switch>
        <Route exact path ="/results" component={Results} />
      </Switch>
    </Router>
>>>>>>> tst
  );
}


export default App;
