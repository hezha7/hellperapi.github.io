var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');

var ipute_currency_number = document.querySelector('.ipute_currency_number');
var ipute_currency_type = document.querySelector('.ipute_currency_type');
var ipute_currency_convert_to_type = document.querySelector('.ipute_currency_convert_to_type');
var button_currency = document.querySelector('.submit_currency');
const select = document.querySelectorAll(".currency");


button.addEventListener('click', function (name) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {

      var tempValue = data['main']['temp'] - 273;
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];

      main.innerHTML = nameValue;
      desc.innerHTML = "Description " + descValue;
      temp.innerHTML = "Temperature  " + parseInt(tempValue) + "&deg C";
      input.value = "";

    })

    .catch(err => alert("Wrong city name!"));
})


button_currency.addEventListener('click', function (name) {
  fetch('http://api.exchangeratesapi.io/v1/latest?access_key=61311427d3b32ec71e58848325541fe3&format=1&fbclid=IwAR0KI1sKcLfcBY66416F-6kWO7gmKbpr-AL70Xa46N1cadqRSDjoIwPEBjQ')
    .then(response => response.json())
    .then(data => {
      var Value_type = data['rates'][ipute_currency_type.value];
      var Value_to_type = data['rates'][ipute_currency_convert_to_type.value];
      var a = data['rates'];

      document.getElementById('exchange').innerHTML = parseInt((Value_to_type / Value_type) * ipute_currency_number.value);

    })

    .catch(err => alert("Wrong type!"));
})

function display_drop_down_type() {
  let b = new Array(
    "Choose the currency type",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTC",
    "BTN",
    "BWP",
    "BYN",
    "BYR",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LTL",
    "LVL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRO",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "STD",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VEF",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMK",
    "ZMW",
    "ZWL");
  var select = document.getElementById("select");
  for (var i = 0; i < b.length; i++) {
    var option = document.createElement("OPTION"),
      txt = document.createTextNode(b[i]);
    option.appendChild(txt);
    option.setAttribute("value", b[i]);
    select.insertBefore(option, select.lastChild);
  }
  var select2 = document.getElementById("select2");
  for (var i = 0; i < b.length; i++) {
    var option = document.createElement("OPTION"),
      txt = document.createTextNode(b[i]);
    option.appendChild(txt);
    option.setAttribute("value", b[i]);
    select2.insertBefore(option, select2.lastChild);
  }
}

