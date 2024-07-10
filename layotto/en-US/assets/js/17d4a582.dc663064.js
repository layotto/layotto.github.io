"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[4703],{5661:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(4848),o=s(8453);const r={},i="SmsService API demo",a={id:"start/sms/start",title:"SmsService API demo",description:"This example shows how to invoke Layotto SmsService API.",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/start/sms/start.md",sourceDirName:"start/sms",slug:"/start/sms/start",permalink:"/layotto/en-US/docs/start/sms/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/i18n/en-US/docusaurus-plugin-content-docs/current/start/sms/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Layotto Support ODS Communications",permalink:"/layotto/en-US/docs/start/uds/start"},next:{title:"CryptionService API demo",permalink:"/layotto/en-US/docs/start/cryption/start"}},l={},c=[{value:"What is SmsService API used for?",id:"what-is-smsservice-api-used-for",level:2},{value:"step 1. Deploy Layotto",id:"step-1-deploy-layotto",level:2},{value:"<strong>With Docker</strong>",id:"with-docker",level:3},{value:"<strong>Compile locally (not for Windows)</strong>",id:"compile-locally-not-for-windows",level:3},{value:"step 2. Run the client program to invoke Layotto SmsService API",id:"step-2-run-the-client-program-to-invoke-layotto-smsservice-api",level:2},{value:"<strong>Go</strong>",id:"go",level:3},{value:"<strong>Java</strong>",id:"java",level:3},{value:"step 3. Stop containers and release resources",id:"step-3-stop-containers-and-release-resources",level:2},{value:"<strong>Destroy the Docker container</strong>",id:"destroy-the-docker-container",level:3},{value:"Next step",id:"next-step",level:2},{value:"What does this client program do?",id:"what-does-this-client-program-do",level:3},{value:"Details later, let&#39;s continue to experience other APIs",id:"details-later-lets-continue-to-experience-other-apis",level:3},{value:"Reference",id:"reference",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"smsservice-api-demo",children:"SmsService API demo"}),"\n",(0,n.jsx)(t.p,{children:"This example shows how to invoke Layotto SmsService API."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-smsservice-api-used-for",children:"What is SmsService API used for?"}),"\n",(0,n.jsx)(t.p,{children:"SmsService is used to send SMS messages."}),"\n",(0,n.jsx)(t.h2,{id:"step-1-deploy-layotto",children:"step 1. Deploy Layotto"}),"\n",(0,n.jsx)(t.h3,{id:"with-docker",children:(0,n.jsx)(t.strong,{children:"With Docker"})}),"\n",(0,n.jsx)(t.p,{children:"You can start Layotto with docker"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'docker run -v "$(pwd)/configs/config_standalone.json:/runtime/configs/config.json" -d  -p 34904:34904 --name layotto layotto/layotto start\n'})}),"\n",(0,n.jsx)(t.h3,{id:"compile-locally-not-for-windows",children:(0,n.jsx)(t.strong,{children:"Compile locally (not for Windows)"})}),"\n",(0,n.jsx)(t.p,{children:"You can compile and run Layotto locally."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"[!TIP|label: Not for Windows users]\nLayotto fails to compile under Windows. Windows users are recommended to deploy using docker"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"After downloading the project code to the local, switch the code directory and compile:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/cmd/layotto\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build\n"})}),"\n",(0,n.jsx)(t.p,{children:"Once finished, the layotto binary will be generated in the directory."}),"\n",(0,n.jsx)(t.p,{children:"Run it:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_standalone.json\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-run-the-client-program-to-invoke-layotto-smsservice-api",children:"step 2. Run the client program to invoke Layotto SmsService API"}),"\n",(0,n.jsx)(t.h3,{id:"go",children:(0,n.jsx)(t.strong,{children:"Go"})}),"\n",(0,n.jsx)(t.p,{children:"Build and run the golang demo:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:' cd ${project_path}/demo/sms/common/\n go build -o client\n ./client -s "demo"\n'})}),"\n",(0,n.jsx)(t.p,{children:"If the following information is printed, the demo is successful:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"TODO\n"})}),"\n",(0,n.jsx)(t.h3,{id:"java",children:(0,n.jsx)(t.strong,{children:"Java"})}),"\n",(0,n.jsx)(t.p,{children:"Download java sdk and examples:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist java-sdk",children:"git clone https://github.com/layotto/java-sdk\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"cd java-sdk\n"})}),"\n",(0,n.jsx)(t.p,{children:"Build the demo:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist examples-sms/target/examples-sms-jar-with-dependencies.jar",children:"# build example jar\nmvn -f examples-sms/pom.xml clean package\n"})}),"\n",(0,n.jsx)(t.p,{children:"Run it:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"java -jar examples-sms/target/examples-sms-jar-with-dependencies.jar\n"})}),"\n",(0,n.jsx)(t.p,{children:"If the following information is printed, the demo is successful:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"TODO\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-3-stop-containers-and-release-resources",children:"step 3. Stop containers and release resources"}),"\n",(0,n.jsx)(t.h3,{id:"destroy-the-docker-container",children:(0,n.jsx)(t.strong,{children:"Destroy the Docker container"})}),"\n",(0,n.jsx)(t.p,{children:"If you started Layotto with docker, you can destroy the container as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker rm -f layotto\n"})}),"\n",(0,n.jsx)(t.h2,{id:"next-step",children:"Next step"}),"\n",(0,n.jsx)(t.h3,{id:"what-does-this-client-program-do",children:"What does this client program do?"}),"\n",(0,n.jsx)(t.p,{children:"The demo client program uses the SDK provided by Layotto to invoke the Layotto SmsService API."}),"\n",(0,n.jsxs)(t.p,{children:["The golang sdk is located in the ",(0,n.jsx)(t.code,{children:"sdk"})," directory, and the java sdk is in ",(0,n.jsx)(t.a,{href:"https://github.com/layotto/java-sdk",children:"https://github.com/layotto/java-sdk"})]}),"\n",(0,n.jsx)(t.p,{children:"In addition to using sdk, you can also interact with Layotto directly through grpc in any language you like."}),"\n",(0,n.jsx)(t.h3,{id:"details-later-lets-continue-to-experience-other-apis",children:"Details later, let's continue to experience other APIs"}),"\n",(0,n.jsx)(t.p,{children:"Explore other Quickstarts through the navigation bar on the left."}),"\n",(0,n.jsx)(t.h3,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://mosn.io/layotto/api/v1/sms.html",children:"API Reference"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);