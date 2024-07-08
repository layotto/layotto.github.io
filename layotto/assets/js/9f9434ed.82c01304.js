"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[7839],{9578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=t(4848),i=t(8453);const r={},d="Sequencer API\u8bbe\u8ba1\u6587\u6863",c={id:"design/sequencer/design",title:"Sequencer API\u8bbe\u8ba1\u6587\u6863",description:'\u672c\u6587\u6863\u8ba8\u8bba"\u751f\u6210\u5206\u5e03\u5f0f\u552f\u4e00(\u81ea\u589e)id"\u7684API',source:"@site/docs/design/sequencer/design.md",sourceDirName:"design/sequencer",slug:"/design/sequencer/design",permalink:"/layotto/docs/design/sequencer/design",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/design/sequencer/design.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u6dfb\u52a0TryLock\u548cUnlock API",permalink:"/layotto/docs/design/lock/lock-api-design"},next:{title:"File API \u8bbe\u8ba1\u6587\u6863",permalink:"/layotto/docs/design/file/file-design"}},l={},h=[{value:"1. \u9700\u6c42",id:"1-\u9700\u6c42",level:2},{value:"1.1. \u751f\u6210\u5168\u5c40\u552f\u4e00id",id:"11-\u751f\u6210\u5168\u5c40\u552f\u4e00id",level:3},{value:"1.2. \u5bf9\u8be5id\u6709\u9012\u589e\u7684\u9700\u6c42\u3002\u5177\u4f53\u6765\u8bf4\u6709\u5f88\u591a\u79cd\uff1a",id:"12-\u5bf9\u8be5id\u6709\u9012\u589e\u7684\u9700\u6c42\u5177\u4f53\u6765\u8bf4\u6709\u5f88\u591a\u79cd",level:3},{value:"1.3. \u53ef\u80fd\u4f1a\u6709\u81ea\u5b9a\u4e49id schema\u7684\u9700\u6c42",id:"13-\u53ef\u80fd\u4f1a\u6709\u81ea\u5b9a\u4e49id-schema\u7684\u9700\u6c42",level:3},{value:"1.4. \u53ef\u80fd\u6709\u4fe1\u606f\u5b89\u5168\u76f8\u5173\u9700\u6c42",id:"14-\u53ef\u80fd\u6709\u4fe1\u606f\u5b89\u5168\u76f8\u5173\u9700\u6c42",level:3},{value:"2. \u4ea7\u54c1\u8c03\u7814",id:"2-\u4ea7\u54c1\u8c03\u7814",level:2},{value:"3. grpc API\u8bbe\u8ba1",id:"3-grpc-api\u8bbe\u8ba1",level:2},{value:"3.1. proto\u5b9a\u4e49",id:"31-proto\u5b9a\u4e49",level:3},{value:"3.2. \u5173\u4e8e\u552f\u4e00\u6027\u7684\u4e89\u8bae",id:"32-\u5173\u4e8e\u552f\u4e00\u6027\u7684\u4e89\u8bae",level:3},{value:"4. \u7ec4\u4ef6API",id:"4-\u7ec4\u4ef6api",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sequencer-api\u8bbe\u8ba1\u6587\u6863",children:"Sequencer API\u8bbe\u8ba1\u6587\u6863"}),"\n",(0,s.jsx)(n.p,{children:'\u672c\u6587\u6863\u8ba8\u8bba"\u751f\u6210\u5206\u5e03\u5f0f\u552f\u4e00(\u81ea\u589e)id"\u7684API'}),"\n",(0,s.jsx)(n.h2,{id:"1-\u9700\u6c42",children:"1. \u9700\u6c42"}),"\n",(0,s.jsx)(n.h3,{id:"11-\u751f\u6210\u5168\u5c40\u552f\u4e00id",children:"1.1. \u751f\u6210\u5168\u5c40\u552f\u4e00id"}),"\n",(0,s.jsx)(n.p,{children:"Q: \u4ec0\u4e48\u65f6\u5019\u9700\u8981\u751f\u6210\u5168\u5c40\u552f\u4e00id?"}),"\n",(0,s.jsx)(n.p,{children:"A: db\u4e0d\u5e2e\u4f60\u81ea\u52a8\u751f\u6210\u7684\u65f6\u5019\u3002\u6bd4\u5982\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"db\u505a\u4e86\u5206\u5e93\u5206\u8868\uff0c\u6ca1\u5e2e\u4f60\u81ea\u52a8\u751f\u6210id\uff0c\u4f60\u53c8\u9700\u8981\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684\u4e1a\u52a1id"}),"\n",(0,s.jsx)(n.li,{children:"\u6ca1\u8d70db\uff0c\u6bd4\u5982\u8bf7\u6c42\u5230\u4e86\u540e\u7aef\u8981\u751f\u6210\u4e00\u4e2atraceId"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"12-\u5bf9\u8be5id\u6709\u9012\u589e\u7684\u9700\u6c42\u5177\u4f53\u6765\u8bf4\u6709\u5f88\u591a\u79cd",children:"1.2. \u5bf9\u8be5id\u6709\u9012\u589e\u7684\u9700\u6c42\u3002\u5177\u4f53\u6765\u8bf4\u6709\u5f88\u591a\u79cd\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u9700\u8981\u9012\u589e\u3002\u8fd9\u79cd\u60c5\u51b5UUID\u80fd\u89e3\u51b3\uff0c\u867d\u7136\u7f3a\u70b9\u662f\u6bd4\u8f83\u957f\u3002",(0,s.jsx)(n.strong,{children:"\u672cAPI\u6682\u65f6\u4e0d\u8003\u8651\u8fd9\u79cd\u60c5\u51b5"})]}),"\n",(0,s.jsx)(n.li,{children:"\u201c\u8d8b\u52bf\u9012\u589e\u201d\u3002\u4e0d\u8ffd\u6c42\u4e00\u5b9a\u9012\u589e\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u5728\u9012\u589e\u5c31\u884c\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Q: \u4ec0\u4e48\u573a\u666f\u9700\u8981\u8d8b\u52bf\u9012\u589e\uff1f"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5bf9b+\u6811\u7c7b\u7684db(\u4f8b\u5982MYSQL)\u6765\u8bf4,\u8d8b\u52bf\u9012\u589e\u7684\u4e3b\u952e\u80fd\u66f4\u597d\u7684\u5229\u7528\u7f13\u5b58\uff08cache friendly\uff09\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u62ff\u6765\u6392\u5e8f\u67e5\u6700\u65b0\u6570\u636e\u3002\u6bd4\u5982\u9700\u6c42\u662f\u67e5\u6700\u65b0\u7684100\u6761\u6d88\u606f\uff0c\u5f00\u53d1\u8005\u4e0d\u60f3\u65b0\u589e\u4e2a\u65f6\u95f4\u6233\u5b57\u6bb5\u3001\u5efa\u7d22\u5f15\uff0c\u5982\u679cid\u672c\u8eab\u662f\u9012\u589e\u7684\uff0c\u90a3\u4e48\u67e5\u6700\u65b0\u7684100\u6761\u6d88\u606f\u65f6\u76f4\u63a5\u6309id\u6392\u5e8f\u5373\u53ef\uff1a"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"select * from message order by message-id limit 100\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u5728\u4f7f\u7528nosql\u7684\u65f6\u5019\u5f88\u5e38\u89c1\uff0c\u56e0\u4e3anosql\u5728\u65f6\u95f4\u6233\u5b57\u6bb5\u4e0a\u52a0\u7d22\u5f15\u5f88\u96be"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["sharding\u5185\u5355\u8c03\u9012\u589e\u3002\u6bd4\u5982",(0,s.jsx)(n.a,{href:"https://docs.pingcap.com/zh/tidb/stable/auto-increment",children:"Tidb\u7684\u81ea\u589eid"})," \u80fd\u4fdd\u8bc1\u5355\u53f0\u670d\u52a1\u5668\u4e0a\u751f\u6210\u7684id\u9012\u589e\uff0c\u6ca1\u6cd5\u4fdd\u8bc1\u5168\u5c40\uff08\u5728\u591a\u53f0\u670d\u52a1\u5668\u4e0a\uff09\u5355\u8c03\u9012\u589e"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5168\u5c40\u5355\u8c03\u9012\u589e"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5e0c\u671b\u751f\u6210\u7684id\u4e00\u5b9a\u9012\u589e\uff0c\u6ca1\u6709\u4efb\u4f55\u5012\u9000\u7684\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"13-\u53ef\u80fd\u4f1a\u6709\u81ea\u5b9a\u4e49id-schema\u7684\u9700\u6c42",children:"1.3. \u53ef\u80fd\u4f1a\u6709\u81ea\u5b9a\u4e49id schema\u7684\u9700\u6c42"}),"\n",(0,s.jsx)(n.p,{children:'\u6bd4\u5982\u8981\u6c42id\u7684\u683c\u5f0f\u4e3a"\u524d8\u4f4d\u662fuid\uff0c\u540e8\u4f4d\u662f\u81ea\u589eid"\u8fd9\u6837\u7684\u9700\u6c42'}),"\n",(0,s.jsx)(n.h3,{id:"14-\u53ef\u80fd\u6709\u4fe1\u606f\u5b89\u5168\u76f8\u5173\u9700\u6c42",children:"1.4. \u53ef\u80fd\u6709\u4fe1\u606f\u5b89\u5168\u76f8\u5173\u9700\u6c42"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679cID\u662f\u8fde\u7eed\u7684\uff0c\u6076\u610f\u7528\u6237\u7684\u6252\u53d6\u5de5\u4f5c\u5c31\u975e\u5e38\u5bb9\u6613\u505a\u4e86\uff0c\u76f4\u63a5\u6309\u7167\u987a\u5e8f\u4e0b\u8f7d\u6307\u5b9aURL\u5373\u53ef\uff1b"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u662f\u8ba2\u5355\u53f7\u5c31\u66f4\u5371\u9669\u4e86\uff0c\u7ade\u5bf9\u53ef\u4ee5\u76f4\u63a5\u77e5\u9053\u7528\u6237\u4e00\u5929\u7684\u5355\u91cf\u3002\u6240\u4ee5\u5728\u4e00\u4e9b\u5e94\u7528\u573a\u666f\u4e0b\uff0c\u4f1a\u9700\u8981ID\u65e0\u89c4\u5219\u3001\u4e0d\u89c4\u5219\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"2-\u4ea7\u54c1\u8c03\u7814",children:"2. \u4ea7\u54c1\u8c03\u7814"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u7cfb\u7edf"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u80fd\u5426\u4fdd\u8bc1\u751f\u6210\u7684id\u552f\u4e00"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8d8b\u52bf\u9012\u589e"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u4e25\u683c\u9012\u589e"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53ef\u7528\u6027"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u4fe1\u606f\u5b89\u5168"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u5355\u673aredis"}),(0,s.jsxs)(n.td,{children:["yes.",(0,s.jsx)(n.a,{href:"https://redis.io/topics/persistence",children:"\u9700\u8981\u7279\u6b8a\u914d\u7f6eredis\u670d\u52a1\u5668\uff0c\u628a\u4e24\u79cd\u843d\u76d8\u7b56\u7565\u90fd\u6253\u5f00\u3001\u6bcf\u6b21\u5199\u64cd\u4f5c\u90fd\u5199\u78c1\u76d8"})," \uff0c\u907f\u514d\u4e22\u6570\u636e"]}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes.\u524d\u63d0\u662f\u5b95\u673a\u91cd\u542f\u4e0d\u4e22\u6570\u636e"}),(0,s.jsx)(n.td,{children:"\u6709\u5355\u70b9\u6545\u969c\u98ce\u9669"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"redis \u4e3b\u4ece\u590d\u5236+sentinel"}),(0,s.jsxs)(n.td,{children:["no.\u590d\u5236\u662f\u5f02\u6b65\u7684\uff0c\u5373\u4f7f\u7528Wait\u547d\u4ee4\u7b49\u5f85\u540c\u6b65\u590d\u5236\u8fd8\u662f\u53ef\u80fd\u5728fo\u540e\u4e22\u6570\u636e,\u89c1",(0,s.jsx)(n.a,{href:"https://redis.io/topics/replication",children:"\u6587\u6863"})]}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"\u53d6\u51b3\u4e8e\u4f1a\u4e0d\u4f1a\u4e22\u6570\u636e"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"redis cluster"}),(0,s.jsx)(n.td,{children:"\u540c\u4e0a"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"\u540c\u4e0a"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"snowflake"}),(0,s.jsx)(n.td,{children:"no.(\u65f6\u949f\u56de\u62e8\u7b49\u60c5\u51b5\u53ef\u80fd\u5bfc\u81f4id\u91cd\u590d\uff1b\u9700\u8981\u4f9d\u8d56\u5916\u90e8\u5b58\u50a8\uff1b\u6216\u8005\u58f0\u660e\u5fc5\u987b\u5173\u95edNTP\u6216\u4f7f\u7528\u9632\u6b62\u56de\u62e8\u7684\u53ef\u9760NTP)"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"good"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leaf snowflake"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"good"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leaf segment"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leaf segment\u53ea\u90e8\u7f72\u4e00\u53f0Leaf\u670d\u52a1\u5668"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"\u6709\u5355\u70b9\u6545\u969c\u98ce\u9669"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zookeeper"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"etcd"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mysql\u5355\u5e93\u5355\u8868"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"\u6709\u5355\u70b9\u6545\u969c\u98ce\u9669"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"3-grpc-api\u8bbe\u8ba1",children:"3. grpc API\u8bbe\u8ba1"}),"\n",(0,s.jsx)(n.h3,{id:"31-proto\u5b9a\u4e49",children:"3.1. proto\u5b9a\u4e49"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:'// Sequencer API\nrpc GetNextId(GetNextIdRequest )returns (GetNextIdResponse) {}\n\n\nmessage GetNextIdRequest {\n  string store_name = 1;\n  // key is the identifier of a sequencer.\n  string key = 2;\n  \n  SequencerOptions options = 3;\n  // The metadata which will be sent to the component.\n  map<string, string> metadata = 4;\n}\n\n// SequencerOptions configures requirements for incremental and uniqueness guarantee\nmessage SequencerOptions {  \n  enum AutoIncrement {\n    // WEAK means a "best effort" incrementing service.But there is no strict guarantee   \n    WEAK = 0;\n    // STRONG means a strict guarantee of global monotonically increasing\n    STRONG = 1;\n  }\n  \n//  enum Uniqueness{\n//    // WEAK means a "best effort" unqueness guarantee.\n//    // But it might duplicate in some corner cases.\n//    WEAK = 0;\n//    // STRONG means a strict guarantee of global uniqueness\n//    STRONG = 1;\n//  }\n\n  AutoIncrement increment = 1;\n//  Uniqueness uniqueness=2;\n}\n\nmessage GetNextIdResponse{\n  int64 next_id=1;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u91ca\uff1a"}),"\n",(0,s.jsx)(n.p,{children:'\u5176\u5b9e\u5c31\u4e00\u4e2aGetNextId\u63a5\u53e3\uff0c\u9700\u8981\u4f20key\u4f5c\u4e3a\u547d\u540d\u7a7a\u95f4\uff08\u6bd4\u5982\u4f20\u67d0\u4e2a\u8ba2\u5355\u8868\u8868\u540d\uff0c"order_table"\uff09\uff0csequencer\u4fdd\u8bc1\u751f\u6210\u7684id\u5728\u8be5\u547d\u540d\u7a7a\u95f4\u5185\u552f\u4e00\u3001\u9012\u589e\u3002'}),"\n",(0,s.jsx)(n.p,{children:"SequencerOptions.AutoIncrement\u7528\u4e8e\u58f0\u660e\u7528\u6237\u5bf9\u9012\u589e\u6027\u7684\u9700\u6c42\uff0c\u662f\u8d8b\u52bf\u9012\u589e(WEAK)\u8fd8\u662f\u8981\u6c42\u4e25\u683c\u5168\u5c40\u9012\u589e(STRONG)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: \u662f\u5426\u7531Layotto\u5e2e\u7528\u6237\u6309\u9700\u62fcid\uff1f"})}),"\n",(0,s.jsx)(n.p,{children:"A: API\u548cLayotto\u8fd0\u884c\u65f6\u4e0d\u7ba1\u8fd9\u4e8b\uff0c\u7531sdk\u6216\u8005\u7528\u6237\u81ea\u5df1\u5904\u7406\uff0c\u6216\u8005\u67d0\u4e2a\u7279\u6b8a\u7ec4\u4ef6\u60f3\u5b9e\u73b0\u8fd9\u4e2afeature\u4e5f\u53ef\u4ee5\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: \u8fd4\u56de\u7c7b\u578b\u662fstring\u8fd8\u662fint64"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u8fd4\u56destring\uff0c\u5047\u5982\u7528\u6237\u7528\u4e86\u67d0\u4e2a\u8fd4\u56deint64\u7684\u5b9e\u73b0\uff0c\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u628a\u8fd4\u56de\u7684string\u8f6c\u6210\u4e86int64,\u90a3\u4ed6\u8fc1\u79fb\u5230\u522b\u7684\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u8f6c\u6362\u8fc7\u7a0b\u53ef\u80fd\u62a5\u9519"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u8fd4\u56deint64\uff0c\u7ec4\u4ef6\u5c31\u6ca1\u6cd5\u5e2e\u7528\u6237\u505a\u4e00\u4e9b\u5b9a\u5236\u62fcid\u7684\u4e8b\u60c5\u4e86"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u53ef\u79fb\u690d\u6027\uff0c\u9009\u62e9int64\u3002\u62fcid\u7684\u4e8b\u60c5\u5728sdk\u91cc\u505a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: int64\u6ea2\u51fa\u95ee\u9898\u600e\u4e48\u5904\u7406?"})}),"\n",(0,s.jsx)(n.p,{children:"\u6682\u4e0d\u8003\u8651"}),"\n",(0,s.jsx)(n.h3,{id:"32-\u5173\u4e8e\u552f\u4e00\u6027\u7684\u4e89\u8bae",children:"3.2. \u5173\u4e8e\u552f\u4e00\u6027\u7684\u4e89\u8bae"}),"\n",(0,s.jsx)(n.p,{children:'API\u4e2d\u539f\u5148\u5b9a\u4e49\u4e86\u7528\u6237\u4f20\u53c2SequencerOptions.Uniqueness\u679a\u4e3e\u503c ,\u5176\u4e2dWEAK\u4ee3\u8868"\u5c3d\u91cf\u4fdd\u8bc1\u5168\u5c40\u552f\u4e00\uff0c\u4f46\u662f\u6781\u5c0f\u6982\u7387\u53ef\u80fd\u91cd\u590d"\uff0c\u8981\u6c42\u4e1a\u52a1\u4ee3\u7801\u5982\u679c\u62ff\u5230id\u53bb\u5199\u5e93\u65f6\uff0c\u505a\u597did\u91cd\u590d\u3001\u91cd\u8bd5\u7684\u5fc3\u7406\u51c6\u5907\uff1b\u800cSTRONG\u4ee3\u8868\u4e25\u683c\u5168\u5c40\u552f\u4e00\uff0c\u7528\u6237\u4ee3\u7801\u4e0d\u8003\u8651id\u91cd\u590d\u3001\u91cd\u8bd5\u4e4b\u7c7b\u7684\u4e8b\u60c5\u3002'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b9a\u4e49\u8fd9\u4e2a\u679a\u4e3e\u503c\u7684\u539f\u56e0\uff08\u597d\u5904\uff09"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u8981\u4fdd\u8bc1\u4e25\u683c\u552f\u4e00\uff0c\u7ec4\u4ef6\u5b9e\u73b0\u8d77\u6765\u4f1a\u6bd4\u8f83\u91cd\u3002\u6bd4\u5982\u5355\u673aredis\u5e38\u7528\u7684\u843d\u76d8\u7b56\u7565\u5c31\u4e0d\u884c\uff0c\u53ef\u80fd\u5bfc\u81f4\u5b95\u673a\u91cd\u542f\u4e4b\u540e\u4e22\u6570\u636e\u3001\u751f\u6210\u4e00\u4e2a\u91cd\u590did\uff1b\u6bd4\u5982\u76f4\u63a5\u5728sidecar\u91cc\u5199\u4e00\u4e2asnowflake\u7b97\u6cd5\u5c31\u4e0d\u884c\uff0c\u56e0\u4e3a\u53ef\u80fd\u4f1a\u6709\u65f6\u949f\u56de\u62e8\u5bfc\u81f4id\u91cd\u590d\u7684\u95ee\u9898\uff08NTP\u65f6\u949f\u540c\u6b65\u3001\u95f0\u79d2\u7b49\u60c5\u51b5\u90fd\u6709\u53ef\u80fd\u5bfc\u81f4\u65f6\u949f\u56de\u62e8\uff09\u3002",(0,s.jsx)(n.a,{href:"https://tech.meituan.com/2017/04/21/mt-leaf.html",children:"Leaf\u7684snowflake\u5b9e\u73b0"})," \u4f9d\u8d56zookeeper\u5224\u65ad\u65f6\u949f\u56de\u62e8\uff1b"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b9a\u4e49\u8fd9\u4e2a\u679a\u4e3e\u503c\u7684\u7f3a\u70b9"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7ed9\u7528\u6237\u5e26\u6765\u66f4\u591a\u7406\u89e3\u6210\u672c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7ed3\u8bba"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b58\u5728\u4e89\u8bae\uff0c\u672c\u671f\u5148\u4e0d\u6dfb\u52a0\u8be5\u679a\u4e3e\u503c\u3002\u9ed8\u8ba4\u8fd4\u56de\u7684\u7ed3\u679c\u4e00\u5b9a\u80fd\u4fdd\u8bc1\u5168\u5c40\u552f\u4e00(STRONG)\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"4-\u7ec4\u4ef6api",children:"4. \u7ec4\u4ef6API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"package sequencer\n\ntype Store interface {\n\t// Init this component.\n\t//\n\t// The number 'BiggerThan' means that the id generated by this component must be bigger than this number.\n\t//\n\t// If the component find that currently the storage can't guarantee this,\n\t// it can do some initialization like inserting a new id equal to or bigger than this 'BiggerThan' into the storage,\n\t// or just return an error\n\tInit(config Configuration) error\n\n\tGetNextId(*GetNextIdRequest) (*GetNextIdResponse, error)\n\n\t// GetSegment returns a range of id.\n\t// 'support' indicates whether this method is supported by the component.\n\t// Layotto runtime will cache the result if this method is supported.\n\tGetSegment(*GetSegmentRequest) (support bool, result *GetSegmentResponse, err error)\n}\n\ntype GetNextIdRequest struct {\n\tKey      string\n\tOptions  SequencerOptions\n\tMetadata map[string]string\n}\n\ntype SequencerOptions struct {\n\tAutoIncrement AutoIncrementOption\n}\n\ntype AutoIncrementOption string\n\nconst (\n\tWEAK   AutoIncrementOption = \"weak\"\n\tSTRONG AutoIncrementOption = \"strong\"\n)\n\ntype GetNextIdResponse struct {\n\tNextId int64\n}\n\ntype GetSegmentRequest struct {\n\tSize     int\n\tKey      string\n\tOptions  SequencerOptions\n\tMetadata map[string]string\n}\n\ntype GetSegmentResponse struct {\n\tSegment []int64\n}\n\ntype Configuration struct {\n\tBiggerThan map[string]int64\n\tProperties map[string]string\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: BiggerThan\u5b57\u6bb5\u662f\u5565?"})}),"\n",(0,s.jsx)(n.p,{children:'\u8981\u6c42\u7ec4\u4ef6\u751f\u6210\u7684\u6240\u6709id\u90fd\u5f97\u6bd4"biggerThan"\u5927\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u8ba1\u8fd9\u4e2a\u914d\u7f6e\u9879\u662f\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u505a\u79fb\u690d\u3002\u6bd4\u5982\u7cfb\u7edf\u539f\u5148\u4f7f\u7528mysql\u505a\u53d1\u53f7\u670d\u52a1\uff0cid\u5df2\u7ecf\u751f\u6210\u5230\u4e861000\uff0c\u540e\u6765\u8fc1\u79fb\u5230PostgreSQL\u4e0a\uff0c\u9700\u8981\u914d\u7f6ebiggerThan\u4e3a1000\uff0c\u8fd9\u6837PostgreSQL\u7ec4\u4ef6\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u4f1a\u8fdb\u884c\u8bbe\u7f6e\u3001\u5f3a\u5236id\u57281000\u4ee5\u4e0a,\u6216\u8005\u53d1\u73b0id\u6ca1\u6cd5\u6ee1\u8db3\u8981\u6c42\u3001\u76f4\u63a5\u542f\u52a8\u65f6\u62a5\u9519\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: BiggerThan\u4e3a\u5565\u662f\u4e2amap?"})}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u4e3a\u6bcf\u4e2akey\u53ef\u80fd\u6709\u81ea\u5df1\u7684biggerThan."}),"\n",(0,s.jsx)(n.p,{children:"\u6bd4\u5982\u539f\u5148app1\u505a\u4e86\u5206\u5e93\u5206\u8868\u3001\u7528\u67d0\u79cd\u53d1\u53f7\u670d\u52a1\u6765\u751f\u6210\u8ba2\u5355\u8868\u548c\u5546\u54c1\u8868\u7684id\uff0c\u8ba2\u5355\u8868id\u8fbe\u5230\u4e861000\uff0c\u5546\u54c1\u8868id\u8fbe\u52302000."}),"\n",(0,s.jsx)(n.p,{children:"\u540e\u6765app1\u60f3\u6362\u4e2a\u5b58\u50a8\u505asequencer\uff0c\u90a3\u4e48\u4ed6\u8981\u58f0\u660e\u8ba2\u5355\u8868id\u57281000\u4ee5\u4e0a\uff0c\u5546\u54c1\u8868id\u57282000\u4ee5\u4e0a\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u53e6\u4e00\u4e2a\u4f8b\u5b50\u662f",(0,s.jsx)(n.a,{href:"https://tech.meituan.com/2017/04/21/mt-leaf.htm",children:"Leaf\u7684\u8bbe\u8ba1"})," \uff0c\u4e5f\u662f\u6bcf\u4e2abiz_tag\u5bf9\u5e94\u4e00\u4e2amax_id\uff08Leaf\u7684max_id\u5c31\u662f\u6211\u4eec\u7684biggerThan)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"leaf_max_id.png",src:t(9399).A+"",width:"2434",height:"1442"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: \u8981\u4e0d\u8981\u5728runtime\u5c42\u5b9e\u73b0\u7f13\u5b58?"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679cruntime\u505a\u7f13\u5b58\uff0c\u9700\u8981\u7ec4\u4ef6\u5b9e\u73b0\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"GetSegment(*GetSegmentRequest) (support bool, result *GetSegmentResponse, err error)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u5148\u5b9a\u4e49\u63a5\u53e3\uff0c\u7ec4\u4ef6\u5148\u4e0d\u5b9e\u73b0\uff0c\u4ee5\u540e\u6709\u6027\u80fd\u9700\u6c42\u518d\u5b9e\u73b0"}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.jianshu.com/p/fb9478687e55",children:"\u8bbe\u8ba1\u5206\u5e03\u5f0f\u552f\u4e00id\u751f\u6210"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.w3cschool.cn/architectroad/architectroad-distributed-id.html",children:"\u67b6\u6784 \u7ec6\u804a\u5206\u5e03\u5f0fID\u751f\u6210\u65b9\u6cd5"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://tech.meituan.com/2017/04/21/mt-leaf.html",children:"Leaf\u2014\u2014\u7f8e\u56e2\u70b9\u8bc4\u5206\u5e03\u5f0fID\u751f\u6210\u7cfb\u7edf"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9399:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/leaf_max_id-e39c29408a24d99885d5534759942654.png"},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(6540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);