const path = require("path");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ChineseRestaurant',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/reset.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/font.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // "@/assets/theme/index.css",
    "swiper/dist/css/swiper.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vue-swiper.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/,/^vant/],
    postcss:{
      plugins: webpack =>{
        const designWidth = webpack.resourcePath.includes(path.join('mobile')) ? 750 : 1920;
        return [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: designWidth,
            unitPrecision: 3,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [".ignore"],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/],
            landscape: false,
            landscapeUnit: "vw",
            landscapeWidth: 1080,
          })
        ];
      }
    }
  }
}
