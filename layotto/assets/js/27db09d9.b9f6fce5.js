"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[9136],{9713:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var i=s(4848),r=s(8453);const c={},t="\u6dfb\u52a0TryLock\u548cUnlock API",l={id:"design/lock/lock-api-design",title:"\u6dfb\u52a0TryLock\u548cUnlock API",description:"\u6dfb\u52a0TryLock\u548cUnlock API.",source:"@site/docs/design/lock/lock-api-design.md",sourceDirName:"design/lock",slug:"/design/lock/lock-api-design",permalink:"/docs/design/lock/lock-api-design",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/design/lock/lock-api-design.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"RPC \u8bbe\u8ba1\u6587\u6863",permalink:"/docs/design/rpc/rpc_design_document"},next:{title:"Sequencer API\u8bbe\u8ba1\u6587\u6863",permalink:"/docs/design/sequencer/design"}},d={},o=[{value:"2.1. API",id:"21-api",level:2},{value:"2.1.0. \u8bbe\u8ba1\u539f\u5219",id:"210-\u8bbe\u8ba1\u539f\u5219",level:3},{value:"2.1.1. TryLock/Unlock",id:"211-trylockunlock",level:3},{value:"2.1.2. \u7eed\u79df",id:"212-\u7eed\u79df",level:3},{value:"Solution A: add an API &quot;LockKeepAlive&quot;",id:"solution-a-add-an-api-lockkeepalive",level:4},{value:"Solution B: \u7528\u6237\u4e0d\u611f\u77e5\u7eed\u79df\u903b\u8f91\uff0c\u81ea\u52a8\u7eed\u79df\uff0cApp\u548csidecar\u7ef4\u6301\u7edf\u4e00\u5fc3\u8df3",id:"solution-b-\u7528\u6237\u4e0d\u611f\u77e5\u7eed\u79df\u903b\u8f91\u81ea\u52a8\u7eed\u79dfapp\u548csidecar\u7ef4\u6301\u7edf\u4e00\u5fc3\u8df3",level:4},{value:"Solution C\u81ea\u5df1\u91cd\u8bd5unlock",id:"solution-c\u81ea\u5df1\u91cd\u8bd5unlock",level:4},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:4},{value:"2.2. \u7ec4\u4ef6",id:"22-\u7ec4\u4ef6",level:2},{value:"2.2.1. \u5982\u4f55\u5904\u7406\u201c\u7ec4\u4ef6\u4e0d\u652f\u6301\u67d0\u4e2afeature option\u201d",id:"221-\u5982\u4f55\u5904\u7406\u7ec4\u4ef6\u4e0d\u652f\u6301\u67d0\u4e2afeature-option",level:3},{value:"2.2.2. \u5982\u4f55\u5904\u7406\u201c\u7ec4\u4ef6\u4e0d\u652f\u6301\u67d0\u4e2aAPI\u201d",id:"222-\u5982\u4f55\u5904\u7406\u7ec4\u4ef6\u4e0d\u652f\u6301\u67d0\u4e2aapi",level:3},{value:"2.2.3. \u9009\u578b",id:"223-\u9009\u578b",level:3},{value:"2.2.4. &quot;\u8fd0\u884c\u65f6\u62a5\u9519&quot;\u5f0f\u8bbe\u8ba1\u4f1a\u7834\u574f\u53ef\u79fb\u690d\u6027\uff0c\u5982\u4f55\u8ba9\u7528\u6237\u66f4\u7b80\u5355\u7684\u8bc4\u4f30\u80fd\u5426\u79fb\u690d\uff1f",id:"224-\u8fd0\u884c\u65f6\u62a5\u9519\u5f0f\u8bbe\u8ba1\u4f1a\u7834\u574f\u53ef\u79fb\u690d\u6027\u5982\u4f55\u8ba9\u7528\u6237\u66f4\u7b80\u5355\u7684\u8bc4\u4f30\u80fd\u5426\u79fb\u690d",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u6dfb\u52a0trylock\u548cunlock-api",children:"\u6dfb\u52a0TryLock\u548cUnlock API"}),"\n",(0,i.jsx)(n.p,{children:"\u6dfb\u52a0TryLock\u548cUnlock API."}),"\n",(0,i.jsx)(n.p,{children:"\u7eed\u79dfAPI\u6709\u4e89\u8bae\uff0c\u7b2c\u4e00\u7248\u4e0d\u52a0\u5165\u7eed\u79dfAPI"}),"\n",(0,i.jsx)(n.h1,{id:"1-\u8c03\u7814",children:"1. \u8c03\u7814"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u7cfb\u7edf"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u80fd\u5426\u5b9e\u73b0\u5206\u5e03\u5f0f\u9501"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u963b\u585e\u9501(\u57fa\u4e8ewatch)"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u53ef\u7528\u6027"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u5199\u64cd\u4f5c\u7ebf\u6027\u4e00\u81f4"})}),(0,i.jsx)(n.th,{children:(0,i.jsxs)(n.strong,{children:["sequencer(",(0,i.jsx)(n.a,{href:"https://static.googleusercontent.com/media/research.google.com/zh-TW//archive/chubby-osdi06.pdf",children:"chubby\u8bba\u6587\u91cc\u63d0\u51fa\u7684feature"}),")"]})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u7eed\u79df"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5355\u673aredis"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"x"}),(0,i.jsx)(n.td,{children:"\u5355\u70b9\u5931\u6548\u65f6\uff0c\u9501\u670d\u52a1\u4e0d\u53ef\u7528"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"yes(need poc)"}),(0,i.jsx)(n.td,{children:"yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"redis\u96c6\u7fa4"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"x"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"no. \u6545\u969c\u8f6c\u79fb\u53ef\u80fd\u5bfc\u81f4\u4e22\u9501"}),(0,i.jsx)(n.td,{children:"yes(need poc)"}),(0,i.jsx)(n.td,{children:"yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"redis Redlock"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"consul"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zookeeper"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsxs)(n.td,{children:["yes \u6709fo\u80fd\u529b,",(0,i.jsx)(n.a,{href:"https://pdos.csail.mit.edu/6.824/papers/zookeeper.pdf",children:"200 ms\u5185\u5b8c\u6210\u9009\u4e3e"})]}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"yes \u4f7f\u7528zxid\u4f5c\u4e3asequencer"}),(0,i.jsx)(n.td,{children:"yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"etcd"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"yes use revision"}),(0,i.jsx)(n.td,{children:"yes lease.KeepAlive"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u80fd\u529b\u8fd8\u662f\u6709\u4e00\u5b9a\u5dee\u5f02"}),"\n",(0,i.jsx)(n.h1,{id:"2-high-level-design",children:"2. High-level design"}),"\n",(0,i.jsx)(n.h2,{id:"21-api",children:"2.1. API"}),"\n",(0,i.jsx)(n.h3,{id:"210-\u8bbe\u8ba1\u539f\u5219",children:"2.1.0. \u8bbe\u8ba1\u539f\u5219"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u9762\u4e34\u7740\u5f88\u591a\u8bf1\u60d1\uff0c\u5206\u5e03\u5f0f\u9501\u5176\u5b9e\u6709\u5f88\u591afeature\u53ef\u4ee5\u505a\uff08\u963b\u585e\u9501\uff0c\u53ef\u91cd\u5165\u9501\uff0c\u8bfb\u5199\u9501\uff0csequencer\u7b49\u7b49\uff09"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\u6bd5\u7adf\u6211\u4eec\u7684\u76ee\u6807\u662f\u8bbe\u8ba1\u4e00\u5957\u8db3\u591f\u901a\u7528\u7684API\u89c4\u8303\uff0c\u90a3\u4e48\u5728API\u5236\u5b9a\u4e0a\u8fd8\u662f\u5c3d\u91cf\u4fdd\u5b88\u4e9b\uff0cstart simple\uff0c\u5148\u628a\u7b80\u5355\u3001\u5e38\u7528\u7684\u529f\u80fd\u62bd\u8c61\u6210API\u89c4\u8303\uff0c\u7b49\u7528\u6237\u53cd\u9988\u540e\u518d\u8003\u8651\u5c06\u66f4\u591a\u529f\u80fd\u62bd\u8c61\u6210API\u89c4\u8303"}),"\n",(0,i.jsx)(n.h3,{id:"211-trylockunlock",children:"2.1.1. TryLock/Unlock"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u57fa\u7840\u7684\u52a0\u9501\u3001\u89e3\u9501\u529f\u80fd\u3002TryLock\u975e\u963b\u585e\uff0c\u5982\u679c\u6ca1\u6709\u62a2\u5230\u9501\u76f4\u63a5\u8fd4\u56de"}),"\n",(0,i.jsx)(n.p,{children:"proto:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:"// Distributed Lock API\nrpc TryLock(TryLockRequest)returns (TryLockResponse) {}\n\nrpc Unlock(UnlockRequest)returns (UnlockResponse) {}\n\nmessage TryLockRequest {\n  string store_name = 1;\n  // resource_id is the lock key.\n  string resource_id = 2;\n  // lock_owner indicate the identifier of lock owner.\n  // This field is required.You can generate a uuid as lock_owner.For example,in golang:\n  //\n  // req.LockOwner = uuid.New().String()\n  //\n  // This field is per request,not per process,so it is different for each request,\n  // which aims to prevent multi-thread in the same process trying the same lock concurrently.\n  //\n  // The reason why we don't make it automatically generated is:\n  // 1. If it is automatically generated,there must be a 'my_lock_owner_id' field in the response.\n  // This name is so weird that we think it is inappropriate to put it into the api spec\n  // 2. If we change the field 'my_lock_owner_id' in the response to 'lock_owner',which means the current lock owner of this lock,\n  // we find that in some lock services users can't get the current lock owner.Actually users don't need it at all.\n  // 3. When reentrant lock is needed,the existing lock_owner is required to identify client and check \"whether this client can reenter this lock\".\n  // So this field in the request shouldn't be removed.\n  string lock_owner = 3;\n  // expire is the time before expire.The time unit is second.\n  int32 expire = 4;\n}\n\nmessage TryLockResponse {\n\n  bool success = 1;\n}\n\nmessage UnlockRequest {\n  string store_name = 1;\n  // resource_id is the lock key.\n  string resource_id = 2;\n\n  string lock_owner = 3;\n}\n\nmessage UnlockResponse {\n  enum Status {\n    SUCCESS = 0;\n    LOCK_UNEXIST = 1;\n    LOCK_BELONG_TO_OTHERS = 2;\n    INTERNAL_ERROR = 3;\n  }\n\n  Status status = 1;\n}\n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Q: expire\u5b57\u6bb5\u7684\u65f6\u95f4\u5355\u4f4d\uff1f"})}),"\n",(0,i.jsx)(n.p,{children:"A: \u79d2\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Q: \u80fd\u5426\u5f3a\u5236\u8ba9\u7528\u6237\u628a\u79d2\u6570\u914d\u5927\u70b9\uff0c\u522b\u914d\u592a\u5c0f\uff1f"})}),"\n",(0,i.jsx)(n.p,{children:"A: \u6ca1\u6cd5\u5728\u7f16\u8bd1\u65f6\u6216\u8005\u542f\u52a8\u65f6\u9650\u5236\uff0c\u7b97\u4e86"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Q: \u5982\u679c\u591a\u4e2a\u5ba2\u6237\u7aef\u4f20\u76f8\u540c\u7684LockOwner\u4f1a\u600e\u4e48\u6837?"})}),"\n",(0,i.jsx)(n.p,{children:"case 1. \u4e24\u4e2a\u5ba2\u6237\u7aefapp-id\u4e0d\u4e00\u6837\uff0c\u4f20\u7684LockOwner\u76f8\u540c\uff0c\u4e0d\u4f1a\u53d1\u751f\u51b2\u7a81"}),"\n",(0,i.jsx)(n.p,{children:"case 2. \u4e24\u4e2a\u5ba2\u6237\u7aefapp-id\u4e00\u6837\uff0c\u4f20\u7684LockOwner\u76f8\u540c\uff0c\u4f1a\u53d1\u751f\u51b2\u7a81\u3002\u53ef\u80fd\u4f1a\u51fa\u73b0\u62a2\u5230\u522b\u4eba\u7684\u9501\u3001\u91ca\u653e\u522b\u4eba\u7684\u9501\u7b49\u5f02\u5e38\u60c5\u51b5"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u6b64\u7528\u6237\u9700\u8981\u4fdd\u8bc1LockOwner\u7684\u552f\u4e00\u6027\uff0c\u4f8b\u5982\u7ed9\u6bcf\u4e2a\u8bf7\u6c42\u5206\u914d\u4e00\u4e2aUUID,golang\u5199\u6cd5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/google/uuid"\n//...\nreq.LockOwner = uuid.New().String()\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Q: \u4e3a\u5565\u4e0d\u52a0metadata"})}),"\n",(0,i.jsx)(n.p,{children:"A: \u4e00\u5f00\u59cb\u5c3d\u91cf\u4fdd\u5b88\u4e00\u4e9b\uff0c\u7b49\u6709\u4eba\u53cd\u9988\u6709\u9700\u6c42\u518d\u52a0\uff0c\u6216\u8005\u5b9e\u73b0\u7ec4\u4ef6\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u786e\u5b9e\u6709\u9700\u8981\u518d\u52a0"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Q: \u4ee5\u540e\u8981\u652f\u6301sequencer\u3001\u53ef\u91cd\u5165\u9501\u4e4b\u7c7b\u7684feature\u548b\u52a0\uff1f"})}),"\n",(0,i.jsx)(n.p,{children:"A: \u5165\u53c2\u589e\u52a0feature option\uff0c\u7ec4\u4ef6\u4e5f\u8981\u5b9e\u73b0Support()\u63a5\u53e3"}),"\n",(0,i.jsx)(n.h3,{id:"212-\u7eed\u79df",children:"2.1.2. \u7eed\u79df"}),"\n",(0,i.jsx)(n.h4,{id:"solution-a-add-an-api-lockkeepalive",children:'Solution A: add an API "LockKeepAlive"'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:"rpc LockKeepAlive(stream LockKeepAliveRequest) returns (stream LockKeepAliveResponse){}\n  \nmessage LockKeepAliveRequest {\n  // resource_id is the lock key.\n  string resource_id = 1;\n\n  string client_id = 2;\n  // expire is the time to expire\n  int64 expire = 3;\n}\n\nmessage LockKeepAliveResponse {\n  enum Status {\n    SUCCESS = 0;\n    LOCK_UNEXIST = 1;\n    LOCK_BELONG_TO_OTHERS = 2;\n  }\n  // resource_id is the lock key.\n  string resource_id = 1;\n\n  Status status = 2;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7eed\u79df\u7684\u5165\u53c2\u3001\u8fd4\u56de\u7ed3\u679c\u90fd\u662fstream,\u8fd9\u91cc\u53c2\u8003etcd\u7684\u5b9e\u73b0\uff0capp\u548csidecar\u53ea\u9700\u8981\u7ef4\u62a4\u4e00\u4e2a\u8fde\u63a5\uff0c\u6bcf\u6b21\u7528\u9501\u9700\u8981\u7eed\u79df\u7684\u65f6\u5019\u90fd\u590d\u7528\u8be5\u8fde\u63a5\u4f20\u9012\u7eed\u79df\u8bf7\u6c42\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Q: \u4e3a\u5565\u4e0d\u628a\u7eed\u79df\u4f5c\u4e3a\u4e00\u4e2astream\u53c2\u6570\u585e\u5230tryLock\u91cc\uff1f"})}),"\n",(0,i.jsx)(n.p,{children:"A: \u5f88\u591a\u4e1a\u52a1\u4e0d\u7528\u7eed\u79df\uff0c\u8ba9trylock\u5c3d\u91cf\u7b80\u5355\uff1b"}),"\n",(0,i.jsx)(n.p,{children:"\u5c3d\u91cf\u5355\u4e00\u804c\u8d23\uff0c\u540e\u7eed\u52a0\u4e0a\u963b\u585e\u9501\uff0c\u53ef\u4ee5\u516c\u7528\u7eed\u79dfAPI\uff1b"}),"\n",(0,i.jsx)(n.p,{children:"\u628a\u5e26stream\u7684\u90e8\u5206\u62c6\u5f00\u6210\u4e00\u4e2a\u63a5\u53e3\uff0c\u4ee5\u4fbfhttp\u5b9e\u73b0\u7b80\u5355\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Q:\u7eed\u79df\u903b\u8f91\u592a\u590d\u6742\uff0c\u80fd\u5426\u8ba9\u7528\u6237\u4e0d\u611f\u77e5\uff1f"})}),"\n",(0,i.jsx)(n.p,{children:"A: sdk\u5c4f\u853d\u6389\u8fd9\u5c42\u903b\u8f91\uff0c\u5f00\u4e2a\u7ebf\u7a0b/\u534f\u7a0b/nodejs\u5b9a\u65f6\u4e8b\u4ef6\uff0c\u81ea\u52a8\u7eed\u79df"}),"\n",(0,i.jsx)(n.h4,{id:"solution-b-\u7528\u6237\u4e0d\u611f\u77e5\u7eed\u79df\u903b\u8f91\u81ea\u52a8\u7eed\u79dfapp\u548csidecar\u7ef4\u6301\u7edf\u4e00\u5fc3\u8df3",children:"Solution B: \u7528\u6237\u4e0d\u611f\u77e5\u7eed\u79df\u903b\u8f91\uff0c\u81ea\u52a8\u7eed\u79df\uff0cApp\u548csidecar\u7ef4\u6301\u7edf\u4e00\u5fc3\u8df3"}),"\n",(0,i.jsx)(n.p,{children:"\u7f3a\u70b9/\u96be\u70b9\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u7edf\u4e00\u5fc3\u8df3\u7684\u8bdd\uff0c\u96be\u4ee5\u5b9a\u5236\u5fc3\u8df3\u95f4\u9694"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u89e3\u6cd5\u662f\u4fdd\u8bc1\u5fc3\u8df3\u95f4\u9694\u4f4e\uff0c\u6bd4\u59821\u79d21\u6b21"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u5982\u4f55\u4fdd\u8bc1\u53ef\u9760\u7684\u6545\u969c\u68c0\u6d4b\uff1f"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\u4ee5\u4e0bjava\u4ee3\u7801\uff0cunlock\u53ef\u80fd\u5931\u8d25\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"try{\n\n}finally{\n  lock.unlock()   \n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u662f\u5355\u673a\u9501\uff0cunlock\u80fd\u4fdd\u8bc1\u6210\u529f\uff08\u9664\u975e\u6574\u4e2ajvm\u6545\u969c\uff09\uff0c\u4f46\u662funlock\u8d70\u7f51\u7edc\u8c03\u7528\u7684\u8bdd\u53ef\u80fd\u5931\u8d25\u3002\u8c03\u7528\u5931\u8d25\u540e\uff0c\u600e\u4e48\u4fdd\u8bc1\u5fc3\u8df3\u65ad\u6389\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u5c31\u8981\u6c42\u4e1a\u52a1\u5728\u5f00\u53d1\u65f6\u8981\u5f80\u5fc3\u8df3\u68c0\u6d4b\u91cc\u4e0a\u62a5\u4e00\u4e9b\u7ec6\u7c92\u5ea6\u7684\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49http callback\u63a5\u53e3,\u7531actuator\u8f6e\u8be2\u68c0\u6d4b\uff0c\u7ea6\u5b9acallback\u8fd4\u56de\u7684\u6570\u636e\u7ed3\u6784\u4e3a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "status": "UP",\n  "details": {\n    "lock": [\n      {\n        "resource_id": "res1",\n        "client_id": "dasfdasfasdfa",\n        "type": "unlock_fail"\n      }\n    ],\n    "xxx": []\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5e94\u7528\u8981\u5904\u7406\u72b6\u6001\u6536\u96c6\u3001\u4e0a\u62a5\u3001\u4e0a\u62a5\u6210\u529f\u540e\u6e05\u7406\u3001\u9650\u5236map\u5bb9\u91cf\uff08\u6bd4\u5982\u4e0a\u62a5\u5931\u8d25\u6b21\u6570\u591a\u4e86\uff0cmap\u592a\u5927OOM\u600e\u4e48\u529e\uff09\uff0c\u603b\u5f52\u8981\u6c42app\u5b9e\u73b0\u4e00\u4e9b\u590d\u6742\u903b\u8f91\uff0c\u4e5f\u8981\u653esdk\u91cc"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u8fd9\u4e2a\u5b9e\u73b0\u5176\u5b9e\u548c\u7eed\u79df\u4e00\u6837\u7684\uff0c\u90fd\u662f\u5f00\u4e00\u4e2a\u5355\u72ec\u7684\u8fde\u63a5\u505a\u72b6\u6001\u7ba1\u7406\uff0c\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u6709\u9700\u8981\u5c31\u901a\u8fc7\u8fd9\u4e2a\u516c\u7528\u8fde\u63a5\u4e0a\u62a5\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(n.li,{children:"API spec\u4f9d\u8d56\u5fc3\u8df3\u903b\u8f91\u3002\u4f9d\u8d56\u5fc3\u8df3\u95f4\u9694\u3001\u5fc3\u8df3\u8fd4\u56de\u7684\u6570\u636e\u7ed3\u6784\u3002\u76f8\u5f53\u4e8eAPI spec\u4f9d\u8d56\u4e86Layotto\u7684\u5b9e\u73b0\uff0c\u9664\u975e\u6211\u4eec\u80fd\u628a\u5fc3\u8df3\u5b9e\u73b0\u4e5f\u6807\u51c6\u5316\u6389\uff08\u5305\u62ec\u95f4\u9694\u3001\u8fd4\u56de\u7684\u6570\u636e\u7ed3\u6784\u7b49\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u5fc3\u8df3\u68c0\u6d4b\u5931\u8d25\u4e00\u6b21\uff0csidecar\u662f\u5426\u7ee7\u7eed\u7eed\u79df\uff1f\u5982\u679csidecar\u505c\u6b62\u7eed\u79df\u4e86\uff0c\u4e0b\u4e00\u6b21\u5fc3\u8df3\u68c0\u6d4b\u53c8\u6b63\u5e38\u4e86\uff0csidecar\u662f\u5426\u6062\u590d\u7eed\u79df\uff1f\u6bd4\u8f83\u96be\u754c\u5b9a\uff0c\u56e0\u4e3a\u5fc3\u8df3\u68c0\u6d4b\u4f1a\u6709\u4e2a\u6000\u7591\u673a\u5236\uff08\u6bd4\u5982\u5fc3\u8df3\u5931\u8d25\u51e0\u6b21\u624d\u7b97\u5931\u8d25\uff09\uff0c\u7b49\u6000\u7591\u671f\u6ee1\u518d\u505c\u6b62\u7eed\u79df\u592a\u6162\u4e86\uff0c\u6fc0\u8fdb\u505c\u6b62\u7eed\u79df\u53c8\u4f1a\u6709\u53cd\u590d\u95ee\u9898"}),"\n",(0,i.jsx)(n.li,{children:"app\u5fc3\u8df3\u505c\u4e86\u4e00\u6b21\u3001\u540e\u9762\u53c8\u6062\u590d\u7684\u573a\u666f\uff0csidecar\u5982\u679c\u7ee7\u7eed\u7eed\u79df\uff0c\u600e\u4e48\u77e5\u9053app\u7684\u9501\u8fd8\u5728\u4e0d\u5728\uff08app\u53ef\u80fd\u53ea\u662f\u77ed\u65f6\u95f4\u7f51\u7edc\u6296\u52a8\u3001\u7136\u540e\u6062\u590d\u4e86\uff0c\u4e5f\u53ef\u80fd\u662f\u5e72\u8106\u91cd\u542f\u4e86\u6ca1\u9501\u4e86\uff09"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"solution-c\u81ea\u5df1\u91cd\u8bd5unlock",children:["Solution C",":app","\u81ea\u5df1\u91cd\u8bd5unlock"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679cunlock\u5931\u8d25\uff0capp\u81ea\u5df1\u5f02\u6b65\u91cd\u8bd5unlock"}),"\n",(0,i.jsx)(n.h4,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u5927\u5bb6\u5bf9\u7eed\u79df\u65b9\u6848\u6709\u4e0d\u540c\u610f\u89c1\uff0c\u4e00\u671f\u5148\u4e0d\u5b9e\u73b0\u7eed\u79df\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e2a\u4eba\u503e\u5411A\u65b9\u6848,sdk\u5c4f\u853d\u6389\u7eed\u79df\u903b\u8f91\u3002\u867d\u7136\u7528grpc\u76f4\u63a5\u8c03\u9700\u8981\u5904\u7406\u7eed\u79df\u903b\u8f91\uff0c\u4f46\u662f\u7eed\u79df\u7b97\u662f\u5206\u5e03\u5f0f\u9501\u5e38\u7528\u65b9\u6848\uff0c\u5f00\u53d1\u8005\u7684\u7406\u89e3\u6210\u672c\u4f4e\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u629b\u51fa\u6765\u770b\u5927\u5bb6\u610f\u89c1"}),"\n",(0,i.jsx)(n.h2,{id:"22-\u7ec4\u4ef6",children:"2.2. \u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.h3,{id:"221-\u5982\u4f55\u5904\u7406\u7ec4\u4ef6\u4e0d\u652f\u6301\u67d0\u4e2afeature-option",children:"2.2.1. \u5982\u4f55\u5904\u7406\u201c\u7ec4\u4ef6\u4e0d\u652f\u6301\u67d0\u4e2afeature option\u201d"}),"\n",(0,i.jsx)(n.p,{children:"\u6a21\u62df>\u8fd0\u884c\u62a5\u9519>ignore"}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u6b8a\u60c5\u51b5\u624dignore\uff0c\u6bd4\u5982consistency\u4f20\u4e86\u662feventual consistency,\u4f46\u662f\u5b58\u50a8\u7cfb\u7edf\u672c\u8eab\u662f\u5f3a\u4e00\u81f4\u7684\uff0c\u53ef\u4ee5ignore\u8fd9\u4e2aoption"}),"\n",(0,i.jsx)(n.h3,{id:"222-\u5982\u4f55\u5904\u7406\u7ec4\u4ef6\u4e0d\u652f\u6301\u67d0\u4e2aapi",children:"2.2.2. \u5982\u4f55\u5904\u7406\u201c\u7ec4\u4ef6\u4e0d\u652f\u6301\u67d0\u4e2aAPI\u201d"}),"\n",(0,i.jsx)(n.p,{children:"\u6a21\u62df>\u8fd0\u884c\u62a5\u9519"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e8b\u52a1API\u4e3e\u4f8b"}),"\n",(0,i.jsx)(n.h3,{id:"223-\u9009\u578b",children:"2.2.3. \u9009\u578b"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u671f\u9009\u62e9\u5355\u673aredis\u5b9e\u73b0"}),"\n",(0,i.jsx)(n.h3,{id:"224-\u8fd0\u884c\u65f6\u62a5\u9519\u5f0f\u8bbe\u8ba1\u4f1a\u7834\u574f\u53ef\u79fb\u690d\u6027\u5982\u4f55\u8ba9\u7528\u6237\u66f4\u7b80\u5355\u7684\u8bc4\u4f30\u80fd\u5426\u79fb\u690d",children:'2.2.4. "\u8fd0\u884c\u65f6\u62a5\u9519"\u5f0f\u8bbe\u8ba1\u4f1a\u7834\u574f\u53ef\u79fb\u690d\u6027\uff0c\u5982\u4f55\u8ba9\u7528\u6237\u66f4\u7b80\u5355\u7684\u8bc4\u4f30\u80fd\u5426\u79fb\u690d\uff1f'}),"\n",(0,i.jsx)(n.p,{children:"A. \u63d0\u4f9b\u6587\u6863\uff0c\u6587\u6863\u4e0a\u6bcf\u79cd\u7ec4\u4ef6\u7ed9\u7684\u4fdd\u8bc1\u3001feature\u4e0d\u540c\uff0c\u8ba9\u7528\u6237\u81ea\u5df1\u8bc4\u4f30"}),"\n",(0,i.jsx)(n.p,{children:"B. \u5728sidecar\u7684\u914d\u7f6e\u91cc\u58f0\u660eAPI\u652f\u6301\u7684feature option,\u5982\u679csidecar\u542f\u52a8\u53d1\u73b0\u7ec4\u4ef6\u4e0dmatch\uff0c\u542f\u52a8\u65f6\u62a5\u9519"}),"\n",(0,i.jsx)(n.p,{children:"C. sidecar\u6253\u8fd0\u884c\u65f6\u65e5\u5fd7\uff0c\u81ea\u52a8\u7edf\u8ba1app\u7528\u4e86\u54ea\u4e9bfeature\uff0c\u5f85\u9700\u8981\u79fb\u690d\u65f6\u8fdb\u884c\u65e5\u5fd7\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"D. \u5148\u4e0d\u7ba1"}),"\n",(0,i.jsx)(n.p,{children:"E. \u505a\u4e00\u4e2a\u9759\u6001\u5206\u6790\u5de5\u5177\uff0c\u81ea\u52a8\u5206\u6790\u53ef\u79fb\u690d\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u7ed3\u8bba\uff1a\u9009A\uff0c\u56e0\u4e3a\u7b80\u5355"}),"\n",(0,i.jsx)(n.h1,{id:"3-future-work",children:"3. Future work"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u91cd\u5165"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f1a\u6709\u4e00\u4e9b\u8ba1\u6570\u903b\u8f91\u3002\u9700\u8981\u8003\u8651\u662f\u6240\u6709\u9501\u9ed8\u8ba4\u652f\u6301\u53ef\u91cd\u5165\uff0c\u8fd8\u662f\u4f20\u53c2\u91cc\u9762\u52a0\u4e2afeature option\u3001\u6807\u8bc6\u7528\u6237\u9700\u8981\u53ef\u91cd\u5165"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u963b\u585e\u9501"}),"\n",(0,i.jsx)(n.li,{children:"sequencer"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"4-reference",children:"4. Reference"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html",children:"How to do distributed locking"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://static.googleusercontent.com/media/research.google.com/zh-TW//archive/chubby-osdi06.pdf",children:"The Chubby lock service for loosely-coupled distributed systems"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.jianshu.com/p/6e72e3ee5623",children:"https://www.jianshu.com/p/6e72e3ee5623"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://zhangtielei.com/posts/blog-redlock-reasoning.html",children:"http://zhangtielei.com/posts/blog-redlock-reasoning.html"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://zhangtielei.com/posts/blog-redlock-reasoning-part2.html",children:"http://zhangtielei.com/posts/blog-redlock-reasoning-part2.html"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(6540);const r={},c=i.createContext(r);function t(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);