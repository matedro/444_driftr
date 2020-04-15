import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./homepage";
import Login from "./login";
import Register from "./register";
import Adult from "./profile/Adult";
import Child from "./profile/Child";
import EvalParent from "./evaluation/EvalParent";
import EvalDetailParent from "./evaluation/EvalDetailParent";
import EvalChild from "./evaluation/EvalChild";
import EvalDetailChild from "./evaluation/EvalDetailChild";
import Matches from "./facilitation/Matches";
import Create from "./facilitation/Create";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleParentProfile = this.handleParentProfile.bind(this);
    this.handleChildProfile = this.handleChildProfile.bind(this);
    this.state = {
      handledChildProfile: false,
      handledParentProfile: false
    };
  }

  handleParentProfile() {
    this.setState({handledParentProfile: true});
  }

  handleChildProfile() {
    this.setState({handledChildProfile: true});
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create-account">
            <Register />
          </Route>
          {/* parents' perspective */}
          <Route path="/p/create-profile">
            <Adult />
          </Route>
          <Route exact path="/p/evaluate">
            <EvalParent
              profileHandled={this.state.handledChildProfile}
            />
          </Route>
          <Route path="/p/evaluate/detail">
            <EvalDetailParent
              profileHandled={this.state.handledChildProfile}
              onSubmit={this.handleChildProfile}
            />
          </Route>
          {/* children's perspective */}
          <Route path="/c/create-profile">
            <Child />
          </Route>
          <Route exact path="/c/evaluate">
            <EvalChild
              profileHandled={this.state.handledParentProfile}
            />
          </Route>
          <Route path="/c/evaluate/detail">
            <EvalDetailChild
              profileHandled={this.state.handledParentProfile}
              onSubmit={this.handleParentProfile}
            />
          </Route>
          {/* facilitators' perspective */}
          <Route path="/f/matches">
            <Matches />
          </Route>
          <Route path="/f/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
