module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "jsx-a11y/anchor-is-valid": [ "error", {
          "components": [ "Link" ],
          "specialLink": [ "to" ]
        }]
    },
    "globals": {
        "document": true,
    },
};