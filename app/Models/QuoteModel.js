export class Quote {
  constructor(data) {

    this.content = data.content
    this.author = data.author
    this.tags = data.tags[0]
  }

  get quoteTemplate() {
    return `
    <div class="col-5 offset-1 text-light text-center fixed-bottom my-5 ">
        <h4 id="quote" class="quote quote-shadow">"${this.content}"</h4>
        <h4 id="quote-author" class="quote-author quote-shadow">-${this.author}</h4>
      </div>
    `
  }
}