"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[8530],{817:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var n=s(4848),o=s(8453);const c={},a="\u57fa\u4e8eS3\u534f\u8bae\u5b9e\u73b0\u5bf9\u8c61\u5b58\u50a8\u7684\u65e0\u611f\u8fc1\u79fb",r={id:"start/oss/oss",title:"\u57fa\u4e8eS3\u534f\u8bae\u5b9e\u73b0\u5bf9\u8c61\u5b58\u50a8\u7684\u65e0\u611f\u8fc1\u79fb",description:"\u5feb\u901f\u5f00\u59cb",source:"@site/docs/start/oss/oss.md",sourceDirName:"start/oss",slug:"/start/oss/",permalink:"/layotto/docs/start/oss/",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/start/oss/oss.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u57fa\u4e8eMinIO OSS\u5b9e\u73b0\u6587\u4ef6\u7684\u589e\u5220\u6539\u67e5",permalink:"/layotto/docs/start/file/minio"},next:{title:"Layotto \u652f\u6301UDS\u901a\u4fe1",permalink:"/layotto/docs/start/uds/start"}},l={},i=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"step 1.  \u542f\u52a8layotto",id:"step-1--\u542f\u52a8layotto",level:3},{value:"step 2. \u542f\u52a8\u6d4b\u8bd5demo",id:"step-2-\u542f\u52a8\u6d4b\u8bd5demo",level:3},{value:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\uff0c\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6API",id:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6api",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u57fa\u4e8es3\u534f\u8bae\u5b9e\u73b0\u5bf9\u8c61\u5b58\u50a8\u7684\u65e0\u611f\u8fc1\u79fb",children:"\u57fa\u4e8eS3\u534f\u8bae\u5b9e\u73b0\u5bf9\u8c61\u5b58\u50a8\u7684\u65e0\u611f\u8fc1\u79fb"}),"\n",(0,n.jsx)(t.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,n.jsxs)(t.p,{children:["Layotto\u63d0\u4f9b\u4e86\u8bbf\u95eeOSS\u7684\u793a\u4f8b ",(0,n.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/demo/oss/client.go",children:"demo"})," ,\u8be5\u793a\u4f8b\u57fa\u4e8eS3\u534f\u8bae\u5b9e\u73b0\u4e86\u5bf9\u8c61\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\uff0c\u5f53\u524d\n\u5df2\u652f\u6301\u90e8\u5206\u63a5\u53e3\u3002\u53ef\u4ee5\u505a\u5230\u5728\u4e0d\u540c\u7684OSS\u5b9e\u4f8b\u4e4b\u95f4\u8fdb\u884c\u65e0\u611f\u8fc1\u79fb\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"step-1--\u542f\u52a8layotto",children:"step 1.  \u542f\u52a8layotto"}),"\n",(0,n.jsxs)(t.p,{children:["layotto\u63d0\u4f9b\u4e86aws\u7684\u914d\u7f6e\u6587\u4ef6",(0,n.jsx)(t.code,{children:"configs/config_oss.json"}),"\uff0c\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\u6240\u793a:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'"grpc_config": {\n  "oss": {\n    "oss_demo": {\n      "type": "aws.oss",\n      "metadata": {\n        "basic_config":{\n          "region": "your-oss-resource-region",\n          "endpoint": "your-oss-resource-endpoint",\n          "accessKeyID": "your-oss-resource-accessKeyID",\n          "accessKeySecret": "your-oss-resource-accessKeySecret"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u914d\u7f6e\u4e2d\u5bf9\u5e94\u7684\u5b57\u6bb5\uff0c\u9700\u8981\u66ff\u6362\u6210\u81ea\u5df1\u7684OSS\u8d26\u53f7\u7684\u914d\u7f6e\u3002type \u652f\u6301\u591a\u79cd\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,n.jsx)(t.code,{children:"aliyun.oss"}),"\u5bf9\u5e94\u963f\u91cc\u4e91\u7684OSS\u670d\u52a1, ",(0,n.jsx)(t.code,{children:"aws.oss"})," \u5bf9\u5e94\u4e9a\u9a6c\u900a\u4e91\u7684 S3 \u670d\u52a1\u3002\n\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u573a\u666f\u8fdb\u884c\u914d\u7f6e\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u914d\u7f6e\u597d\u540e\uff0c\u5207\u6362\u76ee\u5f55:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"#\u5907\u6ce8 \u8bf7\u5c06${project_path}\u66ff\u6362\u6210\u4f60\u7684\u9879\u76ee\u8def\u5f84\ncd ${project_path}/cmd/layotto\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u6784\u5efa:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build -o layotto\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u542f\u52a8 Layotto:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_oss.json\n"})}),"\n",(0,n.jsx)(t.h3,{id:"step-2-\u542f\u52a8\u6d4b\u8bd5demo",children:"step 2. \u542f\u52a8\u6d4b\u8bd5demo"}),"\n",(0,n.jsxs)(t.p,{children:["Layotto\u63d0\u4f9b\u4e86\u8bbf\u95ee\u6587\u4ef6\u7684\u793a\u4f8b ",(0,n.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/demo/oss/client.go",children:"demo"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'cd ${project_path}/demo/oss/\ngo build client.go\n\n# \u4e0a\u4f20\u540d\u4e3atest3.txt\u7684\u6587\u4ef6\u5230\u540d\u4e3aantsys-wenxuwan\u7684bucket\u4e0b\uff0c\u5185\u5bb9\u4e3a"hello"\n./client put antsys-wenxuwan test3.txt "hello"\n\n# \u83b7\u53d6antsys-wenxuwan bucket\u4e0b\u540d\u4e3atest3.txt\u7684\u6587\u4ef6\n./client get antsys-wenxuwan test3.txt\n\n# \u5220\u9664antsys-wenxuwan bucket\u4e0b\u540d\u4e3atest3.txt\u7684\u6587\u4ef6\n./client del antsys-wenxuwan test3.txt\n\n# \u8fd4\u56deantsys-wenxuwan bucket\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u4fe1\u606f\n./client list antsys-wenxuwan\n\n'})}),"\n",(0,n.jsx)(t.h4,{id:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6api",children:"\u7ec6\u8282\u4ee5\u540e\u518d\u8bf4\uff0c\u7ee7\u7eed\u4f53\u9a8c\u5176\u4ed6API"}),"\n",(0,n.jsx)(t.p,{children:"\u901a\u8fc7\u5de6\u4fa7\u7684\u5bfc\u822a\u680f\uff0c\u7ee7\u7eed\u4f53\u9a8c\u522b\u7684API\u5427\uff01"})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(6540);const o={},c=n.createContext(o);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);