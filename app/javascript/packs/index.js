import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import App from "../components/App";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const CableApp = {};

  document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
      <App />,
      document.getElementById("root")
    );
  });
