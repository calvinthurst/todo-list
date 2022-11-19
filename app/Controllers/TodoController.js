import { appState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawTodos() {
  let todo = appState.todos
  let template = ''
  todo.forEach(t => template += t.TodoListTemplate)
  setHTML('todo-list', template)
}

function _drawTotal() {
  let todo = appState.todos
  let completedTodo = todo.filter(t => t.completed == true)
  setText('todo-count', `${completedTodo.length}/${todo.length}`)
}


export class TodoController {
  constructor() {
    console.log('todoController connected', appState.todos);
    appState.on('todos', _drawTodos)
    appState.on('todos', _drawTotal)
    this.getTodos()

  }

  async getTodos() {
    try {
      await todoService.getTodos()
    } catch (error) {
      Pop.error(error)
      console.error(error.message);
    }
  }

  async addTodo() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      console.log(formData)
      form.reset()
      await todoService.addTodo(formData)
    } catch (error) {
      Pop.error(error)
      console.error(error.message);
    }
  }

  async todoCompleted(id) {
    try {
      await todoService.todoCompleted(id)
    } catch (error) {
      Pop.error(error)
      console.error(error.message);
    }
  }

  async deleteTodo(id) {
    try {
      if (await Pop.confirm()) {
        await todoService.deleteTodo(id)
      }
    } catch (error) {
      Pop.error(error)
      console.error(error.message);
    }
  }
}