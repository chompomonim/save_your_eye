SymbolComponent = React.createClass({
  getDefaultProps: function() {
    return {
          size: 220,
          fill: 'currentcolor',
          r: 100,
          a: 0,
          cx: 100,
          cy: 100
        }
  },

  render() {
    var size = this.props.size
    var fill = this.props.fill

    var viewBox = [0, 0, size, size].join(' ')
    var center = _(this.props).pick("cx","cy")
    var outterCircle = _({r: this.props.r}).extend(center);
    var innerCircle = _({r: this.props.r * 0.54}).extend(center);
    var space = {
      x: center.cx+this.props.r*0.30,
      y: center.cy-this.props.r*0.22,
      width: this.props.r*0.81,
      height: this.props.r*0.45
    };
    var rotate = "rotate("+this.props.a+", 100, 100)";
    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        viewBox={viewBox}
        width={size}
        height={size}
        fill={fill}>
        <g transform={rotate}>
          <circle {...outterCircle} fill="black"/>
          <circle {...innerCircle} fill="white"/>
          <rect {...space} fill="white"/>
        </g>
      </svg>
    )
  }
});

SymbolScreen = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      status: States.findOne({user: this.props.user})
    }
  },

  componentWillMount() {
    // Create user's status if there are no in database.
    if (!this.data.status) {
      States.insert({
        user: this.props.user,
        direction: _.random(0,3),
        size: 100,
        mistake: 0
      });
    }
  },

  getSize() {
    if (this.data.status) {
      return this.data.status.size;
    } else {
      return 100;
    }
  },

  getDirection() {
    if (this.data.status) {
      return this.data.status.direction;
    } else {
      return 0;
    }
  },

  render() {
    return (
      <div className="show-symbol">
        <SymbolComponent size={200}
                         r={this.getSize()}
                         a={this.getDirection()*90}
                         cx= {100} cy={100}  />
      </div>
    )
  }
})
