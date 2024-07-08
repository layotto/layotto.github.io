"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[1732],{9347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var l=t(4848),o=t(8453);const i={},s="Multi-Runtime 2022\uff1a\u5f85\u89e3\u51b3\u7684\u95ee\u9898",r={id:"development/problems-to-solve",title:"Multi-Runtime 2022\uff1a\u5f85\u89e3\u51b3\u7684\u95ee\u9898",description:"1. API\u6807\u51c6\u5efa\u8bbe",source:"@site/docs/development/problems-to-solve.md",sourceDirName:"development",slug:"/development/problems-to-solve",permalink:"/layotto/docs/development/problems-to-solve",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/development/problems-to-solve.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u53d1\u5e03\u624b\u518c",permalink:"/layotto/docs/development/release-guide"},next:{title:"\u793e\u533a\u4f1a\u8bae",permalink:"/layotto/docs/community/meeting"}},c={},d=[{value:"1. API\u6807\u51c6\u5efa\u8bbe",id:"1-api\u6807\u51c6\u5efa\u8bbe",level:2},{value:"2. \u751f\u6001\u5171\u5efa",id:"2-\u751f\u6001\u5171\u5efa",level:2},{value:"3. \u670d\u52a1\u65e9\u671f\u751f\u4ea7\u7528\u6237",id:"3-\u670d\u52a1\u65e9\u671f\u751f\u4ea7\u7528\u6237",level:2},{value:"3.1. \u6269\u5c55\u6027",id:"31-\u6269\u5c55\u6027",level:3},{value:"3.2. \u7a33\u5b9a\u6027\u98ce\u9669",id:"32-\u7a33\u5b9a\u6027\u98ce\u9669",level:3},{value:"3.3. \u53ef\u89c2\u6d4b\u6027",id:"33-\u53ef\u89c2\u6d4b\u6027",level:3},{value:"4. \u65b0\u7814\u53d1\u6a21\u5f0f",id:"4-\u65b0\u7814\u53d1\u6a21\u5f0f",level:2}];function u(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"multi-runtime-2022\u5f85\u89e3\u51b3\u7684\u95ee\u9898",children:"Multi-Runtime 2022\uff1a\u5f85\u89e3\u51b3\u7684\u95ee\u9898"}),"\n",(0,l.jsx)(n.h2,{id:"1-api\u6807\u51c6\u5efa\u8bbe",children:"1. API\u6807\u51c6\u5efa\u8bbe"}),"\n",(0,l.jsx)(n.p,{children:"\u6839\u636e\u843d\u5730\u7528\u6237\u7684\u751f\u4ea7\u9700\u6c42\u7ee7\u7eed\u5efa\u8bbeAPI\u6807\u51c6\u3001\u63d0\u4ea4\u7ed9Dapr\u793e\u533a\u5171\u5efa\u3002\u6bd4\u5982\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5206\u5e03\u5f0f\u9501API"}),"\n",(0,l.jsx)(n.li,{children:"\u914d\u7f6eAPI"}),"\n",(0,l.jsx)(n.li,{children:"\u5ef6\u8fdf\u6d88\u606fAPI"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"2-\u751f\u6001\u5171\u5efa",children:"2. \u751f\u6001\u5171\u5efa"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u4f55\u8ba9\u5df2\u7ecf\u843d\u5730Service Mesh\u7684\u7528\u6237\u5e73\u6ed1\u8fc1\u79fb\u5230Multi-Runtime\uff1f\u76ee\u524d\u5728\u505a\u7684\u4e00\u4ef6\u4e8b\u662fLayotto on Envoy\u652f\u6301;"}),"\n",(0,l.jsx)(n.p,{children:"\u80fd\u5426\u8ba9Runtime API\u66f4\u597d\u7684\u878d\u5165K8S\u751f\u6001\uff1f\u76ee\u524d\u5728\u505a\u7684\u4e8b\u662fLayotto\u96c6\u6210\u8fdbk8s\u751f\u6001;"}),"\n",(0,l.jsx)(n.h2,{id:"3-\u670d\u52a1\u65e9\u671f\u751f\u4ea7\u7528\u6237",children:"3. \u670d\u52a1\u65e9\u671f\u751f\u4ea7\u7528\u6237"}),"\n",(0,l.jsx)(n.p,{children:"\u5f00\u6e90\u8981\u505a\u901a\u7528\u7684\u3001\u89e3\u51b3\u751f\u4ea7\u95ee\u9898\u7684\u529f\u80fd\u3002\u89c2\u5bdf\u65e9\u671f\u751f\u4ea7\u7528\u6237\uff0c\u76ee\u524d\u9762\u4e34\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,l.jsx)(n.h3,{id:"31-\u6269\u5c55\u6027",children:"3.1. \u6269\u5c55\u6027"}),"\n",(0,l.jsx)(n.p,{children:"\u8ba9\u6574\u4e2a\u9879\u76ee\u53ef\u6269\u5c55\uff0c\u6bd4\u5982\u67d0\u4e2a\u516c\u53f8\u60f3\u7528layotto\u4f46\u662f\u53c8\u60f3\u6269\u5c55\u4e00\u4e9b\u81ea\u5df1\u7684\u529f\u80fd\uff0c\u8981\u4e48\u80fd\u81ea\u5df1\u8d77\u4e00\u4e2a\u9879\u76ee\u3001import\u5f00\u6e90layotto\u540e\u901a\u8fc7\u94a9\u5b50\u505a\u4e00\u4e9b\u6269\u5c55\uff0c\u8981\u4e48\u80fd\u901a\u8fc7\u52a8\u6001\u8fde\u63a5\u5e93\u4e4b\u7c7b\u7684\u529e\u6cd5\u53bb\u6269\u5c55layotto\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u76ee\u524d\u8fd9\u4e24\u79cd\u529e\u6cd5,dapr\u548clayotto\u90fd\u6ca1\u6cd5\u505a\u5230\uff0c\u60f3\u6269\u5c55\u53ea\u80fdfork\u51fa\u6765\u6539\u4ee3\u7801"}),"\n",(0,l.jsx)(n.h3,{id:"32-\u7a33\u5b9a\u6027\u98ce\u9669",children:"3.2. \u7a33\u5b9a\u6027\u98ce\u9669"}),"\n",(0,l.jsx)(n.p,{children:"import\u5f00\u6e90Layotto\u4e4b\u540e\uff0cpanic\u98ce\u9669\u5de8\u5927,\u56e0\u4e3a\u4f9d\u8d56\u4e86Dapr\u6240\u6709\u7ec4\u4ef6\uff0c\u8fd9\u4e9b\u7ec4\u4ef6\u7528\u7684\u5e93\u4e94\u82b1\u516b\u95e8\uff0c\u53ef\u80fdpanic\uff0c\u53ef\u80fd\u4f9d\u8d56\u51b2\u7a81\u3002\u80fd\u5426\u901a\u8fc7\u6309\u9700\u7f16\u8bd1\u3001\u9694\u79bb\u6027\u8bbe\u8ba1\u6765\u51cf\u5c11panic\u98ce\u9669\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"\u76ee\u524d\u5f00\u6e90\u9879\u76ee\u7684\u6d4b\u8bd5\u6295\u5165\u76f8\u5bf9\u4e8e\u516c\u53f8\u91cc\u7684\u6d4b\u8bd5\u6d41\u7a0b\u6765\u8bf4\u5c11\u592a\u591a\u4e86\uff0c\u600e\u4e48\u5efa\u8bbe\u5f00\u6e90\u6d4b\u8bd5\u4f53\u7cfb\uff1b"}),"\n",(0,l.jsx)(n.h3,{id:"33-\u53ef\u89c2\u6d4b\u6027",children:"3.3. \u53ef\u89c2\u6d4b\u6027"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4ee5\u524d\u6ca1service mesh\u7684\u65f6\u5019\uff0c\u6709\u95ee\u9898\u6211\u80fd\u81ea\u5df1\u67e5\uff1b\u540e\u6765\u6709\u4e86service mesh\uff0c\u9047\u5230\u95ee\u9898\u6211\u53ea\u80fd\u627e\u522b\u4eba\u6765\u67e5\u4e86\n\u2014\u2014\u67d0\u6d4b\u8bd5\u540c\u5b66"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u751f\u4ea7\u73af\u5883\u843d\u5730Service Mesh\u4f1a\u5bfc\u81f4\u6392\u67e5\u95ee\u9898\u53d8\u96be\uff0c\u800c Multi-Runtime \u4e0b\u6c89\u7684\u529f\u80fd\u591a\u4e86\uff0c\u6392\u67e5\u8d77\u6765\u66f4\u96be\u3002\n\u8981\u5efa\u8bbe Multi-Runtime \u53ef\u89c2\u6d4b\u6027\uff0c\u907f\u514d\u8ba9\u751f\u4ea7\u7528\u6237\u67e5\u95ee\u9898\u96be\u4e0a\u52a0\u96be\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"4-\u65b0\u7814\u53d1\u6a21\u5f0f",children:"4. \u65b0\u7814\u53d1\u6a21\u5f0f"}),"\n",(0,l.jsx)(n.p,{children:"sidecar \u652f\u6301 serverless \u843d\u5730\uff1b"})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var l=t(6540);const o={},i=l.createContext(o);function s(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);