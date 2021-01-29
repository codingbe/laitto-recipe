import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import routers from "./routers";
import Home from "./routes/Home";
import GlobalStyles from "./Components/GlobalStyles";
import FriedRice from "./routes/FriedRice";
import RiceBowl from "./routes/RiceBowl";
import CookedRamen from "./routes/CookedRamen";
import Header from "./Components/Header";
import Hamburger from "./routes/Hamburger";
import Tteogbokki from "./routes/Tteogbokki";
import Microwave from "./routes/Microwave";
import FriedFood from "./routes/FriedFood";
import Ade from "./routes/Ade";
import Mandoo from "./routes/Mandoo";

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Header />
      <Switch>
        <Route path={routers.home} exact component={Home}></Route>
        <Route path={routers.friedRice} component={FriedRice}></Route>
        <Route path={routers.riceBowl} component={RiceBowl}></Route>
        <Route path={routers.cookedRamen} component={CookedRamen}></Route>
        <Route path={routers.hamburger} component={Hamburger}></Route>
        <Route path={routers.tteogbokki} component={Tteogbokki}></Route>
        <Route path={routers.microwave} component={Microwave}></Route>
        <Route path={routers.friedFood} component={FriedFood}></Route>
        <Route path={routers.ade} component={Ade}></Route>
        <Route path={routers.mandoo} component={Mandoo} />
      </Switch>
    </Router>
  </>
);

export default App;
