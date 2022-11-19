import { appState } from "../AppState.js"
import { ImgApi } from "./AxiosService.js"






class ImageService {
  async getImg() {
    const res = await ImgApi.get()
    appState.image = res.data
    console.log(appState.image);
    appState.emit('image')
  }

}

export const imageService = new ImageService()