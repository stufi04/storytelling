var country_global = null
var value_global = null

function showFinalPage(){

    $(".fourth_page").toggleClass("hidden")
    $(".final_page").removeClass("hidden")

    if (value_global < 1000) {
        $('#final_message').text("So if you ever get disheartened that " + country_global + " isn't winning as much or that it's sportists aren't good enough, relax - it's just the odds. Train hard and you can make it!");
    } else {
        $('#final_message').text("So just because " + country_global + " has been winning a lot, it doesn't necessarily mean the best sportists are born there. In order to succeed, you need to train just as hard as anybody!");
    }

}


function showSecondGraph(){

    $(".third_page").toggleClass("hidden")
    $(".fourth_page").removeClass("hidden")
    $('#graph2').load('charts/pop.html');
}

function showFirstGraph(){

    $(".second_page").toggleClass("hidden")
    $(".third_page").removeClass("hidden")

    $('#graph1').load('charts/gdp.html');

}

function showDetailedInfo(country, value) {
    $(".first_page").toggleClass("hidden")
    $(".second_page").removeClass("hidden")
    $('#greeting').text("So you are from " + country + ". How lovely!");
    $('#medals').text("Here is " + country + "'s detailed performance:");
    var medsPerCountry = getMedalsOfCountry(country)
    $('#gold').text(medsPerCountry.Gold)
    $('#silver').text(medsPerCountry.Silver)
    $('#bronze').text(medsPerCountry.Bronze)
    if (value<500) {
        $('#message').text(country + " is performing rather poorly compared to other European countries. Have you ever thought about why this might be so?");
    } else if (value<1000) {
        $('#message').text(country + " is performing worse than some European countries, but not that bad in general. Have you ever thought what factors might contribute to this?");
    } else {
        $('#message').text(country + " is one of the best performing European countries. Congrats! Have you ever thought about why this might be so?");
    }
    country_global = country
    value_global = value
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

var medalsPerCountryPerType = [{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Afghanistan"},{"total":1,"Bronze":0.0,"Gold":0.0,"Silver":1.0,"country":"Netherlands Antilles*"},{"total":14,"Bronze":8.0,"Gold":4.0,"Silver":2.0,"country":"Algeria"},{"total":239,"Bronze":88.0,"Gold":68.0,"Silver":83.0,"country":"Argentina"},{"total":9,"Bronze":7.0,"Gold":1.0,"Silver":1.0,"country":"Armenia"},{"total":1075,"Bronze":413.0,"Gold":293.0,"Silver":369.0,"country":"Australia"},{"total":146,"Bronze":44.0,"Gold":21.0,"Silver":81.0,"country":"Austria"},{"total":16,"Bronze":9.0,"Gold":4.0,"Silver":3.0,"country":"Azerbaijan"},{"total":23,"Bronze":5.0,"Gold":9.0,"Silver":9.0,"country":"Bahamas"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Barbados"},{"total":1,"Bronze":0.0,"Gold":1.0,"Silver":0.0,"country":"Burundi"},{"total":408,"Bronze":150.0,"Gold":91.0,"Silver":167.0,"country":"Belgium"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Bermuda*"},{"total":92,"Bronze":53.0,"Gold":14.0,"Silver":25.0,"country":"Belarus"},{"total":372,"Bronze":174.0,"Gold":59.0,"Silver":139.0,"country":"Brazil"},{"total":331,"Bronze":136.0,"Gold":53.0,"Silver":142.0,"country":"Bulgaria"},{"total":592,"Bronze":227.0,"Gold":154.0,"Silver":211.0,"country":"Canada"},{"total":33,"Bronze":21.0,"Gold":3.0,"Silver":9.0,"country":"Chile"},{"total":679,"Bronze":193.0,"Gold":234.0,"Silver":252.0,"country":"China"},{"total":1,"Bronze":0.0,"Gold":0.0,"Silver":1.0,"country":"Cote d\'Ivoire"},{"total":22,"Bronze":1.0,"Gold":20.0,"Silver":1.0,"country":"Cameroon"},{"total":11,"Bronze":7.0,"Gold":1.0,"Silver":3.0,"country":"Colombia"},{"total":4,"Bronze":2.0,"Gold":1.0,"Silver":1.0,"country":"Costa Rica"},{"total":79,"Bronze":18.0,"Gold":31.0,"Silver":30.0,"country":"Croatia"},{"total":395,"Bronze":109.0,"Gold":160.0,"Silver":126.0,"country":"Cuba"},{"total":41,"Bronze":13.0,"Gold":10.0,"Silver":18.0,"country":"Czech Republic"},{"total":491,"Bronze":152.0,"Gold":147.0,"Silver":192.0,"country":"Denmark"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Djibouti"},{"total":4,"Bronze":1.0,"Gold":2.0,"Silver":1.0,"country":"Dominican Republic"},{"total":2,"Bronze":0.0,"Gold":1.0,"Silver":1.0,"country":"Ecuador"},{"total":24,"Bronze":10.0,"Gold":7.0,"Silver":7.0,"country":"Egypt"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Eritrea"},{"total":377,"Bronze":92.0,"Gold":92.0,"Silver":193.0,"country":"Spain"},{"total":37,"Bronze":19.0,"Gold":9.0,"Silver":9.0,"country":"Estonia"},{"total":38,"Bronze":14.0,"Gold":18.0,"Silver":6.0,"country":"Ethiopia"},{"total":451,"Bronze":209.0,"Gold":124.0,"Silver":118.0,"country":"Finland"},{"total":1314,"Bronze":475.0,"Gold":378.0,"Silver":461.0,"country":"France"},{"total":1594,"Bronze":505.0,"Gold":498.0,"Silver":591.0,"country":"United Kingdom"},{"total":18,"Bronze":11.0,"Gold":5.0,"Silver":2.0,"country":"Georgia"},{"total":1211,"Bronze":454.0,"Gold":407.0,"Silver":350.0,"country":"Germany"},{"total":16,"Bronze":15.0,"Gold":0.0,"Silver":1.0,"country":"Ghana"},{"total":145,"Bronze":49.0,"Gold":34.0,"Silver":62.0,"country":"Greece"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Guyana"},{"total":8,"Bronze":7.0,"Gold":0.0,"Silver":1.0,"country":"Haiti"},{"total":3,"Bronze":0.0,"Gold":1.0,"Silver":2.0,"country":"Hong Kong*"},{"total":1053,"Bronze":345.0,"Gold":400.0,"Silver":308.0,"country":"Hungary"},{"total":35,"Bronze":12.0,"Gold":9.0,"Silver":14.0,"country":"Indonesia"},{"total":178,"Bronze":34.0,"Gold":128.0,"Silver":16.0,"country":"India"},{"total":48,"Bronze":22.0,"Gold":11.0,"Silver":15.0,"country":"Iran"},{"total":24,"Bronze":8.0,"Gold":8.0,"Silver":8.0,"country":"Ireland"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Iraq"},{"total":17,"Bronze":2.0,"Gold":0.0,"Silver":15.0,"country":"Iceland"},{"total":7,"Bronze":5.0,"Gold":1.0,"Silver":1.0,"country":"Israel"},{"total":1,"Bronze":0.0,"Gold":0.0,"Silver":1.0,"country":"Virgin Islands*"},{"total":1228,"Bronze":374.0,"Gold":460.0,"Silver":394.0,"country":"Italy"},{"total":102,"Bronze":39.0,"Gold":23.0,"Silver":40.0,"country":"Jamaica"},{"total":704,"Bronze":270.0,"Gold":206.0,"Silver":228.0,"country":"Japan"},{"total":39,"Bronze":14.0,"Gold":9.0,"Silver":16.0,"country":"Kazakhstan"},{"total":81,"Bronze":24.0,"Gold":26.0,"Silver":31.0,"country":"Kenya"},{"total":3,"Bronze":2.0,"Gold":0.0,"Silver":1.0,"country":"Kyrgyzstan"},{"total":466,"Bronze":135.0,"Gold":140.0,"Silver":191.0,"country":"Korea, South"},{"total":2,"Bronze":1.0,"Gold":0.0,"Silver":1.0,"country":"Saudi Arabia"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Kuwait"},{"total":17,"Bronze":4.0,"Gold":2.0,"Silver":11.0,"country":"Latvia"},{"total":4,"Bronze":2.0,"Gold":0.0,"Silver":2.0,"country":"Lebanon"},{"total":50,"Bronze":42.0,"Gold":4.0,"Silver":4.0,"country":"Lithuania"},{"total":2,"Bronze":0.0,"Gold":1.0,"Silver":1.0,"country":"Luxembourg"},{"total":21,"Bronze":10.0,"Gold":6.0,"Silver":5.0,"country":"Morocco"},{"total":6,"Bronze":3.0,"Gold":0.0,"Silver":3.0,"country":"Malaysia"},{"total":6,"Bronze":3.0,"Gold":0.0,"Silver":3.0,"country":"Moldova"},{"total":80,"Bronze":48.0,"Gold":14.0,"Silver":18.0,"country":"Mexico"},{"total":19,"Bronze":10.0,"Gold":2.0,"Silver":7.0,"country":"Mongolia"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Macedonia"},{"total":2,"Bronze":1.0,"Gold":1.0,"Silver":0.0,"country":"Mozambique"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Mauritius"},{"total":4,"Bronze":0.0,"Gold":0.0,"Silver":4.0,"country":"Namibia"},{"total":782,"Bronze":320.0,"Gold":212.0,"Silver":250.0,"country":"Netherlands"},{"total":84,"Bronze":27.0,"Gold":19.0,"Silver":38.0,"country":"Nigeria"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Niger"},{"total":537,"Bronze":144.0,"Gold":194.0,"Silver":199.0,"country":"Norway"},{"total":164,"Bronze":61.0,"Gold":76.0,"Silver":27.0,"country":"New Zealand"},{"total":121,"Bronze":34.0,"Gold":42.0,"Silver":45.0,"country":"Pakistan"},{"total":3,"Bronze":2.0,"Gold":1.0,"Silver":0.0,"country":"Panama"},{"total":17,"Bronze":0.0,"Gold":0.0,"Silver":17.0,"country":"Paraguay"},{"total":15,"Bronze":0.0,"Gold":1.0,"Silver":14.0,"country":"Peru"},{"total":9,"Bronze":7.0,"Gold":0.0,"Silver":2.0,"country":"Philippines"},{"total":499,"Bronze":223.0,"Gold":103.0,"Silver":173.0,"country":"Poland"},{"total":31,"Bronze":18.0,"Gold":4.0,"Silver":9.0,"country":"Portugal"},{"total":52,"Bronze":30.0,"Gold":10.0,"Silver":12.0,"country":"Korea, North"},{"total":6,"Bronze":5.0,"Gold":0.0,"Silver":1.0,"country":"Puerto Rico*"},{"total":2,"Bronze":2.0,"Gold":0.0,"Silver":0.0,"country":"Qatar"},{"total":97,"Bronze":36.0,"Gold":24.0,"Silver":37.0,"country":"South Africa"},{"total":638,"Bronze":240.0,"Gold":192.0,"Silver":206.0,"country":"Russia"},{"total":14,"Bronze":0.0,"Gold":0.0,"Silver":14.0,"country":"Serbia"},{"total":1,"Bronze":0.0,"Gold":0.0,"Silver":1.0,"country":"Senegal"},{"total":4,"Bronze":0.0,"Gold":0.0,"Silver":4.0,"country":"Singapore"},{"total":21,"Bronze":11.0,"Gold":4.0,"Silver":6.0,"country":"Slovenia"},{"total":2,"Bronze":0.0,"Gold":0.0,"Silver":2.0,"country":"Sri Lanka"},{"total":1,"Bronze":0.0,"Gold":0.0,"Silver":1.0,"country":"Sudan"},{"total":376,"Bronze":138.0,"Gold":73.0,"Silver":165.0,"country":"Switzerland"},{"total":2,"Bronze":1.0,"Gold":1.0,"Silver":0.0,"country":"Suriname"},{"total":29,"Bronze":8.0,"Gold":10.0,"Silver":11.0,"country":"Slovakia"},{"total":1021,"Bronze":325.0,"Gold":347.0,"Silver":349.0,"country":"Sweden"},{"total":3,"Bronze":1.0,"Gold":1.0,"Silver":1.0,"country":"Syria"},{"total":2,"Bronze":0.0,"Gold":0.0,"Silver":2.0,"country":"Tanzania"},{"total":1,"Bronze":0.0,"Gold":0.0,"Silver":1.0,"country":"Tonga"},{"total":21,"Bronze":10.0,"Gold":7.0,"Silver":4.0,"country":"Thailand"},{"total":2,"Bronze":1.0,"Gold":0.0,"Silver":1.0,"country":"Tajikistan"},{"total":1,"Bronze":1.0,"Gold":0.0,"Silver":0.0,"country":"Togo"},{"total":42,"Bronze":13.0,"Gold":2.0,"Silver":27.0,"country":"Taiwan"},{"total":20,"Bronze":11.0,"Gold":1.0,"Silver":8.0,"country":"Trinidad and Tobago"},{"total":7,"Bronze":3.0,"Gold":2.0,"Silver":2.0,"country":"Tunisia"},{"total":82,"Bronze":22.0,"Gold":37.0,"Silver":23.0,"country":"Turkey"},{"total":1,"Bronze":0.0,"Gold":1.0,"Silver":0.0,"country":"United Arab Emirates"},{"total":6,"Bronze":2.0,"Gold":1.0,"Silver":3.0,"country":"Uganda"},{"total":148,"Bronze":78.0,"Gold":32.0,"Silver":38.0,"country":"Ukraine"},{"total":76,"Bronze":30.0,"Gold":44.0,"Silver":2.0,"country":"Uruguay"},{"total":4335,"Bronze":1052.0,"Gold":2088.0,"Silver":1195.0,"country":"United States"},{"total":17,"Bronze":8.0,"Gold":4.0,"Silver":5.0,"country":"Uzbekistan"},{"total":11,"Bronze":8.0,"Gold":1.0,"Silver":2.0,"country":"Venezuela"},{"total":2,"Bronze":0.0,"Gold":0.0,"Silver":2.0,"country":"Vietnam"},{"total":2,"Bronze":1.0,"Gold":0.0,"Silver":1.0,"country":"Zambia"},{"total":23,"Bronze":1.0,"Gold":18.0,"Silver":4.0,"country":"Zimbabwe"}];
function getMedalsOfCountry(country) {
    return medalsPerCountryPerType.find(medalsPerCountryPerType => medalsPerCountryPerType.country === country);
}
// var medalsPerCountryPerType = JSON.parse(getFruit);
console.log(getMedalsOfCountry('Belgium'))


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

        plotOptions: {
            series: {
                point: {
                    events: {
                        click() {
                            let country = this.name
                            let value = this.value
                            showDetailedInfo(country, value)
                        }
                    }
                }
            }
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



