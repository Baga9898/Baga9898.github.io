import React from "react";
import "./WatchesBlock.css";

export default class TodayDate extends React.Component {
  state = {
    date: ""
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };

  render() {
    const { date } = this.state;

    return <div className="todayDate">{date}</div>;
  }
}