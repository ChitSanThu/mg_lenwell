webpackJsonp([26],{"2Rir":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Js1K"),o={name:"ControlEdit",props:["id"],data:function(){return{list:[],userForm:{form_token:"",id:"",title:"",title_zh:"",code:""},rules:{title:[{required:!0,message:this.$t("config.title_no"),trigger:"blur|change"}],title_zh:[{required:!0,message:this.$t("config.title_zh_no"),trigger:"blur|change"}],code:[{required:!0,message:this.$t("states.code_no"),trigger:"blur|change"}]}}},computed:{},created:function(){this.getformtoken(),this.id&&this.getInfo()},methods:{getInfo:function(){var t=this;t.$request.getStatesInfo({id:t.id}).then(function(e){if(e.data)for(var i in e.data)for(var a in t.userForm)i==a&&(t.userForm[a]=e.data[i]?e.data[i]:"")}).catch(function(t){})},getformtoken:function(){var t=this;t.$request.getformtoken().then(function(e){t.userForm.form_token=e.data.token})},submitForm:function(t){var e=this,i=this;i.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;i.$request.setStatesSave(i.userForm).then(function(t){1==t.code?(i.$emit("changeStateslDialog",i.userForm),e.$notify({title:i.$t("config.tips"),message:t.msg,type:"success",duration:"2000"})):i.getformtoken()})})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rule_edit",staticStyle:{"padding-top":"30px"}},[i("el-form",{ref:"userForm",staticClass:"demo-userForm",attrs:{model:t.userForm,rules:t.rules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:t.$t("config.title"),prop:"title"}},[i("el-input",{model:{value:t.userForm.title,callback:function(e){t.$set(t.userForm,"title",e)},expression:"userForm.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("config.title_zh"),prop:"title_zh"}},[i("el-input",{model:{value:t.userForm.title_zh,callback:function(e){t.$set(t.userForm,"title_zh",e)},expression:"userForm.title_zh"}})],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("states.code"),prop:"code"}},[i("el-input",{model:{value:t.userForm.code,callback:function(e){t.$set(t.userForm,"code",e)},expression:"userForm.code"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("userForm")}}},[t._v(t._s(t.$t("config.submit")))])],1)],1)],1)},staticRenderFns:[]};var l=i("VU/8")(o,n,!1,function(t){i("hWFq")},"data-v-2ebb63fb",null).exports,r={components:{layoutPage:a.a,StatesEdit:l},data:function(){return{dialogTableVisible:!1,search:{page:1},id:null,total:0,tableheight:"100%",tableData:[],dialogTableTitle:"info"}},computed:{rank:function(){return this.$store.state.rank}},created:function(){this.getList()},methods:{refresh:function(){this.getList()},pageRouter:function(t){this.search.page=t,this.getList()},getList:function(){var t=this;t.$request.getStatesList(t.search).then(function(e){t.tableData=e.data.list,t.total=e.data.page?e.data.page:null,t.tableheight=window.innerHeight-221,e.data.page>1&&(t.tableheight=window.innerHeight-281)})},addRow:function(){this.id="",this.dialogTableTitle="Add",this.dialogTableVisible=!0},EditRow:function(t){this.dialogTableTitle="Edit",this.dialogTableVisible=!0,this.id=t.id},changeStateslDialog:function(t){this.dialogTableVisible=!1,this.getList()},deleteRow:function(t){var e=this,i=this;i.$alert(i.$t("config.delMsg"),i.$t("config.tips"),{confirmButtonText:i.$t("config.confirm"),showCancelButton:!0,cancelButtonText:i.$t("config.cancel")}).then(function(){i.$request.delStates({id:t.id}).then(function(t){1==t.code&&(i.getList(),e.$notify({title:i.$t("config.tips"),message:t.msg,type:"success"}))})})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"group",staticStyle:{"background-color":"white",padding:"15px","border-radius":"5px"}},[i("div",{staticClass:"toolbar"},[i("div",{staticClass:"toolbar_left"},[i("el-button",{staticClass:"d-refresh-button",attrs:{icon:"el-icon-refresh"},on:{click:function(e){return t.refresh()}}}),t._v(" "),t.rank&&t.rank.add?i("el-button",{staticClass:"d-button",attrs:{type:"success",icon:"el-icon-plus"},on:{click:t.addRow}},[t._v(t._s(t.$t("config.add")))]):t._e()],1)]),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",splict:"","max-height":t.tableheight}},[i("el-table-column",{attrs:{fixed:"",prop:"id",label:"ID",width:"60"}}),t._v(" "),i("el-table-column",{attrs:{prop:"title","min-width":"200",label:t.$t("config.title")}}),t._v(" "),i("el-table-column",{attrs:{prop:"title_zh","min-width":"300",label:t.$t("config.title_zh")}}),t._v(" "),i("el-table-column",{attrs:{prop:"code","min-width":"300",label:t.$t("states.code")}}),t._v(" "),i("el-table-column",{attrs:{prop:"created_at",label:t.$t("config.create_at"),width:"300"}}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:t.$t("config.operate"),width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.rank&&t.rank.edit?i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),t.EditRow(e.row)}}},[t._v("\n            "+t._s(t.$t("config.edit"))+"\n          ")]):t._e(),t._v(" "),t.rank&&t.rank.del?i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),t.deleteRow(e.row)}}},[t._v("\n            "+t._s(t.$t("config.del"))+"\n          ")]):t._e()]}}])})],1),t._v(" "),t.total&&t.total>1?i("layoutPage",{attrs:{page:t.search.page,num:"5",total:t.total},on:{pageRouter:t.pageRouter}}):t._e(),t._v(" "),t.dialogTableVisible?i("el-dialog",{attrs:{visible:t.dialogTableVisible,width:"500px",title:t.dialogTableTitle},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[i("StatesEdit",{attrs:{id:t.id},on:{changeStateslDialog:t.changeStateslDialog}})],1):t._e()],1)},staticRenderFns:[]};var c=i("VU/8")(r,s,!1,function(t){i("rNsb")},"data-v-fbc27054",null);e.default=c.exports},hWFq:function(t,e){},rNsb:function(t,e){}});