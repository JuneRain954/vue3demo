import "@/style/reset.scss";
import { createApp } from 'vue';
import App from './App.vue';
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
import Content from '@/components/content/index.vue';

const app = createApp(App);

app.component("Header", Header);
app.component("Footer", Footer);
app.component("Content", Content);

app.mount("#app");
