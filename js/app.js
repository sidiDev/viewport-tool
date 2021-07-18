import Viewport from './Viewport.js'

const wrapperRef = document.getElementById('wrapper')

new Viewport(
    wrapperRef,
    `<!-- Hero Section: Simple With Logo -->
    <div class="bg-white relative overflow-hidden">
      <!-- Logo -->
      <div class="absolute inset-x-0 bottom-0 text-indigo-300">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150"><path d="M-0.84,34.03 C187.63,148.52 327.03,-4.44 499.72,40.95 L500.00,150.00 L0.00,150.00 Z"></path></svg>
      </div>
      <!-- END Logo -->
    
      <!-- Hero Content -->
      <div class="relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div class="text-center">
          <a href="javascript:void(0)" class="inline-block mb-10 text-indigo-600 hover:text-indigo-400">
            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="hi-outline hi-cube-transparent inline-block w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
          </a>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Build web applications and websites with ease
          </h2>
          <h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Carefully crafted, easy to customize, fully responsive UI components for your Tailwind CSS based projects.
          </h3>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
          <button type="button" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            <span>Get Started</span>
          </button>
          <button type="button" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700">
            <span>Learn more</span>
          </button>
        </div>
        <div class="relative mx-5 lg:mx-32 -mb-5 sm:mb-0">
          <div class="absolute inset-0 rounded-xl bg-indigo-100 bg-opacity-50 -m-4 transform rotate-2"></div>
          <div class="absolute inset-0 rounded-xl bg-indigo-200 bg-opacity-50 -m-4 transform -rotate-2"></div>
          <img src="https://source.unsplash.com/m_HRfLhgABo/1280x800" alt="Hero Image" class="relative rounded-lg mx-auto shadow-lg" />
        </div>
      </div>
      <!-- END Hero Content -->
    </div>
    <!-- END Hero Section: Simple With Logo -->
    `
)