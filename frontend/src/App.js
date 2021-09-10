import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import About from './pages/About'
import Results from './pages/Results'
import {BrowserRouter as Route, Router, Switch, Link} from 'react-router-dom'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path ="/results" component={Results} />
       </Switch>
     </Router>
  );
}


export default App;
