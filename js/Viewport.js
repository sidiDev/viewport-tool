import Resizer from './Resizer.js'
import View from './View.js'


export default class Viewport {
    constructor(wrapperRef) {

        this.wrapperRef = wrapperRef        
        new View(this.wrapperRef)

        const resizer = this.wrapperRef.querySelector('.wrapper-container .resizer')
        const viewportIframe = this.wrapperRef.querySelector('.wrapper-container .viewport-iframe')
        
        new Resizer(resizer, viewportIframe)
    }
}