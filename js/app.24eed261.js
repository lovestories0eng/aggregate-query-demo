(function(e){function t(t){for(var i,n,o=t[0],l=t[1],h=t[2],c=0,u=[];c<o.length;c++)n=o[c],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,h||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},r={app:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var h=0;h<o.length;h++)t(o[h]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0a6a":function(e,t,a){"use strict";a("ba18")},"100e":function(e,t,a){"use strict";a("88f4")},"1b2a":function(e,t,a){"use strict";a("84aa")},"3df8":function(e,t,a){"use strict";a("a0f2")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("lay-out")],1)},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"contain"},[a("el-aside",{staticClass:"left-column"},[a("side-bar",{attrs:{"sample-queries":e.sampleQueries},on:{choosedQuery:e.choosedQuery}})],1),a("el-main",{staticClass:"right-column"},[a("head-searcher",{attrs:{"graph-data":e.predicate.split(" "),query:e.query,"sample-queries":e.sampleQueries},on:{getQuery:e.getQuery,getMessage:e.getMessage,choosedQuery:e.choosedQuery,selectChage:e.choosedQuery}},[a("miniQueryGraph",{attrs:{"graph-data":e.predicate.split(" ")}})],1),a("div",{staticStyle:{"padding-top":"10px"}},[a("results-table",{attrs:{round:e.round,"table-data":e.tableData}})],1),a("div",{staticClass:"candidate-answers-container"},[a("candidate-answers",{attrs:{"candidate-answers":e.candidateAnswers,options:e.options,round:e.round,"max-round":e.maxRound,click:e.click},on:{getSelectedSample:e.getSelectedSample}})],1),a("div",{staticClass:"query-graph-container"},[0!==e.round?a("query-graph",{attrs:{"graph-data":e.graphData,"selected-sample":e.selectedSample}}):0===e.round?a("largeQueryGraph",{attrs:{"graph-data":e.largeGraph}}):e._e()],1),a("control-buttons")],1)],1)},o=[],l=(a("b64b"),a("d3b7"),a("25f0"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"side-bar"}},[a("el-table",{attrs:{stripe:"",data:e.sampleQueries,height:e.autoHeight.height,"header-cell-style":{"font-size":"20px",color:"#303133","font-weight":"520"}},on:{"row-click":e.clickData}},[a("el-table-column",{attrs:{prop:"query",label:"Query Examples",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{effect:"dark","disabled:false":"",content:t.row.query,placement:"top","open-delay":500}},[a("span",[e._v(e._s(e._f("ellipsis")(t.row.query)))])])]}}])})],1)],1)}),h=[],d=(a("fb6a"),{name:"SideBar",filters:{ellipsis:function(e){return e?e.length>30?e.slice(0,30)+"...":e:""}},props:{sampleQueries:{type:Array,default:function(){return[]}},singlePath:{type:Array,default:function(){return[]}}},data:function(){return{windowHeight:0,autoHeight:{height:""},cardInfoList:""}},created:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},mounted:function(){},methods:{clickData:function(e){this.cardInfoList=e,this.cardInfoList.flag=1,this.$emit("choosedQuery",this.cardInfoList,1)},getHeight:function(){this.windowHeight=window.innerHeight,this.autoHeight.height=this.windowHeight-40+"px"}}}),c=d,u=a("2877"),p=Object(u["a"])(c,l,h,!1,null,null,null),f=p.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"show"},[a("el-col",{staticStyle:{display:"flex","align-items":"center"},attrs:{span:13}},[a("el-link",{style:"width:"+e.widthLink+"%;display:flex;height:38px;text-align:start;justify-content:flex-start;border-bottom:1px solid #DCDFE6;font-size:"+e.fontsize+"px",on:{click:function(t){return e.widthChange()}}},[a("span",{staticStyle:{"padding-top":"10px"}},[a("span",[e._v(e._s(e.str[0]))]),a("span",{staticStyle:{color:"#F56C6C","font-weight":"600"}},[e._v(e._s(e.str[1]))]),a("span",[e._v(e._s(e.str[2]))]),a("span",{staticStyle:{color:"#409EFF","font-weight":"600"}},[e._v(e._s(e.str[3]))]),a("span",[e._v(e._s(e.str[4]))])])]),a("el-select",{ref:"headerSearchSelect",staticClass:"header-search-select",style:"width:"+e.widthSearch+"%",attrs:{id:"select","remote-method":e.querySearch,filterable:"",remote:"",placeholder:e.beforeContain},on:{change:e.selectChage},model:{value:e.containSearch,callback:function(t){e.containSearch=t},expression:"containSearch"}},e._l(e.options,(function(e){var t=e.item;return a("el-option",{key:t.query,attrs:{value:t.query,label:t.query}})})),1)],1),a("el-col",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"},attrs:{span:11}},[e._t("default"),a("el-tooltip",{staticStyle:{"margin-left":"10px"},attrs:{content:"submit query"}},[a("el-button",{staticClass:"search-icon",attrs:{type:"primary"},on:{click:e.proceed}},[a("svg",{staticClass:"icon",attrs:{t:"1646027529363",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2442",width:"200",height:"200"}},[a("path",{attrs:{d:"M439.488 960l124.416-169.984-124.416-35.84L439.488 960 439.488 960 439.488 960M0 559.936l353.472 107.072 435.328-369.6-337.408 398.144 377.92 116.736L1024 64.064 0 559.936 0 559.936 0 559.936M0 559.936","p-id":"2443",fill:"#fff"}})])])],1),a("el-tooltip",{attrs:{content:"continue"}},[a("el-button",{staticClass:"search-icon",attrs:{type:"primary"},on:{click:e.proceedContinue}},[a("svg",{staticClass:"icon",attrs:{t:"1646027791988",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2864",width:"200",height:"200",fill:"#fff"}},[a("path",{attrs:{d:"M104 0v1024l816-512z","p-id":"2865"}})])])],1)],2)],1)},y=[],m=(a("ac1f"),a("841c"),a("1913"),a("6062")),b={name:"HeaderSearch",props:{sampleQueries:{type:Array,default:function(){return[]}},query:{type:String,default:function(){return""}},graphData:{type:Array,default:function(){return[]}}},data:function(){return{search:"",options:[],searchPool:[],show:!0,fuse:void 0,widthLink:0,widthSearch:100,containLink:"",containSearch:"",beforeContain:"Search",fontsize:0,str:[]}},watch:{query:function(e){this.search=e,this.containLink=e,this.containSearch="",this.beforeContain="",this.widthLink=100,this.widthSearch=0,this.fontsize=14},graphData:function(e){if("undefined"!=typeof e[2]&&"undefined"!=typeof e[0]){for(var t=e[2].substring(0,3),a=e[0].substring(0,3),i=-1,r=-1,s=-1,n=-1,o="",l="",h="",d="",c="",u=0;u<=this.search.length-4;u++){if(this.search.substring(u,u+3)==t||this.search.substring(u,u+1)>="A"&&this.search.substring(u,u+1)<="Z"&&u>=1&&-1==i){i=u;for(var p=u+3;p<=this.search.length;p++)if(" "==this.search.substring(p,p+1)&&this.search.substring(p+1,p+2)<"A"&&this.search.substring(p+1,p+2)>"Z"||p==this.search.length){s=p;break}}if(this.search.substring(u,u+3)==a){r=u;for(var f=u+3;f<=this.search.length;f++)if(" "==this.search.substring(f,f+1)&&"pl"!=this.search.substring(f+1,f+3)||f==this.search.length){n=f;break}}}-1!=i&&-1!=r&&(o=this.search.substring(0,r),l=this.search.substring(r,n),h=this.search.substring(n,i),d=this.search.substring(i,s),c=this.search.substring(s)),this.str[0]=o,this.str[1]=l,this.str[2]=h,this.str[3]=d,this.str[4]=c}}},mounted:function(){this.searchPool=this.sampleQueries,this.fuse=new m["a"](this.searchPool,{shouldSort:!0,threshold:.4,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["query"]})},methods:{selectChage:function(){var e={};e.query=this.containSearch,e.flag=1,this.$emit("choosedQuery",e)},querySearch:function(e){""!==e&&(this.options=this.fuse.search(e))},proceed:function(){var e={};e.query=this.search,e.flag=2,this.$emit("getQuery"),this.$emit("choosedQuery",e)},proceedContinue:function(){this.$emit("getMessage")},widthChange:function(){this.containSearch=this.search,this.containLink="",this.widthLink=0,this.widthSearch=100,this.fontsize=0,document.getElementById("select").focus()}}},v=b,w=(a("3df8"),Object(u["a"])(v,g,y,!1,null,"af89b304",null)),S=w.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{border:"#DCDFE6 solid 1.5px"}},[a("el-table",{attrs:{data:e.copydata,"empty-text":"Please choose a query",border:"","header-cell-style":{backgroundColor:"lightblue",color:"#ffff",fontWight:"500",textAlign:"center"}}},[a("el-table-column",{attrs:{prop:"round",label:"Round"}}),a("el-table-column",{attrs:{prop:"result",label:"Approximate Result","min-width":"120"}}),a("el-table-column",{attrs:{prop:"confidence interval",label:"MoE ε"}}),a("el-table-column",{attrs:{prop:"error",label:"Relative Error","min-width":"120"}}),a("el-table-column",{attrs:{prop:"confidence level-fixed",label:"Confidence Level","min-width":"110"}}),a("el-table-column",{attrs:{prop:"runtime of this round",label:"Runtime (ms)","min-width":"100"}})],1)],1)},C=[],A=(a("a9e3"),{name:"ResultsTable",props:{round:{type:Number,default:0},tableData:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{copydata:[]}},watch:{round:function(e){this.copydata=this.tableData.slice(0,e)}},methods:{}}),x=A,q=(a("92e3"),Object(u["a"])(x,k,C,!1,null,"63e657ea",null)),D=q.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.samples,(function(t){return a("el-container",{key:t.value,style:"cursor:pointer;margin-bottom:20px;height: "+e.height+"px;float:left; border: 1px solid #eee;width: "+e.wide+"%"},[a("el-container",[a("el-main",{staticStyle:{padding:"0"}},[a("el-table",{attrs:{"empty-text":"Null",data:e.candidateCopy[t.value-1],"header-cell-style":{background:"#EDCA96",color:"#ffff",textAlign:"center",cursor:"default",height:"30px",fontSize:"14px"}},on:{"row-click":e.clickData}},[a("el-table-column",{attrs:{prop:"sampleName",label:"round:"+t.value+":"+Object.keys(e.candidateCopy[t.value-1]).length+"samples"}})],1)],1)],1)],1)})),a("el-table",{style:"border:#DCDFE6 solid 1.5px;height:"+e.height+"px;width:"+e.wideSample+"%;",attrs:{data:e.selectsample,"header-cell-style":{background:"#F4B0B0",color:"#fff",align:"center"}}},[a("el-table-column",{attrs:{prop:"samplename",label:"Sample Name","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"visitprobality",label:"Visiting Probability","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"semanticsimilarities",label:"Semantic Similarity","show-overflow-tooltip":!0}})],1)],2)},j=[],P={name:"CandidateAnswers",props:{candidateAnswers:{type:Array,default:function(){return[]}},options:{type:Array,default:function(){return[]}},round:{type:Number,default:0}},data:function(){return{currentround:1,copyArray:this.options,samples:[],candidateCopy:[],wide:51,wideSample:0,height:0,selectsample:[{samplename:"",visitprobality:"",semanticsimilarities:""}]}},watch:{round:function(e){this.height=150,this.wideSample=49,this.currentround=e,this.wide=0!=e?51/e:0,this.samples=this.copyArray.slice(0,this.currentround)},options:function(e){this.copyArray=e,this.selectsample[0].visitprobality="",this.selectsample[0].semanticsimilarities="",this.selectsample[0].samplename=""},wide:function(e){0==this.wide?(this.height=0,this.wideSample=0):(this.wideSample=49,this.height=150)},candidateAnswers:function(e){if(e){this.candidateCopy=[];for(var t=0;t<=Object.keys(e).length-1;t++){var a=[];if(0==t)this.candidateCopy.push(e[t]);else{for(var i=0;i<=Object.keys(e[t]).length-1;i++){for(var r=1,s=0;s<=Object.keys(e[t-1]).length-1;s++)if(e[t][i].sampleName===e[t-1][s].sampleName){r=0;break}1==r&&a.push(e[t][i])}a||a.push({sampleName:"",visitprobality:"",semanticsimilarities:""}),this.candidateCopy.push(a)}}}}},methods:{clickData:function(e){this.selectsample[0].visitprobality=e.visitprobality,this.selectsample[0].semanticsimilarities=e.semanticsimilarities,this.selectsample[0].samplename=e.sampleName,this.$emit("getSelectedSample",this.selectsample[0])}}},O=P,E=(a("96c7"),Object(u["a"])(O,_,j,!1,null,"28cd7205",null)),M=E.exports,z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"network",staticStyle:{width:"100%",height:"300px",border:"1px solid #ccc"},attrs:{id:"query-graph"}})])}],Q=a("5530"),N=(a("b0c0"),a("53ca")),I=(a("d9e2"),{autoResize:!0,nodes:{shape:"ellipse",size:18,shadow:!1,font:{size:12,color:"black",align:"center"},color:{border:"transparent",background:"#eee",highlight:{border:"rgb(117, 218, 167)",background:"rgb(117, 218, 167)"},hover:{border:"#dff9fb",background:"#88dab1"}},margin:5,widthConstraint:100,borderWidth:1,borderWidthSelected:3},edges:{width:1,color:{color:"#848499",highlight:"rgb(117, 218, 167)",hover:"#88dab1",inherit:"from",opacity:1},font:{color:"#343434",size:12,face:"arial",background:"none",strokeWidth:2,strokeColor:"#ffffff",align:"horizontal",multi:!1,vadjust:0,bold:{color:"#343434",size:12,face:"arial",vadjust:0,mod:"bold"},ital:{color:"#343434",size:12,face:"arial",vadjust:0,mod:"italic"},boldital:{color:"#343434",size:12,face:"arial",vadjust:0,mod:"bold italic"},mono:{color:"#343434",size:12,face:"courier new",vadjust:2,mod:""}},shadow:!1,smooth:{enabled:!0},arrows:{to:!0}},physics:{stabilization:!0,enabled:!0,barnesHut:{gravitationalConstant:-12e3,centralGravity:.2,springLength:120,springConstant:.04,damping:.09,avoidOverlap:0}},interaction:{dragNodes:!0,dragView:!0,hideEdgesOnDrag:!1,hideNodesOnDrag:!1,hover:!1,hoverConnectedEdges:!0,keyboard:{enabled:!0,speed:{x:10,y:10,zoom:.05},bindToWindow:!0},multiselect:!1,navigationButtons:!0,selectable:!0,selectConnectedEdges:!0,tooltipDelay:300,zoomView:!0}});function L(e){if(!e&&"object"!==Object(N["a"])(e))throw new Error("error arguments","deepClone");var t=e.constructor===Array?[]:{};return Object.keys(e).forEach((function(a){e[a]&&"object"===Object(N["a"])(e[a])?t[a]=L(e[a]):t[a]=e[a]})),t}function $(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}var G=a("f05c"),B=a.n(G),R={name:"QueryGraph",props:{graphData:{type:Array,default:function(){return[]}},selectedSample:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:!1,nodes:[],edges:[],container:null,nodesArray:[],edgesArray:[],originArray:[],options:I,data:{},sampleMapId:{},idCount:1,valueCount:1,pathLimit:150,selectedPath:[],selectedPathHistory:[]}},watch:{selectedSample:function(e){for(var t=[],a=[],i=0;i<this.originArray.length;i++)if(this.originArray[i].path[0]===e){0!==this.selectedPath.length&&(this.selectedPathHistory=this.selectedPath),this.selectedPath=this.originArray[i].path;for(var r=0,s=0;s<this.selectedPath.length;s++)r%2===0&&t.push(this.sampleMapId[this.selectedPath[s]]),r++;r=0;for(var n=0;n<this.selectedPathHistory.length;n++)r%2===0&&a.push(this.sampleMapId[this.selectedPathHistory[n]]),r++;break}var o=t.length,l=$(0,360),h=l*Math.PI/180,d=141.4,c=d*Math.cos(h),u=d*Math.sin(h);this.updateNodeColor(t[0],"#00b050",o*c,o*u,!0);for(var p=1;p<t.length-1;p++)this.updateNodeColor(t[p],"#00b050",(o-p)*c,(o-p)*u,!0),this.updateEdgeColor(this.findPathId(t[p],t[p-1]),"#0070c0",5);if(this.updateEdgeColor(this.findPathId(t[t.length-1],t[t.length-2]),"#0070c0",5),0!==a.length){this.updateNodeColor(a[0],"#eee",void 0,void 0,!1);for(var f=1;f<a.length-1;f++)this.updateNodeColor(a[f],"#eee",void 0,void 0,!1),this.updateEdgeColor(this.findPathId(a[f],a[f-1]),"#848499",1);this.updateEdgeColor(this.findPathId(a[a.length-1],a[a.length-2]),"#848499",1)}},graphData:function(e){var t=this;this.originArray=e,this.nodesArray=[],this.edgesArray=[],this.sampleMapId={},this.idCount=1,e.forEach((function(e){for(var a=e.path,i=1,r=0;r<a.length;r++){var s=a[r];void 0===t.sampleMapId[s]&&i%2===1&&(t.sampleMapId[s]=t.idCount,t.nodesArray.push({id:t.idCount,name:s}),t.idCount++),i++}i=1;for(var n=0;n<a.length;n++)i%2===0&&function(){var e=t.sampleMapId[a[n-1]],i=t.sampleMapId[a[n+1]];if(0===t.edgesArray.length)t.edgesArray.push({from:i,to:e,width:1,id:t.valueCount,label:a[n]}),t.valueCount++;else{for(var r=!0,s=0;s<t.edgesArray.length;s++)if(e===t.edgesArray[s].to&&i===t.edgesArray[s].from){r=!1;break}r&&(t.edgesArray.push({from:i,to:e,width:1,id:t.valueCount,label:a[n]}),t.valueCount++,n===a.length-2&&t.nodesArray.forEach((function(e){e.id===i&&(e.color="#c00000")})))}}(),i++})),this.reinitialize()}},mounted:function(){this.reinitialize()},methods:{findPathId:function(e,t){for(var a=0;a<this.edgesArray.length;a++)if(this.edgesArray[a].from===e&&this.edgesArray[a].to===t)return this.edgesArray[a].id},updateNodeColor:function(e,t,a,i,r){var s=this.nodes.get(e);s.color=t,s.physics=!r,s.x=void 0!==a?a:void 0,s.y=void 0!==i?i:void 0,this.nodes.update(s)},updateEdgeColor:function(e,t,a){var i=this.edges.get(e);i.color=t,i.width=a,this.edges.update(i)},dataCut:function(e,t){if(e.length<=t)return e;this.$message.warning("There are too many paths, and some paths have been cut out for better display.");for(var a=[],i=0;i<t;i++)a.push(e[i]);return a},reinitialize:function(){this.nodes=new B.a.DataSet([]),this.edges=new B.a.DataSet([]),this.init(this.nodes,this.edges),this.network.moveTo({scale:.25});var e={nodes:this.nodesArray,edges:this.edgesArray};this.addNetworkParams(e)},init:function(e,t){this.container=document.getElementById("query-graph"),this.data={nodes:e,edges:t},this.network=new B.a.Network(this.container,this.data,this.options)},addNetworkParams:function(e){for(var t=0;t<e.nodes.length;t++){var a=e.nodes[t];this.nodes.add(Object(Q["a"])({label:a.name},a))}for(var i=0;i<e.edges.length;i++){var r=e.edges[i];this.edges.add(Object(Q["a"])({},r))}}}},T=R,W=(a("100e"),Object(u["a"])(T,z,H,!1,null,"7c532d92",null)),F=W.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},J=[],U={name:"ControlButtons"},Z=U,K=Object(u["a"])(Z,V,J,!1,null,"0d6f165e",null),X=K.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"mini-query-graph"}},[a("div",{staticClass:"network cancel",staticStyle:{width:"290px",height:"38px",border:"1px solid #ccc",color:"#ffff"},attrs:{id:"query-graph-mini"}})])}],te={name:"miniQueryGraph",props:{graphData:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,nodes:[],edges:[],container:null,nodesArray:[],edgesArray:[],options:I}},watch:{graphData:function(e){this.edgesArray=[],this.nodesArray=[],this.nodesArray=[{id:1,name:e[2],color:"#FFC1C1",x:-100,y:0},{id:2,name:e[0],color:"#FFD39B",x:100,y:0}],this.edgesArray.push({from:1,to:2,label:e[1],color:"#0070c0"}),this.reinitialize()}},mounted:function(){this.reinitialize()},methods:{reinitialize:function(){this.nodes=new B.a.DataSet([]),this.edges=new B.a.DataSet([]),this.init(this.nodes,this.edges),this.network.moveTo({scale:.85});var e={nodes:this.nodesArray,edges:this.edgesArray};this.addNetworkParams(e)},init:function(e,t){this.container=document.getElementById("query-graph-mini"),this.data={nodes:e,edges:t},this.network=new B.a.Network(this.container,this.data,this.options)},addNetworkParams:function(e){for(var t=0;t<e.nodes.length;t++){var a=e.nodes[t];this.nodes.add(Object(Q["a"])({label:a.name},a))}for(var i=0;i<e.edges.length;i++){var r=e.edges[i];this.edges.add(Object(Q["a"])({},r))}}}},ae=te,ie=(a("0a6a"),Object(u["a"])(ae,Y,ee,!1,null,"6c9fb1bd",null)),re=ie.exports,se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"network",staticStyle:{width:"100%",height:"350px",border:"1px solid #ccc"},attrs:{id:"query-graph-large"}})])}],oe={name:"LargeQueryGraph",props:{graphData:{type:Array,default:function(){return[]}},selectedSample:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:!1,nodes:[],edges:[],container:null,nodesArray:[],edgesArray:[],options:I,tags:[]}},watch:{graphData:function(e){this.edgesArray=[],this.nodesArray=[],this.tags=[];for(var t=0;t<e.length&&t<100;t++){var a=e[t][0],i=e[t][1];-1===this.tags.indexOf(a)&&(this.tags.push(a),this.nodesArray.push({id:a,name:e[t][2]})),-1===this.tags.indexOf(i)&&(this.tags.push(i),this.nodesArray.push({id:i,name:e[t][4]})),this.edgesArray.push({from:a,to:i,label:e[t][3]})}console.log(),this.reinitialize()}},mounted:function(){this.reinitialize()},methods:{reinitialize:function(){this.nodes=new B.a.DataSet([]),this.edges=new B.a.DataSet([]),this.init(this.nodes,this.edges),this.network.moveTo({scale:.25});var e={nodes:this.nodesArray,edges:this.edgesArray};this.addNetworkParams(e)},init:function(e,t){this.container=document.getElementById("query-graph-large"),this.data={nodes:e,edges:t},this.network=new B.a.Network(this.container,this.data,this.options)},addNetworkParams:function(e){for(var t=0;t<e.nodes.length;t++){var a=e.nodes[t];this.nodes.add(Object(Q["a"])({label:a.name},a))}for(var i=0;i<e.edges.length;i++){var r=e.edges[i];this.edges.add(Object(Q["a"])({},r))}}}},le=oe,he=(a("1b2a"),Object(u["a"])(le,se,ne,!1,null,"6eae9a5f",null)),de=he.exports,ce=[{query:"How many astronaut from Russia"},{query:"How many films in Danish"},{query:"How many politicians in Methodism"},{query:"How many soccerclubs in Spain"},{query:"How many software has been developed by organizations founded in California"},{query:"How many books written by Danielle Steel"},{query:"How many companies in Munich"},{query:"How many companies in the advertising industry"},{query:"How many films produced by Hal Roach"},{query:"What’s the average 0-100 accelerate of cars that produced in Germany"},{query:"What’s the average height of basketball player from United_States"},{query:"What’s the average height of soccer player from Spain"},{query:"What’s the average oil consumption of cars that produced in Germany"},{query:"What’s the average value of soccer player from Spain"},{query:"What’s the average weight of basketball player from United_States"}],ue=ce,pe=a("bc3a"),fe=a.n(pe),ge=a("5c96"),ye=a.n(ge),me={name:"LayOut",components:{SideBar:f,HeadSearcher:S,ResultsTable:D,CandidateAnswers:M,QueryGraph:F,ControlButtons:X,miniQueryGraph:re,largeQueryGraph:de},data:function(){return{sampleQueries:ue,candidateAnswers:[],queryData:{},graphData:[],tableData:[],round:0,maxRound:0,options:[],query:"",click:0,selectedSample:"",predicate:"",largeGraph:[]}},mounted:function(){},methods:{dataProcess:function(e){if(Object.keys(e).length-1===0)return e;for(var t=Object.keys(e),a=2;a<=t.length-1;a++){for(var i=L(e[a].queryPath),r=L(e[a-1].queryPath),s=i.length,n=r.length,o=void 0,l=void 0,h=0;h<s;h++){o=i[h].path;for(var d=!0,c=0;c<n;c++)if(l=r[c].path,o.toString()===l.toString()){d=!1;break}d&&r.push(i[h])}e[a].queryPath=r}return e},getSelectedSample:function(e){this.selectedSample=e.samplename},choosedQuery:function(e){var t=this;this.click=1,this.query=e.query,fe.a.get("./data/"+e.query+".json").then((function(a){a=a.data,t.predicate=a.predicate,t.queryData=a,t.queryData=t.dataProcess(t.queryData),t.maxRound=Object.keys(t.queryData).length-1,1===e.flag?t.round=0:2===e.flag&&(t.round=1),t.tableData=[],t.candidateAnswers=[],t.graphData=[],t.tableData=[],t.options=[],t.initTableData(),t.initGraphData(),t.initCandidateAnswers()})),fe.a.get("./data/"+e.query+" graph.json").then((function(e){t.largeGraph=e["data"].edges}))},getQuery:function(){0!==this.click?this.round>=1||(this.round=1,this.initTableData(),this.initGraphData(),this.initCandidateAnswers()):ge["Message"].error("Please choose a query")},getMessage:function(){0!==this.click?this.round>=this.maxRound?ge["Message"].error("Reaches the maximum number of iterations"):(this.round++,this.initTableData(),this.initGraphData()):ge["Message"].error("Please choose a query")},initTableData:function(){if(0!==this.round){var e={};e["round"]=this.round,e["confidence interval"]=this.queryData[this.round]["MoE"],e["confidence level-fixed"]=this.queryData[this.round]["confidence level-fixed"],e["error"]=this.queryData[this.round]["error"],e["result"]=this.queryData[this.round]["result"],e["runtime of this round"]=this.queryData[this.round]["runtime of this round"],this.tableData.push(e),this.graphData=this.queryData[this.round]}},initGraphData:function(){0!==this.round&&(this.graphData=this.queryData[this.round]["queryPath"])},initCandidateAnswers:function(){var e=this;this.candidateAnswers=[];for(var t=function(t){e.options.push({label:"round "+t,value:t});var a=[];e.queryData[t]["queryPath"].forEach((function(e){a.push({sampleName:e.path[0],visitprobality:e["visit probality"],semanticsimilarities:e["semantic similarities"]})})),e.candidateAnswers.push(a)},a=1;a<=this.maxRound;a++)t(a)}}},be=me,ve=(a("571c"),Object(u["a"])(be,n,o,!1,null,"2bde6004",null)),we=ve.exports,Se={name:"App",components:{LayOut:we}},ke=Se,Ce=Object(u["a"])(ke,r,s,!1,null,null,null),Ae=Ce.exports;a("f5df1"),a("0fae"),a("b20f"),a("e570");i["default"].config.productionTip=!1,i["default"].use(ye.a),new i["default"]({render:function(e){return e(Ae)}}).$mount("#app")},"571c":function(e,t,a){"use strict";a("79a0")},"79a0":function(e,t,a){},"84aa":function(e,t,a){},"88f4":function(e,t,a){},"92e3":function(e,t,a){"use strict";a("c3ee")},"96c7":function(e,t,a){"use strict";a("b1ca")},a0f2:function(e,t,a){},b1ca:function(e,t,a){},b20f:function(e,t,a){e.exports={blue:"#324157","light-blue":"#3A71A8",sideBarWidth:"30%",sideBarHeight:"85%"}},ba18:function(e,t,a){},c3ee:function(e,t,a){}});
//# sourceMappingURL=app.24eed261.js.map