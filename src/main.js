import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { pinia } from '../src/Pinia';
import './assets/styles/App.scss'; 

// Importar estilos globales aquí si es necesario

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
