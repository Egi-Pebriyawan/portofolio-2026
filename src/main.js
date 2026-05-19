import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Devicon CSS
import 'devicon/devicon.min.css';

createApp(App).use(router).mount('#app');

