import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}