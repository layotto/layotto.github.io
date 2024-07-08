"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[5261],{8298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(4848),o=t(8453);const a={},s="Layotto Pub/Sub, Compatible Dapr Package Scheme",r={id:"design/pubsub/pubsub-api-and-compability-with-dapr-component",title:"Layotto Pub/Sub, Compatible Dapr Package Scheme",description:"1. Support Pub/Sub API",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/design/pubsub/pubsub-api-and-compability-with-dapr-component.md",sourceDirName:"design/pubsub",slug:"/design/pubsub/pubsub-api-and-compability-with-dapr-component",permalink:"/layotto/en-US/docs/design/pubsub/pubsub-api-and-compability-with-dapr-component",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/design/pubsub/pubsub-api-and-compability-with-dapr-component.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Implementing Configuration API with ctripcorp/apollo",permalink:"/layotto/en-US/docs/design/configuration/configuration-api-with-apollo"},next:{title:"RPC Design Document",permalink:"/layotto/en-US/docs/design/rpc/rpc_design_document"}},l={},d=[{value:"Whether the corporate architecture\uff1areuses Dapr&#39;s sdk and proto",id:"whether-the-corporate-architecturereuses-daprs-sdk-and-proto",level:2},{value:"Problems encountered",id:"problems-encountered",level:3},{value:"Programmes",id:"programmes",level:3},{value:"No longer using sdk and proto; detach proto file, neutral path",id:"no-longer-using-sdk-and-proto-detach-proto-file-neutral-path",level:4},{value:"API Design",id:"api-design",level:2},{value:"Design Principle\uff1aTo deal with new fields for Dapr API",id:"design-principleto-deal-with-new-fields-for-dapr-api",level:3},{value:"New method name as long as the API changes different from Dapr",id:"new-method-name-as-long-as-the-api-changes-different-from-dapr",level:4},{value:"New fields also use old method names, but jumps in numbers, leave white",id:"new-fields-also-use-old-method-names-but-jumps-in-numbers-leave-white",level:4},{value:"C. Fields are directly added to the conflict without allowing for a conflict (will, of course, try to raise issues for the Dapr community)",id:"c-fields-are-directly-added-to-the-conflict-without-allowing-for-a-conflict-will-of-course-try-to-raise-issues-for-the-dapr-community",level:4},{value:"Conclusion",id:"conclusion",level:4},{value:"Between APP and Layotto",id:"between-app-and-layotto",level:3},{value:"Between Layotto and Component",id:"between-layotto-and-component",level:3},{value:"sidecar knows which port of the callback",id:"sidecar-knows-which-port-of-the-callback",level:3},{value:"How to maintain the antecedents of the subscription list",id:"how-to-maintain-the-antecedents-of-the-subscription-list",level:3},{value:"Subscription support declaration configuration",id:"subscription-support-declaration-configuration",level:3},{value:"Config Design",id:"config-design",level:2},{value:"A Bigger Control Plane",id:"a-bigger-control-plane",level:2},{value:"Subscription Support Configuration",id:"subscription-support-configuration",level:2},{value:"appcallback supports tls",id:"appcallback-supports-tls",level:2},{value:"Detach component configuration and personality configuration (callback port, app-id)",id:"detach-component-configuration-and-personality-configuration-callback-port-app-id",level:2},{value:"Tracing",id:"tracing",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"layotto-pubsub-compatible-dapr-package-scheme",children:"Layotto Pub/Sub, Compatible Dapr Package Scheme"}),"\n",(0,i.jsx)(n.h1,{id:"needs-analysis",children:"Needs analysis"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Support Pub/Sub API"}),"\n",(0,i.jsx)(n.li,{children:"Packages that can be reused as much as possible on the architecture"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"overview-design",children:"Overview design"}),"\n",(0,i.jsx)(n.h2,{id:"whether-the-corporate-architecturereuses-daprs-sdk-and-proto",children:"Whether the corporate architecture\uff1areuses Dapr's sdk and proto"}),"\n",(0,i.jsx)(n.p,{children:"In order to be able to develop a set of API specs with the Dapr and Envoy communities in the future, the Dapr API is being kept as close as possible."}),"\n",(0,i.jsx)(n.p,{children:"Dapr component libraries can be reused directly; below discuss whether sdk and proto are repeated and how to use them again."}),"\n",(0,i.jsx)(n.h3,{id:"problems-encountered",children:"Problems encountered"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["dapr sdk wrote the pack name in which the call interface was called, with dapr\n",(0,i.jsx)(n.img,{alt:"img.png",src:t(6776).A+"",width:"2326",height:"428"})]}),"\n",(0,i.jsx)(n.li,{children:"We will have differentiated needs, such as new fields, new APIs, if directly using dapr.proto will not be flexible"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"programmes",children:"Programmes"}),"\n",(0,i.jsx)(n.h4,{id:"no-longer-using-sdk-and-proto-detach-proto-file-neutral-path",children:"No longer using sdk and proto; detach proto file, neutral path"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_1.png",src:t(80).A+"",width:"625",height:"500"})}),"\n",(0,i.jsx)(n.p,{children:"We first define an api-spec.proto, a superset of dapr API, with a neutral path name without layotto, based on this proto itself develop a neutral RuntimeAPI sdk."}),"\n",(0,i.jsx)(n.p,{children:"Then try promoting proto into a community-sanctioned api-spec, or working with other communities to rebuild a path neutral api-spec.proto."}),"\n",(0,i.jsx)(n.p,{children:"If proto changes in the promotion process does not matter anything, Layotto draws a layer of API below proto to prevent proto;"}),"\n",(0,i.jsx)(n.p,{children:"If not, we can write a dapr adapter first in a neutral sdk, using our sdk to both adjust the dapr and layotto\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_2.png",src:t(1371).A+"",width:"643",height:"416"})}),"\n",(0,i.jsx)(n.p,{children:"Advantages\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Clean.If you want to revert to Dapr's sdk and proto, there is an unavoidable problem\uff1awhen the API and dapr are different, you need to encapsulate a layer of logic for yourself, which will bring complexity, hacky, hill sense and increase the code reading threshold"}),"\n",(0,i.jsx)(n.li,{children:"Extensions between API and Dapr"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\uff1a Disadvantages"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Follow Dapr client or proto modified. We may not know, causing inconsistency"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"api-design",children:"API Design"}),"\n",(0,i.jsx)(n.h3,{id:"design-principleto-deal-with-new-fields-for-dapr-api",children:"Design Principle\uff1aTo deal with new fields for Dapr API"}),"\n",(0,i.jsx)(n.p,{children:"We want to revert to the Dapr API, but there is certainly a need for customization in the long term.When our API and dapr are different (e.g. just want to give a new API field to Dapr), whether to open a new method name, or to add a field to the old method?\nto add a field to the original method, this may cause a field conflict."}),"\n",(0,i.jsx)(n.p,{children:"Some of the following ideas\uff1a"}),"\n",(0,i.jsx)(n.h4,{id:"new-method-name-as-long-as-the-api-changes-different-from-dapr",children:"New method name as long as the API changes different from Dapr"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_3.png",src:t(242).A+"",width:"284",height:"284"})}),"\n",(0,i.jsxs)(n.p,{children:["New and old methods are supported when new methods are opened.",(0,i.jsx)(n.strong,{children:"For example, version v1 is Dapr API and version v2 is extended"})]}),"\n",(0,i.jsx)(n.p,{children:"\uff1a Disadvantages"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"To support two APIs"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"new-fields-also-use-old-method-names-but-jumps-in-numbers-leave-white",children:"New fields also use old method names, but jumps in numbers, leave white"}),"\n",(0,i.jsx)(n.p,{children:"\uff1a Disadvantages"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Make no more sense?If Dapr later added this field but the numbers are different, we would find it difficult to do so (e.g. we define it as 10, dapr then as 5, and we have one field that takes up both 5 and 10?)"}),"\n",(0,i.jsx)(n.li,{children:"If Dapr adds a similar but nuanced field, we find it difficult to add\uff1ato the field?"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"c-fields-are-directly-added-to-the-conflict-without-allowing-for-a-conflict-will-of-course-try-to-raise-issues-for-the-dapr-community",children:"C. Fields are directly added to the conflict without allowing for a conflict (will, of course, try to raise issues for the Dapr community)"}),"\n",(0,i.jsx)(n.p,{children:"In the future, when you really sit together to reach a consensus and make api-spec, you will start a new path to proto, and you will not worry about the current conflict."}),"\n",(0,i.jsx)(n.h4,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Discussion decides to follow C line"}),"\n",(0,i.jsx)(n.h3,{id:"between-app-and-layotto",children:"Between APP and Layotto"}),"\n",(0,i.jsx)(n.p,{children:"Use the grpc API like Dapr"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:"service AppCallback {\n  // Lists all topics subscribed by this app.\n  rpc ListTopicSubscriptions(google.protobuf.Empty) returns (ListTopicSubscriptionsResponse) {}\n\n  // Subscribes events from Pubsub\n  rpc OnTopicEvent(TopicEventRequest) returns (TopicEventResponse) {}\n\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:"Service Dapr LO\n  // Publishes events to the specific topic.\n  rpc PublishEvent(PublishEventRequest) returns (google.protect.Empt) {}\n\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"between-layotto-and-component",children:"Between Layotto and Component"}),"\n",(0,i.jsx)(n.p,{children:"In the same way as Dapr;\nPublishRequest.Data-and NewMessage.Data-fit for CloudEvent 1.0 (deserializable into map[string]interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// PubSub is the interface for message buses\ntype PubSub interface {\n\tInit(metadata Metadata) error\n\tFeatures() []Feature\n\tPublish(req *PublishRequest) error\n\tSubscribe(req SubscribeRequest, handler func(msg *NewMessage) error) error\n\tClose() error\n}\n\n// PublishRequest is the request to publish a message\ntype PublishRequest struct {\n\tData       []byte            `json:"data"`\n\tPubsubName string            `json:"pubsubname"`\n\tTopic      string            `json:"topic"`\n\tMetadata   map[string]string `json:"metadata"`\n}\n\n\n// NewMessage is an event arriving from a message bus instance\ntype NewMessage struct {\n\tData     []byte            `json:"data"`\n\tTopic    string            `json:"topic"`\n\tMetadata map[string]string `json:"metadata"`\n}\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sidecar-knows-which-port-of-the-callback",children:"sidecar knows which port of the callback"}),"\n",(0,i.jsx)(n.p,{children:"Reference Dapr, configure callback port on startup.The cost is that sidecar can only serve one process."}),"\n",(0,i.jsx)(n.p,{children:"Select this option for the current period"}),"\n",(0,i.jsx)(n.h3,{id:"how-to-maintain-the-antecedents-of-the-subscription-list",children:"How to maintain the antecedents of the subscription list"}),"\n",(0,i.jsx)(n.p,{children:"Ask an app on sidecar startup to get subscription at once.There is therefore a requirement for the order of start and start the app first."}),"\n",(0,i.jsx)(n.p,{children:"Follow up the app to optimize it into scheduled poll app"}),"\n",(0,i.jsx)(n.h3,{id:"subscription-support-declaration-configuration",children:"Subscription support declaration configuration"}),"\n",(0,i.jsx)(n.p,{children:"First issue only supports the format of the interface callback and then optimized with the declaration configuration"}),"\n",(0,i.jsx)(n.h2,{id:"config-design",children:"Config Design"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:t(6535).A+"",width:"536",height:"420"})}),"\n",(0,i.jsx)(n.p,{children:"The relevant configuration of the app is in the loaded, and the code you want to reconfigure the configuration API, etc. (see below)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Q: How to pass configuration data to Dapr and Layotto components"})}),"\n",(0,i.jsx)(n.p,{children:"A: pass metadata's data through the Init interface to components"}),"\n",(0,i.jsx)(n.h1,{id:"future-work",children:"Future Work"}),"\n",(0,i.jsx)(n.h2,{id:"a-bigger-control-plane",children:"A Bigger Control Plane"}),"\n",(0,i.jsx)(n.p,{children:"The Control Plane of Service Mesh serves only RPC, but in Runtime API the configuration of components also needs to be distributed in clusters; components also need to be discovered, routed, and so also have their own control Plane."}),"\n",(0,i.jsx)(n.p,{children:"It would be better to have a Bigger Control Plane, which integrates RPC's and all middleware configuration data."}),"\n",(0,i.jsx)(n.p,{children:"may require extension of the ODS protocol, such as runtime Discovery Service"}),"\n",(0,i.jsx)(n.h2,{id:"subscription-support-configuration",children:"Subscription Support Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Subscription is now obtained by callback app, which can be added to get subscription by configuration"}),"\n",(0,i.jsx)(n.h2,{id:"appcallback-supports-tls",children:"appcallback supports tls"}),"\n",(0,i.jsx)(n.h2,{id:"detach-component-configuration-and-personality-configuration-callback-port-app-id",children:"Detach component configuration and personality configuration (callback port, app-id)"}),"\n",(0,i.jsx)(n.p,{children:"Component configuration and app profile (callback port,app-id) are placed together with the following question\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Not good at making cluster configuration leader"}),"\n",(0,i.jsx)(n.li,{children:"Component control configuration is not available (e.g. Dapr can limit app-id1 access only to topic_id1)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_4.png",src:t(4493).A+"",width:"827",height:"624"})}),"\n",(0,i.jsx)(n.p,{children:"Need to reconstruct the original component logic"}),"\n",(0,i.jsx)(n.h2,{id:"tracing",children:"Tracing"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6535:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/config-1c1073af2d426d37bb76fb02f02baf3b.png"},6776:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img-d79078821c14a2ec1619eb5d6e9baa02.png"},80:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img_1-3c5a1b8312d5bbfd2e0adcd9d1579b16.png"},1371:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img_2-e1811e5f0c86035a7caedf496f40ac64.png"},242:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img_3-d00fc35d33a78d0465669a867032f3dd.png"},4493:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/img_4-fcdf3a81a579645dfdfa89d7699b4a3e.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);