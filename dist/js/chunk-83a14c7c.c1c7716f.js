(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83a14c7c","chunk-2d217eca"],{"20c5":function(e,t,n){},4744:function(e,t,n){"use strict";n("20c5")},"87b6":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;return t("d2-container",[t("div",{staticClass:"Aone-page"},[t("div",{staticClass:"jigou"},[t("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[t("el-form-item",{attrs:{label:"搜索单位：",prop:"unit_name"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.formInline.unit_name,callback:function(t){e.$set(e.formInline,"unit_name",t)},expression:"formInline.unit_name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.fetch()}}},[e._v("查询")]),t("el-button",{attrs:{type:"primary_test"},on:{click:function(t){return e.resetForms("formInline")}}},[e._v("重置")]),t("el-button",{attrs:{type:"primary_test",icon:"el-icon-folder-delete"},on:{click:function(t){return e.delRow()}}},[e._v("批量删除")]),t("el-button",{attrs:{type:"primary_test",icon:"el-icon-edit-outline"},on:{click:function(t){return e.addData()}}},[e._v("新增单位")])],1)],1)],1),t("div",{staticClass:"qd-table",staticStyle:{position:"relative",margin:"0 auto"}},[e.tableInfo.data?t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableInfo.data,stripe:"","header-cell-style":e.header_style,"cell-style":e.body_style},on:{"cell-mouse-enter":e.hover_table_lds,"row-click":e.goDetail,"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"name",label:"单位名称","cell-style":e.timeStyle},scopedSlots:e._u([{key:"default",fn:function(n){return[t("span",{staticStyle:{cursor:"pointer"}},[e._v(" "+e._s(n.row.name))])]}}],null,!1,4099046392)}),t("el-table-column",{attrs:{label:"操作",width:"500"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.editRow(n.row)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.deleteRow(n.row)}}},[e._v("删除")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.viewRow(n.row)}}},[e._v("复制")])]}}],null,!1,1644360061)})],1):e._e()],1),t("br"),t("div",{staticClass:"block qd-table"},[e.tableInfo.data.length>0?t("el-pagination",{attrs:{"current-page":e.currentPage_present,"page-size":10,layout:"total, prev, pager, next, jumper",total:e.tableInfo.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage_present=t},"update:current-page":function(t){e.currentPage_present=t}}}):e._e()],1),e.tableInfo.data.length<1?t("div",{staticStyle:{wdith:"100%",color:"white",margin:"200px auto","text-align":"center"}},[t("br"),t("span",{staticClass:"zanwu",staticStyle:{color:"gray"}},[e._v(" 暂无数据")])]):e._e()]),t("transition",{attrs:{name:"fade-scale"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.new_visible,expression:"new_visible"}],staticClass:"new_tan"},[t("div",{staticClass:"new_dio"},[t("i",{staticClass:"el-icon-close new_close",on:{click:e.new_close}}),t("el-form",{ref:"formInline3",staticClass:"demo-form-inline lds_form",attrs:{model:e.formInline3,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"模板名称：",prop:"name"}},[t("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入模板名称"},model:{value:e.formInline3.name,callback:function(t){e.$set(e.formInline3,"name",t)},expression:"formInline3.name"}})],1),t("el-form-item",{attrs:{label:"装备名称：",prop:"equipment_name"}},[t("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入模板名称"},model:{value:e.formInline3.equipment_name,callback:function(t){e.$set(e.formInline3,"equipment_name",t)},expression:"formInline3.equipment_name"}})],1),1==e.flag?t("el-form-item",{attrs:{label:"是否上传文件：",prop:"is_file"}},[t("el-radio",{attrs:{label:"1"},model:{value:e.formInline3.is_file,callback:function(t){e.$set(e.formInline3,"is_file",t)},expression:"formInline3.is_file"}},[e._v("是")]),t("el-radio",{attrs:{label:"0"},model:{value:e.formInline3.is_file,callback:function(t){e.$set(e.formInline3,"is_file",t)},expression:"formInline3.is_file"}},[e._v("否")])],1):e._e(),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:0==e.flag,expression:"flag == 0"}],attrs:{label:"导入文件："}},[t("input",{staticClass:"Luckyexcel-demo-file",staticStyle:{"font-size":"16px"},attrs:{type:"file",id:"Luckyexcel-demo-file",name:"Luckyexcel-demo-file",value:"导入文件"},on:{change:e.demoHandler}})]),t("div",{staticClass:"luckysheet-content lucky_doudou",staticStyle:{height:"400px"},attrs:{id:"luckysheet"}}),t("br"),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.flag,expression:"flag == 1"}],staticStyle:{"text-align":"right !important"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitRow1("formInline3")}}},[e._v("提交模板")]),t("el-button",{attrs:{type:"primary_test"},on:{click:function(t){return e.resetForm_doudou("formInline3")}}},[e._v("取消")])],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:0==e.flag,expression:"flag == 0"}],staticStyle:{"text-align":"right !important"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitRow2("formInline3")}}},[e._v("提交导入")]),t("el-button",{attrs:{type:"primary_test"},on:{click:function(t){return e.reset("formInline3")}}},[e._v("取消")])],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:3==e.flag,expression:"flag == 3"}],staticStyle:{"text-align":"right !important"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitRow3("formInline3")}}},[e._v("提交修改")]),t("el-button",{attrs:{type:"primary_test"},on:{click:function(t){return e.reset("formInline3")}}},[e._v("取消")])],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:4==e.flag,expression:"flag == 4"}],staticStyle:{"text-align":"right !important"}},[t("el-button",{attrs:{type:"primary",icon:""},on:{click:function(t){return e.doExport()}}},[e._v("导出模板")])],1)],1)],1)])]),t("qd-dialog",{attrs:{title:e.dialogInfo2.title,visible:e.dialogInfo2.visible,width:e.dialogInfo2.width,"bt-loading":e.dialogInfo2.btLoading,nofooter:!0},on:{"update:visible":function(t){return e.$set(e.dialogInfo2,"visible",t)}}},[t("el-form",{ref:"formInline4",staticClass:"demo-form-inline lds_form",attrs:{model:e.formInline4,rules:e.rules4,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"单位名称：",prop:"name"}},[t("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入单位名称"},model:{value:e.formInline4.name,callback:function(t){e.$set(e.formInline4,"name",t)},expression:"formInline4.name"}})],1),t("div",{staticClass:"qd-table",staticStyle:{position:"relative",margin:"0 auto"}},[e.body_list?t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.body_list,stripe:"","header-cell-style":e.header_style,"cell-style":e.body_style},on:{"cell-mouse-enter":e.hover_table_lds,"row-click":e.goDetail,"selection-change":e.handleSelectionChange2}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"name",label:"模板名称","cell-style":e.timeStyle},scopedSlots:e._u([{key:"default",fn:function(n){return[t("span",{staticStyle:{cursor:"pointer"}},[e._v(" "+e._s(n.row.name))])]}}],null,!1,4099046392)}),t("el-table-column",{attrs:{prop:"name",label:"操作","cell-style":e.timeStyle},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-zoom-in"},on:{click:function(t){return e.set_look(n.row)}}},[e._v("预览")])]}}],null,!1,848313092)})],1):e._e()],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.danwei,expression:"danwei == 1"}],staticStyle:{"text-align":"right !important"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitRow3("formInline4")}}},[e._v("新增单位")]),t("el-button",{attrs:{type:"primary_test"},on:{click:function(t){return e.reset("formInline4")}}},[e._v("取消")])],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:2==e.danwei,expression:"danwei == 2"}],staticStyle:{"text-align":"right !important"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitRow4("formInline4")}}},[e._v("修改单位")]),t("el-button",{attrs:{type:"primary_test"},on:{click:function(t){return e.reset("formInline4")}}},[e._v("取消")])],1)],1)],1)],1)},o=[],a=(n("a717"),n("c997")),r={name:"Paper",props:{valueFormat:{type:String,default:"timestamp"}},data(){return{options:{container:"luckysheet",title:"数据填报系统表格",lang:"zh",showtoolbarConfig:!1,data:[{name:"Cell",color:"",index:0,status:1,order:0,hide:0,row:36,column:18,defaultRowHeight:19,defaultColWidth:73,celldata:[],config:{merge:{},rowlen:{},columnlen:{},rowhidden:{},colhidden:{},borderInfo:{},authority:{}},scrollLeft:0,scrollTop:315,luckysheet_select_save:[],calcChain:[],isPivotTable:!1,pivotTable:{},filter_select:{},filter:null,luckysheet_alternateformat_save:[],luckysheet_alternateformat_save_modelCustom:[],luckysheet_conditionformat_save:{},frozen:{},chart:[],zoomRatio:1,image:[],showGridLines:1,dataVerification:{}}]},options_unit_name:[],options_formwork_name:[],select_arr:[],select_arr2:[],loading:!1,flag:0,new_visible:!1,tableInfo:{data:[],total:0},formInline2:{name:"",level:0,page:1,limit:10,code:1},formInline:{unit_name:""},formInline4:{name:"",template_ids:[]},dialogInfo2:{title:"",visible:!1,width:"70%",btLoading:!1},formInline3:{name:"",equipment_name:"",is_file:"",formwork:{}},queryData:{condition:{},page_size:10,page_index:1},rules:{name:[{required:!0,message:"请输入",trigger:"blur"}],name2:[{required:!0,message:"请输入",trigger:"blur"}],is_file:[{required:!0,message:"请选择",trigger:"blur"}]},rules4:{name:[{required:!0,message:"请输入",trigger:"blur"}],template_ids:[{required:!0,message:"请选择",trigger:"blur"}]},body_list:[],danwei:"",new_id:""}},created(){this.getUnit_list();let e={condition:{},page_size:0,page_index:0};Object(a["getFormwork"])(e).then(e=>{this.body_list=e.data.records})},methods:{set_look(e){console.log(e)},getU(){Object(a["getUnitSearch"])().then(e=>{console.log(e),this.options_unit_name=e.data})},setChange(e){console.log(e,"当前数据"),""==e&&(this.formInline.formwork_name=""),Object(a["getTemplateSearch"])({unit_id:e}).then(e=>{console.log(e,"89809980"),this.options_formwork_name=e.data})},addData(){this.dialogInfo2.visible=!0,this.danwei=1},handleSelectionChange(e){console.log(e,"当前选中");let t=[];e.map(e=>{t.push(e.id)}),this.select_arr=t},handleSelectionChange2(e){console.log(e,"弹窗当前选中");let t=[];e.map(e=>{t.push(e.id)}),this.select_arr2=t,console.log(this.select_arr2,"弹窗当前选中2")},delRow(){if(this.select_arr.length<1)this.$message.warning("请选择数据");else{var e={ids:this.select_arr};console.log(e),Object(a["delUnit"])(e).then(e=>{console.log(e),200==e.code&&(this.getUnit_list(),this.$message.success(e.msg))})}},handleCurrentChange(e){this.queryData.page_index=e,this.getUnit_list2()},addForm(){this.flag=0,this.new_visible=!0,setTimeout(()=>{luckysheet.create(this.options),console.log(luckysheet.getluckysheetfile())},100)},doExport(){console.log(luckysheet.getAllSheets()),exportSheetExcel(luckysheet,"file")},demoHandler(e){console.log(e.target.files,"文件11111");let t=document.getElementById("Luckyexcel-demo-file");console.log(t,"upload");let n=document.getElementById("Luckyexcel-select-demo"),i=document.getElementById("Luckyexcel-downlod-file"),o=document.getElementById("lucky-mask-demo");var a=e.target.files;if(console.log(a,"wenjian"),null==a||0==a.length)return void alert("No files wait for import");let r=a[0].name,l=r.split("."),s=l[l.length-1];"xlsx"==s?(LuckyExcel.transformExcelToLucky(a[0],(function(e,t){null!=e.sheets&&0!=e.sheets.length?(console.log(e,t),luckysheet.destroy(),luckysheet.create({container:"luckysheet",showinfobar:!1,data:e.sheets,title:e.info.name,userInfo:e.info.name.creator})):alert("Failed to read the content of the excel file, currently does not support xls files!")})),n.addEventListener("change",(function(e){var t=n,i=t.selectedIndex,a=t.options[i].value,r=t.options[i].innerHTML;""!=a&&(o.style.display="flex",LuckyExcel.transformExcelToLuckyByUrl(a,r,(function(e,t){null!=e.sheets&&0!=e.sheets.length?(console.log(e,t),o.style.display="none",window.luckysheet.destroy(),window.luckysheet.create({container:"luckysheet",showinfobar:!1,data:e.sheets,title:e.info.name,userInfo:e.info.name.creator})):alert("Failed to read the content of the excel file, currently does not support xls files!")})))})),i.addEventListener("click",(function(e){var t=n,i=t.selectedIndex,o=t.options[i].value;if(0!=o.length){var a=document.getElementById("Lucky-download-frame");null==a&&(a=document.createElement("iframe"),a.style.display="none",a.id="Lucky-download-frame",document.body.appendChild(a)),a.src=o}else alert("Please select a demo file")}))):alert("Currently only supports the import of xlsx files")},new_close(){this.new_visible=!1},timeStyle(){return"text-align:center !important"},fetch(){this.getUnit_list()},addFromwork(){this.flag=1,this.new_visible=!0,setTimeout(()=>{luckysheet.create(this.options),console.log(luckysheet.getluckysheetfile())},100)},getUnit_list(){this.loading=!0,this.queryData.page_index=1,this.formInline.unit_name?this.queryData.condition={unit_name:this.formInline.unit_name}:this.queryData.condition={},this.currentPage_present=1,Object(a["getUnit"])(this.queryData).then(e=>{this.loading=!1,console.log(e),200==e.code&&(this.tableInfo.data=e.data.records,this.tableInfo.total=e.data.total)})},getUnit_list2(){this.loading=!0,this.formInline.unit_name?this.queryData.condition={unit_name:this.formInline.unit_name}:this.queryData.condition={},Object(a["getUnit"])(this.queryData).then(e=>{console.log(e.data),this.loading=!1,this.tableInfo.data=e.data.records,this.tableInfo.total=e.data.total})},reset(){this.new_visible=!1},resetForm_doudou(){this.new_visible=!1},revokeRow(e,t){let n=new Date,i=parseInt((n.getTime()/1e3).toFixed());if(i>e.begin_date)return void this.$message.warning("评测已开始，暂不可操作！");let o=1===t?"禁用":"启用";this.$confirm(`确定要${o}评测试卷 <span style="color: red">${e.name}</span> 吗?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0,type:"warning",dangerouslyUseHTMLString:!0}).then(()=>{let n={revoked:t};Object(a["paperRevoke"])(e.id,n).then(e=>{200==e.code?(this.$message.success("操作成功！"),this.fetch()):this.$message.error("操作失败！")})}).catch(()=>{this.$message.info("操作已取消")})},resetForms(e){console.log(e),this.$refs[e].resetFields(),this.getUnit_list()},addRow(){this.visit=1,this.dialogInfo2.title="添加试卷",this.dialogInfo2.visible=!0,this.initForm(),this.isDisabled=!1},editRow(e){this.danwei=2,this.new_id=e.id,this.dialogInfo2.visible=!0,console.log(e,"111"),this.formInline4.name=e.name;let t=e.formwork_list,n=[];e.formwork_list.length>0&&t.map(e=>{n.push(e.formwork_id)}),this.formInline4.template_ids=n},viewRow(e){console.log(e,"111");let t=e.formwork_list,n=[];e.formwork_list.length>0&&t.map(e=>{n.push(e.formwork_id)});let i={name:e.name+"复制",template_ids:n};this.loading=!0,Object(a["addUnit"])(i).then(e=>{200==e.code&&(this.$message.success(e.msg),this.getUnit_list(),this.loading=!1)})},updateRow(e){let t=new Date,n=parseInt((t.getTime()/1e3).toFixed());n>e.begin_date?this.$message.warning("评测已开始，暂不可操作！"):e.exist?this.$message.warning("试卷已完成，暂不可操作！"):this.$router.push({path:"/exam/paper/detail",query:{paperId:e.id}})},updateRow2(e){e.exist?this.$router.push({path:"/exam/paper/detail2",query:{paperId:e.id}}):this.$message.warning("试卷未完成选题！")},deleteRow(e){this.$confirm(`确定要删除<span style="color: red">${e.name}</span>吗？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0,type:"warning",dangerouslyUseHTMLString:!0}).then(()=>{let t={ids:[e.id]};Object(a["delUnit"])(t).then(e=>{200==e.code?(this.$message.success("操作成功"),this.getUnit_list()):this.$message.error("操作失败")})}).catch(()=>{this.$message.info("操作已取消")})},submitRow1(e){console.log("新增模板"),console.log(this.formInline3),console.log(luckysheet.getAllSheets()[0]),this.formInline3.formwork=luckysheet.getAllSheets()[0],this.$refs[e].validate(e=>{e&&Object(a["addFormwork"])(this.formInline3).then(e=>{console.log(e,"0000000000"),200==e.code?(this.$message.success(e.msg),luckysheet.destroy(),this.new_visible=!1):this.$message.warning(e.msg)})})},submitRow2(e){console.log("新增导入"),this.formInline3.formwork=luckysheet.getAllSheets()[0],this.$refs[e].validate(e=>{e&&Object(a["addFormwork"])(this.formInline3).then(e=>{console.log(e,"0000000000"),200==e.code?(this.$message.success(e.msg),luckysheet.destroy(),this.new_visible=!1):this.$message.warning(e.msg)})})},submitRow3(e){console.log("新增单位"),this.$refs[e].validate(e=>{e&&Object(a["addUnit"])(this.formInline4).then(e=>{console.log(e,"0000000000"),200==e.code&&(this.$message.success(e.msg),this.dialogInfo2.visible=!1,this.$refs["formInline4"].resetFields(),this.getUnit_list())})})},submitRow4(e){console.log("修改单位");let t={name:this.formInline4.name,template_ids:this.formInline4.template_ids,id:this.new_id};this.$refs[e].validate(e=>{e&&Object(a["putUnitItem"])(t).then(e=>{console.log(e,"0000000000"),200==e.code&&(this.$message.success(e.msg),this.dialogInfo2.visible=!1,this.$refs["formInline4"].resetFields(),this.getUnit_list())})})},beginChange(){this.formInline2.begin_date=this.paperBegin/1e3||0},endChange(){this.formInline2.end_date=this.paperEnd/1e3||0},initForm(){this.formInline2={name:"",score:"",duration:"",begin_date:"",end_date:"",remark:""}},getTime(e){var t=new Date(1e3*parseInt(e)),n=t.getFullYear(),i=t.getMonth()+1,o=t.getDate();return i=1==i.toString().length?"0"+i:i,o=1==o.toString().length?"0"+o:o,n+"-"+i+"-"+o+" "}},mounted(){const e={container:"luckysheet",title:"数据填报系统表格",lang:"zh"};setTimeout(()=>{luckysheet.create(e),console.log(luckysheet.getluckysheetfile())},1e3)}},l=r,s=(n("4744"),n("e607")),c=Object(s["a"])(l,i,o,!1,null,"c704d8b8",null);t["default"]=c.exports},c997:function(e,t,n){"use strict";n.r(t),n.d(t,"getFormwork",(function(){return o})),n.d(t,"addFormwork",(function(){return a})),n.d(t,"delFormwork",(function(){return r})),n.d(t,"putFormworkItem",(function(){return l})),n.d(t,"getFormworkItem",(function(){return s})),n.d(t,"getEquipmentSearch",(function(){return c})),n.d(t,"getUnitSearch",(function(){return u})),n.d(t,"getFormworkSearch",(function(){return d})),n.d(t,"getDataInfo",(function(){return m})),n.d(t,"getDataInfoItem",(function(){return f})),n.d(t,"getUnit",(function(){return p})),n.d(t,"addUnit",(function(){return h})),n.d(t,"putUnitItem",(function(){return g})),n.d(t,"delUnit",(function(){return b})),n.d(t,"addDataInfo",(function(){return y})),n.d(t,"delDataInfo",(function(){return _})),n.d(t,"putDataInfo",(function(){return w})),n.d(t,"new_agency",(function(){return v})),n.d(t,"new_agency2",(function(){return k})),n.d(t,"new_area",(function(){return I})),n.d(t,"new_area2",(function(){return x})),n.d(t,"process",(function(){return j})),n.d(t,"process2",(function(){return O})),n.d(t,"getagency",(function(){return $})),n.d(t,"process3",(function(){return S})),n.d(t,"target",(function(){return q})),n.d(t,"target2",(function(){return C})),n.d(t,"score",(function(){return U})),n.d(t,"detail",(function(){return F})),n.d(t,"dels",(function(){return D})),n.d(t,"puts",(function(){return E})),n.d(t,"getquestion",(function(){return R})),n.d(t,"getcourse",(function(){return L})),n.d(t,"getability",(function(){return T})),n.d(t,"postquestion",(function(){return z})),n.d(t,"putquestion",(function(){return B})),n.d(t,"deletequestion",(function(){return N})),n.d(t,"paperList",(function(){return P})),n.d(t,"paperDelete",(function(){return H})),n.d(t,"paperEdit",(function(){return A})),n.d(t,"paperRevoke",(function(){return M})),n.d(t,"paperCreate",(function(){return J})),n.d(t,"paperQuestion",(function(){return Q})),n.d(t,"paperQuestion2",(function(){return G})),n.d(t,"getpaper",(function(){return V})),n.d(t,"postpaper",(function(){return W})),n.d(t,"getpapermine",(function(){return Y})),n.d(t,"getresult",(function(){return K})),n.d(t,"getid",(function(){return X})),n.d(t,"get_look",(function(){return Z})),n.d(t,"top_one",(function(){return ee}));var i=n("dd88");n("86ba");function o(e){return Object(i["a"])({url:"/api/getFormwork",method:"post",data:e})}function a(e){return Object(i["a"])({url:"/api/addFormwork",method:"post",data:e})}function r(e){return Object(i["a"])({url:"/api/delFormwork",method:"post",data:e})}function l(e){return Object(i["a"])({url:"/api/putFormworkItem",method:"post",data:e})}function s(e){return Object(i["a"])({url:"/api/getFormworkItem",method:"post",data:e})}function c(e){return Object(i["a"])({url:"/api/getEquipmentSearch",method:"post",data:e})}function u(e){return Object(i["a"])({url:"/api/getUnitSearch",method:"post",data:e})}function d(e){return Object(i["a"])({url:"/api/getFormworkSearch",method:"post",data:e})}function m(e){return Object(i["a"])({url:"/api/getDataInfo",method:"post",data:e})}function f(e){return Object(i["a"])({url:"/api/getDataInfoItem",method:"post",data:e})}function p(e){return Object(i["a"])({url:"/api/getUnit",method:"post",data:e})}function h(e){return Object(i["a"])({url:"/api/addUnit",method:"post",data:e})}function g(e){return Object(i["a"])({url:"/api/putUnitItem",method:"post",data:e})}function b(e){return Object(i["a"])({url:"/api/delUnit",method:"post",data:e})}function y(e){return Object(i["a"])({url:"/api/addDataInfo",method:"post",data:e})}function _(e){return Object(i["a"])({url:"/api/delDataInfo",method:"post",data:e})}function w(e){return Object(i["a"])({url:"/api/putDataInfo",method:"post",data:e})}function v(e){return Object(i["a"])({url:"/api/agency/",method:"post",data:e})}function k(e){return Object(i["a"])({url:"/api/agency/",method:"get"})}function I(e){return Object(i["a"])({url:"/api/system/area/?code=100000",method:"get"})}function x(e){return Object(i["a"])({url:"/api/system/area/?code="+e,method:"get"})}function j(e){return Object(i["a"])({url:"/api/agency/process/",method:"post",data:e})}function O(e){return Object(i["a"])({url:"/api/agency/process/",method:"get",params:e})}function $(e){return Object(i["a"])({url:`/api/agency/${e}/`,method:"get"})}function S(e){return Object(i["a"])({url:"/api/agency/process/",method:"put",params:e})}function q(e){return Object(i["a"])({url:"/api/agency/target/",method:"get",params:e})}function C(e){return Object(i["a"])({url:"/api/agency/target/",method:"post",data:e})}function U(e){return Object(i["a"])({url:"/api/agency/target/score/",method:"get",params:e})}function F(e){return Object(i["a"])({url:`/api/agency/process/detail/${e}/`,method:"get"})}function D(e){return Object(i["a"])({url:`/api/agency/${e}/`,method:"DELETE"})}function E(e){return Object(i["a"])({url:`/api/agency/${e}/`,method:"put"})}function R(e){return Object(i["a"])({url:"/api/exam/question/",method:"get",params:e})}function L(e){return Object(i["a"])({url:"/api/exam/course/",method:"get"})}function T(e){return Object(i["a"])({url:"/api/exam/ability/",method:"get"})}function z(e){return Object(i["a"])({url:"/api/exam/question/",method:"post",data:e})}function B(e,t){return Object(i["a"])({url:"/api/exam/question/"+e+"/",method:"put",data:t})}function N(e){return Object(i["a"])({url:`/api/exam/question/${e}/`,method:"DELETE"})}function P(e){return Object(i["a"])({url:"/api/exam/paper/",method:"get",params:e})}function H(e){return Object(i["a"])({url:`/api/exam/paper/${e}/`,method:"delete"})}function A(e,t){return Object(i["a"])({url:`/api/exam/paper/${e}/`,method:"put",data:t})}function M(e,t){return Object(i["a"])({url:`/api/exam/paper/${e}/`,method:"patch",data:t})}function J(e){return Object(i["a"])({url:"/api/exam/paper/",method:"post",data:e})}function Q(e,t){return Object(i["a"])({url:`/api/exam/paper_question/${e}/`,method:"get",params:t})}function G(e,t){return Object(i["a"])({url:`/api/exam/paper_question/${e}/`,method:"put",data:t})}function V(){return Object(i["a"])({url:"/api/exam/paper/",method:"get"})}function W(e,t){return Object(i["a"])({url:`/api/exam/mine/${e}/`,method:"post",data:t})}function Y(){return Object(i["a"])({url:"/api/exam/mine/",method:"get"})}function K(e){return Object(i["a"])({url:`/api/exam/result/${e}/`,method:"get"})}function X(e){return Object(i["a"])({url:"/api/exam/mine/",method:"post",data:e})}function Z(e){return Object(i["a"])({url:`/api/exam/mine/${e}/`,method:"get"})}function ee(e){return Object(i["a"])({url:`/api/exam/paper_score/${e}/`,method:"get"})}}}]);