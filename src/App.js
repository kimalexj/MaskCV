import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import HomePage from './Home/Home';
import CreditsPage from './Credits/Credits';
import AboutPage from './About/About';
import ResultsPage from './Results/Results';
import Navigation from './Navigation/Navigation';

 
function App() {
  return (
    <HashRouter>
      <div>
        <Navigation />
        <Route path="/" exact component={HomePage} />
        <Route path="/About" exact component={AboutPage} />
        <Route path="/Results" exact component={ResultsPage} />
        <Route path="/Credits" exact component={CreditsPage} />
      </div>
    </HashRouter>
  );
}

export default App;
