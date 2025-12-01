import globals from "globals";
import pluginReact from "eslint-plugin-react";
import js from "@eslint/js";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist/**"],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react: pluginReact,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "no-undef": "error", 
      "react/react-in-jsx-scope": "off", 
      "react/prop-types": "off", // optional if you don't use PropTypes
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
