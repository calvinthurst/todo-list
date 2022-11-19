
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {


  /** @type {import('./Models/ImageModel.js').Image|null} */

  image = null

  /** @type {import('./Models/TodoModel.js').Todo[]} */

  todos = []

  /** @type {import('./Models/QuoteModel.js').Quote|null} */
  quote = null
  /** @type {import('./Models/WeatherModel.js').Weather|null} */
  weathers = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
