
import {Route,Switch} from "react-router-dom";
import Main from "./components/Main";
import Loggedin from "./components/Loggedin";
import Signup from "./components/Signup";

function App() {
  return (
    
      <Switch>
          <Route exact path="/buzztara_app" component={Main}/>
          <Route exact path="/buzztara_app/logged" component={Loggedin} />
          <Route exact path="/buzztara_app/signup" component={Signup} />
      </Switch>

  );
}

export default App;
