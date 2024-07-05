"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[6267],{3897:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=o(4848),t=o(8453);const c={},r="\u6587\u4ef6\u7ba1\u7406\u7ec4\u4ef6",i={id:"component_specs/file/common",title:"\u6587\u4ef6\u7ba1\u7406\u7ec4\u4ef6",description:"\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/component_specs/file/common.md",sourceDirName:"component_specs/file",slug:"/component_specs/file/common",permalink:"/en-US/docs/component_specs/file/common",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/component_specs/file/common.md",tags:[],version:"current",frontMatter:{}},l={},a=[];function p(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u6587\u4ef6\u7ba1\u7406\u7ec4\u4ef6",children:"\u6587\u4ef6\u7ba1\u7406\u7ec4\u4ef6"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"})}),"\n",(0,s.jsx)(e.p,{children:"json\u914d\u7f6e\u6587\u4ef6\u6709\u5982\u4e0b\u7ed3\u6784\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'"file": {\n    "file_demo": {\n        "type": "aliyun.oss"\n        "metadata":[\n                {\n                    "endpoint": "endpoint_address",\n                    "accessKeyID": "accessKey",\n                    "accessKeySecret": "secret",\n                    "bucket": ["bucket1", "bucket2"]\n                }\n            ]\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u914d\u7f6e\u9879\u8bf4\u660e"})}),"\n",(0,s.jsx)(e.p,{children:"\u914d\u7f6e\u9879\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-golang",children:'    type FileConfig struct {\n\t    Type     string\n\t    Metadata json.RawMessage\n    }\n\n    Files   map[string]file.FileConfig          `json:"file"`\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u7684Files\u662f\u4e00\u4e2amap,key\u4e3acomponent\u7684\u540d\u5b57\uff0c\u6bd4\u5982\u4e0a\u8ff0json\u7684aliyun.oss\uff0ccomponent\u7684\u914d\u7f6e\u6ca1\u6709\u5177\u4f53\u7684\u683c\u5f0f\u9650\u5236\uff0c\u4e0d\u540ccomponent\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u81ea\u5df1\u5b9a\u4e49\uff0c\u6bd4\u5982:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'"file": {\n    "file_demo": {\n      "type": "localFile",\n      "group":{\n        "name": "group1"\n        "permisson":"rwx",\n        "users":[\n        "layotto","mosn"\n        ]       \n      }   \n    }\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>i});var s=o(6540);const t={},c=s.createContext(t);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);