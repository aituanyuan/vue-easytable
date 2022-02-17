(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8fd4"],{"8c2e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content example-md-doc"},[a("h2",[e._v("Internationalization")]),a("anchor",{attrs:{"is-edit":"",label:"Switch Languages",fileName:"locale.md"}}),e._m(0),e._m(1),a("anchor",{attrs:{"is-edit":"",label:"Override Default Configs",fileName:"locale.md"}}),e._m(2),e._m(3),a("anchor",{attrs:{"is-edit":"",label:"Using By CDN",fileName:"locale.md"}}),e._m(4),e._m(5),a("anchor",{attrs:{"is-edit":"",label:"Languages Configs",fileName:"locale.md"}}),a("p",[e._v("The following languages are currently supported：")]),e._m(6),e._m(7)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("You can implement multilingual support using the "),a("code",[e._v("VeLocal")]),e._v(" component, using "),a("code",[e._v("VeLocal.use")]),e._v(" method toggles the currently used language.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[a("code",{staticClass:"language-javascript"},[e._v('import { VeLocale } from "vue-easytable";\n// import language\nimport enUS from "vue-easytable/libs/locale/lang/en-US.js";\n\nVeLocale.use(enUS);\n')])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Use "),a("code",[e._v("Locale.update")]),e._v(" method to modify the default configs.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[a("code",{staticClass:"language-javascript"},[e._v('import { VeLocale } from "vue-easytable";\n\nconst lang = {\n    pagination: {\n        goto: "goto",\n    },\n};\n\nVeLocale.update(lang);\n')])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tip"},[a("p",[e._v('1、import languages from "//unpkg.com/vue-easytable/libs/locale/lang/"'),a("br"),e._v(" 2、Use "),a("code",[e._v("VETable.VeLocale.use")]),e._v(" method to switch languages."),a("br"),e._v(" 3、Language configs are fixed format "),a("code",[e._v("VETable.lang.[Language config name]")]),e._v(",[Language config name] does not contain the '-' symbol, as shown in the following example")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[a("code",[e._v('<script src="//unpkg.com/vue"><\/script>\n<script src="//unpkg.com/vue-easytable"><\/script>\n<script src="//unpkg.com/vue-easytable/libs/locale/lang/en-US.js"><\/script>\n<script src="//unpkg.com/vue-easytable/libs/locale/lang/zh-CN.js"><\/script>\n\n<script>\n  // Switch to English\n  VETable.VeLocale.use(VETable.lang.enUS);\n\n  /*\n  Switch to Chinese\n  VETable.VeLocale.use(VETable.lang.zhCN);\n  */\n<\/script>\n')])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"example-table"},[a("thead",[a("tr",[a("th",[e._v("language")]),a("th",[e._v("file name")])])]),a("tbody",[a("tr",[a("td",[e._v("Simplified Chinese")]),a("td",[e._v("zh-CN")])]),a("tr",[a("td",[e._v("Traditional Chinese (Traditional)")]),a("td",[e._v("zh-TW")])]),a("tr",[a("td",[e._v("English")]),a("td",[e._v("en-US")])]),a("tr",[a("td",[e._v("South Africa (Afrikaans)")]),a("td",[e._v("af-ZA")])]),a("tr",[a("td",[e._v("South Africa (Zulu)")]),a("td",[e._v("zu-ZA")])]),a("tr",[a("td",[e._v("French（fr）")]),a("td",[e._v("fr-FR")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("If you need to use other languages, you are welcome to contribute PR: just add a language configuration file in "),a("a",{attrs:{href:"https://github.com/huangshuwei/vue-easytable/tree/master/packages/src/locale/lang"}},[e._v("here")]),e._v(".")])}],s=a("2877"),c={},o=Object(s["a"])(c,n,l,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e8fd4.eb6f2d5a.js.map