"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[3938],{4463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(4848),s=n(8453);const i={},l="Distributed Lock API demo with redis",r={id:"start/lock/start",title:"Distributed Lock API demo with redis",description:"This example shows how to call redis through Layotto to trylock/unlock.",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/start/lock/start.md",sourceDirName:"start/lock",slug:"/start/lock/start",permalink:"/layotto/en-US/docs/start/lock/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/start/lock/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"DelayQueue API demo",permalink:"/layotto/en-US/docs/start/delay_queue/start"},next:{title:"Use Sequencer API to generate distributed unique and self-incrementing id",permalink:"/layotto/en-US/docs/start/sequencer/start"}},c={},d=[{value:"step 1. Deploy Redis and Layotto",id:"step-1-deploy-redis-and-layotto",level:2},{value:"<strong>with Docker Compose</strong>",id:"with-docker-compose",level:3},{value:"<strong>Compile locally (not for Windows)</strong>",id:"compile-locally-not-for-windows",level:3},{value:"step 1.1. Run Redis with Docker",id:"step-11-run-redis-with-docker",level:3},{value:"step 1.2. Compile and run Layotto",id:"step-12-compile-and-run-layotto",level:3},{value:"step 2. Run the client demo",id:"step-2-run-the-client-demo",level:2},{value:"<strong>Go</strong>",id:"go",level:3},{value:"<strong>Java</strong>",id:"java",level:3},{value:"Next Step",id:"next-step",level:2},{value:"What did this client Demo do?",id:"what-did-this-client-demo-do",level:3},{value:"Details later, let&#39;s continue to experience other APIs",id:"details-later-lets-continue-to-experience-other-apis",level:3},{value:"Understand the design principle of Distributed Lock API",id:"understand-the-design-principle-of-distributed-lock-api",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"distributed-lock-api-demo-with-redis",children:"Distributed Lock API demo with redis"}),"\n",(0,o.jsx)(t.p,{children:"This example shows how to call redis through Layotto to trylock/unlock."}),"\n",(0,o.jsx)(t.p,{children:"The architecture of this example is shown in the figure below, and the started processes are: redis, Layotto, a client program with two goroutines trying the same lock concurrently."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img.png",src:n(8858).A+"",width:"587",height:"244"})}),"\n",(0,o.jsx)(t.h2,{id:"step-1-deploy-redis-and-layotto",children:"step 1. Deploy Redis and Layotto"}),"\n",(0,o.jsx)(t.h3,{id:"with-docker-compose",children:(0,o.jsx)(t.strong,{children:"with Docker Compose"})}),"\n",(0,o.jsx)(t.p,{children:"You can start Redis and Layotto with docker-compose"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd docker/layotto-redis\n# Start redis and layotto with docker-compose\ndocker-compose up -d\n"})}),"\n",(0,o.jsx)(t.h3,{id:"compile-locally-not-for-windows",children:(0,o.jsx)(t.strong,{children:"Compile locally (not for Windows)"})}),"\n",(0,o.jsx)(t.p,{children:"You can run Redis with Docker, then compile and run Layotto locally."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"[!TIP|label: Not for Windows users]\nLayotto fails to compile under Windows. Windows users are recommended to deploy using docker-compose"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"step-11-run-redis-with-docker",children:"step 1.1. Run Redis with Docker"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Get the latest version of Redis docker image"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Here we pull the latest version of the official image:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"docker pull redis:latest\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"View the local mirror"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Use the following command to check if redis is installed:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"docker images\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img.png",src:n(7552).A+"",width:"873",height:"263"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsx)(t.li,{children:"Run the container"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"After the installation is complete, we can use the following command to run the redis container:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"docker run -itd --name redis-test -p 6380:6379 redis\n"})}),"\n",(0,o.jsx)(t.p,{children:"Parameter Description:"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"-p 6380:6379"}),": Map port 6379 of the container to port 6380 of the host. The outside can directly access the Redis service through the host ip:6380."]}),"\n",(0,o.jsx)(t.h3,{id:"step-12-compile-and-run-layotto",children:"step 1.2. Compile and run Layotto"}),"\n",(0,o.jsx)(t.p,{children:"After downloading the project code to the local, enter the code directory and compile:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/cmd/layotto\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build\n"})}),"\n",(0,o.jsx)(t.p,{children:"The layotto file will be generated in the directory, run it:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_redis.json\n"})}),"\n",(0,o.jsx)(t.h2,{id:"step-2-run-the-client-demo",children:"step 2. Run the client demo"}),"\n",(0,o.jsx)(t.p,{children:"The client demo invokes Layotto API to lock and unlock the resource."}),"\n",(0,o.jsx)(t.h3,{id:"go",children:(0,o.jsx)(t.strong,{children:"Go"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:' cd ${project_path}/demo/lock/common/\n go build -o client\n ./client -s "lock_demo"\n'})}),"\n",(0,o.jsx)(t.p,{children:"If the following information is printed, the call is successful:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"client1 prepare to tryLock...\nclient1 got lock!ResourceId is resource_a\nclient2 prepare to tryLock...\nclient2 failed to get lock.ResourceId is resource_a\nclient1 prepare to unlock...\nclient1 succeeded in unlocking\nclient2 prepare to tryLock...\nclient2 got lock.ResourceId is resource_a\nclient2 succeeded in unlocking\nDemo success!\n"})}),"\n",(0,o.jsx)(t.h3,{id:"java",children:(0,o.jsx)(t.strong,{children:"Java"})}),"\n",(0,o.jsx)(t.p,{children:"Download java sdk and examples:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist java-sdk",children:"git clone https://github.com/layotto/java-sdk\n"})}),"\n",(0,o.jsx)(t.p,{children:"Change directory:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"cd java-sdk\n"})}),"\n",(0,o.jsx)(t.p,{children:"Build:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist examples-lock/target/examples-lock-jar-with-dependencies.jar",children:"# build example jar\nmvn -f examples-lock/pom.xml clean package\n"})}),"\n",(0,o.jsx)(t.p,{children:"Run the examples:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"java -jar examples-lock/target/examples-lock-jar-with-dependencies.jar\n"})}),"\n",(0,o.jsx)(t.p,{children:"And you will see:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"TryLockResponse{success=true}\nTryLockResponse{success=true}\nTryLockResponse{success=true}\nUnlockResponse{status=SUCCESS}\nTryLockResponse{success=true}\nUnlockResponse{status=LOCK_UNEXIST}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"next-step",children:"Next Step"}),"\n",(0,o.jsx)(t.h3,{id:"what-did-this-client-demo-do",children:"What did this client Demo do?"}),"\n",(0,o.jsx)(t.p,{children:"The demo client program uses the golang version SDK provided by Layotto, calls the Layotto distributed lock API, and starts multiple goroutines to do locking and unlocking operations."}),"\n",(0,o.jsxs)(t.p,{children:["The sdk is located in the ",(0,o.jsx)(t.code,{children:"sdk"})," directory, and users can call the API provided by Layotto through the sdk."]}),"\n",(0,o.jsx)(t.p,{children:"In addition to using sdk, you can also interact with Layotto directly through grpc in any language you like."}),"\n",(0,o.jsx)(t.p,{children:"In fact, sdk is only a very thin package for grpc, using sdk is about equal to directly using grpc."}),"\n",(0,o.jsx)(t.h3,{id:"details-later-lets-continue-to-experience-other-apis",children:"Details later, let's continue to experience other APIs"}),"\n",(0,o.jsx)(t.p,{children:"Explore other Quickstarts through the navigation bar on the left."}),"\n",(0,o.jsx)(t.h3,{id:"understand-the-design-principle-of-distributed-lock-api",children:"Understand the design principle of Distributed Lock API"}),"\n",(0,o.jsxs)(t.p,{children:["If you are interested in the design principle, or want to extend some functions, you can read ",(0,o.jsx)(t.a,{href:"/layotto/en-US/docs/design/lock/lock-api-design",children:"Distributed Lock API design document"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8858:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/img-0cc231618268880ceefa9f04f9e44900.png"},7552:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/img-18e99b7a12728a15bcd405c413d90039.png"},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var o=n(6540);const s={},i=o.createContext(s);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);