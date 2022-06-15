export default {

  install (app, options) {
    let current = 'ru'

    const changeLanguage = nameLang => {
      current = nameLang
    }

    app.config.globalProperties.$i18n = key => {
      return key.split('.').reduce((acc, item) => {
        // key -> 'app.title'
        // acc === options -> app: {title: 'textqwerty'}
        // item -> [app, title]
        return acc[item] || 'undefined'
        // return 'textqwerty'
      }, options[current])
    }
    app.provide('langChange', changeLanguage)
  }
}
