(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1129:function(e,t,l){"use strict";l.r(t);l(11);var n=l(10),o=(l(37),l(19),l(61),l(62),l(86)),r=l(402),m=l(403),c=l(404),d=l(689),v={name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:{CustomStylesValidation:r.a,BrowserDefaultsValidation:m.a,ServerSideValidation:c.a},data:function(){return{model:{u1:{name:"Edunest",email:"info.edunestorg@gmail.com",flevel:0,id:"3hlsg1ndkw4md1n",avatar:"https://edunest.org/api/files/users/3hlsg1ndkw4md1n/edunest_4KhlFGYVLB.png"},u2:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u3:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u4:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u5:{name:"No Linked User",email:"",level:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u6:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u7:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u8:{name:"No Linked User",email:"",level:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u9:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u10:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u11:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u12:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"},u13:{name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"}}}},methods:{getData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var l,n,r,m,data,c,v,_,f,h,C,k,y,x,w,N,S,i,L,$,U,O,z,F,j,J,A,V,Z;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=(l=e).$route.params.id,r=l.$route.params.enc,"0"!=n&&(m=d.enc.Hex.parse(r).toString(d.enc.Base64),data=d.AES.decrypt(m,"shella@1234BriHakku").toString(d.enc.Utf8),l.model.u1=JSON.parse(data)),c=n,v="0",_="0",v=parseInt(c)+1,_=parseInt(c)+2,f=0;c.toString().length<15;)c="0"+c;for(;v.toString().length<15;)v="0"+v;for(;_.toString().length<15;)_="0"+_;return t.next=15,o.a.collection("floor").getOne(c);case 15:return h=t.sent,C=null,t.prev=17,t.next=20,o.a.collection("floor").getOne(v);case 20:C=t.sent,t.next=26;break;case 23:t.prev=23,t.t0=t.catch(17),C=null;case 26:return k=null,t.prev=27,t.next=30,o.a.collection("floor").getOne(_);case 30:k=t.sent,t.next=36;break;case 33:t.prev=33,t.t1=t.catch(27),k=null;case 36:for(y=JSON.parse(h.ids),x=C?JSON.parse(C.ids):[],w=k?JSON.parse(k.ids):[],N=[],S=[],i=0;i<y.length;i++)y[i]==l.model.u1.id&&(f=i);L=0;case 43:if(!(L<3)){t.next=59;break}return $=!0,U=null,t.prev=46,t.next=49,o.a.collection("users").getOne(x[3*f+L]);case 49:U=t.sent,t.next=55;break;case 52:t.prev=52,t.t2=t.catch(46),$=!1;case 55:1==$?N.push({name:U.name,email:U.vmail,flevel:U.floor,id:U.id,avatar:""!=U.avatar?"https://edunest.org/api/files/users/".concat(U.id,"/").concat(U.avatar):"https://edunest.org/api/files/ajgbw0k7alszidc/3hlsg1ndkw4md1n/edunest_ye2idq61YT.png?token="}):N.push({name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"});case 56:L++,t.next=43;break;case 59:if(N.length>0)for(O=["name","email","flevel","id","avatar"],z=function(e){var t="u".concat(e+2);O.forEach((function(n){l.model[t][n]=N[e][n]}))},F=0;F<N.length;F++)z(F);j=0;case 61:if(!(j<9)){t.next=77;break}return J=!0,U=null,t.prev=64,t.next=67,o.a.collection("users").getOne(w[9*f+j]);case 67:U=t.sent,t.next=73;break;case 70:t.prev=70,t.t3=t.catch(64),J=!1;case 73:1==J?S.push({name:U.name,email:U.vmail,flevel:U.floor,id:U.id,avatar:""!=U.avatar?"https://edunest.org/api/files/users/".concat(U.id,"/").concat(U.avatar):"https://edunest.org/api/files/ajgbw0k7alszidc/3hlsg1ndkw4md1n/edunest_ye2idq61YT.png?token="}):S.push({name:"No Linked User",email:"",flevel:null,id:"",avatar:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"});case 74:j++,t.next=61;break;case 77:if(S.length>0)for(A=["name","email","flevel","id","avatar"],V=function(e){var t="u".concat(e+5);A.forEach((function(n){l.model[t][n]=S[e][n]}))},Z=0;Z<S.length;Z++)V(Z);case 78:case"end":return t.stop()}}),t,null,[[17,23],[27,33],[46,52],[64,70]])})))()},gos:function(e){var t=this;t.model.u1=e;var l=d.AES.encrypt(JSON.stringify(e),"shella@1234BriHakku").toString(),n=d.enc.Base64.parse(l).toString(d.enc.Hex);t.$router.push("/Tree/View/".concat(t.model.u1.flevel,"/").concat(n))}},mounted:function(){this.getData()}},_=(l(997),l(998),l(7)),component=Object(_.a)(v,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-2"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h4 text-white d-inline-block mb-0"},[e._v("Tree View")])])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"hv-container"},[t("div",{staticClass:"hv-wrapper"},[t("div",{staticClass:"hv-item"},[t("div",{staticClass:"hv-item-parent"},[t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u1.avatar}}),t("br"),e._v(" "),t("span",[e._v("\n                "+e._s(e.model.u1.name)),t("br"),e._v("\n                ("+e._s(e.model.u1.email)+")\n              ")])])]),e._v(" "),t("div",{staticClass:"hv-item-children"},[t("div",{staticClass:"hv-item-child"},[t("div",{staticClass:"hv-item"},[t("div",{staticClass:"hv-item-parent"},[""!=e.model.u2.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u2)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u2.avatar}}),t("br"),e._v("\n                    "+e._s(e.model.u2.name)+" "),t("br"),e._v("\n                    "+e._s(""!=e.model.u2.email?"(".concat(e.model.u2.email,")"):"")+"\n                  ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u2.avatar}}),t("br"),e._v("\n                    "+e._s(e.model.u2.name)+" "),t("br"),e._v("\n                    "+e._s(""!=e.model.u2.email?"(".concat(e.model.u2.email,")"):"")+"\n                  ")])]),e._v(" "),t("div",{staticClass:"hv-item-children"},[t("div",{staticClass:"hv-item-child"},[""!=e.model.u5.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u5)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u5.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u5.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u5.email?"(".concat(e.model.u5.email,")"):"")+"\n                    ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u5.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u5.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u5.email?"(".concat(e.model.u5.email,")"):"")+"\n                    ")])]),e._v(" "),t("div",{staticClass:"hv-item-child"},[""!=e.model.u6.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u6)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u6.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u6.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u6.email?"(".concat(e.model.u6.email,")"):"")+"\n                    ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u6.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u6.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u6.email?"(".concat(e.model.u6.email,")"):"")+"\n                    ")])]),e._v(" "),t("div",{staticClass:"hv-item-child"},[""!=e.model.u7.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u7)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u7.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u7.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u7.email?"(".concat(e.model.u7.email,")"):"")+"\n                    ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u7.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u7.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u7.email?"(".concat(e.model.u7.email,")"):"")+"\n                    ")])])])])]),e._v(" "),t("div",{staticClass:"hv-item-child"},[t("div",{staticClass:"hv-item"},[t("div",{staticClass:"hv-item-parent"},[""!=e.model.u3.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u3)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u3.avatar}}),t("br"),e._v("\n                    "+e._s(e.model.u3.name)+" "),t("br"),e._v("\n                    "+e._s(""!=e.model.u3.email?"(".concat(e.model.u3.email,")"):"")+"\n                  ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u3.avatar}}),t("br"),e._v("\n                    "+e._s(e.model.u3.name)+" "),t("br"),e._v("\n                    "+e._s(""!=e.model.u3.email?"(".concat(e.model.u3.email,")"):"")+"\n                  ")])]),e._v(" "),t("div",{staticClass:"hv-item-children"},[t("div",{staticClass:"hv-item-child"},[""!=e.model.u8.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u8)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u8.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u8.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u8.email?"(".concat(e.model.u8.email,")"):"")+"\n                    ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u8.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u8.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u8.email?"(".concat(e.model.u8.email,")"):"")+"\n                    ")])]),e._v(" "),t("div",{staticClass:"hv-item-child"},[""!=e.model.u9.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u9)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u9.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u9.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u9.email?"(".concat(e.model.u9.email,")"):"")+"\n                    ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u9.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u9.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u9.email?"(".concat(e.model.u9.email,")"):"")+"\n                    ")])]),e._v(" "),t("div",{staticClass:"hv-item-child"},[""!=e.model.u10.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u10)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u10.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u10.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u10.email?"(".concat(e.model.u10.email,")"):"")+"\n                    ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u10.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u10.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u10.email?"(".concat(e.model.u10.email,")"):"")+"\n                    ")])])])])]),e._v(" "),t("div",{staticClass:"hv-item-child"},[t("div",{staticClass:"hv-item"},[t("div",{staticClass:"hv-item-parent"},[""!=e.model.u4.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u4)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u4.avatar}}),t("br"),e._v("\n                    "+e._s(e.model.u4.name)+" "),t("br"),e._v("\n                    "+e._s(""!=e.model.u4.email?"(".concat(e.model.u4.email,")"):"")+"\n                  ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u4.avatar}}),t("br"),e._v("\n                    "+e._s(e.model.u4.name)+" "),t("br"),e._v("\n                    "+e._s(""!=e.model.u4.email?"(".concat(e.model.u4.email,")"):"")+"\n                  ")])]),e._v(" "),t("div",{staticClass:"hv-item-children"},[t("div",{staticClass:"hv-item-child"},[""!=e.model.u11.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u11)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u11.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u11.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u11.email?"(".concat(e.model.u11.email,")"):"")+"\n                    ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u11.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u11.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u11.email?"(".concat(e.model.u11.email,")"):"")+"\n                    ")])]),e._v(" "),t("div",{staticClass:"hv-item-child"},[""!=e.model.u12.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u12)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u12.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u12.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u12.email?"(".concat(e.model.u12.email,")"):"")+"\n                    ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u12.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u12.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u12.email?"(".concat(e.model.u12.email,")"):"")+"\n                    ")])]),e._v(" "),t("div",{staticClass:"hv-item-child"},[""!=e.model.u13.email?t("p",{staticClass:"simple-card",on:{click:function(t){return e.gos(e.model.u13)}}},[t("img",{staticClass:"imks",attrs:{src:e.model.u13.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u13.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u13.email?"(".concat(e.model.u13.email,")"):"")+"\n                    ")]):t("p",{staticClass:"simple-card"},[t("img",{staticClass:"imks",attrs:{src:e.model.u13.avatar}}),t("br"),e._v("\n                      "+e._s(e.model.u13.name)+" "),t("br"),e._v("\n                      "+e._s(""!=e.model.u13.email?"(".concat(e.model.u13.email,")"):"")+"\n                    ")])])])])])])])])])])],1)}),[],!1,null,"5a254213",null);t.default=component.exports},402:function(e,t,l){"use strict";var n=l(10),o=(l(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),r=l(7),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(l){var n=l.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),n(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},403:function(e,t,l){"use strict";var n=l(10),o=(l(37),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),r=l(7),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},404:function(e,t,l){"use strict";var n=l(10),o=(l(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),r=l(7),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(l){var n=l.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},690:function(e,t){},770:function(e,t,l){},771:function(e,t,l){},997:function(e,t,l){"use strict";l(770)},998:function(e,t,l){"use strict";l(771)}}]);