import { createApp } from 'vue'
import App from './App.vue'
import translatePlugin from '@/translatePlugin'

const app = createApp(App)

const ru = {
  app: {
    title: 'Добавьте первый блок, чтобы увидеть результат'
  }
}

const en = {
  app: {
    title: 'add your first block'
  }
}

app.use(translatePlugin, { ru, en })

app.mount('#app')

/* createApp(App).mount('#app') */
