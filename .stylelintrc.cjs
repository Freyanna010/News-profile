module.exports = {
  // 🔹 Расширяем стандартные правила StyleLint
  extends: [
    "stylelint-config-standard", // базовые правила CSS
  ],

  // 🔹 Плагины
  plugins: [
    "stylelint-order", // позволяет сортировать свойства CSS
  ],

  // 🔹 Настройка правил
  rules: {
    // Сортировка CSS-свойств по алфавиту
    "order/properties-alphabetical-order": true,

    // Всегда ставим точку с запятой в конце объявления
    "declaration-block-trailing-semicolon": "always",

    // Запрещаем пустые CSS-файлы
    "no-empty-source": true,

    // Prettier-friendly: отключаем правила, которые могут конфликтовать с Prettier
    "string-quotes": "double", // Prettier обычно использует двойные кавычки, можно менять на 'single'
    indentation: 2, // чтобы соответствовать табуляции/отступам из .prettierrc
  },

  // 🔹 Файлы и папки, которые игнорируем
  ignoreFiles: [
    "node_modules/**", // зависимости
    "dist/**", // собранный код
  ],

  // 🔹 Настройки для SCSS (если будут)
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
