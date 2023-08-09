import './App.css';
import { Routes, Route } from 'react-router-dom'

/* 
 It used for defining and rendering routes in a React application 
 with client-side routing.
*/
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AboutHistory from './AboutHistory';
import AboutOverview from './AboutOverview';
import AboutTeam from './AboutTeam';


function App() {
  return (
        /*
        The below code defines routes for different paths 
        and their corresponding components to be rendered using 
        client-side routing in a React application. 
        */
      
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
            <Route path='/about/abouthistory' Component={AboutHistory} />
            <Route path='/about/aboutoverview' Component={AboutOverview} />
            <Route path='/about/aboutteam' Component={AboutTeam} />
            
        </Routes>
        
       
  )
}

export default App;