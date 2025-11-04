// src/i18n.ts
import { createI18n } from 'vue-i18n'

// English files
import enBase from '@/locales/en/fromPage.json'

// Myanmar files
import myBase from '@/locales/my/fromPage.json'

// Thai files
import thBase from '@/locales/my/fromPage.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('language') || 'en', 
  messages: {
    en: {
      ...enBase
    },
    my: {
      ...myBase
    },
  },
})

export default i18n
