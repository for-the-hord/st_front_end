(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-459891e0","chunk-2d217eca"],{b3e9:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("d2-container",[e("div",{staticClass:"Aone-page"},[e("br"),e("br"),e("div",[e("div",{staticClass:"mine-head"},[e("div",{staticClass:"main"},[e("p"),e("h1",{staticClass:"scores weights"},[t._v(" "+t._s(t.result.score)+" "),e("span",{staticClass:"normals"},[t._v("分")])]),e("p",{staticStyle:{color:"#000000","margin-top":"20px"}},[t._v("完成时间："+t._s(t.getTime(t.result.finished)))]),e("p"),e("div",{staticClass:"main-body flex_center_around"},[e("div",{staticClass:"lefts"},[e("p",{staticClass:"weights",staticStyle:{float:"left"}},[t._v("得分详情")]),e("br"),e("br"),e("br"),e("div",{staticClass:"lefts-div flex_center_around"},[e("div",{staticClass:"divs"},[e("p",[t._v("识记评分： "),e("span",{staticClass:"scores_div"},[t._v(" "+t._s(t.result.memory))])]),e("br"),e("p",[t._v("领会评分： "),e("span",{staticClass:"scores_div"},[t._v(" "+t._s(t.result.grasp))])])]),e("div",{staticClass:"divs"},[e("p",[t._v("运用评分： "),e("span",{staticClass:"scores_div"},[t._v(" "+t._s(t.result.apply))])]),e("br"),e("p",[t._v("分析评分： "),e("span",{staticClass:"scores_div"},[t._v(" "+t._s(t.result.analyse))])])]),e("div",{staticClass:"divs"},[e("p",[t._v("综合评分： "),e("span",{staticClass:"scores_div"},[t._v(" "+t._s(t.result.evaluate))])]),e("br"),e("p",[t._v("评价评分： "),e("span",{staticClass:"scores_div"},[t._v(" "+t._s(t.result.synthesis))])])])]),e("br"),e("br"),e("br"),e("p",{staticClass:"weights",staticStyle:{float:"left"}},[t._v("其他")]),e("br"),e("br"),e("br"),e("div",{staticClass:"lefts-div flex_center_around"},[e("div",{staticClass:"divs2 flex_center_around"},[e("div",[e("img",{attrs:{src:"/image/AOne/pai.png",alt:""}})]),e("div",{staticClass:"pointer",on:{click:function(e){return t.go_top()}}},[e("p",[t._v("当前排名")]),e("br"),e("p",{staticClass:"weights"},[t._v(" "+t._s(t.result.rank)+" ")])])]),e("div",{staticClass:"divs2 flex_center_around pointer"},[e("div",[e("img",{attrs:{src:"/image/AOne/xie.png",alt:""}})]),e("div",{staticStyle:{"text-align":"left"},on:{click:function(e){return t.go_cha()}}},[e("p",[t._v("查看评测")]),e("br"),e("p",{staticStyle:{color:"gray"}},[t._v(" 查看作答记录 ")])])])])]),e("div",{staticClass:"rights"},[e("p",{staticClass:"weights",staticStyle:{"text-align":"left"}},[t._v("考试雷达图")]),e("div",{staticClass:"leida"},[t.zhen?e("qdLeida6",{attrs:{activity:t.result}}):t._e()],1)])]),e("el-button",{on:{click:function(e){return t.go_back2()}}},[t._v(" 返回 ")])],1)])])])])},a=[],i=(n("ed70"),n("0126"),n("c997")),u={name:"mine",data(){return{result:{id:"",exam_id:"",paper_id:"",score:"",rank:"",finished:"",memory:"",grasp:"",apply:"",analyse:"",evaluate:"",synthesis:""},zhen:!1,visible:!1,top:0,left:0}},created(){console.log(this.$route.query.exam_id,"000"),this.result.exam_id=this.$route.query.exam_id,this.result.paper_id=this.$route.query.paper_id,Object(i["getresult"])(this.$route.query.exam_id).then(t=>{this.result.finished=t.data.score,this.result.rank=t.data.score,this.result.score=t.data.score,this.result.analyse=t.data.ability.analyse,this.result.apply=t.data.ability.apply,this.result.evaluate=t.data.ability.evaluate,this.result.grasp=t.data.ability.grasp,this.result.memory=t.data.ability.memory,this.result.synthesis=t.data.ability.synthesis,this.result.finished=t.data.finished,this.zhen=!0})},watch:{},methods:{go_top(){this.$router.push({path:"/exam/mine/top",query:{id:this.result.paper_id}})},go_cha(){this.$router.push({path:"/exam/mine/test_paper_look",query:{exam_id:this.result.exam_id,title:this.$route.query.title}})},go_back2(){this.$router.go(-1)},getTime(t){var e=new Date(1e3*parseInt(t)),n=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return r=1==r.toString().length?"0"+r:r,a=1==a.toString().length?"0"+a:a,n+"-"+r+"-"+a+" "},openMenu(t,e){var n=t.pageX,r=t.pageY;this.top=r,this.left=n,this.visible=!0},closeMenu(){this.visible=!1}}},o=u,s=(n("f348"),n("e607")),c=function(t){t.options.__source="src/views/newdata/end.vue"},d=c,p=Object(s["a"])(o,r,a,!1,null,"fb264b12",null);"function"===typeof d&&d(p);e["default"]=p.exports},c997:function(t,e,n){"use strict";n.r(e),n.d(e,"getFormwork",(function(){return a})),n.d(e,"getUnitItem",(function(){return i})),n.d(e,"getDataItem",(function(){return u})),n.d(e,"addFormwork",(function(){return o})),n.d(e,"delFormwork",(function(){return s})),n.d(e,"putFormworkItem",(function(){return c})),n.d(e,"getFormworkItem",(function(){return d})),n.d(e,"getEquipmentSearch",(function(){return p})),n.d(e,"getUnitSearch",(function(){return l})),n.d(e,"getFormworkSearch",(function(){return f})),n.d(e,"getDataInfo",(function(){return m})),n.d(e,"getDataInfoItem",(function(){return h})),n.d(e,"getUnit",(function(){return g})),n.d(e,"addUnit",(function(){return b})),n.d(e,"putUnitItem",(function(){return _})),n.d(e,"delUnit",(function(){return v})),n.d(e,"addDataInfo",(function(){return y})),n.d(e,"delDataInfo",(function(){return O})),n.d(e,"putDataInfo",(function(){return j})),n.d(e,"getexcel",(function(){return x})),n.d(e,"new_agency",(function(){return w})),n.d(e,"new_agency2",(function(){return C})),n.d(e,"new_area",(function(){return k})),n.d(e,"new_area2",(function(){return I})),n.d(e,"process",(function(){return $})),n.d(e,"process2",(function(){return q})),n.d(e,"getagency",(function(){return D})),n.d(e,"process3",(function(){return S})),n.d(e,"target",(function(){return F})),n.d(e,"target2",(function(){return U})),n.d(e,"score",(function(){return E})),n.d(e,"detail",(function(){return L})),n.d(e,"dels",(function(){return T})),n.d(e,"puts",(function(){return z})),n.d(e,"getquestion",(function(){return A})),n.d(e,"getcourse",(function(){return M})),n.d(e,"getability",(function(){return J})),n.d(e,"postquestion",(function(){return Q})),n.d(e,"putquestion",(function(){return Y})),n.d(e,"deletequestion",(function(){return B})),n.d(e,"paperList",(function(){return R})),n.d(e,"paperDelete",(function(){return X})),n.d(e,"paperEdit",(function(){return G})),n.d(e,"paperRevoke",(function(){return H})),n.d(e,"paperCreate",(function(){return K})),n.d(e,"paperQuestion",(function(){return N})),n.d(e,"paperQuestion2",(function(){return P})),n.d(e,"getpaper",(function(){return V})),n.d(e,"postpaper",(function(){return W})),n.d(e,"getpapermine",(function(){return Z})),n.d(e,"getresult",(function(){return tt})),n.d(e,"getid",(function(){return et})),n.d(e,"get_look",(function(){return nt})),n.d(e,"top_one",(function(){return rt}));var r=n("dd88");n("86ba");function a(t){return Object(r["a"])({url:"/api/getFormwork",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/api/getUnitItem",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/api/getExcelByData",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/api/addFormwork",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/api/delFormwork",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/api/putFormworkItem",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/api/getFormworkItem",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/api/getEquipmentSearch",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/api/getUnitSearch",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/api/getFormworkSearch",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/api/getDataInfo",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/api/getDataInfoItem",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/api/getUnit",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/api/addUnit",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/api/putUnitItem",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/api/delUnit",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/api/addDataInfo",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/api/delDataInfo",method:"post",data:t})}function j(t){return Object(r["a"])({url:"/api/putDataInfo",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/api/getexcel",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/api/agency/",method:"post",data:t})}function C(t){return Object(r["a"])({url:"/api/agency/",method:"get"})}function k(t){return Object(r["a"])({url:"/api/system/area/?code=100000",method:"get"})}function I(t){return Object(r["a"])({url:"/api/system/area/?code="+t,method:"get"})}function $(t){return Object(r["a"])({url:"/api/agency/process/",method:"post",data:t})}function q(t){return Object(r["a"])({url:"/api/agency/process/",method:"get",params:t})}function D(t){return Object(r["a"])({url:`/api/agency/${t}/`,method:"get"})}function S(t){return Object(r["a"])({url:"/api/agency/process/",method:"put",params:t})}function F(t){return Object(r["a"])({url:"/api/agency/target/",method:"get",params:t})}function U(t){return Object(r["a"])({url:"/api/agency/target/",method:"post",data:t})}function E(t){return Object(r["a"])({url:"/api/agency/target/score/",method:"get",params:t})}function L(t){return Object(r["a"])({url:`/api/agency/process/detail/${t}/`,method:"get"})}function T(t){return Object(r["a"])({url:`/api/agency/${t}/`,method:"DELETE"})}function z(t){return Object(r["a"])({url:`/api/agency/${t}/`,method:"put"})}function A(t){return Object(r["a"])({url:"/api/exam/question/",method:"get",params:t})}function M(t){return Object(r["a"])({url:"/api/exam/course/",method:"get"})}function J(t){return Object(r["a"])({url:"/api/exam/ability/",method:"get"})}function Q(t){return Object(r["a"])({url:"/api/exam/question/",method:"post",data:t})}function Y(t,e){return Object(r["a"])({url:"/api/exam/question/"+t+"/",method:"put",data:e})}function B(t){return Object(r["a"])({url:`/api/exam/question/${t}/`,method:"DELETE"})}function R(t){return Object(r["a"])({url:"/api/exam/paper/",method:"get",params:t})}function X(t){return Object(r["a"])({url:`/api/exam/paper/${t}/`,method:"delete"})}function G(t,e){return Object(r["a"])({url:`/api/exam/paper/${t}/`,method:"put",data:e})}function H(t,e){return Object(r["a"])({url:`/api/exam/paper/${t}/`,method:"patch",data:e})}function K(t){return Object(r["a"])({url:"/api/exam/paper/",method:"post",data:t})}function N(t,e){return Object(r["a"])({url:`/api/exam/paper_question/${t}/`,method:"get",params:e})}function P(t,e){return Object(r["a"])({url:`/api/exam/paper_question/${t}/`,method:"put",data:e})}function V(){return Object(r["a"])({url:"/api/exam/paper/",method:"get"})}function W(t,e){return Object(r["a"])({url:`/api/exam/mine/${t}/`,method:"post",data:e})}function Z(){return Object(r["a"])({url:"/api/exam/mine/",method:"get"})}function tt(t){return Object(r["a"])({url:`/api/exam/result/${t}/`,method:"get"})}function et(t){return Object(r["a"])({url:"/api/exam/mine/",method:"post",data:t})}function nt(t){return Object(r["a"])({url:`/api/exam/mine/${t}/`,method:"get"})}function rt(t){return Object(r["a"])({url:`/api/exam/paper_score/${t}/`,method:"get"})}},e9a7:function(t,e,n){},f348:function(t,e,n){"use strict";n("e9a7")}}]);