webpackJsonp([17],{IQ8Y:function(t,e){},kT1R:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={components:{layoutPage:s("Js1K").a},data:function(){return{search:{page:1},list:[],total:0,readyid:[]}},created:function(){this.getList()},methods:{refresh:function(){this.getList()},pageRouter:function(t){this.search.page=t,this.getList()},getList:function(){var t=this;t.$request.getMsgList(t.search).then(function(e){t.list=e.data.list,t.total=e.data.page?e.data.page:null})},ready:function(t){var e=this;e.$request.readyMsg({id:t.id}).then(function(s){1==s.code&&e.readyid.push(t.id)})},deleteRow:function(t){var e=this,s=this;s.$alert(s.$t("config.delMsg"),s.$t("config.tips"),{confirmButtonText:s.$t("config.confirm"),showCancelButton:!0,cancelButtonText:s.$t("config.cancel")}).then(function(){s.$request.delModels({id:t.id}).then(function(t){s.getUserList(),e.$notify({title:s.$t("config.tips"),message:t.msg,type:"success"})})})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-container"},[s("div",{staticClass:"max-title"},[t._v("System message")]),t._v(" "),s("div",{staticClass:"msg-container"},[s("el-button",{staticClass:"d-refresh-button",attrs:{icon:"el-icon-refresh"},on:{click:function(e){return t.refresh()}}}),t._v(" "),t._l(t.list,function(e,i){return s("div",{staticClass:"msg_item"},[s("div",{staticClass:"msg_left",on:{click:function(s){return t.ready(e)}}},[2==e.ready_status&&t.readyid.indexOf(e.id)<0?s("span",{staticClass:"new"},[t._v("【New】")]):t._e(),t._v(" "),s("span",{staticClass:"msg_info"},[t._v(t._s(e.content))])]),t._v(" "),s("div",{staticClass:"msg_right"},[s("div",{staticClass:"time"},[t._v(t._s(e.created_at))])])])}),t._v(" "),t.total&&t.total>1?s("layoutPage",{attrs:{page:t.search.page,num:"5",total:t.total},on:{pageRouter:t.pageRouter}}):t._e()],2)])},staticRenderFns:[]};var a=s("VU/8")(i,n,!1,function(t){s("IQ8Y"),s("ovuz")},"data-v-763202e6",null);e.default=a.exports},ovuz:function(t,e){}});