webpackJsonp([63],{"7oQP":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"admin-about-body"},[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:n.formData,"label-width":"100px","label-position":"top"}},[e("el-form-item",{staticClass:"ueditor-form-item",attrs:{label:n.$t("website.content"),prop:"content"}},[e("vue-ueditor-wrap",{attrs:{config:n.ueditor_config},model:{value:n.formData.content,callback:function(t){n.$set(n.formData,"content",t)},expression:"formData.content"}})],1),n._v(" "),n.rank.edit?e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(t){return n.submitForm("ruleForm")}}},[n._v("Submit")])],1):n._e()],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]},o=r;var s=!1;var a=e("VU/8")({data:function(){return{formData:{id:"",types:"mail_repairs",content:"",content_zh:"11",tips:"mail repairs",tips_zh:"邮寄指南"},ueditor_config:{wordCount:!1,maximumWords:"1000000",autoHeightEnabled:!1,initialFrameHeight:400,initialFrameWidth:"100%",serverUrl:this.$store.state.ueditorAction,lang:"ch"==this.$i18n.locale?"zh-cn":"en",toolbars:[["source","undo","redo","bold","indent","italic","underline","strikethrough","subscript","fontborder","superscript","formatmatch","blockquote","pasteplain","selectall","preview","horizontal","removeformat","time","date","unlink","insertrow","insertcol","mergeright","mergedown","deleterow","deletecol","splittorows","splittocols","splittocells","deletecaption","inserttitle","mergecells","deletetable","cleardoc","insertparagraphbeforetable","fontfamily","fontsize","paragraph","insertimage","edittable","edittd","link","spechars","gmap","justifyleft","justifyright","justifycenter","justifyjustify","forecolor","backcolor","insertorderedlist","insertunorderedlist","fullscreen","directionalityltr","directionalityrtl","rowspacingtop","rowspacingbottom","pagebreak","imagenone","imageleft","imageright","imagecenter","lineheight","edittip ","customstyle","autotypeset","touppercase","tolowercase","inserttable"]]}}},computed:{rank:function(){return this.$store.state.rank}},created:function(){this.getSysConsfigList()},methods:{getSysConsfigList:function(){var n=this;n.$request.getSysConsfigList({types:"mail_repairs"}).then(function(t){if(1==t.code)for(var e in n.formData)n.formData[e]=t.data[e]})},submitForm:function(n){var t=this;t.$request.setSysConsfigSave(t.formData).then(function(n){1==n.code&&t.$notify({title:t.$t("config.tips"),message:n.msg,type:"success",duration:"2000"})})}}},o,!1,function(n){s||e("xBgu")},null,null);a.options.__file="src/view/website/mail/repairs.vue";t.default=a.exports},"Mz+5":function(n,t,e){(n.exports=e("FZ+f")(!0)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"repairs.vue",sourceRoot:""}])},xBgu:function(n,t,e){var i=e("Mz+5");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("ade9c258",i,!1,{})}});