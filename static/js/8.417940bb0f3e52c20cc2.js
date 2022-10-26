webpackJsonp([8],{"4iHI":function(e,t){},Bd13:function(e,t){},Q5gh:function(e,t){},TQhp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={components:{layoutPage:a("Js1K").a},data:function(){return{lang:this.$i18n.locale,searchShow:!1,dialogTableVisible:!1,loadingTable:!0,search:{page:1,pagesize:15,nickname:"",id:"",email:"",mobile:"",vip_level:"",role_id:""},vip_list:[],roles_list:[],id:null,total:0,multipleSelection:[],tableData:[],dialogTableTitle:"Info"}},computed:{rank:function(){return this.$store.state.rank}},created:function(){this.getUserVipList(),this.getUserRoleList(),this.getList()},methods:{refresh:function(){this.getList()},bindSearch:function(){this.searchShow?this.searchShow=!1:this.searchShow=!0},searchTableList:function(){this.search.page=1,this.getList()},resetForm:function(){var e=this.search;for(var t in e)"page"==t?e[t]=1:"pagesize"==t||(e[t]="");this.search=e,this.getList()},changPageSize:function(e){this.search.pagesize=e,this.getList()},changCurrentPage:function(e){this.search.page=e,this.getList()},changJumpPage:function(e){this.search.page=e,this.getList()},getList:function(){var e=this;e.loadingTable=!0,e.$request.getUserList(e.search).then(function(t){e.loadingTable=!1,e.tableData=t.data.list,e.total=t.data.total?t.data.total:0})},getUserVipList:function(){var e=this;e.$request.getUserVipList().then(function(t){if(t.data){for(var a in t.data)"ch"==e.$i18n.locale?t.data[a].name=t.data[a].title_zh:t.data[a].name=t.data[a].title,t.data[a].id=String(t.data[a].id);e.vip_list=t.data}})},getUserRoleList:function(){var e=this;e.$request.getUserRoleList().then(function(t){if(t.data){for(var a in t.data)"ch"==e.$i18n.locale?t.data[a].name=t.data[a].title_zh:t.data[a].name=t.data[a].title,t.data[a].id=String(t.data[a].id);e.roles_list=t.data}})},changeCheckbox:function(e){this.multipleSelection=e},selectUserlist:function(){this.multipleSelection.length<=0&&this.$message.error("Please select a customer"),this.$emit("changeSelectUserList",this.multipleSelection)}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"group",staticStyle:{background:"white",padding:"15px","border-radius":"5px"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.searchShow,expression:"searchShow"}],staticClass:"toolbar_form"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.search,"label-width":"80px"}},[a("el-form-item",{attrs:{label:e.$t("config.nickname")}},[a("el-input",{model:{value:e.search.nickname,callback:function(t){e.$set(e.search,"nickname",t)},expression:"search.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("config.mobile")}},[a("el-input",{model:{value:e.search.mobile,callback:function(t){e.$set(e.search,"mobile",t)},expression:"search.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("config.email")}},[a("el-input",{model:{value:e.search.email,callback:function(t){e.$set(e.search,"email",t)},expression:"search.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.vip_level")}},[a("el-select",{attrs:{placeholder:e.$t("config.select")},model:{value:e.search.vip_level,callback:function(t){e.$set(e.search,"vip_level",t)},expression:"search.vip_level"}},[a("el-option",{key:"",attrs:{label:e.$t("config.select"),value:""}}),e._v(" "),e._l(e.vip_list,function(t,i){return e.vip_list?a("el-option",{key:i,attrs:{label:t.name,value:t.id}}):e._e()})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.role_id")}},[a("el-select",{attrs:{placeholder:e.$t("config.select")},model:{value:e.search.role_id,callback:function(t){e.$set(e.search,"role_id",t)},expression:"search.role_id"}},[a("el-option",{key:"",attrs:{label:e.$t("config.select"),value:""}}),e._v(" "),e._l(e.roles_list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})],2)],1),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"d-buttom",attrs:{type:"primary"},on:{click:function(t){return e.searchTableList()}}},[e._v(e._s(e.$t("config.search")))]),e._v(" "),a("el-button",{staticClass:"d-buttom",on:{click:function(t){return e.resetForm()}}},[e._v(e._s(e.$t("config.reset")))])],1)],1)],1),e._v(" "),a("div",{staticClass:"toolbar"},[a("div",{staticClass:"toolbar_left"},[a("el-button",{staticClass:"d-refresh-button",attrs:{icon:"el-icon-refresh"},on:{click:function(t){return e.refresh()}}}),e._v(" "),a("el-button",{staticClass:"d-buttom",attrs:{type:"success"},on:{click:function(t){return e.selectUserlist()}}},[e._v("Determine")])],1),e._v(" "),a("div",{staticClass:"toolbar-form"},[a("el-button",{staticClass:"d-buttom",attrs:{type:"info",icon:"el-icon-search"},on:{click:e.bindSearch}})],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingTable,expression:"loadingTable"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",splict:""},on:{"selection-change":e.changeCheckbox}},[a("el-table-column",{attrs:{fixed:"",type:"selection",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"avatar",width:"80",label:e.$t("config.avatar")},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.full_avatar,fit:"contain",lazy:""}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname","min-width":"120",label:e.$t("config.nickname")}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",width:"200",label:e.$t("config.email")}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile_txt",width:"200",label:e.$t("config.mobile")}}),e._v(" "),a("el-table-column",{attrs:{prop:"org_name","min-width":"180",label:e.$t("user.org_name")}})],1),e._v(" "),a("layoutPage",{attrs:{total:e.total,currentpage:e.search.page},on:{changPageSize:e.changPageSize,changCurrentPage:e.changCurrentPage,changJumpPage:e.changJumpPage}})],1)},staticRenderFns:[]};var l={components:{selectUser:a("VU/8")(i,s,!1,function(e){a("4iHI"),a("Q5gh")},"data-v-43fdc950",null).exports},data:function(){return{dialogTableVisible:!1,lang:this.$i18n.locale,selectCustomerList:[],customerList:[],selectLoading:!1,formData:{users_id:[],is_all:"2",contents:""},ueditor_config:{wordCount:!1,maximumWords:"1000000",autoHeightEnabled:!1,initialFrameHeight:550,initialFrameWidth:"100%",serverUrl:this.$store.state.ueditorAction,lang:"ch"==this.$i18n.locale?"zh-cn":"en",toolbars:[["source","undo","redo","bold","indent","italic","underline","strikethrough","subscript","fontborder","superscript","formatmatch","blockquote","pasteplain","selectall","preview","horizontal","removeformat","time","date","unlink","insertrow","insertcol","mergeright","mergedown","deleterow","deletecol","splittorows","splittocols","splittocells","deletecaption","inserttitle","mergecells","deletetable","cleardoc","insertparagraphbeforetable","fontfamily","fontsize","paragraph","insertimage","edittable","edittd","link","spechars","gmap","justifyleft","justifyright","justifycenter","justifyjustify","forecolor","backcolor","insertorderedlist","insertunorderedlist","fullscreen","directionalityltr","directionalityrtl","rowspacingtop","rowspacingbottom","pagebreak","imagenone","imageleft","imageright","imagecenter","lineheight","edittip ","customstyle","autotypeset","touppercase","tolowercase","inserttable"]]}}},computed:{rank:function(){return this.$store.state.rank}},created:function(){},methods:{selectUser:function(){this.dialogTableVisible=!0},changeSelectUserList:function(e){this.dialogTableVisible=!1,this.selectCustomerList=e,this.formData.users_id="";var t=[];for(var a in e)t.push(e[a].id);this.formData.users_id=t},delectCustomer:function(e,t){this.$delete(this.selectCustomerList,t),this.$delete(this.formData.users_id,t),console.log(this.selectCustomerList),console.log(this.formData.users_id)},submitForm:function(){var e=this;e.formData.users_id=e.formData.users_id.join(","),e.$request.emailsSend(e.formData).then(function(t){1==t.code&&(e.$message.success("Send success"),e.formData.contents="")})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-about-body",staticStyle:{"background-color":"white",padding:"15px","border-radius":"10px"}},[a("div",{staticClass:"admin-website-body-title"},[e._v("Send Mail")]),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.formData,"label-width":"100px","label-position":"top"}},[a("div",{staticStyle:{display:"flex"}},[a("div",[e._v("Addressee：")]),e._v(" "),a("div",{staticClass:"selectCustomer",on:{click:function(t){return e.selectUser()}}},[e._v("Select")])]),e._v(" "),a("div",{staticClass:"CustomerList"},e._l(e.selectCustomerList,function(t,i){return a("span",{key:i},[e._v(e._s(t.nickname)+" "),a("i",{staticClass:"el-icon-delete",staticStyle:{color:"red","padding-left":"10px",cursor:"pointer"},on:{click:function(a){return e.delectCustomer(t,i)}}})])}),0),e._v(" "),a("el-form-item",{attrs:{label:"All subscribers"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.formData.is_all,callback:function(t){e.$set(e.formData,"is_all",t)},expression:"formData.is_all"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.formData.is_all,callback:function(t){e.$set(e.formData,"is_all",t)},expression:"formData.is_all"}},[e._v("否")])],1),e._v(" "),a("div",{staticStyle:{color:"red","padding-bottom":"30px","font-size":"16px"}},[e._v("\n            Reminder：Please select one of the above recipients，the second is the main choice\n        ")]),e._v(" "),a("el-form-item",{staticClass:"ueditor-form-item",attrs:{prop:"contents"}},[a("vue-ueditor-wrap",{attrs:{config:e.ueditor_config},model:{value:e.formData.contents,callback:function(t){e.$set(e.formData,"contents",t)},expression:"formData.contents"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("Send")])],1)],1),e._v(" "),e.dialogTableVisible?a("el-dialog",{attrs:{visible:e.dialogTableVisible,title:"Select user",width:"800px"},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("selectUser",{on:{changeSelectUserList:e.changeSelectUserList}})],1):e._e()],1)},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(e){a("Bd13"),a("XUD3")},null,null);t.default=o.exports},XUD3:function(e,t){}});