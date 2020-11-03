class Weather {
  constructor(city, state) {
    this.apiKey = 'ce92abe373msh41055156cb7a69dp1fc44bjsnc2d484ebbcd1';
    this.city = city;
    this.state = state;
  }

  //fetch weather from api
  async getWeather() {
    const response = await fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "ce92abe373msh41055156cb7a69dp1fc44bjsnc2d484ebbcd1"
      }
    });

    const responseData = await response.json();

    return responseData.current_observation;
  }
  //change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}