import { appState } from "../AppState.js";
import { Todo } from "../Models/TodoModel.js";
import { TodoApi } from "./AxiosService.js"



class TodoService {
  async deleteTodo(id) {
    let todo = appState.todos.find(i => i.id == id)
    const res = await TodoApi.delete(todo.id)
    appState.todos = appState.todos.filter(i => i.id != todo.id)
    console.log(appState.todos);
    console.log(res.data);
  }
  async todoCompleted(id) {
    let todo = appState.todos.find(i => i.id == id)
    todo.completed = !todo.completed
    const res = await TodoApi.put(id, todo)
    console.log(res.data);
    appState.emit('todos')
  }
  async addTodo(formData) {
    const res = await TodoApi.post('', formData)
    console.log(res.data);
    appState.todos = [...appState.todos, new Todo(res.data)]

  }
  async getTodos() {
    const res = await TodoApi.get()
    // console.log(res.data);
    appState.todos = res.data.map(t => new Todo(t))
    console.log(appState.todos)
  }

}
export const todoService = new TodoService()