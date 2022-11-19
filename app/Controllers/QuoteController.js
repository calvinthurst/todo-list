import { appState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuote() {
  let quote = appState.quote
  setHTML("quoteArea", quote.quoteTemplate)
}


export class QuoteController {
  constructor() {
    console.log('quote controller connected');
    this.getQuote()
    appState.on('quote', _drawQuote)
  }

  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      Pop.error(error)
      console.error(error.message)
    }
  }

}