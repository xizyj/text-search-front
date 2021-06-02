import App from './App.vue'
import { createApp } from 'vue'
import ElementPlus from 'element-plus';


// 引入样式
import 'element-ui/lib/theme-chalk/index.css'

import 'font-awesome/css/font-awesome.css'

// 引入axios
import axios from "axios"


const app = createApp(App)
app.use(ElementPlus)
app.use(axios)
app.config.productionTip = false
app.mount('#app')
