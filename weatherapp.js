let cityname = document.getElementById("cityname");

function test() {
    let options = {
        method: "GET"
    };
    let apikey = "e6c71aa25b1f12b47ce21f4734cc178b";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname.value + "&appid=" + apikey;
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
        });
}