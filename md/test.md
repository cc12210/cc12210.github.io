####开发工具前端用的比较多的是 vscode，开发过程中可以配置一个保存即自动格式化。团队合作的时候避免风格不一致

> ps:我上一家公司另一个前端同事 js 语句从来不加分号，间隔四空，我跟他是相反的

####以下插件是必备的

```javascript
Prettier - Code formatter
Eslint
styleLint
```

剩下的就是在配置项中写入自己的配置 <code>setting.json</code>

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true, //保存时候自动格式化
  "editor.formatOnType": true,
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

```json
{
  "files.associations": {
    "*.vue": "vue",
    "*.stylus": "stylus"
  },
  "todohighlight.include": [],
  "todohighlight.keywords": [
    "DEBUG:",
    {
      "text": "REVIEW:",
      "color": "white",
      "border": "1px solid red",
      "padding": "2px",
      "borderRadius": "2px", //NOTE: using borderRadius along with `border` or you will see nothing change
      "backgroundColor": "#c9302c"
    },
    {
      "text": "NOTE:",
      "color": "white",
      "backgroundColor": "#5bc0de",
      "overviewRulerColor": "grey"
    },
    {
      "text": "HACK:",
      "color": "#000",
      "isWholeLine": false
    },
    {
      "text": "TODO:",
      "color": "blue",
      "backgroundColor": "yellow"
    }
  ],
  "search.exclude": {},
  "editor.formatOnSave": false,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "vetur.validation.template": false,
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "printWidth": 100 // No line exceeds 100 characters
    }
  },
  // stylelint配置
  "stylelint.enable": true,
  "stylelint.autoFix": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

####如果不知道怎么打开这个 json 文件的，左下角齿轮点击选择设置，进入设置界面后看右上角
有些具体的设置可以搜索 prettier，比如 js 语句后面是否添加分号之类的
