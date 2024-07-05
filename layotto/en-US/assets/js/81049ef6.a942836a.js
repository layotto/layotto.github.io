"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[6988],{1731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var o=t(4848),s=t(8453);const c={},r="Secret Store component",a={id:"component_specs/secret/common",title:"Secret Store component",description:"This component can access secrets from local files, environment variables, k8s, etc.,  Layotto use dapr's secret API, learn more//docs.dapr.io/operations/components/setup-secret-store/",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/component_specs/secret/common.md",sourceDirName:"component_specs/secret",slug:"/component_specs/secret/common",permalink:"/en-US/docs/component_specs/secret/common",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/component_specs/secret/common.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Snowflake",permalink:"/en-US/docs/component_specs/sequencer/snowflake"},next:{title:"Custom Component",permalink:"/en-US/docs/component_specs/custom/common"}},p={},i=[];function m(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"secret-store-component",children:"Secret Store component"}),"\n",(0,o.jsxs)(n.p,{children:["This component can access secrets from local files, environment variables, k8s, etc.,  Layotto use dapr's secret API, learn more: ",(0,o.jsx)(n.a,{href:"https://docs.dapr.io/operations/components/setup-secret-store/",children:"https://docs.dapr.io/operations/components/setup-secret-store/"}),"\n",(0,o.jsx)(n.strong,{children:"Configuration file structure"})]}),"\n",(0,o.jsx)(n.p,{children:"The json configuration file has the following structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"secret_store": {\n  "<Component A Name>": {\n    "type":"<Component A Type>",\n      "metadata": {\n        "<KEY>": "<VALUE>",\n        "<KEY>": "<VALUE>"\n      }\n    },\n    "<Component B Name>": {\n      "type":"<Component B Type>",\n      "metadata": {\n        "<KEY>": "<VALUE>",\n        "<KEY>": "<VALUE>"\n      }\n    }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Configuration examples of local file keys, local environment variables, and k8s keys:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'       "secret_store": {\n                        "secret_demo": {\n                          "type": "local.file",\n                          "metadata": {\n                            "secretsFile": "../../configs/config_secret_local_file.json"\n                          }\n                        },\n                        "secret_demo1": {\n                          "type": "local.env",\n                          "metadata": {\n                          }\n                        },\n                        "secret_demo2": {\n                          "type": "kubernetes",\n                          "metadata": {\n                          }\n                        }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const s={},c=o.createContext(s);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);