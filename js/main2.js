

var data = ["Introduction", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "Solutions", "How to Help", "Works Cited"];
var lightBlue =  '#D7525B';
radius = 50
step = 12
selectedBox = -1;

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





// Step 1: Define an SVG drawing area with our margin conventions. Append
// the drawing area to the div with id chart-area2
var padding = 20;
var height = window.innerHeight * 1.25;
var width = window.innerWidth;
//var height = window.innerHeight -90;

//var end = [200, 200, 100];

console.log(width)
var margin = {top: 30, right: 30, left: 30, bottom: 50};
var svgWidth = width;
var svgHeight = height;

var currentZoom = [width / 2, height / 2, height];
var zoomedOut = [width / 2, height / 2, height];
var zoom0= [width /2, 125, 250]
var zoom1 = [width/3, 300, 200]
var zoom2 = [2* width/3, 300, 200]
var zoom3 = [width/3, 500, 200]
var zoom4 = [2*width/3, 500, 200]
var zoom5 = [width/2, 675, 250]
var zoom6 = [width-100, height-100, 200]
/*
svgDisplay = d3.select("#chart-area2").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


 */

function updateVisual() {


    svgDisplay = d3.select("#chart-area2").append("svg").attr("viewBox", [0, 0, width, height])

    const g = svgDisplay.append("g")

    g.selectAll("line").data(data).enter().append("line")
        .style("stroke", lightBlue)
        .attr("x1", function (d, i) {
            if (i == 0 || i == 1) {
                return (svgWidth / 2)
            } else if (i == 2 || i == 4) {
                return (svgWidth / 3)
            } else if (i == 3 || i == 5) {
                return (2 * svgWidth / 3)
            }

        })
        .attr("y1", function (d, i) {
            if (i == 0 || i == 1) {
                return (125)
            } else if (i == 2 || i == 3) {
                return (300)
            } else if (i == 4 || i == 5) {
                return (500)
            }
        })
        .attr("x2", function (d, i) {
            if (i == 0 || i == 2) {
                return (svgWidth / 3)
            } else if (i == 1 || i == 3) {
                return (2 * svgWidth / 3)
            } else if (i == 4 || i == 5) {
                return (svgWidth / 2)
            }
        })
        .attr("y2", function (d, i) {
            if (i == 0 || i == 1) {
                return (300)
            } else if (i == 2 || i == 3) {
                return (500)
            } else if (i == 4 || i == 5) {
                return (675)
            }
        })


//circles = d3.select("#chart-area2").select("svg").selectAll("circle").data(data);
//circles.enter().append("circle")
    g.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("r", function (d, i) {
            if (i == 0 || i == 5) {
                return 100;
            }
            //return 0;
            return 80;
        })
        .attr("fill", lightBlue)
        .attr("cx", function (d, i) {
            if (i == 0 || i == 5) {
                return (svgWidth / 2);
            } else if (i == 1 || i == 3) {
                return (svgWidth / 3);
            } else if (i == 2 || i == 4) {
                return (2 * svgWidth / 3);
            } else if (i == 6) {
                return width - 100;
            }

        })
        .attr("cy", function (d, i) {
            if (i == 0) {
                return 125;
            } else if (i == 1 || i == 2) {
                return 300;
            } else if (i == 3 || i == 4) {
                return 500;
            } else if (i == 5) {
                return 675;
            } else if (i == 6) {
                return height - 100;
            }
        })
        .on('click', function (d, i) {
            //console.log("hi there")
            //trigger zoom in here
            //selectedBox = i;
            if (selectedBox != i) {
                selectedBox = i;
            } else {
                selectedBox = -1;
                data = ["Introduction", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "Solutions", "How to Help", "Works Cited"];
            }

            if (selectedBox == 0){
                data = ["While most analyses of the current prison system in the U.S. have focused around the impact of race and class on incarceration rates and the damages caused by mass incarceration, little attention has been paid to the suffering of trans people under our prison system. A significant portion of this suffering is due to the placement of trans prisoners in correctional facilities that do not align with their gender and limited access to healthcare within correctional facilities.", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "Solutions", "How to Help", "Works Cited"];
            }

            //data = ["1", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "Solutions", "How to Help", "Works Cited"];

            transition();
            drawText();
            //drawText();
            //updateVisual();
        })

    function transition() {
        //g.transition()

        //const d = data[Math.floor(Math.random() * data.length)];
        //const i = d3.interpolateZoom(currentTransform, [100, radius * 2 + 1]);

        //console.log(transform(currentTransform = i(t)))

        //interpolator = d3.interpolateZoom(currentTransform, end)

        if (selectedBox == -1) {
            interpolator = d3.interpolateZoom(currentZoom, zoomedOut)
            currentZoom = zoomedOut
        } else if (selectedBox == 0) {
            interpolator = d3.interpolateZoom(currentZoom, zoom0)
            currentZoom = zoom0
        } else if (selectedBox == 1) {
            interpolator = d3.interpolateZoom(currentZoom, zoom1)
            currentZoom = zoom1
        } else if (selectedBox == 2) {
            interpolator = d3.interpolateZoom(currentZoom, zoom2)
            currentZoom = zoom2
        } else if (selectedBox == 3) {
            interpolator = d3.interpolateZoom(currentZoom, zoom3)
            currentZoom = zoom3
        } else if (selectedBox == 4) {
            interpolator = d3.interpolateZoom(currentZoom, zoom4)
            currentZoom = zoom4
        } else if (selectedBox == 5) {
            interpolator = d3.interpolateZoom(currentZoom, zoom5)
            currentZoom = zoom5
        } else if (selectedBox == 6) {
            interpolator = d3.interpolateZoom(currentZoom, zoom6)
            currentZoom = zoom6
        }

        g.transition()
            .duration(1000)
            .attrTween("transform", () => transform);
        //removed .delay()
        //.attrTween("transform", () => t => transform(currentTransform = i(t)));
        //.on("end", transition);

    }

    function transform(t) {
        const view = interpolator(t);

        const k = Math.min(width, height) / view[2]; // scale
        const translate = [width / 2 - view[0] * k, height / 2 - view[1] * k]; // translate

        return `translate(${translate}) scale(${k})`;
    }


    function drawText() {

        //d3.selectAll(".textBox").remove();
    console.log("hi");
    console.log(data);
    g.selectAll("foreignObject").remove();
    g.selectAll("foreignObject")
        .data(data)
        .enter().append("foreignObject")
        .attr("height", function (d, i) {
            if (i == 0 || i == 5) {
                return 141;

            }
            return 113;
        })
        .attr("width", function (d, i) {
            if (i == 0 || i == 5) {
                return 141;
            }
            return 113;
        })
        .attr("x", function (d, i) {
            if (i == 0 || i == 5) {
                return (svgWidth / 2) - 70;
            } else if (i == 1 || i == 3) {
                return (svgWidth / 3) - 55;
            } else if (i == 2 || i == 4) {
                return (2 * svgWidth / 3) - 55;
            } else if (i == 6) {
                return width - 155;
            }

        })
        .attr("y", function (d, i) {
            if (i == 0) {
                return 125 - padding;
            } else if (i == 1) {
                return 280 - padding;
            } else if (i == 2) {
                return 290 - padding;
            } else if (i == 3 || i == 4) {
                return 500 - padding;
            } else if (i == 5) {
                return 675 - padding;
            } else if (i == 6) {
                return height - 110 - padding;
            }
        })
        .attr("fill", "none")
        .style("pointer-events", "none")
        .append("xhtml:body")
        .attr("class", "textBox")
        .style("font", function(d,i){
            if (selectedBox == i){
                return "12px 'Helvetica Neue'"
            }
            return "18px 'Helvetica Neue'"
        })
        .style("color", "#1F1717")
        .style("background-color", lightBlue)
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .html(function (d, i) {
            //return "hi";
            return d;

        })
    }
    drawText();

}
updateVisual();
//drawText();


