import App from './App.vue'
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


// 引入axios
import axios from "axios"


const app = createApp(App)
app.use(ElementPlus)
app.use(axios)
app.config.productionTip = false
app.mount('#app')
