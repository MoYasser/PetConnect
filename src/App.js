import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
const title ="Welcome dumb";
const likes = 50;

  return (
    <div className="App">
      <Navbar/>
      <div className="content"></div>
      <Login/>
    </div>
  );
}

export default App;
