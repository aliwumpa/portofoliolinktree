import { createApp } from 'vue'
import App from './App.vue'

import 'font-awesome/css/font-awesome.css';
import 'animate.css/animate.min.css';
import Tooltip from "primevue/tooltip";

const app = createApp(App);

app.directive("tooltip", Tooltip);
app.mount('#app');
