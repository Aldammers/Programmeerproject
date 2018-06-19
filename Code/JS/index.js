/// global variables
var prevValue;
var slider;

// default settings
var currYear = '2008';
var pieYear = '2015';
var currCategory = 'military';
var currCountry = 'NLD';

// button and slider option-lists
var years;
var pieYears;
var categories;



// set margin, width and height
var margin = {top: 60, right: 40, bottom: 20, left: 50};

window.onload = function(){

    // read in all datasets
    d3.queue()
        .defer(d3.json, '../data/mapData2.json')
        .await(ready); 
        
   // when datasets reading is ready, display data in visualisation
    function ready(error, mapData2) {
        if (error) throw window.alert(error);
        
        Worldmap(mapData2, currYear, currCategory);
        years = Object.keys(mapData2);
        
        slider = document.getElementById('slider-years');
        slider.oninput = function() {

            // delete map and legend
            d3.select('.datamap').remove();
            d3.select('.datamaps-legend').remove();
            var newYear = slider.value;
            
            // draw all visualisations
            Worldmap(mapData2, newYear, currCategory);
        };
    };

    // default button color
    d3.selectAll('.btn.btn-default').style('background-color', 'rgb(240, 240, 240');
    d3.selectAll('.btn.btn-default.start').style('background-color', 'rgb(189, 189, 189');
};
