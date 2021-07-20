import './App.css';
import EarningOverview from './EarningOverview.js';
import RevenueSource from './RevenueSource.js';
import Details from './Details.js';
import Users from './Users.js';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import  Button  from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";

function App() {
  return (
   <>
    <Router>
       <div className="App">
       <CssBaseline />
          <AppBar>
            <Toolbar>
              <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
                <li>
                  <Link to="/dashboard">
                    <Button variant="contained" color="primary">
                      Dashboard
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/pages">
                    <Button variant="contained" color="primary">
                      Pages
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/charts">
                    <Button variant="contained" color="primary">
                      charts
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/tabels">
                    <Button variant="contained" color="primary">
                      tabels
                    </Button>
                  </Link>
                </li>
              </ul>
              <hr />
            </Toolbar>
          </AppBar>
          <Toolbar />
       <Switch>
            <Route path="/dashboard">
            <Details/>
             <EarningOverview/>
             <RevenueSource/>
            </Route>
            <Route path="/charts">
             <EarningOverview/>
             <RevenueSource/>
            </Route>
            <Route path="/tabels">
             <Users/>
            </Route>
       </Switch>
   </div>
  </Router> 
 </>
   );
}

export default App;
