(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10fb80be"],{"15d4":function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return l})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return c})),r.d(t,"j",(function(){return p})),r.d(t,"g",(function(){return d})),r.d(t,"k",(function(){return m})),r.d(t,"h",(function(){return h})),r.d(t,"i",(function(){return f}));var o=r("b775"),a=(r("4328"),"/api");function s(e){return Object(o["a"])({url:a+"/returnCheck/list-page",method:"get",params:e})}function i(e){return Object(o["a"])({url:a+"/returnCheck/add",method:"POST",data:e})}function l(e){return Object(o["a"])({url:a+"/returnCheck/update",method:"POST",data:e})}function n(e){return Object(o["a"])({url:a+"/returnCheck/delete",method:"POST",data:e})}function u(e){return Object(o["a"])({url:a+"/returnCheck/delete-list",method:"POST",data:e})}function c(e){return Object(o["a"])({url:a+"/returnCheck/getById",method:"get",params:e})}function p(e){return Object(o["a"])({url:a+"/transferCheck/list-page",method:"get",params:e})}function d(e){return Object(o["a"])({url:a+"/transferCheck/add",method:"POST",data:e})}function m(e){return Object(o["a"])({url:a+"/transferCheck/update",method:"POST",data:e})}function h(e){return Object(o["a"])({url:a+"/transferCheck/delete",method:"POST",data:e})}function f(e){return Object(o["a"])({url:a+"/transferCheck/delete-list",method:"POST",data:e})}},"26b7":function(e,t,r){},"336c":function(e,t,r){"use strict";r("26b7")},"4ec3":function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"e",(function(){return n})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return p})),r.d(t,"f",(function(){return d}));r("751a");var o=r("4328"),a=r.n(o),s=r("b775"),i="/api";function l(e){return Object(s["a"])({url:i+"/user/list",method:"get",params:a.a.parse(e)})}function n(e){return Object(s["a"])({url:i+"/user/selectUserPage",method:"get",params:a.a.parse(e)})}function u(e){return Object(s["a"])({url:i+"/user/createUser",method:"post",data:a.a.parse(e)})}function c(e){return Object(s["a"])({url:i+"/user/deleteUserById",method:"get",params:a.a.parse(e)})}function p(e){return Object(s["a"])({url:i+"/user/deleteUserByIdList",method:"get",params:a.a.parse(e)})}function d(e){return Object(s["a"])({url:i+"/user/updateUserById",method:"post",data:a.a.parse(e)})}},"6bbc":function(e,t,r){"use strict";r("db7a")},7258:function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c");var o=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{background:"#fff",padding:"10px"}},[t("reloadAndsearch",{ref:"search",attrs:{config:e.searchConfig,hidden:e.hidden,hidden1:e.hidden},on:{search:e.search}}),t("div",{staticClass:"list-model"},[t("TableList",{attrs:{pageMethod:e.getTableData,searchMethod:e.getTableData,"table-data":e.tableData,multiCheck:e.multiCheck,tableColumn:e.tableColumn,query:e.query,total:e.total,loading:e.loadings.table},on:{"update:query":function(t){e.query=t}},scopedSlots:e._u([{key:"column-status",fn:function(r){return[t("span",[e._v(e._s("0"==r.row.status?"在单":"1"==r.row.status?"生产":"2"==r.row.status?"在途":"已接收"))])]}},{key:"column-createTime",fn:function(r){return[r.row.createTime?t("span",[e._v(e._s(e._f("datefmt")(r.row.createTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-deadlineTime",fn:function(r){return[r.row.deadlineTime?t("span",[e._v(e._s(e._f("datefmt")(r.row.deadlineTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-todo",fn:function(r){return[t("el-button",{staticStyle:{visibility:"hidden"},attrs:{type:"text"}},[e._v("空")]),r.row.status<1?t("el-button",{attrs:{type:"text",icon:"el-icon-s-ticket"},on:{click:function(t){return e.editRow1(r.row)}}},[e._v("接收订单")]):e._e(),r.row.status<2?t("el-button",{attrs:{type:"text",icon:"el-icon-s-promotion"},on:{click:function(t){return e.editRow1(r.row)}}},[e._v("发出货物")]):e._e()]}}])})],1),e.drawer?t("sReturnEdit",{attrs:{drawer:e.drawer,rowData:e.rowData},on:{close:function(t){e.drawer=!1},success:function(t){return e.success()}}}):e._e(),e.drawer1?t("sInOrderEdit",{attrs:{drawer:e.drawer1,rowData:e.rowData1},on:{close:function(t){e.drawer1=!1},success:function(t){return e.success()}}}):e._e()],1)},a=[],s=(r("d3b7"),r("159b"),r("14d9"),r("972b")),i=r("15d4"),l=r("c367"),n=r("ffd4"),u=r("79db"),c=r("f0a5"),p=r("7e1e"),d={name:"slist",data:function(){return{total:null,drawer:!1,drawer1:!1,hidden:!0,multiCheck:!1,rowData:{},rowData1:{},tableData:[],multipleSelection:[],loadings:{table:!0},query:{pageNo:1,pageSize:10},userType:"",shopOptions:[],goodsOptions:[],inventoryOptions:[],supplierOptions:[],statusOptions:[{label:"在单",value:0},{label:"生产",value:1},{label:"在途",value:2}]}},computed:{tableColumn:function(){return[{prop:"shopCode",label:"门店编码"},{prop:"shopName",label:"门店名称"},{prop:"goodsCode",label:"商品编码"},{prop:"goodsName",label:"商品名称"},{prop:"supplierCode",label:"供应商编码"},{prop:"supplierName",label:"供应商名称"},{prop:"inputPlan",label:"计划数"},{prop:"inputPrice",label:"订购价格"},{prop:"inputActual",label:"实际数"},{slots:{name:"column-status"},label:"状态"},{prop:"vehicleCode",label:"车辆编码"},{slots:{name:"column-createTime"},label:"预计日期"},{slots:{name:"column-deadlineTime"},label:"最迟日期"},{prop:"returnNum",label:"退货数"},{prop:"returnReason",label:"退货原因"},{slots:{name:"column-todo"},label:"操作",fixed:"right",width:250}]},searchConfig:function(){return[{label:"请选择",placeholder:"请选择门店",field:"shopCode",value:"",type:"select",options:this.shopOptions},{label:"请选择",placeholder:"请选择商品",field:"goodsCode",value:"",type:"select",options:this.goodsOptions},{label:"请选择",placeholder:"请选择供应商",field:"supplierCode",value:"",type:"select",options:this.supplierOptions},{label:"请选择",placeholder:"请选择状态",field:"status",value:"",type:"select",options:this.statusOptions}]}},props:{},components:{TableList:l["a"],sReturnEdit:u["a"],sInOrderEdit:c["a"],reloadAndsearch:n["a"]},created:function(){this.getshoplist(),this.getgoodslist(),this.getSupplierlist(),this.getinventorylist();var e=JSON.parse(localStorage.getItem("userInfo"));this.userType=e.userType},methods:{getSupplierlist:function(){var e=this;Object(p["o"])().then((function(t){200==t.data.code?(e.supplierOptions=[],t.data.data.forEach((function(t){e.supplierOptions.push({label:t.supplierName,value:t.supplierCode})}))):e.$message.error("获取失败!")}))},getinventorylist:function(){var e=this;Object(p["bb"])().then((function(t){200===t.data.code?(e.inventoryOptions=[],t.data.data.forEach((function(t){("2"==t.inventoryType&&null!=t.belongKey||""!=t.belongKey)&&e.inventoryOptions.push({label:t.inventoryName,value:t.inventoryCode})}))):e.$message.error(t.msg)})).catch((function(e){console.log(e)}))},getshoplist:function(){var e=this;Object(p["nb"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.shopOptions.push({label:t.shopName,value:t.shopCode})})):e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(p["V"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.goodsOptions.push({label:t.goodsName,value:t.goodsCode})})):e.$message.error("获取失败!")}))},getTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,r&&(this.query.pageSize=r),this.loadings.table=!0;var o={page:this.query.pageNo,size:this.query.pageSize,shopCode:"",goodsCode:"",supplierCode:"",inventoryCode:"",status:"",isDeleted:0,type:""};Object(s["e"])(o).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},search:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,r&&(this.query.pageSize=r);var o=this.$refs.search.search;Object(s["e"])({page:this.query.pageNo,size:this.query.pageSize,shopCode:o.shopCode,goodsCode:o.goodsCode,supplierCode:o.supplierCode,inventoryCode:"",status:o.status,isDeleted:0,type:""}).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},editRow1:function(e){this.rowData1=e,this.drawer1=!0},editRow:function(e){var t=this;Object(i["b"])({checkType:0,inputOutputKey:e.inputWarehouseKey}).then((function(e){200==e.data.code?(t.rowData=e.data.data,t.drawer=!0):t.$message.error("获取失败!")}))},deleteRow:function(e){var t=this;console.log("deleteRow",e),Object(s["b"])({inputWarehouseKey:e.inputWarehouseKey,isDeleted:1}).then((function(e){200==e.data.code?(t.$message.success("删除成功!"),t.getTableData(),t.$forceUpdate()):t.$message.error("删除失败!")}))},success:function(){this.drawer=!1,this.rowData={},this.drawer1=!1,this.rowData1={},this.getTableData()},reload:function(){this.getTableData()},add:function(){this.rowData={},this.drawer=!0},handleSelectionDelete:function(e){this.multipleSelection=e},handleDeleteList:function(){var e=this;if(this.multipleSelection.length>0){var t=[];this.multipleSelection.forEach((function(e){t.push({inputWarehouseKey:e.inputWarehouseKey})})),console.log(t),this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["c"])(t).then((function(){e.getTableData(),e.$message({type:"success",message:"删除成功!"})})).catch((function(e){console.log(e)}))})).catch((function(){e.$message({type:"info",message:"已取消删除"}),e.multipleSelection=[]}))}else this.$message({type:"error",message:"至少选择一项"})}}},m=d,h=(r("336c"),r("2877")),f=Object(h["a"])(m,o,a,!1,null,"0ee1a136",null);t["default"]=f.exports},"751a":function(e,t,r){"use strict";r("b775")},"79db":function(e,t,r){"use strict";r("a4d3"),r("e01a");var o=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{size:"30%",title:e.ifCreate?"新增退货单":"审批退货单",visible:e.drawer,direction:e.direction,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,wrapperClosable:!1,"append-to-body":!0,width:"1200px"},on:{"update:visible":function(t){e.drawer=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店",prop:"shopCode"}},[t("el-select",{ref:"selection",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"门店",clearable:"",disabled:""},model:{value:e.ruleForm.shopCode,callback:function(t){e.$set(e.ruleForm,"shopCode",t)},expression:"ruleForm.shopCode"}},e._l(e.shopOptions,(function(r){return t("el-option",{key:r.shopKey,attrs:{label:r.shopName,value:r.shopCode},nativeOn:{click:function(t){return e.setShopName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"商品",prop:"goodsCode"}},[t("el-select",{ref:"goodsSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"商品",clearable:"",disabled:""},model:{value:e.ruleForm.goodsCode,callback:function(t){e.$set(e.ruleForm,"goodsCode",t)},expression:"ruleForm.goodsCode"}},e._l(e.goodsOptions,(function(r){return t("el-option",{key:r.goodsCode,attrs:{label:r.goodsName,value:r.goodsCode},nativeOn:{click:function(t){return e.setGoodsName.apply(null,arguments)}}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"供应商",prop:"supplierCode"}},[t("el-select",{ref:"supplierSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"供应商",clearable:"",disabled:""},model:{value:e.ruleForm.supplierCode,callback:function(t){e.$set(e.ruleForm,"supplierCode",t)},expression:"ruleForm.supplierCode"}},e._l(e.supplierOptions,(function(r){return t("el-option",{key:r.supplierKey,attrs:{label:r.supplierName,value:r.supplierCode},nativeOn:{click:function(t){return e.setSupplierName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"计划数",prop:"inputPlan"}},[t("el-input",{attrs:{clearable:"",placeholder:"计划数",min:0,disabled:"",type:"Number"},model:{value:e.ruleForm.inputPlan,callback:function(t){e.$set(e.ruleForm,"inputPlan",t)},expression:"ruleForm.inputPlan"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"入库价格",prop:"inputPrice"}},[t("el-input",{attrs:{clearable:"",placeholder:"入库价格",min:0,disabled:"",type:"Number"},model:{value:e.ruleForm.inputPrice,callback:function(t){e.$set(e.ruleForm,"inputPrice",t)},expression:"ruleForm.inputPrice"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"实际数",prop:"inputActual"}},[t("el-input",{attrs:{clearable:"",placeholder:"实际数",min:0,disabled:"",type:"Number"},model:{value:e.ruleForm.inputActual,callback:function(t){e.$set(e.ruleForm,"inputActual",t)},expression:"ruleForm.inputActual"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"申请退货数",prop:"checkNum"}},[t("el-input",{attrs:{clearable:"",placeholder:"申请退货数",min:0,disabled:"",type:"Number"},model:{value:e.ruleForm.checkNum,callback:function(t){e.$set(e.ruleForm,"checkNum",t)},expression:"ruleForm.checkNum"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"退货原因",prop:"returnReason"}},[t("el-input",{attrs:{clearable:"",placeholder:"退货原因",type:"textarea",disabled:""},model:{value:e.ruleForm.returnReason,callback:function(t){e.$set(e.ruleForm,"returnReason",t)},expression:"ruleForm.returnReason"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审批",prop:"checkStatus"}},[t("el-select",{attrs:{size:"small",placeholder:"审批",clearable:""},model:{value:e.ruleForm.checkStatus,callback:function(t){e.$set(e.ruleForm,"checkStatus",t)},expression:"ruleForm.checkStatus"}},[t("el-option",{attrs:{label:"未审批",value:0,disabled:""}},[t("span",{staticStyle:{float:"left"}},[t("i",{staticClass:"el-icon-minus"}),e._v(" 未审批 ")])]),t("el-option",{attrs:{label:"同意",value:1}},[t("span",{staticStyle:{float:"left"}},[t("i",{staticClass:"el-icon-check",attrs:{disabled:e.isDisabled}}),e._v(" 同意 ")])]),t("el-option",{attrs:{label:"驳回",value:2}},[t("span",{staticStyle:{float:"left"}},[t("i",{staticClass:"el-icon-close"}),e._v(" 驳回 ")])])],1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审批意见",prop:"description"}},[t("el-input",{attrs:{clearable:"",placeholder:"审批意见",type:"textarea"},model:{value:e.ruleForm.description,callback:function(t){e.$set(e.ruleForm,"description",t)},expression:"ruleForm.description"}})],1)],1)],1)],1),t("div",{staticClass:"dialog_footer"},[0==e.ifCreate?t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save("ruleForm")}}},[e._v("提交")]):t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.create("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(t){return e.close()}}},[e._v("取消")])],1)],1)},a=[],s=r("c7eb"),i=r("1da1"),l=(r("d3b7"),r("159b"),r("4ec9"),r("3ca3"),r("ddb0"),r("4de4"),r("15d4")),n=r("7e1e"),u=r("64dc"),c=r("4ec3"),p=r("c1df"),d=r.n(p),m={name:"guestEdit",data:function(){return{direction:"btt",ifCreate:!1,ruleForm:{returnCheckKey:"",inputWarehouseKey:"",inputOutputKey:"",shopCode:"",shopName:"",goodsCode:"",goodsName:"",supplierCode:"",supplierName:"",inputPlan:"",inputPrice:"",inputActual:"",inventoryCode:"",positionCode:"",createTime:"",deadlineTime:"",vehicleCode:"",status:"",type:"",shopPeopleCode:"",inventoryPeopleCode:"",isDeleted:"",returnReason:"",description:"",checkType:"",checkStatus:"",returnNum:"",checkNum:"",inputShopCode:"",inputShopName:""},shopOptions:[],goodsOptions:[],positionOptions:[],supplierOptions:[],inventoryOptions:[],userOptions:[],userOptions1:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+7776e6),e.$emit("pick",[r,t])}}]},value2:"",isDisabled:!1,rules:{description:[{required:!0,message:"请输入审批意见",trigger:"blur"}],checkStatus:[{required:!0,message:"请审批",trigger:"blur"}]}}},props:{drawer:{default:!0},rowData:{}},watch:{},created:function(){this.getshoplist(),this.getgoodslist(),this.getSupplierlist(),this.getUserList(),this.rowData.returnCheckKey?(this.ruleForm.inputWarehouseKey=this.rowData.inputWarehouseKey,this.ruleForm.returnCheckKey=this.rowData.returnCheckKey,this.ruleForm.shopCode=this.rowData.shopCode,this.ruleForm.shopName=this.rowData.shopName,this.ruleForm.goodsCode=this.rowData.goodsCode,this.ruleForm.goodsName=this.rowData.goodsName,this.ruleForm.supplierCode=this.rowData.supplierCode,this.ruleForm.supplierName=this.rowData.supplierName,this.ruleForm.inputPlan=this.rowData.inputPlan,this.ruleForm.inputPrice=this.rowData.inputPrice,this.ruleForm.inputActual=this.rowData.inputActual,this.ruleForm.inventoryCode=this.rowData.inventoryCode,this.ruleForm.positionCode=this.rowData.positionCode,this.ruleForm.createTime=this.rowData.createTime,this.ruleForm.deadlineTime=this.rowData.deadlineTime,this.ruleForm.vehicleCode=this.rowData.vehicleCode,this.ruleForm.status=this.rowData.status,this.ruleForm.type=this.rowData.type,this.ruleForm.shopPeopleCode=this.rowData.shopPeopleCode,this.ruleForm.isDeleted=this.rowData.isDeleted,this.ruleForm.inventoryPeopleCode=this.rowData.inventoryPeopleCode,this.ruleForm.returnReason=this.rowData.returnReason,this.ruleForm.returnNum=this.rowData.returnNum,this.ruleForm.description=this.rowData.description,this.ruleForm.checkType=this.rowData.checkType,this.ruleForm.checkNum=this.rowData.checkNum,this.ruleForm.inputOutputKey=this.rowData.inputOutputKey,this.ruleForm.checkStatus=this.rowData.checkStatus,this.ruleForm.inputShopCode=this.rowData.inputShopCode,this.ruleForm.inputShopName=this.rowData.inputShopName,this.value2=[this.rowData.createTime,this.rowData.deadlineTime]):this.ifCreate=!0},methods:{setSupplierInventoryStatus:function(){var e=this;this.supplierOptions.forEach((function(t){t.supplierCode==e.rowData.supplierCode&&1!=t.status&&(e.isDisabled=!0)}))},getUserList:function(){var e=this;Object(c["a"])({userType:2}).then((function(t){e.userOptions=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)})),Object(c["a"])({userType:1}).then((function(t){e.userOptions1=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)}))},getshoplist:function(){var e=this;Object(n["nb"])().then((function(t){200==t.data.code?e.shopOptions=t.data.data:e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(n["V"])().then((function(t){200==t.data.code?e.goodsOptions=t.data.data:e.$message.error("获取失败!")}))},getSupplierlist:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(u["x"])().then((function(t){200==t.data.code?(e.supplierOptions=t.data.data,e.setSupplierInventoryStatus()):e.$message.error("获取失败!")}));case 1:case"end":return t.stop()}}),t)})))()},unique:function(e){var t=new Map;return e.filter((function(e){return!t.has(e.shopKey)&&t.set(e.shopKey,1)}))},getShopInventoryList:function(e){var t=this;Object(u["d"])({shopCode:e}).then((function(e){200==e.data.code?t.inventoryOptions=e.data.data:t.$message.error("获取失败!")}))},setShopName:function(){this.getShopInventoryList(this.ruleForm.shopCode),this.ruleForm.shopName=this.$refs.selection.selectedLabel},setSupplierName:function(){this.ruleForm.supplierName=this.$refs.supplierSelect.selectedLabel},setGoodsName:function(){this.ruleForm.goodsName=this.$refs.goodsSelect.selectedLabel},setPosition:function(){var e=this;this.ruleForm.inventoryName=this.$refs.inventorySelect.selectedLabel;var t=this.inventoryOptions.filter((function(t){return t.inventoryCode==e.ruleForm.inventoryCode}));this.getpositionList(t[0].inventoryKey)},getpositionList:function(e){var t=this;Object(n["gb"])({inventoryKey:e}).then((function(e){200==e.data.code?t.positionOptions=e.data.data:t.$message.error("获取失败!")}))},setTime:function(){this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1]},close:function(){this.$parent.drawer=!1},save:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;if(0==t.ruleForm.checkStatus)t.$message.error("请选择同意或驳回!");else{1==t.ruleForm.checkStatus&&(t.ruleForm.returnNum=t.ruleForm.checkNum,t.ruleForm.inputActual=t.ruleForm.inputActual-t.ruleForm.checkNum);var r={returnCheckKey:t.ruleForm.returnCheckKey,description:t.ruleForm.description,checkType:t.ruleForm.checkType,inputOutputKey:t.ruleForm.inputOutputKey,checkStatus:t.ruleForm.checkStatus,happenTime:t.ruleForm.happenTime,checkNum:t.ruleForm.checkNum,checkTime:d()().format("YYYY-MM-DD HH:mm:ss"),inputWarehouse:{shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,isDeleted:t.ruleForm.isDeleted,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,returnNum:t.ruleForm.returnNum,inputWarehouseKey:t.ruleForm.inputWarehouseKey,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName}};Object(l["f"])(r).then((function(e){if(200==e.data.code)if(1==t.ruleForm.checkStatus){var r={inputOutputKey:t.ruleForm.inputOutputKey,shopkeeperWarehouseKey:"",type:1,transType:1,quantity:t.ruleForm.checkNum,startNum:"",finalNum:"",atTime:d()().format("YYYY-MM-DD HH:mm:ss"),status:t.rowData.status,detailWarehouseKey:"",shopCode:t.ruleForm.shopCode,goodsCode:t.ruleForm.goodsCode};Object(u["h"])(r).then((function(e){200==e.data.code?(t.$message.success("审批成功!"),t.$parent.success(),t.$forceUpdate()):t.$message.error("审批失败!")}))}else t.$message.success("审批成功!"),t.$parent.success(),t.$forceUpdate();else t.$message.error("审批失败!")}))}}))},create:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;if(0==t.ruleForm.checkStatus)t.$message.error("请选择同意或驳回!");else{1==t.ruleForm.checkStatus&&(t.ruleForm.returnNum=t.ruleForm.checkNum,t.ruleForm.inputActual=t.ruleForm.inputActual-t.ruleForm.checkNum);var r={returnCheckKey:t.ruleForm.returnCheckKey,description:t.ruleForm.description,checkType:t.ruleForm.checkType,inputOutputKey:t.ruleForm.inputOutputKey,checkStatus:t.ruleForm.checkStatus,happenTime:t.ruleForm.happenTime,checkNum:t.ruleForm.checkNum,checkTime:d()().format("YYYY-MM-DD HH:mm:ss"),inputWarehouse:{shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,isDeleted:t.ruleForm.isDeleted,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,returnNum:t.ruleForm.returnNum,inputWarehouseKey:t.ruleForm.inputWarehouseKey,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName}};Object(l["f"])(r).then((function(e){if(200==e.data.code)if(200==e.data.code)if(1==t.ruleForm.checkStatus){var r={inputOutputKey:t.ruleForm.inputOutputKey,shopkeeperWarehouseKey:"",type:1,transType:1,quantity:t.ruleForm.checkNum,startNum:"",finalNum:"",atTime:d()().format("YYYY-MM-DD HH:mm:ss"),status:t.rowData.status,detailWarehouseKey:"",shopCode:t.ruleForm.shopCode,goodsCode:t.ruleForm.goodsCode};Object(u["h"])(r).then((function(e){200==e.data.code?(t.$message.success("审批成功!"),t.$parent.success(),t.$forceUpdate()):t.$message.error("审批失败!")}))}else t.$message.success("审批成功!"),t.$parent.success(),t.$forceUpdate();else t.$message.error("审批失败!")}))}}))}}},h=m,f=(r("6bbc"),r("2877")),b=Object(f["a"])(h,o,a,!1,null,null,null);t["a"]=b.exports},8158:function(e,t,r){},"972b":function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return n})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c}));var o=r("b775"),a=(r("4328"),"/api");function s(e){return Object(o["a"])({url:a+"/inputWarehouse/list",method:"get",params:e})}function i(e){return Object(o["a"])({url:a+"/inputWarehouse/list-page",method:"get",params:e})}function l(e){return Object(o["a"])({url:a+"/inputWarehouse/add",method:"POST",data:e})}function n(e){return Object(o["a"])({url:a+"/inputWarehouse/update",method:"POST",data:e})}function u(e){return Object(o["a"])({url:a+"/inputWarehouse/delete",method:"POST",data:e})}function c(e){return Object(o["a"])({url:a+"/inputWarehouse/delete-list",method:"POST",data:e})}},a47a:function(e,t,r){"use strict";r("8158")},db7a:function(e,t,r){},f0a5:function(e,t,r){"use strict";var o=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{size:"30%",title:e.ifCreate?"新增订单":"接收与发货",visible:e.drawer,direction:e.direction,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,wrapperClosable:!1,"append-to-body":!0,width:"1200px"},on:{"update:visible":function(t){e.drawer=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店",prop:"shopCode"}},[t("el-select",{ref:"selection",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"门店",clearable:"",disabled:""},model:{value:e.ruleForm.shopCode,callback:function(t){e.$set(e.ruleForm,"shopCode",t)},expression:"ruleForm.shopCode"}},e._l(e.shopOptions,(function(r){return t("el-option",{key:r.shopKey,attrs:{label:r.shopName,value:r.shopCode},nativeOn:{click:function(t){return e.setShopName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"商品",prop:"goodsCode"}},[t("el-select",{ref:"goodsSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"商品",clearable:"",disabled:""},model:{value:e.ruleForm.goodsCode,callback:function(t){e.$set(e.ruleForm,"goodsCode",t)},expression:"ruleForm.goodsCode"}},e._l(e.goodsOptions,(function(r){return t("el-option",{key:r.goodsCode,attrs:{label:r.goodsName,value:r.goodsCode},nativeOn:{click:function(t){return e.setGoodsName.apply(null,arguments)}}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"供应商",prop:"supplierCode"}},[t("el-select",{ref:"supplierSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"供应商",clearable:"",disabled:""},model:{value:e.ruleForm.supplierCode,callback:function(t){e.$set(e.ruleForm,"supplierCode",t)},expression:"ruleForm.supplierCode"}},e._l(e.supplierOptions,(function(r){return t("el-option",{key:r.supplierKey,attrs:{label:r.supplierName,value:r.supplierCode},nativeOn:{click:function(t){return e.setSupplierName(r)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("span",{staticStyle:{"margin-left":"8%"}},[e._v("起止日期")]),t("el-date-picker",{staticStyle:{width:"310px","margin-left":"10px"},attrs:{type:"daterange",align:"right",disabled:"",size:"large","unlink-panels":"","range-separator":"至","start-placeholder":"预计日期","end-placeholder":"最迟日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},nativeOn:{click:function(t){return e.setTime.apply(null,arguments)}},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"计划数",prop:"inputPlan"}},[t("el-input",{attrs:{clearable:"",min:0,placeholder:"计划数",disabled:"",type:"Number"},model:{value:e.ruleForm.inputPlan,callback:function(t){e.$set(e.ruleForm,"inputPlan",t)},expression:"ruleForm.inputPlan"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"订购价格",prop:"inputPrice"}},[t("el-input",{attrs:{clearable:"",min:0,placeholder:"订购价格",disabled:"",type:"Number"},model:{value:e.ruleForm.inputPrice,callback:function(t){e.$set(e.ruleForm,"inputPrice",t)},expression:"ruleForm.inputPrice"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"实际数",prop:"inputActual"}},[t("el-input",{attrs:{clearable:"",min:0,placeholder:"实际数",type:"Number"},model:{value:e.ruleForm.inputActual,callback:function(t){e.$set(e.ruleForm,"inputActual",t)},expression:"ruleForm.inputActual"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"接收状态",prop:"status"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"接收状态",clearable:""},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},e._l(e.statusOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[2==e.ruleForm.status?t("el-form-item",{attrs:{label:"车辆",prop:"vehicleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"车辆",clearable:""},model:{value:e.ruleForm.vehicleCode,callback:function(t){e.$set(e.ruleForm,"vehicleCode",t)},expression:"ruleForm.vehicleCode"}},e._l(e.vehicleOptions,(function(e){return t("el-option",{key:e.vehicleKey,attrs:{label:e.vehicleCode,value:e.vehicleCode}})})),1)],1):e._e()],1)],1)],1),t("div",{staticClass:"dialog_footer"},[0==e.ifCreate?t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save("ruleForm")}}},[e._v("保存")]):t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.create("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(t){return e.close()}}},[e._v("关闭")])],1)],1)},a=[],s=r("c7eb"),i=r("1da1"),l=(r("d3b7"),r("159b"),r("4ec9"),r("3ca3"),r("ddb0"),r("4de4"),r("972b")),n=r("7e1e"),u=r("64dc"),c={name:"guestEdit",data:function(){return{direction:"btt",ifCreate:!1,ruleForm:{inputWarehouseKey:"",shopCode:"",shopName:"",goodsCode:"",goodsName:"",supplierCode:"",supplierName:"",inputPlan:"",inputPrice:"",inputActual:"",inventoryCode:"",positionCode:"",createTime:"",deadlineTime:"",vehicleCode:"",status:"",type:"",shopPeopleCode:"",inventoryPeopleCode:"",returnReason:"",isDeleted:"",returnNum:"",inputShopCode:"",inputShopName:""},supplierStatus:"",shopOptions:[],goodsOptions:[],positionOptions:[],supplierOptions:[],inventoryOptions:[],vehicleOptions:[],statusOptions:[{label:"在单",value:0,disabled:!0},{label:"生产",value:1,disabled:!1},{label:"在途",value:2,disabled:!1}],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+7776e6),e.$emit("pick",[r,t])}}]},value2:"",rules:{inputActual:[{required:!0,message:"请设置实际数",trigger:"blur"}],inputPlan:[{required:!0,message:"请设置计划数",trigger:"blur"}],inputPrice:[{required:!0,message:"请设置入库价格",trigger:"blur"}],status:[{required:!0,message:"请设置接收状态",trigger:"blur"}]}}},props:{drawer:{default:!0},rowData:{}},watch:{},created:function(){this.getshoplist(),this.getgoodslist(),this.getSupplierlist(),this.getvehicleList(),this.rowData.inputWarehouseKey?(this.ruleForm.inputWarehouseKey=this.rowData.inputWarehouseKey,this.ruleForm.shopCode=this.rowData.shopCode,this.ruleForm.shopName=this.rowData.shopName,this.ruleForm.goodsCode=this.rowData.goodsCode,this.ruleForm.goodsName=this.rowData.goodsName,this.ruleForm.supplierCode=this.rowData.supplierCode,this.ruleForm.supplierName=this.rowData.supplierName,this.ruleForm.inputPlan=this.rowData.inputPlan,this.ruleForm.inputPrice=this.rowData.inputPrice,this.ruleForm.inputActual=this.rowData.inputActual,this.ruleForm.inventoryCode=this.rowData.inventoryCode,this.ruleForm.positionCode=this.rowData.positionCode,this.ruleForm.createTime=this.rowData.createTime,this.ruleForm.deadlineTime=this.rowData.deadlineTime,this.ruleForm.vehicleCode=this.rowData.vehicleCode,this.ruleForm.status=this.rowData.status,this.ruleForm.type=this.rowData.type,this.ruleForm.shopPeopleCode=this.rowData.shopPeopleCode,this.ruleForm.inventoryPeopleCode=this.rowData.inventoryPeopleCode,this.ruleForm.isDeleted=this.rowData.isDeleted,this.ruleForm.returnReason=this.rowData.returnReason,this.ruleForm.returnNum=this.rowData.returnNum,this.ruleForm.inputShopCode=this.rowData.inputShopCode,this.ruleForm.inputShopName=this.rowData.inputShopName,this.value2=[this.rowData.createTime,this.rowData.deadlineTime]):this.ifCreate=!0},mounted:function(){},methods:{setSupplierInventoryStatus:function(){var e=this;this.supplierOptions.forEach((function(t){t.supplierCode==e.rowData.supplierCode&&1!=t.status&&(e.statusOptions[2].disabled=!0),console.log(e.statusOptions)}))},getvehicleList:function(){var e=this;Object(n["xb"])().then((function(t){200==t.data.code?e.vehicleOptions=t.data.data:e.$message.error("获取失败!")}))},getshoplist:function(){var e=this;Object(n["nb"])().then((function(t){200==t.data.code?e.shopOptions=t.data.data:e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(n["V"])().then((function(t){200==t.data.code?e.goodsOptions=t.data.data:e.$message.error("获取失败!")}))},getSupplierlist:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(u["x"])().then((function(t){200==t.data.code?(e.supplierOptions=t.data.data,e.setSupplierInventoryStatus()):e.$message.error("获取失败!")}));case 1:case"end":return t.stop()}}),t)})))()},unique:function(e){var t=new Map;return e.filter((function(e){return!t.has(e.shopKey)&&t.set(e.shopKey,1)}))},getShopInventoryList:function(e){var t=this;Object(u["d"])({shopCode:e}).then((function(e){200==e.data.code?t.inventoryOptions=e.data.data:t.$message.error("获取失败!")}))},setShopName:function(){this.ruleForm.shopName=this.$refs.selection.selectedLabel},setSupplierName:function(e){this.ruleForm.supplierName=this.$refs.supplierSelect.selectedLabel,this.supplierStatus=e.staut},setGoodsName:function(){this.ruleForm.goodsName=this.$refs.goodsSelect.selectedLabel},setTime:function(){this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1]},close:function(){this.$parent.drawer=!1,this.$emit("close")},save:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r={shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,returnNum:t.ruleForm.returnNum,isDeleted:t.ruleForm.isDeleted,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName,inputWarehouseKey:t.ruleForm.inputWarehouseKey};Object(l["f"])(r).then((function(e){200==e.data.code?(t.ruleForm.status,t.$message.success("新增成功!"),t.$parent.success(),t.$parent.drawer=!1,t.$forceUpdate()):t.$message.error("编辑失败!")}))}))},create:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r={shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,isDeleted:t.ruleForm.isDeleted,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName,returnNum:t.ruleForm.returnNum};Object(l["a"])(r).then((function(e){200==e.data.code?2==t.ruleForm.status?(t.$message.success("新增成功!"),t.$parent.success(),t.$parent.drawer=!1,t.$forceUpdate()):(t.$message.success("新增成功!"),t.$parent.success(),t.$forceUpdate()):t.$message.error("新增失败!")}))}))}}},p=c,d=(r("a47a"),r("2877")),m=Object(d["a"])(p,o,a,!1,null,null,null);t["a"]=m.exports}}]);
//# sourceMappingURL=chunk-10fb80be.a1506c71.js.map