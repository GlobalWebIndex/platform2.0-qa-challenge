import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/" exact>
          <Page1 />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
