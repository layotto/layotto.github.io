"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[2596],{8224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(4848),s=n(8453);const c={},l="Jaeger trace \u63a5\u5165",a={id:"start/trace/jaeger",title:"Jaeger trace \u63a5\u5165",description:"\u914d\u7f6e",source:"@site/docs/start/trace/jaeger.md",sourceDirName:"start/trace",slug:"/start/trace/jaeger",permalink:"/docs/start/trace/jaeger",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/start/trace/jaeger.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"ZipKin trace \u63a5\u5165",permalink:"/docs/start/trace/zipkin"},next:{title:"Prometheus metrics \u63a5\u5165",permalink:"/docs/start/trace/prometheus"}},o={},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u8fd0\u884cJaeger",id:"\u8fd0\u884cjaeger",level:2},{value:"\u8fd0\u884clayotto",id:"\u8fd0\u884clayotto",level:2},{value:"\u8fd0\u884c Demo",id:"\u8fd0\u884c-demo",level:2},{value:"\u6e05\u7406\u8d44\u6e90",id:"\u6e05\u7406\u8d44\u6e90",level:2}];function i(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"jaeger-trace-\u63a5\u5165",children:"Jaeger trace \u63a5\u5165"}),"\n",(0,r.jsx)(t.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(t.p,{children:"\u793a\u4f8b\uff1aconfigs/config_trace_jaeger.json"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "tracing": {\n    "enable": true,\n    "driver": "jaeger",\n    "config": {\n      "service_name": "layotto"\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u5b57\u6bb5"}),(0,r.jsx)(t.th,{children:"\u5fc5\u586b"}),(0,r.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"service_name"}),(0,r.jsx)(t.td,{children:"Y"}),(0,r.jsx)(t.td,{children:"\u670d\u52a1\u540d\u79f0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"agent_host"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsx)(t.td,{children:"agent\u7ec4\u4ef6\u7aef\u53e3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strategy"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsxs)(t.td,{children:["\u6570\u636e\u4e0a\u62a5\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u4f7f\u7528 collector \u65b9\u5f0f. \u53ef\u9009\u7684\u914d\u7f6e\u503c\u6709",(0,r.jsx)(t.code,{children:"collector"}),"\u548c",(0,r.jsx)(t.code,{children:"agent"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"collector_endpoint"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsxs)(t.td,{children:["collector\u7684\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4",(0,r.jsx)(t.a,{href:"http://127.0.0.1:14268/api/traces",children:"http://127.0.0.1:14268/api/traces"})]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8fd0\u884cjaeger",children:"\u8fd0\u884cJaeger"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/diagnostics/jaeger\n\ndocker-compose -f jaeger-docker-compose.yaml up -d\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u8fd0\u884clayotto",children:"\u8fd0\u884clayotto"}),"\n",(0,r.jsx)(t.p,{children:"\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u542f\u52a8\u4e00\u4e2alayotto\u7684server\uff1a"}),"\n",(0,r.jsx)(t.p,{children:"\u5207\u6362\u76ee\u5f55:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/cmd/layotto_multiple_api\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6784\u5efa:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build -o layotto\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd0\u884c:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_trace_jaeger.json \n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u8fd0\u884c-demo",children:"\u8fd0\u884c Demo"}),"\n",(0,r.jsxs)(t.p,{children:["\u5bf9\u5e94\u7684\u8c03\u7528\u7aef\u4ee3\u7801\u5728",(0,r.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/demo/flowcontrol/client.go",children:"client.go"})," \u4e2d\uff0c\u8fd0\u884c\u5b83\u4f1a\u8c03\u7528layotto\u7684SayHello\u63a5\u53e3\uff1a"]}),"\n",(0,r.jsx)(t.p,{children:"\u5207\u6362\u76ee\u5f55:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:" cd ${project_path}/demo/flowcontrol/\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6784\u5efa:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist client ",children:" go build -o client\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd0\u884c:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"./client\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8bbf\u95ee ",(0,r.jsx)(t.a,{href:"http://localhost:16686",children:"http://localhost:16686"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*-f2LSLAR9YMAAAAAAAAAAAAAARQnAQ",alt:"img.png"})}),"\n",(0,r.jsx)(t.h2,{id:"\u6e05\u7406\u8d44\u6e90",children:"\u6e05\u7406\u8d44\u6e90"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/diagnostics/jaeger\n\ndocker-compose -f jaeger-docker-compose.yaml down\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(6540);const s={},c=r.createContext(s);function l(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);