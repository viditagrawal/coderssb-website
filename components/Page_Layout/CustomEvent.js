import "../../css/index.css"

export default class CustomEvent extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

    this.toggleHover = this.toggleHover.bind(this);
    this.state = { hover: false };
  }
  toggleHover(){
    this.setState({hover: !this.state.hover});
    this.render();
  }
  handleClick() {
    window.open(this.props.event.url);
  }
    render() {
      var linkStyle;
      if (this.state.hover) {
        linkStyle = {color: 'black', textDecoration: 'underline'};
      } else {
        linkStyle = {color: 'white'};
      }

        return (
        <h8 className="paragraph-text" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.handleClick}>
            {this.props.event.title}
        </h8>
        );
    }
}