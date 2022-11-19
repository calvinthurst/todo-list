

export class Todo {
  constructor(data) {
    this.completed = data.completed || false
    this.description = data.description
    this.user = data.user
    this.id = data.id
  }


  get TodoListTemplate() {
    return `
    <form class="col-1">
    <input class=" form-check-input me-1" type="checkbox" name="completed" ${this.computeCheck}  id="completed" onchange="app.todoController.todoCompleted('${this.id}')">
    </form>
      <p class="col-9">${this.description}</p>
      <div class="col-2">
    <button class="btn m-0 btn-outline-light" onclick="app.todoController.deleteTodo('${this.id}')"><i class="mdi mdi-trash-can-outline"></i></button>
    </div>
    `
  }

  get computeCheck() {
    if (this.completed == true) {
      return 'checked'
    } else {
      return ''
    }
  }
}