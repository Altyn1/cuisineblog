import './bootstrap';
import { createApp } from 'vue';
import Authentication from './components/Authentication.vue';

const app = createApp({});
app.component('authentication-component', Authentication);
app.mount('#app');
