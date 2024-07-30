module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // Agrega tus reglas personalizadas aquí
    semi: 'error', // Punto y coma al final de las sentencias
    quotes: ['error', 'single'], // Comillas simples para cadenas de texto
    indent: ['error', 2], // Indentación de 2 espacios
    'no-unused-vars': 'warn', // Advertencia para variables no utilizadas
    'eqeqeq': 'error', // Requiere el uso de === y !== en lugar de == y !=
    'no-console': 'warn', // Advertencia para usos de console.log
  },
  ignorePatterns: ['node_modules/', '.dist'], // Ignorar node_modules
  env: {
    node: true, // Especifica que el entorno es Node.js
  },
};
