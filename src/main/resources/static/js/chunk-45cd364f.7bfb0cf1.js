(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45cd364f"],{"083a":function(e,o,t){"use strict";var r=t("0d51"),a=TypeError;e.exports=function(e,o){if(!delete e[o])throw a("Cannot delete property "+r(o)+" of "+r(e))}},1148:function(e,o,t){"use strict";var r=t("5926"),a=t("577e"),n=t("1d80"),s=RangeError;e.exports=function(e){var o=a(n(this)),t="",i=r(e);if(i<0||i==1/0)throw s("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(o+=o))1&i&&(t+=o);return t}},4357:function(e,o,t){},6706:function(e,o,t){},"8a02":function(e,o,t){"use strict";t("4357")},"9d7d":function(e,o,t){"use strict";t("6706")},a434:function(e,o,t){"use strict";var r=t("23e7"),a=t("7b0b"),n=t("23cb"),s=t("5926"),i=t("07fa"),l=t("3a34"),u=t("3511"),c=t("65f0"),m=t("8418"),p=t("083a"),d=t("1dde"),h=d("splice"),f=Math.max,b=Math.min;r({target:"Array",proto:!0,forced:!h},{splice:function(e,o){var t,r,d,h,g,v,y=a(this),N=i(y),w=n(e,N),C=arguments.length;for(0===C?t=r=0:1===C?(t=0,r=N-w):(t=C-2,r=b(f(s(o),0),N-w)),u(N+t-r),d=c(y,r),h=0;h<r;h++)g=w+h,g in y&&m(d,h,y[g]);if(d.length=r,t<r){for(h=w;h<N-r;h++)g=h+r,v=h+t,g in y?y[v]=y[g]:p(y,v);for(h=N;h>N-r+t;h--)p(y,h-1)}else if(t>r)for(h=N-r;h>w;h--)g=h+r-1,v=h+t-1,g in y?y[v]=y[g]:p(y,v);for(h=0;h<t;h++)y[h+w]=arguments[h+2];return l(y,N-r+t),d}})},b680:function(e,o,t){"use strict";var r=t("23e7"),a=t("e330"),n=t("5926"),s=t("408a"),i=t("1148"),l=t("d039"),u=RangeError,c=String,m=Math.floor,p=a(i),d=a("".slice),h=a(1..toFixed),f=function(e,o,t){return 0===o?t:o%2===1?f(e,o-1,t*e):f(e*e,o/2,t)},b=function(e){var o=0,t=e;while(t>=4096)o+=12,t/=4096;while(t>=2)o+=1,t/=2;return o},g=function(e,o,t){var r=-1,a=t;while(++r<6)a+=o*e[r],e[r]=a%1e7,a=m(a/1e7)},v=function(e,o){var t=6,r=0;while(--t>=0)r+=e[t],e[t]=m(r/o),r=r%o*1e7},y=function(e){var o=6,t="";while(--o>=0)if(""!==t||0===o||0!==e[o]){var r=c(e[o]);t=""===t?r:t+p("0",7-r.length)+r}return t},N=l((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!l((function(){h({})}));r({target:"Number",proto:!0,forced:N},{toFixed:function(e){var o,t,r,a,i=s(this),l=n(e),m=[0,0,0,0,0,0],h="",N="0";if(l<0||l>20)throw u("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return c(i);if(i<0&&(h="-",i=-i),i>1e-21)if(o=b(i*f(2,69,1))-69,t=o<0?i*f(2,-o,1):i/f(2,o,1),t*=4503599627370496,o=52-o,o>0){g(m,0,t),r=l;while(r>=7)g(m,1e7,0),r-=7;g(m,f(10,r,1),0),r=o-1;while(r>=23)v(m,1<<23),r-=23;v(m,1<<r),g(m,1,1),v(m,2),N=y(m)}else g(m,0,t),g(m,1<<-o,0),N=y(m)+p("0",l);return l>0?(a=N.length,N=h+(a<=l?"0."+p("0",l-a)+N:d(N,0,a-l)+"."+d(N,a-l))):N=h+N,N}})},c3c9:function(e,o,t){"use strict";t.r(o);t("ac1f"),t("841c"),t("b680");var r=function(){var e=this,o=e._self._c;return o("div",{staticStyle:{background:"#fff",padding:"10px"}},[o("reloadAndsearch",{ref:"search",attrs:{config:e.searchConfig},on:{search:e.search}}),o("div",{staticClass:"list-model"},[o("TableList",{attrs:{pageMethod:e.getTableData,searchMethod:e.getTableData,"table-data":e.tableData,tableColumn:e.tableColumn,query:e.query,total:e.total,loading:e.loadings.table},on:{"update:query":function(o){e.query=o}},scopedSlots:e._u([{key:"column-inv",fn:function(t){return["00000000000000000"==t.row.positionCode?o("span",[e._v("-")]):o("span",[e._v(e._s(t.row.inventoryCode)+e._s(t.row.inventoryName))])]}},{key:"column-pop",fn:function(t){return["00000000000000000"==t.row.positionCode?o("span",[e._v("-")]):o("span",[e._v(e._s(t.row.positionCode))])]}},{key:"column-time",fn:function(t){return[o("span",[e._v(e._s(t.row.operateTime))])]}},{key:"column-ok",fn:function(t){return[t.row.rejectsNum?o("span",[e._v(e._s(100*((t.row.accountNum-t.row.rejectsNum)/t.row.accountNum).toFixed(2))+"%")]):e._e()]}},{key:"column-todo",fn:function(t){return[o("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(o){return e.editRow(t.row)}}},[e._v("编辑")]),o("el-button",{staticClass:"prohibitclick",attrs:{type:"text",size:"small",icon:"el-icon-document"},on:{click:function(o){return e.deleteRow(t.row)}}},[e._v("删除")])]}}])})],1),e.drawer?o("overviewEdit",{attrs:{drawer:e.drawer,rowData:e.rowData},on:{close:function(o){e.drawer=!1},success:function(o){return e.success()}}}):e._e()],1)},a=[],n=t("5530"),s=(t("d3b7"),t("159b"),t("14d9"),t("64dc")),i=t("c367"),l=t("ffd4"),u=(t("a4d3"),t("e01a"),function(){var e=this,o=e._self._c;return o("el-dialog",{attrs:{size:"30%",title:e.ifCreate?"新增":"编辑",visible:e.drawer,direction:e.direction,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,wrapperClosable:!1,"append-to-body":!0,width:"1200px"},on:{"update:visible":function(o){e.drawer=o}}},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"门店",prop:"shopCode"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"所属门店",clearable:""},model:{value:e.ruleForm.shopCode,callback:function(o){e.$set(e.ruleForm,"shopCode",o)},expression:"ruleForm.shopCode"}},e._l(e.shopOptions,(function(t){return o("el-option",{key:t.shopKey,attrs:{label:t.shopName,value:t.shopCode},nativeOn:{click:function(o){return e.getInventoryList(t)}}})})),1)],1)],1),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"商品",prop:"goodsCode"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"商品",clearable:""},model:{value:e.ruleForm.goodsCode,callback:function(o){e.$set(e.ruleForm,"goodsCode",o)},expression:"ruleForm.goodsCode"}},e._l(e.goodsOptions,(function(e){return o("el-option",{key:e.goodsCode,attrs:{label:e.goodsName,value:e.goodsCode}})})),1)],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"仓库",prop:"inventoryCode"}},[o("el-select",{ref:"inventorySelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"仓库",clearable:""},model:{value:e.ruleForm.inventoryCode,callback:function(o){e.$set(e.ruleForm,"inventoryCode",o)},expression:"ruleForm.inventoryCode"}},e._l(e.inventoryOptions,(function(t){return o("el-option",{key:t.inventoryKey,attrs:{label:t.inventoryName,value:t.inventoryCode,disabled:1!=t.status},nativeOn:{click:function(o){return e.setPosition.apply(null,arguments)}}})})),1)],1)],1),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"库位",prop:"positionCode"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"库位",clearable:""},model:{value:e.ruleForm.positionCode,callback:function(o){e.$set(e.ruleForm,"positionCode",o)},expression:"ruleForm.positionCode"}},e._l(e.positionOptions,(function(e){return o("el-option",{key:e.positionKey,attrs:{label:e.positionCode,value:e.positionCode,clearable:"",placeholder:"库位"}})})),1)],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"库存上限",prop:"maxNum"}},[o("el-input",{attrs:{clearable:"",placeholder:"库存上限",type:"Number",min:0},on:{blur:function(o){return e.onInputNumChange("maxNum")}},model:{value:e.ruleForm.maxNum,callback:function(o){e.$set(e.ruleForm,"maxNum",o)},expression:"ruleForm.maxNum"}})],1)],1),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"库存下限",prop:"minNum"}},[o("el-input",{attrs:{clearable:"",placeholder:"库存下限",type:"Number",min:0},on:{blur:function(o){return e.onInputNumChange("minNum")}},model:{value:e.ruleForm.minNum,callback:function(o){e.$set(e.ruleForm,"minNum",o)},expression:"ruleForm.minNum"}})],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"现存量",prop:"accountNum"}},[o("el-input",{attrs:{clearable:"",placeholder:"现存量",type:"Number",min:0},model:{value:e.ruleForm.accountNum,callback:function(o){e.$set(e.ruleForm,"accountNum",o)},expression:"ruleForm.accountNum"}})],1)],1),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"占用数",prop:"occupyNum"}},[o("el-input",{attrs:{clearable:"",placeholder:"占用数",type:"Number",min:0},model:{value:e.ruleForm.occupyNum,callback:function(o){e.$set(e.ruleForm,"occupyNum",o)},expression:"ruleForm.occupyNum"}})],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"在途数",prop:"onwayNum"}},[o("el-input",{attrs:{clearable:"",placeholder:"在途数",type:"Number",min:0},model:{value:e.ruleForm.onwayNum,callback:function(o){e.$set(e.ruleForm,"onwayNum",o)},expression:"ruleForm.onwayNum"}})],1)],1),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"残品数",prop:"rejectsNum"}},[o("el-input",{attrs:{clearable:"",placeholder:"残品数",type:"Number",min:0},model:{value:e.ruleForm.rejectsNum,callback:function(o){e.$set(e.ruleForm,"rejectsNum",o)},expression:"ruleForm.rejectsNum"}})],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"备注",prop:"description"}},[o("el-input",{attrs:{clearable:"",placeholder:"备注",type:"textarea"},model:{value:e.ruleForm.description,callback:function(o){e.$set(e.ruleForm,"description",o)},expression:"ruleForm.description"}})],1)],1)],1)],1),o("div",{staticClass:"dialog_footer"},[0==e.ifCreate?o("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.save("ruleForm")}}},[e._v("保存")]):o("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.create("ruleForm")}}},[e._v("立即创建")]),o("el-button",{on:{click:function(o){return e.close()}}},[e._v("关闭")])],1)],1)}),c=[],m=t("c7eb"),p=t("1da1"),d=(t("4ec9"),t("3ca3"),t("ddb0"),t("4de4"),t("a434"),t("7e1e")),h=t("c1df"),f=t.n(h),b={name:"guestEdit",data:function(){return{direction:"btt",ifCreate:!1,ruleForm:{shopCode:"",goodsCode:"",positionCode:"",maxNum:"",minNum:"",accountNum:"",occupyNum:"",availableNum:"",countNum:"",rejectsNum:"",description:"",inventoryCode:"",shopkeeperWarehouseKey:"",onwayNum:"",operateTime:""},shopOptions:[],goodsOptions:[],allGoods:[],inventoryOptions:[],positionOptions:[],rules:{shopCode:[{required:!0,message:"请选择门店",trigger:"blur"}],goodsCode:[{required:!0,message:"请选择商品",trigger:"blur"}],maxNum:[{required:!0,message:"请设置库存上限",trigger:"blur"}],minNum:[{required:!0,message:"请设置库存下限",trigger:"blur"}],accountNum:[{required:!0,message:"请设置现存量",trigger:"blur"}],inventoryCode:[{required:!0,message:"请选择仓库",trigger:"blur"}]}}},props:{drawer:{default:!0},rowData:{}},watch:{},created:function(){this.getShopList(),this.getgoodsList(),this.rowData.shopkeeperWarehouseKey?(this.ruleForm.shopCode=this.rowData.shopCode,this.ruleForm.goodsCode=this.rowData.goodsCode,this.ruleForm.positionCode=this.rowData.positionCode,this.ruleForm.maxNum=this.rowData.maxNum,this.ruleForm.minNum=this.rowData.minNum,this.ruleForm.accountNum=this.rowData.accountNum,this.ruleForm.occupyNum=this.rowData.occupyNum||0,this.ruleForm.availableNum=this.rowData.availableNum||0,this.ruleForm.countNum=this.rowData.countNum,this.ruleForm.rejectsNum=this.rowData.rejectsNum,this.ruleForm.description=this.rowData.description,this.ruleForm.inventoryCode=this.rowData.inventoryCode,this.ruleForm.shopkeeperWarehouseKey=this.rowData.shopkeeperWarehouseKey,this.ruleForm.onwayNum=this.rowData.onwayNum||0):this.ifCreate=!0,this.rowData.shopCode&&this.getInventoryList(this.rowData),this.rowData.inventoryCode&&this.getpositionList()},mounted:function(){},methods:{getgoodsList:function(){var e=this;Object(d["V"])().then((function(o){200==o.data.code?e.allGoods=o.data.data:e.$message.error("获取失败!")}))},onInputNumChange:function(e){this.ruleForm.maxNum<this.ruleForm.minNum&&("maxNum"?this.ruleForm.maxNum="":this.ruleForm.minNum="",this.$message.warning("库存上限应不得小于库存下限"))},unique:function(e){var o=new Map;return e.filter((function(e){return!o.has(e.shopKey)&&o.set(e.shopKey,1)}))},getShopList:function(){var e=this;Object(s["d"])().then((function(o){200==o.data.code?e.shopOptions=e.unique(o.data.data):e.$message.error("获取失败!")}))},getgoodsfinal:function(e){var o=this;Object(s["o"])({shopCode:e.shopCode,shopName:e.shopName}).then((function(e){200==e.data.code?e.data.data?(o.goodsOptions=o.allGoods,o.goodsOptions.forEach((function(t){e.data.data.forEach((function(e){if(t.goodsCode==e.goodsCode){var r=o.goodsOptions.indexOf(t);o.goodsOptions.splice(r,1)}}))}))):o.goodsOptions=o.allGoods:o.$message.error("获取失败!")}))},getInventoryList:function(e){var o=this;return Object(p["a"])(Object(m["a"])().mark((function t(){return Object(m["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:o.getgoodsfinal(e),Object(s["m"])({shopCode:e.shopCode}).then((function(e){200==e.data.code?(o.inventoryOptions=e.data.data,o.getpositionList()):o.$message.error("获取失败!")}));case 2:case"end":return t.stop()}}),t)})))()},getpositionList:function(){var e=this;this.inventoryOptions.forEach((function(o){o.inventoryCode==e.ruleForm.inventoryCode&&Object(d["gb"])({inventoryKey:o.inventoryKey}).then((function(o){200==o.data.code?e.positionOptions=o.data.data:e.$message.error("获取失败!")}))}))},setPosition:function(){var e=this,o=this.inventoryOptions.filter((function(o){return o.inventoryCode==e.ruleForm.inventoryCode}));this.getpositionList(o[0].inventoryKey)},close:function(){this.$parent.drawer=!1},save:function(e){var o=this;this.ruleForm.availableNum=parseInt(this.ruleForm.accountNum)+parseInt(this.ruleForm.onwayNum)-parseInt(this.ruleForm.occupyNum),this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;o.ruleForm.operateTime=f()().format("YYYY-MM-DD HH:mm:ss"),Object(s["t"])(o.ruleForm).then((function(e){200==e.data.code?(o.$message.success("编辑成功!"),o.$parent.success(),o.$forceUpdate()):o.$message.error("编辑失败!")}))}))},create:function(e){var o=this;this.ruleForm.availableNum=parseInt(this.ruleForm.accountNum)+parseInt(this.ruleForm.onwayNum)-parseInt(this.ruleForm.occupyNum),this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;o.ruleForm.operateTime=f()().format("YYYY-MM-DD HH:mm:ss");var t={shopCode:o.ruleForm.shopCode,goodsCode:o.ruleForm.goodsCode,positionCode:o.ruleForm.positionCode,maxNum:o.ruleForm.maxNum,minNum:o.ruleForm.minNum,accountNum:o.ruleForm.accountNum,occupyNum:o.ruleForm.occupyNum||0,availableNum:o.ruleForm.availableNum||0,rejectsNum:o.ruleForm.rejectsNum,countNum:o.ruleForm.countNum,description:o.ruleForm.description,onwayNum:o.ruleForm.onwayNum||0,operateTime:f()().format("YYYY-MM-DD HH:mm:ss")};Object(s["n"])(t).then((function(e){200==e.data.code?(o.$message.success("新增成功!"),o.$parent.success(),o.$forceUpdate()):o.$message.error("新增失败!")}))}))}}},g=b,v=(t("9d7d"),t("2877")),y=Object(v["a"])(g,u,c,!1,null,null,null),N=y.exports,w={name:"slist",data:function(){return{pageSize:10,pageNo:1,total:null,drawer:!1,rowData:{},tableData:[],multipleSelection:[],loadings:{table:!0},query:{pageNo:1,pageSize:10},shopOptions:[],goodsOptions:[]}},computed:{tableColumn:function(){return[{prop:"shopCode",label:"门店编码"},{prop:"shopName",label:"门店名称"},{prop:"goodsCode",label:"商品编码"},{prop:"goodsName",label:"商品名称"},{prop:"modelCode",label:"型号"},{prop:"priceLatestPurchase",label:"采购价"},{slots:{name:"column-inv"},label:"仓库"},{slots:{name:"column-pop"},label:"货位"},{prop:"maxNum",label:"库存上限"},{prop:"minNum",label:"库存下限"},{prop:"accountNum",label:"现存量"},{prop:"onwayNum",label:"在途数"},{prop:"occupyNum",label:"占用数"},{prop:"availableNum",label:"可用数"},{prop:"rejectsNum",label:"残品数"},{slots:{name:"column-ok"},label:"合格率"},{slots:{name:"column-time"},label:"最后操作时间"},{prop:"description",label:"备注"},{slots:{name:"column-todo"},label:"操作",fixed:"right",width:"150px"}]},searchConfig:function(){return[{label:"请选择",placeholder:"请选择门店",field:"shopCode",value:"",type:"select",options:this.shopOptions},{label:"请选择",placeholder:"请选择商品",field:"goodsCode",value:"",type:"select",options:this.goodsOptions}]}},props:{},components:{TableList:i["a"],overviewEdit:N,reloadAndsearch:l["a"]},created:function(){this.getshoplist(),this.getgoodslist()},methods:{getshoplist:function(){var e=this;Object(d["nb"])().then((function(o){200==o.data.code?o.data.data.forEach((function(o){e.shopOptions.push({label:o.shopName,value:o.shopCode})})):e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(d["V"])().then((function(o){200==o.data.code?o.data.data.forEach((function(o){e.goodsOptions.push({label:o.goodsName,value:o.goodsCode})})):e.$message.error("获取失败!")}))},getTableData:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;t&&(this.query.pageSize=t),this.loadings.table=!0;var r={page:this.query.pageNo||o,size:this.query.pageSize,shopCode:"",goodsCode:""};Object(s["s"])(r).then((function(o){200===o.data.code?(e.total=o.data.data.total,e.tableData=o.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},search:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;this.query.pageNo=o,t&&(this.query.pageSize=t);var r=this.$refs.search.search;Object(s["s"])(Object(n["a"])(Object(n["a"])({},r),{},{page:this.query.pageNo,size:this.query.pageSize})).then((function(o){200===o.data.code?(e.total=o.data.data.total,e.tableData=o.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},editRow:function(e){this.rowData=e,this.drawer=!0},deleteRow:function(e){var o=this;console.log("deleteRow",e),Object(s["p"])({shopkeeperWarehouseKey:e.shopkeeperWarehouseKey}).then((function(e){200==e.data.code?(o.$message.success("删除成功!"),o.getTableData(),o.$forceUpdate()):o.$message.error("删除失败!")}))},success:function(){this.drawer=!1,this.rowData={},this.getTableData()},reload:function(){this.getTableData()},add:function(){this.rowData={},this.drawer=!0},handleSelectionDelete:function(e){this.multipleSelection=e},handleDeleteList:function(){var e=this;if(this.multipleSelection.length>0){var o=[];this.multipleSelection.forEach((function(e){o.push({shopkeeperWarehouseKey:e.shopkeeperWarehouseKey})})),console.log(o),this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["q"])(o).then((function(){e.getTableData(),e.$message({type:"success",message:"删除成功!"})})).catch((function(e){console.log(e)}))})).catch((function(){e.$message({type:"info",message:"已取消删除"}),e.multipleSelection=[]}))}else this.$message({type:"error",message:"至少选择一项"})}}},C=w,F=(t("8a02"),Object(v["a"])(C,r,a,!1,null,"35e25099",null));o["default"]=F.exports}}]);
//# sourceMappingURL=chunk-45cd364f.7bfb0cf1.js.map