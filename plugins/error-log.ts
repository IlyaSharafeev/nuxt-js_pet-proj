export default defineNuxtPlugin(() => {
    return {
        provide: {
            error: (errorText: string) => console.log(`
            ----------Error----------- \n
             ${errorText} \n
             ----------Error----------- \n
            `),
        }
    }
})