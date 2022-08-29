import React from "react";
import AppViews from "./views/AppViews.js";
//import DeployerViews from "./views/DeployerViews.js";
//import AttacherViews from "./views/AttacherViews.js";
import GuestViews from "./views/GuestViews.js";
import { renderDOM, renderView } from "./views/render.js";
import "./index.css";
import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";

const reach = loadStdlib(process.env);
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    MyAlgoConnect,
  })
);

const { standardUnit } = reach;
const defaults = { defaultFundAmt: "10", defaultWager: "3", standardUnit };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "ConnectAccount", ...defaults };
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ acc, bal });
    if (await reach.canFundFromFaucet()) {
      this.setState({ view: "FundAccount" });
    } else {
      this.setState({ view: "AdminOrGuest" });
    }
  }
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({ view: "AdminOrGuest" });
  }
  async skipFundAccount() {
    this.setState({ view: "AdminOrGuest" });
  }
  /*selectAdmin() {
    this.setState({ view: "Wrapper", ContentView: Admin });
  }*/;
  selectGuest() {
    this.setState({ view: "Wrapper", ContentView: Guest });
  }
  render() {
    return renderView(this, AppViews);
  }
}

class Booking extends React.Component {
  random() {
    return reach.hasRandom.random();
  }
  async getBooking() {
    // Fun([], UInt)
    const booking = await new Promise((resolveBookP) => {
      this.setState({ view: "GetBooking", playable: true, resolveBookP });
    });
    this.setState({ view: "WaitingForResults", booking });
    return booking;
  }
}

class Guest extends Booking {
  constructor(props) {
    super(props);
    this.state = { view: "SetHouse" };
  }
  setHouse(house) {
    this.setState({ view: "Deploy", house });
  }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({ view: "Deploying", ctc });
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector]; // UInt
    backend.Admin(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ view: "WaitingForAttacher", ctcInfoStr });
  }
  render() {
    return renderView(this, GuestViews);
  }
}

renderDOM(<App />);
