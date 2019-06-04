var cnt = 0

function next(){

    cnt ++

    if (cnt==1) {
        $("#graph1").toggleClass("hidden")
        $("#graph2").removeClass("hidden")
    }

}

// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['dk', 491],
    ['fo', 0],
    ['hr', 79],
    ['nl', 782],
    ['ee', 37],
    ['bg', 331],
    ['es', 377],
    ['it', 1228],
    ['sm', 0],
    ['va', 0],
    ['tr', 82],
    ['mt', 0],
    ['fr', 1314],
    ['no', 537],
    ['de', 1211],
    ['ie', 24],
    ['ua', 148],
    ['fi', 451],
    ['se', 1021],
    ['ru', 638],
    ['gb', 679],
    ['cy', 0],
    ['pt', 31],
    ['gr', 145],
    ['lt', 50],
    ['si', 21],
    ['ba', 0],
    ['mc', 0],
    ['al', 0],
    ['cnm', 0],
    ['nc', 0],
    ['rs', 14],
    ['ro', 624],
    ['me', 0],
    ['li', 0],
    ['at', 146],
    ['sk', 29],
    ['hu', 1053],
    ['ad', 0],
    ['lu', 2],
    ['ch', 376],
    ['be', 408],
    ['kv', 0],
    ['pl', 499],
    ['mk', 1],
    ['lv', 17],
    ['by', 46],
    ['is', 17],
    ['md', 0],
    ['cz', 41]
];

$( document ).ready(function() {

    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: 'custom/europe'
        },

        title: {
            text: 'Europe'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})



