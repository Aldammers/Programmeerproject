function Worldmap(mapData2, year, category){

    // select data of chosen year and category and store in usuable structure
    var data = mapData2[year][category];
    var dataset = prepareMapData(data, category);

    // create datamap
    map = new Datamap({
        element: document.getElementById('container1'),

        scope: 'world',
    //    geographyConfig: {
          //  borderColor: 'rgba(255,255,255,0.3)'
     //  },
        fills: {
            A:  '#b3c9db',
            B:  '#8daec9',
            C:  '#6693b7',
            D:  '#4179a5',
            E:  '#3a6c94',
            F:  '#2d5473',
            defaultFill: '#bdbdbd'
        },
   
        geographyConfig: {
            borderWidth: 0.5,
            borderOpacity: 1,
            hideAntarctica: true,
            borderColor: '#FDFDFD',
            highlightFillColor: '#FC8D59',
            highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
            highlightBorderWidth: 1,
            highlightBorderOpacity: 1,           
            popupTemplate: function(geography, data) {

                // show tooltip with country and gdp or happiness data
                if (category == 'military') {
                    return '<div class="hoverinfo"><strong>' +
                       geography.properties.name + ': ' +
                       parseFloat(data['category']).toFixed(2) + '</strong>%</div>';
                }
                
                if (data['category'] == 'unknown') {
                    return '<div class="hoverinfo"><strong>' +
                        geography.properties.name + ': unknown</strong></div>';
                }
            },
        },
       data: dataset
    });

    // draw legend
 drawLegend(category);
}

function drawLegend(category) {
     if (category == 'military') {
        map.legend({
            legendTitle: 'Military spenditure from 2008 till 2016',
            defaultFillName: 'Classified Data',
            labels: {
                A: '< 1%',
                B: '1 - 2%',
                C: '2- 3%',
                D: '3 - 4%',
                E: '4 - 5%',
                F: '> 5%'
            }
        });
    }
}
function prepareMapData(data, category) {

    // create dictionary usable for datamaps
    var dataset = {};

    // fill dataset in appropriate format
    Object.keys(data).forEach(function(item) {

        var value = data[item]

        if (category == 'military') {

            if (value == 'unknown') {
                fillColor = 'default-fill';
            } else if (value < 1) {
                fillColor = 'A';
            } else if (value < 2) {
                fillColor = 'B';
            } else if (value < 3) {
                fillColor = 'C';
            } else if (value < 4) {
                fillColor = 'D';
            } else if (value < 5) {
                fillColor = 'E';
            } else if (value >= 5) {
                fillColor = 'F';
            }
        }
        dataset[item] = {category: value, fillKey: fillColor};

    });

    return dataset;
}

$(function() {
    var el, newPoint, newPlace, offset;

    // Select all range inputs, watch for change
    $('input[type="range"]').change(function() {

        // Cache this for efficiency
        var el = $(this);

        // Measure width of range input
        var width = el.width();

        // Figure out placement percentage between left and right of input
        var newPoint = (el.val() - el.attr('min')) / (el.attr('max') - el.attr('min'));

        // Janky value to get pointer to line up better
        var offset = 11;

        // Prevent bubble from going beyond left or right (unsupported browsers)
        if (newPoint < 0) { newPlace = 0; }
        else if (newPoint > 1) { newPlace = width; }
        else { newPlace = width * newPoint + offset; offset -= newPoint; }

        // Move bubble
        el.next('output')
            .css({
                left: newPlace,
                marginLeft: offset + '%'
            })
            .text(el.val());
    })
    // Fake a change to position bubble at page load
    .trigger('change');
});
