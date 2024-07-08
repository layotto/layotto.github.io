"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[2645],{6564:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var t=s(4848),o=s(8453);const i={},r="\u53d1\u5e03/\u8ba2\u9605 API",u={id:"building_blocks/pubsub/reference",title:"\u53d1\u5e03/\u8ba2\u9605 API",description:"\u4ec0\u4e48\u662fPub/Sub API",source:"@site/docs/building_blocks/pubsub/reference.md",sourceDirName:"building_blocks/pubsub",slug:"/building_blocks/pubsub/reference",permalink:"/layotto/docs/building_blocks/pubsub/reference",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/building_blocks/pubsub/reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Distributed Lock API",permalink:"/layotto/docs/building_blocks/lock/reference"},next:{title:"RPC API",permalink:"/layotto/docs/building_blocks/rpc/reference"}},c={},l=[{value:"\u4ec0\u4e48\u662fPub/Sub API",id:"\u4ec0\u4e48\u662fpubsub-api",level:2},{value:"\u4f55\u65f6\u4f7f\u7528Pub/Sub API\uff0c\u597d\u5904\u662f\u4ec0\u4e48\uff1f",id:"\u4f55\u65f6\u4f7f\u7528pubsub-api\u597d\u5904\u662f\u4ec0\u4e48",level:2},{value:"\u5982\u4f55\u4f7f\u7528Pub/Sub API",id:"\u5982\u4f55\u4f7f\u7528pubsub-api",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"PublishEvent",id:"publishevent",level:3},{value:"\u8ba2\u9605\u4e8b\u4ef6",id:"\u8ba2\u9605\u4e8b\u4ef6",level:3}];function b(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u53d1\u5e03\u8ba2\u9605-api",children:"\u53d1\u5e03/\u8ba2\u9605 API"}),"\n",(0,t.jsx)(n.h2,{id:"\u4ec0\u4e48\u662fpubsub-api",children:"\u4ec0\u4e48\u662fPub/Sub API"}),"\n",(0,t.jsxs)(n.p,{children:["Pub/Sub API\u7528\u4e8e\u5b9e\u73b0\u53d1\u5e03/\u8ba2\u9605\u6a21\u5f0f\u3002\u53d1\u5e03/\u8ba2\u9605\u6a21\u5f0f\u5141\u8bb8\u5fae\u670d\u52a1\u4f7f\u7528\u6d88\u606f\u76f8\u4e92\u901a\u4fe1\u3002 ",(0,t.jsx)(n.strong,{children:"\u751f\u4ea7\u8005\u6216\u53d1\u5e03\u8005"}),"\u5c06\u6d88\u606f\u53d1\u9001\u81f3\u6307\u5b9aTopic\uff0c\u5e76\u4e14\u4e0d\u77e5\u9053\u63a5\u6536\u6d88\u606f\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u800c",(0,t.jsx)(n.strong,{children:"\u6d88\u8d39\u8005"}),"\u5c06\u8ba2\u9605\u8be5\u4e3b\u9898\u5e76\u6536\u5230\u5b83\u7684\u6d88\u606f\uff0c\u5e76\u4e14\u4e0d\u77e5\u9053\u4ec0\u4e48\u5e94\u7528\u7a0b\u5e8f\u751f\u4ea7\u4e86\u8fd9\u4e9b\u6d88\u606f\u3002\u6d88\u606f\u961f\u5217\uff08message broker\uff09\u4f5c\u4e3a\u4e2d\u95f4\u4eba\uff0c\u8d1f\u8d23\u5c06\u6bcf\u6761\u6d88\u606f\u7684\u8f6c\u53d1\u3002 \u5f53\u60a8\u9700\u8981\u5c06\u5fae\u670d\u52a1\u89e3\u5076\u65f6\uff0c\u6b64\u6a21\u5f0f\u7279\u522b\u6709\u7528\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"Pub/Sub API \u63d0\u4f9b\u81f3\u5c11\u4e00\u6b21\uff08at-least-once\uff09\u7684\u4fdd\u8bc1\uff0c\u5e76\u4e0e\u5404\u79cd\u6d88\u606f\u4ee3\u7406\u548c\u961f\u5217\u7cfb\u7edf\u96c6\u6210\u3002 \u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u5957Pub/Sub API\u64cd\u4f5c\u4e0d\u540c\u7684\u6d88\u606f\u961f\u5217\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f55\u65f6\u4f7f\u7528pubsub-api\u597d\u5904\u662f\u4ec0\u4e48",children:"\u4f55\u65f6\u4f7f\u7528Pub/Sub API\uff0c\u597d\u5904\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7684\u5e94\u7528\u9700\u8981\u8bbf\u95ee\u6d88\u606f\u961f\u5217(message queue)\u8fdb\u884c\u4e8b\u4ef6\u53d1\u5e03\u8ba2\u9605\uff0c\u90a3\u4e48\u4f7f\u7528Pub/Sub API\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u5b83\u6709\u4ee5\u4e0b\u597d\u5904\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u591a\uff08\u4e91\uff09\u73af\u5883\u90e8\u7f72\uff1a\u540c\u4e00\u5957\u4e1a\u52a1\u4ee3\u7801\u90e8\u7f72\u5728\u4e0d\u540c\u73af\u5883"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e2d\u7acb\u7684API\u53ef\u4ee5\u5e2e\u52a9\u60a8\u7684\u5e94\u7528\u548cMQ\u4f9b\u5e94\u5546\u3001\u4e91\u5382\u5546\u89e3\u8026\uff0c\u80fd\u591f\u4e0d\u6539\u4ee3\u7801\u90e8\u7f72\u5728\u4e0d\u540c\u7684\u4e91\u4e0a\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u591a\u8bed\u8a00\u590d\u7528\u4e2d\u95f4\u4ef6\uff1a\u540c\u4e00\u5957\u6d88\u606f\u4e2d\u95f4\u4ef6\u80fd\u652f\u6301\u4e0d\u540c\u8bed\u8a00\u7684\u5e94\u7528"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7684\u516c\u53f8\u5185\u90e8\u6709\u4e0d\u540c\u8bed\u8a00\u5f00\u53d1\u7684\u5e94\u7528\uff08\u4f8b\u5982\u540c\u65f6\u6709java\u548cpython\u5e94\u7528\uff09\uff0c\u90a3\u4e48\u4f20\u7edf\u505a\u6cd5\u662f\u4e3a\u6bcf\u79cd\u8bed\u8a00\u5f00\u53d1\u4e00\u5957sdk\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528Pub/Sub API\u53ef\u4ee5\u5e2e\u52a9\u60a8\u514d\u53bb\u7ef4\u62a4\u591a\u8bed\u8a00sdk\u7684\u70e6\u607c\uff0c\u4e0d\u540c\u8bed\u8a00\u7684\u5e94\u7528\u53ef\u4ee5\u7528\u540c\u4e00\u5957grpc API\u548cLayotto\u4ea4\u4e92\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5982\u4f55\u4f7f\u7528pubsub-api",children:"\u5982\u4f55\u4f7f\u7528Pub/Sub API"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7grpc\u8c03\u7528Pub/Sub API\uff0c\u63a5\u53e3\u5b9a\u4e49\u5728",(0,t.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"runtime.proto"})," \u4e2d\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u524d\u9700\u8981\u5148\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u914d\u7f6e\uff0c\u8be6\u7ec6\u7684\u914d\u7f6e\u8bf4\u660e\u89c1",(0,t.jsx)(n.a,{href:"/layotto/docs/component_specs/pubsub/common",children:"\u53d1\u5e03/\u8ba2\u9605\u7ec4\u4ef6\u6587\u6863"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["Layotto client sdk\u5c01\u88c5\u4e86grpc\u8c03\u7528\u7684\u903b\u8f91\uff0c\u4f7f\u7528sdk\u8c03\u7528Pub/Sub API\u7684\u793a\u4f8b\u53ef\u4ee5\u53c2\u8003",(0,t.jsx)(n.a,{href:"/layotto/docs/start/pubsub/start",children:"\u5feb\u901f\u5f00\u59cb\uff1a\u4f7f\u7528Pub/Sub API"})]}),"\n",(0,t.jsx)(n.h3,{id:"publishevent",children:"PublishEvent"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u4e8e\u53d1\u5e03\u4e8b\u4ef6\u5230\u6307\u5b9atopic"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"// Publishes events to the specific topic.\nrpc PublishEvent(PublishEventRequest) returns (google.protobuf.Empty) {}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u907f\u514d\u6587\u6863\u548c\u4ee3\u7801\u4e0d\u4e00\u81f4\uff0c\u8be6\u7ec6\u5165\u53c2\u548c\u8fd4\u56de\u503c\u8bf7\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"runtime.proto"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u8ba2\u9605\u4e8b\u4ef6",children:"\u8ba2\u9605\u4e8b\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba2\u9605\u4e8b\u4ef6\u9700\u8981\u5e94\u7528\u5b9e\u73b0\u4e24\u4e2agrpc\u63a5\u53e3\uff0c\u4f9bLayotto\u56de\u8c03\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"  // Lists all topics subscribed by this app.\n  rpc ListTopicSubscriptions(google.protobuf.Empty) returns (ListTopicSubscriptionsResponse) {}\n\n  // Subscribes events from Pubsub\n  rpc OnTopicEvent(TopicEventRequest) returns (TopicEventResponse) {}\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u907f\u514d\u6587\u6863\u548c\u4ee3\u7801\u4e0d\u4e00\u81f4\uff0c\u8be6\u7ec6\u5165\u53c2\u548c\u8fd4\u56de\u503c\u8bf7\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/appcallback.proto",children:"appcallback.proto"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>u});var t=s(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);