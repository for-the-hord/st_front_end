(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5599e417"],{"0684":function(t,e,n){"use strict";n("3b07")},"3b07":function(t,e,n){},"609e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d2-contentmenu-list",on:{click:t.rowClick}},t._l(t.menulist,(function(n){return e("div",{key:n.value,staticClass:"d2-contentmenu-item",attrs:{"data-value":n.value,flex:"cross:center main:center"}},[n.icon?e("d2-icon",{attrs:{name:n.icon}}):t._e(),e("div",{staticClass:"d2-contentmenu-item-title",attrs:{"flex-box":"1"}},[t._v(" "+t._s(n.title)+" ")])],1)})),0)},s=[],o={name:"d2-contextmenu-list",props:{menulist:{type:Array,default:()=>[]}},methods:{rowClick(t){let e=t.target;while(!e.dataset.value)e=e.parentNode;this.$emit("rowClick",e.dataset.value)}}},c=o,a=(n("0684"),n("e607")),u=function(t){t.options.__source="src/layout/header-aside/components/contextmenu/components/contentmenuList/index.vue"},l=u,r=Object(a["a"])(c,i,s,!1,null,null,null);"function"===typeof l&&l(r);e["default"]=r.exports}}]);