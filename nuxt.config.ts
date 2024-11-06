// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        flat: true,
        semi: false,
        quotes: 'single',
      },
    },
  },
})

function greetUser(name: string): string {
  const test = 'test'
  return `Hello, ${name}! Welcome to our Nuxt application.`
}
