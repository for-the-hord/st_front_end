(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38bda1fe"],{"533d":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return t("d2-container",{ref:"",staticStyle:{cursor:"pointer"}},[t("div",{staticClass:"tabs_system"},[t("el-tabs",{on:{"tab-click":e.handleClicks},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"角色管理",name:"first"}},[t("div",[t("br"),t("br"),t("el-button",{staticClass:"tableHandleBtn",attrs:{size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.addInfo()}}},[e._v("添加角色 ")]),t("el-button",{staticClass:"tableHandleBtn",attrs:{size:"mini",icon:"el-icon-refresh"},on:{click:function(t){return e.refresh()}}},[e._v("刷新 ")]),t("br"),t("br"),t("br"),t("div",{staticClass:"tabletd_center",staticStyle:{margin:"0px  0px !important"}},[t("qd-table",{ref:"table",staticStyle:{"margin-top":"-10px"},attrs:{refresh:e.tableInfo.refresh,"init-curpage":e.tableInfo.initCurpage,data:e.tableInfo.data,query:e.queryData,"field-list":e.tableFieldList,pager:!0,tabIndex:!0,api:e.getList},on:{"update:data":function(t){return e.$set(e.tableInfo,"data",t)},"update:query":function(t){e.queryData=t},handleClick:e.handleClick,handleEvent:e.handleEvent},scopedSlots:e._u([{key:"col-add_time",fn:function(t){return[e._v(" "+e._s(e.getLocalTime(t.row.add_time))+" ")]}},{key:"col-role_id",fn:function(t){return[e._v(" "+e._s(e.get_role(t.row.role_id))+" ")]}},{key:"col-businessState",fn:function(s){return[0==s.row.businessState?t("span",[e._v("正常")]):e._e(),1==s.row.businessState?t("span",[e._v("终止 ")]):e._e(),2==s.row.businessState?t("span",[e._v("删除")]):e._e()]}},{key:"col-revoked",fn:function(s){return[0==s.row.revoked?t("el-tag",{attrs:{type:"success"}},[e._v("已启用")]):e._e(),1==s.row.revoked?t("el-tag",{attrs:{type:"danger"}},[e._v("已禁用")]):e._e()]}},{key:"col-action",fn:function(s){return[t("span",{staticClass:"lds_tag lds_blue",on:{click:function(t){return e.goInfo(s.row)}}},[e._v("编辑")]),t("span",{staticClass:"lds_tag lds_blue",on:{click:function(t){return e.orderInfo(s.row)}}},[e._v("权限")]),0==s.row.revoked?t("span",{staticClass:"lds_tag lds_red",on:{click:function(t){return e.setInfo(s.row)}}},[e._v("禁用")]):e._e(),1==s.row.revoked?t("span",{staticClass:"lds_tag",on:{click:function(t){return e.setInfo2(s.row)}}},[e._v("启用")]):e._e()]}}])})],1)],1)]),e.tabs_lds?t("el-tab-pane",{attrs:{label:"权限管理",name:"second"}},[t("div",{staticClass:"wangpengs"},[t("div",{staticClass:"qd-table"},[t("div",{},[t("el-table",{staticClass:"qd-table-cell10",staticStyle:{width:"100%","margin-bottom":"20px","text-align":"center"},attrs:{data:e.tableData,"row-key":"id",border:"",center:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[t("el-table-column",{attrs:{prop:"title",label:"功能模块",sortable:"",width:"180"}}),t("el-table-column",{attrs:{prop:"path",label:"模块路径"}}),t("el-table-column",{attrs:{prop:"mod_order",label:"模块排序",align:"center"}}),t("el-table-column",{attrs:{prop:"mod_value",label:"模块值",align:"center"}}),t("el-table-column",{attrs:{prop:"permits",label:"已有权限"},scopedSlots:e._u([{key:"default",fn:function(s){return e._l(s.row.permits,(function(s){return t("span",{staticClass:"have_list",staticStyle:{color:"white"}},[e._v(" "+e._s(e.set_tage(s))+" ")])}))}}],null,!1,3905839713)}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return[1!=s.row.is_power?t("el-button",{attrs:{size:"mini",type:"prmary"},on:{click:function(t){return e.handleEdit2(s.$index,s.row)}}},[e._v("授权 ")]):e._e(),1==s.row.is_power?t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(s.$index,s.row)}}},[e._v("禁用 ")]):e._e()]}}],null,!1,163764195)})],1)],1)])])]):e._e()],1)],1),t("qd-dialog",{attrs:{label_lds:!0,title:e.dialogInfo.title,visible:e.dialogInfo.visible,width:e.dialogInfo.width,"bt-loading":e.dialogInfo.btLoading,isOk:e.isok},on:{"update:visible":function(t){return e.$set(e.dialogInfo,"visible",t)},handleOk:function(t){return e.submitForm("ruleForm")},quxiao:function(t){return e.quxiao()}}},[t("div",{staticClass:"lds_dialog_form"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[t("el-input",{attrs:{disabled:"add"!=e.usertype},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"角色描述",prop:"desc"}},[t("el-input",{attrs:{type:""},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1)],1)],1)]),t("qd-dialog",{attrs:{label_lds:!0,title:e.dialogInfo2.title,visible:e.dialogInfo2.visible,width:e.dialogInfo2.width,"bt-loading":e.dialogInfo2.btLoading,isOk:e.isok},on:{"update:visible":function(t){return e.$set(e.dialogInfo2,"visible",t)},handleOk:function(t){return e.submitForm2("ruleForm")},quxiao:function(t){return e.quxiao()}}},[t("div",{staticClass:"lds_dialog_form"},[t("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[t("el-checkbox",{attrs:{label:"添加"}}),t("el-checkbox",{attrs:{label:"删除"}}),t("el-checkbox",{attrs:{label:"修改"}}),t("el-checkbox",{attrs:{label:"查看"}})],1)],1)])],1)},a=[],l=(s("8c9b"),s("a717"),s("d017")),n=s("b990"),r={name:"lds_xitong_user",data(){var e=(e,t,s)=>{""==t&&s(new Error("请输入用户名")),t.length<3&&s(new Error("用户名的长度在3-9位")),t.length>9&&s(new Error("用户名的长度在3-9位")),s()};return{allmenu:[],orderinfox:{},set_mod_id:"",set_mod_value:"",set_role_id:"",checkList:[],tabs_lds:!1,activeName:"first",role_id_lds:"",shouquanrole_id:"",tableData:[],tableData1:[{id:1,date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:2,date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:3,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",hasChildren:!0},{id:4,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],juese:[{name:"管理用户",value:"1"},{name:"营运用户",value:"2"}],value:"",queryData:{real_name:"",username:"",role_id:""},dialogInfo:{title:"查看",visible:!1,width:"600px"},dialogInfo2:{title:"查看",visible:!1,width:"700px"},ruleForm:{name:"",desc:"",id:""},rules:{name:[{required:!0,validator:e,trigger:"blur"}]},filterFieldList:[{fieldType:"text",key:"real_name",value:"名称",label_lds:!0},{fieldType:"text",key:"username",value:"账号",label_lds:!0},{fieldType:"select",key:"role_id",value:"角色类型",list:"role_id",label_lds:!0}],listTypeInfo:{role_id:[{value:"",label:"全部"},{value:1,label:"管理用户"},{value:2,label:"运营用户"}],siteName:[{value:0,label:"中建八局人才公寓"},{value:1,label:"中建七局明珠小区"},{value:2,label:"其它项目"}]},tableFieldList:[{key:"name",label:"角色名称"},{key:"desc",label:"角色描述"},{key:"uses",label:"角色使用情况"},{key:"add_time",label:"角色添加时间",type:"slot"},{key:"revoked",label:"当前状态",type:"slot"},{key:"action",label:"操作",type:"slot",width:"300px",fixed:"right"}],getList:l["i"]}},methods:{huoqucaidan(){let e=this.allmenu;var t=[],s=[];if(e){e.map(e=>{e.children&&(t=e.children),s.push(e)}),s.map(e=>{e.children&&delete e.children});let i=[...new Set(s)];localStorage.setItem("newmenu",JSON.stringify(i)),localStorage.setItem("sidemenu",JSON.stringify(t)),this.$store.commit("d2admin/menu/headerSet",JSON.parse(localStorage.getItem("newmenu"))),this.$store.commit("d2admin/menu/asideSet",JSON.parse(localStorage.getItem("sidemenu")))}},submitForm2(){let e=[];this.checkList.map(t=>{"添加"==t&&e.push("add"),"删除"==t&&e.push("delete"),"修改"==t&&e.push("edit"),"查看"==t&&e.push("view")});let t={action:e,mod_id:this.set_mod_id,mod_value:this.set_mod_value,role_id:this.set_role_id};this.dialogInfo2.visible=!1,Object(l["q"])(t).then(e=>{200==e.code?(this.$message.success("授权成功"),Object(l["h"])(this.orderinfox).then(e=>{this.tableData=e.data})):this.$message.error("授权失败");let t=sessionStorage.getItem("role_id");Object(l["f"])(t).then(e=>{let t=e.data;this.allmenu=[],t.map(e=>{this.allmenu.push(e)}),this.huoqucaidan()})})},set_tage(e){return"add"==e?"添加":"edit"==e?"修改":"view"==e?"查看":"delete"==e?"删除":void 0},handleClicks(e,t){"first"==e.name&&(this.tabs_lds=!1)},setInfo2(e){7==this.role_id_lds?(this.dialogInfo.title="启用",this.$confirm("此操作将启用, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{Object(l["b"])(e.id).then(e=>{this.freshTableList(),this.$message({type:"success",message:e.message}),this.freshTableList()})}).catch(()=>{})):this.$message({type:"warning",message:"当前用户无操作权限"})},handleEdit2(e,t){this.dialogInfo2.visible=!0,this.set_mod_id=t.id,this.set_mod_value=t.mod_value,this.checkList=[],t.permits.map(e=>{"add"==e&&this.checkList.push("添加"),"delete"==e&&this.checkList.push("删除"),"edit"==e&&this.checkList.push("修改"),"view"==e&&this.checkList.push("查看")})},handleEdit(e,t){this.$confirm("确定要启用该模块吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{let e={mod_id:t.id,role_id:this.shouquanrole_id,action:1};Object(l["m"])(e).then(e=>{200==e.code?(this.$message({type:"success",message:e.message}),this.dialogInfo2.visible=!1):this.$message({message:e.message,type:"warning"})})}).catch(()=>{this.$message({type:"info",message:"操作已取消"})})},handleDelete(e,t){this.$confirm("确定要禁用该模块吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{let e={mod_id:t.id,role_id:this.shouquanrole_id,action:0};Object(l["m"])(e).then(e=>{200==e.code?(this.$message({type:"success",message:e.message}),this.dialogInfo2.visible=!1):this.$message({message:e.message,type:"warning"})})}).catch(()=>{this.$message({type:"info",message:"操作已取消"})})},orderInfo(e){this.orderinfox=e,this.set_role_id=e.id,this.activeName="second",this.tabs_lds=!0,Object(l["h"])(e).then(e=>{this.tableData=e.data})},setInfo(e){7==this.role_id_lds?(this.usertype="delete",this.dialogInfo.title="禁用",this.$confirm("此操作将永久禁用, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{Object(l["a"])(e,this.usertype).then(e=>{this.$message({type:"success",message:e.message}),this.freshTableList()})}).catch(()=>{})):this.$message({type:"warning",message:"当前用户无操作权限"})},refresh(){this.freshTableList()},quxiao(){for(let e in this.ruleForm)this.ruleForm[e]=""},getLocalTime(e){return new Date(1e3*e).toLocaleString().replace(/:\d{1,2}$/," ")},get_role(e){return n["b"][e]},addInfo(){7==this.role_id_lds?(this.dialogInfo.title="新增",this.usertype="add",this.dialogInfo.visible=!0):this.$message({type:"warning",message:"当前用户无操作权限"})},goInfo(e){if(7==this.role_id_lds){this.dialogInfo.title="编辑",this.usertype="edit",this.dialogInfo.visible=!0;for(let t in this.ruleForm)this.ruleForm[t]=e[t]}else this.$message({type:"warning",message:"当前用户无操作权限"})},submitForm(e){this.$refs[e].validate(e=>{if(!e)return!1;Object(l["a"])(this.ruleForm,this.usertype).then(e=>{200==e.code?(this.$message({message:e.message,type:"success"}),this.dialogInfo.visible=!1,this.freshTableList()):this.$message({message:e.message,type:"warning"})})})}},watch:{$route:{handler(e,t){e.path.includes("/system")&&setTimeout(()=>{this.freshTableList()},100)},immediate:!0}},mounted(){this.getLocalTime(1619141651),this.refresh()},created(){this.role_id_lds=sessionStorage.getItem("role_id")}},o=r,d=(s("a89e"),s("e607")),c=function(e){e.options.__source="src/views/admin/role.vue"},u=c,h=Object(d["a"])(o,i,a,!1,null,"03733e88",null);"function"===typeof u&&u(h);t["default"]=h.exports},a89e:function(e,t,s){"use strict";s("f80e")},f80e:function(e,t,s){}}]);