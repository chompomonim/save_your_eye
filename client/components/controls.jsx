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
    States.update(this.data.status._id, {$set: {mistake: 0}});
  },

  render() {
    var current_status;
    if (this.data.status) {
      current_status = (
        <div className="main">
          <div>Current size: {this.data.status.size}</div>
          <div>Mistakes: {this.data.status.mistake}</div>
          <div className="directions">
            <a onClick={this.submitDirection.bind(this, 0)}><img src="/0.png" /></a>
            <a onClick={this.submitDirection.bind(this, 1)}><img src="/1.png" /></a>
            <a onClick={this.submitDirection.bind(this, 2)}><img src="/2.png" /></a>
            <a onClick={this.submitDirection.bind(this, 3)}><img src="/3.png" /></a>
          </div>

          <div className="selection-result">
            {this.state.selected}
            <button onClick={this.restartGame}>Restart</button>
            <Lifes deaths={this.data.status.mistake} />
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
