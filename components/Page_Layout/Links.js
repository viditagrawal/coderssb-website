import React, { Component } from "react";
import "../../css/Links.css";

class Links extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    if (this.props.hover) {
      this.setState(this.toggleHoverState);
    }
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div
        className="linksParentDiv"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <img
          src={this.props.source}
          className="w3-round w3-image w3-opacity-min"
          alt={this.props.missing_source}
          width="100%"
        />
        <h1 id="background_image_text" className="backgroundLink">
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Links;
