module.exports = {
    extends: ["plugin:jsx-a11y/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "plugin:react-hooks/recommended"],
    plugins: ["react", "@typescript-eslint", "prettier"],
    parser: "@typescript-eslint/parser",
    rules: {
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-var-requires": "off",
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
};
