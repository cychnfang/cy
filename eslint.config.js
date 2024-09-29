import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['packages/create-cy/template-vue-ts', '**/dist/**'],
  },
  {
    // tseslint.config添加了extends扁平函数，直接用。否则是eslint9.0版本是没有extends的
    extends: [...tseslint.configs.recommended],
    rules: {
      'no-debugger': 'error',
    },
  },
)
