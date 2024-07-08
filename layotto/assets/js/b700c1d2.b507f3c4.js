"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[6376],{1022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=t(4848),a=t(8453);const l={},o="\u5982\u4f55\u8c03\u7528 Layotto DelayQueue API",r={id:"start/delay_queue/start",title:"\u5982\u4f55\u8c03\u7528 Layotto DelayQueue API",description:"\u672c\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u8c03\u7528 Layotto DelayQueue API.",source:"@site/docs/start/delay_queue/start.md",sourceDirName:"start/delay_queue",slug:"/start/delay_queue/start",permalink:"/layotto/docs/start/delay_queue/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/start/delay_queue/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u4f7f\u7528Pub/Sub API\u8fdb\u884c\u6d88\u606f\u53d1\u5e03/\u8ba2\u9605",permalink:"/layotto/docs/start/pubsub/start"},next:{title:"\u5feb\u901f\u5f00\u59cb: \u57fa\u4e8e Redis \u4f7f\u7528\u5206\u5e03\u5f0f\u9501",permalink:"/layotto/docs/start/lock/start"}},d={},c=[{value:"\u4ec0\u4e48\u662f DelayQueue API ?",id:"\u4ec0\u4e48\u662f-delayqueue-api-",level:2},{value:"step 1. \u8fd0\u884c Layotto",id:"step-1-\u8fd0\u884c-layotto",level:2},{value:"<strong>With Docker</strong>",id:"with-docker",level:3},{value:"<strong>\u672c\u5730\u7f16\u8bd1\uff08\u4e0d\u9002\u5408 Windows)</strong>",id:"\u672c\u5730\u7f16\u8bd1\u4e0d\u9002\u5408-windows",level:3},{value:"step 2. \u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u8c03\u7528 Layotto DelayQueue API",id:"step-2-\u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\u8c03\u7528-layotto-delayqueue-api",level:2},{value:"<strong>Go</strong>",id:"go",level:3},{value:"<strong>Java</strong>",id:"java",level:3},{value:"step 3. \u9500\u6bc1\u5bb9\u5668,\u91ca\u653e\u8d44\u6e90",id:"step-3-\u9500\u6bc1\u5bb9\u5668\u91ca\u653e\u8d44\u6e90",level:2},{value:"<strong>\u9500\u6bc1 Docker container</strong>",id:"\u9500\u6bc1-docker-container",level:3},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2},{value:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48\uff1f",id:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48",level:3},{value:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\uff0c\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6API",id:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6api",level:3},{value:"Reference",id:"reference",level:3}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u5982\u4f55\u8c03\u7528-layotto-delayqueue-api",children:"\u5982\u4f55\u8c03\u7528 Layotto DelayQueue API"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u8c03\u7528 Layotto DelayQueue API."}),"\n",(0,s.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-delayqueue-api-",children:"\u4ec0\u4e48\u662f DelayQueue API ?"}),"\n",(0,s.jsx)(n.p,{children:'DelayQueue is a special kind of message queue, which lets you postpone the delivery of new messages to consumers.\nFor example, you can invoke this API and tell the message queue "please send this message to the consumers after 5 minutes".'}),"\n",(0,s.jsx)(n.h2,{id:"step-1-\u8fd0\u884c-layotto",children:"step 1. \u8fd0\u884c Layotto"}),"\n",(0,s.jsx)(n.h3,{id:"with-docker",children:(0,s.jsx)(n.strong,{children:"With Docker"})}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u7528 Docker \u542f\u52a8 Layotto"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run -v "$(pwd)/configs/config_standalone.json:/runtime/configs/config.json" -d  -p 34904:34904 --name layotto layotto/layotto start\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u672c\u5730\u7f16\u8bd1\u4e0d\u9002\u5408-windows",children:(0,s.jsx)(n.strong,{children:"\u672c\u5730\u7f16\u8bd1\uff08\u4e0d\u9002\u5408 Windows)"})}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u672c\u5730\u7f16\u8bd1\u3001\u8fd0\u884c Layotto\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"[!TIP|label: \u4e0d\u9002\u5408 Windows \u7528\u6237]\nLayotto \u5728 Windows \u4e0b\u4f1a\u7f16\u8bd1\u5931\u8d25\u3002\u5efa\u8bae Windows \u7528\u6237\u4f7f\u7528 docker \u90e8\u7f72"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u9879\u76ee\u4ee3\u7801\u4e0b\u8f7d\u5230\u672c\u5730\u540e\uff0c\u5207\u6362\u4ee3\u7801\u76ee\u5f55\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd ${project_path}/cmd/layotto\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6784\u5efa:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5b8c\u6210\u540e\u76ee\u5f55\u4e0b\u4f1a\u751f\u6210 Layotto\u6587\u4ef6\uff0c\u8fd0\u884c\u5b83\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_standalone.json\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-\u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\u8c03\u7528-layotto-delayqueue-api",children:"step 2. \u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u8c03\u7528 Layotto DelayQueue API"}),"\n",(0,s.jsx)(n.h3,{id:"go",children:(0,s.jsx)(n.strong,{children:"Go"})}),"\n",(0,s.jsx)(n.p,{children:"\u6784\u5efa\u3001\u8fd0\u884c go \u8bed\u8a00 demo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:' cd ${project_path}/demo/delay_queue/common/\n go build -o client\n ./client -s "demo"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6253\u5370\u51fa\u5982\u4e0b\u4fe1\u606f\u5219\u4ee3\u8868\u8c03\u7528\u6210\u529f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"TODO\n"})}),"\n",(0,s.jsx)(n.h3,{id:"java",children:(0,s.jsx)(n.strong,{children:"Java"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8f7d java sdk \u548c\u793a\u4f8b\u4ee3\u7801:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"@if.not.exist java-sdk",children:"git clone https://github.com/layotto/java-sdk\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd java-sdk\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6784\u5efa examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"@if.not.exist examples-delay_queue/target/examples-delay_queue-jar-with-dependencies.jar",children:"# build example jar\nmvn -f examples-delay_queue/pom.xml clean package\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"java -jar examples-delay_queue/target/examples-delay_queue-jar-with-dependencies.jar\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6253\u5370\u51fa\u4ee5\u4e0b\u4fe1\u606f\u8bf4\u660e\u8fd0\u884c\u6210\u529f:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"TODO\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-3-\u9500\u6bc1\u5bb9\u5668\u91ca\u653e\u8d44\u6e90",children:"step 3. \u9500\u6bc1\u5bb9\u5668,\u91ca\u653e\u8d44\u6e90"}),"\n",(0,s.jsx)(n.h3,{id:"\u9500\u6bc1-docker-container",children:(0,s.jsx)(n.strong,{children:"\u9500\u6bc1 Docker container"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60a8\u662f\u7528 Docker \u542f\u52a8\u7684 Layotto\uff0c\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u9500\u6bc1\u5bb9\u5668\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker rm -f layotto\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,s.jsx)(n.h3,{id:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48",children:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u5ba2\u6237\u7aef\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u4e86 Layotto \u63d0\u4f9b\u7684\u591a\u8bed\u8a00 sdk\uff0c\u8c03\u7528Layotto DelayQueue API\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["go sdk\u4f4d\u4e8e",(0,s.jsx)(n.code,{children:"sdk"}),"\u76ee\u5f55\u4e0b\uff0cjava sdk \u5728 ",(0,s.jsx)(n.a,{href:"https://github.com/layotto/java-sdk",children:"https://github.com/layotto/java-sdk"})]}),"\n",(0,s.jsx)(n.p,{children:"\u9664\u4e86\u4f7f\u7528sdk\u8c03\u7528Layotto\u63d0\u4f9b\u7684API\uff0c\u60a8\u4e5f\u53ef\u4ee5\u7528\u4efb\u4f55\u60a8\u559c\u6b22\u7684\u8bed\u8a00\u3001\u901a\u8fc7grpc\u76f4\u63a5\u548cLayotto\u4ea4\u4e92\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6api",children:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\uff0c\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6API"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u5de6\u4fa7\u7684\u5bfc\u822a\u680f\uff0c\u7ee7\u7eed\u4f53\u9a8c\u522b\u7684API\u5427\uff01"}),"\n",(0,s.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://mosn.io/layotto/api/v1/delay_queue.html",children:"API Reference"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const a={},l=s.createContext(a);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);