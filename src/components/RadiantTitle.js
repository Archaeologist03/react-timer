import React from "react";

class RadiantTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addLight: false,
    };

    // this.handleLighting = this.handleLighting.bind(this);
  }

  // handleLighting(lightState) {
  //   this.lightTimeout = setTimeout(() => {
  //     this.setState(() => ({
  //       addLight: !lightState,

  //     }));
  //   }, 1000);
  // }

  // componentDidMount() {
  //   this.setState({
  //     addLight: !this.state.addLight,
  //   });
  // }

  // componentDidUpdate() {
  //   this.handleLighting(this.state.addLight);
  //   console.log(this.state);
  // }

  // componentWillUnmount() {
  //   clearTimeout(this.lightTimeout);
  // }

  render() {
    return (
      <h1 className={`app-title ${this.addLight ? "app-title-light" : null}`}>
        {this.props.children}
      </h1>
    );
  }
}

export default RadiantTitle;
