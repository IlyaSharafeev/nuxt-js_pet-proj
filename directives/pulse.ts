export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('pulse', {
        mounted (el) {
            el.classList.add('pulse-effect');
        },
        getSSRProps (binding, vnode) {
            return {}
        }
    })
})

