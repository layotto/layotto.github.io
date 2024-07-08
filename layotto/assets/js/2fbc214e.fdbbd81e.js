"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[8268],{6364:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var n=s(4848),d=s(8453);const a={},l="\u4f7f\u7528State API\u8fdb\u884c\u72b6\u6001\u7ba1\u7406",o={id:"start/state/start",title:"\u4f7f\u7528State API\u8fdb\u884c\u72b6\u6001\u7ba1\u7406",description:"\u4ec0\u4e48\u662fState API",source:"@site/docs/start/state/start.md",sourceDirName:"start/state",slug:"/start/state/start",permalink:"/layotto/docs/start/state/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/start/state/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/layotto/docs/start/"},next:{title:"\u4f7f\u7528Configuration API\u8c03\u7528apollo\u914d\u7f6e\u4e2d\u5fc3",permalink:"/layotto/docs/start/configuration/start-apollo"}},c={},r=[{value:"\u4ec0\u4e48\u662fState API",id:"\u4ec0\u4e48\u662fstate-api",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"step 1. \u542f\u52a8 Redis \u548c Layotto",id:"step-1-\u542f\u52a8-redis-\u548c-layotto",level:3},{value:"<strong>\u4f7f\u7528 Docker Compose</strong>",id:"\u4f7f\u7528-docker-compose",level:4},{value:"<strong>\u672c\u5730\u7f16\u8bd1\uff08\u4e0d\u9002\u5408 Windows)</strong>",id:"\u672c\u5730\u7f16\u8bd1\u4e0d\u9002\u5408-windows",level:4},{value:"step 1.1. \u7528 Docker \u8fd0\u884c Redis",id:"step-11-\u7528-docker-\u8fd0\u884c-redis",level:4},{value:"step 1.2. \u7f16\u8bd1\u3001\u8fd0\u884c Layotto",id:"step-12-\u7f16\u8bd1\u8fd0\u884c-layotto",level:4},{value:"step 2. \u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u8c03\u7528Layotto\u8fdb\u884c\u589e\u5220\u6539\u67e5",id:"step-2-\u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\u8c03\u7528layotto\u8fdb\u884c\u589e\u5220\u6539\u67e5",level:3},{value:"<strong>Go</strong>",id:"go",level:4},{value:"<strong>Java</strong>",id:"java",level:4},{value:"step 3. \u9500\u6bc1\u5bb9\u5668\uff0c\u91ca\u653e\u8d44\u6e90",id:"step-3-\u9500\u6bc1\u5bb9\u5668\u91ca\u653e\u8d44\u6e90",level:3},{value:"<strong>\u5173\u95ed Docker Compose</strong>",id:"\u5173\u95ed-docker-compose",level:4},{value:"<strong>\u9500\u6bc1 Redis Docker \u5bb9\u5668</strong>",id:"\u9500\u6bc1-redis-docker-\u5bb9\u5668",level:4},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:3},{value:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48\uff1f",id:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48",level:4},{value:"\u60f3\u8981\u8be6\u7ec6\u4e86\u89e3State API?",id:"\u60f3\u8981\u8be6\u7ec6\u4e86\u89e3state-api",level:4},{value:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\uff0c\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6API",id:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6api",level:4}];function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u4f7f\u7528state-api\u8fdb\u884c\u72b6\u6001\u7ba1\u7406",children:"\u4f7f\u7528State API\u8fdb\u884c\u72b6\u6001\u7ba1\u7406"}),"\n",(0,n.jsx)(t.h2,{id:"\u4ec0\u4e48\u662fstate-api",children:"\u4ec0\u4e48\u662fState API"}),"\n",(0,n.jsx)(t.p,{children:"State API\u662f\u4e00\u5957\u5bf9Key/Value\u6570\u636e\u8fdb\u884c\u589e\u5220\u6539\u67e5\u7684API\u3002\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u5957State API\u64cd\u4f5c\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff08\u6216\u67d0\u79cd\u5b58\u50a8\u7cfb\u7edf\uff09\uff0c\u5bf9Key/Value\u6a21\u578b\u7684\u6570\u636e\u8fdb\u884c\u589e\u5220\u6539\u67e5\u3002"}),"\n",(0,n.jsx)(t.p,{children:"API\u652f\u6301\u6279\u91cfCRUD\u64cd\u4f5c\uff0c\u652f\u6301\u58f0\u660e\u5bf9\u5e76\u53d1\u5b89\u5168\u548c\u6570\u636e\u4e00\u81f4\u6027\u7684\u8981\u6c42\uff0c\u7531Layotto\u5e2e\u60a8\u5904\u7406\u590d\u6742\u7684\u5e76\u53d1\u5b89\u5168\u548c\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,n.jsx)(t.p,{children:"\u8be5\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7Layotto\u8c03\u7528 Redis\uff0c\u8fdb\u884c\u72b6\u6001\u6570\u636e\u7684\u589e\u5220\u6539\u67e5\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u8be5\u793a\u4f8b\u7684\u67b6\u6784\u5982\u4e0b\u56fe\uff0c\u542f\u52a8\u7684\u8fdb\u7a0b\u6709\uff1aRedis\u3001Layotto\u3001\u5ba2\u6237\u7aef\u7a0b\u7a0b\u5e8f"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img.png",src:s(8744).A+"",width:"423",height:"130"})}),"\n",(0,n.jsx)(t.h3,{id:"step-1-\u542f\u52a8-redis-\u548c-layotto",children:"step 1. \u542f\u52a8 Redis \u548c Layotto"}),"\n",(0,n.jsx)(t.h4,{id:"\u4f7f\u7528-docker-compose",children:(0,n.jsx)(t.strong,{children:"\u4f7f\u7528 Docker Compose"})}),"\n",(0,n.jsx)(t.p,{children:"\u60a8\u53ef\u4ee5\u7528 docker-compose \u542f\u52a8 Redis \u548c Layotto"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd docker/layotto-redis\n# Start redis and layotto with docker-compose\ndocker-compose up -d\n"})}),"\n",(0,n.jsx)(t.h4,{id:"\u672c\u5730\u7f16\u8bd1\u4e0d\u9002\u5408-windows",children:(0,n.jsx)(t.strong,{children:"\u672c\u5730\u7f16\u8bd1\uff08\u4e0d\u9002\u5408 Windows)"})}),"\n",(0,n.jsx)(t.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Docker \u8fd0\u884c Redis\uff0c\u7136\u540e\u672c\u5730\u7f16\u8bd1\u3001\u8fd0\u884c Layotto\u3002"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"[!TIP|label: \u4e0d\u9002\u5408 Windows \u7528\u6237]\nLayotto \u5728 Windows \u4e0b\u4f1a\u7f16\u8bd1\u5931\u8d25\u3002\u5efa\u8bae Windows \u7528\u6237\u4f7f\u7528 docker-compose \u90e8\u7f72"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"step-11-\u7528-docker-\u8fd0\u884c-redis",children:"step 1.1. \u7528 Docker \u8fd0\u884c Redis"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u53d6\u6700\u65b0\u7248\u7684 Redis \u955c\u50cf\u3002\n\u8fd9\u91cc\u6211\u4eec\u62c9\u53d6\u5b98\u65b9\u7684\u6700\u65b0\u7248\u672c\u7684\u955c\u50cf\uff1a"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"docker pull redis:latest\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"\u67e5\u770b\u672c\u5730\u955c\u50cf"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u662f\u5426\u5df2\u5b89\u88c5\u4e86 Redis\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"docker images\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img.png",src:s(7552).A+"",width:"873",height:"263"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"\u8fd0\u884c\u5bb9\u5668"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u8fd0\u884c Redis \u5bb9\u5668\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"docker run -itd --name redis-test -p 6380:6379 redis\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,n.jsx)(t.p,{children:"-p 6380:6379\uff1a\u6620\u5c04\u5bb9\u5668\u670d\u52a1\u7684 6379 \u7aef\u53e3\u5230\u5bbf\u4e3b\u673a\u7684 6380 \u7aef\u53e3\u3002\u5916\u90e8\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5bbf\u4e3b\u673aip:6380 \u8bbf\u95ee\u5230 Redis \u7684\u670d\u52a1\u3002"}),"\n",(0,n.jsx)(t.h4,{id:"step-12-\u7f16\u8bd1\u8fd0\u884c-layotto",children:"step 1.2. \u7f16\u8bd1\u3001\u8fd0\u884c Layotto"}),"\n",(0,n.jsx)(t.p,{children:"\u5c06\u9879\u76ee\u4ee3\u7801\u4e0b\u8f7d\u5230\u672c\u5730\u540e\uff0c\u5207\u6362\u4ee3\u7801\u76ee\u5f55\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# change directory to ${your project path}/cmd/layotto\ncd cmd/layotto\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u6784\u5efa:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build -o layotto\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u5b8c\u6210\u540e\u76ee\u5f55\u4e0b\u4f1a\u751f\u6210layotto\u6587\u4ef6\uff0c\u8fd0\u884c\u5b83\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_redis.json\n"})}),"\n",(0,n.jsx)(t.h3,{id:"step-2-\u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\u8c03\u7528layotto\u8fdb\u884c\u589e\u5220\u6539\u67e5",children:"step 2. \u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u8c03\u7528Layotto\u8fdb\u884c\u589e\u5220\u6539\u67e5"}),"\n",(0,n.jsx)(t.h4,{id:"go",children:(0,n.jsx)(t.strong,{children:"Go"})}),"\n",(0,n.jsx)(t.p,{children:"\u6784\u5efa\u3001\u8fd0\u884c go \u8bed\u8a00 demo:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'# open a new terminal tab\n# change directory to ${your project path}/demo/state/redis/\n cd ${project_path}/demo/state/common/\n go build -o client\n ./client -s "state_demo"\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u6253\u5370\u51fa\u5982\u4e0b\u4fe1\u606f\u5219\u4ee3\u8868\u8c03\u7528\u6210\u529f\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"SaveState succeeded.key:key1 , value: hello world \nGetState succeeded.[key:key1 etag:3]: hello world\nSaveBulkState succeeded.[key:key1 etag:2]: hello world\nSaveBulkState succeeded.[key:key2 etag:2]: hello world\nGetBulkState succeeded.key:key1 ,value:hello world ,etag:4 ,metadata:map[] \nGetBulkState succeeded.key:key4 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key2 ,value:hello world ,etag:2 ,metadata:map[] \nGetBulkState succeeded.key:key3 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key5 ,value: ,etag: ,metadata:map[] \nDeleteState succeeded.key:key1\nDeleteState succeeded.key:key2\n"})}),"\n",(0,n.jsx)(t.h4,{id:"java",children:(0,n.jsx)(t.strong,{children:"Java"})}),"\n",(0,n.jsx)(t.p,{children:"Download java sdk and examples:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist java-sdk",children:"git clone https://github.com/layotto/java-sdk\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u5207\u6362\u76ee\u5f55:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"cd java-sdk\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u6784\u5efa:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist examples-state/target/examples-state-jar-with-dependencies.jar",children:"# build example jar\nmvn -f examples-state/pom.xml clean package\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u8fd0\u884c:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"java -jar examples-state/target/examples-state-jar-with-dependencies.jar\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u6253\u5370\u51fa\u4ee5\u4e0b\u4fe1\u606f\u8bf4\u660e\u8fd0\u884c\u6210\u529f:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"SaveState succeeded.key:key1 , value: v11\nGetState succeeded. key:key1  value:v11\nDeleteState succeeded. key:key1\nGetState after delete. key:key1  value:\nSaveBulkState succeeded. key:key1 , key2\nGetBulkState succeeded. key:key2\n"})}),"\n",(0,n.jsx)(t.h3,{id:"step-3-\u9500\u6bc1\u5bb9\u5668\u91ca\u653e\u8d44\u6e90",children:"step 3. \u9500\u6bc1\u5bb9\u5668\uff0c\u91ca\u653e\u8d44\u6e90"}),"\n",(0,n.jsx)(t.h4,{id:"\u5173\u95ed-docker-compose",children:(0,n.jsx)(t.strong,{children:"\u5173\u95ed Docker Compose"})}),"\n",(0,n.jsx)(t.p,{children:"\u5982\u679c\u60a8\u662f\u7528 docker-compose \u542f\u52a8\u7684 Redis \u548c Layotto\uff0c\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u5173\u95ed\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd ${project_path}/docker/layotto-redis\ndocker-compose stop\n"})}),"\n",(0,n.jsx)(t.h4,{id:"\u9500\u6bc1-redis-docker-\u5bb9\u5668",children:(0,n.jsx)(t.strong,{children:"\u9500\u6bc1 Redis Docker \u5bb9\u5668"})}),"\n",(0,n.jsx)(t.p,{children:"\u5982\u679c\u60a8\u662f\u7528 Docker \u542f\u52a8\u7684 Redis\uff0c\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u9500\u6bc1 Redis \u5bb9\u5668\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"docker rm -f redis-test\n"})}),"\n",(0,n.jsx)(t.h3,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,n.jsx)(t.h4,{id:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48",children:"\u8fd9\u4e2a\u5ba2\u6237\u7aef\u7a0b\u5e8f\u505a\u4e86\u4ec0\u4e48\uff1f"}),"\n",(0,n.jsx)(t.p,{children:"\u793a\u4f8b\u5ba2\u6237\u7aef\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u4e86Layotto\u63d0\u4f9b\u7684golang\u7248\u672csdk\uff0c\u8c03\u7528Layotto \u7684State API\u8fdb\u884c\u589e\u5220\u6539\u67e5\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["sdk\u4f4d\u4e8e",(0,n.jsx)(t.code,{children:"sdk"}),"\u76ee\u5f55\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7sdk\u8c03\u7528Layotto\u63d0\u4f9b\u7684API\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u9664\u4e86\u4f7f\u7528sdk\uff0c\u60a8\u4e5f\u53ef\u4ee5\u7528\u4efb\u4f55\u60a8\u559c\u6b22\u7684\u8bed\u8a00\u3001\u901a\u8fc7grpc\u76f4\u63a5\u548cLayotto\u4ea4\u4e92\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u5176\u5b9esdk\u53ea\u662f\u5bf9grpc\u5f88\u8584\u7684\u5c01\u88c5\uff0c\u7528sdk\u7ea6\u7b49\u4e8e\u76f4\u63a5\u7528grpc\u8c03\u3002"}),"\n",(0,n.jsx)(t.h4,{id:"\u60f3\u8981\u8be6\u7ec6\u4e86\u89e3state-api",children:"\u60f3\u8981\u8be6\u7ec6\u4e86\u89e3State API?"}),"\n",(0,n.jsx)(t.p,{children:"State API\u662f\u5e72\u561b\u7684\uff0c\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898\uff0c\u6211\u5e94\u8be5\u5728\u4ec0\u4e48\u573a\u666f\u4f7f\u7528\u5b83\uff1f"}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u60a8\u4ea7\u751f\u4e86\u8fd9\u6837\u7684\u56f0\u60d1\uff0c\u60f3\u8981\u4e86\u89e3State API\u7684\u66f4\u591a\u7ec6\u8282\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u9605\u8bfb",(0,n.jsx)(t.a,{href:"/layotto/docs/building_blocks/state/reference",children:"State API\u4f7f\u7528\u6587\u6863"})]}),"\n",(0,n.jsx)(t.h4,{id:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6api",children:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\uff0c\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6API"}),"\n",(0,n.jsx)(t.p,{children:"\u901a\u8fc7\u5de6\u4fa7\u7684\u5bfc\u822a\u680f\uff0c\u7ee7\u7eed\u4f53\u9a8c\u522b\u7684API\u5427\uff01"})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},7552:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/img-18e99b7a12728a15bcd405c413d90039.png"},8744:(e,t,s)=>{s.d(t,{A:()=>n});const n="data:image/png;base64,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"},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var n=s(6540);const d={},a=n.createContext(d);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);