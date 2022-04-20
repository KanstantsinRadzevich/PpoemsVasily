import React from "react";
import ModalApp from "../modal-manager/index";
import "./style.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <p> Hello Header!</p>
        <ModalApp showModal={false} />
      </header>
    );
  }
}
