(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1adcf38","chunk-2d217eca"],{"472d":function(e,t,n){"use strict";n("60d0")},"60d0":function(e,t,n){},c997:function(e,t,n){"use strict";n.r(t),n.d(t,"getFormwork",(function(){return r})),n.d(t,"addFormwork",(function(){return a})),n.d(t,"delFormwork",(function(){return o})),n.d(t,"putFormworkItem",(function(){return l})),n.d(t,"getFormworkItem",(function(){return s})),n.d(t,"getEquipmentSearch",(function(){return c})),n.d(t,"getUnitSearch",(function(){return u})),n.d(t,"getFormworkSearch",(function(){return d})),n.d(t,"getDataInfo",(function(){return p})),n.d(t,"getUnit",(function(){return m})),n.d(t,"addUnit",(function(){return f})),n.d(t,"putUnitItem",(function(){return h})),n.d(t,"delUnit",(function(){return b})),n.d(t,"addDataInfo",(function(){return g})),n.d(t,"new_agency",(function(){return _})),n.d(t,"new_agency2",(function(){return y})),n.d(t,"new_area",(function(){return I})),n.d(t,"new_area2",(function(){return w})),n.d(t,"process",(function(){return v})),n.d(t,"process2",(function(){return S})),n.d(t,"getagency",(function(){return x})),n.d(t,"process3",(function(){return k})),n.d(t,"target",(function(){return j})),n.d(t,"target2",(function(){return O})),n.d(t,"score",(function(){return $})),n.d(t,"detail",(function(){return C})),n.d(t,"dels",(function(){return D})),n.d(t,"puts",(function(){return q})),n.d(t,"getquestion",(function(){return F})),n.d(t,"getcourse",(function(){return E})),n.d(t,"getability",(function(){return U})),n.d(t,"postquestion",(function(){return B})),n.d(t,"putquestion",(function(){return T})),n.d(t,"deletequestion",(function(){return A})),n.d(t,"paperList",(function(){return L})),n.d(t,"paperDelete",(function(){return P})),n.d(t,"paperEdit",(function(){return z})),n.d(t,"paperRevoke",(function(){return N})),n.d(t,"paperCreate",(function(){return R})),n.d(t,"paperQuestion",(function(){return K})),n.d(t,"paperQuestion2",(function(){return J})),n.d(t,"getpaper",(function(){return Q})),n.d(t,"postpaper",(function(){return G})),n.d(t,"getpapermine",(function(){return H})),n.d(t,"getresult",(function(){return M})),n.d(t,"getid",(function(){return V})),n.d(t,"get_look",(function(){return W})),n.d(t,"top_one",(function(){return X}));var i=n("dd88");n("86ba");function r(e){return Object(i["a"])({url:"/api/getFormwork",method:"post",data:e})}function a(e){return Object(i["a"])({url:"/api/addFormwork",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/api/delFormwork",method:"post",data:e})}function l(e){return Object(i["a"])({url:"/api/putFormworkItem",method:"post",data:e})}function s(e){return Object(i["a"])({url:"/api/getFormworkItem",method:"post",data:e})}function c(e){return Object(i["a"])({url:"/api/getEquipmentSearch",method:"post",data:e})}function u(e){return Object(i["a"])({url:"/api/getUnitSearch",method:"post",data:e})}function d(e){return Object(i["a"])({url:"/api/getFormworkSearch",method:"post",data:e})}function p(e){return Object(i["a"])({url:"/api/getDataInfo",method:"post",data:e})}function m(e){return Object(i["a"])({url:"/api/getUnit",method:"post",data:e})}function f(e){return Object(i["a"])({url:"/api/addUnit",method:"post",data:e})}function h(e){return Object(i["a"])({url:"/api/putUnitItem",method:"post",data:e})}function b(e){return Object(i["a"])({url:"/api/delUnit",method:"post",data:e})}function g(e){return Object(i["a"])({url:"/api/addDataInfo",method:"post",data:e})}function _(e){return Object(i["a"])({url:"/api/agency/",method:"post",data:e})}function y(e){return Object(i["a"])({url:"/api/agency/",method:"get"})}function I(e){return Object(i["a"])({url:"/api/system/area/?code=100000",method:"get"})}function w(e){return Object(i["a"])({url:"/api/system/area/?code="+e,method:"get"})}function v(e){return Object(i["a"])({url:"/api/agency/process/",method:"post",data:e})}function S(e){return Object(i["a"])({url:"/api/agency/process/",method:"get",params:e})}function x(e){return Object(i["a"])({url:`/api/agency/${e}/`,method:"get"})}function k(e){return Object(i["a"])({url:"/api/agency/process/",method:"put",params:e})}function j(e){return Object(i["a"])({url:"/api/agency/target/",method:"get",params:e})}function O(e){return Object(i["a"])({url:"/api/agency/target/",method:"post",data:e})}function $(e){return Object(i["a"])({url:"/api/agency/target/score/",method:"get",params:e})}function C(e){return Object(i["a"])({url:`/api/agency/process/detail/${e}/`,method:"get"})}function D(e){return Object(i["a"])({url:`/api/agency/${e}/`,method:"DELETE"})}function q(e){return Object(i["a"])({url:`/api/agency/${e}/`,method:"put"})}function F(e){return Object(i["a"])({url:"/api/exam/question/",method:"get",params:e})}function E(e){return Object(i["a"])({url:"/api/exam/course/",method:"get"})}function U(e){return Object(i["a"])({url:"/api/exam/ability/",method:"get"})}function B(e){return Object(i["a"])({url:"/api/exam/question/",method:"post",data:e})}function T(e,t){return Object(i["a"])({url:"/api/exam/question/"+e+"/",method:"put",data:t})}function A(e){return Object(i["a"])({url:`/api/exam/question/${e}/`,method:"DELETE"})}function L(e){return Object(i["a"])({url:"/api/exam/paper/",method:"get",params:e})}function P(e){return Object(i["a"])({url:`/api/exam/paper/${e}/`,method:"delete"})}function z(e,t){return Object(i["a"])({url:`/api/exam/paper/${e}/`,method:"put",data:t})}function N(e,t){return Object(i["a"])({url:`/api/exam/paper/${e}/`,method:"patch",data:t})}function R(e){return Object(i["a"])({url:"/api/exam/paper/",method:"post",data:e})}function K(e,t){return Object(i["a"])({url:`/api/exam/paper_question/${e}/`,method:"get",params:t})}function J(e,t){return Object(i["a"])({url:`/api/exam/paper_question/${e}/`,method:"put",data:t})}function Q(){return Object(i["a"])({url:"/api/exam/paper/",method:"get"})}function G(e,t){return Object(i["a"])({url:`/api/exam/mine/${e}/`,method:"post",data:t})}function H(){return Object(i["a"])({url:"/api/exam/mine/",method:"get"})}function M(e){return Object(i["a"])({url:`/api/exam/result/${e}/`,method:"get"})}function V(e){return Object(i["a"])({url:"/api/exam/mine/",method:"post",data:e})}function W(e){return Object(i["a"])({url:`/api/exam/mine/${e}/`,method:"get"})}function X(e){return Object(i["a"])({url:`/api/exam/paper_score/${e}/`,method:"get"})}},ce4c:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;return t("d2-container",[t("div",{staticClass:"Aone-page"},[t("div",{staticClass:"jigou"},[t("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,rules:e.rules}},[t("el-form-item",{staticClass:"q-left",attrs:{label:"题干名称：",prop:"content"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入题干名称"},model:{value:e.formInline.content,callback:function(t){e.$set(e.formInline,"content",t)},expression:"formInline.content"}})],1),t("el-form-item",{attrs:{label:"所属课程："}},[t("el-select",{attrs:{prop:"course_id",clearable:"",placeholder:"请选择所属课程"},model:{value:e.formInline.course_id,callback:function(t){e.$set(e.formInline,"course_id",t)},expression:"formInline.course_id"}},e._l(e.course,(function(e){return t("el-option",{attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"难易度："}},[t("el-select",{attrs:{prop:"degree",clearable:"",placeholder:"请选择题目难易度"},model:{value:e.formInline.degree,callback:function(t){e.$set(e.formInline,"degree",t)},expression:"formInline.degree"}},[t("el-option",{attrs:{label:"全部",value:"0"}}),t("el-option",{attrs:{label:"低",value:"1"}}),t("el-option",{attrs:{label:"中",value:"2"}}),t("el-option",{attrs:{label:"高",value:"3"}})],1)],1),t("el-form-item",{attrs:{label:"题目类型："}},[t("el-select",{attrs:{prop:"type",clearable:"",placeholder:"请选择题目类型"},model:{value:e.formInline.type,callback:function(t){e.$set(e.formInline,"type",t)},expression:"formInline.type"}},[t("el-option",{attrs:{label:"全部",value:"0"}}),t("el-option",{attrs:{label:"单选",value:"1"}}),t("el-option",{attrs:{label:"多选",value:"2"}}),t("el-option",{attrs:{label:"判断",value:"3"}})],1)],1),t("el-form-item",{attrs:{label:"能力标识："}},[t("el-select",{attrs:{prop:"ability_id",clearable:"",placeholder:"请选择能力标识"},model:{value:e.formInline.ability_id,callback:function(t){e.$set(e.formInline,"ability_id",t)},expression:"formInline.ability_id"}},e._l(e.ability,(function(e){return t("el-option",{attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getSearch()}}},[e._v("查询")]),t("el-button",{attrs:{type:"primary_test"},on:{click:function(t){return e.resetForm("formInline")}}},[e._v("重置")]),t("el-button",{attrs:{type:"primary_test"},on:{click:function(t){return e.add()}}},[e._v("新增题目")])],1)],1)],1),t("div",{staticClass:"qd-table",staticStyle:{position:"relative",margin:"0 auto"}},[e.tableInfo.data?t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%",color:"white"},attrs:{data:e.tableInfo.data,"header-cell-style":e.header_style,"cell-style":e.body_style},on:{"cell-mouse-enter":e.hover_table_lds,"row-click":e.goDetail,"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{prop:"content",label:"题干名称","cell-style":e.timeStyle},scopedSlots:e._u([{key:"default",fn:function(n){return[t("span",{staticClass:"chaohcu",staticStyle:{cursor:"pointer",color:"white"}},[e._v(" "+e._s(n.row.content))])]}}],null,!1,3243586433)}),t("el-table-column",{attrs:{prop:"course",label:"所属课程","cell-style":e.timeStyle}}),t("el-table-column",{attrs:{prop:"type",label:"题型分类","cell-style":e.timeStyle},scopedSlots:e._u([{key:"default",fn:function(n){return[0==n.row.type?t("span",{staticStyle:{cursor:"pointer"}},[e._v(" 未知")]):e._e(),1==n.row.type?t("span",{staticStyle:{cursor:"pointer"}},[e._v(" 单选")]):e._e(),2==n.row.type?t("span",{staticStyle:{cursor:"pointer"}},[e._v(" 多选")]):e._e(),3==n.row.type?t("span",{staticStyle:{cursor:"pointer"}},[e._v(" 判断")]):e._e()]}}],null,!1,2289945181)}),t("el-table-column",{attrs:{prop:"ability",label:"能力标识","cell-style":e.timeStyle}}),t("el-table-column",{attrs:{prop:"used_num",label:"使用次数","cell-style":e.timeStyle},scopedSlots:e._u([{key:"default",fn:function(n){return[t("span",{staticStyle:{cursor:"pointer"}},[e._v(" "+e._s(n.row.used_num)+" 次")])]}}],null,!1,1542512251)}),t("el-table-column",{attrs:{prop:"right_rate",label:"正确率（%）","cell-style":e.timeStyle}}),t("el-table-column",{attrs:{prop:"degree",label:"难易度","cell-style":e.timeStyle},scopedSlots:e._u([{key:"default",fn:function(n){return[1==n.row.degree?t("span",{staticStyle:{cursor:"pointer"}},[e._v(" 低")]):e._e(),2==n.row.degree?t("span",{staticStyle:{cursor:"pointer"}},[e._v(" 中")]):e._e(),3==n.row.degree?t("span",{staticStyle:{cursor:"pointer"}},[e._v(" 高")]):e._e(),0==n.row.degree?t("span",{staticStyle:{cursor:"pointer"}},[e._v(" 未知")]):e._e()]}}],null,!1,743477568)}),t("el-table-column",{attrs:{prop:"state",label:"状态","cell-style":e.timeStyle},scopedSlots:e._u([{key:"default",fn:function(n){return[0==n.row.state?t("el-tag",{attrs:{type:"success"},on:{click:function(t){return e.revokeRow(n.row,1)}}},[e._v("启用")]):t("el-tag",{attrs:{type:"danger"},on:{click:function(t){return e.revokeRow(n.row,0)}}},[e._v("禁用")])]}}],null,!1,2021520012)}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("i",{staticClass:"m_spans_table_normal",on:{click:function(t){return e.spider_put(n.row)}}},[e._v(" 编辑")]),t("el-divider",{attrs:{direction:"vertical"}}),t("i",{staticClass:"m_spans_table_normal",on:{click:function(t){return e.spider_put2(n.row)}}},[e._v(" 删除")]),t("el-divider",{attrs:{direction:"vertical"}}),t("i",{staticClass:"m_spans_table_normal",on:{click:function(t){return e.spider_look(n.row)}}},[e._v(" 查看")])]}}],null,!1,3850603163)})],1):e._e()],1),t("br"),t("div",{staticClass:"block qd-table"},[e.tableInfo.data.length>1?t("el-pagination",{attrs:{"current-page":e.currentPage_present,"page-size":10,layout:"prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage_present=t},"update:current-page":function(t){e.currentPage_present=t}}}):e._e()],1),e.tableInfo.data.length<1?t("div",{staticStyle:{wdith:"100%",color:"white",margin:"200px auto","text-align":"center"}},[t("br"),t("span",{staticClass:"zanwu",staticStyle:{color:"gray"}},[e._v(" 暂无数据")])]):e._e()]),t("qd-dialog",{attrs:{title:e.dialogInfo2.title,visible:e.dialogInfo2.visible,width:e.dialogInfo2.width,"bt-loading":e.dialogInfo2.btLoading,isOk:e.isok,nofooter:!0},on:{"update:visible":function(t){return e.$set(e.dialogInfo2,"visible",t)},handleOk:function(t){return e.submitFormhandle()},quxiao:function(t){return e.quxiao()}}},[t("el-form",{ref:"formInline2",staticClass:"demo-form-inline lds_form",attrs:{inline:!0,model:e.formInline2,rules:e.rules2,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"所属课程："}},[t("el-select",{attrs:{prop:"course_id",clearable:"",placeholder:"所属课程",disabled:e.isDisabled},model:{value:e.formInline2.course_id,callback:function(t){e.$set(e.formInline2,"course_id",t)},expression:"formInline2.course_id"}},e._l(e.course.slice(1,-1),(function(e){return t("el-option",{attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"题目难度："}},[t("el-select",{attrs:{prop:"degree",clearable:"",placeholder:"难易度",disabled:e.isDisabled},model:{value:e.formInline2.degree,callback:function(t){e.$set(e.formInline2,"degree",t)},expression:"formInline2.degree"}},[t("el-option",{attrs:{label:"低",value:"1"}}),t("el-option",{attrs:{label:"中",value:"2"}}),t("el-option",{attrs:{label:"高",value:"3"}})],1)],1),t("el-form-item",{attrs:{label:"题目类型："}},[t("el-select",{attrs:{prop:"type",clearable:"",placeholder:"题型分类",disabled:e.isDisabled},model:{value:e.formInline2.type,callback:function(t){e.$set(e.formInline2,"type",t)},expression:"formInline2.type"}},[t("el-option",{attrs:{label:"单选",value:"1"}}),t("el-option",{attrs:{label:"多选",value:"2"}}),t("el-option",{attrs:{label:"判断",value:"3"}})],1)],1),t("el-form-item",{attrs:{label:"能力标识："}},[t("el-select",{attrs:{prop:"ability_id",clearable:"",placeholder:"能力标识",disabled:e.isDisabled},model:{value:e.formInline2.ability_id,callback:function(t){e.$set(e.formInline2,"ability_id",t)},expression:"formInline2.ability_id"}},e._l(e.ability.slice(1,-1),(function(e){return t("el-option",{attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{staticClass:"lds",staticStyle:{width:"100%"},attrs:{label:"题干名称：",prop:"content"}},[t("el-input",{attrs:{rows:4,type:"textarea",clearable:"",placeholder:"请输入题干内容",disabled:e.isDisabled},model:{value:e.formInline2.content,callback:function(t){e.$set(e.formInline2,"content",t)},expression:"formInline2.content"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.formInline2.type,expression:"formInline2.type == 1"}],staticClass:"lds",attrs:{label:"题目选项：",disabled:e.isDisabled}},[t("p",{staticClass:"thead flex_center_starts2",staticStyle:{width:"67%"}},[t("span",{staticStyle:{"margin-left":"20px"}},[e._v("选项 ")]),t("span",{staticStyle:{"margin-left":"60px"}},[e._v(" 选项内容 ")])]),e._l(e.formInline2.options,(function(n,i){return t("div",{staticClass:"flex_center_around",staticStyle:{"margin-top":"5px"}},[t("el-radio",{staticStyle:{"text-align":"center",width:"10%"},attrs:{label:n.option,disabled:e.isDisabled},model:{value:e.formInline2.answer_dan,callback:function(t){e.$set(e.formInline2,"answer_dan",t)},expression:"formInline2.answer_dan"}}),t("el-input",{staticStyle:{float:"left",width:"60%"},attrs:{clearable:"",placeholder:"请输入选项内容",disabled:e.isDisabled},model:{value:n.content,callback:function(t){e.$set(n,"content",t)},expression:"item.content"}}),t("div",{staticClass:"pointer",staticStyle:{width:"15%","margin-left":"20px",float:"left"}},[i==e.formInline2.options.length-1?t("i",{staticClass:"el-icon-plus",staticStyle:{"margin-right":"10px"},on:{click:function(t){return e.add_item(i)}}}):e._e(),0!=i?t("i",{staticClass:"el-icon-minus",on:{click:function(t){return e.del_item(i)}}}):e._e()])],1)}))],2),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:2==e.formInline2.type,expression:"formInline2.type == 2"}],staticClass:"lds",attrs:{label:"题目选项：",disabled:e.isDisabled}},[t("p",{staticClass:"thead flex_center_starts2",staticStyle:{width:"67%"}},[t("span",{staticStyle:{"margin-left":"25px"}},[e._v("选项 ")]),t("span",{staticStyle:{"margin-left":"-30px"}},[e._v(" 选项内容 ")])]),e._l(e.formInline2.options,(function(n,i){return t("div",{staticClass:"flex_center_around",staticStyle:{"margin-top":"5px"},attrs:{disabled:e.isDisabled}},[t("el-checkbox",{staticStyle:{"text-align":"center",width:"10%"},attrs:{label:n.option,disabled:e.isDisabled},model:{value:e.formInline2.answer_ou,callback:function(t){e.$set(e.formInline2,"answer_ou",t)},expression:"formInline2.answer_ou"}}),t("el-input",{staticStyle:{float:"left",width:"60%"},attrs:{clearable:"",placeholder:"请输入选项内容",disabled:e.isDisabled},model:{value:n.content,callback:function(t){e.$set(n,"content",t)},expression:"item.content"}}),t("div",{staticClass:"pointer",staticStyle:{width:"15%","margin-left":"20px",float:"left"}},[i==e.formInline2.options.length-1?t("i",{staticClass:"el-icon-plus",staticStyle:{"margin-right":"10px"},on:{click:function(t){return e.add_item(i)}}}):e._e(),0!=i?t("i",{staticClass:"el-icon-minus",on:{click:function(t){return e.del_item(i)}}}):e._e()])],1)}))],2),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:3==e.formInline2.type,expression:"formInline2.type == 3"}],staticClass:"lds",attrs:{label:"题目答案：",disabled:e.isDisabled}},[t("el-radio-group",{attrs:{disabled:e.isDisabled},model:{value:e.formInline2.answer_dan,callback:function(t){e.$set(e.formInline2,"answer_dan",t)},expression:"formInline2.answer_dan"}},[t("el-radio",{attrs:{label:"True"}},[e._v("正确")]),t("el-radio",{attrs:{label:"False"}},[e._v("错误")])],1)],1),t("el-form-item",[0==e.visits?t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save("formInline2")}}},[e._v("提交")]):e._e(),t("el-button",{attrs:{type:"primary_test"},on:{click:function(t){return e.resetForm2("formInline2")}}},[e._v("取消")])],1)],1)],1)],1)},r=[],a=(n("a717"),n("c997")),o={name:"mine",data(){return{cha:!1,visit:1,visits:"",questionId:0,options:[{option:"A",content:"选项A"},{option:"B",content:"选项B"},{option:"C",content:"选项C"},{option:"D",content:"选项D"}],all_answer:[{answer:""},{answer:""},{answer:""},{answer:""}],answers:"",answers2:[{answer:"A"},{answer:"B"},{answer:"C"},{answer:"D"}],answer3:"",answer4:"",answer2:"",answer1:"",course:[{id:0,name:"全部"}],ability:[{id:0,name:"全部"}],new_id:{},form:{desc:""},dialogInfo2:{title:"新增题目",visible:!1,width:"800px"},dialogInfo3:{title:"查看",visible:!1,width:"800px"},formInline:{content:"",course_id:"",page:1,limit:10,degree:"",ability_id:"",type:""},formInline2:{content:"",course_id:"",degree:"",ability_id:"",type:"",options:[{option:"A",content:""}],answer_dan:"",answer_ou:[]},rules2:{content:[{trigger:"blur",required:!0,message:"请输入"}]},send_data:{content:"",course_id:"",type:"",page:1,limit:10,degree:"",ability_id:"",type:"",is_option:1},tableInfo:{data:[]},limit:10,page:1,total:"",currentPage_present:1,next:!0,visible:!1,top:0,left:0,isDisabled:!1}},created(){Object(a["getcourse"])().then(e=>{200==e.code&&e.data.forEach(e=>{this.course.push(e)})}),Object(a["getability"])().then(e=>{200==e.code&&e.data.forEach(e=>{this.ability.push(e)})}),this.getSearch()},methods:{revokeRow(e,t){let n=1===t?"禁用":"启用";this.$confirm(`确定要${n}题目 <span style="color: red">${e.content}</span> 吗?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0,type:"warning",dangerouslyUseHTMLString:!0}).then(()=>{let n={state:t,code:2};Object(a["putquestion"])(e.id,n).then(e=>{200==e.code?(this.$message.success("操作成功！"),this.getSearch()):this.$message.error("操作失败！")})}).catch(()=>{this.$message.info("操作已取消")})},add_item(e){let t={0:"A",1:"B",2:"C",3:"D",4:"E",5:"F",6:"G"},n=t[e+1];return 1!=this.formInline2.type&&2!=this.formInline2.type||7!=this.formInline2.options.length?3==this.formInline2.type&&2==this.formInline2.options.length?(this.$message.warning("判断题最多2个选项"),!1):void this.formInline2.options.push({option:n,content:""}):(this.$message.warning("最多7个选项"),!1)},del_item(e){this.formInline2.options.splice(e,1)},save(e){console.log(this.formInline2.options),this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;var t={course_id:this.formInline2.course_id,ability_id:this.formInline2.ability_id,type:this.formInline2.type,degree:this.formInline2.degree,content:this.formInline2.content,answer:[],options:this.formInline2.options};1!=this.formInline2.type&&3!=this.formInline2.type||(t.answer=[this.formInline2.answer_dan]),2==this.formInline2.type&&(t.answer=this.formInline2.answer_ou),1==this.visit&&Object(a["postquestion"])(t).then(e=>{200==e.code&&(this.getSearch(),this.$message.success(e.message),this.dialogInfo2.visible=!1)}),2==this.visit&&(t.code=1,Object(a["putquestion"])(this.questionId,t).then(e=>{200==e.code&&(this.getSearch(),this.$message.success(e.message),this.dialogInfo2.visible=!1)}))})},add(){console.log("新增"),this.visits=0,this.dialogInfo2.visible=!0,this.dialogInfo2.title="新增题目",this.initForm(),this.isDisabled=!1},pass1(){let e={list:`[${this.new_id.id}]`,state:1};Object(a["process3"])(e).then(e=>{200==e.code?(this.$message.success(e.message),this.getSearch(),this.dialogInfo2.visible=!1):this.$message.warning(e.message)})},pass2(){let e={list:`[${this.new_id.id}]`,state:1};Object(a["process3"])(e).then(e=>{200==e.code?(this.$message.success(e.message),this.getSearch(),this.dialogInfo2.visible=!1):this.$message.warning(e.message)})},spider_put(e){this.visit=2,this.visits=0,this.questionId=e.id,this.initForm(),this.isDisabled=!1,this.dialogInfo2.visible=!0,this.dialogInfo2.title="编辑题目",this.formInline2.type=e.type.toString(),this.formInline2.degree=e.degree.toString(),this.formInline2.content=e.content,this.formInline2.course_id=e.course_id,this.formInline2.ability_id=e.ability_id,this.formInline2.options=e.options,this.formInline2.answer=e.answer,this.formInline2.answer_dan=e.answer[0],this.formInline2.answer_ou=e.answer},spider_put2(e){this.$confirm("此操作将删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{Object(a["deletequestion"])(e.id).then(e=>{this.$message({type:"success",message:e.message}),this.getSearch()})}).catch(()=>{})},spider_look(e){this.dialogInfo2.title="查看题目",this.dialogInfo2.visible=!0,this.visits=1,3==e.type&&(console.log("当前为判断"),this.isDisabled=!0,this.initForm(),this.formInline2.type=e.type.toString(),this.formInline2.degree=e.degree.toString(),this.formInline2.content=e.content,this.formInline2.course_id=e.course_id,this.formInline2.ability_id=e.ability_id,this.formInline2.options=e.options,this.formInline2.answer=e.answer,this.formInline2.answer_dan=e.answer[0]),1==e.type&&(console.log("当前为单选"),this.visit=1,this.isDisabled=!0,this.initForm(),this.formInline2.type=e.type.toString(),this.formInline2.degree=e.degree.toString(),this.formInline2.content=e.content,this.formInline2.course_id=e.course_id,this.formInline2.ability_id=e.ability_id,this.formInline2.options=e.options,this.formInline2.answer=e.answer,this.formInline2.answer_dan=e.answer[0]),2==e.type&&(this.visit=2,this.isDisabled=!0,this.initForm(),this.formInline2.type=e.type.toString(),this.formInline2.degree=e.degree.toString(),this.formInline2.content=e.content,this.formInline2.course_id=e.course_id,this.formInline2.ability_id=e.ability_id,this.formInline2.options=e.options,this.formInline2.answer=e.answer,this.formInline2.answer_ou=e.answer)},timeStyle(){return"text-align:center !important"},resetForm(e){this.formInline.type="",this.formInline.degree="",this.formInline.ability_id="",this.formInline.content="",this.formInline.course_id="",this.setKey(),this.getSearch()},resetForm2(e){this.dialogInfo2.visible=!1},getSearch(){this.setKey(),this.tableInfo.data=[],Object(a["getquestion"])(this.send_data).then(e=>{e.data.data?this.tableInfo.data=e.data.data:this.tableInfo.data=[],this.total=e.data.total})},setKey(){this.send_data.content=this.formInline.content,this.send_data.type=this.formInline.type||"0",this.send_data.degree=this.formInline.degree||"0",this.send_data.ability_id=this.formInline.ability_id||"0",this.send_data.course_id=this.formInline.course_id||"0"},handleCurrentChange(e){this.send_data.page=e,this.getSearch()},initForm(){this.formInline2={content:"",course_id:"",degree:"",ability_id:"",type:"",options:[{option:"A",content:""}],answer_dan:"",answer_ou:[]}}}},l=o,s=(n("472d"),n("e607")),c=Object(s["a"])(l,i,r,!1,null,"67ca63a6",null);t["default"]=c.exports}}]);