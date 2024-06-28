import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

import './styles/style.scss';

import ElementPlus from 'element-plus';
import locale from 'element-plus/es/locale/lang/ru';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const newApp = createApp(App)
    .use(ElementPlus, { locale })
    .use(store)

Object
    .entries(ElementPlusIconsVue)
    .forEach(item => newApp.component(...item));

newApp.mount('#app');


