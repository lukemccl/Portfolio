import './Root.css';

import Header from "../../components/Header/Header";
import About from "../About/about"
import Projects from "../Projects/projects"
import Passions from "../Passions/passions"
import Contact from "../Contact/contact"
import NotFound from "../404/notfound"

const Root = () => {
  return (
    <div className="Root">
        <Header />
        <div className="mainContent">
          <About />
          <Projects />
          <Passions />
          <Contact />
        </div>
        
        <footer>© 2021 - Luke McClure</footer>
    </div>
  );
}

export default Root;
