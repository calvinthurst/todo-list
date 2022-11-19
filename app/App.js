import { ClockController } from "./Controllers/ClockController.js";
import { ImageContoller } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  imageController = new ImageContoller()

  weatherController = new WeatherController()

  todoController = new TodoController()

  quoteController = new QuoteController()

  clockContoller = new ClockController()
}

window["app"] = new App();
