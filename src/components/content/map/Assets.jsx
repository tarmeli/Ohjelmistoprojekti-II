import React, { Component } from "react";

export default class Assets extends Component {
  constructor() {
    super();
    this.state = {
      currentMonth: ""
    };
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  Loading(what) {
    return (
      <tr>
        <td>Loading {what}...</td>
      </tr>
    );
  }

  render() {
    console.log("geographicalweightdata", this.props);

    const assetTableData =
      this.props.geographicalWeightData.length === 0
        ? this.Loading("Assets")
        : this.props.geographicalWeightData.map((item, key) => {
            if (key === this.props.month) {
              const innerLoop = item.assetClasses.map((innerItem, innerKey) => {
                const innerInnerLoop = innerItem.weights.map(
                  (innerInnerItem, innerInnerKey) => {
                    if (
                      innerInnerItem.countryId ===
                      Number(this.props.geographyId)
                    ) {
                      return (
                        <tr key={innerKey}>
                          <td>{this.capitalize(innerItem.class)}</td>
                          <td>{innerInnerItem.marketValue}</td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  }
                );
                return innerInnerLoop;
              });
              return innerLoop;
            } else {
              return null;
            }
          });

    return (
      <article className="tile has-accent is-child notification">
        <p className="title">Assets</p>
        <p className="subtitle">
          World<br />
          {this.props.geographicalWeightData.length === 0
            ? this.Loading("Month")
            : this.props.geographicalWeightData[this.props.month].month}
        </p>
        <div className="centered-table">
          <table className="table is-fullwidth is-hoverable">
            <tbody>{assetTableData}</tbody>
          </table>
        </div>
        <p className="title">Top 10 Weights</p>
        <figure className="image is-4by3">
          <img
            alt="Placeholder"
            src="https://bulma.io/images/placeholders/640x480.png"
          />
        </figure>
      </article>
    );
  }
}