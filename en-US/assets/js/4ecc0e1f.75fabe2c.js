"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[4812],{9034:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=s(4848),i=s(8453);const r={},o="Layotto (L8): To be the next layer of OSI layer 7",l={type:"mdx",permalink:"/layotto/en-US/",source:"@site/i18n/en-US/docusaurus-plugin-content-pages/index.md",title:"Layotto (L8): To be the next layer of OSI layer 7",description:"Layotto Env Pipeline \ud83c\udf0a",frontMatter:{},unlisted:!1},c={},a=[{value:"Motivation",id:"motivation",level:2},{value:"Features",id:"features",level:2},{value:"Project Architecture",id:"project-architecture",level:2},{value:"Quickstarts",id:"quickstarts",level:2},{value:"Get started with Layotto",id:"get-started-with-layotto",level:3},{value:"API",id:"api",level:3},{value:"Service Mesh",id:"service-mesh",level:3},{value:"Extendability",id:"extendability",level:3},{value:"Actuator",id:"actuator",level:3},{value:"Traffic Control",id:"traffic-control",level:3},{value:"Write your bussiness logic using WASM",id:"write-your-bussiness-logic-using-wasm",level:3},{value:"As a FaaS(Serverless) runtime (Layotto + WebAssembly + k8s)",id:"as-a-faasserverless-runtime-layotto--webassembly--k8s",level:3},{value:"Presentations",id:"presentations",level:2},{value:"Landscapes",id:"landscapes",level:2},{value:"Community",id:"community",level:2},{value:"Contact Us",id:"contact-us",level:3},{value:"How to contribute",id:"how-to-contribute",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Design Documents",id:"design-documents",level:2},{value:"FAQ",id:"faq",level:2},{value:"Difference with dapr?",id:"difference-with-dapr",level:3}];function d(t){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"layotto-l8-to-be-the-next-layer-of-osi-layer-7",children:"Layotto (L8): To be the next layer of OSI layer 7"}),"\n",(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/bmw-prod/65518bfc-8ba5-4234-a5c5-2bc065e3a5f0.svg",height:"120px"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://github.com/mosn/layotto/actions/workflows/proto-checker.yml",children:(0,n.jsx)(e.img,{src:"https://github.com/mosn/layotto/actions/workflows/proto-checker.yml/badge.svg",alt:"Layotto Env Pipeline \ud83c\udf0a"})}),"\n",(0,n.jsx)(e.a,{href:"https://github.com/mosn/layotto/actions/workflows/layotto-ci.yml",children:(0,n.jsx)(e.img,{src:"https://github.com/mosn/layotto/actions/workflows/layotto-ci.yml/badge.svg",alt:"Layotto Dev Pipeline \ud83c\udf0a"})})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://godoc.org/mosn.io/layotto",children:(0,n.jsx)(e.img,{src:"https://godoc.org/mosn.io/layotto?status.svg",alt:"GoDoc"})}),"\n",(0,n.jsx)(e.a,{href:"https://goreportcard.com/report/mosn.io/layotto",children:(0,n.jsx)(e.img,{src:"https://goreportcard.com/badge/github.com/mosn/layotto",alt:"Go Report Card"})}),"\n",(0,n.jsx)(e.a,{href:"https://codecov.io/gh/mosn/layotto",children:(0,n.jsx)(e.img,{src:"https://codecov.io/gh/mosn/layotto/branch/main/graph/badge.svg?token=10RxwSV6Sz",alt:"codecov"})}),"\n",(0,n.jsx)(e.a,{href:"http://isitmaintained.com/project/mosn/layotto",title:"Average time to resolve an issue",children:(0,n.jsx)(e.img,{src:"http://isitmaintained.com/badge/resolution/mosn/layotto.svg",alt:"Average time to resolve an issue"})})]}),"\n",(0,n.jsx)(e.p,{children:"Layotto(/le\u026a\u02c8\u0252t\u0259\u028a/) is an application runtime developed using Golang, which provides various distributed capabilities for applications, such as state management, configuration management, and event pub/sub capabilities to simplify application development."}),"\n",(0,n.jsxs)(e.p,{children:["Layotto is built on the open source data plane ",(0,n.jsx)(e.a,{href:"https://github.com/mosn/mosn",children:"MOSN"})," .In addition to providing distributed building blocks, Layotto can also serve as the data plane of Service Mesh and has the ability to control traffic."]}),"\n",(0,n.jsx)(e.h2,{id:"motivation",children:"Motivation"}),"\n",(0,n.jsxs)(e.p,{children:["Layotto aims to combine ",(0,n.jsx)(e.a,{href:"https://www.infoq.com/articles/multi-runtime-microservice-architecture/",children:"Multi-Runtime"})," with Service Mesh into one sidecar. No matter which product you are using as the Service Mesh data plane (e.g. MOSN,Envoy or any other product), you can always attach Layotto to it and add Multi-Runtime capabilities without adding new sidecars."]}),"\n",(0,n.jsxs)(e.p,{children:["For example, by adding Runtime capabilities to MOSN, a Layotto process can both ",(0,n.jsx)(e.a,{href:"/docs/start/istio/",children:"serve as the data plane of istio"})," and provide various Runtime APIs (such as Configuration API, Pub/Sub API, etc.)"]}),"\n",(0,n.jsxs)(e.p,{children:["In addition, we were surprised to find that a sidecar can do much more than that. We are trying to make Layotto even the runtime container of FaaS (Function as a service) with the magic power of ",(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/WebAssembly",children:"WebAssembly"})," ."]}),"\n",(0,n.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Service Communication"}),"\n",(0,n.jsx)(e.li,{children:"Service Governance.Such as traffic hijacking and observation, service rate limiting, etc"}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/docs/tart/istio/",children:"As the data plane of istio"})}),"\n",(0,n.jsx)(e.li,{children:"Configuration management"}),"\n",(0,n.jsx)(e.li,{children:"State management"}),"\n",(0,n.jsx)(e.li,{children:"Event publish and subscribe"}),"\n",(0,n.jsx)(e.li,{children:"Health check, query runtime metadata"}),"\n",(0,n.jsx)(e.li,{children:"Multilingual programming based on WASM"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"project-architecture",children:"Project Architecture"}),"\n",(0,n.jsx)(e.p,{children:"As shown in the architecture diagram below, Layotto uses the open source MOSN as the base to provide network layer management capabilities while providing distributed capabilities. The business logic can directly interact with Layotto through a lightweight SDK without paying attention to the specific back-end infrastructure."}),"\n",(0,n.jsxs)(e.p,{children:["Layotto provides sdk in various languages. The sdk interacts with Layotto through grpc. Application developers only need to specify their own infrastructure type through the ",(0,n.jsx)(e.a,{href:"https://github.com/mosn/layotto/blob/main/configs/runtime_config.json",children:"configuration file"})," provided by Layotto. No coding changes are required, which greatly improves the portability of the program."]}),"\n",(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*oRkFR63JB7cAAAAAAAAAAAAAARQnAQ"}),"\n",(0,n.jsx)(e.h2,{id:"quickstarts",children:"Quickstarts"}),"\n",(0,n.jsx)(e.h3,{id:"get-started-with-layotto",children:"Get started with Layotto"}),"\n",(0,n.jsxs)(e.p,{children:["You can try the quickstart demos below to get started with Layotto. In addition, you can experience the ",(0,n.jsx)(e.a,{href:"/docs/start/lab",children:"online laboratory"})]}),"\n",(0,n.jsx)(e.h3,{id:"api",children:"API"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"API"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"status"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"quick start"}),(0,n.jsx)(e.th,{children:"desc"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"State"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/state/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Write/Query the data of the Key/Value model"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Pub/Sub"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/pubsub/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Publish/Subscribe message through various Message Queue"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Service Invoke"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/rpc/helloworld",children:"demo"})}),(0,n.jsx)(e.td,{children:"Call Service through MOSN (another istio data plane)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Config"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/configuration/start-apollo",children:"demo"})}),(0,n.jsx)(e.td,{children:"Write/Query/Subscribe the config through various Config Center"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Lock"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/lock/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Distributed lock API"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Sequencer"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/sequencer/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Generate distributed unique and incremental ID"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"File"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"TODO"}),(0,n.jsx)(e.td,{children:"File API implementation"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Binding"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"TODO"}),(0,n.jsx)(e.td,{children:"Transparent data transmission API"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"service-mesh",children:"Service Mesh"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"feature"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"status"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"quick start"}),(0,n.jsx)(e.th,{children:"desc"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"istio"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"/docs/start/istio/",children:"demo"})}),(0,n.jsx)(e.td,{children:"As the data plane of istio"})]})})]}),"\n",(0,n.jsx)(e.h3,{id:"extendability",children:"Extendability"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"feature"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"status"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"quick start"}),(0,n.jsx)(e.th,{children:"desc"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"API plugin"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/api_plugin/helloworld",children:"demo"})}),(0,n.jsx)(e.td,{children:"You can add your own API !"})]})})]}),"\n",(0,n.jsx)(e.h3,{id:"actuator",children:"Actuator"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"feature"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"status"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"quick start"}),(0,n.jsx)(e.th,{children:"desc"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Health Check"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/actuator/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Query health state of app and components in Layotto"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Metadata Query"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/actuator/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Query metadata in Layotto/app"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"traffic-control",children:"Traffic Control"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"feature"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"status"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"quick start"}),(0,n.jsx)(e.th,{children:"desc"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"TCP Copy"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/network_filter/tcpcopy",children:"demo"})}),(0,n.jsx)(e.td,{children:"Dump the tcp traffic received by Layotto into local file system"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Flow Control"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/stream_filter/flow_control",children:"demo"})}),(0,n.jsx)(e.td,{children:"limit access to the APIs provided by Layotto"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"write-your-bussiness-logic-using-wasm",children:"Write your bussiness logic using WASM"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"feature"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"status"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"quick start"}),(0,n.jsx)(e.th,{children:"desc"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Go (TinyGo)"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/wasm/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Compile Code written by TinyGo to *.wasm and run in Layotto"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Rust"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/wasm/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Compile Code written by Rust to *.wasm and run in Layotto"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"AssemblyScript"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/wasm/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Compile Code written by AssemblyScript to *.wasm and run in Layotto"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"as-a-faasserverless-runtime-layotto--webassembly--k8s",children:"As a FaaS(Serverless) runtime (Layotto + WebAssembly + k8s)"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"feature"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"status"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"quick start"}),(0,n.jsx)(e.th,{children:"desc"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Go (TinyGo)"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/faas/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Compile Code written by TinyGo to *.wasm and run in Layotto And Scheduled by k8s."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Rust"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/faas/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Compile Code written by Rust to *.wasm and run in Layotto And Scheduled by k8s."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"AssemblyScript"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:(0,n.jsx)(e.a,{href:"https://mosn.io/layotto/#/en/start/faas/start",children:"demo"})}),(0,n.jsx)(e.td,{children:"Compile Code written by AssemblyScript to *.wasm and run in Layotto And Scheduled by k8s."})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"presentations",children:"Presentations"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://www.youtube.com/watch?v=5v8gTrFUDk8",children:"Layotto - A new chapter of Service Mesh and Application Runtime"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://www.youtube.com/watch?v=g01CJ4S9Qao",children:"WebAssembly + Application Runtime = A New Era of FaaS?"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"landscapes",children:"Landscapes"}),"\n",(0,n.jsxs)("p",{align:"center",children:[(0,n.jsxs)(e.p,{children:[(0,n.jsx)("img",{src:"https://landscape.cncf.io/images/left-logo.svg",width:"150"}),"\xa0\xa0",(0,n.jsx)("img",{src:"https://landscape.cncf.io/images/right-logo.svg",width:"200"})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)(e.p,{children:["Layotto enriches the ",(0,n.jsx)("a",{href:"https://landscape.cncf.io/serverless",children:"CNCF CLOUD NATIVE Landscape."})]})]}),"\n",(0,n.jsx)(e.h2,{id:"community",children:"Community"}),"\n",(0,n.jsx)(e.h3,{id:"contact-us",children:"Contact Us"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Platform"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Link"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["\ud83d\udcac ",(0,n.jsx)(e.a,{href:"https://www.dingtalk.com/en",children:"DingTalk"})," (preferred)"]}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["Search the group number: 31912621 or scan the QR code below  ",(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*HUKsSrFthtUAAAAAAAAAAAAAARQnAQ",height:"200px"})]})]})})]}),"\n",(0,n.jsx)(e.h2,{id:"how-to-contribute",children:"How to contribute"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://github.com/mosn/layotto/issues/108",children:'Where to start? Check "Community tasks" list!'})}),"\n",(0,n.jsx)(e.p,{children:"As a programming enthusiast , have you ever felt that you want to participate in the development of an open source project, but don't know where to start?\nIn order to help everyone better participate in open source projects, our community will regularly publish community tasks to help everyone learn by doing!"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/development/contributing-doc",children:"Document Contribution Guide"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/development/developing-component",children:"Component Development Guide"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/development/github-workflows",children:"Layotto Github Workflows"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/development/commands",children:"Layotto Commands Guide"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/development/CONTRIBUTING",children:"Layotto contributor guide"})}),"\n",(0,n.jsx)(e.h2,{id:"contributors",children:"Contributors"}),"\n",(0,n.jsx)(e.p,{children:"Thank y'all!"}),"\n",(0,n.jsx)("a",{href:"https://github.com/mosn/layotto/graphs/contributors",children:(0,n.jsx)("img",{src:"https://contrib.rocks/image?repo=mosn/layotto"})}),"\n",(0,n.jsx)(e.h2,{id:"design-documents",children:"Design Documents"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/design/actuator/actuator-design-doc",children:"Actuator Design Doc"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/design/configuration/configuration-api-with-apollo",children:"Configuration API with Apollo"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/design/pubsub/pubsub-api-and-compability-with-dapr-component",children:"Pubsub API and Compability with Dapr Component"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/design/rpc/rpc_design_document",children:"RPC Design Doc"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/design/lock/lock-api-design",children:"Distributed Lock API Design"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/docs/design/faas/faas-poc-design",children:"FaaS Design"})}),"\n",(0,n.jsx)(e.h2,{id:"faq",children:"FAQ"}),"\n",(0,n.jsx)(e.h3,{id:"difference-with-dapr",children:"Difference with dapr?"}),"\n",(0,n.jsx)(e.p,{children:"dapr is an excellent Runtime product, but it lacks the ability of Service Mesh, which is necessary for the Runtime\nproduct used in production environment, so we hope to combine Runtime with Service Mesh into one sidecar to meet\nmore complex production requirements."})]})}function h(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},8453:(t,e,s)=>{s.d(e,{R:()=>o,x:()=>l});var n=s(6540);const i={},r=n.createContext(i);function o(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);