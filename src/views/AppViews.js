import React from "react";

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          {content}
        </header>
      </div>
    );
  }
};

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        <h1>Booking App</h1>
        Please wait while we connect to your account. If this takes more than a
        few seconds, there may be something wrong.
      </div>
    );
  }
};

exports.FundAccount = class extends React.Component {
  render() {
    const { bal, standardUnit, defaultFundAmt, parent } = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type="number"
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({ amt: e.currentTarget.value })}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
};

exports.AdminOrGuest = class extends React.Component {
  render() {
    const { parent } = this.props;
    parent.selectGuest();
    /*return (
      <div>
        Please select a role:
        <br />
        <p>
          <button onClick={() => parent.selectAdmin()}>Admin</button>
          <br /> Set Houses.
        </p>
        <p>
          <button onClick={() => parent.selectGuest()}>Guest</button>
          <br /> Booking.
        </p>
      </div>
    );*/
  }
};

export default exports;
