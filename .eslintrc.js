module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx"],
            },
        },
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "object-curly-spacing": ["error", "always"],
        "eol-last": ["error", "always"],
        "import/newline-after-import": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "react/function-component-definition": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "eslint-disable-next-line": "off",
        "no-nested-ternary": "off",
        "react/button-has-type": "off",
        camelcase: "off",
        "react/require-default-props": "off",
        "no-undef": "off",
        "no-plusplus": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "react/jsx-key": ["error", { checkFragmentShorthand: true }],
        "react/no-array-index-key": "off",
        "no-param-reassign": "off",
        "import/no-cycle": "off",
        "no-shadow": "off",
        "import/no-extraneous-dependencies": "off",
        "no-use-before-define": "off",
        "jsx-a11y/media-has-caption": "off",
    },
};
