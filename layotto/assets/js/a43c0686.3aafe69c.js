"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[282],{997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(4848),o=t(8453);const l={},s="API \u63d2\u4ef6\u8bbe\u8ba1\u6587\u6863 & \u4f7f\u7528\u6307\u5357",i={id:"design/api_plugin/design",title:"API \u63d2\u4ef6\u8bbe\u8ba1\u6587\u6863 & \u4f7f\u7528\u6307\u5357",description:"\u672c\u6587\u524d\u534a\u90e8\u5206\u8ba8\u8bba API \u63d2\u4ef6\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898\u3001\u4e3a\u4ec0\u4e48\u8fd9\u6837\u8bbe\u8ba1\uff0c\u540e\u534a\u90e8\u5206\u4ecb\u7ecd API \u63d2\u4ef6\u600e\u4e48\u7528\u3002",source:"@site/docs/design/api_plugin/design.md",sourceDirName:"design/api_plugin",slug:"/design/api_plugin/design",permalink:"/docs/design/api_plugin/design",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/design/api_plugin/design.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"reference",permalink:"/docs/building_blocks/configuration/reference"},next:{title:"Pluggable Component \u4f7f\u7528\u6587\u6863",permalink:"/docs/design/pluggable/usage"}},c={},p=[{value:"1. \u9700\u6c42\u5206\u6790",id:"1-\u9700\u6c42\u5206\u6790",level:2},{value:"1.1. \u89e3\u51b3\u4ec0\u4e48\u95ee\u9898",id:"11-\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898",level:3},{value:"1.2. \u7528\u6237\u573a\u666f\u548c\u9700\u6c42",id:"12-\u7528\u6237\u573a\u666f\u548c\u9700\u6c42",level:3},{value:"2. High level design",id:"2-high-level-design",level:2},{value:"2.1. Hierarchical API",id:"21-hierarchical-api",level:3},{value:"2.2. \u8bbe\u8ba1\u76ee\u6807",id:"22-\u8bbe\u8ba1\u76ee\u6807",level:3},{value:"2.3. \u529f\u80fd\u8bbe\u8ba1",id:"23-\u529f\u80fd\u8bbe\u8ba1",level:3},{value:"2.4. \u4f7f\u7528\u6307\u5357",id:"24-\u4f7f\u7528\u6307\u5357",level:3},{value:"step 0. \u5b9a\u4e49\u81ea\u5df1\u7684 proto \u6587\u4ef6\u3001\u7f16\u8bd1\u6210 pb",id:"step-0-\u5b9a\u4e49\u81ea\u5df1\u7684-proto-\u6587\u4ef6\u7f16\u8bd1\u6210-pb",level:4},{value:"step 1. \u4e3a\u521a\u624d\u5b9a\u4e49\u7684 API \u7f16\u5199\u5b9e\u73b0",id:"step-1-\u4e3a\u521a\u624d\u5b9a\u4e49\u7684-api-\u7f16\u5199\u5b9e\u73b0",level:4},{value:"step 2. \u5b9e\u73b0 <code>GrpcAPI</code> interface \uff0c\u7ba1\u7406 API \u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f",id:"step-2-\u5b9e\u73b0-grpcapi-interface-\u7ba1\u7406-api-\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f",level:4},{value:"\u89e3\u91ca\uff1a<code>CustomComponent</code>\u662f\u4ec0\u4e48?",id:"\u89e3\u91cacustomcomponent\u662f\u4ec0\u4e48",level:5},{value:"\u89e3\u91ca\uff1a\u5982\u4f55\u914d\u7f6e\u81ea\u5b9a\u4e49\u7ec4\u4ef6?",id:"\u89e3\u91ca\u5982\u4f55\u914d\u7f6e\u81ea\u5b9a\u4e49\u7ec4\u4ef6",level:5},{value:"\u770b\u4e2a\u4f8b\u5b50",id:"\u770b\u4e2a\u4f8b\u5b50",level:5},{value:"\u89e3\u91ca\uff1a\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\u3001\u6784\u9020\u51fd\u6570\u662f\u5e72\u561b\u7684\uff1f",id:"\u89e3\u91ca\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\u6784\u9020\u51fd\u6570\u662f\u5e72\u561b\u7684",level:5},{value:"step 3. \u5c06\u81ea\u5df1\u7684 API \u6ce8\u518c\u8fdb Layotto",id:"step-3-\u5c06\u81ea\u5df1\u7684-api-\u6ce8\u518c\u8fdb-layotto",level:4},{value:"step 4. \u7f16\u8bd1\u8fd0\u884c Layotto",id:"step-4-\u7f16\u8bd1\u8fd0\u884c-layotto",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"api-\u63d2\u4ef6\u8bbe\u8ba1\u6587\u6863--\u4f7f\u7528\u6307\u5357",children:"API \u63d2\u4ef6\u8bbe\u8ba1\u6587\u6863 & \u4f7f\u7528\u6307\u5357"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u524d\u534a\u90e8\u5206\u8ba8\u8bba API \u63d2\u4ef6\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898\u3001\u4e3a\u4ec0\u4e48\u8fd9\u6837\u8bbe\u8ba1\uff0c\u540e\u534a\u90e8\u5206\u4ecb\u7ecd API \u63d2\u4ef6\u600e\u4e48\u7528\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u53ea\u5173\u5fc3 API \u63d2\u4ef6\u7684\u7528\u6cd5\uff0c\u53ef\u4ee5\u76f4\u63a5\u8df3\u5230 ",(0,r.jsx)(n.a,{href:"/docs/design/api_plugin/design?id=_24-%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97",children:"2.4. \u4f7f\u7528\u6307\u5357"})]}),"\n",(0,r.jsx)(n.h2,{id:"1-\u9700\u6c42\u5206\u6790",children:"1. \u9700\u6c42\u5206\u6790"}),"\n",(0,r.jsx)(n.h3,{id:"11-\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898",children:"1.1. \u89e3\u51b3\u4ec0\u4e48\u95ee\u9898"}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u51b3\u6269\u5c55\u6027\u95ee\u9898\u3002\u4e0d\u7ba1\u662f Dapr \u8fd8\u662f\u5f00\u6e90 Layotto \u7684 API\uff0c\u76ee\u524d\u90fd\u65e0\u6cd5\u5b8c\u5168\u6ee1\u8db3\u751f\u4ea7\u9700\u6c42\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u56de\u770b\u64cd\u4f5c\u7cfb\u7edf\u9886\u57df POSIX API \u548c system call \u7684\u53d1\u5c55\u5386\u53f2\uff0c\u6211\u4eec\u53ef\u4ee5\u5b66\u5230\u5f88\u591a\uff0c\u501f\u6b64\u9884\u6d4b Runtime \u7684\u672a\u6765\u3002\u6211\u4eec\u53ef\u4ee5\u8bf4\uff0cRuntime API \u5c06\u6765\u4e5f\u4e0d\u53ef\u80fd\u5b8c\u5168\u6ee1\u8db3\u7528\u6237\u9700\u6c42\u3002\u60f3\u60f3 OS \u9886\u57df\uff0c\u5373\u4f7f\u6709 POSIX API \u4e86\uff0c\u4e00\u4e9b\u573a\u666f\u8fd8\u662f\u9700\u8981\u7ed5\u5f00\u6807\u51c6\nAPI\u3001\u7528\u7279\u6b8a\u6307\u4ee4\u64cd\u4f5c\u7279\u6b8a\u786c\u4ef6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Dapr \u7684\u6269\u5c55\u6027\u662f\u901a\u8fc7 Binding API \u89e3\u51b3\uff0c\u4f46\u662f\u8fd9\u79cd\u975e\u7ed3\u6784\u5316\u7684 API \u6709\u5f88\u591a\u95ee\u9898\uff08\u6bd4\u5982\u7834\u574f\u53ef\u79fb\u690d\u6027\u3001\u4e0d\u652f\u6301 stream \u7b49\u8bed\u4e49\uff09"}),"\n",(0,r.jsx)(n.h3,{id:"12-\u7528\u6237\u573a\u666f\u548c\u9700\u6c42",children:"1.2. \u7528\u6237\u573a\u666f\u548c\u9700\u6c42"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u6709\u4ee5\u4e0b\u7528\u6237\u573a\u666f\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u516c\u53f8\u6709\u81ea\u5df1\u7684\u5b9a\u5236 API \u9700\u6c42\uff0c\u56e0\u4e3a\u662f\u975e\u901a\u7528\u9700\u6c42\u3001\u4e0d\u9002\u5408\u505a\u5230\u5f00\u6e90 Layotto/Dapr \u4e0a\uff0c\u4e8e\u662f\u516c\u53f8\u7684\u4e2d\u95f4\u4ef6\u56e2\u961f\u60f3\u81ea\u5df1\u5f00\u53d1\u5230 sidecar \u91cc\u3002\u5982\u679c\u516c\u53f8\u7684\u9879\u76ee import \u5f00\u6e90 Layotto \u6216\u8005 Dapr\uff0c\u6309\u76ee\u524d\u7684\u67b6\u6784\u662f\u6ca1\u6cd5\u6269\u5c55\u5f00\u53d1 API \u7684\uff0c\u53ea\u80fd Fork\n\u51fa\u6765\u505a\u6269\u5c55"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/26001097/131614836-60d797c8-b80b-4018-ad43-c2b874d35660.png",alt:"image"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7684\u7528\u6237\u9700\u6c42\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"sdk \u4e0b\u6c89\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u591a\u8bed\u8a00\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u591a\u4e91\u90e8\u7f72\uff08\u53ea\u4e0d\u8fc7\u9700\u8981\u4e2d\u95f4\u4ef6\u56e2\u961f\u81ea\u5df1\u4e3a\u591a\u4e91\u73af\u5883\u5f00\u53d1\u7ec4\u4ef6\uff0c\u6ca1\u6709\u793e\u533a\u73b0\u6210\u7684\u7ec4\u4ef6\u62ff\u6765\u7528\u4e86\uff09"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\u516c\u53f8\u6709\u65b0 API \u9700\u6c42\uff0c\u9002\u5408\u505a\u5230\u5f00\u6e90\u9879\u76ee\u91cc\uff0c\u4e8e\u662f\u63d0\u9700\u6c42\u7ed9\u793e\u533a\uff0c\u4f46\u662f\u793e\u533a\u5f88\u96be\u8fbe\u6210\u5171\u8bc6\u3001\u4e89\u4e86\u51e0\u4e2a\u6708\u8fd8\u6ca1\u843d\u5730\uff08\u4f8b\u5982",(0,r.jsx)(n.a,{href:"https://github.com/dapr/dapr/issues/2988",children:"https://github.com/dapr/dapr/issues/2988"}),"\n\uff09\u3002\u8fd9\u79cd\u60c5\u51b5\u516c\u53f8\u53ef\u80fd\u6709\u4e1a\u52a1\u538b\u529b\uff0c\u6ca1\u6cd5\u7b49\u90a3\u4e48\u4e45\uff0c\u5e0c\u671b\u81ea\u5df1\u5148\u5b9e\u73b0\u3001\u843d\u5730\uff0c\u7b49\u793e\u533a\u5b9e\u73b0\u65b0\u529f\u80fd\u540e\u518d\u8fc1\u79fb\u8fc7\u6765\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7684\u7528\u6237\u9700\u6c42\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u5bf9\u8be5\u529f\u80fd\u81ea\u4e3b\u53ef\u63a7\uff0c\u4e0d\u9700\u8981\uff08\u540c\u65f6\u7528\u4e2d\u6587\u548c\u82f1\u6587\uff09\u8bf4\u670d\u793e\u533a\u3001\u8bf4\u670d\u4e16\u754c\u624d\u80fd\u505a\u8fd9\u4e2a\u529f\u80fd"}),"\n",(0,r.jsx)(n.li,{children:"\u5feb\u901f\u6269\u5c55\u3001\u670d\u52a1\u4e1a\u52a1"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u60f3\u7ed9 Dapr API \u52a0\u5b57\u6bb5\uff0c\u5148\u5728\u81ea\u5df1\u7684 Fork \u7248\u672c\u91cc\u6dfb\u52a0\u4e86\u5b57\u6bb5\u3001\u6ee1\u8db3\u7ebf\u4e0a\u9700\u6c42\uff0c\u7136\u540e\u5c06 PR \u63d0\u7ed9\u793e\u533a\u3002\u793e\u533a\u62d2\u7edd\u6dfb\u52a0\u8be5\u5b57\u6bb5\uff0cPR \u88ab\u5173\u95ed\u3002\u7528\u6237\u5f88\u5c34\u5c2c\uff1a\u8fd9\u5b57\u6bb5\u5df2\u7ecf\u5728\u7ebf\u4e0a\u4f7f\u7528\u4e86\uff0c\u600e\u4e48\u5904\u7406\uff1f"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"2-high-level-design",children:"2. High level design"}),"\n",(0,r.jsx)(n.h3,{id:"21-hierarchical-api",children:"2.1. Hierarchical API"}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u8003 OS \u9886\u57df\u5f53\u5e74\u662f\u600e\u4e48\u5b9a API \u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u628a Runtime API \u8bbe\u8ba1\u6210\u591a\u5c42\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*bWnHR7yhiF4AAAAAAAAAAAAAARQnAQ",alt:"img.png"})}),"\n",(0,r.jsx)(n.p,{children:"\u5206\u522b\u5bf9\u5e94 OS \u9886\u57df\u7684\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"POSIX API"}),"\n",(0,r.jsx)(n.li,{children:"\u5404\u79cd Unix-like \u7cfb\u7edf\u81ea\u5df1\u7684 System Call \uff08\u6709\u53ef\u79fb\u690d\u6027\uff0c\u901a\u8fc7\u4e0d\u540c\u7684\u786c\u4ef6\u9a71\u52a8\u5b9e\u73b0\u76f8\u540c\u7684\u63a5\u53e3\uff09"}),"\n",(0,r.jsx)(n.li,{children:"\u7279\u6b8a\u786c\u4ef6\u63d0\u4f9b\u7684\u7279\u6b8a\u529f\u80fd (\u6ca1\u6709\u53ef\u79fb\u690d\u6027)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u8fd9\u79cd\u601d\u60f3\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u8ba1 API \u63d2\u4ef6\uff0c\u652f\u6301\u7528\u6237\u6269\u5c55\u81ea\u5df1\u7684\u79c1\u6709 API"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/26001097/131614802-c6f6a556-4e8b-4fee-b899-275a80e00eb6.png",alt:"image"})}),"\n",(0,r.jsx)(n.h3,{id:"22-\u8bbe\u8ba1\u76ee\u6807",children:"2.2. \u8bbe\u8ba1\u76ee\u6807"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6709\u5b9a\u5236\u5f00\u53d1\u9700\u6c42\u7684\u5f00\u6e90\u7528\u6237\u901a\u8fc7 import Layotto \u7684\u65b9\u5f0f\u4f7f\u7528 Layotto,\u800c\u4e0d\u662f Fork"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5f00\u53d1 api plugin \u8db3\u591f\u7b80\u5355"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u516c\u7528\u540c\u4e00\u4e2a json \uff0c\u65b0\u589e api plugin \u65e0\u9700\u65b0\u589e\u914d\u7f6e\u6587\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"23-\u529f\u80fd\u8bbe\u8ba1",children:"2.3. \u529f\u80fd\u8bbe\u8ba1"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/26001097/131614952-ccfc7d11-d376-41b0-b16c-2f17bfd2c9fc.png",alt:"image"})}),"\n",(0,r.jsx)(n.p,{children:"Layotto \u65b0\u589e\u82e5\u5e72\u6269\u5c55\u70b9\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f01\u4e1a\u7528\u6237\u5728\u4f7f\u7528 Layotto \u65f6\uff0c\u53ef\u4ee5\u81ea\u5df1\u7ef4\u62a4\u4e00\u4e2a\u9879\u76ee\u3001import Layotto\u3002\u81ea\u5df1\u7684\u9879\u76ee\u91cc\u5b58\u653e\u5404\u79cd\u6269\u5c55\u63d2\u4ef6\u3001\u7ec4\u4ef6\u3002\u5982\u679c\u60a8\u719f\u6089 Java\uff0c\u8fd9\u5c31\u7c7b\u4f3c\u4e8e Java \u793e\u533a\u60f3\u8981\u7528 ",(0,r.jsx)(n.a,{href:"https://github.com/Netflix/eureka",children:"Eureka"})," \u65f6\uff0c\u53ef\u4ee5\nimport Eureka\u3001\u7136\u540e\u505a\u6269\u5c55\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u7528\u6237\u60f3\u65b0\u589e\u4e00\u7c7b API \u65f6\uff0c\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u9879\u76ee\u91cc\u5f00\u53d1\u4e00\u4e2a package\uff08\u5305\u62ec\u81ea\u5df1\u7684 proto,pb \u6587\u4ef6\uff0c\u81ea\u5df1\u7684 API \u5b9e\u73b0)\uff0c\u7136\u540e\u5728 ",(0,r.jsx)(n.code,{children:"main.go"})," \u91cc\u8c03\u7528 Layotto \u7684\u6269\u5c55\u70b9\u3001\u5c06\u81ea\u5df1\u7684 API \u6ce8\u518c\u8fdb Layotto\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"24-\u4f7f\u7528\u6307\u5357",children:"2.4. \u4f7f\u7528\u6307\u5357"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u4f55\u6dfb\u52a0\u81ea\u5df1\u7684 proto\u3001\u6dfb\u52a0\u81ea\u5df1\u7684\u79c1\u6709 API\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u4e2a\u793a\u4f8b\u662f ",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/tree/main/cmd/layotto_multiple_api/helloworld",children:"\u9879\u76ee\u4e2d\u63d0\u4f9b\u7684 helloworld \u5305"})," \uff0c\u5b9e\u73b0\u4e86\u81ea\u5b9a\u4e49\u7684 API, ",(0,r.jsx)(n.code,{children:"SayHello"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u6b64\u4e3a\u4f8b\uff0c\u89e3\u91ca\u4e0b\u5199 API \u63d2\u4ef6\u7684\u6b65\u9aa4:"}),"\n",(0,r.jsx)(n.h4,{id:"step-0-\u5b9a\u4e49\u81ea\u5df1\u7684-proto-\u6587\u4ef6\u7f16\u8bd1\u6210-pb",children:"step 0. \u5b9a\u4e49\u81ea\u5df1\u7684 proto \u6587\u4ef6\u3001\u7f16\u8bd1\u6210 pb"}),"\n",(0,r.jsxs)(n.p,{children:["\u6bd4\u5982\u7528\u6237\u60f3\u65b0\u589e\u4e00\u4e2a\u81ea\u5df1\u7684 ",(0,r.jsx)(n.code,{children:"Greeter"})," API\uff0c\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"SayHello"})," \u65b9\u6cd5\uff0c\u90a3\u4e48\u9700\u8981\u5148\u5199\u4e2a proto:\n\uff08\u8fd9\u4e2a\u4f8b\u5b50\u662f\u6211\u4ece ",(0,r.jsx)(n.a,{href:"https://github.com/grpc/grpc-go/blob/master/examples/helloworld/helloworld/helloworld.proto",children:"grpc \u5b98\u65b9\u793a\u4f8b"})," \u7c98\u8d34\u8fc7\u6765\u7684\uff09"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\n\noption go_package = "google.golang.org/grpc/examples/helloworld/helloworld";\noption java_multiple_files = true;\noption java_package = "io.grpc.examples.helloworld";\noption java_outer_classname = "HelloWorldProto";\n\npackage helloworld;\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\u628a\u5b83\u7f16\u8bd1\u6210 ",(0,r.jsx)(n.code,{children:".pb.go"})," \u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/tree/main/cmd/layotto_multiple_api/helloworld",children:"\u9879\u76ee\u4e2d\u63d0\u4f9b\u7684 helloworld \u793a\u4f8b\u5305"})," \u5077\u4e86\u4e2a\u61d2\uff0c\u76f4\u63a5 import \u4e86 grpc \u5b98\u65b9\u7f16\u8bd1\u597d\u7684 .pb.go\n\u6587\u4ef6\uff1a"]}),"\n",(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*9VnARJimj90AAAAAAAAAAAAAARQnAQ",width:"40%",height:"40%",alt:"score",align:"center"}),"\n",(0,r.jsx)(n.h4,{id:"step-1-\u4e3a\u521a\u624d\u5b9a\u4e49\u7684-api-\u7f16\u5199\u5b9e\u73b0",children:"step 1. \u4e3a\u521a\u624d\u5b9a\u4e49\u7684 API \u7f16\u5199\u5b9e\u73b0"}),"\n",(0,r.jsxs)(n.p,{children:["protoc \u7f16\u8bd1\u5de5\u5177\u4f1a\u6839\u636e proto \u6587\u4ef6\u5e2e\u4f60\u7f16\u8bd1\u51fa go \u8bed\u8a00\u7684 interface ",(0,r.jsx)(n.code,{children:"helloworld.GreeterServer"}),"\uff0c\u4f46\u662f interface \u7684\u5177\u4f53\u5b9e\u73b0\u8fd8\u662f\u9700\u8981\u81ea\u5df1\u5199\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6bd4\u5982\uff0c\u793a\u4f8b\u4e2d\u6211\u4eec\u7f16\u5199\u7684 ",(0,r.jsx)(n.code,{children:"server"})," \u5b9e\u73b0\u4e86 ",(0,r.jsx)(n.code,{children:"helloworld.GreeterServer"})," interface, \u6709 ",(0,r.jsx)(n.code,{children:"SayHello"})," \u65b9\u6cd5:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// server is used to implement helloworld.GreeterServer.\ntype server struct {\n\tappId string\n\t// custom components which implements the `HelloWorld` interface\n\tname2component map[string]component.HelloWorld\n\t// LockStore components. They are not used in this demo, we put them here as a demo.\n\tname2LockStore map[string]lock.LockStore\n\tpb.UnimplementedGreeterServer\n}\n\n// SayHello implements helloworld.GreeterServer.SayHello\nfunc (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {\n\tif _, ok := s.name2component[componentName]; !ok {\n\t\treturn &pb.HelloReply{Message: "We don\'t want to talk with you!"}, nil\n\t}\n\tmessage, err := s.name2component[componentName].SayHello(in.GetName())\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\treturn &pb.HelloReply{Message: message}, nil\n}\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"step-2-\u5b9e\u73b0-grpcapi-interface-\u7ba1\u7406-api-\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f",children:["step 2. \u5b9e\u73b0 ",(0,r.jsxs)(n.a,{href:"https://github.com/mosn/layotto/blob/main/pkg/grpc/grpc_api.go",children:[(0,r.jsx)(n.code,{children:"GrpcAPI"})," interface"]})," \uff0c\u7ba1\u7406 API \u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f"]}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u4f60\u5df2\u7ecf\u6709\u4e86\u81ea\u5df1\u7684 API \u5b9e\u73b0\uff0c\u4e0b\u4e00\u6b65\u9700\u8981\u628a\u5b83\u6ce8\u518c\u5230 Layotto \u4e0a\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u56de\u5fc6\u4e00\u4e0b"}),"\uff1a\u5982\u4f55\u628a API \u6ce8\u518c\u5230\u539f\u751f\u7684 grpc server \u4e0a?"]}),"\n",(0,r.jsx)(n.p,{children:"\u53ea\u9700\u8981\u5199\u8fd9\u4e48\u4e00\u884c\u4ee3\u7801\uff1a"}),"\n",(0,r.jsxs)(n.p,{children:["pb.RegisterGreeterServer(s, &server",")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u60f3\u8981\u628a\u81ea\u5df1\u7684 API \u6ce8\u518c\u5230 Layotto \u4e0a\uff0c\u9700\u8981\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5b9e\u73b0 ",(0,r.jsxs)(n.a,{href:"https://github.com/mosn/layotto/blob/main/pkg/grpc/grpc_api.go",children:[(0,r.jsx)(n.code,{children:"GrpcAPI"})," interface"]})," \u3001\u5b9e\u73b0\u4e00\u4e9b\u751f\u547d\u5468\u671f\u94a9\u5b50"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a GrpcAPI \u8d1f\u8d23\u7ba1\u7406\u60a8\u7684 API \u7684\u751f\u547d\u5468\u671f\u3001\u63d0\u4f9b\u4e86\u5404\u79cd\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002\u76ee\u524d\u751f\u547d\u5468\u671f\u94a9\u5b50\u6709 Init \u548c Register \u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// GrpcAPI is the interface of API plugin. It has lifecycle related methods\ntype GrpcAPI interface {\n    // init this API before binding it to the grpc server.\n    // For example,you can call app to query their subscriptions.\n    Init(conn *grpc.ClientConn) error\n    \n    // Bind this API to the grpc server\n    Register(s *grpc.Server, registeredServer mgrpc.RegisteredServer) (mgrpc.RegisteredServer, error)\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5b9e\u73b0\u76f8\u5e94\u7684\u6784\u9020\u51fd\u6570 ",(0,r.jsx)(n.code,{children:"NewGrpcAPI"}),"\uff0c\u7528\u6765\u521b\u5efa\u4f60\u7684 ",(0,r.jsx)(n.code,{children:"GrpcAPI"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// NewGrpcAPI is the constructor of GrpcAPI\ntype NewGrpcAPI func (applicationContext *ApplicationContext) GrpcAPI\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\u4f20\u5165\u7684\u53c2\u6570",(0,r.jsx)(n.code,{children:"*ApplicationContext"}),"\u5b9a\u4e49\u4e3a\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// ApplicationContext contains all you need to construct your GrpcAPI, such as all the components.\n// For example, your `SuperState` GrpcAPI can hold the `StateStores` components and use them to implement your own `Super State API` logic.\ntype ApplicationContext struct {\n    AppId                 string\n    Hellos                map[string]hello.HelloService\n    ConfigStores          map[string]configstores.Store\n    Rpcs                  map[string]rpc.Invoker\n    PubSubs               map[string]pubsub.PubSub\n    StateStores           map[string]state.Store\n    Files                 map[string]file.File\n    LockStores            map[string]lock.LockStore\n    Sequencers            map[string]sequencer.Store\n    SendToOutputBindingFn func(name string, req *bindings.InvokeRequest) (*bindings.InvokeResponse, error)\n    SecretStores          map[string]secretstores.SecretStore\n    CustomComponent       map[string]map[string]custom.Component\n}\n"})}),"\n",(0,r.jsxs)(n.h5,{id:"\u89e3\u91cacustomcomponent\u662f\u4ec0\u4e48",children:["\u89e3\u91ca\uff1a",(0,r.jsx)(n.code,{children:"CustomComponent"}),"\u662f\u4ec0\u4e48?"]}),"\n",(0,r.jsx)(n.p,{children:'\u662f"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"\u3002'}),"\n",(0,r.jsx)(n.p,{children:"Layotto \u4e2d\u7684\u7ec4\u4ef6\u5206\u4e3a\u4e24\u79cd\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9884\u7f6e\u7ec4\u4ef6"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6bd4\u5982 ",(0,r.jsx)(n.code,{children:"pubsub"})," \u7ec4\u4ef6\uff0c\u6bd4\u5982 ",(0,r.jsx)(n.code,{children:"state"})," \u7ec4\u4ef6"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5141\u8bb8\u60a8\u81ea\u5df1\u6269\u5c55\u81ea\u5df1\u7684\u7ec4\u4ef6\uff0c\u6bd4\u5982\u4e0b\u9762\u793a\u4f8b\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"HelloWorld"})," \u7ec4\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.h5,{id:"\u89e3\u91ca\u5982\u4f55\u914d\u7f6e\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:"\u89e3\u91ca\uff1a\u5982\u4f55\u914d\u7f6e\u81ea\u5b9a\u4e49\u7ec4\u4ef6?"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be6\u89c1",(0,r.jsx)(n.a,{href:"/docs/component_specs/custom/common",children:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u914d\u7f6e\u6587\u6863"})]}),"\n",(0,r.jsx)(n.h5,{id:"\u770b\u4e2a\u4f8b\u5b50",children:"\u770b\u4e2a\u4f8b\u5b50"}),"\n",(0,r.jsxs)(n.p,{children:["\u770b\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\uff0c\u5728",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/cmd/layotto_multiple_api/helloworld/grpc_api.go",children:"helloworld \u793a\u4f8b\u4e2d"}),", ",(0,r.jsx)(n.code,{children:"*server"})," \u5b9e\u73b0\u4e86 ",(0,r.jsx)(n.code,{children:"Init"}),"\n\u548c ",(0,r.jsx)(n.code,{children:"Register"})," \u65b9\u6cd5:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (s *server) Init(conn *rawGRPC.ClientConn) error {\n\treturn nil\n}\n\nfunc (s *server) Register(grpcServer *rawGRPC.Server, registeredServer mgrpc.RegisteredServer) (mgrpc.RegisteredServer, error) {\n\tpb.RegisterGreeterServer(grpcServer, s)\n\treturn registeredServer, nil\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e5f\u6709\u76f8\u5e94\u7684\u6784\u9020\u51fd\u6570:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func NewHelloWorldAPI(ac *grpc_api.ApplicationContext) grpc.GrpcAPI {\n\t// 1. convert custom components\n\tname2component := make(map[string]component.HelloWorld)\n\tif len(ac.CustomComponent) != 0 {\n\t\t// we only care about those components of type "helloworld"\n\t\tname2comp, ok := ac.CustomComponent[kind]\n\t\tif ok && len(name2comp) > 0 {\n\t\t\tfor name, v := range name2comp {\n\t\t\t\t// convert them using type assertion\n\t\t\t\tcomp, ok := v.(component.HelloWorld)\n\t\t\t\tif !ok {\n\t\t\t\t\terrMsg := fmt.Sprintf("custom component %s does not implement HelloWorld interface", name)\n\t\t\t\t\tlog.DefaultLogger.Errorf(errMsg)\n\t\t\t\t}\n\t\t\t\tname2component[name] = comp\n\t\t\t}\n\t\t}\n\t}\n\t// 2. construct your API implementation\n\treturn &server{\n\t\tappId: ac.AppId,\n\t\t// Your API plugin can store and use all the components.\n\t\t// For example,this demo set all the LockStore components here.\n\t\tname2LockStore: ac.LockStores,\n\t\t// Custom components of type "helloworld"\n\t\tname2component: name2component,\n\t}\n}\n'})}),"\n",(0,r.jsx)(n.h5,{id:"\u89e3\u91ca\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\u6784\u9020\u51fd\u6570\u662f\u5e72\u561b\u7684",children:"\u89e3\u91ca\uff1a\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\u3001\u6784\u9020\u51fd\u6570\u662f\u5e72\u561b\u7684\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u770b\u4e86\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u4f60\u4e5f\u8bb8\u4f1a\u95ee\uff1a\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\u3001\u6784\u9020\u51fd\u6570\u662f\u5e72\u561b\u7684?"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u8ff0\u94a9\u5b50\u7528\u4e8e\u7ed9\u7528\u6237\u6269\u5c55\u81ea\u5b9a\u4e49\u542f\u52a8\u903b\u8f91\u3002Layotto \u4f1a\u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\u56de\u8c03\u4e0a\u8ff0\u751f\u547d\u5468\u671f\u94a9\u5b50\u548c\u6784\u9020\u51fd\u6570\u3002\u8c03\u7528\u987a\u5e8f\u5927\u81f4\u4e3a\uff1a"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Layotto \u521d\u59cb\u5316\u597d\u6240\u6709\u7ec4\u4ef6"})," ---\x3e \u8c03\u7528",(0,r.jsx)(n.code,{children:"NewGrpcAPI"}),"\u6784\u9020\u51fd\u6570 ---\x3e ",(0,r.jsx)(n.code,{children:"GrpcAPI.Init"})," ---\x3e ",(0,r.jsx)(n.code,{children:"Layotto \u521b\u5efa grpc \u670d\u52a1\u5668"})," ---\x3e ",(0,r.jsx)(n.code,{children:"GrpcAPI.Register"})]}),"\n",(0,r.jsx)(n.p,{children:"\u56fe\u793a\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*7_NyQL-FjigAAAAAAAAAAAAAARQnAQ",width:"40%",height:"40%",alt:"score",align:"center"}),"\n",(0,r.jsx)(n.h4,{id:"step-3-\u5c06\u81ea\u5df1\u7684-api-\u6ce8\u518c\u8fdb-layotto",children:"step 3. \u5c06\u81ea\u5df1\u7684 API \u6ce8\u518c\u8fdb Layotto"}),"\n",(0,r.jsxs)(n.p,{children:["\u6309\u7167\u4e0a\u6587\u7684\u6b65\u9aa4\u5b9e\u73b0\u81ea\u5df1\u7684\u79c1\u6709 API\n\u540e,\u53ef\u4ee5",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/5234a80cdc97798162d03546eb8e0ee163c0ad60/cmd/layotto_multiple_api/main.go#L203",children:"\u5728 main \u91cc\u5c06\u5b83\u6ce8\u518c\u8fdb Layotto"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'\nfunc NewRuntimeGrpcServer(data json.RawMessage, opts ...grpc.ServerOption) (mgrpc.RegisteredServer, error) {\n\t// ...........\n\t\n    // 3. run\n    server, err := rt.Run(\n        runtime.WithGrpcOptions(opts...),\n        // register your GrpcAPI here\n        runtime.WithGrpcAPI(\n            // default GrpcAPI\n            default_api.NewGrpcAPI,\n            // a demo to show how to register your own GrpcAPI\n            helloworld_api.NewHelloWorldAPI,\n        ),\n        // Hello\n        runtime.WithHelloFactory(\n            hello.NewHelloFactory("helloworld", helloworld.NewHelloWorld),\n        ),\n    // ...........\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u63a8\u8350\u7528\u6237\u5728\u81ea\u5df1\u7684\u9879\u76ee\u4e2d\u5b9a\u5236 main \u51fd\u6570\u3001\u5b9a\u5236\u542f\u52a8\u6d41\u7a0b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5177\u4f53\u6765\u8bf4\uff0c\u60a8\u53ef\u4ee5\u628a Layotto \u7684 main \u590d\u5236\u7c98\u8d34\u5230\u81ea\u5df1\u7684\u9879\u76ee\u91cc\uff0c\u6309\u9700\u4fee\u6539\uff0c\u53bb\u6389\u7528\u4e0d\u5230\u7684\u4e1c\u897f\uff08\u6bd4\u5982\u7528\u4e0d\u5230 etcd \u7684\u5206\u5e03\u5f0f\u9501\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5728\u81ea\u5df1\u7684 main \u91cc\u5220\u6389\u5b83)"}),"\n",(0,r.jsx)(n.h4,{id:"step-4-\u7f16\u8bd1\u8fd0\u884c-layotto",children:"step 4. \u7f16\u8bd1\u8fd0\u884c Layotto"}),"\n",(0,r.jsx)(n.p,{children:"\u51c6\u5907\u5c31\u7eea\uff0c\u53ef\u4ee5\u542f\u52a8 Layotto \u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5 helloworld \u4e3a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd ${project_path}/cmd/layotto_multiple_api\ngo build -o layotto\n# run it\n./layotto start -c ../../configs/config_standalone.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Layotto \u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u56de\u8c03\u6bcf\u4e2a\u6ce8\u518c\u8fdb\u6765\u7684 API \u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5(Init,Register)"}),"\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u5b8c\u6210\u540e\uff0c\u60a8\u7684 API \u5c31\u4f1a\u5bf9\u5916\u63d0\u4f9b grpc \u670d\u52a1"})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const o={},l=r.createContext(o);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);