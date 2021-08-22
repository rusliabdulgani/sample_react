import React, { Component } from "react";

export default class Input1 extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={this.props.handleChange}
          value={this.props.nilai1}
        />
      </div>
    );
  }
}
