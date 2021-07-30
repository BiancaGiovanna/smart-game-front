import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}