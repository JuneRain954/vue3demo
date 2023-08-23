import "@/style/reset.scss";
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// 引入 ElementPlus UI库
import ElementPlus from 'element-plus';
import "element-plus/dist/index.css";
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

import App from './App.vue';
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
import Content from '@/components/content/index.vue';
import router from '@/router/index';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus, {locale: zhCn});

app.component("Header", Header);
app.component("Footer", Footer);
app.component("Content", Content);

app.mount("#app");
