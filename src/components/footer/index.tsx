import React from "react";
import "./style.css";
import ModalApp from "../modal-manager/index";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="App-footer">
        <p> Footer </p>
        <ModalApp showModal={false} />
      </footer>
    );
  }
}
