import { createApp } from "vue";
//@ts-ignore
import App from "./App.vue";
import router from "./router/index";
import "./assets/fonts/poppins/poppins.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faHandPointDown,
    faCogs,
    faTools,
    faCode,
    faDollarSign,
    faEye,
    faVideo,
    faTimes,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

import {
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import './index.css'

library.add(
    faHandPointDown,
    faCogs,
    faTools,
    faCode,
    faDiscord,
    faDollarSign,
    faEye,
    faVideo,
    faTimes,
    faSearch,
)

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
 
console.log("font-awesome-icon is a component!")

createApp(App).use(router).mount('#app');
