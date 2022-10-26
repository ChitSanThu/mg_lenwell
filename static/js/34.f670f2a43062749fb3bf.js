webpackJsonp([34],{"5QGA":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Js1K"),o={name:"ColorEdit",props:["id"],data:function(){return{list:[],formData:{id:"",types:"",time_num:""},rules:{types:[{required:!0,message:this.$t("postponed.types_no"),trigger:"blur|change"}],time_num:[{required:!0,message:this.$t("postponed.time_num_no"),trigger:"blur|change"}]}}},created:function(){this.id&&this.getInfo()},methods:{getInfo:function(){var t=this;t.$request.repairpostponedtimedetail({id:t.id}).then(function(e){1==e.code&&(t.formData=e.data)}).catch(function(t){})},submitForm:function(t){var e=this,i=this;i.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;i.$request.repairpostponedtimesave(i.formData).then(function(t){1==t.code&&(i.$emit("changePostponedDialog",i.formData),e.$notify({title:i.$t("config.tips"),message:t.msg,type:"success",duration:"2000"}))})})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rule_edit",staticStyle:{"padding-top":"30px","background-color":"white"}},[i("el-form",{ref:"userForm",staticClass:"demo-userForm",attrs:{model:t.formData,rules:t.rules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:t.$t("postponed.types"),prop:"types"}},[i("el-select",{model:{value:t.formData.types,callback:function(e){t.$set(t.formData,"types",e)},expression:"formData.types"}},[i("el-option",{key:1,attrs:{value:"1",label:t.$t("postponed.types_one")}}),t._v(" "),i("el-option",{key:2,attrs:{value:"2",label:t.$t("postponed.types_two")}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:t.$t("postponed.time_num"),prop:"time_num"}},[i("el-input",{attrs:{"prefix-icon":1==t.formData.types?"el-icon-circle-plus-outline":2==t.formData.types?"el-icon-remove-outline":""},model:{value:t.formData.time_num,callback:function(e){t.$set(t.formData,"time_num",e)},expression:"formData.time_num"}},[i("template",{slot:"append"},[t._v("min")])],2)],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("userForm")}}},[t._v(t._s(t.$t("config.submit")))])],1)],1)],1)},staticRenderFns:[]};var s=i("VU/8")(o,n,!1,function(t){i("BDZY")},"data-v-0d2559e2",null).exports,l={components:{layoutPage:a.a,Postponed:s},data:function(){return{dialogTableVisible:!1,search:{page:1},id:null,total:0,tableheight:"100%",tableData:[],dialogTableTitle:"Info"}},computed:{rank:function(){return this.$store.state.rank}},created:function(){this.getList()},methods:{refresh:function(){this.getList()},pageRouter:function(t){this.search.page=t,this.routerPath()},getList:function(){var t=this;t.$request.repairpostponedtimegetList(t.search).then(function(e){t.tableData=e.data,t.total=e.data.page?e.data.page:null,t.tableheight=window.innerHeight-221,e.data.page>1&&(t.tableheight=window.innerHeight-281)})},addRow:function(){this.id="",this.dialogTableTitle="Add",this.dialogTableVisible=!0},EditRow:function(t){this.dialogTableTitle="Edit",this.id=t.id,this.dialogTableVisible=!0},changePostponedDialog:function(t){this.dialogTableTitle="Info",this.id="",this.dialogTableVisible=!1,this.getList()},deleteRow:function(t){var e=this,i=this;i.$alert(i.$t("config.delMsg"),i.$t("config.tips"),{confirmButtonText:i.$t("config.confirm"),showCancelButton:!0,cancelButtonText:i.$t("config.cancel")}).then(function(){i.$request.repairpostponedtimedel({id:t.id}).then(function(t){1==t.code&&(e.$notify({title:i.$t("config.tips"),message:t.msg,type:"success"}),i.getList())})})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"group",staticStyle:{background:"white",padding:"15px","border-radius":"5px"}},[i("div",{staticClass:"toolbar"},[i("div",{staticClass:"toolbar_left"},[i("el-button",{staticClass:"d-refresh-button",attrs:{icon:"el-icon-refresh"},on:{click:function(e){return t.refresh()}}}),t._v(" "),t.rank&&t.rank.add?i("el-button",{staticClass:"d-buttom",attrs:{type:"success",icon:"el-icon-plus"},on:{click:t.addRow}},[t._v(t._s(t.$t("config.add")))]):t._e()],1)]),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",splict:""}},[i("el-table-column",{attrs:{fixed:"",prop:"id",label:"ID",width:"60"}}),t._v(" "),i("el-table-column",{attrs:{prop:"time_num","min-width":"300",label:t.$t("postponed.time_num")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(1==e.row.types?"+":"-")+t._s(e.row.time_num)+" (min)\n        ")]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"created_at",label:t.$t("config.create_at"),width:"300"}}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:t.$t("config.operate"),width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.rank&&t.rank.edit?i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),t.EditRow(e.row)}}},[t._v("\n            "+t._s(t.$t("config.edit"))+"\n          ")]):t._e(),t._v(" "),t.rank&&t.rank.del?i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),t.deleteRow(e.row)}}},[t._v("\n            "+t._s(t.$t("config.del"))+"\n          ")]):t._e()]}}])})],1),t._v(" "),t.total&&t.total>1?i("layoutPage",{attrs:{page:t.search.page,num:"5",total:t.total},on:{pageRouter:t.pageRouter}}):t._e(),t._v(" "),t.dialogTableVisible?i("el-dialog",{attrs:{visible:t.dialogTableVisible,width:"500px",title:t.dialogTableTitle},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[i("Postponed",{attrs:{id:t.id},on:{changePostponedDialog:t.changePostponedDialog}})],1):t._e()],1)},staticRenderFns:[]};var c=i("VU/8")(l,r,!1,function(t){i("guh7")},"data-v-57a86f58",null);e.default=c.exports},BDZY:function(t,e){},guh7:function(t,e){}});