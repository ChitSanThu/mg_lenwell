webpackJsonp([11],{ELZO:function(e,t){},I7HB:function(e,t,a){"use strict";var i={name:"userEdit",props:["id"],data:function(){return{lang:this.$i18n.locale,list:[],avatarFile:"",vip_level:[],roles_list:[],select:[],userForm:{form_token:"",id:"",status:"1",nickname:"",avatar:"",mobile:"",global_roaming:"",email:"",password:"",role_id:"",org_name:"",vip_level:""},rules:{nickname:[{required:!0,message:this.$t("config.nickname_no"),trigger:"blur|change"}],mobile:[{required:!0,message:this.$t("config.mobile_no"),trigger:"blur|change"},{pattern:/^1[1|2|3|4|5|6|7|8|9][0-9]\d{8}$/,message:this.$t("config.mobile_no_error"),trigger:"blur|change"}],email:[{required:!1,message:this.$t("config.email_no"),trigger:"blur|change"},{pattern:"^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$",message:this.$t("config.email_no_error"),trigger:"blur|change"}],password:[{required:!0,message:this.$t("config.password_no"),trigger:"blur|change"}]}}},computed:{uploadAction:function(){return this.$store.state.uploadAction}},created:function(){this.getformtoken(),this.getVipList(),this.getUserRolesList(),this.id&&(this.getUserInfo(),this.rules.password=[{required:!1,message:this.$t("config.password_no"),trigger:"blur|change"}])},methods:{getVipList:function(){var e=this;e.$request.getUserVipList(e.search).then(function(t){e.vip_level=t.data})},getUserRolesList:function(){var e=this;e.$request.getUserRoleList().then(function(t){e.roles_list=t.data})},getUserInfo:function(){var e=this;e.$request.getUserInfo({id:e.id}).then(function(t){if(1==t.code){var a=e.userForm;for(var i in a)void 0!=t.data[i]&&(a[i]="status"==i?String(t.data[i]):t.data[i]);a.password="",e.userForm=a,e.avatarFile=t.data.full_avatar}})},handleAvatarSuccess:function(e,t){this.avatarFile=e.data.fullUrl,this.userForm.avatar=e.data.url},beforeAvatarUpload:function(e){},getformtoken:function(){var e=this;e.$request.getformtoken().then(function(t){e.userForm.form_token=t.data.token})},submitForm:function(e){var t=this,a=this;a.$refs[e].validate(function(e){e&&a.$request.setUserSave(a.userForm).then(function(e){1==e.code?(a.$emit("changeUserDialog",a.userForm),t.$notify({title:a.$t("config.tips"),message:e.msg,type:"success",duration:"2000"})):a.userForm.form_token=e.data.token})})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rule_edit",staticStyle:{"padding-top":"30px"}},[a("el-form",{ref:"userForm",staticClass:"demo-userForm",attrs:{model:e.userForm,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{staticClass:"upload-form-item",attrs:{label:e.$t("config.avatar")}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadAction,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.avatarFile?a("img",{staticClass:"avatar",attrs:{src:e.avatarFile}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("config.mobile")}},[a("div",{staticClass:"user_edit_mobile_container"},[a("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"Area code",prop:"global_roaming"},model:{value:e.userForm.global_roaming,callback:function(t){e.$set(e.userForm,"global_roaming",t)},expression:"userForm.global_roaming"}}),e._v(" "),a("el-input",{attrs:{prop:"mobile"},model:{value:e.userForm.mobile,callback:function(t){e.$set(e.userForm,"mobile",t)},expression:"userForm.mobile"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.role_id")}},[a("el-select",{attrs:{placeholder:e.$t("config.select")},model:{value:e.userForm.role_id,callback:function(t){e.$set(e.userForm,"role_id",t)},expression:"userForm.role_id"}},e._l(e.roles_list,function(t,i){return a("el-option",{key:i,attrs:{label:"ch"==e.lang?t.title_zh:t.title,value:t.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("config.nickname")}},[a("el-input",{model:{value:e.userForm.nickname,callback:function(t){e.$set(e.userForm,"nickname",t)},expression:"userForm.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("config.email"),prop:"email"}},[a("el-input",{model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email",t)},expression:"userForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.org_name")}},[a("el-input",{model:{value:e.userForm.org_name,callback:function(t){e.$set(e.userForm,"org_name",t)},expression:"userForm.org_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("config.password"),prop:"password"}},[a("el-input",{attrs:{placeholder:e.id?e.$t("config.password_no_input"):""},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("config.status")}},[a("el-radio",{attrs:{label:"1"},model:{value:e.userForm.status,callback:function(t){e.$set(e.userForm,"status",t)},expression:"userForm.status"}},[e._v("Active")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.userForm.status,callback:function(t){e.$set(e.userForm,"status",t)},expression:"userForm.status"}},[e._v("Disabled")])],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.vip_level")}},[a("el-select",{attrs:{placeholder:e.$t("config.select")},model:{value:e.userForm.vip_level,callback:function(t){e.$set(e.userForm,"vip_level",t)},expression:"userForm.vip_level"}},e._l(e.vip_level,function(t,i){return a("el-option",{key:i,attrs:{label:"ch"==e.lang?t.title_zh:t.title,value:t.id}})}),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("userForm")}}},[e._v(e._s(e.$t("config.submit")))])],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(i,l,!1,function(e){a("IqEC")},"data-v-1d4c1393",null);t.a=s.exports},IqEC:function(e,t){},bvjn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Js1K"),l=a("I7HB"),s={components:{layoutPage:i.a,userEdit:l.a},data:function(){return{lang:this.$i18n.locale,searchShow:!1,dialogTableVisible:!1,loadingTable:!0,search:{page:1,pagesize:15,nickname:"",id:"",email:"",mobile:"",vip_level:"",role_id:""},vip_list:[],roles_list:[],id:null,total:0,tableheight:"100%",tableData:[],dialogTableTitle:"Info"}},computed:{rank:function(){return this.$store.state.rank}},created:function(){this.getUserVipList(),this.getUserRoleList(),this.getList()},methods:{refresh:function(){this.getList()},bindSearch:function(){this.searchShow?this.searchShow=!1:this.searchShow=!0},searchTableList:function(){this.search.page=1,this.getList()},resetForm:function(){var e=this.search;for(var t in e)"page"==t?e[t]=1:"pagesize"==t||(e[t]="");this.search=e,this.getList()},changPageSize:function(e){this.search.pagesize=e,this.getList()},changCurrentPage:function(e){this.search.page=e,this.getList()},changJumpPage:function(e){this.search.page=e,this.getList()},getList:function(){var e=this;e.loadingTable=!0,e.$request.getUserList(e.search).then(function(t){e.loadingTable=!1,e.tableData=t.data.list,e.total=t.data.total?t.data.total:0})},getUserVipList:function(){var e=this;e.$request.getUserVipList().then(function(t){if(t.data){for(var a in t.data)"ch"==e.$i18n.locale?t.data[a].name=t.data[a].title_zh:t.data[a].name=t.data[a].title,t.data[a].id=String(t.data[a].id);e.vip_list=t.data}})},getUserRoleList:function(){var e=this;e.$request.getUserRoleList().then(function(t){if(t.data){for(var a in t.data)"ch"==e.$i18n.locale?t.data[a].name=t.data[a].title_zh:t.data[a].name=t.data[a].title,t.data[a].id=String(t.data[a].id);e.roles_list=t.data}})},addRow:function(){this.dialogTableTitle="Add",this.dialogTableVisible=!0,this.id=""},EditRow:function(e){this.dialogTableTitle="Edit",this.dialogTableVisible=!0,this.id=e.id},changeUserDialog:function(e){this.dialogTableTitle="Info",this.id="",this.dialogTableVisible=!1,this.getList()},deleteRow:function(e){var t=this,a=this;a.$alert(a.$t("config.delMsg"),a.$t("config.tips"),{confirmButtonText:a.$t("config.confirm"),showCancelButton:!0,cancelButtonText:a.$t("config.cancel")}).then(function(){a.$request.delUser({id:e.id}).then(function(e){1==e.code&&(a.getUserList(),t.$notify({title:a.$t("config.tips"),message:e.data.msg,type:"success"}))})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"group",staticStyle:{background:"white",padding:"15px","border-radius":"5px"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.searchShow,expression:"searchShow"}],staticClass:"toolbar_form"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.search,"label-width":"80px"}},[a("el-form-item",{attrs:{label:e.$t("config.nickname")}},[a("el-input",{model:{value:e.search.nickname,callback:function(t){e.$set(e.search,"nickname",t)},expression:"search.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("config.mobile")}},[a("el-input",{model:{value:e.search.mobile,callback:function(t){e.$set(e.search,"mobile",t)},expression:"search.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("config.email")}},[a("el-input",{model:{value:e.search.email,callback:function(t){e.$set(e.search,"email",t)},expression:"search.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.vip_level")}},[a("el-select",{attrs:{placeholder:e.$t("config.select")},model:{value:e.search.vip_level,callback:function(t){e.$set(e.search,"vip_level",t)},expression:"search.vip_level"}},[a("el-option",{key:"",attrs:{label:e.$t("config.select"),value:""}}),e._v(" "),e._l(e.vip_list,function(t,i){return e.vip_list?a("el-option",{key:i,attrs:{label:t.name,value:t.id}}):e._e()})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.role_id")}},[a("el-select",{attrs:{placeholder:e.$t("config.select")},model:{value:e.search.role_id,callback:function(t){e.$set(e.search,"role_id",t)},expression:"search.role_id"}},[a("el-option",{key:"",attrs:{label:e.$t("config.select"),value:""}}),e._v(" "),e._l(e.roles_list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})],2)],1),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"d-buttom",attrs:{type:"primary"},on:{click:function(t){return e.searchTableList()}}},[e._v(e._s(e.$t("config.search")))]),e._v(" "),a("el-button",{staticClass:"d-buttom",on:{click:function(t){return e.resetForm()}}},[e._v(e._s(e.$t("config.reset")))])],1)],1)],1),e._v(" "),a("div",{staticClass:"toolbar"},[a("div",{staticClass:"toolbar_left"},[a("el-button",{staticClass:"d-refresh-button",attrs:{icon:"el-icon-refresh"},on:{click:function(t){return e.refresh()}}}),e._v(" "),e.rank&&e.rank.add?a("el-button",{staticClass:"d-buttom",attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.addRow}},[e._v(e._s(e.$t("config.add")))]):e._e()],1),e._v(" "),a("div",{staticClass:"toolbar-form"},[a("el-button",{staticClass:"d-buttom",attrs:{type:"info",icon:"el-icon-search"},on:{click:e.bindSearch}})],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingTable,expression:"loadingTable"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",splict:""}},[a("el-table-column",{attrs:{prop:"avatar",width:"80",label:e.$t("config.avatar")},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-image",{staticStyle:{width:"40px",height:"40px"},attrs:{src:e.row.full_avatar,fit:"contain",lazy:""}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname","min-width":"120",label:e.$t("config.nickname")}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"120",label:e.$t("user.role_id")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.roles?(e.lang,t.row.roles.title_zh):"无")+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"120",label:"Vip Level"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.viplevel?(e.lang,t.row.viplevel.title_zh):"")+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("config.status"),width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1==t.row.status?"success":"danger","disable-transitions":""}},[e._v(e._s(1==t.row.status?"Active":"Disabled"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"email",width:"200",label:e.$t("config.email")}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile_txt",width:"200",label:e.$t("config.mobile")}}),e._v(" "),a("el-table-column",{attrs:{prop:"org_name","min-width":"180",label:e.$t("user.org_name")}}),e._v(" "),a("el-table-column",{attrs:{prop:"loginip",width:"180",label:e.$t("user.loginip")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.loginip?t.row.loginip:"无")+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"logintime",label:e.$t("user.logintime"),width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.logintime?t.row.logintime:"无")+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:e.$t("config.operate"),width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.rank&&e.rank.edit?a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.EditRow(t.row)}}},[e._v("\n            "+e._s(e.$t("config.edit"))+"\n          ")]):e._e(),e._v(" "),e.rank&&e.rank.del?a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteRow(t.row)}}},[e._v("\n            "+e._s(e.$t("config.del"))+"\n          ")]):e._e()]}}])})],1),e._v(" "),a("layoutPage",{attrs:{total:e.total,currentpage:e.search.page},on:{changPageSize:e.changPageSize,changCurrentPage:e.changCurrentPage,changJumpPage:e.changJumpPage}}),e._v(" "),e.dialogTableVisible?a("el-dialog",{attrs:{visible:e.dialogTableVisible,width:"800px",title:e.dialogTableTitle},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("userEdit",{attrs:{id:e.id},on:{changeUserDialog:e.changeUserDialog}})],1):e._e()],1)},staticRenderFns:[]};var o=a("VU/8")(s,r,!1,function(e){a("ELZO")},"data-v-7a307ac6",null);t.default=o.exports}});