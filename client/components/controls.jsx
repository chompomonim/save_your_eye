ControlsComponent = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      status: States.findOne({user: this.props.user})
    }
  },

  submitDirection(direction) {
    if (direction === this.data.status.direction) {
      console.log('WOOHOO!');
    } else {
      console.log('FAIL :(');
    }
  },

  render() {
    var current_status;
    if (this.data.status) {
      current_status = (
        <div>
          <div>Current size: {this.data.status.size}</div>
          <div className="directions">
            <a onClick={this.submitDirection.bind(this, 0)}><img src="/0.png" /></a>
            <a onClick={this.submitDirection.bind(this, 1)}><img src="/1.png" /></a>
            <a onClick={this.submitDirection.bind(this, 2)}><img src="/2.png" /></a>
            <a onClick={this.submitDirection.bind(this, 3)}><img src="/3.png" /></a>
          </div>
        </div>
      )
    }
    return <div className="main">
      <h1>Hello, {this.props.user}</h1>
      {current_status}
    </div>
  }
});
