export default defineNuxtRouteMiddleware((to, from) => {
    if(process.client) {
        if (!localStorage.getItem('token') && to.path === '/macbook/desktop') {
            return abortNavigation();
        }

        if (localStorage.getItem('token') && to.path === '/macbook/login-page') {
            return navigateTo('/macbook/desktop');
        }
    }
})