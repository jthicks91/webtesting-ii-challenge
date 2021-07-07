import React from "react";
import Dashboard from "./Dashboard";
import Display from "./Display";

import "./App.css";

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  strikesHelper = () => {
    let currentStrike = this.state.strikes;
    if (this.state.strikes + 1 > 2) {
      alert(" Strikes 3, yerrrrrr out!");
      this.setState({ balls: 0, strikes: 0 });
    } else {
      this.setState({ strikes: currentStrike + 1 });
    }
  };

  ballsHelper = () => {
    let currentBall = this.state.balls;
    if (this.state.balls + 1 > 3) {
      alert("Ball 4, get on base to first!");
      this.setState({ balls: 0, strikes: 0 });
    } else {
      this.setState({ balls: currentBall + 1 });
    }
  };

  foulsHelper = () => {
    if (this.state.strikes === 0) {
      this.setState({ strikes: 1 });
    } else if (this.state.stikes === 1) {
      this.setState({ strikes: 2 });
    } else if (this.state.strikes === 2) {
      alert(" B, you already have 2 strikes. Get back into the batters box");
    }
  };

  hitHelper = () => {
    alert("Good contact kid!");
    this.setState({ balls: 0, strikes: 0 });
  };

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard
          strikesHelper={this.strikesHelper}
          foulsHelper={this.foulsHelper}
          ballsHelper={this.ballsHelper}
          hitHelper={this.hitHelper}
        />
      </div>
    );
  }
}

export default App;
