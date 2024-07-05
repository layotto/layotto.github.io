"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[3253],{8553:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>p,toc:()=>o});var s=i(4848),r=i(8453);const t={},a="Layotto Pub/Sub\u3001\u517c\u5bb9Dapr\u5305\u65b9\u6848",p={id:"design/pubsub/pubsub-api-and-compability-with-dapr-component",title:"Layotto Pub/Sub\u3001\u517c\u5bb9Dapr\u5305\u65b9\u6848",description:"1. \u652f\u6301Pub/Sub API",source:"@site/docs/design/pubsub/pubsub-api-and-compability-with-dapr-component.md",sourceDirName:"design/pubsub",slug:"/design/pubsub/pubsub-api-and-compability-with-dapr-component",permalink:"/docs/design/pubsub/pubsub-api-and-compability-with-dapr-component",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/design/pubsub/pubsub-api-and-compability-with-dapr-component.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u4f7f\u7528ctripcorp/apollo\u5b9e\u73b0Configuration API",permalink:"/docs/design/configuration/configuration-api-with-apollo"},next:{title:"RPC \u8bbe\u8ba1\u6587\u6863",permalink:"/docs/design/rpc/rpc_design_document"}},d={},o=[{value:"2.1. \u6574\u4f53\u67b6\u6784\uff1a\u662f\u5426\u590d\u7528Dapr\u7684sdk\u548cproto",id:"21-\u6574\u4f53\u67b6\u6784\u662f\u5426\u590d\u7528dapr\u7684sdk\u548cproto",level:2},{value:"\u9762\u4e34\u7684\u95ee\u9898",id:"\u9762\u4e34\u7684\u95ee\u9898",level:3},{value:"\u65b9\u6848",id:"\u65b9\u6848",level:3},{value:"\u4e0d\u590d\u7528sdk\u548cproto\uff1b\u628aproto\u6587\u4ef6\u5265\u79bb\uff0c\u8def\u5f84\u4e2d\u7acb",id:"\u4e0d\u590d\u7528sdk\u548cproto\u628aproto\u6587\u4ef6\u5265\u79bb\u8def\u5f84\u4e2d\u7acb",level:4},{value:"2.2. API Design",id:"22-api-design",level:2},{value:"2.2.1. \u8bbe\u8ba1\u539f\u5219\uff1a\u60f3\u7ed9Dapr API\u65b0\u589e\u5b57\u6bb5\u65f6\u5982\u4f55\u5904\u7406",id:"221-\u8bbe\u8ba1\u539f\u5219\u60f3\u7ed9dapr-api\u65b0\u589e\u5b57\u6bb5\u65f6\u5982\u4f55\u5904\u7406",level:3},{value:"A. \u53ea\u8981API\u505a\u53d8\u66f4\u3001\u548cDapr\u4e0d\u4e00\u6837\uff0c\u5c31\u65b0\u5f00\u4e2a\u65b9\u6cd5\u540d",id:"a-\u53ea\u8981api\u505a\u53d8\u66f4\u548cdapr\u4e0d\u4e00\u6837\u5c31\u65b0\u5f00\u4e2a\u65b9\u6cd5\u540d",level:4},{value:"B. \u65b0\u52a0\u5b57\u6bb5\u8fd8\u7528\u8001\u65b9\u6cd5\u540d\uff0c\u4f46\u662f\u8df3\u51e0\u4e2a\u6570\u5b57\u3001\u7559\u767d",id:"b-\u65b0\u52a0\u5b57\u6bb5\u8fd8\u7528\u8001\u65b9\u6cd5\u540d\u4f46\u662f\u8df3\u51e0\u4e2a\u6570\u5b57\u7559\u767d",level:4},{value:"C. \u52a0\u5b57\u6bb5\u5c31\u76f4\u63a5\u52a0\uff0c\u4e0d\u7559\u767d\uff0c\u51b2\u7a81\u5c31\u51b2\u7a81\u4e86\uff08\u5f53\u7136\u4f1a\u5c3d\u91cf\u7ed9Dapr\u793e\u533a\u63d0issue\uff09",id:"c-\u52a0\u5b57\u6bb5\u5c31\u76f4\u63a5\u52a0\u4e0d\u7559\u767d\u51b2\u7a81\u5c31\u51b2\u7a81\u4e86\u5f53\u7136\u4f1a\u5c3d\u91cf\u7ed9dapr\u793e\u533a\u63d0issue",level:4},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:4},{value:"2.2.2. Between APP and Layotto",id:"222-between-app-and-layotto",level:3},{value:"2.2.3. Between Layotto and Component",id:"223-between-layotto-and-component",level:3},{value:"2.2.4. sidecar\u600e\u4e48\u77e5\u9053\u56de\u8c03\u54ea\u4e2a\u7aef\u53e3",id:"224-sidecar\u600e\u4e48\u77e5\u9053\u56de\u8c03\u54ea\u4e2a\u7aef\u53e3",level:3},{value:"2.2.5. \u600e\u4e48\u4fdd\u6301\u8ba2\u9605topic\u5217\u8868\u7684\u5b9e\u65f6\u6027",id:"225-\u600e\u4e48\u4fdd\u6301\u8ba2\u9605topic\u5217\u8868\u7684\u5b9e\u65f6\u6027",level:3},{value:"2.2.6. \u8ba2\u9605\u5173\u7cfb\u662f\u5426\u652f\u6301\u58f0\u660e\u5f0f\u914d\u7f6e",id:"226-\u8ba2\u9605\u5173\u7cfb\u662f\u5426\u652f\u6301\u58f0\u660e\u5f0f\u914d\u7f6e",level:3},{value:"2.3. Config Design",id:"23-config-design",level:2},{value:"A Bigger Control Plane",id:"a-bigger-control-plane",level:2},{value:"\u8ba2\u9605\u5173\u7cfb\u652f\u6301\u914d\u7f6e",id:"\u8ba2\u9605\u5173\u7cfb\u652f\u6301\u914d\u7f6e",level:2},{value:"appcallback \u652f\u6301tls",id:"appcallback-\u652f\u6301tls",level:2},{value:"\u5206\u79bb\u7ec4\u4ef6\u914d\u7f6e\u548c\u4e2a\u6027\u914d\u7f6e(\u56de\u8c03\u7aef\u53e3,app-id)",id:"\u5206\u79bb\u7ec4\u4ef6\u914d\u7f6e\u548c\u4e2a\u6027\u914d\u7f6e\u56de\u8c03\u7aef\u53e3app-id",level:2},{value:"Tracing",id:"tracing",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"layotto-pubsub\u517c\u5bb9dapr\u5305\u65b9\u6848",children:"Layotto Pub/Sub\u3001\u517c\u5bb9Dapr\u5305\u65b9\u6848"}),"\n",(0,s.jsx)(n.h1,{id:"\u4e00\u9700\u6c42\u5206\u6790",children:"\u4e00\u3001\u9700\u6c42\u5206\u6790"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u652f\u6301Pub/Sub API"}),"\n",(0,s.jsx)(n.li,{children:"\u67b6\u6784\u4e0a\u5c3d\u91cf\u80fd\u590d\u7528Dapr\u7684\u5305"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"\u4e8c\u6982\u8981\u8bbe\u8ba1",children:"\u4e8c\u3001\u6982\u8981\u8bbe\u8ba1"}),"\n",(0,s.jsx)(n.h2,{id:"21-\u6574\u4f53\u67b6\u6784\u662f\u5426\u590d\u7528dapr\u7684sdk\u548cproto",children:"2.1. \u6574\u4f53\u67b6\u6784\uff1a\u662f\u5426\u590d\u7528Dapr\u7684sdk\u548cproto"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u5c06\u6765\u80fd\u591f\u548cDapr\u3001Envoy\u793e\u533a\u5171\u540c\u5236\u5b9a\u4e00\u5957API spec\uff0c\u5f53\u524d\u5c3d\u91cf\u548cDapr API\u4fdd\u6301\u4e00\u81f4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Dapr\u7684\u7ec4\u4ef6\u5e93\u53ef\u4ee5\u76f4\u63a5\u590d\u7528\uff1b\u4e0b\u6587\u8ba8\u8bbasdk\u548cproto\u662f\u5426\u590d\u7528\u3001\u600e\u4e48\u590d\u7528"}),"\n",(0,s.jsx)(n.h3,{id:"\u9762\u4e34\u7684\u95ee\u9898",children:"\u9762\u4e34\u7684\u95ee\u9898"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["dapr\u7684sdk\u5199\u6b7b\u4e86\u8c03\u7528\u63a5\u53e3\u7684\u5305\u540d\uff0c\u540d\u5b57\u91cc\u6709dapr\n",(0,s.jsx)(n.img,{alt:"img.png",src:i(6776).A+"",width:"2326",height:"428"})]}),"\n",(0,s.jsx)(n.li,{children:"\u6211\u4eec\u4f1a\u6709\u5dee\u5f02\u5316\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u65b0\u5b57\u6bb5\u3001\u65b0API\uff0c\u5982\u679c\u76f4\u63a5\u4f7f\u7528 dapr.proto\u4f1a\u4e0d\u7075\u6d3b"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u65b9\u6848",children:"\u65b9\u6848"}),"\n",(0,s.jsx)(n.h4,{id:"\u4e0d\u590d\u7528sdk\u548cproto\u628aproto\u6587\u4ef6\u5265\u79bb\u8def\u5f84\u4e2d\u7acb",children:"\u4e0d\u590d\u7528sdk\u548cproto\uff1b\u628aproto\u6587\u4ef6\u5265\u79bb\uff0c\u8def\u5f84\u4e2d\u7acb"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img_1.png",src:i(80).A+"",width:"625",height:"500"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u81ea\u5df1\u5148\u5b9a\u4e49\u4e2aapi-spec.proto\uff0c\u8fd9\u4e2aproto\u662fdapr API\u7684\u8d85\u96c6\uff0c\u5e76\u4e14\u8def\u5f84\u540d\u4e2d\u7acb\u3001\u6ca1\u6709layotto\u5b57\u6837\uff0c\u57fa\u4e8e\u8fd9\u4e2aproto\u81ea\u5df1\u5f00\u53d1\u4e2a\u4e2d\u7acb\u7684RuntimeAPI sdk\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u540e\u9762\u5c1d\u8bd5\u628aproto\u63a8\u5e7f\u6210\u793e\u533a\u8ba4\u53ef\u7684api-spec\uff0c\u6216\u8005\u548c\u5176\u4ed6\u793e\u533a\u4e00\u8d77\u91cd\u65b0\u5efa\u4e00\u4e2a\u8def\u5f84\u4e2d\u7acb\u7684api-spec.proto\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u63a8\u5e7f\u8fc7\u7a0b\u4e2dproto\u6709\u53d8\u4e5f\u4e0d\u8981\u7d27\uff0cLayotto\u5185\u90e8\u5728proto\u4e0b\u9762\u62bd\u4e00\u5c42API\u5c42\uff0c\u9632\u6b62proto\u53d8\u5316\uff1b"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u597d\u63a8\u7684\u8bdd\uff0c\u77ed\u671f\u6211\u4eec\u53ef\u4ee5\u5148\u5728\u4e2d\u7acbsdk\u91cc\u5199\u4e2adapr\u9002\u914d\u5668\uff0c\u7528\u6211\u4eec\u7684sdk\u65e2\u80fd\u8c03dapr\u53c8\u80fd\u7528layotto\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img_2.png",src:i(1371).A+"",width:"643",height:"416"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f18\u70b9\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6574\u6d01\u3002\u5982\u679c\u8981\u590d\u7528Dapr\u7684sdk\u548cproto\uff0c\u6709\u4e2a\u4e0d\u53ef\u907f\u514d\u7684\u95ee\u9898\uff1a\u5f53API\u548cdapr\u4e0d\u4e00\u6837\u7684\u65f6\u5019\uff0c\u9700\u8981\u81ea\u5df1\u5c01\u88c5\u4e00\u5c42\u505a\u81ea\u5df1\u7684\u903b\u8f91\uff0c\u8fd9\u4f1a\u5e26\u6765\u590d\u6742\u5ea6\u3001hacky\u3001\u5c71\u5be8\u611f\u3001\u63d0\u9ad8\u4ee3\u7801\u9605\u8bfb\u95e8\u69db"}),"\n",(0,s.jsx)(n.li,{children:"API\u548cDapr\u4e0d\u4e00\u6837\u7684\u65f6\u5019\u597d\u6269\u5c55"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7f3a\u70b9\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u540e\u7eedDapr client\u6216\u8005proto\u6539\u4e86\uff0c\u6211\u4eec\u53ef\u80fd\u4e0d\u77e5\u9053\uff0c\u5bfc\u81f4\u4e0d\u4e00\u81f4"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"22-api-design",children:"2.2. API Design"}),"\n",(0,s.jsx)(n.h3,{id:"221-\u8bbe\u8ba1\u539f\u5219\u60f3\u7ed9dapr-api\u65b0\u589e\u5b57\u6bb5\u65f6\u5982\u4f55\u5904\u7406",children:"2.2.1. \u8bbe\u8ba1\u539f\u5219\uff1a\u60f3\u7ed9Dapr API\u65b0\u589e\u5b57\u6bb5\u65f6\u5982\u4f55\u5904\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u8981\u590d\u7528Dapr API\uff0c\u4f46\u662f\u957f\u671f\u6765\u770b\u80af\u5b9a\u4f1a\u6709\u5b9a\u5236\u9700\u6c42\u3002\u5f53\u6211\u4eec\u7684API\u548cdapr\u4e0d\u4e00\u6837\u7684\u65f6\u5019\uff08\u6bd4\u5982\u53ea\u662f\u60f3\u7ed9Dapr\u7684\u67d0\u4e2aAPI\u65b0\u52a0\u4e2a\u5b57\u6bb5\uff09\uff0c\u662f\u65b0\u5f00\u4e2a\u65b9\u6cd5\u540d\uff0c\u8fd8\u662f\u5728\u539f\u6765\u7684\u65b9\u6cd5\u4e0a\u52a0\u4e2a\u5b57\u6bb5?\n\u5982\u679c\u5728\u539f\u6765\u7684\u65b9\u6cd5\u4e0a\u52a0\u4e2a\u5b57\u6bb5\uff0c\u53ef\u80fd\u5bfc\u81f4\u5b57\u6bb5\u51b2\u7a81\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4ee5\u4e0b\u51e0\u79cd\u601d\u8def\uff1a"}),"\n",(0,s.jsx)(n.h4,{id:"a-\u53ea\u8981api\u505a\u53d8\u66f4\u548cdapr\u4e0d\u4e00\u6837\u5c31\u65b0\u5f00\u4e2a\u65b9\u6cd5\u540d",children:"A. \u53ea\u8981API\u505a\u53d8\u66f4\u3001\u548cDapr\u4e0d\u4e00\u6837\uff0c\u5c31\u65b0\u5f00\u4e2a\u65b9\u6cd5\u540d"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img_3.png",src:i(242).A+"",width:"284",height:"284"})}),"\n",(0,s.jsxs)(n.p,{children:["\u65b0\u5f00\u65b9\u6cd5\u540d\u540e\uff0c\u65b0\u8001\u65b9\u6cd5\u90fd\u5f97\u652f\u6301\u3002",(0,s.jsx)(n.strong,{children:"\u6bd4\u5982v1\u7248\u662fDapr API\u7248\uff0cv2\u7248\u662f\u6269\u5c55\u7248\u672c"})]}),"\n",(0,s.jsx)(n.p,{children:"\u7f3a\u70b9\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8981\u652f\u6301\u4e24\u5957API"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"b-\u65b0\u52a0\u5b57\u6bb5\u8fd8\u7528\u8001\u65b9\u6cd5\u540d\u4f46\u662f\u8df3\u51e0\u4e2a\u6570\u5b57\u7559\u767d",children:"B. \u65b0\u52a0\u5b57\u6bb5\u8fd8\u7528\u8001\u65b9\u6cd5\u540d\uff0c\u4f46\u662f\u8df3\u51e0\u4e2a\u6570\u5b57\u3001\u7559\u767d"}),"\n",(0,s.jsx)(n.p,{children:"\u7f3a\u70b9\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7559\u767d\u610f\u4e49\u4e0d\u5927\uff1f\u5047\u5982Dapr\u540e\u6765\u52a0\u4e0a\u4e86\u8fd9\u5b57\u6bb5\u3001\u4f46\u662f\u6570\u5b57\u4e0d\u4e00\u6837\uff0c\u6211\u4eec\u5c31\u5f88\u96be\u529e(\u6bd4\u5982\u6211\u4eec\u5b9a\u4e49\u4e3a10\uff0cdapr\u968f\u540e\u5b9a\u4e49\u4e3a5\uff0c\u90a3\u6211\u4eec\u662f\u6709\u4e00\u4e2a\u5b57\u6bb5\u540c\u65f6\u5360\u77405\u548c10\uff1f\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u5047\u5982Dapr\u52a0\u4e0a\u4e86\u4e00\u4e2a\u8bed\u4e49\u7c7b\u4f3c\u3001\u4f46\u662f\u6709\u7ec6\u5fae\u4e0d\u540c\u7684\u5b57\u6bb5\uff0c\u6211\u4eec\u4e5f\u5f88\u96be\u529e\uff1a\u8fd9\u4e2a\u5b57\u6bb5\u6211\u4eec\u52a0\u4e0d\u52a0\uff1f"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"c-\u52a0\u5b57\u6bb5\u5c31\u76f4\u63a5\u52a0\u4e0d\u7559\u767d\u51b2\u7a81\u5c31\u51b2\u7a81\u4e86\u5f53\u7136\u4f1a\u5c3d\u91cf\u7ed9dapr\u793e\u533a\u63d0issue",children:"C. \u52a0\u5b57\u6bb5\u5c31\u76f4\u63a5\u52a0\uff0c\u4e0d\u7559\u767d\uff0c\u51b2\u7a81\u5c31\u51b2\u7a81\u4e86\uff08\u5f53\u7136\u4f1a\u5c3d\u91cf\u7ed9Dapr\u793e\u533a\u63d0issue\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u540e\u5927\u5bb6\u771f\u7684\u5750\u5230\u4e00\u8d77\u8fbe\u6210\u5171\u8bc6\u3001\u8981\u505aapi-spec\u7684\u65f6\u5019\uff0c\u4f1a\u65b0\u8d77\u4e2a\u8def\u5f84\u7684proto\uff0c\u53cd\u6b63\u5230\u65f6\u5019\u6709\u65b0proto\uff0c\u4e0d\u7528\u62c5\u5fc3\u73b0\u5728\u7684\u51b2\u7a81"}),"\n",(0,s.jsx)(n.h4,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba8\u8bba\u51b3\u5b9a\u91c7\u7528C\u7684\u601d\u8def\u505a"}),"\n",(0,s.jsx)(n.h3,{id:"222-between-app-and-layotto",children:"2.2.2. Between APP and Layotto"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u548cDapr\u4e00\u6837\u7684grpc API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:"service AppCallback {\n  // Lists all topics subscribed by this app.\n  rpc ListTopicSubscriptions(google.protobuf.Empty) returns (ListTopicSubscriptionsResponse) {}\n\n  // Subscribes events from Pubsub\n  rpc OnTopicEvent(TopicEventRequest) returns (TopicEventResponse) {}\n\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:"service Dapr {\n  // Publishes events to the specific topic.\n  rpc PublishEvent(PublishEventRequest) returns (google.protobuf.Empty) {}\n}\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"223-between-layotto-and-component",children:"2.2.3. Between Layotto and Component"}),"\n",(0,s.jsxs)(n.p,{children:["\u7528\u548cDapr\u4e00\u6837\u7684\uff1b\nPublishRequest.Data\u548cNewMessage.Data\u91cc\u9762\u653e\u7b26\u5408CloudEvent 1.0\u89c4\u8303\u7684json\u6570\u636e\uff08\u80fd\u53cd\u5e8f\u5217\u5316\u653e\u8fdbmap[string]interface"," \uff09"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// PubSub is the interface for message buses\ntype PubSub interface {\n\tInit(metadata Metadata) error\n\tFeatures() []Feature\n\tPublish(req *PublishRequest) error\n\tSubscribe(req SubscribeRequest, handler func(msg *NewMessage) error) error\n\tClose() error\n}\n\n// PublishRequest is the request to publish a message\ntype PublishRequest struct {\n\tData       []byte            `json:"data"`\n\tPubsubName string            `json:"pubsubname"`\n\tTopic      string            `json:"topic"`\n\tMetadata   map[string]string `json:"metadata"`\n}\n\n\n// NewMessage is an event arriving from a message bus instance\ntype NewMessage struct {\n\tData     []byte            `json:"data"`\n\tTopic    string            `json:"topic"`\n\tMetadata map[string]string `json:"metadata"`\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"224-sidecar\u600e\u4e48\u77e5\u9053\u56de\u8c03\u54ea\u4e2a\u7aef\u53e3",children:"2.2.4. sidecar\u600e\u4e48\u77e5\u9053\u56de\u8c03\u54ea\u4e2a\u7aef\u53e3"}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u8003Dapr\uff0c\u542f\u52a8\u65f6\u914d\u7f6e\u56de\u8c03\u7aef\u53e3\u3002\u4ee3\u4ef7\u662fsidecar\u53ea\u80fd\u670d\u52a1\u4e00\u4e2a\u8fdb\u7a0b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u671f\u6682\u65f6\u9009\u62e9\u6b64\u65b9\u6848"}),"\n",(0,s.jsx)(n.h3,{id:"225-\u600e\u4e48\u4fdd\u6301\u8ba2\u9605topic\u5217\u8868\u7684\u5b9e\u65f6\u6027",children:"2.2.5. \u600e\u4e48\u4fdd\u6301\u8ba2\u9605topic\u5217\u8868\u7684\u5b9e\u65f6\u6027"}),"\n",(0,s.jsx)(n.p,{children:"sidecar\u542f\u52a8\u65f6\u8c03\u7528app\uff0c\u4e00\u6b21\u6027\u83b7\u53d6\u8ba2\u9605\u5173\u7cfb\u3002\u56e0\u6b64\u5bf9\u542f\u52a8\u987a\u5e8f\u6709\u8981\u6c42\uff0c\u5148\u542f\u52a8app\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u540e\u7eed\u53ef\u4ee5\u4f18\u5316\u6210\u5b9a\u65f6\u8f6e\u8be2app"}),"\n",(0,s.jsx)(n.h3,{id:"226-\u8ba2\u9605\u5173\u7cfb\u662f\u5426\u652f\u6301\u58f0\u660e\u5f0f\u914d\u7f6e",children:"2.2.6. \u8ba2\u9605\u5173\u7cfb\u662f\u5426\u652f\u6301\u58f0\u660e\u5f0f\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u671f\u5148\u53ea\u652f\u6301\u5f00\u63a5\u53e3callback\u7684\u5f62\u5f0f\uff0c\u540e\u7eed\u518d\u4f18\u5316\u52a0\u4e0a\u58f0\u660e\u5f0f\u914d\u7f6e"}),"\n",(0,s.jsx)(n.h2,{id:"23-config-design",children:"2.3. Config Design"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img.png",src:i(6535).A+"",width:"536",height:"420"})}),"\n",(0,s.jsx)(n.p,{children:"\u73b0\u5728\u7684app\u76f8\u5173\u914d\u7f6e\u662f\u653e\u7ec4\u4ef6\u91cc\u7684\uff0c\u540e\u9762\u8981\u63d0\u51fa\u6765\u3001\u91cd\u6784\u4e0bConfiguration API\u7b49\u4ee3\u7801\uff08\u89c1\u4e0b\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: \u600e\u4e48\u628a\u914d\u7f6e\u6570\u636e\u4f20\u7ed9Dapr\u7ec4\u4ef6\u548cLayotto\u7ec4\u4ef6"})}),"\n",(0,s.jsx)(n.p,{children:"A: \u628ametadata\u91cc\u7684\u6570\u636e\u901a\u8fc7Init\u63a5\u53e3\u900f\u4f20\u7ed9\u7ec4\u4ef6"}),"\n",(0,s.jsx)(n.h1,{id:"\u4e09future-work",children:"\u4e09\u3001Future Work"}),"\n",(0,s.jsx)(n.h2,{id:"a-bigger-control-plane",children:"A Bigger Control Plane"}),"\n",(0,s.jsx)(n.p,{children:"Service Mesh\u65f6\u4ee3\u7684Control Plane\u53ea\u670d\u52a1RPC\uff0c\u4f46Runtime API\u65f6\u4ee3\uff0c\u7ec4\u4ef6\u914d\u7f6e\u4e5f\u9700\u8981\u96c6\u7fa4\u4e0b\u53d1\uff1b\u7ec4\u4ef6\u4e5f\u9700\u8981\u670d\u52a1\u53d1\u73b0\u3001\u8def\u7531\uff0c\u56e0\u6b64\u7ec4\u4ef6\u4e5f\u9700\u8981\u6709\u81ea\u5df1\u7684Control Plane\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u597d\u80fd\u6709\u4e00\u4e2a\u6574\u5408RPC\u548c\u6240\u6709\u4e2d\u95f4\u4ef6\u914d\u7f6e\u6570\u636e\u7684Bigger Control Plane"}),"\n",(0,s.jsx)(n.p,{children:"\u4e5f\u8bb8\u9700\u8981\u6269\u5c55xDS\u534f\u8bae\uff0c\u6bd4\u5982runtime Discovery Service"}),"\n",(0,s.jsx)(n.h2,{id:"\u8ba2\u9605\u5173\u7cfb\u652f\u6301\u914d\u7f6e",children:"\u8ba2\u9605\u5173\u7cfb\u652f\u6301\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba2\u9605\u5173\u7cfb\u73b0\u5728\u662f\u9760\u56de\u8c03app\u83b7\u53d6\uff0c\u53ef\u4ee5\u52a0\u4e0a\u901a\u8fc7\u914d\u7f6e\u7684\u65b9\u5f0f\u83b7\u53d6\u8ba2\u9605\u5173\u7cfb"}),"\n",(0,s.jsx)(n.h2,{id:"appcallback-\u652f\u6301tls",children:"appcallback \u652f\u6301tls"}),"\n",(0,s.jsx)(n.h2,{id:"\u5206\u79bb\u7ec4\u4ef6\u914d\u7f6e\u548c\u4e2a\u6027\u914d\u7f6e\u56de\u8c03\u7aef\u53e3app-id",children:"\u5206\u79bb\u7ec4\u4ef6\u914d\u7f6e\u548c\u4e2a\u6027\u914d\u7f6e(\u56de\u8c03\u7aef\u53e3,app-id)"}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u7ec4\u4ef6\u914d\u7f6e\u548capp\u4e2a\u6027\u914d\u7f6e(\u56de\u8c03\u7aef\u53e3,app-id)\u653e\u5728\u4e00\u8d77\uff0c\u6709\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e0d\u597d\u505a\u96c6\u7fa4\u914d\u7f6e\u4e0b\u53d1"}),"\n",(0,s.jsx)(n.li,{children:"\u6ca1\u6cd5\u505a\u7ec4\u4ef6\u6743\u9650\u7ba1\u63a7\u914d\u7f6e(\u6bd4\u5982Dapr\u80fd\u9650\u5236app-id1\u53ea\u80fd\u8bbf\u95eetopic_id1\uff09"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img_4.png",src:i(4493).A+"",width:"827",height:"624"})}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u91cd\u6784\u4e0b\u539f\u5148\u7ec4\u4ef6\u903b\u8f91"}),"\n",(0,s.jsx)(n.h2,{id:"tracing",children:"Tracing"})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6535:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/config-1c1073af2d426d37bb76fb02f02baf3b.png"},6776:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img-d79078821c14a2ec1619eb5d6e9baa02.png"},80:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img_1-3c5a1b8312d5bbfd2e0adcd9d1579b16.png"},1371:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img_2-e1811e5f0c86035a7caedf496f40ac64.png"},242:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img_3-d00fc35d33a78d0465669a867032f3dd.png"},4493:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img_4-fcdf3a81a579645dfdfa89d7699b4a3e.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>p});var s=i(6540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);