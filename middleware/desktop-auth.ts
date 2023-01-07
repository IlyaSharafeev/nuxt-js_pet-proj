export default defineNuxtRouteMiddleware(() => {
    if (window.localStorage.getItem('token')) {
        return navigateTo('/macbook/desktop');
    }
})