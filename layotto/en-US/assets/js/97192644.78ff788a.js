"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[9613],{5383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(4848),o=n(8453);const s={},r="Distributed Lock API",c={id:"building_blocks/lock/reference",title:"Distributed Lock API",description:"What is distributed lock API",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/building_blocks/lock/reference.md",sourceDirName:"building_blocks/lock",slug:"/building_blocks/lock/reference",permalink:"/layotto/en-US/docs/building_blocks/lock/reference",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/i18n/en-US/docusaurus-plugin-content-docs/current/building_blocks/lock/reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Sequencer API",permalink:"/layotto/en-US/docs/building_blocks/sequencer/reference"},next:{title:"Pub/Sub API",permalink:"/layotto/en-US/docs/building_blocks/pubsub/reference"}},l={},d=[{value:"What is distributed lock API",id:"what-is-distributed-lock-api",level:2},{value:"How to use distributed lock API",id:"how-to-use-distributed-lock-api",level:2},{value:"Example",id:"example",level:3},{value:"TryLock",id:"trylock",level:3},{value:"Unlock",id:"unlock",level:3},{value:"Why is the distributed lock API designed like this",id:"why-is-the-distributed-lock-api-designed-like-this",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"distributed-lock-api",children:"Distributed Lock API"}),"\n",(0,i.jsx)(t.h2,{id:"what-is-distributed-lock-api",children:"What is distributed lock API"}),"\n",(0,i.jsx)(t.p,{children:"The distributed lock API is based on a certain storage system (such as Etcd, Zookeeper) to provide developers with a simple and easy-to-use distributed lock API. Developers can use the API to obtain locks and protect shared resources from concurrency problems."}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-distributed-lock-api",children:"How to use distributed lock API"}),"\n",(0,i.jsxs)(t.p,{children:["You can call the distributed lock API through grpc. The API is defined in ",(0,i.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"runtime.proto"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The component needs to be configured before use. For detailed configuration instructions, see ",(0,i.jsx)(t.a,{href:"/layotto/en-US/docs/component_specs/lock/common",children:"Distributed Lock Component Document"})]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Layotto client sdk encapsulates the logic of grpc calling. For an example of using sdk to call distributed lock API, please refer to ",(0,i.jsx)(t.a,{href:"/layotto/en-US/docs/start/lock/start",children:"Quick Start: Using Distributed Lock API"})]}),"\n",(0,i.jsx)(t.h3,{id:"trylock",children:"TryLock"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-protobuf",children:"// A non-blocking method trying to get a lock with ttl.\nrpc TryLock(TryLockRequest)returns (TryLockResponse) {}\n\nmessage TryLockRequest {\n  // Required. The lock store name,e.g. `redis`.\n  string store_name = 1;\n  // Required. resource_id is the lock key. e.g. `order_id_111`\n  // It stands for \"which resource I want to protect\"\n  string resource_id = 2;\n  \n  // Required. lock_owner indicate the identifier of lock owner.\n  // You can generate a uuid as lock_owner.For example,in golang:\n  //\n  // req.LockOwner = uuid.New().String()\n  //\n  // This field is per request,not per process,so it is different for each request,\n  // which aims to prevent multi-thread in the same process trying the same lock concurrently.\n  //\n  // The reason why we don't make it automatically generated is:\n  // 1. If it is automatically generated,there must be a 'my_lock_owner_id' field in the response.\n  // This name is so weird that we think it is inappropriate to put it into the api spec\n  // 2. If we change the field 'my_lock_owner_id' in the response to 'lock_owner',which means the current lock owner of this lock,\n  // we find that in some lock services users can't get the current lock owner.Actually users don't need it at all.\n  // 3. When reentrant lock is needed,the existing lock_owner is required to identify client and check \"whether this client can reenter this lock\".\n  // So this field in the request shouldn't be removed.\n  string lock_owner = 3;\n  \n  // Required. expire is the time before expire.The time unit is second.\n  int32 expire = 4;\n}\n\n\nmessage TryLockResponse {\n  bool success = 1;\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Q: What is the time unit of the expire field?"})}),"\n",(0,i.jsx)(t.p,{children:"A: Seconds."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Q: What would happen if different applications pass the same lock_owner?"})}),"\n",(0,i.jsx)(t.p,{children:"case 1. If two apps with different app-id pass the same lock_owner,they won't conflict because lock_owner is grouped by 'app-id ',while 'app-id' is configurated in sidecar's static config(configurated in config.json)"}),"\n",(0,i.jsx)(t.p,{children:"case 2.If two apps with same app-id pass the same lock_owner,they will conflict and the second app will obtained the same lock already used by the first app.Then the correctness property will be broken."}),"\n",(0,i.jsx)(t.p,{children:"So user has to care about the uniqueness property of lock_owner.You can generate a uuid as lock_owner.For example,in golang:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"req.LockOwner = uuid.New().String()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"unlock",children:"Unlock"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-protobuf",children:"  rpc Unlock(UnlockRequest)returns (UnlockResponse) {}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To avoid inconsistencies between the documentation and the code, please refer to ",(0,i.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"proto file"})," for detailed input parameters and return values"]}),"\n",(0,i.jsx)(t.h2,{id:"why-is-the-distributed-lock-api-designed-like-this",children:"Why is the distributed lock API designed like this"}),"\n",(0,i.jsxs)(t.p,{children:["If you are interested in the implementation principle and design logic, you can refer to ",(0,i.jsx)(t.a,{href:"design/lock/lock-api-design",children:"Distributed Lock API Design Document"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(6540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);