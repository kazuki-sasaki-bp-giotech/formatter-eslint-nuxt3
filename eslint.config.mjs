// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
  // リントルールを追加する時はここに追加する
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
  }
})
