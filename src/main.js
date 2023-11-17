import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

// const requireComponent = require.context(
//     './components', 
//     false, 
//     /Base[A-Z]\w+\.(vue|js)$/,
//     'lazy'
// )

// const modules = {
//     './components/common/BaseInput.vue': () => import('./components/common/BaseInput.vue'),
//     './components/common/BaseSelect.vue': () => import('./components/common/BaseSelect.vue'),
//   }

//   for (const path in modules) {
//     modules[path]().then((mod) => {
//       console.log(path, mod)
//     })
//   }

// const modules = import.meta.glob('./components/common/*.vue')
// Object.values(modules).forEach((module) => {
//     module().then((data) => {
//         console.log(data)
//     })
// })
const app = createApp(App);




//   for (const path in module) {
//     module[path]().then((mod) => {
//       console.log(path, mod)
//     })
//   }

// module.forEach(() => {
//     console.log('hi');
// })


// requireComponent.keys().forEach(fileName => {
//     const componentConfig = requireComponent(fileName)

//     const componentName = upperFirst(
//         camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
//     )

//     app.component(componentName, componentConfig.default || componentConfig)
// })

app.mount('#app')
