import { createApp } from 'vue';
import App from './components/App.vue'
import BaseCart from './components/UI/BaseCart.vue'

const app = createApp(App);
app.component('base-cart', BaseCart);
app.mount('#app');

