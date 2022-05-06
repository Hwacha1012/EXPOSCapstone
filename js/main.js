

var data = ["Introduction", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "Solutions", "How to Help", "Works Cited"];
var lightBlue =  '#9370DB';
radius = 50
step = 12
selectedBox = -1;
var textData = ["Trans People and the Prison System"];
var colors = ["#55CDFC", "#F7A8B8", "#FFFFFF", "#F7A8B8", "#55CDFC"];

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
var zoom0= [width /2, 135, 250]
var zoom1 = [width/3, 310, 200]
var zoom2 = [2* width/3, 310, 200]
var zoom3 = [width/3, 510, 200]
var zoom4 = [2*width/3, 510, 200]
var zoom5 = [width/2, 685, 250]
var zoom6 = [width/2, height/2, 200]
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

    g.selectAll("rect").data(colors).enter().append("rect")
        .attr("x", 0)
        .attr("y", function (d, i){
            return (i * height)/5
        })
        .attr("width", width)
        .attr("height", height/5)
        .attr("fill", function (d){
            return d
        });


    /*
        g.selectAll("rect").data(colors).enter().append("rect")
            .attr("x", function (d, i){
                return (i * width)/5
            })
            .attr("y", 0)
            .attr("width", width/5)
            .attr("height", height)
            .attr("fill", function (d){
                return d
            });


     */
    g.selectAll("text").data(textData).enter().append("text")
        .text(function (d){
            return d;
        })
        .attr("x", width/2 - 280)
        .attr("y", 40);


    g.selectAll("line").data(data).enter().append("line")
        .style("stroke", lightBlue)
        .style("stroke-width", "15px")
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
                return (155)
            } else if (i == 2 || i == 3) {
                return (330)
            } else if (i == 4 || i == 5) {
                return (530)
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
                return (330)
            } else if (i == 2 || i == 3) {
                return (530)
            } else if (i == 4 || i == 5) {
                return (705)
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
                return width/2;
            }

        })
        .attr("cy", function (d, i) {
            if (i == 0) {
                return 155;
            } else if (i == 1 || i == 2) {
                return 330;
            } else if (i == 3 || i == 4) {
                return 530;
            } else if (i == 5) {
                return 705;
            } else if (i == 6) {
                return height/2;
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
            else if (selectedBox == 1){
                data = ["Introduction", "The current system of assigning people to correctional facilities present in many states uses sex, rather than gender. As a result, the vast majority of imprisoned trans people are held in prisons with prisoners of another gender (Sosin). Subsequently, imprisoned trans people often face harassment and abuse from prison guards and other prisoners (Rosenberg and Oswin 1276; Hattery and Smith 150; Delaney 2-4). In addition, imprisoned trans people are frequently unable to present as their gender, as they are frequently forced to wear certain clothing, maintain certain grooming standards, or act in a particular manner (Rosenberg and Oswin 1276-1278; Stanley and Smith 168).", "Access to Healthcare", "Solutions", "Solutions", "How to Help", "Works Cited"];
            }
            else if (selectedBox == 2){
                data = ["Introduction", "Gender-Aligned Prisons", "Most imprisoned trans people do not have access to hormones, which “alleviate depression, increase self-confidence, stabilize emotions, and decrease feelings of isolation,” along with providing feminizing/masculinizing effects (Rosenberg and Oswin 1277; Hattery and Smith 152). This is because the healthcare approach used by the majority of prisons and jails is the “freeze-frame” approach, which provides prisoners with the same dosage of medications they were prescribed prior to incarceration (Hattery and Smith 152). As a result, trans people are unable to adjust their doses to match the needs of their transitions or lack access to hormones altogether, if they had used black market hormones or not yet received a prescription before being incarcerated.", "Solutions", "Solutions", "How to Help", "Works Cited"];
            }
            else if (selectedBox == 3){
                data = ["Introduction", "Gender-Aligned Prisons", "Access to Healthcare", "A few states have already have legislation which places trans people in correctional facilities that match their gender (Connecticut State; Massachusetts State; California State). Similar laws could be passed in other states and at the federal level to make sure trans people are placed in the right prisons and jails, alongside policies that foster an empathetic, more welcoming environment within prisons, improving the lives of trans prisoners while simultaneously failing to encourage the construction of new correctional facilities specifically for trans people.", "Solutions", "How to Help", "Works Cited"];
            }
            else if (selectedBox == 4){
                data = ["Introduction", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "To give trans prisoners access to hormones, a new system of medical care must be adopted in prisons and jails. This system could be modeled off the preexisting system of informed consent for trans health care available to the public in the U.S. Through informed consent, patients are allowed to make their own informed decision to begin a medical procedure (in this case, hormone therapy), without the need for a formal diagnosis. By proposing and passing legislation that employs informed consent for trans health care within correctional facilities, states can improve the lives of some of their most marginalized prisoners.", "How to Help", "Works Cited"];
            }
            else if (selectedBox == 5){
                data = ["Introduction", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "Solutions", "You can help by advocating for legislation (and supporting politicians that endorse said legislation) which addresses issues faced by trans prisoners or improves the lives of trans people outside of correctional facilities. You can also support organizations which help imprisoned and formerly imprisoned LGBTQ+ people, such as Black and Pink, through volunteering, donating, or participating in programs like penpal programs.", "Works Cited"];
            }
            /*
            else if (selectedBox == 6){
                data = ["Introduction", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "Solutions", "How to Help", "California State, Legislature. Senate Bill 132. California State Legislature, 26 Sep. 2020, https://leginfo.legislature.ca.gov/faces/billTextClient. xhtml?bill_id=201920200SB132.  \n" +
                "Connecticut State, Legislature. Senate Bill 13. Connecticut State Legislature, 14 May 2018.\n" +
                "Delaney, Ebony, “Safety and Security.” American Prison Writing Archive at Hamilton College, 15 June 2018, https://apw.dhinitiative.org/islandora/object/apw%3A12352092?solr_nav%5Bid%5D=86ba4c6ba9309d82e31b&solr_nav%5Bpage%5D=1&solr_nav%5Boffset%5D=0, Accessed 8 Apr. 2022. \n" +
                "Hattery, Angela, and Earl Smith. “Policing Trans Bodies.” Policing Black Bodies: How Black Lives Are Surveilled and How to Work for Change. Rowman & Littlefield, 2018.\n" +
                "Massachusetts State, Legislature. Massachusetts General Law 127, Section 32A. Massachusetts State Legislature, 31 Dec. 2018, https://www.mass.gov/info-details/massachusetts-law-about-gender-identity-or-expression. \n" +
                "Sosin, Kate. “Transgender women are nearly always incarcerated with men. That’s putting many in danger.” NBC News. 26 Feb. 2020, https://www.nbcnews.com/feature/nbc-out/transgender-women-are-nearly-always-incarcerated-men-s-putting-many-n1142436, Accessed 13 Apr. 2022.\n" +
                "Stanley, Eric A., and Nat Smith. Captive Genders: Trans Embodiment and the Prison Industrial Complex. Expanded second edition., AK Press, 2015.\n"];
            }


             */

            else if (selectedBox == 6){
                data = ["Introduction", "Gender-Aligned Prisons", "Access to Healthcare", "Solutions", "Solutions", "How to Help", "California State, Legislature. Senate Bill 132. California State Legislature, 26 Sep. 2020. \n" +
                "Connecticut State, Legislature. Senate Bill 13. Connecticut State Legislature, 14 May 2018.\n" +
                "Delaney, Ebony, “Safety and Security.” American Prison Writing Archive at Hamilton College, 15 June 2018, Accessed 8 Apr. 2022. \n" +
                "Hattery, Angela, and Earl Smith. “Policing Trans Bodies.” Policing Black Bodies: How Black Lives Are Surveilled and How to Work for Change. Rowman & Littlefield, 2018.\n" +
                "Massachusetts State, Legislature. Massachusetts General Law 127, Section 32A. Massachusetts State Legislature, 31 Dec. 2018. \n" +
                "Sosin, Kate. “Transgender women are nearly always incarcerated with men. That’s putting many in danger.” NBC News. 26 Feb. 2020, Accessed 13 Apr. 2022.\n" +
                "Stanley, Eric A., and Nat Smith. Captive Genders: Trans Embodiment and the Prison Industrial Complex. Expanded second edition., AK Press, 2015.\n"];
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
                    return width/2 - 55;
                }

            })
            .attr("y", function (d, i) {
                if (selectedBox == i){
                    //if box to focus
                    if (i == 0) {
                        return 100 - padding;
                    } else if (i == 1) {
                        return 290 - padding;
                    } else if (i == 2) {
                        return 290 - padding;
                    } else if (i == 3){
                        return 490 - padding;
                    } else if (i == 4) {
                        return 490 - padding;
                    } else if (i == 5) {
                        return 655 - padding;
                    } else if (i == 6) {
                        return (height/2)- 38- padding;
                    }
                }
                else{
                    if (i == 0) {
                        return 155 - padding;
                    } else if (i == 1) {
                        return 310 - padding;
                    } else if (i == 2) {
                        return 320 - padding;
                    } else if (i == 3 || i == 4) {
                        return 530 - padding;
                    } else if (i == 5) {
                        return 705 - padding;
                    } else if (i == 6) {
                        return (height/2)- 12- padding;
                    }
                }

            })
            .attr("fill", "none")
            .style("pointer-events", "none")
            .append("xhtml:body")
            .attr("class", "textBox")
            .style("font", function(d,i){
                if (selectedBox == i){
                    if (selectedBox == 1){
                        return "5px 'Lato'"
                    }
                    else if (selectedBox == 2){
                        return "4.7px 'Lato'"
                    }
                    else if (selectedBox == 3){
                        return "5.4px 'Lato'"
                    }
                    else if (selectedBox == 4){
                        return "5.2px 'Lato'"
                    }
                    else if (selectedBox == 5){
                        return "7.7px 'Lato'"
                    }
                    else if(selectedBox == 6){
                        return "4px 'Lato'"
                    }

                    return "8px 'Lato'"
                }
                return "20px 'Lato'"
            })
            .style("color", "#FFFFF0")
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

/*
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
 */

