export default class View {


    constructor(wrapper) {
        this.wrapper = wrapper
        this.wrapper.innerHTML = `
            <div class="wrapper-container">
                <div class="bg-gray-200 hover:bg-gray-300 border-2 border-gray-200 hover:border-gray-300 inline-block rounded-md mb-2 controller">
                    <div class="flex">
                        <button class="bg-white focus:outline-none p-1.5 px-2 flex items-center flex-1 rounded-md text-sm previewBtn">
                            <svg width="20" height="20" fill="none" class="mx-1 lg:mr-2 text-indigo-500 text-gray-500">
                                <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <circle cx="10" cy="10" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                            </svg>
                            Preview
                        </button>
                        <button class="focus:outline-none p-1.5 px-2 flex items-center flex-1 rounded-md text-sm codeBtn">
                            <svg width="20" height="20" fill="none" class="mx-1 lg:mr-2 text-gray-500 group-hover:text-gray-900">
                                <path d="M13.75 6.75l3.5 3.25-3.5 3.25M6.25 13.25L2.75 10l3.5-3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            Code
                        </button>
                    </div>
                </div>
                    <div class="viewport w-full bg-gray-500 border rounded-md overflow-hidden">
                        <div class="viewport-iframe bg-white relative" style="max-width: 100%; width: auto">
                            <iframe class="pointer-events-none"></iframe>
                            <div class="resizer bg-gray-200 h-full w-4 absolute right-0 top-0 flex items-center" style="cursor: ew-resize;" id="resizer">
                                <svg class="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
            </div>
        `


        const controller = this.wrapper.querySelectorAll('.wrapper-container button')
        const previewBtn = controller[0]
        const codeBtn = controller[1]

        previewBtn.addEventListener('click', () => {
            this.switchToPreview(previewBtn, codeBtn)
        })
        codeBtn.addEventListener('click', () => {
            this.switchToCode(previewBtn, codeBtn)
        })
        
    }

    switchToCode(previewBtn, codeBtn) {
        codeBtn.querySelector('svg').classList.add('text-indigo-500')
        codeBtn.classList.add('bg-white')
        previewBtn.querySelector('svg').classList.remove('text-indigo-500')
        previewBtn.classList.remove('bg-white')
    }

    switchToPreview(previewBtn, codeBtn) {

        previewBtn.querySelector('svg').classList.add('text-indigo-500')
        previewBtn.classList.add('bg-white')
        codeBtn.querySelector('svg').classList.remove('text-indigo-500')
        codeBtn.classList.remove('bg-white')
    }
}