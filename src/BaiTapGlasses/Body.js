import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default class Body extends Component {
  render() {
    return (
      <div>
        <div class="content">
          <div class="content-bg"></div>
          <div class="content-body">
            <div class="container">
              <div class="row">
                <div className="card" style={{ width: "20rem" }}>
                  <img src="https://64.media.tumblr.com/4b35784e49555089fc9463b1d6e35542/d51b820ae2e119ae-b9/s500x750/a687308a37be7b790c825bba7d34914dcddfba0b.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
