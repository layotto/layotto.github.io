"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[1019],{6616:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var o=i(4848),t=i(8453);const a={},s="Implementing Configuration API with ctripcorp/apollo",l={id:"design/configuration/configuration-api-with-apollo",title:"Implementing Configuration API with ctripcorp/apollo",description:"Objective",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/design/configuration/configuration-api-with-apollo.md",sourceDirName:"design/configuration",slug:"/design/configuration/configuration-api-with-apollo",permalink:"/layotto/en-US/docs/design/configuration/configuration-api-with-apollo",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/i18n/en-US/docusaurus-plugin-content-docs/current/design/configuration/configuration-api-with-apollo.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"MOSN gRPC framework design document",permalink:"/layotto/en-US/docs/design/actuator/grpc-design-doc"},next:{title:"Layotto Pub/Sub, Compatible Dapr Package Scheme",permalink:"/layotto/en-US/docs/design/pubsub/pubsub-api-and-compability-with-dapr-component"}},c={},r=[{value:"Objective",id:"objective",level:2},{value:"Schema",id:"schema",level:2},{value:"Configuration API map apollo schema",id:"configuration-api-map-apollo-schema",level:3},{value:"How to migrate historical legacy projects",id:"how-to-migrate-historical-legacy-projects",level:3},{value:"sidecar config.json file",id:"sidecar-configjson-file",level:3},{value:"API",id:"api",level:2},{value:"Which Apollo SDK should I use?",id:"which-apollo-sdk-should-i-use",level:3},{value:"How I should use the Apollo SDK API",id:"how-i-should-use-the-apollo-sdk-api",level:3},{value:"How to subscribe to all configuration changes for the specified app",id:"how-to-subscribe-to-all-configuration-changes-for-the-specified-app",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"implementing-configuration-api-with-ctripcorpapollo",children:"Implementing Configuration API with ctripcorp/apollo"}),"\n",(0,o.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,o.jsxs)(n.p,{children:["Implementation of ",(0,o.jsx)(n.a,{href:"https://github.com/dapr/dapr/issues/2988",children:"Configuration API(level-2)"})," with ctripcorp/apollo"]}),"\n",(0,o.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,o.jsx)(n.h3,{id:"configuration-api-map-apollo-schema",children:"Configuration API map apollo schema"}),"\n",(0,o.jsx)(n.p,{children:"The mapping rules are as follows:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Configuration API Parameters"}),(0,o.jsx)(n.th,{children:"apollo schema"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"app_id"}),(0,o.jsx)(n.td,{children:"///ignore this parameter when searching for or subscribed to it, use app_id in configuration file instead"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Group"}),(0,o.jsx)(n.td,{children:"name"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"label"}),(0,o.jsx)(n.td,{children:"//\u8ffd\u52a0\u5230key\u7684\u540e\u9762. \u5728apollo\u4e2dkey\u5b9e\u9645\u5b58\u50a8\u7684\u683c\u5f0f\u4e3a'key@$label'"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tag"}),(0,o.jsx)(n.td,{children:"// Put an item in the configuration in json"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728apollo\u4e2dkey\u5b9e\u9645\u5b58\u50a8\u7684\u683c\u5f0f\u4e3a",(0,o.jsx)(n.code,{children:"key@$label"}),"\uff0cvalue\u4e3a\u539f\u59cb\u503c\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["Tags\u5c06\u4ee5key=",(0,o.jsx)(n.code,{children:"group@$key@$label"})," and value="]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'LO\n  "tag1": "tag1value",\n  "tag2": "tag2value"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Format is stored in a specific namespace ",(0,o.jsx)(n.code,{children:"sidecar_config_tags"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Q: Why don't you have an item to store values and tags to reduce the number of queries, e.g. :"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "value":"raw value",\n    "tags":{\n        "tag1":"tag1value",\n        "tag2":"tag2value"\n    }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"A: If this design is adopted, the historical legacy of the use of apollo will not be able to migrate to sidecar"}),"\n",(0,o.jsx)(n.h3,{id:"how-to-migrate-historical-legacy-projects",children:"How to migrate historical legacy projects"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Get/subscripbe API is compatible.Without save/delete API, users can easily migrate legacy projects to sidecar.\u53ea\u9700\u8981\u5728config.json\u6587\u4ef6\u4e2d\u4fdd\u6301",(0,o.jsx)(n.code,{children:"label"}),"\u5b57\u6bb5\u4e3a\u7a7a\uff0csidecar\u5c06\u4f1a\u4f7f\u7528\u539f\u59cbkey\u6765\u66ff\u4ee3",(0,o.jsx)(n.code,{children:"key@$label"}),"\u4e0eapollo\u8fdb\u884c\u4ea4\u4e92\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["Save/delete API may not be compatible.sidecar uses fixed ",(0,o.jsx)(n.code,{children:"cluster"})," and ",(0,o.jsx)(n.code,{children:"env"})," fields in config.json.This means that users cannot use ",(0,o.jsx)(n.code,{children:"cluster"})," and ",(0,o.jsx)(n.code,{children:"env"})," fields as parameters for save/deleteAPI if they want to change some configuration items with other appids."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"sidecar-configjson-file",children:"sidecar config.json file"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "config_store": {\n    "type": "apollo",\n    "address": [\n      "http://106.54.227.205:8080"\n    ],\n    "metadata": {\n      "app_id": "testApplication_yang",\n      "cluster": "dev",\n      "namespace_name": "dubbo,product.joe",\n      "is_backup_config": true,\n      "secret": "6ce3ff7e96a24335a9634fe9abca6d51"\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.h3,{id:"which-apollo-sdk-should-i-use",children:"Which Apollo SDK should I use?"}),"\n",(0,o.jsxs)(n.p,{children:["Currently using official maintenance",(0,o.jsx)(n.a,{href:"https://github.com/apolloconfig/agollo",children:"SDK"}),", other Apollo's third party SDK can be found from",(0,o.jsx)(n.a,{href:"https://www.apolloconfig.com/#/usage/third-party-sdks-user-guide",children:"\u94fe\u63a5"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Use some of this sdk's attention:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Before connecting to the server and creating the client, the user must declare all namespace in the AppConfig, as shown below in\uff1a"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'\tc := &config. ppConfigL\n\t\tAppID: "testApplication_yang",\n\t\tCluster: "dev",\n\t\tIP: "http://106. 4.227. 05:8080",\n\t\tNamespaceName: "dubbo", // Statement\n\t\tIsBackupConfig: true,\n\t\tSecret: "6ce3ff7e96a24335a9634fe9abca6d51",\n\t}\n\tclient, err := agolloConfig. tartWithConfig(func() (*config.AppConfig, error) {\n\t\treturn c, nil\n\t})\n'})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You cannot configure the ",(0,o.jsx)(n.code,{children:"env"})," field."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"No Save/delete API."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"No bulk queries for API."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Security cannot be ensured in parallel."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Configure or don't use ",(0,o.jsx)(n.a,{href:"https://www.apollocconfig.com/#/usage/java-sdk-user-guide?id=_122-apollo-meta-server",children:"Apollo Meta Server"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"There is a problem setting kv and tags. There is no transaction."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"how-i-should-use-the-apollo-sdk-api",children:"How I should use the Apollo SDK API"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Configuration API"}),(0,o.jsx)(n.th,{children:"apollo sdk API"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"GetConfiguration"}),(0,o.jsx)(n.td,{children:'cache := client.GetConfigCache(c.NamespaceName)value,_:= client.Get("key")'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SaveConfiguration"}),(0,o.jsxs)(n.td,{children:["\u901a\u8fc7http. ",(0,o.jsx)(n.a,{href:"https://www.apolloconfig.com/#/zh/usage/apollo-open-api-platform?id=_3211-%e4%bf%ae%e6%94%b9%e9%85%8d%e7%bd%ae%e6%8e%a5%e5%8f%a3",children:"update"})," + ",(0,o.jsx)(n.a,{href:"https://www.apolloconfig.com/#/zh/usage/apollo-open-api-platform?id=_3213-%e5%8f%91%e5%b8%83%e9%85%8d%e7%bd%ae%e6%8e%a5%e5%8f%a3",children:"commit"})," \u4f7f\u7528open API"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"DeleteConfiguration"}),(0,o.jsxs)(n.td,{children:["\u4f7f\u7528http. ",(0,o.jsx)(n.a,{href:"https://www.apolloconfig.com/#/zh/usage/apollo-open-api-platform?id=_3212-%e5%88%a0%e9%99%a4%e9%85%8d%e7%bd%ae%e6%8e%a5%e5%8f%a3",children:"delete"})," + ",(0,o.jsx)(n.a,{href:"https://www.apolloconfig.com/#/zh/usage/apollo-open-api-platform?id=_3213-%e5%8f%91%e5%b8%83%e9%85%8d%e7%bd%ae%e6%8e%a5%e5%8f%a3",children:"commit"})," \u4f7f\u7528open API"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SubscripbeConfiguration"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/apolloconfig/agollo/wiki/%E7%9B%91%E5%90%AC%E5%8F%98%E6%9B%B4%E4%BA%8B%E4%BB%B6",children:"https://github.com/apolloconfig/agollo/wiki/%E7%9B%91%E5%90%AC%E5%8F%98%E6%9B%B4%E4%BA%8B%E4%BB%B6"})})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"how-to-subscribe-to-all-configuration-changes-for-the-specified-app",children:"How to subscribe to all configuration changes for the specified app"}),"\n",(0,o.jsx)(n.p,{children:"Subscribe to all declared namespaces in config.json file."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(6540);const t={},a=o.createContext(t);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);