import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base configs (bridged from .eslintrc style)
  ...compat.extends(
    "eslint:recommended",
    "next/core-web-vitals",
    "next/typescript",
    "plugin:import/recommended",
    "prettier"
  ),

  // Custom rules & ignores
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Import ordering
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          "alphabetize": { order: "asc" },
          "groups": [
            ["builtin", "external", "internal"],
            ["parent", "sibling", "index"],
          ],
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {}, // makes import plugin aware of TS paths
      },
    },
  },
];

export default eslintConfig;
