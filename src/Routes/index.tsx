import { Route, Switch } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";

export function Rotes() {
  

  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>

      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>

      <Switch>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </>
  );
}
