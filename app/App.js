import { ImageContoller } from "./Controllers/ImageController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  imageController = new ImageContoller()

  weatherController = new WeatherController()

  todoController = new TodoController()
}

window["app"] = new App();
