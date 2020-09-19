export default class CustomEvent extends React.Component {
	constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
  	window.open(this.props.event.url);
  }
    render() {
    	console.log('hi');
        return (
        <h8 onClick={this.handleClick}>
            {this.props.event.title}
        </h8>
        );
    }
}