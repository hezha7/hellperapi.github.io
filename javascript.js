var map;
var id = 0;
var teams = "a";
var money_symbol = "USD";
var countryname = "";
var longitude;
var latitude;
var buttons = false;
var map_icon = document.querySelector('.map_icon').value;
function loadMapScenario() {
    var a = true;
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
    var layer = new Microsoft.Maps.Layer();
    layer.add(pushpin);
    map.layers.insert(layer);
    Microsoft.Maps.Events.addHandler(map, 'mousedown', function (ll) {


        var pushpin1 = new Microsoft.Maps.Pushpin(ll.location,
            {
                icon: map_icon
            }
        );
        var layer1 = new Microsoft.Maps.Layer();
        layer1.add(pushpin1);
        map.layers.insert(layer1);
        latitude = ll.location.latitude;
        longitude = ll.location.longitude;
        if (a) {


            if ((parseInt(ll.location.latitude) < -11 && parseInt(ll.location.latitude) > -38) && (parseInt(ll.location.longitude) < 154 && parseInt(ll.location.longitude) > 114)) {
                id = 15;
                teams = "Australia Teams";
                money_symbol = "AUD";
                countryname = "Australia";
                buttons = true;
            }
            else if ((parseInt(ll.location.latitude) < 49 && parseInt(ll.location.latitude) > 29) && (parseInt(ll.location.longitude) < -70 && parseInt(ll.location.longitude) > -125)) {
                id = 125;
                teams = "USA Teams";
                money_symbol = "USD";
                countryname = "United States";
                buttons = true;
            }
            else if ((parseInt(ll.location.latitude) < 51 && parseInt(ll.location.latitude) > 42) && (parseInt(ll.location.longitude) < 8 && parseInt(ll.location.longitude) > -5)) {
                id = 46;
                teams = "France Teams";
                money_symbol = "EUR";
                countryname = "France";
                buttons = true;
            }
            else if ((parseInt(ll.location.latitude) < 60 && parseInt(ll.location.latitude) > 50) && (parseInt(ll.location.longitude) < 2 && parseInt(ll.location.longitude) > -5)) {
                id = 42;
                teams = "United kingdom Teams";
                money_symbol = "GBP";
                countryname = "United kingdom";
                buttons = true;
            }
            else if ((parseInt(ll.location.latitude) < 44 && parseInt(ll.location.latitude) > 37) && (parseInt(ll.location.longitude) < 1 && parseInt(ll.location.longitude) > -9)) {
                id = 113;
                teams = "Spain Teams";
                money_symbol = "EUR";
                countryname = "Spain";
                buttons = true;
            }
            else if ((parseInt(ll.location.latitude) < 42 && parseInt(ll.location.latitude) > 37) && (parseInt(ll.location.longitude) < -6 && parseInt(ll.location.longitude) > -9)) {
                id = 98;
                teams = "Portugal Teams";
                money_symbol = "EUR";
                countryname = "Portugal";
                buttons = true;
            }
            else {
                buttons = false;
            }



            if (buttons) {
                const newbtn = document.createElement('button');
                const text = document.createTextNode("Football Teams");
                newbtn.addEventListener("click", function (e) {
                    footbal();
                }, false);
                document.body.appendChild(newbtn);
                newbtn.appendChild(text);



                const newbtn2 = document.createElement('button');
                const text2 = document.createTextNode("Rest countries");
                document.body.appendChild(newbtn2);
                newbtn2.addEventListener("click", function (e) {
                    rest();
                }, false);
                newbtn2.appendChild(text2);
            }


            const newbtn4 = document.createElement('button');
            const text4 = document.createTextNode("Weather");
            document.body.appendChild(newbtn4);
            newbtn4.appendChild(text4);
            newbtn4.addEventListener("click", function (e) {
                weather();
            }, false);
            a = false;
            localStorage.setItem("id", id);
            localStorage.setItem("teams", teams);
            localStorage.setItem("money", money_symbol);
            localStorage.setItem("name", countryname);
            localStorage.setItem("long", longitude);
            localStorage.setItem("lat", latitude);

        }
    });
}

function footbal() {
    window.open('footbal_teams.html', '_self');
}


function rest() {
    window.open('rest_countries.html', '_self');
}

function weather() {
    window.open('weather.html', '_self');
}


function seticon() {
    map_icon = document.querySelector('.map_icon').value;
    if(map_icon=="null") map_icon=null;
}