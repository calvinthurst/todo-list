import { appState } from "../AppState.js"
import { Weather } from "../Models/WeatherModel.js"
import { WeatherApi } from "./AxiosService.js"




class WeatherService {
  changeTemp() {
    appState.weathers.bool = !appState.weathers.bool
    appState.emit('weathers')
  }

  async getWeather() {
    const res = await WeatherApi.get()
    appState.weathers = new Weather(res.data)
    console.log(appState.weathers);

  }

}



export const weatherService = new WeatherService()