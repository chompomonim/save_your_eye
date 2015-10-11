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
    var status = this.data.status;
    var passed;
    if (direction === status.direction) {
      passed = true;
      status.size = status.size * 0.9;
      this.setState({selected: ":)"});
    } else {
      passed = false;
      status.size = (status.size <= 90) ? status.size / 0.9 : 100;
      // status.size = status.size / 0.9
      status.mistake++;
      this.setState({selected: ":("});
    }
    status.direction = _.random(0,3);
    States.update(status._id, status);
  },

  restartGame() {
    States.update(this.data.status._id, {$set: {mistake: 0, size: 100}});
  },

  render() {
    var current_status;
    var restart_button;
    if (this.data.status && this.data.status.mistake > 2) {
      restart_button = <button onClick={this.restartGame}>Restart</button>
    }
    if (this.data.status) {
      current_status = (
        <div className="main">
          <div className="directions">
            <a onClick={this.submitDirection.bind(this, 2)}><img src="/2.png" /></a>
            <a onClick={this.submitDirection.bind(this, 0)}><img src="/0.png" /></a>
            <a onClick={this.submitDirection.bind(this, 1)}><img src="/1.png" /></a>
            <a onClick={this.submitDirection.bind(this, 3)}><img src="/3.png" /></a>
          </div>

          <div className="result">
            <Lifes deaths={this.data.status.mistake} />
            <div className="selection-status">{this.state.selected}</div>
            {restart_button}
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
