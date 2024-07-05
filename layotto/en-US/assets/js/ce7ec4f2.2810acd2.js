"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[4746],{809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var s=n(4848),d=n(8453);const c={},o="Etcd",r={id:"component_specs/lock/etcd",title:"Etcd",description:"metadata fields",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/component_specs/lock/etcd.md",sourceDirName:"component_specs/lock",slug:"/component_specs/lock/etcd",permalink:"/en-US/docs/component_specs/lock/etcd",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/component_specs/lock/etcd.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Redis",permalink:"/en-US/docs/component_specs/lock/redis"},next:{title:"Zookeeper",permalink:"/en-US/docs/component_specs/lock/zookeeper"}},l={},i=[{value:"metadata fields",id:"metadata-fields",level:2},{value:"How to start etcd",id:"how-to-start-etcd",level:2},{value:"Run layotto",id:"run-layotto",level:2},{value:"Run Demo",id:"run-demo",level:2}];function a(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"etcd",children:"Etcd"}),"\n",(0,s.jsx)(t.h2,{id:"metadata-fields",children:"metadata fields"}),"\n",(0,s.jsx)(t.p,{children:"Example: configs/runtime_config.json"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"endpoints"}),(0,s.jsx)(t.td,{children:"Y"}),(0,s.jsxs)(t.td,{children:["etcd server address, multiple address use ",(0,s.jsx)(t.code,{children:";"})," separate"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dialTimeout"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"dialTimeout is the timeout for failing to establish a connection in seconds. default: 5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"username"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"etcd auth username"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"password"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"etcd auth password"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"keyPrefixPath"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsxs)(t.td,{children:["lock key prefix in etcd, default: ",(0,s.jsx)(t.code,{children:"/layotto/"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tlsCert"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"tls certificate path"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tlsCertKey"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"tls certificate key path"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tlsCa"}),(0,s.jsx)(t.td,{children:"N"}),(0,s.jsx)(t.td,{children:"tls ca path"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-start-etcd",children:"How to start etcd"}),"\n",(0,s.jsx)(t.p,{children:"If you want to run the etcd demo, you need to start a etcd server."}),"\n",(0,s.jsx)(t.p,{children:"Steps\uff1a"}),"\n",(0,s.jsxs)(t.p,{children:["download etcd from ",(0,s.jsx)(t.code,{children:"https://github.com/etcd-io/etcd/releases"})," \uff08You can also use docker.\uff09"]}),"\n",(0,s.jsx)(t.p,{children:"start\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"./etcd\n"})}),"\n",(0,s.jsxs)(t.p,{children:["default listen address ",(0,s.jsx)(t.code,{children:"localhost:2379"})]}),"\n",(0,s.jsx)(t.h2,{id:"run-layotto",children:"Run layotto"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/cmd/layotto\ngo build\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["If build reports an error, it can be executed in the root directory of the project ",(0,s.jsx)(t.code,{children:"go mod vendor"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Execute after the compilation is successful:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/runtime_config.json\n"})}),"\n",(0,s.jsx)(t.h2,{id:"run-demo",children:"Run Demo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:' cd ${project_path}/demo/lock/common/\n go build -o client\n ./client -s "lock_demo"\n'})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const d={},c=s.createContext(d);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);