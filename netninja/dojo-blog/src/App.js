import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
function App() {
 const title = 'New Blog';
 const likes = 10;




  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content"> 
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/create">
        <Create />
      </Route>
      <Route  path="/blogs/:id">
        <BlogDetails />
      </Route>
      </Switch>


</div>
    </div>
    </Router>
  );
}

export default App;
