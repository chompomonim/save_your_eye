SymbolComponent = React.createClass({

  getDefaultProps: function() {
    return {
          size: 220,
          fill: 'currentcolor'
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
