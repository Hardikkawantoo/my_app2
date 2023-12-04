
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TestArea';
// import About from './components/AboutUs';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <>
    
    {/* <Router> */}
    

    
    <Navbar/>
    
    

    {/* <Switch>
          <Route exact path="/About" >
            <About />
          </Route> */}
          
          {/* <Route exact path="/"> */}
            <TextArea />
          {/* </Route>
        </Switch> */}
{/*     
    </Router> */}

  </>
  );
}

export default App;

