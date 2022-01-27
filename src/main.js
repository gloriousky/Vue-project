import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Toast } from 'vant'
import './index.css'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(Toast);
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'

app.mount('#app')