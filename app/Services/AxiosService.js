export const WeatherApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 8000,
})

export const QuotesApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 8000,
})

export const ImgApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 8000,
})

export const TodoApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/calvin/todos',
  timeout: 8000,
})