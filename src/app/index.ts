import {createApp} from "vue";
import App from "@/app/index.vue";
import './index.scss'
import router from "./providers/router.ts"
import {createPinia} from "pinia";
import {i18n} from "@/app/providers/i18n.ts";
//in your `main.js` file
import 'vue-toast-notification/dist/theme-sugar.css'

const pinia = createPinia()
export const app = createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)