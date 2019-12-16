(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{669:function(e,r,a){},807:function(e,r,a){"use strict";var t=a(669);a.n(t).a},871:function(e,r,a){"use strict";a.r(r);a(74);var t=a(183),l={name:"Mine",components:{AvatarUpload:a(705).a},data:function(){return{tableMng:t.a,rules:{name:[{required:!0,message:"请填写姓名",trigger:"blur"},{max:6,message:"姓名长度不能超过6个字",trigger:"blur"}],gender:[{required:!0,message:"请选择性别",trigger:"change"}],mobilePhone:[{required:!0,message:"请填写手机号",trigger:"blur"},{pattern:/^1[345789]\d{9}$/,message:"手机号码格式不正确",trigger:"blur"}],email:[{type:"email",message:"邮箱格式不正确",trigger:"blur"}]},submitLoading:!1}},computed:{userInfo:function(){return this.$store.getters.userInfo}},methods:{handleSubmit:function(){var e=this;this.submitLoading=!0,this.$refs.userInfo.validate(function(r){r&&e.$message.success("更新成功"),e.submitLoading=!1})}}},n=(a(807),a(51)),s=Object(n.a)(l,function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"mine"},[a("el-form",{ref:"userInfo",attrs:{model:e.userInfo,rules:e.rules,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[a("el-input",{model:{value:e.userInfo.name,callback:function(r){e.$set(e.userInfo,"name",r)},expression:"userInfo.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色："}},[a("el-select",{attrs:{multiple:"",disabled:"",placeholder:"请选择用户角色"},model:{value:e.userInfo.roles,callback:function(r){e.$set(e.userInfo,"roles",r)},expression:"userInfo.roles"}},e._l(e.tableMng.getTable("role"),function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"性别：",prop:"gender"}},[a("el-radio-group",{model:{value:e.userInfo.gender,callback:function(r){e.$set(e.userInfo,"gender",r)},expression:"userInfo.gender"}},[a("el-radio",{attrs:{label:"男"}}),e._v(" "),a("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"头像："}},[a("avatar-upload",{attrs:{action:"https://sm.ms/api/v2/upload",name:"smfile"},model:{value:e.userInfo.avatar,callback:function(r){e.$set(e.userInfo,"avatar",r)},expression:"userInfo.avatar"}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机:",placeholder:"请填写手机号",prop:"mobilePhone"}},[a("el-input",{attrs:{clearable:""},model:{value:e.userInfo.mobilePhone,callback:function(r){e.$set(e.userInfo,"mobilePhone",r)},expression:"userInfo.mobilePhone"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"邮箱:",placeholder:"请填写邮箱地址",prop:"email"}},[a("el-input",{attrs:{clearable:""},model:{value:e.userInfo.email,callback:function(r){e.$set(e.userInfo,"email",r)},expression:"userInfo.email"}})],1)],1)],1)],1),e._v(" "),a("el-button",{attrs:{type:"primary",round:"",loading:e.submitLoading},on:{click:e.handleSubmit}},[e._v("提交")])],1)},[],!1,null,"2cf22eec",null).exports;a.d(r,"default",function(){return s})}}]);