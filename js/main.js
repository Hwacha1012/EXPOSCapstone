

var data = ["Intro", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "Solutions", "How to Help", "Works Cited"];
var lightBlue =  '#D7525B';

//d3.select("#ranking-type").on("change", updateVisualization);

// var _data = [];
// Create a 'data' property under the window object
// to store the coffee chain data

/*
Object.defineProperty(window, 'data', {
    // data getter
    get() { return this._data; },
    // data setter
    set(value) {
        //console.log(_data);
        this._data = value;
        // update the visualization each time the data property is set by using the equal sign (e.g. data = [])
        updateVisualization()
        //updateVisualization2()
    }
});
*/
updateVisualization();




// Step 1: Define an SVG drawing area with our margin conventions. Append
// the drawing area to the div with id chart-area2
var padding = 20;
var height = window.innerHeight * 1.25;
var width = window.innerWidth;
var currentTransform = [width / 2, height / 2, height];
var end = [200, 200, 100];

console.log(width)
var margin = {top: 30, right: 30, left: 30, bottom: 50};
var svgWidth = width;
var svgHeight = height ;

svgDisplay = d3.select("#chart-area2").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


updateVisualization()

// Render visualization
function updateVisualization() {
    // survey = window.survey2;
    console.log(data);
    lines = d3.select("#chart-area2").select("svg").selectAll("line").data(data);
    lines.enter().append("line")
        .merge(lines)
        .style("stroke", lightBlue)
        .attr("x1", function(d, i){
            if (i==0 || i == 1){
                return (svgWidth/2)
            }
            else if (i==2 || i == 4){
                return (svgWidth/3)
            }
            else if (i==3 || i == 5){
                return (2 * svgWidth/3)
            }

        })
        .attr("y1", function(d, i){
            if (i==0 || i ==1){
                return (125)
            }
            else if (i==2 || i ==3){
                return (300)
            }
            else if (i==4 || i ==5){
                return (500)
            }
        })
        .attr("x2", function(d, i){
            if (i==0 || i== 2){
                return (svgWidth/3)
            }
            else if (i==1 || i ==3){
                return (2 * svgWidth/3)
            }
            else if (i==4 || i ==5){
                return (svgWidth/2)
            }
        })
        .attr("y2", function(d, i){
            if (i==0 || i == 1){
                return (300)
            }
            else if (i==2 || i == 3){
                return (500)
            }
            else if (i==4|| i == 5){
                return (675)
            }
        })
    lines.exit().remove()

    circles = d3.select("#chart-area2").select("svg").selectAll("circle").data(data);
    circles.enter().append("circle")
        .merge(circles)
        .attr("r", function(d, i){
            if (i==0 || i == 5){
                return 100;
            }
            //return 0;
            return 80;
        })
        .attr("fill", lightBlue)
        .attr("cx", function (d, i){
            if (i==0 || i == 5){
                return (svgWidth / 2);
            }
            else if (i == 1 || i == 3){
                return (svgWidth/3);
            }
            else if (i == 2 || i == 4){
                return (2* svgWidth/3);
            }
            else if (i==6){
                return width -100;
            }

        })
        .attr("cy", function (d, i){
            if (i==0){
                return 125;
            }
            else if (i==1 || i == 2){
                return 300;
            }
            else if (i==3 || i == 4){
                return 500;
            }
            else if (i==5){
                return 675;
            }
            else if (i==6){
                return height - 100;
            }
        })
        .on('click', function(d, i) {
            console.log("hi there")
            //trigger zoom in here
            transition();

        })


    const g = d3.select("#chart-area2").select("svg").select("g")

    g.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", function (d, i){
            if (i==0 || i == 5){
                return (svgWidth / 2);
            }
            else if (i == 1 || i == 3){
                return (svgWidth/3);
            }
            else if (i == 2 || i == 4){
                return (2* svgWidth/3);
            }
            else if (i==6){
                return width -100;
            }

        })
        .attr("cy", function (d, i){
            if (i==0){
                return 125;
            }
            else if (i==1 || i == 2){
                return 300;
            }
            else if (i==3 || i == 4){
                return 500;
            }
            else if (i==5){
                return 675;
            }
            else if (i==6){
                return height - 100;
            }
        })
        .attr("r", function(d, i){
            if (i==0 || i == 5){
                return 100;
            }
            //return 0;
            return 80;
        })
        //.attr("fill", (d, i) => d3.interpolateRainbow(i / 360))
/*
    function transition() {
        const d = data[Math.floor(Math.random() * data.length)];
        const i = d3.interpolateZoom(currentTransform, [...d, radius * 2 + 1]);

        g.transition()
            .delay(250)
            .duration(i.duration)
            .attrTween("transform", () => t => transform(currentTransform = i(t)))
            .on("end", transition);
    }

    function transform([x, y, r]) {
        return `
      translate(${width / 2}, ${height / 2})
      scale(${height / r})
      translate(${-x}, ${-y})
    `;
    }
*/
   // return svg.call(transition).node();


    //circles.exit().remove();
    //boxes = d3.select("#chart-area2").select("svg").selectAll("foreignObject").data(data);
    circles.enter().append("foreignObject")
        .merge(circles)
        .attr("height", function(d,i){
            if (i==0 || i==5){
                return 141;

            }
            return 113;
        })
        .attr("width", function(d,i){
            if (i==0 || i==5){
                return 141;
            }
            return 113;
        })
        .attr("x", function (d, i){
            if (i==0 || i == 5){
                return (svgWidth / 2) - 70;
            }
            else if (i == 1 || i == 3){
                return (svgWidth/3) - 55;
            }
            else if (i == 2 || i == 4){
                return (2* svgWidth/3) - 55;
            }
            else if (i==6){
                return width -155;
            }

        })
        .attr("y", function (d, i){
            if (i==0){
                return 125-padding;
            }
            else if (i==1){
                return 280 -padding;
            }
            else if (i==2){
                return 290-padding;
            }
            else if (i==3 || i == 4){
                return 500 -padding;
            }
            else if (i==5){
                return 675 -padding;
            }
            else if (i==6){
                return height - 110-padding;
            }
        })
        .attr("fill", "none")
        .style("pointer-events", "none")
        .append("xhtml:body")
        .attr("class", "textBox")
        .style("font", "18px 'Helvetica Neue'")
        .style("color", "#1F1717")
        .style("background-color", lightBlue)
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .html(function(d, i) {
            //return "hi";
            return d;

        })
    //boxes.exit().remove()
    circles.exit().remove();



}

/*
function transform([x, y, r]) {
    return `
      translate(${width / 2}, ${height / 2})
      scale(${height / r})
      translate(${-x}, ${-y})
    `;
}
*/

//console.log("here?")

