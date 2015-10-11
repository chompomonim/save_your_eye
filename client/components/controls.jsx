ControlsComponent = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      status: States.findOne({user: this.props.user})
    }
  },

  getInitialState() {
    return {
      selected: ":("
    }
  },

  submitDirection(direction) {
    if (examination.submitTest(this, direction)) {
      this.setState({selected: ":)"});
    } else {
      this.setState({selected: ":("});      
    }
  },

  restartCheck() {
    id = States.findOne({user: this.props.user})._id;
    States.update(id, {$set: {selected: false, direction: _.random(0,3)}});
  },

  render() {
    var current_status;
    if (this.data.status) {
      current_status = (
        <div className="main">
          <div>Current size: {this.data.status.size}</div>
          <div className="directions">
            <a onClick={this.submitDirection.bind(this, 0)}><img src="/1.png" /></a>
            <a onClick={this.submitDirection.bind(this, 1)}><img src="/2.png" /></a>
            <a onClick={this.submitDirection.bind(this, 2)}><img src="/3.png" /></a>
            <a onClick={this.submitDirection.bind(this, 3)}><img src="/0.png" /></a>
          </div>

          <div className="selection-result">
            <h2>{this.state.selected}</h2>
            <button onClick={this.restartCheck}>Restart</button>
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
