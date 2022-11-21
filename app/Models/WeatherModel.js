export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main
    this.weather = data.weather
    this.bool = true
  }

  get WeatherTemplate() {
    return `
    <h1>
    <h1 class="weather" onclick="app.weatherController.changeTemp()" id="temp">${this.computeWeather}</h1>
    <h4 class="weather">${this.weather[0].description}<h4>
    <h1 class="weather"><i class="opacity-100"><img src="https://openweathermap.org/img/wn/${this.weather[0].icon}.png" alt=""></i><h1>
    <h4>Boise ⁜</h4>
  </h1>
    `
  }


  get computeWeather() {
    if (this.bool == false) {
      return Math.floor(this.main.temp - 273.15) + '℃'
    } else {
      return Math.floor((this.main.temp - 273.15) * 1.8 + 32) + '℉'
    }
  }
}