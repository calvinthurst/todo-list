import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";



function _drawWeather() {
  let weather = appState.weathers
  setHTML('weather-info', weather.WeatherTemplate)
}



export class WeatherController {
  constructor() {
    console.log('weather contoller connected');
    this.getWeather()
    appState.on('weathers', _drawWeather)
  }


  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error)
      console.error(error.message)
    }
  }

  changeTemp() {
    weatherService.changeTemp()
  }
}