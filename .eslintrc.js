module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["prettier"],
  extends: ['plugin:vue/vue3-recommended', "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "prettier/prettier": "error",
    "comma-dangle": ["error", "always-multiline"],
    "no-console":
      process.env.NODE_ENV === "production"
        ? ["error", { allow: ["error"] }]
        : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};