import Resizer from './Resizer.js'
import View from './View.js'


export default class Viewport {
    constructor(wrapperRef, code) {

        this.wrapperRef = wrapperRef
        this.code = code       
        new View(this.wrapperRef, this.code)

        const resizer = this.wrapperRef.querySelector('.wrapper-container .resizer')
        const viewportIframe = this.wrapperRef.querySelector('.wrapper-container .viewport-iframe')
        
        new Resizer(resizer, viewportIframe)
    }
}