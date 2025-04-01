import './assets/main.css'

import { createApp } from 'vue'

//import 'vuetify/styles'
//import { createVuetify } from 'vuetify'
//import * as components from 'vuetify/components'

//import '@mdi/font/css/materialdesignicons.css'

import * as directives from 'vuetify/directives'

//import VueApexCharts from "vue3-apexcharts";


import App from './App.vue'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const app = createApp(App)

//app.use(vuetify).use(VueApexCharts)

app.mount('#app')
