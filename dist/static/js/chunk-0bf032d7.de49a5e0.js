(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bf032d7","chunk-2d217c5f"],{8718:function(t,e,n){},c7c8:function(t,e,n){"use strict";n.r(e),n.d(e,"new_agency",(function(){return s})),n.d(e,"new_agency2",(function(){return r})),n.d(e,"new_area",(function(){return i})),n.d(e,"new_area2",(function(){return o})),n.d(e,"process",(function(){return u})),n.d(e,"process2",(function(){return c})),n.d(e,"getagency",(function(){return l})),n.d(e,"process3",(function(){return d})),n.d(e,"target",(function(){return p})),n.d(e,"target2",(function(){return h})),n.d(e,"score",(function(){return _})),n.d(e,"detail",(function(){return m})),n.d(e,"dels",(function(){return g})),n.d(e,"puts",(function(){return f})),n.d(e,"getquestion",(function(){return b})),n.d(e,"getcourse",(function(){return w})),n.d(e,"getability",(function(){return v})),n.d(e,"postquestion",(function(){return y})),n.d(e,"putquestion",(function(){return j})),n.d(e,"deletequestion",(function(){return x})),n.d(e,"paperList",(function(){return q})),n.d(e,"paperDelete",(function(){return O})),n.d(e,"paperEdit",(function(){return C})),n.d(e,"paperRevoke",(function(){return $})),n.d(e,"paperCreate",(function(){return k})),n.d(e,"paperQuestion",(function(){return I})),n.d(e,"paperQuestion2",(function(){return E})),n.d(e,"getpaper",(function(){return S})),n.d(e,"postpaper",(function(){return T})),n.d(e,"getpapermine",(function(){return D})),n.d(e,"getresult",(function(){return H})),n.d(e,"getid",(function(){return Q})),n.d(e,"get_look",(function(){return A})),n.d(e,"top_one",(function(){return F}));var a=n("dd88");n("86ba");function s(t){return Object(a["a"])({url:"/api/agency/",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/api/agency/",method:"get"})}function i(t){return Object(a["a"])({url:"/api/system/area/?code=100000",method:"get"})}function o(t){return Object(a["a"])({url:"/api/system/area/?code="+t,method:"get"})}function u(t){return Object(a["a"])({url:"/api/agency/process/",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/api/agency/process/",method:"get",params:t})}function l(t){return Object(a["a"])({url:`/api/agency/${t}/`,method:"get"})}function d(t){return Object(a["a"])({url:"/api/agency/process/",method:"put",params:t})}function p(t){return Object(a["a"])({url:"/api/agency/target/",method:"get",params:t})}function h(t){return Object(a["a"])({url:"/api/agency/target/",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/api/agency/target/score/",method:"get",params:t})}function m(t){return Object(a["a"])({url:`/api/agency/process/detail/${t}/`,method:"get"})}function g(t){return Object(a["a"])({url:`/api/agency/${t}/`,method:"DELETE"})}function f(t){return Object(a["a"])({url:`/api/agency/${t}/`,method:"put"})}function b(t){return Object(a["a"])({url:"/api/exam/question/",method:"get",params:t})}function w(t){return Object(a["a"])({url:"/api/exam/course/",method:"get"})}function v(t){return Object(a["a"])({url:"/api/exam/ability/",method:"get"})}function y(t){return Object(a["a"])({url:"/api/exam/question/",method:"post",data:t})}function j(t,e){return Object(a["a"])({url:"/api/exam/question/"+t+"/",method:"put",data:e})}function x(t){return Object(a["a"])({url:`/api/exam/question/${t}/`,method:"DELETE"})}function q(t){return Object(a["a"])({url:"/api/exam/paper/",method:"get",params:t})}function O(t){return Object(a["a"])({url:`/api/exam/paper/${t}/`,method:"delete"})}function C(t,e){return Object(a["a"])({url:`/api/exam/paper/${t}/`,method:"put",data:e})}function $(t,e){return Object(a["a"])({url:`/api/exam/paper/${t}/`,method:"patch",data:e})}function k(t){return Object(a["a"])({url:"/api/exam/paper/",method:"post",data:t})}function I(t,e){return Object(a["a"])({url:`/api/exam/paper_question/${t}/`,method:"get",params:e})}function E(t,e){return Object(a["a"])({url:`/api/exam/paper_question/${t}/`,method:"put",data:e})}function S(){return Object(a["a"])({url:"/api/exam/paper/",method:"get"})}function T(t,e){return Object(a["a"])({url:`/api/exam/mine/${t}/`,method:"post",data:e})}function D(){return Object(a["a"])({url:"/api/exam/mine/",method:"get"})}function H(t){return Object(a["a"])({url:`/api/exam/result/${t}/`,method:"get"})}function Q(t){return Object(a["a"])({url:"/api/exam/mine/",method:"post",data:t})}function A(t){return Object(a["a"])({url:`/api/exam/mine/${t}/`,method:"get"})}function F(t){return Object(a["a"])({url:`/api/exam/paper_score/${t}/`,method:"get"})}},d4ea:function(t,e,n){"use strict";n("8718")},ddc3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("d2-container",[e("div",{staticClass:"Aone-page",staticStyle:{overflow:"auto"}},[e("p",{staticStyle:{color:"gray",cursor:"pointer"}},[t._v("等级考试 > "),e("span",{on:{click:function(e){return t.goback2()}}},[t._v(" "+t._s(t.lastTitle)+" ")]),t._v(" > "),e("span",{staticStyle:{color:"black"}},[t._v("评测详情")])]),e("br"),e("br"),e("div",{staticClass:"heads"},[e("p"),e("h1",{staticClass:"size20_weights"},[t._v(" "+t._s(t.name)+" ")]),e("br"),e("p"),e("p",{staticStyle:{color:"gray"}},[t._v(" 试卷说明： 该考试单选题"+t._s(t.single_num)+"个共"+t._s(t.single_num)+"分，多选题"+t._s(t.multi_num)+"个共"+t._s(t.multi_score)+"分，判断题"+t._s(t.judge_num)+"个共"+t._s(t.judge_score)+"分，总分为"+t._s(t.score)+"分。 ")])]),e("br"),e("br"),e("br"),e("div",{staticClass:"body-lefts"},t._l(t.all_question,(function(n,a){return e("div",[e("p",{staticClass:"size18_weights"},[e("span",{staticClass:"dabiaoti"},[t._v(t._s(a+1)+". "+t._s(n.question.content))])]),t._l(n.question.options,(function(a,s){return e("div",[1==n.question.type?e("div",[e("el-radio",{staticClass:"new_radio2",attrs:{label:a.option,disabled:""},model:{value:n.record.answer[0],callback:function(e){t.$set(n.record.answer,0,e)},expression:"item.record.answer[0]"}},[t._v(t._s(a.option+"."+a.content)+" ")])],1):t._e(),2==n.question.type?e("div",[e("el-checkbox",{staticClass:"new_radio2",attrs:{label:a.option,disabled:""},model:{value:n.record.answer,callback:function(e){t.$set(n.record,"answer",e)},expression:"item.record.answer"}},[t._v(t._s(a.option+"."+a.content)+" ")])],1):t._e(),3==n.question.type?e("div",[e("el-radio",{staticClass:"new_radio2",attrs:{label:a,disabled:""},model:{value:n.record.answer[0],callback:function(e){t.$set(n.record.answer,0,e)},expression:"item.record.answer[0]"}})],1):t._e()])})),1==n.question.type&&0==n.record.is_right?e("div",[e("span",{staticClass:"wrongs"},[t._v(" 答错了 ")]),e("p",{staticClass:"rights_p"},[t._v(" 题目答案为："),e("span",{},[t._v(t._s(n.question.answer[0]))])])]):t._e(),2==n.question.type&&0==n.record.is_right?e("div",[e("span",{staticClass:"wrongs"},[t._v(" 答错了 ")]),e("p",{staticClass:"rights_p"},[t._v(" 题目答案为："),t._l(n.question.answer,(function(n){return e("span",{},[t._v(t._s(n))])}))],2)]):t._e(),3==n.question.type&&0==n.record.is_right?e("div",[e("span",{staticClass:"wrongs"},[t._v(" 答错了 ")]),e("p",{staticClass:"rights_p"},[t._v(" 题目答案为："),"True"==n.question.answer[0]?e("span",{},[t._v("正确")]):t._e(),"False"==n.question.answer[0]?e("span",{},[t._v("错误")]):t._e()])]):t._e(),e("el-divider")],2)})),0),e("div",{staticClass:"body-rights"},[e("div",{staticClass:"dati"},[e("p",{staticClass:"flex_center_starts2"},[e("img",{attrs:{src:"/image/AOne/dao.png",alt:""}}),e("span",[t._v("评测用时")])]),e("br"),e("br"),e("span",{staticClass:"times"},[t._v(" "+t._s(t.used_time)+" ")])]),e("br"),e("br"),e("br"),e("div",{staticClass:"dati"},[e("p",{staticClass:"flex_center_starts2"},[e("img",{attrs:{src:"/image/AOne/tests.png",alt:""}}),e("span",[t._v("答题卡")])]),e("br"),e("br"),e("div",t._l(t.all_question,(function(n,a){return e("span",{staticStyle:{"margin-left":"20px"}},[e("span",{class:t.setClass(1==n.record.is_right)?"done":"doing",staticStyle:{width:"30px"}},[t._v(t._s(a+1))])])})),0),e("br"),e("p",{staticStyle:{width:"100%",border:"1px solid #E8E8E8"}}),e("p",{staticClass:"flex_center_starts2",staticStyle:{"text-align":"left","margin-top":"20px",width:"60%"}},[e("span",{staticClass:"tuli"}),e("span",{staticClass:"tuli2"},[t._v("正确")]),e("span",{staticClass:"tuli",staticStyle:{background:"red",border:"1px solid #E8E8E8"}}),e("span",{staticClass:"tuli2"},[t._v("错误")])]),e("br"),e("br"),e("p",{staticClass:"flex_center_center",staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"primary_test"},on:{click:function(e){return t.go_left()}}},[t._v("返回")])],1)])])])])},s=[],r=(n("a717"),n("c7c8")),i={name:"mine",inject:["routerRefresh"],data(){return{data_id:"",paperId:"",lastTitle:"",total_count:"",warings:!1,flag:null,one:"00",two:"00",three:"00",abc:0,cde:0,efg:0,new_time:"",all_sbu:[],ins:{},next:!0,body_list:[],miao:0,visible:!1,top:0,left:0,shangwei:!1,sta:"",seconds:"",name:"",details:"",score:0,single_num:0,single_score:0,multi_num:0,multi_score:0,judge_num:0,judge_score:0,all_question:[],used_time:""}},created(){this.startHandler(),this.sta=this.$route.query.sta,this.lastTitle=this.$route.query.title,this.getPaperQuestion()},methods:{go_left(){this.$router.go(-1)},getPaperQuestion(){this.paperId=this.$route.query.exam_id,Object(r["get_look"])(this.paperId).then(t=>{if(console.log(t,"22"),200==t.code){this.details=t.data.details,this.name=t.data.name,this.used_time=t.data.used_time,this.single_num=t.data.single_num,this.single_score=t.data.single_score,this.multi_num=t.data.multi_num,this.multi_score=t.data.multi_score,this.judge_num=t.data.judge_num,this.judge_score=t.data.judge_score,this.score=t.data.paper_score;var e=t.data.details;e.map(t=>{1==t.question.type&&(t.point=[]),2==t.question.type&&(t.point=[]),3==t.question.type&&(t.point=[],t.question.options=["正确","错误"],"True"==t.record.answer[0]&&(t.record.answer[0]="正确"),"False"==t.record.answer[0]&&(t.record.answer[0]="错误"))}),this.all_question=e,console.log(this.all_question,"all_question")}else this.$message.error("系统异常")})},formatSeconds(t){let e=parseInt(t),n=0,a=0;e>60&&(n=parseInt(e/60),e=parseInt(e%60),n>60&&(a=parseInt(n/60),n=parseInt(n%60)));let s=parseInt(e)+" 秒 ";return n>0&&(s=parseInt(n)+" 分 "+s),a>0&&(s=parseInt(a)+" 小时 "+s),s},goback2(){this.$router.go(-1)},startHandler(){this.flag=setInterval(()=>{let t=0;t+=1,this.miao+=1,60===this.three||"60"===this.three?(this.three="00",this.abc=0,60===this.two||"60"===this.two?(this.two="00",this.cde=0,this.efg+1<=9?(this.efg++,this.one="0"+this.efg):(this.efg++,this.one=this.efg)):this.cde+1<=9?(this.cde++,this.two="0"+this.cde):(this.cde++,this.two=this.cde)):this.abc+1<=9?(this.abc++,this.three="0"+this.abc):(this.abc++,this.three=this.abc)},1e3)},endHandler(){this.flag=clearInterval(this.flag)},go_points(){this.endHandler(),this.new_time=this.miao,console.log(this.all_question,"90");let t=[];this.all_question.map(e=>{e.point&&t.push({question_id:e.question.id,answer:[e.point]})}),t.map(t=>{t.answer=t.answer.flat()}),console.log(t),console.log(t),this.bianli(t)?Object(r["postpaper"])(this.data_id,{records:t}).then(t=>{200==t.code?(this.$message.success(t.message),this.$router.push({path:"/exam/mine/end",query:{exam_id:this.data_id,paper_id:this.paperId}})):this.$message.warning(t.message)}):(this.$message.warning("尚未完成全部评测题目！3秒后请重新作答"),setTimeout(()=>{},3e3))},bianli(t){t.some(t=>{t.answer.length})},setClass(t){return""!=t},getTime(t){var e=new Date(1e3*parseInt(t)),n=e.getFullYear(),a=e.getMonth()+1,s=e.getDate();return a=1==a.toString().length?"0"+a:a,s=1==s.toString().length?"0"+s:s,n+"-"+a+"-"+s+" "}},watch:{$route(t,e){this.routerRefresh()}}},o=i,u=(n("d4ea"),n("e607")),c=function(t){t.options.__source="src/views/exam/test_paper_look.vue"},l=c,d=Object(u["a"])(o,a,s,!1,null,"66cb7b56",null);"function"===typeof l&&l(d);e["default"]=d.exports}}]);