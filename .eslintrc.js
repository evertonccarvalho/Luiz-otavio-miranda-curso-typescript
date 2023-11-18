module.exports = {
  root: true, // Indica que esta configuração se aplica a todo o seu projeto, incluindo subpastas

  // Ambientes onde seu código será executado (ex: browser, node, jest)
  env: {
    node: true,
    browser: true,
    es2021: true,
  },

  // Conjunto de regras a serem aplicadas
  extends: [
    'eslint:recommended', // Usa as regras recomendadas pelo ESLint
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', // Adiciona regras específicas para TypeScript
    // 'plugin:prettier/recommended',
  ],

  // Configurações adicionais para plugins ou regras específicas
  plugins: [
    '@typescript-eslint', // Plugin do ESLint para TypeScript
  ],

  // Especifica as versões do JavaScript e do TypeScript usadas
  parserOptions: {
    ecmaVersion: 12, // Versão do ECMAScript a ser usada (ES2021)
    sourceType: 'module', // Usa imports/exports para módulos
    parser: '@typescript-eslint/parser', // Especifica o parser para TypeScript
  },

  // Regras personalizadas ou ajustes
  rules: {
    // Exemplo de regra personalizada para indentação de 2 espaços
    indent: ['error', 2],
    // Outras regras...
  },
};
