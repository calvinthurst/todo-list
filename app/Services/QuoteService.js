import { appState } from "../AppState.js"
import { Quote } from "../Models/QuoteModel.js";
import { QuotesApi } from "./AxiosService.js"



class QuoteService {
  async getQuote() {
    const res = await QuotesApi.get()
    console.log(res.data);
    appState.quote = new Quote(res.data)
    console.log(appState.quote);
  }

}

export const quoteService = new QuoteService()