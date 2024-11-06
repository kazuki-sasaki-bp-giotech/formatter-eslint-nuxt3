// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: false,
        quotes: "single",
      }
    }
  },
})


function greetUser(name: string): string {
  const test = "test";
  return `Hello, ${name}! Welcome to our Nuxt application.`;
}