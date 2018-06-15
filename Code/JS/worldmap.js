






function drawWorldmap(mapData2, military, year, category){

    // select data of chosen year and category and store in usuable structure
    var data = mapData2[year][category];
    var dataset = prepareMapData(data, category);

    // create datamap
    map = new Datamap({
        element: document.getElementById('container1'),

        scope: 'world',
        geographyConfig: {
            borderColor: 'rgba(255,255,255,0.3)'
        },

        fills: {
            A:  '#b3c9db',
            B:  '#8daec9',
            C:  '#6693b7',
            D:  '#4179a5',
            E:  '#3a6c94',
            F:  '#2d5473',
            defaultFill: '#bdbdbd'
        }
    })
};    

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

    /*   if (category == 'happiness') {

            if (value == 'unknown') {
                fillColor = 'default-fill';
            } else if (value < 4) {
                fillColor = 'A';
            } else if (value < 5) {
                fillColor = 'B';
            } else if (value < 6) {
                fillColor = 'C';
            } else if (value < 7) {
                fillColor = 'D';
            } else if (value < 8) {
                fillColor = 'E';
            } else if (value >= 8) {
                fillColor = 'F';
            }
        }
        */
        dataset[item] = {category: value, fillKey: fillColor};

    });

    return dataset;
}
