import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import plugin from '@mercury-chat/vue-chat';
import '@mercury-chat/vue-chat/dist/mercury-chat.css';

createApp(App).use(plugin).mount('#app')
