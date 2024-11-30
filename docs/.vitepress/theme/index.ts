import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Counter from '../components/Counter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Counter', Counter)
  }
}