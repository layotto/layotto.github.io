"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[9071],{8116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var s=t(4848),a=t(8453);const o={},i="Run business logic in Layotto using WASM",l={id:"start/wasm/start",title:"Run business logic in Layotto using WASM",description:"Run business logic in Layotto using WASM",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/start/wasm/start.md",sourceDirName:"start/wasm",slug:"/start/wasm/start",permalink:"/layotto/en-US/docs/start/wasm/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/start/wasm/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Prometheus metrics",permalink:"/layotto/en-US/docs/start/trace/prometheus"},next:{title:"FaaS QuickStart",permalink:"/layotto/en-US/docs/start/faas/start"}},A={},r=[{value:"Run business logic in Layotto using WASM",id:"run-business-logic-in-layotto-using-wasm-1",level:2},{value:"What is WASM on Layotto?",id:"what-is-wasm-on-layotto",level:3},{value:"Quick start",id:"quick-start",level:3},{value:"step 1. start redis server and write test data",id:"step-1-start-redis-server-and-write-test-data",level:4},{value:"step 2. start Layotto server",id:"step-2-start-layotto-server",level:4},{value:"step 3. send request",id:"step-3-send-request",level:4},{value:"step 4. Release resources",id:"step-4-release-resources",level:4},{value:"Dynamic Load",id:"dynamic-load",level:3},{value:"Uninstall",id:"uninstall",level:4},{value:"Install",id:"install",level:4},{value:"Update Instance Number",id:"update-instance-number",level:4},{value:"Note",id:"note",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"run-business-logic-in-layotto-using-wasm",children:"Run business logic in Layotto using WASM"}),"\n",(0,s.jsx)(n.h2,{id:"run-business-logic-in-layotto-using-wasm-1",children:"Run business logic in Layotto using WASM"}),"\n",(0,s.jsx)(n.h3,{id:"what-is-wasm-on-layotto",children:"What is WASM on Layotto?"}),"\n",(0,s.jsx)(n.p,{children:"The sidecar of service mesh and multi-runtime is a common infrastructure for the whole company, but in practice, the business system will also have its own SDK, and it will also have the difficulty of pushing users to upgrade the SDK and the problem of version fragmentation."}),"\n",(0,s.jsx)(n.p,{children:"For example, a business system has developed an SDK in the form of a jar package for use by other business systems. Their features are not universal to the entire company, so they cannot persuade the middleware team to develop them into the company's unified sidecar."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img_1.png",src:t(6695).A+"",width:"399",height:"324"})}),"\n",(0,s.jsx)(n.p,{children:"And if it becomes like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img.png",src:t(7576).A+"",width:"538",height:"137"})}),"\n",(0,s.jsx)(n.p,{children:"If developers no longer develop sdk (jar package), change to develop .wasm files and support independent upgrade and deployment, there will be no pain to push the users to upgrade."}),"\n",(0,s.jsx)(n.p,{children:"When you want to upgrade, you can release it on the operation platform. There is no need to restart the app and sidecar."}),"\n",(0,s.jsxs)(n.p,{children:["Layotto can load the compiled WASM files automatically, and interacts with them through the API of the ",(0,s.jsx)(n.code,{children:"proxy_abi_version_0_2_0"})," version."]}),"\n",(0,s.jsx)(n.h3,{id:"quick-start",children:"Quick start"}),"\n",(0,s.jsx)(n.h4,{id:"step-1-start-redis-server-and-write-test-data",children:"step 1. start redis server and write test data"}),"\n",(0,s.jsx)(n.p,{children:"The example only needs a Redis server that can be used normally. As for where it is installed, there is no special restriction. It can be a virtual machine, a local machine or a server."}),"\n",(0,s.jsx)(n.p,{children:"Here, we run redis with docker:"}),"\n",(0,s.jsx)(n.p,{children:"Run redis container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -d --name redis-test -p 6379:6379 redis\n"})}),"\n",(0,s.jsxs)(n.p,{children:["execute the command",(0,s.jsx)(n.code,{children:"set book1 100"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker exec -i redis-test redis-cli set book1 100\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command will set ",(0,s.jsx)(n.code,{children:"book1"})," with 100."]}),"\n",(0,s.jsx)(n.p,{children:"The result will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"OK\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We can execute ",(0,s.jsx)(n.code,{children:"get book1"})," to check the value of ",(0,s.jsx)(n.code,{children:"book1"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker exec -i redis-test redis-cli get book1\n"})}),"\n",(0,s.jsx)(n.p,{children:"The result is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'"100"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"step-2-start-layotto-server",children:"step 2. start Layotto server"}),"\n",(0,s.jsx)(n.p,{children:"Build:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"@if.not.exist layotto_wasmtime",children:"go build -tags wasmcomm,wasmtime -o ./layotto_wasmtime ./cmd/layotto\n"})}),"\n",(0,s.jsxs)(n.p,{children:["if you want to use wasmer as WebAssembly Runtime, please use build command as: ",(0,s.jsx)(n.code,{children:"go build -tags wasmcomm,wasmer -o ./layotto_wasmtime ./cmd/layotto"})]}),"\n",(0,s.jsx)(n.p,{children:"Run it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"@background",children:"./layotto_wasmtime start -c ./demo/faas/config.json\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: You need to modify the redis address as needed, the default address is: localhost:6379"})}),"\n",(0,s.jsx)(n.h4,{id:"step-3-send-request",children:"step 3. send request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -H 'id:id_1' 'localhost:2045?name=book1'\n"})}),"\n",(0,s.jsx)(n.p,{children:"It will returns:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"There are 100 inventories for book1.\n"})}),"\n",(0,s.jsx)(n.p,{children:"This http request will access the wasm module in Layotto. The wasm module will call redis for logical processing."}),"\n",(0,s.jsx)(n.h4,{id:"step-4-release-resources",children:"step 4. Release resources"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker rm -f redis-test\n"})}),"\n",(0,s.jsx)(n.h3,{id:"dynamic-load",children:"Dynamic Load"}),"\n",(0,s.jsxs)(n.p,{children:["We can specify the WASM file to be loaded in ",(0,s.jsx)(n.code,{children:"./demo/faas/config.json"})," config file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'\n"config": {\n"function1": {\n"name": "function1",\n"instance_num": 1,\n"vm_config": {\n"engine": "wasmtime",\n"path": "demo/faas/code/golang/client/function_1.wasm"\n}\n},\n"function2": {\n"name": "function2",\n"instance_num": 1,\n"vm_config": {\n"engine": "wasmtime",\n"path": "demo/faas/code/golang/server/function_2.wasm"\n}\n}\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"tip: we also support wasmer as the engine value in vm_config."}),"\n",(0,s.jsx)(n.p,{children:"We can also install, update, and uninstall WASM file dynamically through the following Apis(The example is already loaded from the configuration file by default when it starts, so here it is unloaded and then reloaded)."}),"\n",(0,s.jsx)(n.h4,{id:"uninstall",children:"Uninstall"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d \'{"name":"id_1"}\' http://127.0.0.1:34998/wasm/uninstall\n'})}),"\n",(0,s.jsx)(n.h4,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d \'{"name":"id_1","instance_num":1,"vm_config":{"engine":"wasmtime","path":"demo/faas/code/golang/client/function_1.wasm"}}\' http://127.0.0.1:34998/wasm/install\n'})}),"\n",(0,s.jsx)(n.h4,{id:"update-instance-number",children:"Update Instance Number"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d \'{"name":"id_1","instance_num":2}\' http://127.0.0.1:34998/wasm/update\n'})}),"\n",(0,s.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,s.jsx)(n.p,{children:"This feature is still in the experimental stage, and the implementation of the WASM interactive API in the community is not uniform enough, so if you have any needs for this module, please post it in the issue area, we will build WASM together!"})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7576:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},6695:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);