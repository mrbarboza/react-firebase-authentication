module.exports = {
    "extends": "airbnb",
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