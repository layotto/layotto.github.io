"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[5819],{9298:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=s(4848),a=s(8453);const r={},o="State API",i={id:"building_blocks/state/reference",title:"State API",description:"\u4ec0\u4e48\u662fState API",source:"@site/docs/building_blocks/state/reference.md",sourceDirName:"building_blocks/state",slug:"/building_blocks/state/reference",permalink:"/layotto/docs/building_blocks/state/reference",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/building_blocks/state/reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u6267\u884c\u5668 Http API",permalink:"/layotto/docs/building_blocks/actuator/"},next:{title:"Sequencer API",permalink:"/layotto/docs/building_blocks/sequencer/reference"}},l={},c=[{value:"\u4ec0\u4e48\u662fState API",id:"\u4ec0\u4e48\u662fstate-api",level:2},{value:"\u4f55\u65f6\u4f7f\u7528State API",id:"\u4f55\u65f6\u4f7f\u7528state-api",level:2},{value:"\u5982\u4f55\u4f7f\u7528State API",id:"\u5982\u4f55\u4f7f\u7528state-api",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"Save state",id:"save-state",level:3},{value:"\u5165\u53c2",id:"\u5165\u53c2",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:4},{value:"Get State",id:"get-state",level:3},{value:"Get bulk state",id:"get-bulk-state",level:3},{value:"Delete state",id:"delete-state",level:3},{value:"Delete bulk state",id:"delete-bulk-state",level:3},{value:"State transactions",id:"state-transactions",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"state-api",children:"State API"}),"\n",(0,n.jsx)(t.h2,{id:"\u4ec0\u4e48\u662fstate-api",children:"\u4ec0\u4e48\u662fState API"}),"\n",(0,n.jsx)(t.p,{children:"State API\u662f\u4e00\u5957\u5bf9Key/Value\u6570\u636e\u8fdb\u884c\u589e\u5220\u6539\u67e5\u7684API\u3002\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u5957State API\u64cd\u4f5c\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff08\u6216\u67d0\u79cd\u5b58\u50a8\u7cfb\u7edf\uff09\uff0c\u5bf9Key/Value\u6a21\u578b\u7684\u6570\u636e\u8fdb\u884c\u589e\u5220\u6539\u67e5\u3002"}),"\n",(0,n.jsx)(t.p,{children:"API\u652f\u6301\u6279\u91cfCRUD\u64cd\u4f5c\uff0c\u652f\u6301\u58f0\u660e\u5bf9\u5e76\u53d1\u5b89\u5168\u548c\u6570\u636e\u4e00\u81f4\u6027\u7684\u8981\u6c42\uff0c\u7531Layotto\u5e2e\u60a8\u5904\u7406\u590d\u6742\u7684\u5e76\u53d1\u5b89\u5168\u548c\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u4f55\u65f6\u4f7f\u7528state-api",children:"\u4f55\u65f6\u4f7f\u7528State API"}),"\n",(0,n.jsx)(t.p,{children:"\u5982\u679c\u60a8\u7684\u5e94\u7528\u9700\u8981\u8bbf\u95eeKey/Value\u5b58\u50a8\u3001\u8fdb\u884c\u589e\u5220\u6539\u67e5\uff0c\u90a3\u4e48\u4f7f\u7528State API\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u5b83\u6709\u4ee5\u4e0b\u597d\u5904\uff1a"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u591a\uff08\u4e91\uff09\u73af\u5883\u90e8\u7f72\uff1a\u540c\u4e00\u5957\u4e1a\u52a1\u4ee3\u7801\u90e8\u7f72\u5728\u4e0d\u540c\u73af\u5883"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u4e2d\u7acb\u7684API\u53ef\u4ee5\u5e2e\u52a9\u60a8\u7684\u5e94\u7528\u548c\u5b58\u50a8\u4f9b\u5e94\u5546\u3001\u4e91\u5382\u5546\u89e3\u8026\uff0c\u80fd\u591f\u4e0d\u6539\u4ee3\u7801\u90e8\u7f72\u5728\u4e0d\u540c\u7684\u4e91\u4e0a\u3002"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u591a\u8bed\u8a00\u590d\u7528\u4e2d\u95f4\u4ef6\uff1a\u540c\u4e00\u4e2aDB\uff08\u548c\u6570\u636e\u4e2d\u95f4\u4ef6\uff09\u80fd\u652f\u6301\u4e0d\u540c\u8bed\u8a00\u7684\u5e94\u7528"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u5982\u679c\u60a8\u7684\u516c\u53f8\u5185\u90e8\u6709\u4e0d\u540c\u8bed\u8a00\u5f00\u53d1\u7684\u5e94\u7528\uff08\u4f8b\u5982\u540c\u65f6\u6709java\u548cpython\u5e94\u7528\uff09\uff0c\u90a3\u4e48\u4f20\u7edf\u505a\u6cd5\u662f\u4e3a\u6bcf\u79cd\u8bed\u8a00\u5f00\u53d1\u4e00\u5957\u6570\u636e\u4e2d\u95f4\u4ef6sdk\uff08\u7528\u4e8e\u8def\u7531\uff0c\u5bb9\u707e\uff0c\u6d41\u91cf\u7ba1\u7406\u7b49\u76ee\u7684\uff09\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4f7f\u7528State API\u53ef\u4ee5\u5e2e\u52a9\u60a8\u514d\u53bb\u7ef4\u62a4\u591a\u8bed\u8a00sdk\u7684\u70e6\u607c\uff0c\u4e0d\u540c\u8bed\u8a00\u7684\u5e94\u7528\u53ef\u4ee5\u7528\u540c\u4e00\u5957grpc API\u548cLayotto\u4ea4\u4e92\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u5982\u4f55\u4f7f\u7528state-api",children:"\u5982\u4f55\u4f7f\u7528State API"}),"\n",(0,n.jsxs)(t.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7grpc\u8c03\u7528State API\uff0c\u63a5\u53e3\u5b9a\u4e49\u5728",(0,n.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"runtime.proto"})," \u4e2d\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u4f7f\u7528\u524d\u9700\u8981\u5148\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u914d\u7f6e\uff0c\u8be6\u7ec6\u7684\u914d\u7f6e\u8bf4\u660e\u89c1",(0,n.jsx)(t.a,{href:"/layotto/docs/component_specs/state/common",children:"\u72b6\u6001\u7ba1\u7406\u7ec4\u4ef6\u6587\u6863"})]}),"\n",(0,n.jsx)(t.h3,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,n.jsxs)(t.p,{children:["Layotto client sdk\u5c01\u88c5\u4e86grpc\u8c03\u7528\u7684\u903b\u8f91\uff0c\u4f7f\u7528sdk\u8c03\u7528State API\u7684\u793a\u4f8b\u53ef\u4ee5\u53c2\u8003",(0,n.jsx)(t.a,{href:"/layotto/docs/start/state/start",children:"\u5feb\u901f\u5f00\u59cb\uff1a\u4f7f\u7528State API"})]}),"\n",(0,n.jsx)(t.h3,{id:"save-state",children:"Save state"}),"\n",(0,n.jsx)(t.p,{children:"\u7528\u4e8e\u4fdd\u5b58\u4e00\u6279\u72b6\u6001\u6570\u636e"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"  // Saves an array of state objects\n  rpc SaveState(SaveStateRequest) returns (google.protobuf.Empty) {}\n"})}),"\n",(0,n.jsx)(t.h4,{id:"\u5165\u53c2",children:"\u5165\u53c2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"\n// SaveStateRequest is the message to save multiple states into state store.\nmessage SaveStateRequest {\n  // Required. The name of state store.\n  string store_name = 1;\n\n  // Required. The array of the state key values.\n  repeated StateItem states = 2;\n}\n\n// StateItem represents state key, value, and additional options to save state.\nmessage StateItem {\n  // Required. The state key\n  string key = 1;\n\n  // Required. The state data for key\n  bytes value = 2;\n\n  // (optional) The entity tag which represents the specific version of data.\n  // The exact ETag format is defined by the corresponding data store. Layotto runtime only treats ETags as opaque strings. \n  Etag etag = 3;\n\n  // (optional) additional key-value pairs to be passed to the state store.\n  map<string, string> metadata = 4;\n\n  // (optional) Options for concurrency and consistency to save the state.\n  StateOptions options = 5;\n}\n\n// Etag represents a state item version\nmessage Etag {\n  // value sets the etag value\n  string value = 1;\n}\n\n\n// StateOptions configures concurrency and consistency for state operations\nmessage StateOptions {\n  // Enum describing the supported concurrency for state.\n  // The API server uses Optimized Concurrency Control (OCC) with ETags.\n  // When an ETag is associated with an save or delete request, the store shall allow the update only if the attached ETag matches with the latest ETag in the database.\n  // But when ETag is missing in the write requests, the state store shall handle the requests in the specified strategy(e.g. a last-write-wins fashion).\n  enum StateConcurrency {\n    CONCURRENCY_UNSPECIFIED = 0;\n    // First write wins\n    CONCURRENCY_FIRST_WRITE = 1;\n    // Last write wins\n    CONCURRENCY_LAST_WRITE = 2;\n  }\n\n  // Enum describing the supported consistency for state.\n  enum StateConsistency {\n    CONSISTENCY_UNSPECIFIED = 0;\n    //  The API server assumes data stores are eventually consistent by default.A state store should:\n    //\n    // - For read requests, the state store can return data from any of the replicas\n    // - For write request, the state store should asynchronously replicate updates to configured quorum after acknowledging the update request.\n    CONSISTENCY_EVENTUAL = 1;\n\n    // When a strong consistency hint is attached, a state store should:\n    //\n    // - For read requests, the state store should return the most up-to-date data consistently across replicas.\n    // - For write/delete requests, the state store should synchronisely replicate updated data to configured quorum before completing the write request.\n    CONSISTENCY_STRONG = 2;\n  }\n\n  StateConcurrency concurrency = 1;\n  StateConsistency consistency = 2;\n}\n"})}),"\n",(0,n.jsx)(t.h4,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"google.protobuf.Empty"})}),"\n",(0,n.jsx)(t.h3,{id:"get-state",children:"Get State"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"  // Gets the state for a specific key.\n  rpc GetState(GetStateRequest) returns (GetStateResponse) {}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u907f\u514d\u6587\u6863\u548c\u4ee3\u7801\u4e0d\u4e00\u81f4\uff0c\u8be6\u7ec6\u5165\u53c2\u548c\u8fd4\u56de\u503c\u8bf7\u53c2\u8003",(0,n.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"proto\u6587\u4ef6"})]}),"\n",(0,n.jsx)(t.h3,{id:"get-bulk-state",children:"Get bulk state"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"  // Gets a bulk of state items for a list of keys\n  rpc GetBulkState(GetBulkStateRequest) returns (GetBulkStateResponse) {}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u907f\u514d\u6587\u6863\u548c\u4ee3\u7801\u4e0d\u4e00\u81f4\uff0c\u8be6\u7ec6\u5165\u53c2\u548c\u8fd4\u56de\u503c\u8bf7\u53c2\u8003",(0,n.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"proto\u6587\u4ef6"})]}),"\n",(0,n.jsx)(t.h3,{id:"delete-state",children:"Delete state"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"  // Deletes the state for a specific key.\n  rpc DeleteState(DeleteStateRequest) returns (google.protobuf.Empty) {}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u907f\u514d\u6587\u6863\u548c\u4ee3\u7801\u4e0d\u4e00\u81f4\uff0c\u8be6\u7ec6\u5165\u53c2\u548c\u8fd4\u56de\u503c\u8bf7\u53c2\u8003",(0,n.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"proto\u6587\u4ef6"})]}),"\n",(0,n.jsx)(t.h3,{id:"delete-bulk-state",children:"Delete bulk state"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"  // Deletes a bulk of state items for a list of keys\n  rpc DeleteBulkState(DeleteBulkStateRequest) returns (google.protobuf.Empty) {}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u907f\u514d\u6587\u6863\u548c\u4ee3\u7801\u4e0d\u4e00\u81f4\uff0c\u8be6\u7ec6\u5165\u53c2\u548c\u8fd4\u56de\u503c\u8bf7\u53c2\u8003",(0,n.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"proto\u6587\u4ef6"})]}),"\n",(0,n.jsx)(t.h3,{id:"state-transactions",children:"State transactions"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-protobuf",children:"  // Executes transactions for a specified store\n  rpc ExecuteStateTransaction(ExecuteStateTransactionRequest) returns (google.protobuf.Empty) {}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u907f\u514d\u6587\u6863\u548c\u4ee3\u7801\u4e0d\u4e00\u81f4\uff0c\u8be6\u7ec6\u5165\u53c2\u548c\u8fd4\u56de\u503c\u8bf7\u53c2\u8003",(0,n.jsx)(t.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"proto\u6587\u4ef6"})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(6540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);