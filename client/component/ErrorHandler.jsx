import React from "react";

export default class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }
  render() {
    if (this.state.error) {
      return <p style={{ display: "none" }}>Something went wrong.</p>;
    }
    return this.props.children;
  }
}