(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15f792e7","chunk-2d217c5f"],{"57c9":function(t,e,n){var i=n("e343"),a=n("11eb"),r=n("d6ef"),s=n("9189"),o=TypeError,u=function(t){return function(e,n,u,c){i(n);var l=a(e),d=r(l),p=s(l),f=t?p-1:0,m=t?-1:1;if(u<2)while(1){if(f in d){c=d[f],f+=m;break}if(f+=m,t?f<0:p<=f)throw o("Reduce of empty array with no initial value")}for(;t?f>=0:p>f;f+=m)f in d&&(c=n(c,d[f],f,l));return c}};t.exports={left:u(!1),right:u(!0)}},"5ea7":function(t,e,n){(function(e){var i=n("98d4");t.exports="undefined"!=typeof e&&"process"==i(e)}).call(this,n("eef6"))},"95a6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Aone-page2"},[e("div",{staticClass:"lefts"},[e("p",{staticClass:"size20_weights"},[t._v("试卷详情"+t._s(t.set_points))]),e("p",{staticClass:"size16_weights"},[t._v(" 已选单选题"+t._s(t.single_num)+"道"+t._s(t.single_score)+"分 ， 已选多选题"+t._s(t.multi_num)+"道"+t._s(t.multi_score)+"分 ， 已选判断题"+t._s(t.judge_num)+"道"+t._s(t.judge_score)+"分 ， 已选总分"+t._s(t.score)+" "),e("span",{staticClass:"zongshu"},[t._v(t._s(t.total_s))])]),e("div",{staticClass:"questions_left"},[t._l(t.details,(function(n,i){return e("div",{staticClass:"item_question"},[e("div",{staticClass:"icon_lds"}),e("p",{staticClass:"ques_content"},[e("span",{staticClass:"ques_type",staticStyle:{display:"inline-block"}},[t._v(" 【 "+t._s(t.setType(n.question.type))+" 】")]),e("span",{staticClass:"chaochu2",staticStyle:{width:"80%"}},[t._v(t._s(i+1)+"、 "+t._s(n.question.content)+" ")])]),3==n.question.type?e("div",{staticStyle:{width:"90%"}},[e("p",{staticClass:"flex_center_starts2 item_aswer"},[e("el-radio",{staticStyle:{"text-align":"center",width:"10%","font-size":"16px"},attrs:{label:"是"}}),e("el-radio",{staticStyle:{"text-align":"center",width:"10%","font-size":"16px"},attrs:{label:"否"}})],1),e("p",{staticClass:"item_aswer",staticStyle:{"text-align":"left"}},[e("span",{staticClass:"bingo"},[t._v(" 正确答案为： "),e("span",[t._v(" "+t._s(t.set_pan(n.question.answer))+" ")])])])]):t._e(),2==n.question.type?e("div",{staticStyle:{width:"90%"}},[e("div",{staticClass:"item_aswer"},t._l(n.question.options,(function(t){return e("p",{staticStyle:{"text-align":"left"}},[e("el-checkbox",{attrs:{title:t.option+"."+t.content,label:t.option+"."+t.content}})],1)})),0),e("p",{staticClass:"item_aswer",staticStyle:{"text-align":"left"}},[e("span",{staticClass:"bingo"},[t._v(" 正确答案为： 【"),t._l(n.question.answer,(function(n){return e("span",[t._v(" "+t._s(n)+"、")])})),t._v(" 】 ")],2)])]):t._e(),1==n.question.type?e("div",{staticStyle:{width:"90%"}},[e("div",{staticClass:"item_aswer"},t._l(n.question.options,(function(t){return e("p",{staticStyle:{"text-align":"left"}},[e("el-radio",{attrs:{title:t.option+"."+t.content,label:t.option+"."+t.content}})],1)})),0),e("p",{staticClass:"item_aswer",staticStyle:{"text-align":"left"}},[e("span",{staticClass:"bingo"},[t._v(" 正确答案为： "),e("span",[t._v(" "+t._s(n.question.answer[0])+" ")])])])]):t._e()])})),0==t.details.length?e("div",{staticStyle:{margin:"100px auto",width:"50%","text-align":"center"}},[t._v(" 暂无选中题目 ")]):t._e()],2)])])},a=[],r=(n("a717"),n("ca55"),n("c7c8")),s={name:"paperDetail",data(){return{zancun_list:[],zhens:!1,dialogInfo2:{title:"试卷预览",visible:!1,width:"800px"},course:[{id:0,name:"全部"}],ability:[{id:0,name:"全部"}],judge:null,odd_num:null,even_num:null,activeName:"",paperId:0,formInline:{content:"",course_id:"",page:1,limit:10,degree:"",ability_id:"",type:""},filters:{content:"",course_id:"",page:1,limit:20,degree:"",ability_id:"",type:"",is_option:1},name:"",details:[],score:0,single_num:0,single_score:0,multi_num:0,multi_score:0,judge_num:0,judge_score:0,filters_list:[]}},created(){this.paperId=this.$route.query.paperId,this.getPaperQuestion()},computed:{},methods:{go_paper(){let t=[];this.$store.state.d2admin.account.filters_list.map(e=>{t.push(e.id)}),Object(r["paperQuestion2"])(this.paperId,t).then(t=>{console.log(t,"是否提交成功")})},set_paper(){if(100!=this.total_s)return this.$message.warning("请确保总分为100分"),!1;100==this.total_s&&(this.dialogInfo2.visible=!0)},getkey(t){return t.id},del_item(t,e){console.log(this.$store.state.d2admin.account.filters_list[t].id,"删除数组id"),console.log(t,"删除数组角标"),console.log(e,"删除得数据");let n=[];this.$store.state.d2admin.account.filters_list.map(t=>{t.id!=e.id&&n.push(t)}),this.$nextTick(()=>{this.$refs.lds_new_table.toggleRowSelection(e,!1),this.$store.state.d2admin.account.filters_list=n,console.log(this.$store.state.d2admin.account.filters_list,"剩余数组")})},handleCurrentChange(t){this.filters.page=t,this.getSearch()},merge(t,e){t=[...t,...e],t=Array.from(new Set(t)),console.log(t)},handleSelectionChange(t){if(console.log(t,"执行了搜索x原始数据"),t){console.log("并且是已经选择过的——————————————————————");let e=t;e=e.flat(2),console.log(e,"xx2，降维之后得数据");let n={},i=e.reduce((t,e)=>(!n[e.id]&&(n[e.id]=t.push(e)),t),[]);console.log(i,"去重测试"),console.log(i,"newx首次去重之后得数据"),this.$store.state.d2admin.account.filters_list=i,console.log(this.$store.state.d2admin.account.filters_list,"当前得左侧数据")}},get_question(t){},set_pan(t){return"True"==t[0]?"正确":"错误"},set_duo(t){let e="";return t.map(t=>{e=t+" 、"}),e},setType(t){return 3==t?"判断题":2==t?"多选题":1==t?"单选题":void 0},setKey(){this.filters.content=this.formInline.content,this.filters.type=this.formInline.type||"0",this.filters.degree=this.formInline.degree||"0",this.filters.ability_id=this.formInline.ability_id||"0",this.filters.course_id=this.formInline.course_id||"0"},getPaperQuestion(){Object(r["paperQuestion"])(this.paperId,{limit:100}).then(t=>{console.log(t,"22"),200==t.code?(this.name=t.data.name,this.details=t.data.details,this.score=t.data.score,this.single_num=t.data.single_num,this.single_score=t.data.single_score,this.multi_num=t.data.multi_num,this.multi_score=t.data.multi_score,this.judge_num=t.data.judge_num,this.judge_score=t.data.judge_score):this.$message.error("系统异常")})}}},o=s,u=(n("fb90"),n("e607")),c=function(t){t.options.__source="src/views/exam/paperDetail2.vue"},l=c,d=Object(u["a"])(o,i,a,!1,null,"42dae0b0",null);"function"===typeof l&&l(d);e["default"]=d.exports},a504:function(t,e,n){"use strict";var i=n("e71d");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){return 1},1)}))}},bf2b:function(t,e,n){},c7c8:function(t,e,n){"use strict";n.r(e),n.d(e,"new_agency",(function(){return a})),n.d(e,"new_agency2",(function(){return r})),n.d(e,"new_area",(function(){return s})),n.d(e,"new_area2",(function(){return o})),n.d(e,"process",(function(){return u})),n.d(e,"process2",(function(){return c})),n.d(e,"getagency",(function(){return l})),n.d(e,"process3",(function(){return d})),n.d(e,"target",(function(){return p})),n.d(e,"target2",(function(){return f})),n.d(e,"score",(function(){return m})),n.d(e,"detail",(function(){return _})),n.d(e,"dels",(function(){return g})),n.d(e,"puts",(function(){return h})),n.d(e,"getquestion",(function(){return b})),n.d(e,"getcourse",(function(){return y})),n.d(e,"getability",(function(){return j})),n.d(e,"postquestion",(function(){return v})),n.d(e,"putquestion",(function(){return x})),n.d(e,"deletequestion",(function(){return w})),n.d(e,"paperList",(function(){return O})),n.d(e,"paperDelete",(function(){return q})),n.d(e,"paperEdit",(function(){return $})),n.d(e,"paperRevoke",(function(){return C})),n.d(e,"paperCreate",(function(){return S})),n.d(e,"paperQuestion",(function(){return I})),n.d(e,"paperQuestion2",(function(){return k})),n.d(e,"getpaper",(function(){return E})),n.d(e,"postpaper",(function(){return z})),n.d(e,"getpapermine",(function(){return T})),n.d(e,"getresult",(function(){return Q})),n.d(e,"getid",(function(){return D})),n.d(e,"get_look",(function(){return A})),n.d(e,"top_one",(function(){return L}));var i=n("dd88");n("86ba");function a(t){return Object(i["a"])({url:"/api/agency/",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/api/agency/",method:"get"})}function s(t){return Object(i["a"])({url:"/api/system/area/?code=100000",method:"get"})}function o(t){return Object(i["a"])({url:"/api/system/area/?code="+t,method:"get"})}function u(t){return Object(i["a"])({url:"/api/agency/process/",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/api/agency/process/",method:"get",params:t})}function l(t){return Object(i["a"])({url:`/api/agency/${t}/`,method:"get"})}function d(t){return Object(i["a"])({url:"/api/agency/process/",method:"put",params:t})}function p(t){return Object(i["a"])({url:"/api/agency/target/",method:"get",params:t})}function f(t){return Object(i["a"])({url:"/api/agency/target/",method:"post",data:t})}function m(t){return Object(i["a"])({url:"/api/agency/target/score/",method:"get",params:t})}function _(t){return Object(i["a"])({url:`/api/agency/process/detail/${t}/`,method:"get"})}function g(t){return Object(i["a"])({url:`/api/agency/${t}/`,method:"DELETE"})}function h(t){return Object(i["a"])({url:`/api/agency/${t}/`,method:"put"})}function b(t){return Object(i["a"])({url:"/api/exam/question/",method:"get",params:t})}function y(t){return Object(i["a"])({url:"/api/exam/course/",method:"get"})}function j(t){return Object(i["a"])({url:"/api/exam/ability/",method:"get"})}function v(t){return Object(i["a"])({url:"/api/exam/question/",method:"post",data:t})}function x(t,e){return Object(i["a"])({url:"/api/exam/question/"+t+"/",method:"put",data:e})}function w(t){return Object(i["a"])({url:`/api/exam/question/${t}/`,method:"DELETE"})}function O(t){return Object(i["a"])({url:"/api/exam/paper/",method:"get",params:t})}function q(t){return Object(i["a"])({url:`/api/exam/paper/${t}/`,method:"delete"})}function $(t,e){return Object(i["a"])({url:`/api/exam/paper/${t}/`,method:"put",data:e})}function C(t,e){return Object(i["a"])({url:`/api/exam/paper/${t}/`,method:"patch",data:e})}function S(t){return Object(i["a"])({url:"/api/exam/paper/",method:"post",data:t})}function I(t,e){return Object(i["a"])({url:`/api/exam/paper_question/${t}/`,method:"get",params:e})}function k(t,e){return Object(i["a"])({url:`/api/exam/paper_question/${t}/`,method:"put",data:e})}function E(){return Object(i["a"])({url:"/api/exam/paper/",method:"get"})}function z(t,e){return Object(i["a"])({url:`/api/exam/mine/${t}/`,method:"post",data:e})}function T(){return Object(i["a"])({url:"/api/exam/mine/",method:"get"})}function Q(t){return Object(i["a"])({url:`/api/exam/result/${t}/`,method:"get"})}function D(t){return Object(i["a"])({url:"/api/exam/mine/",method:"post",data:t})}function A(t){return Object(i["a"])({url:`/api/exam/mine/${t}/`,method:"get"})}function L(t){return Object(i["a"])({url:`/api/exam/paper_score/${t}/`,method:"get"})}},ca55:function(t,e,n){"use strict";var i=n("31c1"),a=n("57c9").left,r=n("a504"),s=n("f812"),o=n("5ea7"),u=!o&&s>79&&s<83,c=u||!r("reduce");i({target:"Array",proto:!0,forced:c},{reduce:function(t){var e=arguments.length;return a(this,t,e,e>1?arguments[1]:void 0)}})},fb90:function(t,e,n){"use strict";n("bf2b")}}]);