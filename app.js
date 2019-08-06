const data = []
for (let i = 0; i < 20; i++) {
    let num = Math.floor(d3.randomUniform(1, 50)())
    data.push(num)
}

let chart_width = 800
let chart_height = 400
let bar_padding = 10
// create svg element
let svg = d3.select('#chart')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height)

// bind data and create bars
svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, index)=> {
        return index * (chart_width / data.length)
    })
    .attr('y', (d) => {
        console.log(d)
        return chart_height - d * 5
    })
    .attr('width', chart_width / data.length - bar_padding)
    .attr('height', (d) => {
        return d * 5
    })
    .attr('fill', '#7ED26D')