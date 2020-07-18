module.exports = {
    "env": {
        //"browser": true,
        "node": true,
        "commonjs": true,
        //"es6": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 11
        //"ecmaVersion": 6,
        //"sourceType": "script"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-console": ["error",{"allow": ["warn", "error", "info"]}]
    },
    "globals":{
        //"window": true
    }
};
 