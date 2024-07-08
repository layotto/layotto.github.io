"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[2376],{5857:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=l(4848),o=l(8453);const a={},r="API \u63d2\u4ef6: \u6ce8\u518c\u60a8\u81ea\u5df1\u7684API",s={id:"start/api_plugin/helloworld",title:"API \u63d2\u4ef6: \u6ce8\u518c\u60a8\u81ea\u5df1\u7684API",description:"\u8fd9\u662f\u4e00\u4e2a\u5411\u60a8\u5c55\u793a\u5982\u4f55\u6ce8\u518c\u60a8\u81ea\u5df1\u7684API\u7684\u6f14\u793a\u7a0b\u5e8f\u3002",source:"@site/docs/start/api_plugin/helloworld.md",sourceDirName:"start/api_plugin",slug:"/start/api_plugin/helloworld",permalink:"/layotto/docs/start/api_plugin/helloworld",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/start/api_plugin/helloworld.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u5982\u4f55\u8c03\u7528 Layotto Lifecycle API",permalink:"/layotto/docs/start/lifecycle/start"},next:{title:"\u81ea\u52a8\u751f\u6210 API \u63d2\u4ef6",permalink:"/layotto/docs/start/api_plugin/generate"}},i={},c=[{value:"step 1. \u4f7f\u7528\u4e00\u4e2a\u65b0\u7684helloworld API\u8fd0\u884cLayotto",id:"step-1-\u4f7f\u7528\u4e00\u4e2a\u65b0\u7684helloworld-api\u8fd0\u884clayotto",level:2},{value:"step 2. \u8c03\u7528\u8fd9\u4e2ahelloworld API",id:"step-2-\u8c03\u7528\u8fd9\u4e2ahelloworld-api",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"api-\u63d2\u4ef6-\u6ce8\u518c\u60a8\u81ea\u5df1\u7684api",children:"API \u63d2\u4ef6: \u6ce8\u518c\u60a8\u81ea\u5df1\u7684API"}),"\n",(0,n.jsx)(t.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u5411\u60a8\u5c55\u793a\u5982\u4f55\u6ce8\u518c\u60a8\u81ea\u5df1\u7684API\u7684\u6f14\u793a\u7a0b\u5e8f\u3002"}),"\n",(0,n.jsx)(t.p,{children:"Layotto\u73b0\u6709api-plugin\u7684\u529f\u80fd\u8ba9\u4f60\u6839\u636e\u60a8\u7684\u9700\u8981\u6dfb\u52a0\u60a8\u81ea\u5df1\u7684API"}),"\n",(0,n.jsx)(t.h2,{id:"step-1-\u4f7f\u7528\u4e00\u4e2a\u65b0\u7684helloworld-api\u8fd0\u884clayotto",children:"step 1. \u4f7f\u7528\u4e00\u4e2a\u65b0\u7684helloworld API\u8fd0\u884cLayotto"}),"\n",(0,n.jsx)(t.p,{children:"\u5207\u6362\u76ee\u5f55\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# \u5207\u6362\u76ee\u5f55 \ncd ${project_path}/cmd/layotto_multiple_api\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u7f16\u8bd1Layotto\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"# \u7f16\u8bd1\u547d\u4ee4\ngo build -o layotto\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u8fd0\u884cLayotto\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_standalone.json\n"})}),"\n",(0,n.jsx)(t.p,{children:"Q: \u8fd9\u5176\u4e2d\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f"}),"\n",(0,n.jsxs)(t.p,{children:["\u68c0\u67e5",(0,n.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/d74ff0e8940e0eb9c73b1d3275a17d29be36bd5c/cmd/layotto_multiple_api/main.go#L203",children:(0,n.jsx)(t.code,{children:"main.go"})})," \u4e2d\u7684\u4ee3\u7801\uff0c\u7136\u540e\u4f60\u4f1a\u53d1\u73b0Layotto\u5728\u542f\u52a8\u671f\u95f4\u6ce8\u518c\u4e86\u4e00\u4e2a\u65b0\u7684API\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"\t\t// \u5728\u8fd9\u91cc\u6ce8\u518c\u60a8\u7684grpc API\n        runtime.WithGrpcAPI(\n            // \u9ed8\u8ba4\u7684grpc API\n            default_api.NewGrpcAPI,\n            // \u4e00\u4e2a\u5c55\u793a\u5982\u4f55\u6ce8\u518c\u60a8\u81ea\u5df1\u7684API\u7684\u793a\u4f8b\n            helloworld_api.NewHelloWorldAPI,\n        ),\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-\u8c03\u7528\u8fd9\u4e2ahelloworld-api",children:"step 2. \u8c03\u7528\u8fd9\u4e2ahelloworld API"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# \u5207\u6362\u76ee\u5f55 \ncd ${project_path}/cmd/layotto_multiple_api\n# \u8fd0\u884c\u5ba2\u6237\u7aef\u793a\u4f8b\ngo run client/main.go\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u8fd9\u4e2a\u7ed3\u679c\u5c06\u4f1a\u662f\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"Greeting: Hello world\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u8fd9\u4e2a\u6d88\u606f\u662f\u60a8\u5728\u6b65\u9aa41\u4e2d\u521a\u521a\u6ce8\u518c\u7684helloworld API\u7684\u54cd\u5e94\u7ed3\u679c\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,n.jsx)(t.p,{children:"\u60a8\u53ef\u4ee5\u53c2\u8003\u6f14\u793a\u7684\u4ee3\u7801\u6765\u5b9e\u73b0\u4f60\u81ea\u5df1\u7684API\u3002\u5feb\u6765\u8bd5\u8bd5\u5427\uff01"}),"\n",(0,n.jsxs)(t.p,{children:["\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u7684\u8be6\u60c5\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003",(0,n.jsx)(t.a,{href:"/layotto/docs/design/api_plugin/design",children:"\u8bbe\u8ba1\u6587\u6863"})]}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u4e86\u7b80\u5316 API \u63d2\u4ef6\u7684\u5f00\u53d1\uff0cLayotto \u793e\u533a\u63d0\u4f9b\u4e86\u4e00\u5957\u4ee3\u7801\u751f\u6210\u5668\uff0c\u53ef\u4ee5\u57fa\u4e8e proto \u6587\u4ef6\u751f\u6210 API \u63d2\u4ef6\u76f8\u5173\u4ee3\u7801\uff0c\u89c1 ",(0,n.jsx)(t.a,{href:"/layotto/docs/start/api_plugin/generate",children:"\u6587\u6863"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>s});var n=l(6540);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);