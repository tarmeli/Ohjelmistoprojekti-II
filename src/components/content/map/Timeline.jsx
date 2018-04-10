import React, { Component } from "react";
import Tabs from "./timeline/Tabs";

export default class Timeline extends Component {
  renderDatalist() {
    return this.props.geographicalWeightData.map((item, key) => {
      return <option key={key} value={key * 10} label={item.month} />;
    });
  }

  render() {
    const timelineStyle = {
      alignItems: "center",
      justifyContent: "center"
    };

    return (
      <article className="tile is-child notification">
        <Tabs
          geographicalWeightData={this.props.geographicalWeightData}
          onAssetChange={this.props.onAssetChange}
        />
        <div className="columns" style={timelineStyle}>
          <input
            className="slider"
            type="range"
            min="0"
            max={this.props.length}
            value={this.props.month}
            onChange={this.props.onChange}
            style={{ outline: "none" }}
            list="tickmarks"
          />
          <datalist id="tickmarks">{this.renderDatalist()}</datalist>
        </div>
        <span className="field has-addons has-addons-centered">
          <a
            className="button left"
            id="previous"
            onClick={this.props.onMonthButtonClick}
          >
            <span className="icon left">
              <i className="fas fa-arrow-left left" />
            </span>
            <span className="left">Previous month</span>
          </a>
          <a
            className="button right"
            id="next"
            onClick={this.props.onMonthButtonClick}
          >
            <span className="right">Next month</span>
            <span className="icon right">
              <i className="fas fa-arrow-right right" />
            </span>
          </a>
        </span>
      </article>
    );
  }
}
