"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[934],{5144:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=n(4848),o=n(8453);const l={},c="\u5feb\u901f\u5f00\u59cb: \u57fa\u4e8e Redis \u4f7f\u7528\u5206\u5e03\u5f0f\u9501",r={id:"start/lock/start",title:"\u5feb\u901f\u5f00\u59cb: \u57fa\u4e8e Redis \u4f7f\u7528\u5206\u5e03\u5f0f\u9501",description:"\u8be5\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7Layotto\u8c03\u7528 Redis\uff0c\u8fdb\u884c\u5206\u5e03\u5f0f\u9501\u7684\u62a2\u9501\u3001\u89e3\u9501\u64cd\u4f5c\u3002",source:"@site/docs/start/lock/start.md",sourceDirName:"start/lock",slug:"/start/lock/start",permalink:"/layotto/docs/start/lock/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/start/lock/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u5982\u4f55\u8c03\u7528 Layotto DelayQueue API",permalink:"/layotto/docs/start/delay_queue/start"},next:{title:"\u4f7f\u7528Sequencer API\u751f\u6210\u5206\u5e03\u5f0f\u552f\u4e00\u3001\u81ea\u589eid",permalink:"/layotto/docs/start/sequencer/start"}},i={},d=[{value:"step 1. \u90e8\u7f72 Redis \u548c Layotto",id:"step-1-\u90e8\u7f72-redis-\u548c-layotto",level:2},{value:"<strong>\u4f7f\u7528 Docker Compose</strong>",id:"\u4f7f\u7528-docker-compose",level:3},{value:"<strong>\u672c\u5730\u7f16\u8bd1\uff08\u4e0d\u9002\u5408 Windows)</strong>",id:"\u672c\u5730\u7f16\u8bd1\u4e0d\u9002\u5408-windows",level:3},{value:"step 1.1. \u7528 Docker \u8fd0\u884c Redis",id:"step-11-\u7528-docker-\u8fd0\u884c-redis",level:3},{value:"step 1.2. \u8fd0\u884c Layotto",id:"step-12-\u8fd0\u884c-layotto",level:3},{value:"step 2. \u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u8c03\u7528Layotto\u62a2\u9501/\u89e3\u9501",id:"step-2-\u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\u8c03\u7528layotto\u62a2\u9501\u89e3\u9501",level:2},{value:"<strong>Go</strong>",id:"go",level:3},{value:"<strong>Java</strong>",id:"java",level:3},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2},{value:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48\uff1f",id:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48",level:3},{value:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\uff0c\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6API",id:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6api",level:3},{value:"\u4e86\u89e3\u5206\u5e03\u5f0f\u9501 API\u7684\u5b9e\u73b0\u539f\u7406",id:"\u4e86\u89e3\u5206\u5e03\u5f0f\u9501-api\u7684\u5b9e\u73b0\u539f\u7406",level:3}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"\u5feb\u901f\u5f00\u59cb-\u57fa\u4e8e-redis-\u4f7f\u7528\u5206\u5e03\u5f0f\u9501",children:"\u5feb\u901f\u5f00\u59cb: \u57fa\u4e8e Redis \u4f7f\u7528\u5206\u5e03\u5f0f\u9501"}),"\n",(0,t.jsx)(s.p,{children:"\u8be5\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7Layotto\u8c03\u7528 Redis\uff0c\u8fdb\u884c\u5206\u5e03\u5f0f\u9501\u7684\u62a2\u9501\u3001\u89e3\u9501\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u8be5\u793a\u4f8b\u7684\u67b6\u6784\u5982\u4e0b\u56fe\uff0c\u542f\u52a8\u7684\u8fdb\u7a0b\u6709\uff1aRedis\u3001Layotto\u3001\u4e00\u4e2a\u6f14\u793a\u7528\u7684client\u7a0b\u5e8f\uff08\u5176\u4e2d\u5305\u542b\u4e24\u4e2a\u534f\u7a0b\uff0c\u5e76\u53d1\u62a2\u9501\uff09"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(8858).A+"",width:"587",height:"244"})}),"\n",(0,t.jsx)(s.h2,{id:"step-1-\u90e8\u7f72-redis-\u548c-layotto",children:"step 1. \u90e8\u7f72 Redis \u548c Layotto"}),"\n",(0,t.jsx)(s.h3,{id:"\u4f7f\u7528-docker-compose",children:(0,t.jsx)(s.strong,{children:"\u4f7f\u7528 Docker Compose"})}),"\n",(0,t.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u7528 docker-compose \u542f\u52a8 Redis \u548c Layotto"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd docker/layotto-redis\n# Start redis and layotto with docker-compose\ndocker-compose up -d\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\u672c\u5730\u7f16\u8bd1\u4e0d\u9002\u5408-windows",children:(0,t.jsx)(s.strong,{children:"\u672c\u5730\u7f16\u8bd1\uff08\u4e0d\u9002\u5408 Windows)"})}),"\n",(0,t.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Docker \u8fd0\u884c Redis\uff0c\u7136\u540e\u672c\u5730\u7f16\u8bd1\u3001\u8fd0\u884c Layotto\u3002"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"[!TIP|label: \u4e0d\u9002\u5408 Windows \u7528\u6237]\nLayotto \u5728 Windows \u4e0b\u4f1a\u7f16\u8bd1\u5931\u8d25\u3002\u5efa\u8bae Windows \u7528\u6237\u4f7f\u7528 docker-compose \u90e8\u7f72"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"step-11-\u7528-docker-\u8fd0\u884c-redis",children:"step 1.1. \u7528 Docker \u8fd0\u884c Redis"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"\u53d6\u6700\u65b0\u7248\u7684 Redis \u955c\u50cf\u3002\n\u8fd9\u91cc\u6211\u4eec\u62c9\u53d6\u5b98\u65b9\u7684\u6700\u65b0\u7248\u672c\u7684\u955c\u50cf\uff1a"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"docker pull redis:latest\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"\u67e5\u770b\u672c\u5730\u955c\u50cf\n\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u662f\u5426\u5df2\u5b89\u88c5\u4e86 Redis\uff1a"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"docker images\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(7552).A+"",width:"873",height:"263"})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"\u8fd0\u884c\u5bb9\u5668"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u8fd0\u884c Redis \u5bb9\u5668\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"docker run -itd --name redis-test -p 6380:6379 redis\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,t.jsx)(s.p,{children:"-p 6380:6379\uff1a\u6620\u5c04\u5bb9\u5668\u670d\u52a1\u7684 6379 \u7aef\u53e3\u5230\u5bbf\u4e3b\u673a\u7684 6380 \u7aef\u53e3\u3002\u5916\u90e8\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5bbf\u4e3b\u673aip:6380 \u8bbf\u95ee\u5230 Redis \u7684\u670d\u52a1\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"step-12-\u8fd0\u884c-layotto",children:"step 1.2. \u8fd0\u884c Layotto"}),"\n",(0,t.jsx)(s.p,{children:"\u5c06\u9879\u76ee\u4ee3\u7801\u4e0b\u8f7d\u5230\u672c\u5730\u540e\uff0c\u5207\u6362\u4ee3\u7801\u76ee\u5f55\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"cd ${project_path}/cmd/layotto\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u6784\u5efa:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build -o layotto\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u5b8c\u6210\u540e\u76ee\u5f55\u4e0b\u4f1a\u751f\u6210layotto\u6587\u4ef6\uff0c\u8fd0\u884c\u5b83\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_redis.json\n"})}),"\n",(0,t.jsx)(s.h2,{id:"step-2-\u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\u8c03\u7528layotto\u62a2\u9501\u89e3\u9501",children:"step 2. \u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u8c03\u7528Layotto\u62a2\u9501/\u89e3\u9501"}),"\n",(0,t.jsx)(s.h3,{id:"go",children:(0,t.jsx)(s.strong,{children:"Go"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:' cd ${project_path}/demo/lock/common/\n go build -o client\n ./client -s "lock_demo"\n'})}),"\n",(0,t.jsx)(s.p,{children:"\u6253\u5370\u51fa\u5982\u4e0b\u4fe1\u606f\u5219\u4ee3\u8868\u8c03\u7528\u6210\u529f\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"client1 prepare to tryLock...\nclient1 got lock!ResourceId is resource_a\nclient2 prepare to tryLock...\nclient2 failed to get lock.ResourceId is resource_a\nclient1 prepare to unlock...\nclient1 succeeded in unlocking\nclient2 prepare to tryLock...\nclient2 got lock.ResourceId is resource_a\nclient2 succeeded in unlocking\nDemo success!\n"})}),"\n",(0,t.jsx)(s.h3,{id:"java",children:(0,t.jsx)(s.strong,{children:"Java"})}),"\n",(0,t.jsx)(s.p,{children:"\u4e0b\u8f7d java sdk \u548c\u793a\u4f8b\u4ee3\u7801:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",metastring:"@if.not.exist java-sdk",children:"git clone https://github.com/layotto/java-sdk\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u5207\u6362\u76ee\u5f55:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"cd java-sdk\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u6784\u5efa:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",metastring:"@if.not.exist examples-lock/target/examples-lock-jar-with-dependencies.jar",children:"# build example jar\nmvn -f examples-lock/pom.xml clean package\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u8fd0\u884c:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"java -jar examples-lock/target/examples-lock-jar-with-dependencies.jar\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u6253\u5370\u51fa\u4ee5\u4e0b\u4fe1\u606f\u8bf4\u660e\u8fd0\u884c\u6210\u529f:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"TryLockResponse{success=true}\nTryLockResponse{success=true}\nTryLockResponse{success=true}\nUnlockResponse{status=SUCCESS}\nTryLockResponse{success=true}\nUnlockResponse{status=LOCK_UNEXIST}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,t.jsx)(s.h3,{id:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48",children:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48\uff1f"}),"\n",(0,t.jsx)(s.p,{children:"\u793a\u4f8b\u5ba2\u6237\u7aef\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u4e86Layotto\u63d0\u4f9b\u7684golang\u7248\u672csdk\uff0c\u8c03\u7528Layotto \u5206\u5e03\u5f0f\u9501API,\u542f\u52a8\u591a\u4e2a\u534f\u7a0b\u8fdb\u884c\u62a2\u9501\u3001\u89e3\u9501\u64cd\u4f5c\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["sdk\u4f4d\u4e8e",(0,t.jsx)(s.code,{children:"sdk"}),"\u76ee\u5f55\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7sdk\u8c03\u7528Layotto\u63d0\u4f9b\u7684API\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u9664\u4e86\u4f7f\u7528sdk\uff0c\u60a8\u4e5f\u53ef\u4ee5\u7528\u4efb\u4f55\u60a8\u559c\u6b22\u7684\u8bed\u8a00\u3001\u901a\u8fc7grpc\u76f4\u63a5\u548cLayotto\u4ea4\u4e92\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u5176\u5b9esdk\u53ea\u662f\u5bf9grpc\u5f88\u8584\u7684\u5c01\u88c5\uff0c\u7528sdk\u7ea6\u7b49\u4e8e\u76f4\u63a5\u7528grpc\u8c03\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6api",children:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\uff0c\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6API"}),"\n",(0,t.jsx)(s.p,{children:"\u901a\u8fc7\u5de6\u4fa7\u7684\u5bfc\u822a\u680f\uff0c\u7ee7\u7eed\u4f53\u9a8c\u522b\u7684API\u5427\uff01"}),"\n",(0,t.jsx)(s.h3,{id:"\u4e86\u89e3\u5206\u5e03\u5f0f\u9501-api\u7684\u5b9e\u73b0\u539f\u7406",children:"\u4e86\u89e3\u5206\u5e03\u5f0f\u9501 API\u7684\u5b9e\u73b0\u539f\u7406"}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u5bf9\u5b9e\u73b0\u539f\u7406\u611f\u5174\u8da3\uff0c\u6216\u8005\u60f3\u6269\u5c55\u4e00\u4e9b\u529f\u80fd\uff0c\u53ef\u4ee5\u9605\u8bfb",(0,t.jsx)(s.a,{href:"/layotto/docs/design/lock/lock-api-design",children:"\u5206\u5e03\u5f0f\u9501 API\u7684\u8bbe\u8ba1\u6587\u6863"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8858:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/img-0cc231618268880ceefa9f04f9e44900.png"},7552:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/img-18e99b7a12728a15bcd405c413d90039.png"},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var t=n(6540);const o={},l=t.createContext(o);function c(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);