import "@/style/reset.scss";
import { createApp } from 'vue';
// 引入 ElementPlus UI库
import ElementPlus from 'element-plus';
import "element-plus/dist/index.css";
import App from './App.vue';
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
import Content from '@/components/content/index.vue';
import router from '@/router/index';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);

app.component("Header", Header);
app.component("Footer", Footer);
app.component("Content", Content);

app.mount("#app");
