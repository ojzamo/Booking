import React, { Component } from "react";

const exports = {};

exports.SetHouse = class extends Component {
  render() {
    const { parent } = this.props;
    const house = (this.state || {}).house;
    return (
      <>
        <div className="item">
          Select the House
          <select
            onChange={(e) => this.setState({ house: e.currentTarget.value })}
            required
          >
            <option value="1">Beach house</option>
            <option value="2">Mountain house</option>
            <option value="3">City house</option>
          </select>
        </div>

        <div class="columns">
          <div class="item">
            <label for="checkindate">
              Check-in Date <span>*</span>
            </label>
            <input id="checkindate" type="date" name="checkindate" />
            <i class="fas fa-calendar-alt"></i>
          </div>
          <div class="item">
            <label for="checkoutdate">
              Check-out Date <span>*</span>
            </label>
            <input id="checkoutdate" type="date" name="checkoutdate" />
            <i class="fas fa-calendar-alt"></i>
          </div>
        </div>
        <br />
        <p>
          <button onClick={() => parent.SetHouse(house)}>Booking</button>
        </p>
      </>
    );
  }
};

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <>
        <div className="banner">
          <h1>Booking Form</h1>
        </div>
        {content}
      </>
    );
  }
};

exports.Deploy = class extends React.Component {
  render() {
    const { parent, wager, standardUnit } = this.props;
    return (
      <div>
        Mount (pay to deploy): <strong>{wager}</strong> {standardUnit}
        <br />
        <button onClick={() => parent.deploy()}>Deploy</button>
      </div>
    );
  }
};
export default exports;
/*const styles = StyleSheet.create({
  container: {
    flex: 1, // take up all screen
    paddingTop: 20, // start below status bar
  },
  loader: {
    flex: 1,
    alignItems: "center", // center horizontally
    justifyContent: "center", // center vertically
  },
  scrollContent: {
    flexDirection: "row", // arrange posters in rows
    flexWrap: "wrap", // allow multiple rows
  },
});*/
