import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }
addFish = fish => {
  console.log("Adding a Fish");
  // take a copy of the exsisting state
  // you dont want to reach in state and modigy it directly it could cause problems with performance and things updating out of order
  // its called mutation
  const fishes = {...this.state.fishes}

  // add new fish to fishes var
  fishes[`fish${Date.now()}`] = fish;
  // set new fishes obj to state
  this.setState({fishes})
  // refresh form
}

loadSampleFishes = () => {
  this.setState({fishes: sampleFishes});
}
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
        {/* anything other than a string needs to be {} */}
          <Header tagline="Fresh Seafood Market" age={500}/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish}
         loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }
}

export default App;
