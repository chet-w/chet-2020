module.exports = {
  extends: [
    "react-app", // See below
    "plugin:functional/recommended",
    "plugin:prettier/recommended", // Should always be last. Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["functional"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off", // This rule prevents you from letting React component return types be inferred.
    "functional/no-expression-statement": "off", // This rule causes an error with ReactDOM.render()
    "functional/prefer-readonly-type": "off", // Off for now. Do we want to have to annotate everything with readonly? To be discussed.
    "functional/functional-parameters": "off", // This rule breaks things like the useEffect, which takes a callback with no parameters.
    "functional/no-mixed-type": "off", // This rules doesn't allow you to create a type alias for a component that mixes methods and values.
    "functional/prefer-type-literal": "off", // Interfaces are fine. Some people prefer to extend.
    "functional/no-conditional-statement": "off", // if statements are useful and quite nice for conditional component rendering logic.
    "functional/no-return-void": "off", // In React, you are often returning void. i.e. useState setters
    "functional/no-try-statement": "off", // What's wrong with a try/catch? They are very useful with async/await.
  },
};
