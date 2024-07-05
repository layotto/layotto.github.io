"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[8136],{3177:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>h,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(4848),i=s(8453);const r={},h="\u65b0\u589eAPI\u65f6\u7684\u5f00\u53d1\u89c4\u8303",o={id:"development/developing-api",title:"\u65b0\u589eAPI\u65f6\u7684\u5f00\u53d1\u89c4\u8303",description:"\u611f\u8c22\u60a8\u5bf9Layotto\u7684\u652f\u6301\uff01",source:"@site/docs/development/developing-api.md",sourceDirName:"development",slug:"/development/developing-api",permalink:"/docs/development/developing-api",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/development/developing-api.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"proto\u6587\u4ef6\u6ce8\u91ca\u89c4\u8303",permalink:"/docs/api_reference/comment_spec_of_proto"},next:{title:"Layotto GitHub Workflows",permalink:"/docs/development/github-workflows"}},l={},d=[{value:"\u592a\u957f\u4e0d\u770b",id:"\u592a\u957f\u4e0d\u770b",level:2},{value:"\u4e00\u3001\u5411\u793e\u533a\u53d1\u5e03API\u63d0\u6848\uff0c\u7ecf\u8fc7\u5145\u5206\u8ba8\u8bba",id:"\u4e00\u5411\u793e\u533a\u53d1\u5e03api\u63d0\u6848\u7ecf\u8fc7\u5145\u5206\u8ba8\u8bba",level:2},{value:"1.1. \u53d1\u5e03\u8be6\u7ec6\u7684\u63d0\u6848",id:"11-\u53d1\u5e03\u8be6\u7ec6\u7684\u63d0\u6848",level:3},{value:"1.1.1. \u4e3a\u4ec0\u4e48\u63d0\u6848\u8981\u8be6\u7ec6",id:"111-\u4e3a\u4ec0\u4e48\u63d0\u6848\u8981\u8be6\u7ec6",level:4},{value:"1.1.2. \u63d0\u6848\u7684\u5185\u5bb9",id:"112-\u63d0\u6848\u7684\u5185\u5bb9",level:4},{value:"1.2. \u63d0\u6848\u8bc4\u5ba1",id:"12-\u63d0\u6848\u8bc4\u5ba1",level:3},{value:"\u4e8c\u3001\u5f00\u53d1",id:"\u4e8c\u5f00\u53d1",level:2},{value:"2.1. \u4ee3\u7801\u89c4\u8303",id:"21-\u4ee3\u7801\u89c4\u8303",level:3},{value:"2.2. \u6d4b\u8bd5\u89c4\u8303",id:"22-\u6d4b\u8bd5\u89c4\u8303",level:3},{value:"2.3. \u6587\u6863\u89c4\u8303",id:"23-\u6587\u6863\u89c4\u8303",level:3},{value:"2.3.1. Quick start",id:"231-quick-start",level:4},{value:"2.3.2. \u4f7f\u7528\u6587\u6863",id:"232-\u4f7f\u7528\u6587\u6863",level:4},{value:"what.\u8fd9\u4e2aAPI\u662f\u5565\uff0c\u89e3\u51b3\u5565\u95ee\u9898",id:"what\u8fd9\u4e2aapi\u662f\u5565\u89e3\u51b3\u5565\u95ee\u9898",level:5},{value:"when.\u4ec0\u4e48\u573a\u666f\u9002\u5408\u7528\u8fd9\u4e2aAPI",id:"when\u4ec0\u4e48\u573a\u666f\u9002\u5408\u7528\u8fd9\u4e2aapi",level:5},{value:"how.\u600e\u4e48\u7528\u8fd9\u4e2aAPI",id:"how\u600e\u4e48\u7528\u8fd9\u4e2aapi",level:5},{value:"why.\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bbe\u8ba1",id:"why\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bbe\u8ba1",level:5},{value:"2.3.3. \u4ecb\u7ecdAPI\u901a\u7528\u914d\u7f6e\u7684\u6587\u6863",id:"233-\u4ecb\u7ecdapi\u901a\u7528\u914d\u7f6e\u7684\u6587\u6863",level:4},{value:"2.3.4. \u4ecb\u7ecd\u7ec4\u4ef6\u914d\u7f6e\u7684\u6587\u6863",id:"234-\u4ecb\u7ecd\u7ec4\u4ef6\u914d\u7f6e\u7684\u6587\u6863",level:4},{value:"2.4. \u6ce8\u91ca\u89c4\u8303",id:"24-\u6ce8\u91ca\u89c4\u8303",level:3},{value:"proto\u6ce8\u91ca as doc",id:"proto\u6ce8\u91ca-as-doc",level:4},{value:"\u7ec4\u4ef6API \u6ce8\u91ca as doc",id:"\u7ec4\u4ef6api-\u6ce8\u91ca-as-doc",level:4},{value:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",level:4},{value:"\u4e09\u3001\u63d0\u4ea4pull request",id:"\u4e09\u63d0\u4ea4pull-request",level:2},{value:"3.1. \u4e0d\u7b26\u5408\u5f00\u53d1\u89c4\u8303\u7684pr\u4e0d\u53ef\u4ee5\u5408\u5e76\u8fdb\u4e3b\u5e72",id:"31-\u4e0d\u7b26\u5408\u5f00\u53d1\u89c4\u8303\u7684pr\u4e0d\u53ef\u4ee5\u5408\u5e76\u8fdb\u4e3b\u5e72",level:3},{value:"3.2. cr\u4eba\u6570",id:"32-cr\u4eba\u6570",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u65b0\u589eapi\u65f6\u7684\u5f00\u53d1\u89c4\u8303",children:"\u65b0\u589eAPI\u65f6\u7684\u5f00\u53d1\u89c4\u8303"}),"\n",(0,t.jsx)(n.p,{children:"\u611f\u8c22\u60a8\u5bf9Layotto\u7684\u652f\u6301\uff01"}),"\n",(0,t.jsxs)(n.p,{children:["\u672c\u6587\u6863\u63cf\u8ff0\u4e86\u5982\u4f55\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u65b0\u7684Layotto API\u3002Layotto\u7528Go\u8bed\u8a00\u7f16\u5199\uff0c\u5982\u679c\u60a8\u5bf9Go\u8bed\u8a00\u4e0d\u719f\u6089\u53ef\u4ee5\u770b\u4e0b",(0,t.jsx)(n.a,{href:"https://tour.golang.org/welcome/1",children:"Go\u6559\u7a0b"})," \u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5f00\u53d1\u65b0API\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u53c2\u8003\u5df2\u6709\u7684\u5176\u4ed6API\u7684\u4ee3\u7801\u3001\u6587\u6863\uff0c\u8fd9\u4f1a\u8ba9\u5f00\u53d1\u7b80\u5355\u5f88\u591a\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: \u4e3a\u5565\u8981\u5236\u5b9a\u8be5\u89c4\u8303\uff1f"})}),"\n",(0,t.jsx)(n.p,{children:"A: \u76ee\u524d\u7f3a\u5c11\u4f7f\u7528\u6587\u6863\uff0c\u7528\u6237\u4e0d\u597d\u7528\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img_1.png",src:s(9329).A+"",width:"324",height:"56"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img_2.png",src:s(4570).A+"",width:"436",height:"95"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee3\u7801\u7f3a\u5c11\u6ce8\u91ca\uff0c\u611f\u5174\u8da3\u7684\u8d21\u732e\u8005\u770b\u4e0d\u61c2\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.a,{href:"https://github.com/mosn/layotto/issues/112",children:"https://github.com/mosn/layotto/issues/112"})]}),"\n",(0,t.jsx)(n.p,{children:"\u65e7\u6587\u6863\u548c\u6ce8\u91ca\u8865\u8d77\u6765\u592a\u6162\uff0c\u5e0c\u671b\u4eca\u540e\u5f00\u53d1\u7684\u65b0\u529f\u80fd\u6709\u8fd9\u4e9b\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: \u9075\u5faa\u89c4\u8303\u592a\u9ebb\u70e6\u4e86\uff0c\u4f1a\u4e0d\u4f1a\u8ba9\u60f3\u8d21\u732e\u4ee3\u7801\u7684\u540c\u5b66\u671b\u800c\u5374\u6b65\uff1f"})}),"\n",(0,t.jsxs)(n.p,{children:["A: ",(0,t.jsx)(n.strong,{children:"\u672c\u89c4\u8303\u53ea\u9650\u5236\u201c\u65b0\u589eLayotto API\u7684pr\u9700\u8981\u6709\u54ea\u4e9b\u4e1c\u897f\u201d\uff08\u6bd4\u5982\u65b0\u8bbe\u8ba1\u4e00\u4e2a\u5206\u5e03\u5f0f\u81ea\u589eid API)"})," \uff0c\u5176\u4ed6pr\u6bd4\u5982\u65b0\u5f00\u53d1\u4e00\u4e2a\u7ec4\u4ef6\u3001\u65b0\u5f00\u53d1\u4e00\u4e2asdk\u90fd\u4e0d\u9700\u8981\u9075\u5faa\u672c\u89c4\u8303\uff0c\u6ca1\u8fd9\u4e48\u590d\u6742\uff0c\u8db3\u591f\u81ea\u7531"]}),"\n",(0,t.jsx)(n.h2,{id:"\u592a\u957f\u4e0d\u770b",children:"\u592a\u957f\u4e0d\u770b"}),"\n",(0,t.jsx)(n.p,{children:"\u5f00\u53d1\u524d\u5148\u63d0\u6848\uff0c\u63d0\u6848\u8981\u8be6\u7ec6"}),"\n",(0,t.jsx)(n.p,{children:"\u5f00\u53d1\u65f6\u8981\u51994\u4e2a\u7ed9\u7528\u6237\u770b\u7684\u6587\u6863"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Quick start"}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u6587\u6863"}),"\n",(0,t.jsx)(n.li,{children:"API\u901a\u7528\u914d\u7f6e"}),"\n",(0,t.jsx)(n.li,{children:"\u7ec4\u4ef6\u914d\u7f6e"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u7528\u5199\u8bbe\u8ba1\u6587\u6863\uff0c\u4f46\u662fproto API\u548c\u7ec4\u4ef6API\u8981\u5199\u8be6\u7ec6\u6ce8\u91ca\uff0c\u6ce8\u91ca as doc"}),"\n",(0,t.jsx)(n.p,{children:"\u65b0\u589eAPI\u7684pr\u8981\u4e24\u4e2a\u4ebacode review\uff0c\u540e\u7eed\u6709\u673a\u5668\u4eba\u4e86\u53ef\u4ee5\u4e00\u4e2a\u4ebacr\uff1b\u5176\u4ed6pr\u968f\u610f"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e00\u5411\u793e\u533a\u53d1\u5e03api\u63d0\u6848\u7ecf\u8fc7\u5145\u5206\u8ba8\u8bba",children:"\u4e00\u3001\u5411\u793e\u533a\u53d1\u5e03API\u63d0\u6848\uff0c\u7ecf\u8fc7\u5145\u5206\u8ba8\u8bba"}),"\n",(0,t.jsx)(n.h3,{id:"11-\u53d1\u5e03\u8be6\u7ec6\u7684\u63d0\u6848",children:"1.1. \u53d1\u5e03\u8be6\u7ec6\u7684\u63d0\u6848"}),"\n",(0,t.jsx)(n.h4,{id:"111-\u4e3a\u4ec0\u4e48\u63d0\u6848\u8981\u8be6\u7ec6",children:"1.1.1. \u4e3a\u4ec0\u4e48\u63d0\u6848\u8981\u8be6\u7ec6"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u63d0\u6848\u7c92\u5ea6\u592a\u7c97\uff0c\u5176\u4ed6\u4eba\u8bc4\u5ba1\u65f6\u53ef\u80fd\u6ca1\u5565\u597d\u8bc4\u7684\uff0c\u53d1\u73b0\u4e0d\u4e86\u95ee\u9898\uff1b"}),"\n",(0,t.jsx)(n.p,{children:"\u8bc4\u5ba1\u7684\u76ee\u7684\u662f\u96c6\u601d\u5e7f\u76ca\uff0c\u5927\u5bb6\u4e00\u8d77\u5e2e\u5fd9\u5206\u6790\u5f53\u524d\u7684\u8bbe\u8ba1\u5b58\u5728\u7684\u4e0d\u8db3\uff0c\u5c3d\u65e9\u66b4\u9732\u95ee\u9898\uff0c\u514d\u5f97\u4ee5\u540e\u8fd4\u5de5\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"112-\u63d0\u6848\u7684\u5185\u5bb9",children:"1.1.2. \u63d0\u6848\u7684\u5185\u5bb9"}),"\n",(0,t.jsx)(n.p,{children:"\u63d0\u6848\u9700\u8981\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u9700\u6c42\u5206\u6790","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e3a\u4ec0\u4e48\u8981\u505a\u8fd9\u4e2aAPI"}),"\n",(0,t.jsx)(n.li,{children:"\u5b9a\u4e49\u9700\u6c42\u7684\u8fb9\u754c\uff0c\u54ea\u4e9bfeature\u652f\u6301\uff0c\u54ea\u4e9b\u4e0d\u652f\u6301"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u5e02\u9762\u4e0a\u4ea7\u54c1\u8c03\u7814"}),"\n",(0,t.jsx)(n.li,{children:"grpc/http API\u8bbe\u8ba1"}),"\n",(0,t.jsx)(n.li,{children:"\u7ec4\u4ef6API\u8bbe\u8ba1"}),"\n",(0,t.jsx)(n.li,{children:"\u89e3\u91ca\u4f60\u7684\u8bbe\u8ba1"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a\u4f18\u79c0\u7684\u63d0\u6848\u793a\u4f8b\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/dapr/dapr/issues/2988",children:"https://github.com/dapr/dapr/issues/2988"})]}),"\n",(0,t.jsx)(n.h3,{id:"12-\u63d0\u6848\u8bc4\u5ba1",children:"1.2. \u63d0\u6848\u8bc4\u5ba1"}),"\n",(0,t.jsx)(n.p,{children:"\u7b80\u5355\u7684API\u53d1\u51fa\u6765\u540e\u5927\u5bb6\u6587\u5b57\u8ba8\u8bba\u5373\u53ef\uff1b"}),"\n",(0,t.jsx)(n.p,{children:"\u91cd\u8981\u6216\u590d\u6742\u7684API\u8bbe\u8ba1\u53ef\u4ee5\u7ec4\u7ec7\u793e\u533a\u4f1a\u8bae\u8fdb\u884c\u8bc4\u5ba1\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e8c\u5f00\u53d1",children:"\u4e8c\u3001\u5f00\u53d1"}),"\n",(0,t.jsx)(n.h3,{id:"21-\u4ee3\u7801\u89c4\u8303",children:"2.1. \u4ee3\u7801\u89c4\u8303"}),"\n",(0,t.jsx)(n.h3,{id:"22-\u6d4b\u8bd5\u89c4\u8303",children:"2.2. \u6d4b\u8bd5\u89c4\u8303"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6709\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,t.jsx)(n.li,{children:"\u6709client demo\uff0c\u53ef\u4ee5\u62ff\u6765\u505a\u6f14\u793a\u3001\u5f53\u96c6\u6210\u6d4b\u8bd5"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"23-\u6587\u6863\u89c4\u8303",children:"2.3. \u6587\u6863\u89c4\u8303"}),"\n",(0,t.jsx)(n.p,{children:"\u539f\u5219\uff1a\u9700\u8981\u5199\u7ed9\u7528\u6237\u770b\u7684\u6587\u6863\uff1b\u81f3\u4e8e\u7ed9\u5f00\u53d1\u8005\u770b\u7684\u8bbe\u8ba1\u6587\u6863\uff0c\u56e0\u4e3a\u65f6\u95f4\u957f\u4e86\u540e\u53ef\u80fd\u8fc7\u671f\u3001\u548c\u4ee3\u7801\u4e0d\u4e00\u81f4\uff0c\u53ef\u4ee5\u4e0d\u5199\uff0c\u901a\u8fc7\u8d34proposal issue\u7684\u94fe\u63a5\u3001\u5728\u4ee3\u7801\u91cc\u5199\u6ce8\u91ca\u6765\u89e3\u91ca\u8bbe\u8ba1\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"231-quick-start",children:"2.3.1. Quick start"}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u6709\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8fd9API\u662f\u5e72\u561b\u7684"}),"\n",(0,t.jsx)(n.li,{children:"\u8fd9\u4e2aquickstart\u662f\u5e72\u561b\u7684\uff0c\u60f3\u5b9e\u73b0\u5565\u6548\u679c\uff0c\u6700\u597d\u6709\u4e2a\u56fe\u89e3\u91ca\u4e0b"}),"\n",(0,t.jsx)(n.li,{children:"\u64cd\u4f5c\u6b65\u9aa4"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6b63\u4f8b\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/dapr/quickstarts/tree/v1.0.0/pub-sub",children:"Dapr pub-sub quickstart"})," \u5728\u64cd\u4f5c\u4e4b\u524d\u8d34\u56fe\u89e3\u91ca\u4e0b\u8981\u505a\u4ec0\u4e48\u4e8b\u60c5"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img.png",src:s(7649).A+"",width:"2741",height:"1549"})}),"\n",(0,t.jsx)(n.p,{children:"\u53cd\u4f8b\uff1a\u6587\u6863\u53ea\u5199\u4e86\u64cd\u4f5c\u6b65\u9aa41234\uff0c\u7528\u6237\u770b\u4e0d\u61c2\u64cd\u4f5c\u8fd9\u4e9b\u60f3\u5e72\u5565"}),"\n",(0,t.jsx)(n.h4,{id:"232-\u4f7f\u7528\u6587\u6863",children:"2.3.2. \u4f7f\u7528\u6587\u6863"}),"\n",(0,t.jsxs)(n.p,{children:['\u6587\u6863\u8def\u5f84\u5728"\u7528\u6237\u624b\u518c--\u63a5\u53e3\u6587\u6863"\u4e0b\uff0c\u4f8b\u5982 State API\u7684\u89c1 ',(0,t.jsx)(n.a,{href:"https://mosn.io/layotto/#/zh/api_reference/state/reference",children:"https://mosn.io/layotto/#/zh/api_reference/state/reference"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8c03\u7814\u53d1\u73b0Dapr\u7684\u4f7f\u7528\u6587\u6863\u8f83\u591a\uff0c\u6bd4\u5982\u5149State API\u5c31\u6709:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/developing-applications/building-blocks/state-management/",children:"https://docs.dapr.io/developing-applications/building-blocks/state-management/"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://docs.dapr.io/reference/api/state_api/",children:"https://docs.dapr.io/reference/api/state_api/"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.dapr.io/operations/components/setup-state-store/",children:"https://docs.dapr.io/operations/components/setup-state-store/"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.dapr.io/reference/components-reference/supported-state-stores/",children:"https://docs.dapr.io/reference/components-reference/supported-state-stores/"})}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u5904\u4e8e\u9879\u76ee\u65e9\u671f\uff0c\u53ef\u4ee5\u8f7b\u4e00\u4e9b"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u6709\uff1a"}),"\n",(0,t.jsx)(n.h5,{id:"what\u8fd9\u4e2aapi\u662f\u5565\u89e3\u51b3\u5565\u95ee\u9898",children:"what.\u8fd9\u4e2aAPI\u662f\u5565\uff0c\u89e3\u51b3\u5565\u95ee\u9898"}),"\n",(0,t.jsx)(n.h5,{id:"when\u4ec0\u4e48\u573a\u666f\u9002\u5408\u7528\u8fd9\u4e2aapi",children:"when.\u4ec0\u4e48\u573a\u666f\u9002\u5408\u7528\u8fd9\u4e2aAPI"}),"\n",(0,t.jsx)(n.h5,{id:"how\u600e\u4e48\u7528\u8fd9\u4e2aapi",children:"how.\u600e\u4e48\u7528\u8fd9\u4e2aAPI"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u63a5\u53e3\u5217\u8868\u3002\u4f8b\u5982\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img_4.png",src:s(6076).A+"",width:"518",height:"519"})}),"\n",(0,t.jsx)(n.p,{children:'\u5217\u51fa\u6765\u6709\u54ea\u4e9b\u63a5\u53e3\uff0c\u4e00\u65b9\u9762\u7701\u7684\u7528\u6237\u81ea\u5df1\u53bb\u7ffbproto\u3001\u4e0d\u77e5\u9053\u54ea\u4e9b\u662f\u76f8\u5173API,\u4e00\u65b9\u9762\u907f\u514d\u7528\u6237\u4ea7\u751f"\u8fd9\u9879\u76ee\u8fde\u63a5\u53e3\u6587\u6863\u90fd\u6ca1\u6709\uff1f\uff01"\u7684\u53cd\u611f'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5173\u4e8e\u63a5\u53e3\u7684\u51fa\u5165\u53c2\uff1a\u62ffproto\u6ce8\u91ca\u5f53\u63a5\u53e3\u6587\u6863",(0,t.jsx)(n.br,{}),"\n","\u8003\u8651\u5230\u63a5\u53e3\u6587\u6863\u7528\u4e2d\u82f1\u6587\u5199\u8981\u5199\u4e24\u4efd\u3001\u65f6\u95f4\u957f\u4e86\u8fd8\u6709\u53ef\u80fd\u548c\u4ee3\u7801\u4e0d\u4e00\u81f4\uff0c\u56e0\u6b64\u5efa\u8bae\u4e0d\u5199\u63a5\u53e3\u6587\u6863\uff0c\u76f4\u63a5\u628aproto\u6ce8\u91ca\u5199\u7684\u8db3\u591f\u8be6\u7ec6\u3001\u5f53\u63a5\u53e3\u6587\u6863\u3002\u4f8b\u5982\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"// GetStateRequest is the message to get key-value states from specific state store.\nmessage GetStateRequest {\n  // Required. The name of state store.\n  string store_name = 1;\n\n  // Required. The key of the desired state\n  string key = 2;\n\n  // (optional) read consistency mode\n  StateOptions.StateConsistency consistency = 3;\n\n  // (optional) The metadata which will be sent to state store components.\n  map<string, string> metadata = 4;\n}\n\n// StateOptions configures concurrency and consistency for state operations\nmessage StateOptions {\n  // Enum describing the supported concurrency for state.\n  // The API server uses Optimized Concurrency Control (OCC) with ETags.\n  // When an ETag is associated with an save or delete request, the store shall allow the update only if the attached ETag matches with the latest ETag in the database.\n  // But when ETag is missing in the write requests, the state store shall handle the requests in the specified strategy(e.g. a last-write-wins fashion).\n  enum StateConcurrency {\n    CONCURRENCY_UNSPECIFIED = 0;\n    // First write wins\n    CONCURRENCY_FIRST_WRITE = 1;\n    // Last write wins\n    CONCURRENCY_LAST_WRITE = 2;\n  }\n  // Enum describing the supported consistency for state.\n  enum StateConsistency {\n    CONSISTENCY_UNSPECIFIED = 0;\n    //  The API server assumes data stores are eventually consistent by default.A state store should:\n    //\n    // - For read requests, the state store can return data from any of the replicas\n    // - For write request, the state store should asynchronously replicate updates to configured quorum after acknowledging the update request.\n    CONSISTENCY_EVENTUAL = 1;\n\n    // When a strong consistency hint is attached, a state store should:\n    //\n    // - For read requests, the state store should return the most up-to-date data consistently across replicas.\n    // - For write/delete requests, the state store should synchronisely replicate updated data to configured quorum before completing the write request.\n    CONSISTENCY_STRONG = 2;\n  }\n\n  StateConcurrency concurrency = 1;\n  StateConsistency consistency = 2;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u5c31\u8981\u6c42proto\u6ce8\u91ca\u91cc\u5199\u6e05\u695a\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u662f\u5fc5\u4f20\u53c2\u6570\u8fd8\u662f\u53ef\u9009\u53c2\u6570\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u89e3\u91ca\u8fd9\u4e2a\u5b57\u6bb5\u5565\u542b\u4e49\uff1b\u5149\u89e3\u91ca\u5b57\u9762\u610f\u601d\u662f\u4e0d\u591f\u7684\uff0c\u8981\u89e3\u91ca\u80cc\u540e\u7684\u4f7f\u7528\u673a\u5236\uff0c\u6bd4\u5982\u4e0a\u9762\u7684consistency\u548cconcurrency\u8981\u89e3\u91ca\u7528\u6237\u4f20\u4e86\u67d0\u4e2a\u9009\u9879\u540e\uff0c\u670d\u52a1\u5668\u80fd\u63d0\u4f9b\u4ec0\u4e48\u6837\u7684\u4fdd\u8bc1"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uff08consistency\u548cconcurrency\u4e0a\u9762\u7684\u6ce8\u91ca\u5176\u5b9e\u662f\u6211\u628aDapr\u6587\u6863\u4e0a\u7684\u63cf\u8ff0\u7cbe\u7b80\u540e\u7c98\u8fc7\u6765\u7684\uff0c\u7701\u4e86\u5199\u53cc\u8bed\u6587\u6863\uff09"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6ce8\u91ca\u8bb2\u4e0d\u6e05\u695a\u7684\uff0c\u5728\u6587\u6863\u4e0a\u89e3\u91ca"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"why\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bbe\u8ba1",children:"why.\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bbe\u8ba1"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u8bbe\u8ba1\u6587\u6863\u7684\u8bdd\u8d34\u4e2a\u6587\u6863\u94fe\u63a5\uff0c\u6ca1\u6587\u6863\u7684\u8bdd\u8d34\u4e2aproposal issue\u94fe\u63a5"}),"\n",(0,t.jsx)(n.h4,{id:"233-\u4ecb\u7ecdapi\u901a\u7528\u914d\u7f6e\u7684\u6587\u6863",children:"2.3.3. \u4ecb\u7ecdAPI\u901a\u7528\u914d\u7f6e\u7684\u6587\u6863"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982",(0,t.jsx)(n.a,{href:"https://mosn.io/layotto/#/zh/component_specs/state/common",children:"https://mosn.io/layotto/#/zh/component_specs/state/common"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"}),"\n",(0,t.jsx)(n.li,{children:"\u89e3\u91ca\u8fd9\u4e2aAPI\u7684\u901a\u7528\u914d\u7f6e\uff0c\u6bd4\u5982keyPrefix"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"234-\u4ecb\u7ecd\u7ec4\u4ef6\u914d\u7f6e\u7684\u6587\u6863",children:"2.3.4. \u4ecb\u7ecd\u7ec4\u4ef6\u914d\u7f6e\u7684\u6587\u6863"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982",(0,t.jsx)(n.a,{href:"https://mosn.io/layotto/#/zh/component_specs/state/redis",children:"https://mosn.io/layotto/#/zh/component_specs/state/redis"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u914d\u7f6e\u9879\u8bf4\u660e"}),"\n",(0,t.jsx)(n.li,{children:"\u60f3\u542f\u52a8\u8fd9\u4e2a\u7ec4\u4ef6\u8dd1demo\u7684\u8bdd\uff0c\u600e\u4e48\u542f\u52a8"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"24-\u6ce8\u91ca\u89c4\u8303",children:"2.4. \u6ce8\u91ca\u89c4\u8303"}),"\n",(0,t.jsx)(n.h4,{id:"proto\u6ce8\u91ca-as-doc",children:"proto\u6ce8\u91ca as doc"}),"\n",(0,t.jsx)(n.p,{children:"\u89c1\u4e0a"}),"\n",(0,t.jsx)(n.h4,{id:"\u7ec4\u4ef6api-\u6ce8\u91ca-as-doc",children:"\u7ec4\u4ef6API \u6ce8\u91ca as doc"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u5199\u53cc\u8bed\u8bbe\u8ba1\u6587\u6863\uff0c\u90a3\u4e48\u7ec4\u4ef6API\u7684\u6ce8\u91ca\u8981\u627f\u62c5\u8bbe\u8ba1\u6587\u6863\u7684\u4f5c\u7528\uff08\u5411\u5176\u4ed6\u5f00\u53d1\u8005\u89e3\u91ca\uff09\u3002\u53ef\u4ee5\u8d34\u4e0bproposal issue\u7684\u94fe\u63a5"}),"\n",(0,t.jsx)(n.p,{children:'\u5224\u65ad\u5199\u5f97\u597d\u4e0d\u597d\u7684\u6807\u51c6\u662f"\u53d1\u51fa\u53bb\u540e\uff0c\u793e\u533a\u7231\u597d\u8005\u60f3\u8d21\u732e\u7ec4\u4ef6\u7684\u8bdd\uff0c\u80fd\u5426\u4e0d\u5f53\u9762\u63d0\u95ee\u3001\u81ea\u5df1\u770b\u9879\u76ee\u5c31\u80fd\u4e0a\u624b\u5f00\u53d1\u7ec4\u4ef6"'}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u89c9\u5f97\u6ce8\u91ca\u89e3\u91ca\u4e0d\u6e05\u695a\uff0c\u5c31\u5199\u4e2a\u8bbe\u8ba1\u6587\u6863\uff0c\u6216\u8005\u8865\u5145\u4e0bproposal issue\u3001\u5199\u7684\u66f4\u8be6\u7ec6\u4e9b\u5427"}),"\n",(0,t.jsx)(n.h4,{id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",children:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsx)(n.p,{children:"\u786e\u4fdd\u6ca1\u6709\u4e2d\u6587\u6ce8\u91ca\uff1b"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u7528\u5199\u65e0\u610f\u4e49\u6ce8\u91ca\uff08\u628a\u65b9\u6cd5\u540d\u590d\u8ff0\u4e00\u904d\uff09\uff0c\u6bd4\u5982\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"\t//StopSubscribe stop subs\n    StopSubscribe()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e09\u63d0\u4ea4pull-request",children:"\u4e09\u3001\u63d0\u4ea4pull request"}),"\n",(0,t.jsx)(n.h3,{id:"31-\u4e0d\u7b26\u5408\u5f00\u53d1\u89c4\u8303\u7684pr\u4e0d\u53ef\u4ee5\u5408\u5e76\u8fdb\u4e3b\u5e72",children:"3.1. \u4e0d\u7b26\u5408\u5f00\u53d1\u89c4\u8303\u7684pr\u4e0d\u53ef\u4ee5\u5408\u5e76\u8fdb\u4e3b\u5e72"}),"\n",(0,t.jsx)(n.h3,{id:"32-cr\u4eba\u6570",children:"3.2. cr\u4eba\u6570"}),"\n",(0,t.jsx)(n.p,{children:"\u65b0\u589eAPI\u7684code review\u9700\u8981\u4e24\u4e2a\u4ebareview\uff0c\u540e\u7eed\u6709\u673a\u5668\u4eba\u81ea\u52a8\u68c0\u67e5\u540e\u6539\u62101\u4e2a\u4ebareview\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4ed6pull request\u7684cr\u4eba\u6570\u968f\u610f\uff0c\u4e0d\u505a\u7ea6\u675f\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7649:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/img-0552604923c4cb9b5ac7ab0bc78a8cf4.png"},9329:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},4570:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbQAAABfCAYAAACAwDKzAAAYRUlEQVR4Xu2d968cRdaG9+9AgAgSIJIwSESREQgEApOjyCZHExeWbHIOIoNFxmtjQIDBiwERzJKWIDKIQQQB+4ExCGxMmu97mu+M6p7OPTV9x/e+Pzyy75zu6ZruqvNWnTpV/bfvvvuuK4QQQizu/M1/IIQQQiyOSNCEEEKMCSRoQgghxgQSNCGEEGOCgQra/PnzuwsWLOj+9utv3d9//737559/CiGEGAfg8/H9aABa4PVhEAxE0ObNm9dduHBh6gcKIYQYn6AJaIPXi5hEFzQKvGjRotSPEUIIMb5BGwYpatEFTSMzIYQQeaARXjdiEVXQiJP6wgshhBAhg5pTiypoTP75ggshhBAhaIXXjxhEFTQyWnzBhRBCiBC0wutHDKIKmlLzhRBClIFWeP2IQVRB84UWQgghsvD6EQMJmhBCiNbx+hEDCZoQQojW8foRAwmaEEKI1vH6EQMJmhBCiNbx+hEDCZoQQojW8foRAwmaEEKI1vH6EQMJmhBCiNbx+hEDCZoQQojW8foRAwmaEEKI1vH6EQMJmhBCiNbx+hEDCZoQQojW8foRAwmaEEKI1vH6EQMJmhBCiNbx+hEDCZoQQojW8foRAwmaEEKI1vH6EQMJmhBCiNbx+hGDMSVo8+bN6+65557dZ555JmXL4pxzzuluu+223cmTJ6dsg+Dcc8/t7rbbbt2LLrqo++2336bsw8rPP//cveSSSxLefPPNlL0MXrd+/PHHd994442UbVh4/fXXu6uuump366237r747xdTdvEX3Ke999474cMPPxxh++STT7rPPvts6pw60EYOOeSQ7m233ZayZXH11Vd3d9999+Q8bxsE1OVp0/6ZtOMjjzwyZY/NI4880t15550TFixYkLIX8eSTTyb+DYbR33j9iMGYErRrr722u8QSSyTMnTs3Zffss88+ybE8cG+LDY1/qaWWSq630UYbJa8g98cMK998803vvt5zzz0pexmPP/547/wsUfvpp5+6s2bNqgUi67+nH0455ZSkfEsvvXT3+++/T9ljwXNvgz/++CN17RjQWcxqY9SLJZdcsrv88st3O51O6ryqrLbaasl3n3rqqSlbFptuumly/H777ZeyDQoE1O4BguPtMbnpppt616pb5++7777euV9+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"},6076:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/img_4-8f7a4509630d3e6fa2113fc489fb0e78.png"},8453:(e,n,s)=>{s.d(n,{R:()=>h,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function h(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:h(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);