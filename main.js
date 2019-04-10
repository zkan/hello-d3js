var dataset = [25, 7, 5, 18, 11, 3, 7, 30, 9, 10]
var w = 500
var h = 200
var svg = d3.select("#some-bar-chart")
            .append("svg")
            .attr("width", w)
            .attr("height", h)

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
     return i * 21
   })
   .attr("y", function(d, i) {
     return h - (d * 4)
   })
   .attr("width", 20)
   .attr("height", function(d) {
     return d * 4
   })
   .attr("fill", function(d) {
     return "rgb(0, 0, " + (d * 30) + ")"
   })

// ---

var someData = ['a', 'b', 'c', 'd', 'e']
d3.select('body').selectAll('div')
  .data(someData)
  .enter()
  .append('div')
  .html('Wow')
  .append('span')
  .html('Even More Wow')
  .style('font-weight', '900')
