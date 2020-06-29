(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1313:function(n,l,t){"use strict";t.r(l),l.default='<section><p>####开发工具前端用的比较多的是 vscode，开发过程中可以配置一个保存即自动格式化。团队合作的时候避免风格不一致</p>\n<blockquote>\n<p>ps:我上一家公司另一个前端同事 js 语句从来不加分号，间隔四空，我跟他是相反的</p>\n</blockquote>\n<p>####以下插件是必备的</p>\n<pre><code class="language-javascript">Prettier - Code formatter\nEslint\nstyleLint\n</code></pre>\n<p>剩下的就是在配置项中写入自己的配置 <code>setting.json</code></p>\n<pre><code class="language-json">{\n  <span class="hljs-attr">"editor.tabSize"</span>: <span class="hljs-number">2</span>,\n  <span class="hljs-attr">"editor.formatOnSave"</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">//保存时候自动格式化</span>\n  <span class="hljs-attr">"editor.formatOnType"</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">"[vue]"</span>: {\n    <span class="hljs-attr">"editor.defaultFormatter"</span>: <span class="hljs-string">"esbenp.prettier-vscode"</span>\n  }\n}\n</code></pre>\n<pre><code class="language-json">{\n  <span class="hljs-attr">"files.associations"</span>: {\n    <span class="hljs-attr">"*.vue"</span>: <span class="hljs-string">"vue"</span>,\n    <span class="hljs-attr">"*.stylus"</span>: <span class="hljs-string">"stylus"</span>\n  },\n  <span class="hljs-attr">"todohighlight.include"</span>: [],\n  <span class="hljs-attr">"todohighlight.keywords"</span>: [\n    <span class="hljs-string">"DEBUG:"</span>,\n    {\n      <span class="hljs-attr">"text"</span>: <span class="hljs-string">"REVIEW:"</span>,\n      <span class="hljs-attr">"color"</span>: <span class="hljs-string">"white"</span>,\n      <span class="hljs-attr">"border"</span>: <span class="hljs-string">"1px solid red"</span>,\n      <span class="hljs-attr">"padding"</span>: <span class="hljs-string">"2px"</span>,\n      <span class="hljs-attr">"borderRadius"</span>: <span class="hljs-string">"2px"</span>, <span class="hljs-comment">//<span class="hljs-doctag">NOTE:</span> using borderRadius along with `border` or you will see nothing change</span>\n      <span class="hljs-attr">"backgroundColor"</span>: <span class="hljs-string">"#c9302c"</span>\n    },\n    {\n      <span class="hljs-attr">"text"</span>: <span class="hljs-string">"NOTE:"</span>,\n      <span class="hljs-attr">"color"</span>: <span class="hljs-string">"white"</span>,\n      <span class="hljs-attr">"backgroundColor"</span>: <span class="hljs-string">"#5bc0de"</span>,\n      <span class="hljs-attr">"overviewRulerColor"</span>: <span class="hljs-string">"grey"</span>\n    },\n    {\n      <span class="hljs-attr">"text"</span>: <span class="hljs-string">"HACK:"</span>,\n      <span class="hljs-attr">"color"</span>: <span class="hljs-string">"#000"</span>,\n      <span class="hljs-attr">"isWholeLine"</span>: <span class="hljs-literal">false</span>\n    },\n    {\n      <span class="hljs-attr">"text"</span>: <span class="hljs-string">"TODO:"</span>,\n      <span class="hljs-attr">"color"</span>: <span class="hljs-string">"blue"</span>,\n      <span class="hljs-attr">"backgroundColor"</span>: <span class="hljs-string">"yellow"</span>\n    }\n  ],\n  <span class="hljs-attr">"search.exclude"</span>: {},\n  <span class="hljs-attr">"editor.formatOnSave"</span>: <span class="hljs-literal">false</span>,\n  <span class="hljs-attr">"eslint.autoFixOnSave"</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">"eslint.validate"</span>: [\n    <span class="hljs-string">"javascript"</span>,\n    <span class="hljs-string">"javascriptreact"</span>,\n    <span class="hljs-string">"html"</span>,\n    {\n      <span class="hljs-attr">"language"</span>: <span class="hljs-string">"vue"</span>,\n      <span class="hljs-attr">"autoFix"</span>: <span class="hljs-literal">true</span>\n    }\n  ],\n  <span class="hljs-attr">"vetur.validation.template"</span>: <span class="hljs-literal">false</span>,\n  <span class="hljs-attr">"vetur.format.defaultFormatter.html"</span>: <span class="hljs-string">"prettyhtml"</span>,\n  <span class="hljs-attr">"vetur.format.defaultFormatterOptions"</span>: {\n    <span class="hljs-attr">"prettyhtml"</span>: {\n      <span class="hljs-attr">"printWidth"</span>: <span class="hljs-number">100</span> <span class="hljs-comment">// No line exceeds 100 characters</span>\n    }\n  },\n  <span class="hljs-comment">// stylelint配置</span>\n  <span class="hljs-attr">"stylelint.enable"</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">"stylelint.autoFix"</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">"editor.codeActionsOnSave"</span>: {\n    <span class="hljs-attr">"source.fixAll.eslint"</span>: <span class="hljs-literal">true</span>\n  }\n}\n</code></pre>\n<p>####如果不知道怎么打开这个 json 文件的，左下角齿轮点击选择设置，进入设置界面后看右上角\n有些具体的设置可以搜索 prettier，比如 js 语句后面是否添加分号之类的</p>\n</section>\n'}}]);