"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[5972],{408:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=o(4848),t=o(8453);const s={},c="layotto\u7ec4\u4ef6\u5f15\u7528",l={id:"development/component_ref/component_ref",title:"layotto\u7ec4\u4ef6\u5f15\u7528",description:"\u80cc\u666f",source:"@site/docs/development/component_ref/component_ref.md",sourceDirName:"development/component_ref",slug:"/development/component_ref/",permalink:"/layotto/docs/development/component_ref/",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/development/component_ref/component_ref.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u7ec4\u4ef6\u5f00\u53d1\u6307\u5357",permalink:"/layotto/docs/development/developing-component"},next:{title:"\u5982\u4f55\u57fa\u4e8eproto\u6587\u4ef6\u751f\u6210\u4ee3\u7801\u3001\u6587\u6863",permalink:"/layotto/docs/api_reference/how_to_generate_api_doc"}},d={},i=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u76f8\u5173\u8bbe\u8ba1",id:"\u76f8\u5173\u8bbe\u8ba1",level:3},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e",level:3},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:3}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"layotto\u7ec4\u4ef6\u5f15\u7528",children:"layotto\u7ec4\u4ef6\u5f15\u7528"}),"\n",(0,r.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,r.jsx)(n.p,{children:"\u7ec4\u4ef6\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u9700\u8981\u5f15\u7528\u5176\u4ed6\u7ec4\u4ef6\u7684\u80fd\u529b\uff0c\u6bd4\u5982sequencer\u7ec4\u4ef6\u521d\u59cb\u5316\u7684\u65f6\u5019\u9700\u8981\u4ececonfig\u7ec4\u4ef6\u8bfb\u53d6\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u4ee5\u6b64\u5b9e\u73b0\u7ec4\u4ef6\u4e4b\u95f4\u7684\u5f15\u7528\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u76f8\u5173\u8bbe\u8ba1",children:"\u76f8\u5173\u8bbe\u8ba1"}),"\n",(0,r.jsxs)(n.p,{children:["\u76ee\u524d\u53ea\u652f\u6301\u6700\u9700\u8981\u88ab\u5e94\u7528\u7684\u4e24\u4e2a\u7ec4\u4ef6\u7c7b\u578b",":ConfigStore","\u548cSecretStore,\u5373\u914d\u7f6e\u7ec4\u4ef6\u548c\u79d8\u94a5\u7ec4\u4ef6\u3002",(0,r.jsx)(n.br,{}),"\n","Ref\u63a5\u53e3\u8bbe\u8ba1\uff0c\u7ec4\u4ef6\u9700\u5b9e\u73b0\u6b64\u63a5\u53e3\u624d\u80fd\u5b9e\u73b0\u6ce8\u5165\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type SetComponent interface {\nSetConfigStore(cs configstores.Store) (err error)\nSetSecretStore(ss secretstores.SecretStore) (err error)\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u65e7\u7ec4\u4ef6\u4e0d\u53bb\u9002\u914d\u6b64\u63a5\u53e3\uff0c\u7528\u6237\u6709\u6ce8\u5165\u9700\u6c42\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0Ref\u63a5\u53e3\u6765\u5b9e\u73b0\u6ce8\u5165\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5982\u4f55\u914d\u7f6e",children:"\u5982\u4f55\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u53c2\u8003\u914d\u7f6e\u6587\u4ef6:",(0,r.jsx)(n.code,{children:"configs/config_ref_example.json"}),", \u5728\u7ec4\u4ef6\u914d\u7f6e\u4e2d\u914d\u7f6e\u9700\u8981\u4f7f\u7528\u7684\u7ec4\u4ef6\uff0c\u4fbf\u53ef\u4ee5\u5728\u7ec4\u4ef6\u521d\u59cb\u5316\u65f6\u6ce8\u5165\u7ed9\u7ec4\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5982\u4f55\u4f7f\u7528",children:"\u5982\u4f55\u4f7f\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u5982\u6211\u4eec\u8981\u60f3\u5f00\u53d1\u4e00\u4e2ahelloword\u7ec4\u4ef6\uff0c\u5b83\u9700\u8981\u5728\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4ece secret store \u4e2d\u8bfb\u53d6\u79d8\u94a5(\u6bd4\u5982\u7528\u6765\u83b7\u53d6\u8fde\u63a5\u6570\u636e\u5e93\u7684\u79d8\u94a5)\u3001\u4ece config store \u8bfb\u53d6\u914d\u7f6e(\u4f8b\u5982\u8bfb\u53d6\u6570\u636e\u5e93\u7684 ip \u5730\u5740\uff0c\u4ee5\u4fbf\u8fde\u63a5\u6570\u636e\u5e93), \u90a3\u4e48 helloword \u7ec4\u4ef6\u5e94\u8be5\u5982\u4f55\u5f00\u53d1\u5462\uff1f\n\u4ee5",(0,r.jsx)(n.code,{children:"helloword"}),"\u7ec4\u4ef6\u4e3a\u4f8b,\u9996\u5148",(0,r.jsx)(n.code,{children:"helloword"}),"\u7ec4\u4ef6\u9700\u8981\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"SetConfigStore"}),"\u548c",(0,r.jsx)(n.code,{children:"SetSecretStore"}),"\u63a5\u53e3,\u63a5\u53e3\u5b9e\u73b0\u91cc\u662f\u7528\u6237\u81ea\u5df1\u7684\u903b\u8f91\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func (hw *HelloWorld) SetConfigStore(cs configstores.Store) (err error) {\n//save for use\nhw.config=cs\nreturn nil\n}\nfunc (hw *HelloWorld) SetSecretStore(ss secretstores.SecretStore) (err error) {\n//save for use\nhw.secretStore = ss\nreturn nil\n}\n//fetch secret/config when component init\nfunc (hw *HelloWorld) Init(config *hello.HelloConfig) error {\nhw.secretStore.GetSecret(secretstores.GetSecretRequest{\nName:     "dbPassword",\n})\nhw.config.Get(context.Background(),&configstores.GetRequest{\nKeys:     []string{"dbAddress"},\n})\nreturn nil\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u518d\u914d\u7f6e\u6587\u4ef6\u91cc\u7ed9helloworld\u7ec4\u4ef6\u914d\u7f6e\u9700\u8981\u6ce8\u5165\u7684\u5176\u4ed6\u7ec4\u4ef6\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'        {\n  "helloworld": {\n    "type": "helloworld",\n    "hello": "greeting",\n    "secret_ref": [\n      {\n        "store_name": "local.file",\n        "key": "db-user-pass:password",\n        "sub_key": "db-user-pass:password",\n        "inject_as": "redisPassword"\n      }\n    ],\n    "component_ref": {\n      "config_store": "config_demo",\n      "secret_store": "local.file"\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"helloword"}),"\u7ec4\u4ef6\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u4fbf\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"config_demo"}),"\u548c",(0,r.jsx)(n.code,{children:"local.file"}),"\u7ec4\u4ef6"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>l});var r=o(6540);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);