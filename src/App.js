
import {Route,Switch} from "react-router-dom";
import Main from "./components/Main";
import Loggedin from "./components/Loggedin";
import Signup from "./components/Signup";

function App() {
  return (
    
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/logged" component={Loggedin} />
          <Route exact path="/signup" component={Signup} />
      </Switch>

  );
}

export default App;
