"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[6737],{5057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=t(4848),r=t(8453);const i={},s="ZipKin trace \u63a5\u5165",c={id:"start/trace/zipkin",title:"ZipKin trace \u63a5\u5165",description:"\u914d\u7f6e",source:"@site/docs/start/trace/zipkin.md",sourceDirName:"start/trace",slug:"/start/trace/zipkin",permalink:"/layotto/docs/start/trace/zipkin",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/start/trace/zipkin.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Skywalking trace \u63a5\u5165",permalink:"/layotto/docs/start/trace/skywalking"},next:{title:"Jaeger trace \u63a5\u5165",permalink:"/layotto/docs/start/trace/jaeger"}},l={},a=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u8fd0\u884cZipKin",id:"\u8fd0\u884czipkin",level:2},{value:"\u8fd0\u884clayotto",id:"\u8fd0\u884clayotto",level:2},{value:"<strong>\u4f7f\u7528 Docker</strong>",id:"\u4f7f\u7528-docker",level:3},{value:"<strong>\u672c\u5730\u7f16\u8bd1\uff08\u4e0d\u9002\u5408 Windows)</strong>",id:"\u672c\u5730\u7f16\u8bd1\u4e0d\u9002\u5408-windows",level:3},{value:"\u8fd0\u884c Demo",id:"\u8fd0\u884c-demo",level:2},{value:"\u6e05\u7406\u8d44\u6e90",id:"\u6e05\u7406\u8d44\u6e90",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"zipkin-trace-\u63a5\u5165",children:"ZipKin trace \u63a5\u5165"}),"\n",(0,o.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,o.jsx)(n.p,{children:"\u793a\u4f8b\uff1aconfigs/config_trace_zipkin.json"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "tracing": {\n    "enable": true,\n    "driver": "Zipkin",\n    "config": {\n      "config": {\n        "service_name": "layotto",\n        "reporter_endpoint": "http://127.0.0.1:9411/api/v2/spans",\n        "recorder_host_post": "127.0.0.1:34904"\n      }\n    }\n  }\n}\n\n'})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u5b57\u6bb5"}),(0,o.jsx)(n.th,{children:"\u5fc5\u586b"}),(0,o.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"service_name"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"\u5f53\u524d\u670d\u52a1\u540d\u79f0\uff0c\u4f8b\u5982layotto"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"reporter_endpoint"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"\u94fe\u8def\u65e5\u5fd7\u4e0a\u62a5url"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"recorder_host_post"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"\u5f53\u524d\u670d\u52a1\u7aef\u53e3\u4fe1\u606f\uff0c\u4f8b\u5982layotto\u670d\u52a1\u7684\u7aef\u53e3\u4e3a127.0.0.1:34904"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u76ee\u524d\u53ea\u652f\u6301Http\u65b9\u5f0f\u7684Reporter\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u8fd0\u884czipkin",children:"\u8fd0\u884cZipKin"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker-compose -f diagnostics/zipkin/zipkin-docker-compose.yaml up -d\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u8fd0\u884clayotto",children:"\u8fd0\u884clayotto"}),"\n",(0,o.jsx)(n.h3,{id:"\u4f7f\u7528-docker",children:(0,o.jsx)(n.strong,{children:"\u4f7f\u7528 Docker"})}),"\n",(0,o.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u7528 docker \u542f\u52a8 Layotto"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'docker run -d \\\n  -v "$(pwd)/configs/config_trace_zipkin.json:/runtime/configs/config.json" \\\n  -p 34904:34904 --network=zipkin_default --name layotto \\\n  layotto/layotto start\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\u672c\u5730\u7f16\u8bd1\u4e0d\u9002\u5408-windows",children:(0,o.jsx)(n.strong,{children:"\u672c\u5730\u7f16\u8bd1\uff08\u4e0d\u9002\u5408 Windows)"})}),"\n",(0,o.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u672c\u5730\u7f16\u8bd1\u3001\u8fd0\u884c Layotto\u3002"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"[!TIP|label: \u4e0d\u9002\u5408 Windows \u7528\u6237]\nLayotto \u5728 Windows \u4e0b\u4f1a\u7f16\u8bd1\u5931\u8d25\u3002\u5efa\u8bae Windows \u7528\u6237\u4f7f\u7528 docker \u90e8\u7f72"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u6784\u5efa:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd ${project_path}/cmd/layotto_multiple_api/\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build -o layotto\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8fd0\u884c:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_trace_zipkin.json \n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u8fd0\u884c-demo",children:"\u8fd0\u884c Demo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:" cd ${project_path}/demo/flowcontrol/\n go run client.go\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u8bbf\u95ee\uff1a",(0,o.jsx)(n.a,{href:"http://localhost:9411/zipkin/?serviceName=layotto&lookback=15m&endTs=1655559536414&limit=10",children:"http://localhost:9411/zipkin/?serviceName=layotto&lookback=15m&endTs=1655559536414&limit=10"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*WodlQKsN5UcAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n",(0,o.jsx)(n.h2,{id:"\u6e05\u7406\u8d44\u6e90",children:"\u6e05\u7406\u8d44\u6e90"}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Docker \u542f\u52a8 Layotto\uff0c\u8bb0\u5f97\u5220\u9664\u5bb9\u5668\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker rm -f layotto\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8bb0\u5f97\u5173\u95ed zipkin:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd ${project_path}/diagnostics/zipkin\n\ndocker-compose -f zipkin-docker-compose.yaml down\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);