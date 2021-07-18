export default class Resizer {
    
    pressure = false

    constructor(resizer, viewportIframe) {
        this.viewport = document
        this.resizer = resizer
        this.viewportIframe = viewportIframe

        this.resizer.addEventListener('mouseup', (e) => this.mouseUp(e))
        this.resizer.addEventListener('mousedown', (e) => this.mouseDown(e))

        this.viewport.addEventListener('mousemove', (e) => this.mouseMove(e))
        this.viewport.addEventListener('mouseup', (e) => this.mouseUp(e))
    }

    handleEvent(e) {
        e.preventDefault()
    }

    mouseUp(e) {
        this.handleEvent(e)
        this.pressure = false
        document.querySelector('html').style = 'cursor: default'

    }

    mouseDown(e) {
        this.handleEvent(e)

        this.pressure = true
    }

    mouseMove(e) {
        this.handleEvent(e)
        if (this.pressure && e.pageX > 400) {
            document.querySelector('html').style = 'cursor: ew-resize'
            this.viewportIframe.style.width = e.pageX + 'px'
        }
    }


}