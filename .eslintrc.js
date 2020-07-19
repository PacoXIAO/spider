module.exports = {
    "env": {
        //"browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
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
        // 禁止使用console.log
        "no-console": ["error",{"allow": ["warn", "error", "info"]}],
        // 禁止出现未使用的变脸，不检测参数
        "no-unused-vars": [2, {"vars": "all", "args": "none"}]
    },
    "globals":{
        //"window": true
    }
};
 