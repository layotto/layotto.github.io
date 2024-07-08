"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[5140],{6827:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=l(4848),o=l(8453);const s={},i="Layotto \u8d21\u732e\u6307\u5357",c={id:"development/CONTRIBUTING",title:"Layotto \u8d21\u732e\u6307\u5357",description:"Layotto \u57fa\u4e8e Apache 2.0 \u8bb8\u53ef\u53d1\u5e03\uff0c\u9075\u5faa\u6807\u51c6\u7684 Github \u5f00\u53d1\u6d41\u7a0b\uff0c\u4f7f\u7528 Github Issue \u8ddf\u8e2a\u95ee\u9898\u5e76\u5c06 Pull Request \u5408\u5e76\u5230 main \u5206\u652f\u4e2d\u3002\u672c\u6587\u6863\u53ef\u4ee5\u5e2e\u52a9\u4f60\u4e86\u89e3\u5982\u4f55\u53c2\u4e0e\u8d21\u732e\u3002",source:"@site/docs/development/CONTRIBUTING.md",sourceDirName:"development",slug:"/development/CONTRIBUTING",permalink:"/layotto/docs/development/CONTRIBUTING",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/development/CONTRIBUTING.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Pluggable Component \u8bbe\u8ba1\u6587\u6863",permalink:"/layotto/docs/design/pluggable/design"},next:{title:"\u65b0\u624b\u653b\u7565\uff1a\u4ece\u96f6\u5f00\u59cb\u6210\u4e3a Layotto \u8d21\u732e\u8005",permalink:"/layotto/docs/development/start-from-zero"}},r={},d=[{value:"\u8d21\u732e\u6d41\u7a0b",id:"\u8d21\u732e\u6d41\u7a0b",level:2},{value:"\u4ee3\u7801\u7ea6\u5b9a",id:"\u4ee3\u7801\u7ea6\u5b9a",level:2},{value:"\u7248\u672c\u547d\u540d\u7ea6\u5b9a",id:"\u7248\u672c\u547d\u540d\u7ea6\u5b9a",level:2},{value:"\u7ef4\u62a4\u8005\u4ee3\u7801\u5ba1\u67e5\u7b56\u7565",id:"\u7ef4\u62a4\u8005\u4ee3\u7801\u5ba1\u67e5\u7b56\u7565",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"layotto-\u8d21\u732e\u6307\u5357",children:"Layotto \u8d21\u732e\u6307\u5357"}),"\n",(0,t.jsx)(n.p,{children:"Layotto \u57fa\u4e8e Apache 2.0 \u8bb8\u53ef\u53d1\u5e03\uff0c\u9075\u5faa\u6807\u51c6\u7684 Github \u5f00\u53d1\u6d41\u7a0b\uff0c\u4f7f\u7528 Github Issue \u8ddf\u8e2a\u95ee\u9898\u5e76\u5c06 Pull Request \u5408\u5e76\u5230 main \u5206\u652f\u4e2d\u3002\u672c\u6587\u6863\u53ef\u4ee5\u5e2e\u52a9\u4f60\u4e86\u89e3\u5982\u4f55\u53c2\u4e0e\u8d21\u732e\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8d21\u732e\u6d41\u7a0b",children:"\u8d21\u732e\u6d41\u7a0b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u9996\u6b21\u63d0\u4ea4 Pull Request \u540e\uff0c\u60a8\u9700\u8981\u5148\u7b7e\u7f72",(0,t.jsx)(n.a,{href:"http://cla.sofastack.tech/mosn",children:"\u8d21\u732e\u8005\u8bb8\u53ef\u534f\u8bae\uff08CLA\uff09"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u4f18\u5316\u60a8\u7684 Pull Request\uff0c\u786e\u4fdd\u80fd\u901a\u8fc7\u81ea\u52a8\u5316\u6d4b\u8bd5(CI)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u662f\u9996\u6b21\u8d21\u732e\u8005\uff0c\u60a8\u63d0\u4ea4 Pull Request \u662f\u6ca1\u6cd5\u81ea\u52a8\u89e6\u53d1 CI \u7684\uff0c\u9700\u8981\u7531\u9879\u76ee\u7ef4\u62a4\u8005\u624b\u52a8\u8fd0\u884c CI. \u8fd9\u662f Github \u7684\u9ed8\u8ba4\u9650\u5236, \u4f46\u60a8\u505a\u8fc7\u4e00\u6b21\u8d21\u732e\u3001\u6210\u4e3a contributor \u540e\uff0c\u518d\u63d0\u65b0 PR \u5c31\u80fd\u81ea\u52a8\u89e6\u53d1 CI \u4e86\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["CI \u7684\u8be6\u7ec6\u8bf4\u660e\u89c1 ",(0,t.jsx)(n.a,{href:"github-workflows",children:"Layotto GitHub Workflows"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\uff0c Layotto \u6709\u4e00\u5957 make \u811a\u672c\uff0c\u53ef\u4ee5\u5728\u672c\u5730\u8dd1\u68c0\u67e5\u3001\u8dd1\u6d4b\u8bd5\uff0c\u5728\u672c\u5730\u542f\u52a8\u597d docker \u540e\uff0c\u6572 ",(0,t.jsx)(n.code,{children:"make all"})," \u5373\u53ef\uff0c\u8be6\u89c1",(0,t.jsx)(n.a,{href:"/docs/development/commands",children:"\u6587\u6863\u8bf4\u660e"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u7531\u793e\u533a\u7ef4\u62a4\u8005\u6765 code review","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"code review \u5982\u679c\u6709\u4fee\u6539\u610f\u89c1\uff0c\u4f1a\u5728 PR \u4e0b\u7559\u8a00"}),"\n",(0,t.jsx)(n.li,{children:"code review \u6709\u4e24\u7968 approve \u540e, PR \u5c31\u53ef\u4ee5\u5408\u5e76"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4ee3\u7801\u7ea6\u5b9a",children:"\u4ee3\u7801\u7ea6\u5b9a"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u5bf9\u4e8e Pull Request \u7684\u8981\u6c42\u5e76\u975e\u5f3a\u5236\uff0c\u4f46\u662f\u4f1a\u5bf9\u60a8\u63d0\u4ea4 Pull Request \u6709\u5e2e\u52a9\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4ee3\u7801\u683c\u5f0f\u89c4\u8303: \u4f60\u53ea\u9700\u8981\u6267\u884c ",(0,t.jsx)(n.code,{children:"make format"})," \u53bb\u683c\u5f0f\u5316\u4f60\u7684\u4ee3\u7801\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u786e\u4fdd\u6240\u6709\u65b0\u7684 ",(0,t.jsx)(n.code,{children:".go"})," \u6587\u4ef6\u90fd\u5177\u6709\u7b80\u5355\u7684 doc \u7c7b\u6ce8\u91ca"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5c06 Apache Software Foundation \u8bb8\u53ef\u8bc1\u6807\u5934\u6ce8\u91ca\u6dfb\u52a0\u5230\u6240\u6709\u65b0\u7684 ",(0,t.jsx)(n.code,{children:".go"})," \u6587\u4ef6\uff08\u53ef\u4ee5\u4ece\u9879\u76ee\u4e2d\u7684\u73b0\u6709\u6587\u4ef6\u590d\u5236\uff09"]}),"\n",(0,t.jsx)(n.li,{children:"\u6dfb\u52a0\u6587\u6863"}),"\n",(0,t.jsx)(n.li,{children:"\u8fdb\u884c\u4e00\u4e9b\u5355\u5143\u6d4b\u8bd5\u4e5f\u4f1a\u6709\u5f88\u5927\u5e2e\u52a9\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u8bf7\u786e\u4fdd\u4ee3\u7801\u8986\u76d6\u7387\u4e0d\u4f1a\u964d\u4f4e\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u786e\u4fdd\u63d0\u4ea4 Pull Request  \u4e4b\u524d\u6240\u6709\u7684\u6d4b\u8bd5\u80fd\u591f\u6b63\u786e\u901a\u8fc7\u3002\u4f60\u53ef\u4ee5\u672c\u5730\u542f\u52a8\u597d docker \u540e\uff0c\u6267\u884c ",(0,t.jsx)(n.code,{children:"make all"})," \u53bb\u683c\u5f0f\u5316\u4f60\u7684\u4ee3\u7801\uff0c\u8fdb\u884c\u98ce\u683c\u6d4b\u8bd5\uff0clinter \u89c4\u8303\u6d4b\u8bd5\uff0c\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee5\u53ca\u96c6\u6210\u6d4b\u8bd5\u3002\u4f46\u662f\u6267\u884c\u524d",(0,t.jsx)(n.a,{href:"/docs/development/commands",children:"\u8bf7\u5148\u67e5\u770b\u6ce8\u610f\u4e8b\u9879"})]}),"\n",(0,t.jsx)(n.li,{children:"\u6309\u7167 Github \u5de5\u4f5c\u6d41\u63d0\u4ea4 Pull Request  \uff0c\u5e76\u9075\u5faa Pull Request \u7684\u89c4\u5219\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Layotto \u63d0\u4f9b\u4e86\u5f88\u591a\u65b9\u4fbf\u672c\u5730\u5f00\u53d1\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u8bf7\u5728",(0,t.jsx)(n.a,{href:"commands",children:"\u8fd9\u91cc"}),"\u8fdb\u884c\u67e5\u9605"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7248\u672c\u547d\u540d\u7ea6\u5b9a",children:"\u7248\u672c\u547d\u540d\u7ea6\u5b9a"}),"\n",(0,t.jsx)(n.p,{children:"Layotto \u7684\u7248\u672c\u5305\u542b\u4e09\u4f4d\u6570\uff0c\u683c\u5f0f\u4e3a x.x.x\uff0c\u7b2c\u4e00\u4f4d\u662f\u51fa\u4e8e\u517c\u5bb9\u6027\u8003\u8651\uff1b \u7b2c\u4e8c\u4e2a\u662f\u65b0\u529f\u80fd\u548c\u589e\u5f3a\u529f\u80fd\uff1b \u6700\u540e\u4e00\u4f4d\u662f\u9519\u8bef\u4fee\u590d\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7ef4\u62a4\u8005\u4ee3\u7801\u5ba1\u67e5\u7b56\u7565",children:"\u7ef4\u62a4\u8005\u4ee3\u7801\u5ba1\u67e5\u7b56\u7565"}),"\n",(0,t.jsx)(n.p,{children:"\u9879\u76ee\u7ef4\u62a4\u8005\u5ba1\u67e5\u4ee3\u7801\u65f6\u5efa\u8bae\u9075\u5faa\u4ee5\u4e0b\u7b56\u7565\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u68c0\u67e5 PR \u5bf9\u5e94\u7684 Issue"}),"\n",(0,t.jsx)(n.li,{children:"\u68c0\u67e5\u89e3\u51b3\u65b9\u6848\u7684\u5408\u7406\u6027"}),"\n",(0,t.jsx)(n.li,{children:"\u68c0\u67e5 UT \u548c Benchmark \u7684\u7ed3\u679c"}),"\n",(0,t.jsx)(n.li,{children:"\u6ce8\u610f\u4f7f\u4ee3\u7801\u7ed3\u6784\u53d1\u751f\u53d8\u5316\u7684\u4ee3\u7801\uff0c\u5168\u5c40\u53d8\u91cf\u7684\u7528\u6cd5\uff0c\u7279\u6b8a\u60c5\u51b5\u548c\u5e76\u53d1\u7684\u5904\u7406"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>c});var t=l(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);