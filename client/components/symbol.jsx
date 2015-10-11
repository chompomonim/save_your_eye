SymbolComponent = React.createClass({
  mixins: [ReactMeteorData],

  getDefaultProps: function() {
    return {
          size: 220,
          fill: 'currentcolor'
        }
  },

  getMeteorData() {
    return {
      exam: examination.getSession(this.props.user)
    }
  },

  render() {
    var size = this.props.size
    var fill = this.props.fill

    r = this.data.exam.size;
    a = this.data.exam.direction * 90

    var viewBox = [0, 0, size, size].join(' ')
    var center = _(this.props).pick("cx","cy")
    var outterCircle = _({r: r}).extend(center);
    var innerCircle = _({r: r * 0.54}).extend(center);
    var space = {
      x: center.cx+r*0.30,
      y: center.cy-r*0.22,
      width: r*0.81,
      height: r*0.45
    };
    var rotate = "rotate("+a+", 100, 100)";
    return (
      <div className="container" style={{"paddingTop": "100px"}}>
        <svg xmlns="http://www.w3.org/svg/2000"
          viewBox={viewBox}
          width={size}
          height={size}
          fill={fill}
          style={{display: "block", margin: "0 auto"}} >
          <g transform={rotate}>
            <circle {...outterCircle} fill="black"/>
            <circle {...innerCircle} fill="white"/>
            <rect {...space} fill="white"/>
          </g>
        </svg>
      </div>
    )
}
});
