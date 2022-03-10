import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <div>
			<Router>
				<Header/>
					<Route exact path="/"><About/></Route>
					<Route exact path="/projects"><Projects/></Route>
					<Route exact path="/contact"><Contact/></Route>
					<Route exact path="/resume"><Resume/></Route>
				<Footer/>
			</Router>
    </div>
  );
}

export default App;
