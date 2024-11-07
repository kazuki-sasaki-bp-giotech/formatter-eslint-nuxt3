// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

// @ts-ignore
export default withNuxt({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.json'], // TypeScriptプロジェクトの指定
      tsconfigRootDir: process.cwd(),
      sourceType: 'module',
    },
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'warn',
  },
  ignores: ['eslint.config.mjs'], // 型情報が不要なファイルを無視
});
