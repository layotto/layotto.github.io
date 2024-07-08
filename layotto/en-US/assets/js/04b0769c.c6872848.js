"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[638],{6106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(4848),o=n(8453);const a={},r="Layotto Support ODS Communications",l={id:"start/uds/start",title:"Layotto Support ODS Communications",description:"Quick Start",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/start/uds/start.md",sourceDirName:"start/uds",slug:"/start/uds/start",permalink:"/layotto/en-US/docs/start/uds/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/start/uds/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"OSS",permalink:"/layotto/en-US/docs/start/oss/"},next:{title:"SmsService API demo",permalink:"/layotto/en-US/docs/start/sms/start"}},i={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"step 1. Start layotto",id:"step-1-start-layotto",level:3},{value:"step 2. Start testing demo",id:"step-2-start-testing-demo",level:3},{value:"<strong>Go</strong>",id:"go",level:4},{value:"<strong>Java</strong>",id:"java",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"layotto-support-ods-communications",children:"Layotto Support ODS Communications"}),"\n",(0,s.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(t.p,{children:"Layotto provides the ability to communicate on ODS and has a better performance than the TCP."}),"\n",(0,s.jsx)(t.h3,{id:"step-1-start-layotto",children:"step 1. Start layotto"}),"\n",(0,s.jsxs)(t.p,{children:["layotto provides the configuration file ",(0,s.jsx)(t.code,{children:"configs/config_uds.json"})," to support UDS communications. The configuration file reads as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "servers": [\n    {\n      "default_log_path": "stdout",\n      "default_log_level": "DEBUG",\n      "routers": [\n        {\n          "router_config_name": "actuator_dont_need_router"\n        }\n      ],\n      "listeners": [\n        {\n          "name": "grpc",\n          "address": "/tmp/client-proxy.sock",\n          "bind_port": true,\n          "network": "unix",\n          "filter_chains": [\n            {\n              "filters": [\n                {\n                  "type": "grpc",\n                  "config": {\n                    "server_name": "runtime",\n                    "grpc_config": {\n                      "hellos": {\n                        "helloworld": {\n                          "type": "helloworld",\n                          "hello": "greeting"\n                        }\n                      }\n                    }\n                  }\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"There are two main differences compared to the TCP configuration, the type of network changed from tcp to unix, addresses from IP to unix socket file."}),"\n",(0,s.jsx)(t.p,{children:"When configured, toggle directory:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"#\u5907\u6ce8 \u8bf7\u5c06${project_path}\u66ff\u6362\u6210\u4f60\u7684\u9879\u76ee\u8def\u5f84\ncd ${project_path}/cmd/layotto\n"})}),"\n",(0,s.jsx)(t.p,{children:"Build:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build -o layotto\n"})}),"\n",(0,s.jsx)(t.p,{children:"Start Layotto:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_uds.json\n"})}),"\n",(0,s.jsx)(t.h3,{id:"step-2-start-testing-demo",children:"step 2. Start testing demo"}),"\n",(0,s.jsx)(t.h4,{id:"go",children:(0,s.jsx)(t.strong,{children:"Go"})}),"\n",(0,s.jsx)(t.p,{children:"Build and run go language demo:"}),"\n",(0,s.jsxs)(t.p,{children:["Layotto provides examples [demo]to call gRPC interfaces via ODS (",(0,s.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/demo/uds/client.go",children:"https://github.com/mosn/layotto/blob/main/demo/uds/client.go"}),")"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/demo/uds/\ngo build client.go\n\n# \u901a\u8fc7UDS\u8bbf\u95eelayotto\u7684hellos\u7ec4\u4ef6\n./client \n"})}),"\n",(0,s.jsx)(t.h4,{id:"java",children:(0,s.jsx)(t.strong,{children:"Java"})}),"\n",(0,s.jsx)(t.p,{children:"Build, run java language demo:"}),"\n",(0,s.jsx)(t.p,{children:"Layotto java-sdk has supported calling gRPC via ODS"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist java-sdk",children:"git clone https://github.com/layotto/java-sdk\n"})}),"\n",(0,s.jsx)(t.p,{children:"Switch directory:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"cd java-sdk\n"})}),"\n",(0,s.jsx)(t.p,{children:"Build:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist examples-uds/target/examples-uds-jar-with-dependencies.jar",children:"# build example jar\nmvn -f examples-uds/pom.xml clean package\n"})}),"\n",(0,s.jsx)(t.p,{children:"Run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"java -jar examples-uds/target/examples-uds-in-with-dependencies.jar\n"})}),"\n",(0,s.jsx)(t.p,{children:"The following information was printed and run successfully:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"greeting, helloowold\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);