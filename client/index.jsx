WelcomeComponent = React.createClass({
  createUser(event) {
    event.preventDefault();
    var text = React.findDOMNode(this.refs.userName).value.trim()
    FlowRouter.go('/exam/'+text);
  },

  render() {
    return <div className="main">
      <h1>Save you eye!</h1>

      <form className="new-user" onSubmit={this.createUser}>
        <input type="text" ref="userName" placeholder="Enter your name" />
      </form>
    </div>
  }
});
