webpackJsonp([62],{ER2Q:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin-about-body"},[i("div",{staticClass:"admin-website-body-title"},[t._v(t._s("ch"==t.lang?t.formData.tips_zh:t.formData.tips))]),t._v(" "),i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.formData,"label-width":"100px","label-position":"top"}},[i("el-form-item",{staticClass:"ueditor-form-item",attrs:{label:t.$t("website.content"),prop:"content"}},[i("vue-ueditor-wrap",{attrs:{config:t.ueditor_config},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),t._v(" "),t.rank.edit?i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("Submit")])],1):t._e()],1)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]},r=o;var s=!1;var a=i("VU/8")({data:function(){return{lang:this.$i18n.locale,formData:{id:"",types:"instructions",content:"",content_zh:"11",tips:"Instructions",tips_zh:"维修详情说明"},ueditor_config:{wordCount:!1,maximumWords:"1000000",autoHeightEnabled:!1,initialFrameHeight:400,initialFrameWidth:"100%",serverUrl:this.$store.state.ueditorAction,lang:"ch"==this.$i18n.locale?"zh-cn":"en",toolbars:[["source","undo","redo","bold","indent","italic","underline","strikethrough","subscript","fontborder","superscript","formatmatch","blockquote","pasteplain","selectall","preview","horizontal","removeformat","time","date","unlink","insertrow","insertcol","mergeright","mergedown","deleterow","deletecol","splittorows","splittocols","splittocells","deletecaption","inserttitle","mergecells","deletetable","cleardoc","insertparagraphbeforetable","fontfamily","fontsize","paragraph","insertimage","edittable","edittd","link","spechars","gmap","justifyleft","justifyright","justifycenter","justifyjustify","forecolor","backcolor","insertorderedlist","insertunorderedlist","fullscreen","directionalityltr","directionalityrtl","rowspacingtop","rowspacingbottom","pagebreak","imagenone","imageleft","imageright","imagecenter","lineheight","edittip ","customstyle","autotypeset","touppercase","tolowercase","inserttable"]]}}},computed:{rank:function(){return this.$store.state.rank}},created:function(){this.getSysConsfigList()},methods:{getSysConsfigList:function(){var t=this;t.$request.getSysConsfigList({types:"instructions"}).then(function(e){if(1==e.code)for(var i in t.formData)t.formData[i]=e.data[i]})},submitForm:function(t){var e=this;e.$request.setSysConsfigSave(e.formData).then(function(t){1==t.code&&e.$notify({title:e.$t("config.tips"),message:t.msg,type:"success",duration:"2000"})})}}},r,!1,function(t){s||i("LD1X")},null,null);a.options.__file="src/view/website/instructions.vue";e.default=a.exports},LD1X:function(t,e,i){var n=i("jLJp");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("397ff58d",n,!1,{})},jLJp:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,"\n.admin-website-body-title{\n  font-size: 30px;\n  text-align: center;\n}\n","",{version:3,sources:["/Users/chitsanthu/Desktop/lenwell/wetransfer_api-zip_2022-08-29_1643/www/mg_lenwell/src/view/website/instructions.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,mBAAmB;CACpB",file:"instructions.vue",sourcesContent:["\n.admin-website-body-title{\n  font-size: 30px;\n  text-align: center;\n}\n"],sourceRoot:""}])}});