// global variables
var prevValue;
var slider;

// default settings
var currYear = '2008';
var pieYear = '2015';
var currCategory = 'military';
var currCountry = 'NLD';

// global variables
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
var margin = {top: 50, right: 30, bottom: 30, left: 40};

window.onload = function(){

    // read in all datasets
    d3.queue()
        .defer(d3.json, 'data/mapData2.json')
        .await(ready);

   // when datasets reading is ready, display data in visualisation
    function ready(error, mapData2) {
        if (error) throw window.alert('Sorry, something is wrong with the data');



        // draw all visualisations
        drawWorldmap(mapData2, currYear, currCategory);
 
        // redraw map after chosen category
        d3.selectAll('.btn.btn-default.map')
            .on('click', function() {

                // change color of selected button and remove all visualisations
                buttonColor(this);
                d3.select('.datamap').remove();
                d3.select('.datamaps-legend').remove();
             //   d3.selectAll('.piechart').remove();

                // store the selected category by the user
                var indexCategory = this.getAttribute('value');
                currCategory = categories[indexCategory];

                // redraw all the visualizations
                drawWorldmap(mapData2, Year, currCategory);

            });

    };

    // default button color
    d3.selectAll('.btn.btn-default').style('background-color', 'rgb(240, 240, 240');
    d3.selectAll('.btn.btn-default.start').style('background-color', 'rgb(189, 189, 189');
};
