"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[7304],{3966:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=o(4848),s=o(8453);const t={},c="\u7ec4\u4ef6\u5f00\u53d1\u6307\u5357",d={id:"development/developing-component",title:"\u7ec4\u4ef6\u5f00\u53d1\u6307\u5357",description:"\u611f\u8c22\u60a8\u5bf9Layotto\u7684\u652f\u6301\uff01",source:"@site/docs/development/developing-component.md",sourceDirName:"development",slug:"/development/developing-component",permalink:"/docs/development/developing-component",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/development/developing-component.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u4f7f\u7528\u5de5\u5177\u81ea\u52a8\u6d4b\u8bd5 Quickstart \u6587\u6863",permalink:"/docs/development/test-quickstart"},next:{title:"layotto\u7ec4\u4ef6\u5f15\u7528",permalink:"/docs/development/component_ref/"}},r={},l=[{value:"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c",id:"\u4e00\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u4e8c\u3001\u5f00\u53d1\u7ec4\u4ef6\u548c\u5355\u5143\u6d4b\u8bd5",id:"\u4e8c\u5f00\u53d1\u7ec4\u4ef6\u548c\u5355\u5143\u6d4b\u8bd5",level:2},{value:"2.1. \u5728components/api\u540d \u76ee\u5f55\u4e0b\u65b0\u5efa\u6587\u4ef6\u5939\uff0c\u5f00\u53d1\u60a8\u7684\u7ec4\u4ef6",id:"21-\u5728componentsapi\u540d-\u76ee\u5f55\u4e0b\u65b0\u5efa\u6587\u4ef6\u5939\u5f00\u53d1\u60a8\u7684\u7ec4\u4ef6",level:3},{value:"2.2. \u590d\u5236\u7c98\u8d34\u522b\u7684\u7ec4\u4ef6",id:"22-\u590d\u5236\u7c98\u8d34\u522b\u7684\u7ec4\u4ef6",level:3},{value:"2.3. \u8bb0\u5f97\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u54e6\uff01",id:"23-\u8bb0\u5f97\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u54e6",level:3},{value:"2.3.1. \u5355\u5143\u6d4b\u8bd5\u7684\u6ce8\u610f\u4e8b\u9879",id:"231-\u5355\u5143\u6d4b\u8bd5\u7684\u6ce8\u610f\u4e8b\u9879",level:4},{value:"2.3.2. \u5982\u4f55\u5728\u5355\u5143\u6d4b\u8bd5\u4e2dmock\u6389\u4f9d\u8d56\u7684\u73af\u5883\uff1f\uff08\u6bd4\u5982mock zookeeper\u6216\u8005mock redis)",id:"232-\u5982\u4f55\u5728\u5355\u5143\u6d4b\u8bd5\u4e2dmock\u6389\u4f9d\u8d56\u7684\u73af\u5883\u6bd4\u5982mock-zookeeper\u6216\u8005mock-redis",level:4},{value:"\u4e09\u3001\u5728Layotto\u542f\u52a8\u65f6\u6ce8\u518c\u7ec4\u4ef6",id:"\u4e09\u5728layotto\u542f\u52a8\u65f6\u6ce8\u518c\u7ec4\u4ef6",level:2},{value:"3.1. \u5728main.go\u91ccimport\u4f60\u7684\u7ec4\u4ef6",id:"31-\u5728maingo\u91ccimport\u4f60\u7684\u7ec4\u4ef6",level:3},{value:"3.2. \u5728main.go\u7684NewRuntimeGrpcServer\u51fd\u6570\u4e2d\u6ce8\u518c\u4f60\u7684\u7ec4\u4ef6",id:"32-\u5728maingo\u7684newruntimegrpcserver\u51fd\u6570\u4e2d\u6ce8\u518c\u4f60\u7684\u7ec4\u4ef6",level:3},{value:"\u56db\u3001\u65b0\u589edemo\uff0c\u7528\u4e8e\u96c6\u6210\u6d4b\u8bd5",id:"\u56db\u65b0\u589edemo\u7528\u4e8e\u96c6\u6210\u6d4b\u8bd5",level:2},{value:"4.1. \u65b0\u589e\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6",id:"41-\u65b0\u589e\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6",level:3},{value:"4.2. \u65b0\u589e\u5ba2\u6237\u7aefdemo",id:"42-\u65b0\u589e\u5ba2\u6237\u7aefdemo",level:3},{value:"a. \u5982\u679c\u8be5\u7ec4\u4ef6\u6709\u901a\u7528\u5ba2\u6237\u7aef\uff0c\u5c31\u4e0d\u7528\u5f00\u53d1\u5566",id:"a-\u5982\u679c\u8be5\u7ec4\u4ef6\u6709\u901a\u7528\u5ba2\u6237\u7aef\u5c31\u4e0d\u7528\u5f00\u53d1\u5566",level:4},{value:"b. \u5982\u679c\u8be5\u7ec4\u4ef6\u6ca1\u6709\u901a\u7528\u5ba2\u6237\u7aef\uff0c\u6216\u8005\u9700\u8981\u5b9a\u5236\u4e00\u4e9bmetadata\u4f20\u53c2\uff0c\u90a3\u5c31\u590d\u5236\u7c98\u8d34\u6539\u4e00\u6539",id:"b-\u5982\u679c\u8be5\u7ec4\u4ef6\u6ca1\u6709\u901a\u7528\u5ba2\u6237\u7aef\u6216\u8005\u9700\u8981\u5b9a\u5236\u4e00\u4e9bmetadata\u4f20\u53c2\u90a3\u5c31\u590d\u5236\u7c98\u8d34\u6539\u4e00\u6539",level:4},{value:"4.3. \u53c2\u7167quickstart\u6587\u6863\uff0c\u542f\u52a8Layotto\u548cdemo\u770b\u770b\u6709\u6ca1\u6709\u62a5\u9519",id:"43-\u53c2\u7167quickstart\u6587\u6863\u542f\u52a8layotto\u548cdemo\u770b\u770b\u6709\u6ca1\u6709\u62a5\u9519",level:3},{value:"\u4e94\u3001\u65b0\u589e\u7ec4\u4ef6\u8bf4\u660e\u6587\u6863",id:"\u4e94\u65b0\u589e\u7ec4\u4ef6\u8bf4\u660e\u6587\u6863",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u7ec4\u4ef6\u5f00\u53d1\u6307\u5357",children:"\u7ec4\u4ef6\u5f00\u53d1\u6307\u5357"}),"\n",(0,i.jsx)(n.p,{children:"\u611f\u8c22\u60a8\u5bf9Layotto\u7684\u652f\u6301\uff01"}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u6587\u6863\u63cf\u8ff0\u4e86\u5982\u4f55\u5f00\u53d1Layotto\u7ec4\u4ef6\u3002Layotto\u7ec4\u4ef6\u7528Go\u8bed\u8a00\u7f16\u5199\uff0c\u5982\u679c\u60a8\u5bf9Go\u8bed\u8a00\u4e0d\u719f\u6089\u53ef\u4ee5\u770b\u4e0b",(0,i.jsx)(n.a,{href:"https://tour.golang.org/welcome/1",children:"Go\u6559\u7a0b"})," \u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5f00\u53d1\u65b0\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u53c2\u8003\u5df2\u6709\u7684\u5176\u4ed6\u7ec4\u4ef6\u3002\u6bd4\u5982\u60a8\u60f3\u7528zookeeper\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501API\u7684\u8bdd\uff0c\u53ef\u4ee5\u53c2\u8003\u5206\u5e03\u5f0f\u9501API\u5df2\u6709\u7684\u5b9e\u73b0\uff08\u4f8b\u5982redis\u7684\u5b9e\u73b0\uff09\u4ee5\u53ca\u5206\u5e03\u5f0f\u9501API\u7684demo\u3001\u8bbe\u8ba1\u6587\u6863\uff0c\u8fd9\u4f1a\u8ba9\u5f00\u53d1\u7b80\u5355\u5f88\u591a\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4e00\u51c6\u5907\u5de5\u4f5c",children:"\u4e00\u3001\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"git clone\u4e0b\u8f7d\u4ee3\u7801\u5230\u60a8\u559c\u6b22\u7684\u76ee\u5f55"}),"\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528Docker\u542f\u52a8\u60a8\u9700\u8981\u7684\u73af\u5883\u3002\u6bd4\u5982\u60a8\u60f3\u7528zookeeper\u5f00\u53d1\u5206\u5e03\u5f0f\u9501API\uff0c\u5c31\u9700\u8981\u672c\u5730\u7528Docker\u542f\u52a8\u4e00\u4e2azookeeper\u5bb9\u5668\uff0c\u7528\u4e8e\u672c\u5730\u6d4b\u8bd5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u672c\u5730\u6ca1\u6709Docker\u4e5f\u4e0d\u7528\u5bb3\u6015\uff0c\u53ef\u4ee5\u53c2\u7167 ",(0,i.jsx)(n.a,{href:"https://www.runoob.com/docker/windows-docker-install.html",children:"Docker Desktop\u6559\u7a0b"})," \u88c5\u4e00\u4e2aDocker Desktop,Mac\u548cWindows\u90fd\u53ef\u4ee5\uff0c\u7528\u8d77\u6765\u7279\u522b\u7b80\u5355\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e8c\u5f00\u53d1\u7ec4\u4ef6\u548c\u5355\u5143\u6d4b\u8bd5",children:"\u4e8c\u3001\u5f00\u53d1\u7ec4\u4ef6\u548c\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,i.jsx)(n.h3,{id:"21-\u5728componentsapi\u540d-\u76ee\u5f55\u4e0b\u65b0\u5efa\u6587\u4ef6\u5939\u5f00\u53d1\u60a8\u7684\u7ec4\u4ef6",children:"2.1. \u5728components/api\u540d \u76ee\u5f55\u4e0b\u65b0\u5efa\u6587\u4ef6\u5939\uff0c\u5f00\u53d1\u60a8\u7684\u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u6587\u4ef6\u5939\u540d\u7528\u7ec4\u4ef6\u540d\u5c31\u884c\uff0c\u6bd4\u5982redis\u7684\u7ec4\u4ef6\u5982\u4e0b\u56fe"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:o(7716).A+"",width:"505",height:"383"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u7528\u5230\u7684\u5de5\u5177\u7c7b\uff08\u4e0d\u662f\u5f3a\u5236\u4e00\u5b9a\u8981\u7528\u54c8\uff0c\u5217\u5728\u8fd9\u53ea\u662f\u4f9b\u53c2\u8003\uff0c\u5e0c\u671b\u80fd\u7b80\u5316\u5f00\u53d1\uff09\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u7ec4\u4ef6\u91cc\u542f\u52a8\u65b0\u534f\u7a0b\uff0c\u65b0\u534f\u7a0b\u91ccpanic\u4f1a\u5bfc\u81f4\u6574\u4e2aserver\u90fdpanic\u5b95\u6389\uff0c\u5f88\u5371\u9669\uff0c\u6240\u4ee5\u4e00\u822cgo func\u8d77\u65b0\u534f\u7a0b\u540e\u90fd\u4f1a\u5148\u5199defer recover\u76f8\u5173\u7684\u903b\u8f91\uff0c\u5982\u679c\u61d2\u5f97\u81ea\u5df1\u5199\u53ef\u4ee5\u76f4\u63a5\u7528\u5c01\u88c5\u597d\u7684\u5de5\u5177\u7c7b utils.GoWithRecover \uff0c\u5728mosn.io/pkg/utils/goroutine.go\u91cc"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u65e5\u5fd7\u5de5\u5177\u7c7b\u5e38\u7528log.DefaultLogger,\u5728mosn.io/pkg/log/errorlog.go\u91cc"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5176\u4ed6\uff1aLayotto\u7684pkg/common\u76ee\u5f55\u4e0b\u6709\u4e00\u4e9b\u5de5\u5177\u7c7b\uff0c\u4ee5\u53camosn.io/pkg\u4e0b\u4e5f\u6709\u5f88\u591a\u5de5\u5177\u7c7b"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"22-\u590d\u5236\u7c98\u8d34\u522b\u7684\u7ec4\u4ef6",children:"2.2. \u590d\u5236\u7c98\u8d34\u522b\u7684\u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u7b80\u5355\u8d77\u89c1\uff0c\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u7c98\u8d34\u522b\u7684\u7ec4\u4ef6\u8fc7\u6765\uff0c\u4fee\u6539\u5f00\u53d1\u3002\u6bd4\u5982\u60f3\u7528zookeeper\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501API\u7684\u8bdd\uff0c\u53ef\u4ee5\u628aredis\u7ec4\u4ef6\u590d\u5236\u7c98\u8d34\u8fc7\u6765\u6539"}),"\n",(0,i.jsx)(n.h3,{id:"23-\u8bb0\u5f97\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u54e6",children:"2.3. \u8bb0\u5f97\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u54e6\uff01"}),"\n",(0,i.jsx)(n.h4,{id:"231-\u5355\u5143\u6d4b\u8bd5\u7684\u6ce8\u610f\u4e8b\u9879",children:"2.3.1. \u5355\u5143\u6d4b\u8bd5\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsx)(n.p,{children:"\u5355\u6d4b\u4f1a\u5728\u5404\u79cd\u73af\u5883\u8dd1\uff08\u6bd4\u5982\u6bcf\u6b21\u6709\u4eba\u63d0\u4ea4\u4ee3\u7801\u540e\u5c31\u4f1a\u5728github action\u63d0\u4f9b\u7684docker\u5bb9\u5668\u91cc\u8dd1\uff0c\u6bd4\u5982\u5728\u522b\u7684\u5f00\u53d1\u8005\u7684\u7535\u8111\u91cc\u8dd1\uff09\uff0c\u6240\u4ee5\u5f97\u4fdd\u8bc1\u4ed6\u4eec\u80fd\u6b63\u5e38\u8dd1\u901a\u8fc7\u3002\u9700\u8981\u8003\u8651\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u522b\u4eba\u7684\u73af\u5883\u91cc\u53ef\u80fd\u6ca1\u63d0\u524d\u88c5zookeeper\uff0c\u6240\u4ee5\u5927\u5bb6\u5728\u5199\u5355\u6d4b\u7684\u65f6\u5019\uff0c\u8981\u4e48\u628a\u7f51\u7edc\u8c03\u7528\u7684\u4ee3\u7801\u7ed9mock\u6389\uff08\u6bd4\u5982\u628a\u8c03zookeeper\u7684\u90a3\u90e8\u5206\u4ee3\u7801\u5728\u5355\u6d4b\u91ccmock\u6389\uff09\uff0c\u8981\u4e48\u5c31\u4f1a\u5728\u5355\u6d4b\u91cc\u8d77\u4e00\u4e2a\u7b80\u6613\u7248\u7684zookeeper\uff08\u6bd4\u5982redis\u7684\u5355\u6d4b\u91cc\uff0c\u4f1a\u8d77\u4e00\u4e2amini-redis)\u8fd9\u6837\u6765\u4fdd\u8bc1\u522b\u4eba\u8dd1\u5355\u6d4b\u7684\u65f6\u5019\u90fd\u80fd\u8dd1\u901a\u8fc7~"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u56e0\u4e3a\u6bcf\u6b21\u6709\u4eba\u63d0\u4ea4\u4ee3\u7801\u90fd\u4f1a\u81ea\u52a8\u8dd1\u5355\u5143\u6d4b\u8bd5\u3001\u8dd1\u901a\u8fc7\u624d\u80fd\u5408\u5e76\uff0c\u6240\u4ee5\u5728\u5355\u5143\u6d4b\u8bd5\u91cc\u5e94\u5c3d\u91cf\u907f\u514dsleep\u592a\u4e45\uff08\u7761\u592a\u4e45\u4f1a\u5bfc\u81f4\u5355\u6d4b\u8dd1\u7684\u7279\u522b\u6162\uff09"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"232-\u5982\u4f55\u5728\u5355\u5143\u6d4b\u8bd5\u4e2dmock\u6389\u4f9d\u8d56\u7684\u73af\u5883\u6bd4\u5982mock-zookeeper\u6216\u8005mock-redis",children:"2.3.2. \u5982\u4f55\u5728\u5355\u5143\u6d4b\u8bd5\u4e2dmock\u6389\u4f9d\u8d56\u7684\u73af\u5883\uff1f\uff08\u6bd4\u5982mock zookeeper\u6216\u8005mock redis)"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u822c\u662f\u628a\u6240\u6709\u7f51\u7edc\u8c03\u7528\u7684\u4ee3\u7801\u5c01\u88c5\u6210\u4e00\u4e2ainterface\uff0c\u7136\u540e\u5728ut\u4e2dmock\u6389\u8fd9\u4e2ainterface\u3002\u4ee5apollo\u914d\u7f6e\u4e2d\u5fc3\u7684\u5355\u5143\u6d4b\u8bd5\u4e3a\u4f8b\uff0c\u89c1components/configstores/apollo/configstore.go \u548c components/configstores/apollo/configstore_test.go \uff1a"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u5728configstore.go\u91cc\uff0c\u628a\u6240\u6709\u8c03sdk\u3001\u53d1\u8d77\u7f51\u7edc\u8c03\u7528\u8c03apollo\u7684\u5730\u65b9\u7ed9\u5c01\u88c5\u6210\u4e00\u4e2ainterface"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"mock.png",src:o(8651).A+"",width:"494",height:"460"}),"\n",(0,i.jsx)(n.img,{alt:"img_8.png",src:o(4901).A+"",width:"939",height:"345"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\uff0c\u628a\u4f60\u4ee3\u7801\u4e2d\u8c03sdk\u3001\u505a\u7f51\u7edc\u8c03\u7528\u7684\u4ee3\u7801\u5c01\u88c5\u6210\u4e00\u4e2astruct\u3001\u5b9e\u73b0\u521a\u624d\u7684interface\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_9.png",src:o(3276).A+"",width:"469",height:"165"})}),"\n",(0,i.jsx)(n.p,{children:'\u505a\u4e86\u8fd9\u4e00\u6b65\u91cd\u6784\u540e\uff0c\u4f60\u7684\u4ee3\u7801\u5c31\u6709\u53ef\u6d4b\u6027\u4e86\uff08\u8fd9\u4e5f\u662f"\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1"\u601d\u60f3\u7684\u4e00\u79cd\u4f53\u73b0\uff0c\u4e3a\u4e86\u8ba9\u4ee3\u7801\u53ef\u6d4b\u6027\u597d\uff0c\u628a\u4ee3\u7801\u91cd\u6784\u6210\u53ef\u4ee5\u4f9d\u8d56\u6ce8\u5165\u7684\u5f62\u5f0f\uff09'}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u5199ut\u7684\u65f6\u5019\uff0c\u53ef\u4ee5mock\u521a\u624d\u7684interface\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_10.png",src:o(4622).A+"",width:"565",height:"331"})}),"\n",(0,i.jsx)(n.p,{children:"\u628amock\u540e\u7684\u4e1c\u897f\u6ce8\u5165\u5230\u8981\u6d4b\u7684struct\u91cc\u5c31\u884c,\u7136\u540e\u6d4b\u90a3\u4e2astruct\u5c31\u884c"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_11.png",src:o(2935).A+"",width:"812",height:"474"})}),"\n",(0,i.jsx)(n.p,{children:"\u6ce8\uff1a\u4e00\u822c\u201c\u96c6\u6210\u6d4b\u8bd5\u201d\u7684\u65f6\u5019\uff0c\u4f1a\u771f\u6b63\u505a\u7f51\u7edc\u8c03\u7528\u3001\u8c03\u4e00\u4e2a\u6b63\u5e38\u7684zookeeper\u6216\u8005redis\uff1b\u800c\u5355\u6d4b\u6ce8\u91cd\u6d4b\u5c40\u90e8\u903b\u8f91\uff0c\u4e0d\u4f1a\u8c03\u771f\u5b9e\u73af\u5883"}),"\n",(0,i.jsx)(n.h2,{id:"\u4e09\u5728layotto\u542f\u52a8\u65f6\u6ce8\u518c\u7ec4\u4ef6",children:"\u4e09\u3001\u5728Layotto\u542f\u52a8\u65f6\u6ce8\u518c\u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u6309\u7167\u4e0a\u8ff0\u6b65\u9aa4\u53ea\u662f\u5f00\u53d1\u51fa\u4e86\u7ec4\u4ef6\uff0cLayotto\u542f\u52a8\u7684\u65f6\u5019\u5e76\u4e0d\u4f1a\u81ea\u52a8\u52a0\u8f7d\u8fd9\u4e2a\u7ec4\u4ef6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u4e48\u5e94\u8be5\u600e\u4e48\u8ba9Layotto\u5728\u542f\u52a8\u7684\u65f6\u5019\u52a0\u8f7d\u8fd9\u4e2a\u7ec4\u4ef6\u5462\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u5728cmd/layotto/main.go\u91cc\u96c6\u6210\u8fdb\u65b0\u7684\u7ec4\u4ef6\uff0c\u5305\u62ec\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"31-\u5728maingo\u91ccimport\u4f60\u7684\u7ec4\u4ef6",children:"3.1. \u5728main.go\u91ccimport\u4f60\u7684\u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_1.png",src:o(2484).A+"",width:"896",height:"374"})}),"\n",(0,i.jsx)(n.h3,{id:"32-\u5728maingo\u7684newruntimegrpcserver\u51fd\u6570\u4e2d\u6ce8\u518c\u4f60\u7684\u7ec4\u4ef6",children:"3.2. \u5728main.go\u7684NewRuntimeGrpcServer\u51fd\u6570\u4e2d\u6ce8\u518c\u4f60\u7684\u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_4.png",src:o(3929).A+"",width:"1652",height:"511"})}),"\n",(0,i.jsx)(n.p,{children:'\u4e4b\u540e\uff0c\u7528\u6237\u5982\u679c\u5728Layotto\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u4e86"\u6211\u8981\u7528zookeeper"\uff0c\u90a3\u4e48Layotto\u5c31\u4f1a\u521d\u59cb\u5316zookeeper\u7ec4\u4ef6'}),"\n",(0,i.jsx)(n.h2,{id:"\u56db\u65b0\u589edemo\u7528\u4e8e\u96c6\u6210\u6d4b\u8bd5",children:"\u56db\u3001\u65b0\u589edemo\uff0c\u7528\u4e8e\u96c6\u6210\u6d4b\u8bd5"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u5176\u5b9e\u5b8c\u6210\u4e86\u5f00\u53d1\uff0c\u4f46\u662f\u6211\u4eec\u8981\u8ba9\u6574\u4e2a\u6d41\u7a0b\u8dd1\u8d77\u6765\u3001\u6d4b\u4e00\u6d4b\uff0c\u4e8e\u662f\u5c31\u8981\u52a0\u4e00\u4e2a\u96c6\u6210\u6d4b\u8bd5\u7684demo"}),"\n",(0,i.jsx)(n.h3,{id:"41-\u65b0\u589e\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6",children:"4.1. \u65b0\u589e\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4e0a\u6587\u6240\u8bf4\uff1a"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'\u7528\u6237\u5982\u679c\u5728Layotto\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u4e86"\u6211\u8981\u7528zookeeper"\uff0c\u90a3\u4e48Layotto\u5c31\u4f1a\u521d\u59cb\u5316zookeeper\u7ec4\u4ef6'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'\u90a3\u4e48\u7528\u6237\u600e\u4e48\u914d"\u6211\u8981\u7528zookeeper"\u5462\uff1f \u6211\u4eec\u9700\u8981\u7ed9\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e\uff0c\u4e00\u65b9\u9762\u4f9b\u7528\u6237\u53c2\u8003\uff0c\u4e00\u65b9\u9762\u62ff\u6765\u8dd1\u96c6\u6210\u6d4b\u8bd5'}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u590d\u5236\u4e00\u4efd\u522b\u7684\u7ec4\u4ef6\u7684json\u914d\u7f6e\u6587\u4ef6\uff0c\u4f8b\u5982\u5f00\u53d1\u5206\u5e03\u5f0f\u9501\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u590d\u5236configs/config_redis.json\uff0c\u7c98\u8d34\u6210configs/config_zookeeper.json"}),"\n",(0,i.jsx)(n.p,{children:"\u4e4b\u540e\u7f16\u8f91\u4fee\u6539\u4e00\u4e0b\u56fe\u4e2d\u7684\u914d\u7f6e\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_3.png",src:o(3958).A+"",width:"1084",height:"1106"})}),"\n",(0,i.jsx)(n.h3,{id:"42-\u65b0\u589e\u5ba2\u6237\u7aefdemo",children:"4.2. \u65b0\u589e\u5ba2\u6237\u7aefdemo"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5ba2\u6237\u7aefdemo\uff0c\u6bd4\u5982\u5206\u5e03\u5f0f\u9501\u7684\u5ba2\u6237\u7aefdemo\u6709\u4e24\u4e2a\u534f\u7a0b\u5e76\u53d1\u8c03Layotto\u62a2\u9501\u3001\u53ea\u6709\u4e00\u4e2a\u80fd\u62a2\u5230"}),"\n",(0,i.jsx)(n.h4,{id:"a-\u5982\u679c\u8be5\u7ec4\u4ef6\u6709\u901a\u7528\u5ba2\u6237\u7aef\u5c31\u4e0d\u7528\u5f00\u53d1\u5566",children:"a. \u5982\u679c\u8be5\u7ec4\u4ef6\u6709\u901a\u7528\u5ba2\u6237\u7aef\uff0c\u5c31\u4e0d\u7528\u5f00\u53d1\u5566"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679cdemo\u76ee\u5f55\u4e0b\u6709common\u6587\u4ef6\u5939\uff0c\u4ee3\u8868\u8fd9\u662f\u4e2a\u901a\u7528demo\u3001\u80fd\u7ed9\u4e0d\u540c\u7684\u7ec4\u4ef6\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u53c2\u4f20storeName\uff0c\u6709\u8fd9\u4e2a\u5c31\u4e0d\u7528\u518d\u5f00\u53d1demo\u5566"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_6.png",src:o(7291).A+"",width:"231",height:"428"})}),"\n",(0,i.jsx)(n.h4,{id:"b-\u5982\u679c\u8be5\u7ec4\u4ef6\u6ca1\u6709\u901a\u7528\u5ba2\u6237\u7aef\u6216\u8005\u9700\u8981\u5b9a\u5236\u4e00\u4e9bmetadata\u4f20\u53c2\u90a3\u5c31\u590d\u5236\u7c98\u8d34\u6539\u4e00\u6539",children:"b. \u5982\u679c\u8be5\u7ec4\u4ef6\u6ca1\u6709\u901a\u7528\u5ba2\u6237\u7aef\uff0c\u6216\u8005\u9700\u8981\u5b9a\u5236\u4e00\u4e9bmetadata\u4f20\u53c2\uff0c\u90a3\u5c31\u590d\u5236\u7c98\u8d34\u6539\u4e00\u6539"}),"\n",(0,i.jsx)(n.p,{children:"\u6bd4\u5982zookeeper\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501\uff0c\u6709\u4e00\u4e9b\u5b9a\u5236\u914d\u7f6e\uff0c\u6240\u4ee5\u60f3\u81ea\u5df1\u65b0\u5199\u4e2ademo\uff0c\u90a3\u5c31\u590d\u5236\u7c98\u8d34redis\u7684demo\u3001\u6539\u4e00\u6539"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_7.png",src:o(5746).A+"",width:"564",height:"463"})}),"\n",(0,i.jsx)(n.p,{children:"\u6ce8\uff1ademo\u7684\u4ee3\u7801\u91cc\u5982\u679c\u51fa\u73b0\u4e0d\u8be5\u6709\u7684\u9519\u8bef\uff0c\u53ef\u4ee5\u76f4\u63a5panic\u3002\u540e\u7eed\u6211\u4eec\u4f1a\u76f4\u63a5\u7528demo\u8dd1\u96c6\u6210\u6d4b\u8bd5\uff0c\u5982\u679cpanic\u4e86\u4ee3\u8868\u96c6\u6210\u6d4b\u8bd5\u6ca1\u6709\u901a\u8fc7\u3002\n\u4f8b\u5982demo/lock/redis/client.go \u91cc\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"    //....\n\tcli, err := client.NewClient()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n    //....\n"})}),"\n",(0,i.jsx)(n.h3,{id:"43-\u53c2\u7167quickstart\u6587\u6863\u542f\u52a8layotto\u548cdemo\u770b\u770b\u6709\u6ca1\u6709\u62a5\u9519",children:"4.3. \u53c2\u7167quickstart\u6587\u6863\uff0c\u542f\u52a8Layotto\u548cdemo\u770b\u770b\u6709\u6ca1\u6709\u62a5\u9519"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bd4\u5982\u53c2\u8003",(0,i.jsx)(n.a,{href:"/docs/start/lock/start",children:"\u5206\u5e03\u5f0f\u9501API\u7684quickstart\u6587\u6863"})," \uff0c\u542f\u52a8\u4f60\u4f9d\u8d56\u7684\u73af\u5883\uff08\u6bd4\u5982zookeeper\uff09\u3001\u542f\u52a8Layotto\uff08\u8bb0\u5f97\u7528\u4f60\u521a\u624d\u65b0\u589e\u7684\u914d\u7f6e\u6587\u4ef6\uff01\uff09\uff0c\u770b\u770b\u6709\u6ca1\u6709\u62a5\u9519\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6ce8\uff1a\u4e0b\u9762\u8fd9\u4e2aError\u6ca1\u4e8b\uff0c\u65e0\u89c6\u5c31\u597d"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_2.png",src:o(7759).A+"",width:"836",height:"404"})}),"\n",(0,i.jsx)(n.p,{children:"\u542f\u52a8demo\u3001\u8c03\u7528Layotto\uff0c\u770b\u770b\u6709\u6ca1\u6709\u62a5\u9519\u3002\u5982\u679c\u662f\u901a\u7528\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u547d\u4ee4\u91cc\u5e26\u4e0a-s storeName\u4f20\u5165storeName"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_5.png",src:o(9728).A+"",width:"519",height:"334"})}),"\n",(0,i.jsx)(n.p,{children:"\u6ca1\u6709\u62a5\u9519\u7684\u8bdd\u8bf4\u660e\u6d4b\u8bd5\u901a\u8fc7\uff01"}),"\n",(0,i.jsx)(n.h2,{id:"\u4e94\u65b0\u589e\u7ec4\u4ef6\u8bf4\u660e\u6587\u6863",children:"\u4e94\u3001\u65b0\u589e\u7ec4\u4ef6\u8bf4\u660e\u6587\u6863"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u5c31\u7b97\u5b8c\u6210\u4e86\u4ee3\u7801\u5de5\u4f5c\uff0c\u6700\u597d\u80fd\u65b0\u589e\u7ec4\u4ef6\u7684\u914d\u7f6e\u8bf4\u660e\u6587\u6863\uff0c\u8bf4\u660e\u4e00\u4e0b\u8fd9\u4e2a\u7ec4\u4ef6\u652f\u6301\u54ea\u4e9b\u914d\u7f6e\u9879\u3001\u600e\u4e48\u542f\u52a8\u8be5\u7ec4\u4ef6\u4f9d\u8d56\u7684\u73af\u5883\uff08\u6bd4\u5982\u7528docker\u600e\u4e48\u542f\u52a8zookeeper)"}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/docs/component_specs/lock/redis",children:"lock API\u7684redis\u7ec4\u4ef6\u8bf4\u660e(\u4e2d\u6587)"}),"\n\u548c\n",(0,i.jsx)(n.a,{href:"/docs/component_specs/lock/redis",children:"lock API\u7684redis\u7ec4\u4ef6\u8bf4\u660e(\u82f1\u6587)"}),",\u540c\u6837\u53ef\u4ee5\u590d\u5236\u7c98\u8d34\u6539\u4e00\u6539\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7716:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img-ed6f044901d313750a169e7fae5b850d.png"},2484:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_1-d344ffaf7a6dd87def83a1747e3a37ff.png"},4622:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_10-6b39f19e4db2c5de146f82ffbb76223f.png"},2935:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_11-0986a3a47c4ccad9fcdbeef3875abe42.png"},7759:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_2-5e7c28bfced25514591b1d019663a7a8.png"},3958:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_3-3f0336b83566b423cee29bd085a3b7ed.png"},3929:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_4-c239bf46926f7c6b205ed82c392911ad.png"},9728:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_5-2149deb8c2b312422f4f2a1c3903c755.png"},7291:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_6-ee374b56b183779ac643442b46e0ef11.png"},5746:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_7-297f28adc8bb8a917f9e2bf6f9e3f218.png"},4901:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_8-1c2f591603db8e9e21237c6a6c2669c3.png"},3276:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/img_9-142266a6480f95461d00ae38253aa735.png"},8651:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/mock-b7c6e959da5246bb60948edcb1fcfc71.png"},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>d});var i=o(6540);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);