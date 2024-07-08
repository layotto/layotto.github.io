"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[649],{568:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var n=s(4848),r=s(8453);const o={},c="Dubbo JSON RPC Example",d={id:"start/rpc/dubbo_json_rpc",title:"Dubbo JSON RPC Example",description:"Note: This demo needs to run under go v1.17",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/start/rpc/dubbo_json_rpc.md",sourceDirName:"start/rpc",slug:"/start/rpc/dubbo_json_rpc",permalink:"/layotto/en-US/docs/start/rpc/dubbo_json_rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/i18n/en-US/docusaurus-plugin-content-docs/current/start/rpc/dubbo_json_rpc.md",tags:[],version:"current",frontMatter:{}},i={},a=[{value:"Quick Start",id:"quick-start",level:2},{value:"step 1. Edit config file\uff0cadd <code>dubbo_json_rpc</code> filter",id:"step-1-edit-config-fileadd-dubbo_json_rpc-filter",level:3},{value:"step 2. Compile and start layotto",id:"step-2-compile-and-start-layotto",level:3},{value:"step 3. Start dubbo server",id:"step-3-start-dubbo-server",level:3},{value:"step 4. call runtime InvokerService api.",id:"step-4-call-runtime-invokerservice-api",level:3},{value:"Next Step",id:"next-step",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"dubbo-json-rpc-example",children:"Dubbo JSON RPC Example"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Note: This demo needs to run under go v1.17"})}),"\n",(0,n.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsxs)(t.h3,{id:"step-1-edit-config-fileadd-dubbo_json_rpc-filter",children:["step 1. Edit config file\uff0cadd ",(0,n.jsx)(t.code,{children:"dubbo_json_rpc"})," filter"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"jsonrpc.jpg",src:s(2292).A+"",width:"654",height:"594"})}),"\n",(0,n.jsx)(t.h3,{id:"step-2-compile-and-start-layotto",children:"step 2. Compile and start layotto"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build -o layotto ./cmd/layotto\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto -c demo/rpc/dubbo_json_rpc/example.json\n"})}),"\n",(0,n.jsx)(t.h3,{id:"step-3-start-dubbo-server",children:"step 3. Start dubbo server"}),"\n",(0,n.jsxs)(t.p,{children:["use ",(0,n.jsx)(t.code,{children:"dubbo-go-samples"})," repo's example server."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist dubbo-go-samples",children:"git clone https://github.com/apache/dubbo-go-samples.git\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'cd dubbo-go-samples\ngit reset --hard f0d1e1076397a4736de080ffb16cd0963c8c2f9d\n\n# start zookeeper\ncd rpc/jsonrpc/go-server\ndocker-compose -f docker/docker-compose.yml up -d\n\n# prepare to build dubbo server\ncd cmd\nexport DUBBO_GO_CONFIG_PATH="../conf/dubbogo.yml"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Build dubbo server:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist server",children:"go build -o server .\n"})}),"\n",(0,n.jsx)(t.p,{children:"Start dubbo server:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@background.sleep 3s",children:"./server\n"})}),"\n",(0,n.jsx)(t.h3,{id:"step-4-call-runtime-invokerservice-api",children:"step 4. call runtime InvokerService api."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@cd ${project_path}",children:'go run demo/rpc/dubbo_json_rpc/dubbo_json_client/client.go -d \'{"jsonrpc":"2.0","method":"GetUser","params":["A003"],"id":9527}\'\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"jsonrpc.jpg",src:s(5259).A+"",width:"1669",height:"72"})}),"\n",(0,n.jsx)(t.h2,{id:"next-step",children:"Next Step"}),"\n",(0,n.jsxs)(t.p,{children:["If you are interested in the implementation principle, or want to extend some functions, you can read ",(0,n.jsx)(t.a,{href:"design/rpc/rpc-design-doc.md",children:"RPC design document"})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2292:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/jsonrpc-d7b2414c8545964f5018737d6e02d12e.jpg"},5259:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/jsonrpcresult-66cfeadc2aab73857ddbe6164762aaa7.jpg"},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>d});var n=s(6540);const r={},o=n.createContext(r);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);