"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[876],{9444:(n,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=o(4848),e=o(8453);const r={},a="\u4f7f\u7528Configuration API\u8c03\u7528\u914d\u7f6e\u4e2d\u5fc3",s={id:"start/configuration/overview",title:"\u4f7f\u7528Configuration API\u8c03\u7528\u914d\u7f6e\u4e2d\u5fc3",description:"\u4ec0\u4e48\u662fConfiguration API",source:"@site/docs/start/configuration/overview.md",sourceDirName:"start/configuration",slug:"/start/configuration/overview",permalink:"/layotto/docs/start/configuration/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/start/configuration/overview.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"\u4ec0\u4e48\u662fConfiguration API",id:"\u4ec0\u4e48\u662fconfiguration-api",level:2},{value:"Configuration API\u548cState API\u7684\u533a\u522b\u662f\uff1f",id:"configuration-api\u548cstate-api\u7684\u533a\u522b\u662f",level:2},{value:"\u5feb\u901f\u5165\u95e8",id:"\u5feb\u901f\u5165\u95e8",level:2}];function u(n){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,e.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u4f7f\u7528configuration-api\u8c03\u7528\u914d\u7f6e\u4e2d\u5fc3",children:"\u4f7f\u7528Configuration API\u8c03\u7528\u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,i.jsx)(t.h2,{id:"\u4ec0\u4e48\u662fconfiguration-api",children:"\u4ec0\u4e48\u662fConfiguration API"}),"\n",(0,i.jsx)(t.p,{children:"\u5e94\u7528\u7a0b\u5e8f\u5728\u542f\u52a8\u548c\u8fd0\u884c\u7684\u65f6\u5019\u4f1a\u53bb\u8bfb\u53d6\u4e00\u4e9b\u300c\u914d\u7f6e\u4fe1\u606f\u300d\uff0c\u6bd4\u5982\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570\u3001\u542f\u52a8\u53c2\u6570\u3001\u63a5\u53e3\u7684\u8d85\u65f6\u65f6\u95f4\u3001\u5e94\u7528\u7a0b\u5e8f\u7684\u7aef\u53e3\u7b49\u3002\u300c\u914d\u7f6e\u300d\uff0c\u57fa\u672c\u4e0a\u4f34\u968f\u7740\u5e94\u7528\u7a0b\u5e8f\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u5e94\u7528\u6f14\u8fdb\u5230\u5fae\u670d\u52a1\u67b6\u6784\u540e\uff0c\u4f1a\u90e8\u7f72\u5230\u5f88\u591a\u53f0\u673a\u5668\u4e0a\uff0c\u800c\u914d\u7f6e\u4e5f\u5206\u6563\u5728\u96c6\u7fa4\u5404\u4e2a\u673a\u5668\u4e0a\uff0c\u96be\u4e8e\u7ba1\u7406\u3002\u4e8e\u662f\u5c31\u51fa\u73b0\u4e86\u300c\u914d\u7f6e\u4e2d\u5fc3\u300d\uff0c\u96c6\u4e2d\u7ba1\u7406\u914d\u7f6e\uff0c\u540c\u65f6\u4e5f\u89e3\u51b3\u4e00\u4e9b\u65b0\u7684\u95ee\u9898\uff0c\u6bd4\u5982\uff1a\u7248\u672c\u7ba1\u7406\uff08\u4e3a\u4e86\u652f\u6301\u56de\u6eda\uff09\uff0c\u6743\u9650\u7ba1\u7406\u7b49\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u5e38\u7528\u7684\u914d\u7f6e\u4e2d\u5fc3\u6709\u5f88\u591a\uff0c\u4f8b\u5982Spring Cloud Config\uff0cApollo\uff0cNacos\uff0c\u800c\u4e14\u4e91\u5382\u5546\u7ecf\u5e38\u4f1a\u63d0\u4f9b\u81ea\u5df1\u7684\u914d\u7f6e\u7ba1\u7406\u670d\u52a1\uff0c\u4f8b\u5982AWS Parameter Store,Google RuntimeConfig"}),"\n",(0,i.jsx)(t.p,{children:"\u4e0d\u5e78\u7684\u662f\uff0c\u8fd9\u4e9b\u914d\u7f6e\u4e2d\u5fc3\u7684API\u90fd\u4e0d\u4e00\u6837\u3002\u5f53\u5e94\u7528\u60f3\u8981\u8de8\u4e91\u90e8\u7f72\uff0c\u6216\u8005\u60f3\u8981\u79fb\u690d\uff08\u6bd4\u5982\u4ece\u963f\u91cc\u4e91\u642c\u5230\u817e\u8baf\u4e91\uff09\uff0c\u5e94\u7528\u9700\u8981\u91cd\u6784\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(t.p,{children:'Layotto Configuration API\u7684\u8bbe\u8ba1\u76ee\u6807\u662f\u5b9a\u4e49\u4e00\u5957\u7edf\u4e00\u7684\u914d\u7f6e\u4e2d\u5fc3API\uff0c\u5e94\u7528\u53ea\u9700\u8981\u5173\u5fc3API\u3001\u4e0d\u9700\u8981\u5173\u5fc3\u5177\u4f53\u7528\u7684\u54ea\u4e2a\u914d\u7f6e\u4e2d\u5fc3\uff0c\u8ba9\u5e94\u7528\u80fd\u591f\u968f\u610f\u79fb\u690d\uff0c\u8ba9\u5e94\u7528\u8db3\u591f"\u4e91\u539f\u751f"\u3002'}),"\n",(0,i.jsx)(t.h2,{id:"configuration-api\u548cstate-api\u7684\u533a\u522b\u662f",children:"Configuration API\u548cState API\u7684\u533a\u522b\u662f\uff1f"}),"\n",(0,i.jsx)(t.p,{children:"Q: \u4e3a\u5565\u8981\u5355\u72ec\u641e\u4e2aConfiguration API\uff1f\u548c State API\u4e3b\u8981\u533a\u522b\u662f\uff1f\u611f\u89c9\u4e24\u8005\u5dee\u4e0d\u591a"}),"\n",(0,i.jsx)(t.p,{children:"A: Configuration\u4f1a\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u80fd\u529b\uff0c\u6bd4\u5982sidecar\u505a\u914d\u7f6e\u7f13\u5b58\uff0c\u6bd4\u5982app\u8ba2\u9605\u914d\u7f6e\u53d8\u66f4\u7684\u6d88\u606f\uff0c\u6bd4\u5982configuration\u6709\u4e00\u4e9b\u7279\u6b8a\u7684schema (tag,version,namespace\u4e4b\u7c7b\u7684\uff09"}),"\n",(0,i.jsx)(t.p,{children:"\u8fd9\u5c31\u50cf\u914d\u7f6e\u4e2d\u5fc3\u548c\u6570\u636e\u5e93\u7684\u533a\u522b\uff0c\u90fd\u662f\u5b58\u50a8\uff0c\u4f46\u662f\u524d\u8005\u9886\u57df\u7279\u5b9a\uff0c\u6709\u7279\u6b8a\u529f\u80fd"}),"\n",(0,i.jsx)(t.h2,{id:"\u5feb\u901f\u5165\u95e8",children:"\u5feb\u901f\u5165\u95e8"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/layotto/docs/start/configuration/start-apollo",children:"\u4f7f\u7528Apollo\u914d\u7f6e\u4e2d\u5fc3"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/layotto/docs/start/configuration/start",children:"\u4f7f\u7528Etcd\u914d\u7f6e\u4e2d\u5fc3"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/start/confguration/start-nacos.md",children:"\u4f7f\u7528nacos\u914d\u7f6e\u4e2d\u5fc3"})}),"\n"]})]})}function d(n={}){const{wrapper:t}={...(0,e.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},8453:(n,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var i=o(6540);const e={},r=i.createContext(e);function a(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:a(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);