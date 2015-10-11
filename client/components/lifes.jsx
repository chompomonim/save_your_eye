Lifes = React.createClass({
  getDefaultProps: function() {
    return {
          size: 220,
          fill: 'currentcolor',
          r: 100,
          deaths: 0
        }
  },

  render() {
    var size = this.props.size
    var fill = this.props.fill
    var deaths = this.props.deaths < 3 ? this.props.deaths : 2
    lifes = [];
    for (i=0; i < 3; i++) {
      cx = 40+i*65;
      dead = i<deaths;
      lifes.push(<Life size={30} cx={cx} dead={dead} />)
    }
    var viewBox = [0, 0, size, size].join(' ')
    return (
        <svg xmlns="http://www.w3.org/svg/2000"
          viewBox={viewBox}
          width={size}
          height={size}
          fill={fill}
          style={{display: "block", margin: "0 auto"}} >
          {lifes}
        </svg>
    )
  }
});

Life = React.createClass({
  getDefaultProps: function() {
    return {
      fill: 'currentcolor',
      r: 100,
      cx: 100,
      cy: 100
    }
  },

  render() {
    var r = this.props.size
    var fill = this.props.fill
    var center = _(this.props).pick("cx","cy")
    var outterCircle = _({r: r}).extend(center);
    var innerCircle = _({r: r * 0.54}).extend(center);
    if (this.props.dead) {
      return <circle {...outterCircle} fill="red"/>
    } else {
      return (
        <g>
          <circle {...outterCircle} fill="black"/>
          <circle {...innerCircle} fill="white"/>
        </g>
      )
    }
  }
});
