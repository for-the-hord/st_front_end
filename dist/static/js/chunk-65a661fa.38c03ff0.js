(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65a661fa"],{"362c":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"d2-contextmenu",style:e.style},[e._t("default")],2)},i=[],o={name:"d2-contextmenu",props:{visible:{type:Boolean,default:!1},x:{type:Number,default:0},y:{type:Number,default:0}},computed:{flag:{get(){return this.visible&&window.addEventListener("mousedown",this.watchContextmenu),this.visible},set(e){this.$emit("update:visible",e)}},style(){return{left:this.x+"px",top:this.y+"px",display:this.visible?"block":"none "}}},methods:{watchContextmenu(e){this.$el.contains(e.target)&&0===e.button||(this.flag=!1),window.removeEventListener("mousedown",this.watchContextmenu)}},mounted(){document.querySelector("body").appendChild(this.$el)}},u=o,a=(n("e8f2"),n("e607")),l=function(e){e.options.__source="src/layout/header-aside/components/contextmenu/index.vue"},c=l,d=Object(a["a"])(u,s,i,!1,null,null,null);"function"===typeof c&&c(d);t["default"]=d.exports},4932:function(e,t,n){},e8f2:function(e,t,n){"use strict";n("4932")}}]);