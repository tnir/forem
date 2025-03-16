import { FlatCompat } from "@eslint/eslintrc";
import babelParser from "@babel/eslint-parser";
import eslintRecommended from "eslint/conf/eslint-recommended";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: importPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      ...eslintRecommended.rules,
      ...prettier.rules,
      "no-console": ["error", { allow: ["error"] }],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportDefaultDeclaration",
          message: "Prefer named exports",
        },
      ],
      "import/order": ["error"],
      "import/prefer-default-export": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          required: {
            some: ["nesting", "id"],
          },
        },
      ],
      "react/jsx-no-target-blank": [2, { enforceDynamicLinks: "always" }],
      "jsx-a11y/no-onchange": "off",
      "prefer-const": ["error"],
      "prefer-destructuring": ["warn", { object: true, array: false }],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
    },
    settings: {
      react: {
        pragma: "h",
      },
      "import/resolver": {
        webpack: {
          config: {
            resolve: {
              alias: {
                "@crayons": path.join(__dirname, "./crayons"),
                "@utilities": path.join(__dirname, "./utilities"),
                "@components": path.join(__dirname, "./shared/components"),
                "@images": path.join(__dirname, "../assets/images"),
                "@admin": path.join(__dirname, "./admin"),
              },
              extensions: [".js", ".jsx"],
            },
          },
        },
      },
    },
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
      getCsrfToken: false,
      sendFetch: false,
      preventDefaultAction: false,
      userData: false,
      ga: false,
      gtag: false,
      handleOptimisticButtRender: false,
      handleFollowButtPress: false,
      browserStoreCache: false,
      initializeBaseUserData: false,
      initializeBillboardVisibility: false,
      initializeReadingListIcons: false,
      ActiveXObject: false,
      AndroidBridge: false,
      InstantClick: false,
      filterXSS: false,
      Honeybadger: false,
    },
  },
  {
    files: ["**/*.stories.jsx", "app/javascript/admin/controllers/*.js"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
  {
    files: ["**/index.js"],
    rules: {
      "import/export": "off",
    },
  },
];
