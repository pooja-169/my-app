/*import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component{

  constructor(props){
    console.log("Constructor Called");
    super(props);
    this.state={}
  }
  componentDidMount(){
    console.log("Component Did Mount Called");
  }
  render(){
    console.log("Render Called");
    return(<>
    <Header />
    <h1> Hello </h1>
    <Footer />
    </>)
  }
}
export default App
*/
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
function App(){
  return(<>
   <h1> My First React App</h1>
   <hr />
   <Router>
    <Link to='/'> Home</Link>
    <Link to='/about'> About</Link>
    <Link to='/contact'> Contact</Link>
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/about" element ={<About />}/>
      <Route path="/contact" element ={<Contact />}/>

    </Routes>
   </Router>
     
   
  </>

  );
}
export default App;