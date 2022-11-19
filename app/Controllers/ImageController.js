import { appState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function _drawBackgound() {
  let img = appState.image
  document.querySelector('body').style.backgroundImage = `url(${img.largeImgUrl})`
}
function _drawAuthor() {
  let authors = appState.image
  setHTML('image-by', authors.author)
}



export class ImageContoller {
  constructor() {
    // console.log('controller connected');
    this.getImg()
    appState.on('image', _drawBackgound)
    appState.on('image', _drawAuthor)
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