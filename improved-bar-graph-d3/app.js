const data = [{label: "New MarkMail", value: 23845, link: "j-runFusionChartsLink-0"},
{label: "New Misc Docs", value: 11640, link: "j-runFusionChartsLink-1"},
{label: "Prizm Validation", value: 48, link: "j-runFusionChartsLink-2"},
{label: "MSG Files", value: 29, link: "j-runFusionChartsLink-3"},
{label: "Full URI", value: 22, link: "j-runFusionChartsLink-4"},
{label: "Prizm Font Test", value: 14, link: "j-runFusionChartsLink-5"},
{label: "New 400 Page Plus PDFs", value: 11, link: "j-runFusionChartsLink-6"}]
const dataValues = data.map(obj => obj.value)
const dataLabels = data.map(obj => obj.label)
const color = ['#afd8f8', '#f6bd0f', '#8bba00', '#ff8e46', '#008e8e', '#d64646', '#8e468e']
// Create SVG Element
var chart_width     =   336;
var chart_height    =   119;
var svg             =   d3.select( '#chart' )
    .append( 'svg' )
    .attr( 'width', chart_width )
    .attr( 'height', chart_height );

const x_scale = d3.scaleBand()
.domain(d3.range(dataValues.length))
.rangeRound([0, chart_width])
.paddingInner(0.23)

const y_scale = d3.scaleLinear()
.domain([
    0, d3.max(dataValues)
])
.range([ 0, chart_height])

// Bind Data and create bars
svg.selectAll( 'rect' )
    .data( dataValues )
    .enter()
    .append( 'rect' )
    .attr( 'x', function( d, i ){
        return x_scale(i)
    })
    .attr( 'y', function(d ){
        return chart_height - y_scale(d)
    })
    .attr( 'width', x_scale.bandwidth() )
    .attr( 'height', function( d ){
        return y_scale(d)
    })
    .attr( 'fill', (d, i) => {
        return color[i]
    } );

// Create Labels
svg.selectAll( 'text' )
    .data(data)
    .enter()
    .append( 'text' )
    .text(function( d ){
        return d.label;
    })
    .attr( 'x', function( d, i ){
        return x_scale(i) + x_scale.bandwidth() / 2
    })
    .attr( 'y', function(d ){
        // return chart_height - y_scale(d.value) + 15
        return chart_height + 15
    })
    .attr( 'font-size', 10 )
    .attr( 'fill', '#000' )
    .attr( 'text-anchor', 'middle' )
    // .selectAll('tspan')
    // .data(d => d.label.split(' '))
    // .enter()
    // .append('tspan')
    // .text((d, i) => d)
    // // .attr('x', 10)
    // .attr('dy', 10)