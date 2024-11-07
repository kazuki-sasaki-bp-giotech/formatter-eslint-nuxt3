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
        semi: true,
        quotes: 'single',
      },
    },
  },
});

function greetUser(name: string | null): string {
  // この行が警告を出します
  if (name) {
    return `Hello, ${name}! Welcome to our Nuxt application.`;
  }
  else {
    return 'Hello, Guest! Welcome to our Nuxt application.';
  }
}

greetUser('John Doe');
