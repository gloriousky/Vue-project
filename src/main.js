import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./index.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const options = {
    // confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
  };
const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2,options);



app.provide("axios", app.config.globalProperties.axios); // provide 'axios'
app.mount("#app");
console.clear()
