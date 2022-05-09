import { createApp } from 'vue';
import App from './App.vue';

import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import store from './store'

// console.log(ElementPlus);

// 注册三级联动的全局组件
import TypeNav from '../src/page/Home/TypeNav/TypeNav'
import { reqCategoryList } from './api';

reqCategoryList();

const app = createApp(App);


app.component('TypeNav', TypeNav)

app.use(router);
app.use(ElementPlus);
app.use(store);

app.mount('#app')