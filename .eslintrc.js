module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	plugins: ["react", "react-hooks", "graphql"],

	extends: [
		"eslint:recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"plugin:json/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
	],

	globals: {
		graphql: false,
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 11,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
	},
	rules: {
		"array-callback-return": "error",
		"arrow-body-style": ["error", "as-needed"],
		"arrow-parens": ["error", "as-needed"],
		"arrow-spacing": "error",
		"dot-notation": "error",
		eqeqeq: ["error", "always", { null: "ignore" }],
		"no-array-constructor": "error",
		"no-console": ["error", { allow: ["warn", "error"] }],
		"no-duplicate-imports": "error",
		"no-iterator": "error",
		"no-loop-func": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-prototype-builtins": 0,
		"no-underscore-dangle": "error",
		"no-unneeded-ternary": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-rest-params": "error",
		"prefer-template": "error",
		"quote-props": ["error", "as-needed"],
		"spaced-comment": "error",
		"react/jsx-curly-brace-presence": ["error", "never"],
		"react/jsx-boolean-value": ["error", "never"],
		"react/jsx-filename-extension": ["error"],
		"react/jsx-key": ["error"],
		"react/jsx-no-useless-fragment": ["error"],
		"react/jsx-pascal-case": ["error"],
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"react/no-direct-mutation-state": 2,
		"react/no-unused-prop-types": 2,
		"react/no-unused-state": 2,
		"react/prop-types": "off",
		"react-hooks/rules-of-hooks": 2,
		"react-hooks/exhaustive-deps": 2,
		"require-atomic-updates": 0,
		yoda: ["error", "never"],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};