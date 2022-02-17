(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f32e4d6"],{"62b3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("空数据")]),n("Explain"),n("Basic")],1)},l=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、空数据效果，组件本身没有提供接口，你可以自己实现，这样会更灵活一些")])])])}],c=n("2877"),s={},o=Object(c["a"])(s,r,i,!1,null,null,null),d=o.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"空数据",fileName:"basic.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table :columns="columns" :table-data="tableData" border-y />\n    <div v-show="tableData.length === 0" class="empty-data">暂无数据</div>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center" },\n          { field: "address", key: "d", title: "Address", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n  };\n<\/script>\n\n<style>\n  .empty-data {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 200px;\n    width: 100%;\n    color: #666;\n    font-size: 16px;\n    border: 1px solid #eee;\n    border-top: 0;\n  }\n</style>\n')])])])],2)],1)},b=[];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-y":""}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.tableData.length,expression:"tableData.length === 0"}],staticClass:"empty-data"},[e._v("暂无数据")])],1)]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}}};return f({render:e,staticRenderFns:t},n)}()}},y=v,h=(n("de5b"),Object(c["a"])(y,u,b,!1,null,null,null)),g=h.exports,O={name:"data-empty",components:{Explain:d,Basic:g}},w=O,j=Object(c["a"])(w,a,l,!1,null,null,null);t["default"]=j.exports},acaf:function(e,t,n){},de5b:function(e,t,n){"use strict";var a=n("acaf"),l=n.n(a);l.a}}]);
//# sourceMappingURL=chunk-3f32e4d6.e8bff41d.js.map