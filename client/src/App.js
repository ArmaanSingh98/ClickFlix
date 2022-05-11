import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import TVSearch from './components/TVSearch'
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
//import '../public/styles.css'


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">ClickFlix</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Find the Movie you're looking for!
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/TV-Search">
            Now Search TV Shows
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <Search />
          {/* <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div> */}
          <TVSearch />
          {
            
          }
        </Router>
    );
  }
}


export default App;
