(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d04905d"],{"08e3":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("右键菜单")]),t("Explain"),t("ContextmenuTypes"),t("Base"),t("Custom"),t("API",{attrs:{title:"API",anchor:"API",desc:"contextmenuBodyOption 右键菜单配置"}})],1)},r=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、有些操作可以通过右键菜单更方便的完成。比如单元格编辑功能，可以通过右键操作很方便的插入行或者移除行"),t("br"),e._v(" 2、当然你也可以自定义右键菜单功能")])])])}],i=t("2877"),c={},d=Object(i["a"])(c,o,l,!1,null,null,null),s=d.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"右键菜单功能分类",fileName:"contextmenu-types.md"}}),t("p",[e._v("这些右键菜单功能你可以随意选择和组合")]),e._m(0)],1)},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",{staticClass:"example-table"},[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("功能")]),t("th",{staticStyle:{"text-align":"left"}},[e._v("类型")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("分割线")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("SEPARATOR")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("在上方插入行")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("INSERT_ROW_ABOVE")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("在下方插入行")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("INSERT_ROW_BELOW")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("移除该行")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("REMOVE_ROW")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("隐藏该行")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("HIDE_COLUMN")])])])])])}],y={},p=Object(i["a"])(y,u,m,!1,null,null,null),b=p.exports,f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"基础用法",fileName:"base.md"}}),t("p",[e._v("右键表格区域查看效果")]),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            row-key-field-name="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :row-style-option="rowStyleOption"\n            border-y\n            :contextmenu-body-option="contextmenuBodyOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                // contextmenu body option\n                contextmenuBodyOption: {\n                    // callback for all options\n                    callback: ({ type, selection }) => {\n                        console.log("type::", type);\n                        console.log("selection::", selection);\n                    },\n\n                    // contextmenus\n                    contextmenus: [\n                        {\n                            type: "INSERT_ROW_ABOVE",\n                        },\n                        {\n                            type: "INSERT_ROW_BELOW",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "REMOVE_ROW",\n                        },\n                        {\n                            type: "HIDE_COLUMN",\n                        },\n                    ],\n                },\n\n                rowStyleOption: {\n                    clickHighlight: false,\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "name",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "date",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "number",\n                        key: "number",\n                        title: "Number",\n                        align: "right",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "address",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        number: "32",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        number: "676",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        number: "76",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        number: "7797",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        number: "8978",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},h=[];function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var v={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"row-key-field-name":"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"row-style-option":e.rowStyleOption,"border-y":"","contextmenu-body-option":e.contextmenuBodyOption}})],1)]],2)},n=[],t={data:function(){return{contextmenuBodyOption:{callback:function(e){var n=e.type,t=e.selection;console.log("type::",n),console.log("selection::",t)},contextmenus:[{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"REMOVE_ROW"},{type:"HIDE_COLUMN"}]},rowStyleOption:{clickHighlight:!1},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"name",title:"Name",align:"left",width:"15%"},{field:"date",key:"date",title:"Date",align:"left",width:"15%"},{field:"number",key:"number",title:"Number",align:"right",width:"30%"},{field:"address",key:"address",title:"Address",align:"left",width:"40%"}],tableData:[{name:"John",date:"1900-05-20",number:"32",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",number:"676",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",number:"76",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",number:"7797",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",number:"8978",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}}};return O({render:e,staticRenderFns:n},t)}()}},x=v,_=Object(i["a"])(x,f,h,!1,null,null,null),E=_.exports,S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"自定义右键菜单",fileName:"custom.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            row-key-field-name="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :row-style-option="rowStyleOption"\n            border-y\n            :contextmenu-body-option="contextmenuBodyOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                // contextmenu body option\n                contextmenuBodyOption: {\n                    // callback for all options\n                    callback: ({ type, selection }) => {\n                        const { rowKey, colKey } = selection;\n\n                        const rowIndex = this.tableData.findIndex((x) => x.rowKey === rowKey);\n\n                        // custom empty row\n                        if (type === "custom-empty-row") {\n                            this.tableData = this.tableData.map((rowData) => {\n                                // empty current row\n                                if (rowData.rowKey === rowKey) {\n                                    this.columns.forEach((column) => {\n                                        rowData[column.field] = "";\n                                    });\n                                }\n                                return rowData;\n                            });\n                        }\n\n                        console.log("type::", type);\n                        console.log("selection::", selection);\n                    },\n\n                    // contextmenus\n                    contextmenus: [\n                        {\n                            type: "INSERT_ROW_ABOVE",\n                        },\n                        {\n                            type: "INSERT_ROW_BELOW",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "custom-empty-row",\n                            label: "empty row(custom)",\n                        },\n                        {\n                            type: "customType1",\n                            label: "custom menu",\n                            children: [\n                                {\n                                    label: "menu5-1",\n                                    type: "menu5-1-type",\n                                    children: [\n                                        {\n                                            label: "menu5-1-1",\n                                            type: "menu5-1-1-type",\n                                        },\n                                        {\n                                            label: "menu5-2-2",\n                                            type: "menu5-2-2-type",\n                                        },\n                                    ],\n                                },\n                                {\n                                    label: "menu5-2",\n                                    disabled: true,\n                                },\n                                {\n                                    type: "SEPARATOR",\n                                },\n                                {\n                                    label: "menu5-3",\n                                    type: "menu5-3-type",\n                                },\n                            ],\n                        },\n                    ],\n                },\n\n                rowStyleOption: {\n                    clickHighlight: false,\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "name",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "date",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "number",\n                        key: "number",\n                        title: "Number",\n                        align: "right",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "address",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        number: "32",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        number: "676",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        number: "76",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        number: "7797",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        number: "8978",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},A=[];function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){R(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var C={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"row-key-field-name":"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"row-style-option":e.rowStyleOption,"border-y":"","contextmenu-body-option":e.contextmenuBodyOption}})],1)]],2)},n=[],t={data:function(){var e=this;return{contextmenuBodyOption:{callback:function(n){var t=n.type,a=n.selection,r=a.rowKey;a.colKey,e.tableData.findIndex((function(e){return e.rowKey===r}));"custom-empty-row"===t&&(e.tableData=e.tableData.map((function(n){return n.rowKey===r&&e.columns.forEach((function(e){n[e.field]=""})),n}))),console.log("type::",t),console.log("selection::",a)},contextmenus:[{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"custom-empty-row",label:"empty row(custom)"},{type:"customType1",label:"custom menu",children:[{label:"menu5-1",type:"menu5-1-type",children:[{label:"menu5-1-1",type:"menu5-1-1-type"},{label:"menu5-2-2",type:"menu5-2-2-type"}]},{label:"menu5-2",disabled:!0},{type:"SEPARATOR"},{label:"menu5-3",type:"menu5-3-type"}]}]},rowStyleOption:{clickHighlight:!1},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"name",title:"Name",align:"left",width:"15%"},{field:"date",key:"date",title:"Date",align:"left",width:"15%"},{field:"number",key:"number",title:"Number",align:"right",width:"30%"},{field:"address",key:"address",title:"Address",align:"left",width:"40%"}],tableData:[{name:"John",date:"1900-05-20",number:"32",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",number:"676",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",number:"76",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",number:"7797",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",number:"8978",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}}};return N({render:e,staticRenderFns:n},t)}()}},D=C,j=Object(i["a"])(D,S,A,!1,null,null,null),K=j.exports,B=t("dd46"),P={name:"basic-main",components:{Explain:s,ContextmenuTypes:b,Base:E,Custom:K,API:B["a"]}},I=P,T=Object(i["a"])(I,a,r,!1,null,null,null);n["default"]=T.exports},dd46:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.contextmenuBodyOption.data,columns:e.db.contextmenuBodyOption.columns}})],1)},r=[],o=t("3ef3"),l=t("d890"),i={components:{tpl:o["a"]},props:{anchor:{type:String,default:"右键菜单配置"},desc:{type:String,default:"contextmenuBodyOption"}},data:function(){return{db:l["a"]}}},c=i,d=t("2877"),s=Object(d["a"])(c,a,r,!1,null,null,null);n["a"]=s.exports}}]);
//# sourceMappingURL=chunk-3d04905d.602e83e8.js.map