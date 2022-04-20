//import { Modal } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import modalConfig from "./modalConfig.js";
//These two containers are siblings in the DOM
interface ModalProps {
  children: React.ReactNode;
}
interface ModalState {
  show: boolean;
}
//Let's create a Modal component that is an abstraction around
//the portal API.
const modalRoot = document.getElementById("modal-root");
//const appRoot: HTMLElement | null = document.getElementById("root");
class Modal extends React.Component<ModalProps, ModalState> {
  el: HTMLDivElement;
  constructor(props: ModalProps) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement("div");
    console.log(this.el);
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRoot?.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    modalRoot?.removeChild(this.el);
  }

  render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el
    );
  }
}

interface ModalAppProps {
  children: React.ReactNode;
  showModal: boolean;
}
interface ModalAppState {
  showModal: boolean;
}
//type showModal = boolean;
// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class ModalApp extends React.Component<ModalAppState> {
  constructor(props: ModalAppProps) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    const elModal = this.props.showModal;
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = elModal ? (
      <Modal aria-labelledby="modal-title" aria-describedby="modal-description">
        <div className="modal">
          <div>
            With a portal, we can render content into a different part of the
            DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}
export default ModalApp;
//ReactDOM.render(<App />, appRoot);
