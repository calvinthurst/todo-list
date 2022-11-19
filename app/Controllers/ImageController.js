import { appState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";
import { Pop } from "../Utils/Pop.js";



function _drawBackgound() {
  let img = appState.image
  document.querySelector('body').style.backgroundImage = `url(${img.largeImgUrl})`
}




export class ImageContoller {
  constructor() {
    console.log('controller connected');
    this.getImg()
    appState.on('image', _drawBackgound)
  }

  async getImg() {
    try {
      await imageService.getImg()
    } catch (error) {
      Pop.error(error)
      console.log(error.message)
    }
  }
}