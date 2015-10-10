WelcomeComponent = React.createClass({
  render() {
    return <div>
      <h1>Hello, {this.props.name}</h1>
    </div>
  }
});

MobileWelcome = React.createClass({
  render() {
    return <div>
      <h1>Mobile welcomes {this.props.name}</h1>
    </div>
  }
});
