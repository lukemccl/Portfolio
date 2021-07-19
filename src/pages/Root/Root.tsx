import './Root.css';
import {
    BrowserRouter as Router,
    Route, Switch
  } from "react-router-dom";

import Header from "../../components/Header/header";
import Home from "../Home/home"
import Projects from "../Projects/projects"
import Passions from "../Passions/passions"
import Contact from "../Contact/contact"
import NotFound from "../404/notfound"

const Root = () => {
  return (
    <div className="Root">
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/passions" component={Passions}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route component={NotFound} />
        </Switch>
       </Router>
       <footer>This is a placeholder footer</footer>
    </div>
  );
}

export default Root;
