"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[6853],{4333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var s=n(4848),a=n(8453);const l={},d="\u4f7f\u7528\u5de5\u5177\u81ea\u52a8\u6d4b\u8bd5 Quickstart \u6587\u6863",c={id:"development/test-quickstart",title:"\u4f7f\u7528\u5de5\u5177\u81ea\u52a8\u6d4b\u8bd5 Quickstart \u6587\u6863",description:"Quickstart \u662f\u9879\u76ee\u7684\u95e8\u9762, \u5982\u679c\u65b0\u7528\u6237\u8fdb\u5165\u4ed3\u5e93\u540e\uff0c\u53d1\u73b0 Quickstart \u6587\u6863\u8dd1\u4e0d\u8d77\u6765\uff0c\u53ef\u80fd\u4f1a\u5931\u671b\u7684\u8d70\u6389\u3002",source:"@site/docs/development/test-quickstart.md",sourceDirName:"development",slug:"/development/test-quickstart",permalink:"/layotto/docs/development/test-quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/development/test-quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u6587\u6863\u8d21\u732e\u6307\u5357",permalink:"/layotto/docs/development/contributing-doc"},next:{title:"\u7ec4\u4ef6\u5f00\u53d1\u6307\u5357",permalink:"/layotto/docs/development/developing-component"}},r={},i=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"step 1. \u5b89\u88c5 <code>mdx</code>",id:"step-1-\u5b89\u88c5-mdx",level:2},{value:"step 2. \u5173\u95ed\u672c\u5730\u53ef\u80fd\u5bfc\u81f4\u51b2\u7a81\u7684\u8f6f\u4ef6",id:"step-2-\u5173\u95ed\u672c\u5730\u53ef\u80fd\u5bfc\u81f4\u51b2\u7a81\u7684\u8f6f\u4ef6",level:2},{value:"step 3. \u8fd0\u884c\u6587\u6863",id:"step-3-\u8fd0\u884c\u6587\u6863",level:2},{value:"step 4. \u62a5\u9519\u4e86\uff1f\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1\uff0c\u4f18\u5316\u4f60\u7684\u6587\u6863\u5427\uff01",id:"step-4-\u62a5\u9519\u4e86\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1\u4f18\u5316\u4f60\u7684\u6587\u6863\u5427",level:2},{value:"Q: \u5982\u4f55\u7f16\u5199\u5177\u6709&quot;\u53ef\u6d4b\u8bd5\u6027&quot;\u7684\u6587\u6863",id:"q-\u5982\u4f55\u7f16\u5199\u5177\u6709\u53ef\u6d4b\u8bd5\u6027\u7684\u6587\u6863",level:3},{value:"demo \u4ee3\u7801\u5e94\u8be5\u5728\u4e0d\u7b26\u5408\u9884\u671f\u65f6 panic",id:"demo-\u4ee3\u7801\u5e94\u8be5\u5728\u4e0d\u7b26\u5408\u9884\u671f\u65f6-panic",level:4},{value:"\u6700\u597d\u5728\u6587\u6863\u7ed3\u5c3e\u5220\u9664\u5bb9\u5668\u3001\u91ca\u653e\u8d44\u6e90",id:"\u6700\u597d\u5728\u6587\u6863\u7ed3\u5c3e\u5220\u9664\u5bb9\u5668\u91ca\u653e\u8d44\u6e90",level:4},{value:"\u4e0d\u60f3\u8ba9\u67d0\u6761\u547d\u4ee4\u88ab\u6267\u884c\uff0c\u600e\u4e48\u529e?",id:"\u4e0d\u60f3\u8ba9\u67d0\u6761\u547d\u4ee4\u88ab\u6267\u884c\u600e\u4e48\u529e",level:4},{value:"\u67d0\u6761 shell \u547d\u4ee4\u4f1a hang \u4f4f\u3001\u5f71\u54cd\u6d4b\u8bd5\uff0c\u600e\u4e48\u529e?",id:"\u67d0\u6761-shell-\u547d\u4ee4\u4f1a-hang-\u4f4f\u5f71\u54cd\u6d4b\u8bd5\u600e\u4e48\u529e",level:4},{value:"\u89e3\u51b3\u65b9\u68481:",id:"\u89e3\u51b3\u65b9\u68481",level:5},{value:"\u89e3\u51b3\u65b9\u68482:",id:"\u89e3\u51b3\u65b9\u68482",level:5},{value:"\u89e3\u51b3\u65b9\u68481.",id:"\u89e3\u51b3\u65b9\u68481-1",level:5},{value:"\u89e3\u51b3\u65b9\u68482.",id:"\u89e3\u51b3\u65b9\u68482-1",level:5},{value:"\u5176\u4ed6 markdown \u6ce8\u89e3",id:"\u5176\u4ed6-markdown-\u6ce8\u89e3",level:3},{value:"\u4fee\u590d\u62a5\u9519\uff0c\u770b\u770b\u6548\u679c\u5427!",id:"\u4fee\u590d\u62a5\u9519\u770b\u770b\u6548\u679c\u5427",level:3},{value:"step 5. \u4fee\u6539 CI,\u81ea\u52a8\u6d4b\u8bd5\u65b0\u5199\u7684 quickstart \u6587\u6863",id:"step-5-\u4fee\u6539-ci\u81ea\u52a8\u6d4b\u8bd5\u65b0\u5199\u7684-quickstart-\u6587\u6863",level:2}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u4f7f\u7528\u5de5\u5177\u81ea\u52a8\u6d4b\u8bd5-quickstart-\u6587\u6863",children:"\u4f7f\u7528\u5de5\u5177\u81ea\u52a8\u6d4b\u8bd5 Quickstart \u6587\u6863"}),"\n",(0,s.jsx)(t.p,{children:"Quickstart \u662f\u9879\u76ee\u7684\u95e8\u9762, \u5982\u679c\u65b0\u7528\u6237\u8fdb\u5165\u4ed3\u5e93\u540e\uff0c\u53d1\u73b0 Quickstart \u6587\u6863\u8dd1\u4e0d\u8d77\u6765\uff0c\u53ef\u80fd\u4f1a\u5931\u671b\u7684\u8d70\u6389\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u6240\u4ee5\u6211\u4eec\u8981\u7ecf\u5e38\u6027\u7684\u6d4b\u8bd5 Quickstart, \u4fdd\u8bc1\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u4f46\u662f\u2026\u2026\u5b9a\u671f\u624b\u52a8\u6d4b\u8bd5 Quickstart\u3001\u4fee\u590d\u6587\u6863\u4e2d\u7684\u5f02\u5e38\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5b9e\u5728\u592a\u82b1\u65f6\u95f4\u4e86\uff1a"}),"\n",(0,s.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*fTI5RbfAK3gAAAAAAAAAAAAAARQnAQ",width:"30%",height:"30%"}),"\n",(0,s.jsx)(t.p,{children:"\u70e6\u6b7b\u4e86\uff01"}),"\n",(0,s.jsx)(t.p,{children:"\u6211\u4eec\u7528\u5de5\u5177\u81ea\u52a8\u6d4b\u8bd5\u6587\u6863\u5427\uff01"}),"\n",(0,s.jsx)(t.h2,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,s.jsx)(t.p,{children:"\u7528\u5de5\u5177\u6309\u987a\u5e8f\u6267\u884c markdown \u6587\u6863\u91cc\u7684\u6240\u6709 shell \u811a\u672c, \u5373, \u6240\u6709\u7528"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:"```shell\n```\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5305\u88f9\u8d77\u6765\u7684\u811a\u672c\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u6ce8\u610f\uff0c\u4e0d\u4f1a\u6267\u884c\u7528"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:"```bash\n```\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5305\u88f9\u8d77\u6765\u7684\u811a\u672c\u54e6\u3002"}),"\n",(0,s.jsxs)(t.h2,{id:"step-1-\u5b89\u88c5-mdx",children:["step 1. \u5b89\u88c5 ",(0,s.jsx)(t.code,{children:"mdx"})]}),"\n",(0,s.jsxs)(t.p,{children:["\u89c1 ",(0,s.jsx)(t.a,{href:"https://github.com/seeflood/mdx#installation",children:"https://github.com/seeflood/mdx#installation"})]}),"\n",(0,s.jsx)(t.h2,{id:"step-2-\u5173\u95ed\u672c\u5730\u53ef\u80fd\u5bfc\u81f4\u51b2\u7a81\u7684\u8f6f\u4ef6",children:"step 2. \u5173\u95ed\u672c\u5730\u53ef\u80fd\u5bfc\u81f4\u51b2\u7a81\u7684\u8f6f\u4ef6"}),"\n",(0,s.jsx)(t.p,{children:"\u5173\u95ed\u672c\u5730\u7684 Layotto, \u907f\u514d\u8fd0\u884c\u6587\u6863\u65f6\u51fa\u73b0\u7aef\u53e3\u51b2\u7a81\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u540c\u6837\u7684\uff0c\u5982\u679c\u6587\u6863\u4e2d\u4f1a\u7528 Docker \u542f\u52a8 redis \u4e4b\u7c7b\u7684\u5bb9\u5668\uff0c\u60a8\u9700\u8981\u5148\u5173\u95ed\u3001\u5220\u9664\u53ef\u80fd\u5bfc\u81f4\u7aef\u53e3\u51b2\u7a81\u3001\u5bb9\u5668\u540d\u51b2\u7a81\u7684\u5bb9\u5668\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"step-3-\u8fd0\u884c\u6587\u6863",children:"step 3. \u8fd0\u884c\u6587\u6863"}),"\n",(0,s.jsx)(t.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8fd0\u884c state API \u7684 Quickstart \u6587\u6863:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"mdx docs/en/start/state/start.md \n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-4-\u62a5\u9519\u4e86\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1\u4f18\u5316\u4f60\u7684\u6587\u6863\u5427",children:"step 4. \u62a5\u9519\u4e86\uff1f\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1\uff0c\u4f18\u5316\u4f60\u7684\u6587\u6863\u5427\uff01"}),"\n",(0,s.jsx)(t.p,{children:"\u53ef\u4ee5\u628a\u6bcf\u4e2a\u6587\u6863\u770b\u6210\u4e00\u4e2a UT,\u5b83\u5e94\u8be5\u6709\u51c6\u5907\u3001\u6267\u884c\u3001\u9a8c\u8bc1\u3001\u91ca\u653e\u8d44\u6e90 4\u4e2a\u9636\u6bb5\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5982\u679c\u6587\u6863\u8fd0\u884c\u62a5\u9519\u4e86\uff0c\u8bf4\u660e\u8fd9\u4e2a case \u9700\u8981\u4f18\u5316\u4e00\u4e0b\u3002"}),"\n",(0,s.jsx)(t.p,{children:'\u8fd9\u4e5f\u662f"\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1"\u7684\u601d\u60f3\uff0c\u4f18\u5316\u6587\u6863\uff0c\u8ba9\u6587\u6863\u5177\u6709"\u53ef\u6d4b\u8bd5\u6027"\u5427\u3002'}),"\n",(0,s.jsx)(t.p,{children:"\u6bd4\u5982\uff0c\u6211\u8fd0\u884c state API \u7684 Quickstart \u6587\u6863\uff0c\u53d1\u73b0\u62a5\u9519:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"SaveState succeeded.key:key1 , value: hello world \nGetState succeeded.[key:key1 etag:1]: hello world\nSaveBulkState succeeded.[key:key1 etag:2]: hello world\nSaveBulkState succeeded.[key:key2 etag:2]: hello world\nGetBulkState succeeded.key:key2 ,value:hello world ,etag:1 ,metadata:map[] \nGetBulkState succeeded.key:key1 ,value:hello world ,etag:2 ,metadata:map[] \nGetBulkState succeeded.key:key3 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key4 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key5 ,value: ,etag: ,metadata:map[] \npanic: error deleting state: rpc error: code = Aborted desc = failed deleting state with key key1: possible etag mismatch. error from state store: ERR Error running script (call to f_9b5da7354cb61e2ca9faff50f6c43b81c73c0b94): @user_script:1: user_script:1: failed to delete key1\n\ngoroutine 1 [running]:\nmain.testDelete(0x16bc760, 0xc0000ac000, 0x16c56a0, 0xc0000b90e0, 0x15f30e1, 0x5, 0x15f2539, 0x4)\n        /Users/qunli/projects/layotto/demo/state/redis/client.go:73 +0x13d\nmain.main()\n        /Users/qunli/projects/layotto/demo/state/redis/client.go:57 +0x2f4\nexit status 2\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u7ecf\u8fc7\u4e00\u987f\u6392\u67e5\uff0c\u53d1\u73b0\u662f demo client \u5728\u5220\u9664\u6307\u5b9a key \u65f6\u6ca1\u6709\u4f20 ",(0,s.jsx)(t.code,{children:"etag"})," \u5b57\u6bb5\uff0c\u5bfc\u81f4 demo \u8fd0\u884c\u51fa\u73b0\u5f02\u5e38\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u770b\uff0c\u901a\u8fc7\u81ea\u52a8\u6d4b\u8bd5\u6587\u6863\uff0c\u6211\u4eec\u53d1\u73b0\u4e86\u4e00\u4f8b Quickstart bug :)"}),"\n",(0,s.jsx)(t.h3,{id:"q-\u5982\u4f55\u7f16\u5199\u5177\u6709\u53ef\u6d4b\u8bd5\u6027\u7684\u6587\u6863",children:'Q: \u5982\u4f55\u7f16\u5199\u5177\u6709"\u53ef\u6d4b\u8bd5\u6027"\u7684\u6587\u6863'}),"\n",(0,s.jsx)(t.p,{children:"\u6ce8: \u60a8\u53ef\u4ee5\u53c2\u8003\u80fd\u8dd1\u901a\u6d4b\u8bd5\u7684\u793a\u4f8b\u6587\u6863\uff1a docs/en/start/state/start.md"}),"\n",(0,s.jsx)(t.p,{children:"\u4ee5\u4e0b\u89e3\u91ca\u4e00\u4e9b\u5e38\u89c1\u7ec6\u8282\uff1a"}),"\n",(0,s.jsx)(t.h4,{id:"demo-\u4ee3\u7801\u5e94\u8be5\u5728\u4e0d\u7b26\u5408\u9884\u671f\u65f6-panic",children:"demo \u4ee3\u7801\u5e94\u8be5\u5728\u4e0d\u7b26\u5408\u9884\u671f\u65f6 panic"}),"\n",(0,s.jsxs)(t.p,{children:["\u6bd4\u5982\uff0c",(0,s.jsx)(t.code,{children:"demo/state/redis/client.go"})," \u8fd9\u4e2a demo \u91cc\uff0c\u5982\u679c\u8c03\u7528 Layotto \u65f6\u51fa\u73b0 error, \u5e94\u8be5\u76f4\u63a5 panic:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"if err := cli.SaveBulkState(ctx, store, item, &item2); err != nil {\n\tpanic(err)\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u9664\u4e86\u5224\u65ad error \u5916\uff0cdemo \u8fd8\u5e94\u8be5\u6821\u9a8c\u6d4b\u8bd5\u7ed3\u679c\uff0c\u5982\u679c\u4e0d\u7b26\u5408\u9884\u671f\u5219\u76f4\u63a5 panic\u3002\u8fd9\u5c31\u76f8\u5f53\u4e8e UT \u91cc\uff0c\u8c03\u7528\u4e86\u67d0\u4e2a\u65b9\u6cd5\u540e\uff0c\u9700\u8981\u5bf9\u8c03\u7528\u7ed3\u679c\u505a\u6821\u9a8c\u3002"}),"\n",(0,s.jsx)(t.p,{children:'\u8fd9\u6837\u7684\u597d\u5904\u662f\uff1a\u4e00\u4f46 Quickstart \u4e0d\u7b26\u5408\u9884\u671f\uff0cdemo \u5c31\u4f1a\u5f02\u5e38\u9000\u51fa\uff0c\u8ba9\u81ea\u52a8\u5316\u5de5\u5177\u80fd\u591f\u53d1\u73b0"\u6d4b\u8bd5\u5931\u8d25\u4e86\uff01\u5feb\u627e\u4eba\u6765\u4fee\uff01"'}),"\n",(0,s.jsx)(t.h4,{id:"\u6700\u597d\u5728\u6587\u6863\u7ed3\u5c3e\u5220\u9664\u5bb9\u5668\u91ca\u653e\u8d44\u6e90",children:"\u6700\u597d\u5728\u6587\u6863\u7ed3\u5c3e\u5220\u9664\u5bb9\u5668\u3001\u91ca\u653e\u8d44\u6e90"}),"\n",(0,s.jsx)(t.p,{children:'\u5199 UT \u65f6\uff0c\u6211\u4eec\u4f1a\u5728\u6700\u540e\u9636\u6bb5\u505a\u91ca\u653e\u8d44\u6e90\u3001\u6062\u590d Mock \u4e4b\u7c7b\u7684\u4e8b\u60c5\uff1b\u4e3a\u4e86\u8ba9\u6587\u6863\u5177\u6709"\u53ef\u6d4b\u8bd5\u6027"\uff0c\u4e5f\u8981\u505a\u7c7b\u4f3c\u7684\u4e8b\u60c5\u3002'}),"\n",(0,s.jsx)(t.p,{children:"\u4f8b\u5982\u5728\u6587\u6863\u6700\u540e\u5220\u9664 redis Docker \u5bb9\u5668\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"docker rm -f redis-test\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u6ce8: Layotto \u7684 github workflow \u6bcf\u6b21\u6267\u884c\u4e00\u4e2a md \u4e4b\u540e\uff0c\u4f1a\u5220\u9664\u6240\u6709\u5bb9\u5668\u3001\u5173\u95ed layotto,etcd \u7b49\u5e94\u7528\u3002\n\u6240\u4ee5\u5373\u4f7f\u6587\u6863\u91cc\u4e0d\u5220\u9664\u5bb9\u5668\uff0c\u4e5f\u4e0d\u5f71\u54cd github workflow \u8dd1\u6d4b\u8bd5\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"\u4e0d\u60f3\u8ba9\u67d0\u6761\u547d\u4ee4\u88ab\u6267\u884c\u600e\u4e48\u529e",children:"\u4e0d\u60f3\u8ba9\u67d0\u6761\u547d\u4ee4\u88ab\u6267\u884c\uff0c\u600e\u4e48\u529e?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"mdx"})," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u4f1a\u6267\u884c shell \u4ee3\u7801\u5757\uff0c\u5373\u8fd9\u4e48\u5199\u7684\u4ee3\u7801\u5757\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"```shell\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5982\u679c\u4e0d\u5e0c\u671b\u67d0\u4e2a\u4ee3\u7801\u5757\u88ab\u6267\u884c\uff0c\u53ef\u4ee5\u628a shell \u6539\u6210\u522b\u7684\uff0c\u6bd4\u5982:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"```bash\n"})}),"\n",(0,s.jsx)(t.h4,{id:"\u67d0\u6761-shell-\u547d\u4ee4\u4f1a-hang-\u4f4f\u5f71\u54cd\u6d4b\u8bd5\u600e\u4e48\u529e",children:"\u67d0\u6761 shell \u547d\u4ee4\u4f1a hang \u4f4f\u3001\u5f71\u54cd\u6d4b\u8bd5\uff0c\u600e\u4e48\u529e?"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd8\u662f\u4ee5 docs/en/start/state/start.md \u4e3a\u4f8b\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5176\u4e2d\u6709\u4e00\u6bb5\u811a\u672c\u4f1a\u8fd0\u884c Layotto, \u4f46\u662f\u5982\u679c\u8fd0\u884c\u5b83\u5c31\u4f1a hang \u4f4f\uff0c\u5bfc\u81f4\u6d4b\u8bd5\u5de5\u5177\u6ca1\u6cd5\u7ee7\u7eed\u8fd0\u884c\u4e0b\u4e00\u6761\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"./layotto start -c ../../configs/config_redis.json\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u600e\u4e48\u529e\u5462\uff1f"}),"\n",(0,s.jsx)(t.h5,{id:"\u89e3\u51b3\u65b9\u68481",children:"\u89e3\u51b3\u65b9\u68481:"}),"\n",(0,s.jsxs)(t.p,{children:["\u7528 @background \u6ce8\u89e3\uff0c\u89c1 ",(0,s.jsx)(t.a,{href:"https://github.com/seeflood/mdx#background",children:"https://github.com/seeflood/mdx#background"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"```shell @background\n./layotto start -c ../../configs/config_standalone.json\n```\n"})}),"\n",(0,s.jsx)(t.h5,{id:"\u89e3\u51b3\u65b9\u68482",children:"\u89e3\u51b3\u65b9\u68482:"}),"\n",(0,s.jsxs)(t.p,{children:['\u4e0d\u8fd0\u884c\u8fd9\u6bb5\u811a\u672c\uff0c\u52a0\u4e00\u6bb5"\u4ee5\u540e\u53f0\u65b9\u5f0f\u8fd0\u884c Layotto" \u7684"\u9690\u85cf\u811a\u672c"\uff0c\u8fd9\u6bb5\u9690\u85cf\u811a\u672c\u7528\u6ce8\u91ca\u5305\u88f9\u4f4f\uff0c\u6240\u4ee5\u4e0d\u4f1a\u88ab\u9605\u8bfb\u6587\u6863\u7684\u4eba\u770b\u5230\uff0c\u4f46\u662f',(0,s.jsx)(t.code,{children:"mdx"})," \u4f9d\u7136\u4f1a\u8fd0\u884c\u5b83:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"    ```bash\n    ./layotto start -c ../../configs/config_redis.json\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\n#### \u5207\u6362\u76ee\u5f55\u7684\u547d\u4ee4\u600e\u4e48\u5904\u7406?\n\u6211\u4eec\u53ef\u4ee5\u5047\u8bbe\uff0c\u5f53\u524d\u76ee\u5f55\u662f\u9879\u76ee\u6839\u8def\u5f84\u3002\n\n\u90a3\u4e48\u5207\u6362\u8def\u5f84\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a\n\n```bash\n# change directory to ${your project path}/demo/state/redis/\n cd demo/state/redis/\n go run .\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5982\u679c\u4f60\u8fd0\u884c\u4e86\u8fd9\u4e2a\u547d\u4ee4\u540e\uff0c\u60f3\u518d\u56de\u5230\u6839\u8def\u5f84\u600e\u4e48\u529e?"}),"\n",(0,s.jsx)(t.h5,{id:"\u89e3\u51b3\u65b9\u68481-1",children:"\u89e3\u51b3\u65b9\u68481."}),"\n",(0,s.jsxs)(t.p,{children:["\u7528 ",(0,s.jsx)(t.code,{children:"${project_path}"})," \u53d8\u91cf,\u4ee3\u8868\u9879\u76ee\u6839\u8def\u5f84\uff0c\u89c1 ",(0,s.jsx)(t.a,{href:"https://github.com/seeflood/mdx#cd-project_path",children:"https://github.com/seeflood/mdx#cd-project_path"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/demo/state/redis/\n"})}),"\n",(0,s.jsx)(t.h5,{id:"\u89e3\u51b3\u65b9\u68482-1",children:"\u89e3\u51b3\u65b9\u68482."}),"\n",(0,s.jsx)(t.p,{children:"\u52a0\u4e00\u6bb5\u9690\u85cf\u811a\u672c\uff0c\u7528\u6765\u5207\u6362\u76ee\u5f55\u3002\u4f8b\u5982\u8fd9\u4e48\u5199:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# open a new terminal tab\n# change directory to ${your project path}/demo/state/redis/\ncd demo/state/redis/\ngo run .\n"})}),"\n",(0,s.jsx)(t.h3,{id:"\u5176\u4ed6-markdown-\u6ce8\u89e3",children:"\u5176\u4ed6 markdown \u6ce8\u89e3"}),"\n",(0,s.jsxs)(t.p,{children:['mdx \u5de5\u5177\u63d0\u4f9b\u4e86\u5f88\u591a"markdown \u6ce8\u89e3"\uff0c\u5e2e\u52a9\u60a8\u7f16\u5199"\u53ef\u4ee5\u8fd0\u884c\u7684 markdown \u6587\u4ef6"\u3002\u611f\u5174\u8da3\u53ef\u4ee5\u67e5\u770b',(0,s.jsx)(t.a,{href:"https://github.com/seeflood/mdx#usage",children:"mdx\u6587\u6863"})]}),"\n",(0,s.jsx)(t.h3,{id:"\u4fee\u590d\u62a5\u9519\u770b\u770b\u6548\u679c\u5427",children:"\u4fee\u590d\u62a5\u9519\uff0c\u770b\u770b\u6548\u679c\u5427!"}),"\n",(0,s.jsx)(t.p,{children:"\u7ecf\u8fc7\u4e00\u987f\u4fee\u590d\uff0c\u6211\u518d\u6b21\u8fd0\u884c\u6587\u6863:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"mdx docs/en/start/state/start.md\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u6587\u6863\u4e0d\u62a5\u9519\u4e86\uff0c\u80fd\u6b63\u5e38\u8fd0\u884c\u5e76\u9000\u51fa:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"admindeMacBook-Pro-2:layotto qunli$ mdx docs/en/start/state/start.md\nlatest: Pulling from library/redis\nDigest: sha256:69a3ab2516b560690e37197b71bc61ba245aafe4525ebdece1d8a0bc5669e3e2\nStatus: Image is up to date for redis:latest\ndocker.io/library/redis:latest\nREPOSITORY                     TAG         IMAGE ID       CREATED         SIZE\nredis                          latest      bba24acba395   3 days ago      113MB\npseudomuto/protoc-gen-doc      latest      35472df9ecbb   6 weeks ago     39.5MB\napache/skywalking-oap-server   8.0.1-es7   887769fd3bf6   21 months ago   191MB\napache/skywalking-ui           8.0.1       42b3b496616e   21 months ago   127MB\n5835d4652c057ce7ea109564c3e36351335ec53c3dedb02650f2056d3cc3edd5\nappending output to nohup.out\nruntime client initializing for: 127.0.0.1:34904\nSaveState succeeded.key:key1 , value: hello world \nGetState succeeded.[key:key1 etag:1]: hello world\nSaveBulkState succeeded.[key:key1 etag:2]: hello world\nSaveBulkState succeeded.[key:key2 etag:2]: hello world\nGetBulkState succeeded.key:key1 ,value:hello world ,etag:2 ,metadata:map[] \nGetBulkState succeeded.key:key4 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key3 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key5 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key2 ,value:hello world ,etag:1 ,metadata:map[] \nDeleteState succeeded.key:key1\nDeleteState succeeded.key:key2\nredis-test\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-5-\u4fee\u6539-ci\u81ea\u52a8\u6d4b\u8bd5\u65b0\u5199\u7684-quickstart-\u6587\u6863",children:"step 5. \u4fee\u6539 CI,\u81ea\u52a8\u6d4b\u8bd5\u65b0\u5199\u7684 quickstart \u6587\u6863"}),"\n",(0,s.jsx)(t.p,{children:'\u5982\u679c\u60a8\u65b0\u5199\u4e86\u4e00\u7bc7 quickstart \u6587\u6863, \u5e76\u4e14\u81ea\u6d4b\u80fd\u6b63\u5e38\u8fd0\u884c\uff0c\u4e0b\u4e00\u6b65\u53ef\u4ee5\u4fee\u6539 CI\uff0c\u5b9e\u73b0"\u6bcf\u6b21\u6709\u4eba\u63d0 Pull request \u65f6\uff0c\u5de5\u5177\u81ea\u52a8\u6d4b\u8bd5\u8fd9\u7bc7 quickstart \u6587\u6863\u80fd\u8dd1\u901a"\u3002'}),"\n",(0,s.jsx)(t.p,{children:"\u4fee\u6539\u65b9\u6cd5\u662f\uff1a"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u4fee\u6539\u811a\u672c ",(0,s.jsx)(t.code,{children:"etc/script/test-quickstart.sh"}),"\uff0c\u628a\u60a8\u7684\u6587\u6863\u6dfb\u52a0\u5230\u5176\u4e2d:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*ZPRlRa7a-0QAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:'\u5982\u679c\u9700\u8981\u5728\u6587\u6863\u8fd0\u884c\u524d\u3001\u8fd0\u884c\u540e\u81ea\u52a8\u91ca\u653e\u4e00\u4e9b\u8d44\u6e90\uff08\u6bd4\u5982\u81ea\u52a8 kill \u8fdb\u7a0b\u3001\u5220\u9664 docker \u5bb9\u5668\uff09\uff0c\u53ef\u4ee5\u5728\u811a\u672c\u91cc\u6dfb\u52a0\u8981\u91ca\u653e\u7684\u8d44\u6e90\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u60f3\u5b9e\u73b0"\u6bcf\u6b21\u8fd0\u884c\u5b8c\u4e00\u7bc7\u6587\u6863\u540e\uff0c\u81ea\u52a8 kill etcd \u8fdb\u7a0b"\uff0c\u53ef\u4ee5\u5728\u811a\u672c\u4e2d\u6dfb\u52a0:'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*0th0Q7yn5MIAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"\u5b8c\u6210\u4e0a\u8ff0\u6539\u52a8\u540e\uff0c\u5c31\u53ef\u4ee5\u6d4b\u8bd5\u65b0\u7684 CI \u4e86\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"make style.quickstart\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u4f1a\u6d4b\u8bd5\u8fd9\u4e9b\u6587\u6863:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*I7LRSryXwWYAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["[!TIP|label: \u672c\u5730\u8fd0\u884c\u9700\u8c28\u614e\uff0c\u8be5\u811a\u672c\u4f1a\u5220\u9664\u4e00\u4e9b docker \u5bb9\u5668]\n\u8be5\u547d\u4ee4\u4f1a\u5220\u9664\u5305\u542b\u56fe\u4e2d\u5173\u952e\u5b57\u7684 Docker \u5bb9\u5668\uff0c\u5982\u679c\u60a8\u4e0d\u5e0c\u671b\u5220\u9664\u8fd9\u4e9b\u5bb9\u5668\uff0c\u8fd8\u662f\u4e0d\u8981\u672c\u5730\u8fd0\u884c\u4e86\uff1a\n",(0,s.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*N3CIRb0883kAAAAAAAAAAAAAARQnAQ",alt:""})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u800c\u5982\u679c\u8fd0\u884c:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"make style.quickstart QUICKSTART_VERSION=1.17\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u4f1a\u6d4b\u8bd5\u4ee5\u4e0b\u6587\u6863(\u8fd9\u4e9b\u6587\u6863\u5728 golang 1.17 \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u624d\u80fd\u8fd0\u884c\u6210\u529f):"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*X3F9QJSKq3QAAAAAAAAAAAAAARQnAQ",alt:""})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(6540);const a={},l=s.createContext(a);function d(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);