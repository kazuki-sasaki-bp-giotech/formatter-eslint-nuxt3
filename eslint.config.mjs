// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  // Your custom configs here
  // リントルールを追加する時はここに追加する
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'warn',
  },
});
