import { Route, HashRouter } from 'react-router-dom';
import HomePage from './Home/Home';
import CreditsPage from './Credits/Credits';
import AboutPage from './About/About';
import ResultsPage from './Results/Results';
import Navigation from './Navigation/Navigation';
import VideoPage from './Video/Video';

 
function App() {
  return (
    <HashRouter>
      <div className="siteWrapper">
        <Navigation />
        <Route path="/" exact component={HomePage} />
        <Route path="/Home" component={HomePage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/Video" component={VideoPage} />
        <Route path="/Results" component={ResultsPage} />
        <Route path="/Credits" component={CreditsPage} />
      </div>
    </HashRouter>
  );
}

export default App;
