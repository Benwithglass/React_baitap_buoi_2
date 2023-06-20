import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";


export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg">
          <div class="container d-flex justify-content-center">
            <div class="nav-logo">
              <a class="navbar-brand text-white" href="#">
                TRY GLASSES APP ONLINE
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
