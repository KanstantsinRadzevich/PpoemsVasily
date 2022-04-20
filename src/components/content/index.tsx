import React from "react";
import "./style.css";

interface ContentProps {
  children: React.ReactNode;
  props: string;
}

class Content extends React.Component {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  render() {
    return (
      <main className="App-content">
        <h2>Hello Main!</h2>
      </main>
    );
  }
}

export default Content;
