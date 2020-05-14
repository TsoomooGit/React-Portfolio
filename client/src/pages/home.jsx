import React, { Component } from "react";
import "../App.css";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Home extends Component {
  state = {
    copied: ""
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container home-page">
          <img
            style={{ marginLeft: "36%" }}
            id="portfolio-img"
            src="./images/profile.png"
          />
          <p>
            Welcome! I am{" "}
            <span style={{ color: "#bd6507" }}>Tsolmon Baasandorj</span>
          </p>
          <p>I am a full stack web developer.</p>
           <br/>

        <div className="contacts">
          <CopyToClipboard
            style={{ display: "block" }}
            text="b.tsolmon04@gmail.com"
            onCopy={() => this.setState({ copied: "email" })}
          >
            <span data-toggle="tooltip" data-placement="top" title="Copy">
              <i className="fas fa-envelope-open-text"></i>
              b.tsolmon04@gmail.com
              <span>
                {this.state.copied == "email" ? (
                  <i className="far fa-check-circle" style={{ marginLeft: 5 }}>
                    copied
                  </i>
                ) : (
                  ""
                )}
              </span>
            </span>
          </CopyToClipboard>
          <CopyToClipboard
            style={{ display: "block" }}
            text="7033807075"
            onCopy={() => this.setState({ copied: "phone" })}
          >
            <span data-toggle="tooltip" data-placement="top" title="Copy">
              <i className="fas fa-phone"></i>(757)-749-0242
              <span>
                {this.state.copied == "phone" ? (
                  <i className="far fa-check-circle" style={{ marginLeft: 5 }}>
                    copied
                  </i>
                ) : (
                  ""
                )}
              </span>
            </span>
          </CopyToClipboard>
          <span className="location">
            <i class="fas fa-map-marker-alt"></i>Alexandria, Virginia
          </span>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
