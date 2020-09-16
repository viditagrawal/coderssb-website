import React, { Component } from "react";
import "../../css/BackgroundImage.css";
import MailingList from "../../components/Page_Layout/MailingList";

class BackgroundImage extends Component {
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
      if (this.state.isHovering) {
        document.getElementById("background_image_text").style.fontSize = 100;
      } else {
        document.getElementById(
          "background_image_text"
        ).style.fontSizeAdjust -= 0.05;
      }
    }
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render(props) {
    return (
      <div
        className="backgroundParentDiv"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <img
          src={this.props.source}
          className="w3-round w3-image w3-opacity-min"
          alt={this.props.missing_source}
          width="100%"
        />
        <h1 id="background_image_text" className="background">
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default BackgroundImage;
