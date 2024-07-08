"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[3692],{6692:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>A,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var c=s(4848),i=s(8453);const r={},A="\u8682\u8681\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u7684\u63a2\u7d22\u548c\u5b9e\u8df5 - ArchSummit \u4e0a\u6d77",l={permalink:"/layotto/blog/exploration-and-practice-of-antcloud-native-application-runtime-archsummit-shanghai",editUrl:"https://github.com/mosn/layotto/edit/main//blog/exploration-and-practice-of-antcloud-native-application-runtime-archsummit-shanghai.md",source:"@site/blog/exploration-and-practice-of-antcloud-native-application-runtime-archsummit-shanghai.md",title:"\u8682\u8681\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u7684\u63a2\u7d22\u548c\u5b9e\u8df5 - ArchSummit \u4e0a\u6d77",description:"Mesh \u6a21\u5f0f\u7684\u5f15\u5165\u662f\u5b9e\u73b0\u5e94\u7528\u4e91\u539f\u751f\u7684\u5173\u952e\u8def\u5f84\uff0c\u8682\u8681\u96c6\u56e2\u5df2\u5728\u5185\u90e8\u5b9e\u73b0\u5927\u89c4\u6a21\u843d\u5730\u3002\u968f\u7740 Message\u3001DB\u3001Cache Mesh \u7b49\u66f4\u591a\u7684\u4e2d\u95f4\u4ef6\u80fd\u529b\u7684\u4e0b\u6c89\uff0c\u4ece Mesh \u6f14\u8fdb\u800c\u6765\u7684\u5e94\u7528\u8fd0\u884c\u65f6\u5c06\u662f\u4e2d\u95f4\u4ef6\u6280\u672f\u7684\u672a\u6765\u5f62\u6001\u3002\u5e94\u7528\u8fd0\u884c\u65f6\u65e8\u5728\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u7684\u6784\u5efa\u4e91\u539f\u751f\u5e94\u7528\uff0c\u5e2e\u52a9\u5e94\u7528\u548c\u57fa\u7840\u8bbe\u65bd\u8fdb\u4e00\u6b65\u89e3\u8026\uff0c\u800c\u5e94\u7528\u8fd0\u884c\u65f6\u6700\u6838\u5fc3\u662f API \u6807\u51c6\uff0c\u671f\u671b\u793e\u533a\u4e00\u8d77\u5171\u5efa\u3002",date:"2024-07-08T02:21:38.000Z",tags:[],readingTime:21.32,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"\u6e90\u7801\u89e3\u6790 4\u5c42\u6d41\u91cf\u6cbb\u7406\uff0ctcp\u6d41\u91cfdump",permalink:"/layotto/blog/tcpcopy_code_analyze"}},t={authorsImageUrls:[]},h=[{value:"\u8682\u8681\u96c6\u56e2 Mesh \u5316\u4ecb\u7ecd",id:"\u8682\u8681\u96c6\u56e2-mesh-\u5316\u4ecb\u7ecd",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165 Service Mesh",id:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165-service-mesh",level:2},{value:"\u8682\u8681 Mesh \u843d\u5730\u8fc7\u7a0b",id:"\u8682\u8681-mesh-\u843d\u5730\u8fc7\u7a0b",level:2},{value:"\u8682\u8681 Mesh \u843d\u5730\u67b6\u6784",id:"\u8682\u8681-mesh-\u843d\u5730\u67b6\u6784",level:2},{value:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u4e0a\u7684\u63a2\u7d22",id:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u4e0a\u7684\u63a2\u7d22",level:2},{value:"\u8682\u8681\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u67b6\u6784",id:"\u8682\u8681\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u67b6\u6784",level:2},{value:"\u89c4\u5212\u548c\u5c55\u671b",id:"\u89c4\u5212\u548c\u5c55\u671b",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Mesh \u6a21\u5f0f\u7684\u5f15\u5165\u662f\u5b9e\u73b0\u5e94\u7528\u4e91\u539f\u751f\u7684\u5173\u952e\u8def\u5f84\uff0c\u8682\u8681\u96c6\u56e2\u5df2\u5728\u5185\u90e8\u5b9e\u73b0\u5927\u89c4\u6a21\u843d\u5730\u3002\u968f\u7740 Message\u3001DB\u3001Cache Mesh \u7b49\u66f4\u591a\u7684\u4e2d\u95f4\u4ef6\u80fd\u529b\u7684\u4e0b\u6c89\uff0c\u4ece Mesh \u6f14\u8fdb\u800c\u6765\u7684\u5e94\u7528\u8fd0\u884c\u65f6\u5c06\u662f\u4e2d\u95f4\u4ef6\u6280\u672f\u7684\u672a\u6765\u5f62\u6001\u3002\u5e94\u7528\u8fd0\u884c\u65f6\u65e8\u5728\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u7684\u6784\u5efa\u4e91\u539f\u751f\u5e94\u7528\uff0c\u5e2e\u52a9\u5e94\u7528\u548c\u57fa\u7840\u8bbe\u65bd\u8fdb\u4e00\u6b65\u89e3\u8026\uff0c\u800c\u5e94\u7528\u8fd0\u884c\u65f6\u6700\u6838\u5fc3\u662f API \u6807\u51c6\uff0c\u671f\u671b\u793e\u533a\u4e00\u8d77\u5171\u5efa\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*nergRo8-RI0AAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8682\u8681\u96c6\u56e2-mesh-\u5316\u4ecb\u7ecd",children:"\u8682\u8681\u96c6\u56e2 Mesh \u5316\u4ecb\u7ecd"}),"\n",(0,c.jsx)(n.p,{children:"\u8682\u8681\u662f\u4e00\u5bb6\u6280\u672f\u548c\u521b\u65b0\u9a71\u52a8\u7684\u516c\u53f8\uff0c\u4ece\u6700\u65e9\u6dd8\u5b9d\u91cc\u7684\u4e00\u4e2a\u652f\u4ed8\u5e94\u7528\uff0c\u5230\u73b0\u5728\u670d\u52a1\n\u5168\u7403\u5341\u4e8c\u4ebf\u7528\u6237\u7684\u5927\u578b\u516c\u53f8\uff0c\u8682\u8681\u7684\u6280\u672f\u67b6\u6784\u6f14\u8fdb\u5927\u6982\u4f1a\u5206\u4e3a\u5982\u4e0b\u51e0\u4e2a\u9636\u6bb5\uff1a"}),"\n",(0,c.jsx)(n.p,{children:"2006 \u4e4b\u524d\uff0c\u6700\u65e9\u7684\u652f\u4ed8\u5b9d\u5c31\u662f\u4e00\u4e2a\u96c6\u4e2d\u5f0f\u7684\u5355\u4f53\u5e94\u7528\uff0c\u4e0d\u540c\u7684\u4e1a\u52a1\u505a\u4e86\u6a21\u5757\u5316\u7684\u5f00\u53d1\u3002"}),"\n",(0,c.jsx)(n.p,{children:"2007 \u5e74\u7684\u65f6\u5019\uff0c\u968f\u7740\u66f4\u591a\u573a\u666f\u652f\u4ed8\u7684\u63a8\u5e7f\uff0c\u5f00\u59cb\u505a\u4e86\u4e00\u4e0b\u5e94\u7528\u3001\u6570\u636e\u7684\u62c6\u5206\uff0c\u505a\u4e86 SOA \u5316\u7684\u4e00\u4e9b\u6539\u9020\u3002"}),"\n",(0,c.jsx)(n.p,{children:"2010 \u5e74\u4e4b\u540e\uff0c\u63a8\u51fa\u4e86\u5feb\u6377\u652f\u4ed8\uff0c\u79fb\u52a8\u652f\u4ed8\uff0c\u652f\u6491\u53cc\u5341\u4e00\uff0c\u8fd8\u6709\u4f59\u989d\u5b9d\u7b49\u73b0\u8c61\u7ea7\u4ea7\u54c1\uff0c\u7528\u6237\u6570\u5230\u4e86\u4ebf\u8fd9\u4e2a\u7ea7\u522b\uff0c\u8682\u8681\u7684\u5e94\u7528\u6570\u4e5f\u6570\u91cf\u7ea7\u7684\u589e\u957f\uff0c\u8682\u8681\u81ea\u7814\u4e86\u5f88\u591a\u5168\u5957\u7684\u5fae\u670d\u52a1\u4e2d\u95f4\u4ef6\u53bb\u652f\u6491\u8682\u8681\u7684\u4e1a\u52a1\uff1b"}),"\n",(0,c.jsx)(n.p,{children:"2014 \u5e74\uff0c\u50cf\u501f\u5457\u82b1\u5457\u3001\u7ebf\u4e0b\u652f\u4ed8\u3001\u66f4\u591a\u573a\u666f\u66f4\u591a\u4e1a\u52a1\u5f62\u6001\u7684\u51fa\u73b0\uff0c\u5bf9\u8682\u8681\u7684\u53ef\u7528\u6027\u548c\u7a33\u5b9a\u6027\u63d0\u51fa\u66f4\u9ad8\u7684\u8981\u6c42\uff0c\u8682\u8681\u5bf9\u5fae\u670d\u52a1\u4e2d\u95f4\u4ef6\u8fdb\u884c\u4e86 LDC \u5355\u5143\u5316\u7684\u652f\u6301\uff0c\u652f\u6491\u4e1a\u52a1\u7684\u5f02\u5730\u591a\u6d3b\uff0c\u4ee5\u53ca\u4e3a\u4e86\u652f\u6491\u53cc\u5341\u4e00\u8d85\u5927\u6d41\u91cf\u7684\u6df7\u5408\u4e91\u4e0a\u7684\u5f39\u6027\u6269\u7f29\u5bb9\u3002"}),"\n",(0,c.jsx)(n.p,{children:"2018 \u5e74\uff0c\u8682\u8681\u7684\u4e1a\u52a1\u4e0d\u4ec5\u4ec5\u662f\u6570\u5b57\u91d1\u878d\uff0c\u8fd8\u6709\u6570\u5b57\u751f\u6d3b\u3001\u56fd\u9645\u5316\u7b49\u4e00\u4e9b\u65b0\u6218\u7565\u7684\u51fa\u73b0\uff0c\u4fc3\u4f7f\u6211\u4eec\u8981\u6709\u66f4\u52a0\u9ad8\u6548\u7684\u6280\u672f\u67b6\u6784\u80fd\u8ba9\u4e1a\u52a1\u8dd1\u5f97\u66f4\u5feb\u66f4\u7a33\uff0c\u6240\u4ee5\u8682\u8681\u7ed3\u5408\u4e1a\u754c\u6bd4\u8f83\u6d41\u884c\u7684\u4e91\u539f\u751f\u7684\u7406\u5ff5\uff0c\u5728\u5185\u90e8\u8fdb\u884c\u4e86 Service Mesh\u3001Serverless\u3001\u53ef\u4fe1\u539f\u751f\u65b9\u5411\u7684\u4e00\u4e9b\u843d\u5730\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*KCSVTZWSf8wAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u8682\u8681\u7684\u6280\u672f\u67b6\u6784\u4e5f\u662f\u8ddf\u968f\u516c\u53f8\u7684\u4e1a\u52a1\u521b\u65b0\u4e0d\u65ad\u6f14\u8fdb\u7684\uff0c\u524d\u9762\u7684\u4ece\u96c6\u4e2d\u5f0f\u5230 SOA \u518d\u5230\u5fae\u670d\u52a1\u7684\u8fc7\u7a0b\uff0c\u76f8\u4fe1\u641e\u8fc7\u5fae\u670d\u52a1\u7684\u540c\u5b66\u90fd\u6df1\u6709\u4f53\u4f1a\uff0c\u800c\u4ece\u5fae\u670d\u52a1\u5230\u4e91\u539f\u751f\u7684\u5b9e\u8df5\u662f\u8682\u8681\u8fd1\u51e0\u5e74\u81ea\u5df1\u63a2\u7d22\u51fa\u6765\u7684\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165-service-mesh",children:"\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165 Service Mesh"}),"\n",(0,c.jsx)(n.p,{children:"\u8682\u8681\u65e2\u7136\u6709\u4e00\u5957\u5b8c\u6574\u7684\u5fae\u670d\u52a1\u6cbb\u7406\u4e2d\u95f4\u4ef6\uff0c\u90a3\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981\u5f15\u5165 Service Mesh \u5462\uff1f"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*Sq7oR6eO2QAAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u62ff\u8682\u8681\u81ea\u7814\u7684\u670d\u52a1\u6846\u67b6 SOFARPC \u4e3a\u4f8b\uff0c\u5b83\u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u7684 SDK\uff0c\u5305\u542b\u4e86\u670d\u52a1\u53d1\u73b0\u3001\u8def\u7531\u3001\u7194\u65ad\u9650\u6d41\u7b49\u4e00\u7cfb\u5217\u80fd\u529b\u3002\u5728\u4e00\u4e2a\u57fa\u672c\u7684 SOFA(Java) \u5e94\u7528\u91cc\uff0c\u4e1a\u52a1\u4ee3\u7801\u96c6\u6210\u4e86 SOFARPC \u7684 SDK\uff0c\u4e24\u8005\u5728\u4e00\u4e2a\u8fdb\u7a0b\u91cc\u8fd0\u884c\u3002\u5728\u8682\u8681\u7684\u5927\u89c4\u6a21\u843d\u5730\u5fae\u670d\u52a1\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u9762\u4e34\u4e86\u5982\u4e0b\u7684\u4e00\u4e9b\u95ee\u9898\uff1a"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u5347\u7ea7\u6210\u672c\u9ad8"}),"\uff1aSDK \u662f\u9700\u8981\u4e1a\u52a1\u4ee3\u7801\u5f15\u5165\u7684\uff0c\u6bcf\u6b21\u7684\u5347\u7ea7\u90fd\u9700\u8981\u5e94\u7528\u4fee\u6539\u4ee3\u7801\u8fdb\u884c\u53d1\u5e03\u3002\u7531\u4e8e\u5e94\u7528\u89c4\u6a21\u8f83\u5927\uff0c\u5728\u4e00\u4e9b\u5927\u7684\u6280\u672f\u53d8\u66f4\u6216\u8005\u5b89\u5168\u95ee\u9898\u4fee\u590d\u7684\u65f6\u5019\u3002\u6bcf\u6b21\u9700\u8981\u6570\u5343\u4e2a\u5e94\u7528\u4e00\u8d77\u5347\u7ea7\uff0c\u8d39\u65f6\u8d39\u529b\u3002\n",(0,c.jsx)(n.strong,{children:"\u7248\u672c\u788e\u7247\u5316"}),"\uff1a\u7531\u4e8e\u5347\u7ea7\u6210\u672c\u9ad8\uff0cSDK \u7248\u672c\u788e\u7247\u5316\u4e25\u91cd\uff0c\u8fd9\u5c31\u5bfc\u81f4\u6211\u4eec\u5199\u4ee3\u7801\u7684\u65f6\u5019\u9700\u8981\u517c\u5bb9\u5386\u53f2\u903b\u8f91\uff0c\u6574\u4f53\u6280\u672f\u6f14\u8fdb\u56f0\u96be\u3002\n",(0,c.jsx)(n.strong,{children:"\u8de8\u8bed\u8a00\u65e0\u6cd5\u6cbb\u7406"}),"\uff1a\u8682\u8681\u7684\u4e2d\u540e\u53f0\u5728\u7ebf\u5e94\u7528\u5927\u591a\u4f7f\u7528 Java \u4f5c\u4e3a\u6280\u672f\u6808\uff0c\u4f46\u662f\u5728\u524d\u53f0\u3001AI\u3001\u5927\u6570\u636e\u7b49\u9886\u57df\u6709\u5f88\u591a\u7684\u8de8\u8bed\u8a00\u5e94\u7528\uff0c\u4f8b\u5982 C++/Python/Golang \u7b49\u7b49\uff0c\u7531\u4e8e\u6ca1\u6709\u5bf9\u5e94\u8bed\u8a00\u7684 SDK\uff0c\u4ed6\u4eec\u7684\u670d\u52a1\u6cbb\u7406\u80fd\u529b\u5176\u5b9e\u662f\u7f3a\u5931\u7684\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u4eec\u6ce8\u610f\u5230\u4e91\u539f\u751f\u91cc\u6709 Service Mesh \u4e00\u4e9b\u7406\u5ff5\u5f00\u59cb\u51fa\u73b0\uff0c\u6240\u4ee5\u5f00\u59cb\u5f80\u8fd9\u4e2a\u65b9\u5411\u63a2\u7d22\u3002\u5728 Service Mesh \u7684\u7406\u5ff5\u91cc\uff0c\u6709\u4e24\u4e2a\u6982\u5ff5\uff0c\u4e00\u4e2a\u662f Control Plane \u63a7\u5236\u5e73\u9762\uff0c\u4e00\u4e2a\u662f Data Plane \u6570\u636e\u5e73\u9762\u3002\u63a7\u5236\u9762\u8fd9\u91cc\u6682\u65f6\u4e0d\u5c55\u5f00\uff0c\u5176\u4e2d\u6570\u636e\u5e73\u9762\u7684\u6838\u5fc3\u601d\u60f3\u5c31\u662f\u89e3\u8026\uff0c\u5c06\u4e00\u4e9b\u4e1a\u52a1\u65e0\u9700\u5173\u7cfb\u7684\u590d\u6742\u903b\u8f91\uff08\u5982 RPC \u8c03\u7528\u91cc\u7684\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u8def\u7531\u3001\u7194\u65ad\u9650\u6d41\u3001\u5b89\u5168\uff09\u62bd\u8c61\u5230\u4e00\u4e2a\u72ec\u7acb\u8fdb\u7a0b\u91cc\u53bb\u3002\u53ea\u8981\u4fdd\u6301\u4e1a\u52a1\u548c\u72ec\u7acb\u8fdb\u7a0b\u7684\u901a\u4fe1\u534f\u8bae\u4e0d\u53d8\uff0c\u8fd9\u4e9b\u80fd\u529b\u7684\u6f14\u8fdb\u53ef\u4ee5\u8ddf\u968f\u8fd9\u4e2a\u72ec\u7acb\u7684\u8fdb\u7a0b\u81ea\u4e3b\u5347\u7ea7\uff0c\u6574\u4e2a Mesh \u5c31\u53ef\u4ee5\u505a\u5230\u7edf\u4e00\u6f14\u8fdb\u3002\u800c\u6211\u4eec\u7684\u8de8\u8bed\u8a00\u5e94\u7528\uff0c\u53ea\u8981\u6d41\u91cf\u662f\u7ecf\u8fc7\u6211\u4eec\u7684 Data Plane \u7684\uff0c\u90fd\u53ef\u4ee5\u4eab\u53d7\u5230\u521a\u624d\u63d0\u5230\u7684\u5404\u79cd\u670d\u52a1\u6cbb\u7406\u76f8\u5173\u7684\u80fd\u529b\uff0c\u5e94\u7528\u5bf9\u5e95\u5c42\u7684\u57fa\u7840\u8bbe\u65bd\u80fd\u529b\u662f\u900f\u660e\u7684\uff0c\u771f\u6b63\u7684\u4e91\u539f\u751f\u7684\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8682\u8681-mesh-\u843d\u5730\u8fc7\u7a0b",children:"\u8682\u8681 Mesh \u843d\u5730\u8fc7\u7a0b"}),"\n",(0,c.jsx)(n.p,{children:"\u6240\u4ee5\u4ece 2017 \u5e74\u5e95\u5f00\u59cb\uff0c\u8682\u8681\u5c31\u5f00\u59cb\u63a2\u7d22 Service Mesh \u7684\u6280\u672f\u65b9\u5411\uff0c\u5e76\u63d0\u51fa\u4e86 \u57fa\u7840\u8bbe\u65bd\u7edf\u4e00\uff0c\u4e1a\u52a1\u65e0\u611f\u5347\u7ea7 \u7684\u613f\u666f\u3002\u4e3b\u8981\u7684\u91cc\u7a0b\u7891\u5c31\u662f\uff1a"}),"\n",(0,c.jsx)(n.p,{children:"2017 \u5e74\u5e95\u5f00\u59cb\u6280\u672f\u9884\u7814 Service Mesh \u6280\u672f\uff0c\u5e76\u786e\u5b9a\u4e3a\u672a\u6765\u53d1\u5c55\u65b9\u5411\uff1b"}),"\n",(0,c.jsx)(n.p,{children:"2018 \u5e74\u521d\u5f00\u59cb\u7528 Golang \u81ea\u7814 Sidecar MOSN \u5e76\u5f00\u6e90\uff0c\u4e3b\u8981\u652f\u6301 RPC \u5728\u53cc\u5341\u4e00\u5c0f\u8303\u56f4\u8bd5\u70b9\uff1b"}),"\n",(0,c.jsx)(n.p,{children:"2019 \u5e74 618\uff0c\u65b0\u589e Message Mesh \u548c DB Mesh \u7684\u5f62\u6001\uff0c\u8986\u76d6\u82e5\u5e72\u6838\u5fc3\u94fe\u8def\uff0c\u652f\u6491 618 \u5927\u4fc3\uff1b"}),"\n",(0,c.jsx)(n.p,{children:"2019 \u5e74\u53cc\u5341\u4e00\uff0c\u8986\u76d6\u4e86\u6240\u6709\u5927\u4fc3\u6838\u5fc3\u94fe\u8def\u51e0\u767e\u4e2a\u5e94\u7528\uff0c\u652f\u6491\u5f53\u65f6\u7684\u53cc\u5341\u4e00\u5927\u4fc3\uff1b"}),"\n",(0,c.jsx)(n.p,{children:"2020 \u5e74\u53cc\u5341\u4e00\uff0c\u5168\u7ad9\u8d85\u8fc7 80% \u7684\u5728\u7ebf\u5e94\u7528\u63a5\u5165\u4e86 Mesh \u5316\uff0c\u6574\u5957 Mesh \u4f53\u7cfb\u4e5f\u5177\u5907\u4e86 2 \u4e2a\u6708\u4ece\u80fd\u529b\u5f00\u53d1\u5230\u5168\u7ad9\u5347\u7ea7\u5b8c\u6210\u7684\u80fd\u529b\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8682\u8681-mesh-\u843d\u5730\u67b6\u6784",children:"\u8682\u8681 Mesh \u843d\u5730\u67b6\u6784"}),"\n",(0,c.jsx)(n.p,{children:"\u76ee\u524d Mesh \u5316\u5728\u8682\u8681\u843d\u5730\u89c4\u6a21\u662f\u5e94\u7528\u7ea6\u6570\u5343\u4e2a\uff0c\u5bb9\u5668\u6570\u5341\u4e07\u7684\u7ea7\u522b\uff0c\u8fd9\u4e2a\u89c4\u6a21\u7684\u843d\u5730\uff0c\u5728\u4e1a\u754c\u662f\u6570\u4e00\u6570\u4e8c\u7684\uff0c\u6839\u672c\u5c31\u6ca1\u6709\u524d\u4eba\u7684\u8def\u53ef\u4ee5\u5b66\u4e60\uff0c\u6240\u4ee5\u8682\u8681\u5728\u843d\u5730\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u5efa\u8bbe\u4e00\u5957\u5b8c\u6574\u7684\u7814\u53d1\u8fd0\u7ef4\u4f53\u7cfb\u53bb\u652f\u6491\u8682\u8681\u7684 Mesh \u5316\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*eAlMT7SMTpMAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8682\u8681 Mesh \u67b6\u6784\u5927\u6982\u5982\u56fe\u6240\u793a\uff0c\u5e95\u4e0b\u662f\u6211\u4eec\u7684\u63a7\u5236\u5e73\u9762\uff0c\u91cc\u9762\u90e8\u7f72\u4e86\u670d\u52a1\u6cbb\u7406\u4e2d\u5fc3\u3001PaaS\u3001\u76d1\u63a7\u4e2d\u5fc3\u7b49\u5e73\u53f0\u7684\u670d\u52a1\u7aef\uff0c\u90fd\u662f\u73b0\u6709\u7684\u4e00\u4e9b\u4ea7\u54c1\u3002\u8fd8\u6709\u5c31\u662f\u6211\u4eec\u7684\u8fd0\u7ef4\u4f53\u7cfb\uff0c\u5305\u62ec\u7814\u53d1\u5e73\u53f0\u548c PaaS \u5e73\u53f0\u3002\u90a3\u4e2d\u95f4\u662f\u6211\u4eec\u7684\u4e3b\u89d2\u6570\u636e\u5e73\u9762 MOSN\uff0c\u91cc\u9762\u7ba1\u7406\u4e86 RPC\u3001\u6d88\u606f\u3001MVC\u3001\u4efb\u52a1\u56db\u79cd\u6d41\u91cf\uff0c\u8fd8\u6709\u5065\u5eb7\u68c0\u67e5\u3001\u76d1\u63a7\u3001\u914d\u7f6e\u3001\u5b89\u5168\u3001\u6280\u672f\u98ce\u9669\u90fd\u4e0b\u6c89\u7684\u57fa\u7840\u80fd\u529b\uff0c\u540c\u65f6 MOSN \u4e5f\u5c4f\u853d\u4e86\u4e1a\u52a1\u548c\u57fa\u7840\u5e73\u53f0\u7684\u4e00\u4e9b\u4ea4\u4e92\u3002DBMesh \u5728\u8682\u8681\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u4ea7\u54c1\uff0c\u56fe\u91cc\u5c31\u6ca1\u753b\u51fa\u6765\u3002\u7136\u540e\u6700\u4e0a\u5c42\u662f\u6211\u4eec\u7684\u4e00\u4e9b\u5e94\u7528\uff0c\u76ee\u524d\u652f\u6301 Java\u3001Nodejs \u7b49\u591a\u79cd\u8bed\u8a00\u7684\u63a5\u5165\u3002\n\u5bf9\u5e94\u7528\u6765\u8bf4\uff0cMesh \u867d\u7136\u80fd\u505a\u5230\u57fa\u7840\u8bbe\u65bd\u89e3\u8026\uff0c\u4f46\u662f\u63a5\u5165\u8fd8\u662f\u9700\u8981\u4e00\u6b21\u989d\u5916\u7684\u5347\u7ea7\u6210\u672c\uff0c\u6240\u4ee5\u4e3a\u4e86\u63a8\u8fdb\u5e94\u7528\u7684\u63a5\u5165\uff0c\u8682\u8681\u505a\u4e86\u6574\u4e2a\u7814\u53d1\u8fd0\u7ef4\u6d41\u7a0b\u7684\u6253\u901a\uff0c\u5305\u62ec\u5728\u73b0\u6709\u6846\u67b6\u4e0a\u505a\u6700\u7b80\u5316\u7684\u63a5\u5165\uff0c\u901a\u8fc7\u5206\u6279\u63a8\u8fdb\u628a\u63a7\u98ce\u9669\u548c\u8fdb\u5ea6\uff0c\u8ba9\u65b0\u5e94\u7528\u9ed8\u8ba4\u63a5\u5165 Mesh \u5316\u7b49\u4e00\u4e9b\u4e8b\u60c5\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u540c\u65f6\u968f\u7740\u4e0b\u6c89\u80fd\u529b\u7684\u8d8a\u6765\u8d8a\u591a\uff0c\u5404\u4e2a\u80fd\u529b\u4e4b\u524d\u4e5f\u9762\u4e34\u4e86\u7814\u53d1\u534f\u4f5c\u7684\u4e00\u4e9b\u95ee\u9898\uff0c\u751a\u81f3\u4e92\u76f8\u5f71\u54cd\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u7684\u95ee\u9898\uff0c\u6240\u4ee5\u5bf9\u4e8e Mesh \u81ea\u8eab\u7684\u7814\u53d1\u6548\u80fd\uff0c\u6211\u4eec\u4e5f\u505a\u4e86\u4e00\u4e0b\u6a21\u5757\u5316\u9694\u79bb\u3001\u65b0\u80fd\u529b\u52a8\u6001\u63d2\u62d4\u3001\u81ea\u52a8\u56de\u5f52\u7b49\u6539\u8fdb\uff0c\u76ee\u524d\u4e00\u4e2a\u4e0b\u6c89\u80fd\u529b\u4ece\u5f00\u53d1\u5230\u5168\u7ad9\u63a8\u5e7f\u5b8c\u6210\u53ef\u4ee5\u5728 2 \u4e2a\u6708\u5185\u5b8c\u6210\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u4e0a\u7684\u63a2\u7d22",children:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u4e0a\u7684\u63a2\u7d22"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5927\u89c4\u6a21\u843d\u5730\u540e\u7684\u65b0\u95ee\u9898\u4e0e\u601d\u8003"})}),"\n",(0,c.jsx)(n.p,{children:"\u8682\u8681 Mesh \u5927\u89c4\u6a21\u843d\u5730\u4e4b\u540e\uff0c\u76ee\u524d\u6211\u4eec\u9047\u5230\u4e86\u4e00\u4e9b\u65b0\u7684\u95ee\u9898\uff1a\n\u8de8\u8bed\u8a00 SDK \u7684\u7ef4\u62a4\u6210\u672c\u9ad8\uff1a\u62ff RPC \u4e3e\u4f8b\uff0c\u5927\u90e8\u5206\u903b\u8f91\u5df2\u7ecf\u4e0b\u6c89\u5230\u4e86 MOSN \u91cc\uff0c\u4f46\u662f\u8fd8\u6709\u4e00\u90e8\u5206\u901a\u4fe1\u7f16\u89e3\u7801\u534f\u8bae\u7684\u903b\u8f91\u662f\u5728 Java \u7684\u4e00\u4e2a\u8f7b\u91cf\u7ea7 SDK \u91cc\u7684\uff0c\u8fd9\u4e2a SDK \u8fd8\u662f\u6709\u4e00\u5b9a\u7684\u7ef4\u62a4\u6210\u672c\u7684\uff0c\u6709\u591a\u5c11\u4e2a\u8bed\u8a00\u5c31\u6709\u591a\u5c11\u4e2a\u8f7b\u91cf\u7ea7 SDK\uff0c\u4e00\u4e2a\u56e2\u961f\u4e0d\u53ef\u80fd\u6709\u7cbe\u901a\u6240\u6709\u8bed\u8a00\u7684\u7814\u53d1\uff0c\u6240\u4ee5\u8fd9\u4e2a\u8f7b\u91cf\u7ea7 SDK \u7684\u4ee3\u7801\u8d28\u91cf\u5c31\u662f\u4e00\u4e2a\u95ee\u9898\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4e1a\u52a1\u517c\u5bb9\u4e0d\u540c\u73af\u5883\u7684\u65b0\u573a\u666f\uff1a\u8682\u8681\u7684\u4e00\u90e8\u5206\u5e94\u7528\u662f\u65e2\u90e8\u7f72\u5728\u8682\u8681\u5185\u90e8\uff0c\u4e5f\u5bf9\u5916\u8f93\u51fa\u5230\u91d1\u878d\u673a\u6784\u7684\u3002\u5f53\u5b83\u4eec\u90e8\u7f72\u5230\u8682\u8681\u65f6\uff0c\u5bf9\u63a5\u7684\u662f\u8682\u8681\u7684\u63a7\u5236\u9762\uff0c\u5f53\u5bf9\u63a5\u5230\u94f6\u884c\u7684\u65f6\u5019\uff0c\u5bf9\u63a5\u7684\u662f\u94f6\u884c\u5df2\u6709\u7684\u63a7\u5236\u9762\u3002\u76ee\u524d\u5927\u591a\u6570\u5e94\u7528\u7684\u505a\u6cd5\u662f\u81ea\u5df1\u5728\u4ee3\u7801\u91cc\u5c01\u88c5\u4e00\u5c42\uff0c\u9047\u5230\u4e0d\u652f\u6301\u7684\u7ec4\u4ef6\u5c31\u4e34\u65f6\u652f\u6301\u5bf9\u63a5\u4e00\u4e0b\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4ece Service Mesh \u5230 Multi-Mesh\uff1a\u8682\u8681\u6700\u65e9\u7684\u573a\u666f\u662f Service Mesh\uff0cMOSN \u901a\u8fc7\u7f51\u7edc\u8fde\u63a5\u4ee3\u7406\u7684\u65b9\u5f0f\u8fdb\u884c\u4e86\u6d41\u91cf\u62e6\u622a\uff0c\u5176\u5b83\u7684\u4e2d\u95f4\u4ef6\u90fd\u662f\u901a\u8fc7\u539f\u59cb\u7684 SDK \u4e0e\u670d\u52a1\u7aef\u8fdb\u884c\u4ea4\u4e92\u3002\u800c\u73b0\u5728\u7684 MOSN \u5df2\u7ecf\u4e0d\u4ec5\u4ec5\u662f Service Mesh \u4e86\uff0c\u800c\u662f Multi-Mesh\uff0c\u56e0\u4e3a\u9664\u4e86 RPC\uff0c\u6211\u4eec\u8fd8\u652f\u6301\u4e86\u66f4\u591a\u4e2d\u95f4\u4ef6\u7684 Mesh \u5316\u843d\u5730\uff0c\u5305\u62ec\u6d88\u606f\u3001\u914d\u7f6e\u3001\u7f13\u5b58\u7684\u7b49\u7b49\u3002\u53ef\u4ee5\u770b\u5230\u6bcf\u4e2a\u4e0b\u6c89\u7684\u4e2d\u95f4\u4ef6\uff0c\u5728\u5e94\u7528\u4fa7\u51e0\u4e4e\u90fd\u6709\u4e00\u4e2a\u5bf9\u5e94\u7684\u8f7b\u91cf\u7ea7 SDK \u5b58\u5728\uff0c\u8fd9\u4e2a\u5728\u7ed3\u5408\u521a\u624d\u7684\u7b2c\u4e00\u95ee\u9898\uff0c\u5c31\u53d1\u73b0\u6709\u975e\u5e38\u591a\u7684\u8f7b\u91cf\u7ea7 SDK \u9700\u8981\u7ef4\u62a4\u3002\u4e3a\u4e86\u4fdd\u6301\u529f\u80fd\u4e0d\u4e92\u76f8\u5f71\u54cd\uff0c\u6bcf\u4e2a\u529f\u80fd\u5b83\u4eec\u5f00\u542f\u4e0d\u540c\u7684\u7aef\u53e3\uff0c\u901a\u8fc7\u4e0d\u540c\u7684\u534f\u8bae\u53bb\u548c MOSN \u8fdb\u884c\u8c03\u7528\u3002\u4f8b\u5982 RPC \u7528\u7684 RPC \u534f\u8bae\uff0c\u6d88\u606f\u7528\u7684 MQ \u534f\u8bae\uff0c\u7f13\u5b58\u7528\u7684 Redis \u534f\u8bae\u3002\u7136\u540e\u73b0\u5728\u7684 MOSN \u5176\u5b9e\u4e5f\u4e0d\u4ec5\u4ec5\u662f\u9762\u5411\u6d41\u91cf\u4e86\uff0c\u4f8b\u5982\u914d\u7f6e\u5c31\u662f\u66b4\u9732\u4e86\u4e00\u4e0b API \u7ed9\u4e1a\u52a1\u4ee3\u7801\u53bb\u4f7f\u7528\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*80o8SYwyHJoAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u521a\u624d\u7684\u95ee\u9898\u548c\u573a\u666f\uff0c\u6211\u4eec\u5c31\u5728\u601d\u8003\u5982\u4e0b\u7684\u51e0\u4e2a\u70b9\uff1a"}),"\n",(0,c.jsx)(n.p,{children:"1.\u4e0d\u540c\u4e2d\u95f4\u4ef6\u3001\u4e0d\u540c\u8bed\u8a00\u7684 SDK \u80fd\u5426\u98ce\u683c\u7edf\u4e00\uff1f"}),"\n",(0,c.jsx)(n.p,{children:"2.\u5404\u4e2a\u4e0b\u6c89\u80fd\u529b\u7684\u4ea4\u4e92\u534f\u8bae\u80fd\u5426\u7edf\u4e00\uff1f"}),"\n",(0,c.jsx)(n.p,{children:"3.\u6211\u4eec\u7684\u4e2d\u95f4\u4ef6\u4e0b\u6c89\u662f\u9762\u5411\u7ec4\u4ef6\u8fd8\u662f\u9762\u5411\u80fd\u529b\uff1f"}),"\n",(0,c.jsx)(n.p,{children:"4.\u5e95\u5c42\u7684\u5b9e\u73b0\u662f\u5426\u53ef\u4ee5\u66ff\u6362\uff1f"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*hsZBQJg0VnoAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8682\u8681\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u67b6\u6784",children:"\u8682\u8681\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u67b6\u6784"}),"\n",(0,c.jsx)(n.p,{children:"\u4ece\u53bb\u5e74\u7684 3 \u6708\u4efd\u5f00\u59cb\uff0c\u7ecf\u8fc7\u5185\u90e8\u7684\u591a\u8f6e\u8ba8\u8bba\uff0c\u4ee5\u53ca\u5bf9\u4e1a\u754c\u4e00\u4e9b\u65b0\u7406\u5ff5\u7684\u8c03\u7814\uff0c\u6211\u4eec\u63d0\u51fa\u4e86\u4e00\u4e2a\u201c\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u201d\uff08\u4e0b\u79f0\u8fd0\u884c\u65f6\uff09\u7684\u6982\u5ff5\u3002\u987e\u540d\u601d\u4e49\uff0c\u6211\u4eec\u5e0c\u671b\u8fd9\u4e2a\u8fd0\u884c\u65f6\u80fd\u591f\u5305\u542b\u5e94\u7528\u6240\u5173\u5fc3\u7684\u6240\u6709\u5206\u5e03\u5f0f\u80fd\u529b\uff0c\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u7684\u6784\u5efa\u4e91\u539f\u751f\u5e94\u7528\uff0c\u5e2e\u52a9\u5e94\u7528\u548c\u57fa\u7840\u8bbe\u65bd\u8fdb\u4e00\u6b65\u89e3\u8026\uff01"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*iqQoTYAma4YAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u8bbe\u8ba1\u91cc\u6838\u5fc3\u7684\u51e0\u4e2a\u70b9\u5982\u4e0b\uff1a"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u7b2c\u4e00"}),"\uff0c\u7531\u4e8e\u6709\u4e86 MOSN \u89c4\u6a21\u5316\u843d\u5730\u7684\u7ecf\u9a8c\u548c\u914d\u5957\u7684\u8fd0\u7ef4\u4f53\u7cfb\uff0c\u6211\u4eec\u51b3\u5b9a\u57fa\u4e8e MOSN \u5185\u6838\u53bb\u5f00\u53d1\u6211\u4eec\u7684\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u7b2c\u4e8c"}),"\uff0c\u9762\u5411\u80fd\u529b\uff0c\u800c\u4e0d\u662f\u9762\u5411\u7ec4\u4ef6\uff0c\u7edf\u4e00\u5b9a\u4e49\u51fa\u8fd9\u4e2a\u8fd0\u884c\u65f6\u7684 API \u80fd\u529b\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u7b2c\u4e09"}),"\uff0c\u4e1a\u52a1\u4ee3\u7801\u548c Runtime API \u4e4b\u95f4\u7684\u4ea4\u4e92\u91c7\u7528\u7edf\u4e00\u7684 gRPC \u534f\u8bae\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u4e1a\u52a1\u7aef\u4fa7\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 proto \u6587\u4ef6\u53bb\u53cd\u5411\u751f\u6210\u4e00\u4e2a\u5ba2\u6237\u7aef\uff0c\u76f4\u63a5\u8fdb\u884c\u8c03\u7528\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u7b2c\u56db"}),"\uff0c\u80fd\u529b\u540e\u9762\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5b9e\u73b0\u662f\u53ef\u4ee5\u66ff\u6362\u7684\uff0c\u4f8b\u5982\u6ce8\u518c\u670d\u52a1\u7684\u63d0\u4f9b\u8005\u53ef\u4ee5\u662f SOFARegistry\uff0c\u4e5f\u53ef\u4ee5\u662f Nacos \u6216\u8005 Zookeeper\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u8fd0\u884c\u65f6\u80fd\u529b\u62bd\u8c61"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*hWIVR6ccduYAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4e3a\u4e86\u62bd\u8c61\u51fa\u4e91\u539f\u751f\u5e94\u7528\u6700\u9700\u8981\u7684\u4e00\u4e9b\u80fd\u529b\uff0c\u6211\u4eec\u5148\u5b9a\u4e86\u51e0\u4e2a\u539f\u5219\uff1a"}),"\n",(0,c.jsx)(n.p,{children:"1.\u5173\u6ce8\u5206\u5e03\u5f0f\u5e94\u7528\u6240\u9700\u7684 API \u548c\u573a\u666f\u800c\u4e0d\u662f\u7ec4\u4ef6\uff1b\n2.API \u7b26\u5408\u76f4\u89c9\uff0c\u5f00\u7bb1\u5373\u7528\uff0c\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e\uff1b\n3.API \u4e0d\u7ed1\u5b9a\u5b9e\u73b0\uff0c\u5b9e\u73b0\u5dee\u5f02\u5316\u4f7f\u7528\u6269\u5c55\u5b57\u6bb5\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6709\u4e86\u539f\u5219\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u62bd\u8c61\u51fa\u4e86\u4e09\u7ec4 API\uff0c\u5206\u522b\u662f\u5e94\u7528\u8c03\u7528\u8fd0\u884c\u65f6\u7684 mosn.proto\uff0c\u8fd0\u884c\u65f6\u8c03\u7528\u5e94\u7528\u7684 appcallback.proto\uff0c\u8fd0\u884c\u65f6\u8fd0\u7ef4\u76f8\u5173\u7684 actuator.proto\u3002\u4f8b\u5982 RPC \u8c03\u7528\u3001\u53d1\u6d88\u606f\u3001\u8bfb\u7f13\u5b58\u3001\u8bfb\u914d\u7f6e\u8fd9\u4e9b\u90fd\u5c5e\u4e8e\u5e94\u7528\u5230\u8fd0\u884c\u65f6\u7684\uff0c\u800c RPC  \u6536\u8bf7\u6c42\u3001\u6536\u6d88\u606f\u3001\u63a5\u6536\u4efb\u52a1\u8c03\u5ea6\u8fd9\u4e9b\u5c5e\u4e8e\u8fd0\u884c\u65f6\u8c03\u5e94\u7528\u7684\uff0c\u5176\u5b83\u76d1\u63a7\u68c0\u67e5\u3001\u7ec4\u4ef6\u7ba1\u7406\u3001\u6d41\u91cf\u63a7\u5236\u8fd9\u4e9b\u5219\u5c5e\u4e8e\u8fd0\u884c\u65f6\u8fd0\u7ef4\u76f8\u5173\u7684\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e09\u4e2a proto \u7684\u793a\u4f8b\u53ef\u4ee5\u770b\u4e0b\u56fe\uff1a"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*J76nQoLLYWgAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u8fd0\u884c\u65f6\u7ec4\u4ef6\u7ba1\u63a7"})}),"\n",(0,c.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u65b9\u9762\uff0c\u4e3a\u4e86\u5b9e\u73b0\u8fd0\u884c\u65f6\u7684\u5b9e\u73b0\u53ef\u66ff\u6362\uff0c\u6211\u4eec\u4e5f\u5728 MOSN \u63d0\u4e86\u4e24\u4e2a\u6982\u5ff5\uff0c\u6211\u4eec\u628a\u4e00\u4e2a\u4e2a\u5206\u5e03\u5f0f\u80fd\u529b\u79f0\u4e3a Service\uff0c\u7136\u540e\u6709\u4e0d\u540c\u7684 Component \u53bb\u5b9e\u73b0\u8fd9\u4e2a Service\uff0c\u4e00\u4e2a Service \u53ef\u4ee5\u6709\u591a\u4e2a\u7ec4\u4ef6\u5b9e\u73b0\u5b83\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u5b9e\u73b0\u591a\u4e2a Service\u3002\u4f8b\u5982\u56fe\u91cc\u7684\u793a\u4f8b\u5c31\u662f\u6709\u201cMQ-pub\u201d \u8fd9\u4e2a\u53d1\u6d88\u606f\u7684 Service \u6709 SOFAMQ \u548c Kafka \u4e24\u4e2a Component \u53bb\u5b9e\u73b0\uff0c\u800c Kafka Component \u5219\u5b9e\u73b0\u4e86\u53d1\u6d88\u606f\u548c\u5065\u5eb7\u68c0\u67e5\u4e24\u4e2a Service\u3002\n\u5f53\u4e1a\u52a1\u771f\u6b63\u901a\u8fc7 gRPC \u751f\u6210\u7684\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u6570\u636e\u5c31\u4f1a\u901a\u8fc7 gRPC \u534f\u8bae\u53d1\u9001\u7ed9 Runtime\uff0c\u5e76\u4e14\u5206\u53d1\u5230\u540e\u9762\u4e00\u4e2a\u5177\u4f53\u7684\u5b9e\u73b0\u4e0a\u53bb\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u5e94\u7528\u53ea\u9700\u8981\u4f7f\u7528\u540c\u4e00\u5957 API\uff0c\u901a\u8fc7\u8bf7\u6c42\u91cc\u7684\u53c2\u6570\u6216\u8005\u8fd0\u884c\u65f6\u7684\u914d\u7f6e\uff0c\u5c31\u5bf9\u63a5\u5230\u4e0d\u540c\u7684\u5b9e\u73b0\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*dK9rRLTvtlMAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u8fd0\u884c\u65f6\u548c Mesh \u7684\u5bf9\u6bd4"})}),"\n",(0,c.jsx)(n.p,{children:"\u7efc\u4e0a\u6240\u8ff0\uff0c \u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u548c\u521a\u624d Mesh \u7b80\u5355\u5bf9\u6bd4\u5982\u4e0b\uff1a"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*xyu9T74SD9MAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u843d\u5730\u573a\u666f\n\u4ece\u53bb\u5e74\u4e2d\u5f00\u59cb\u7814\u53d1\uff0c\u8fd0\u884c\u65f6\u76ee\u524d\u5728\u8682\u8681\u5185\u90e8\u4e3b\u8981\u843d\u5730\u4e86\u4e0b\u9762\u51e0\u4e2a\u573a\u666f\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5f02\u6784\u6280\u672f\u6808\u63a5\u5165"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*8UJhRbBg3zsAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u8682\u8681\uff0c\u4e0d\u540c\u7684\u8bed\u8a00\u7684\u5e94\u7528\u9664\u4e86 RPC \u670d\u52a1\u6cbb\u7406\u3001\u6d88\u606f\u7b49\u7684\u9700\u6c42\u4e4b\u5916\uff0c\u8fd8\u5e0c\u671b\u4f7f\u7528\u4e0a\u8682\u8681\u7edf\u4e00\u7684\u4e2d\u95f4\u4ef6\u7b49\u57fa\u7840\u8bbe\u65bd\u80fd\u529b\uff0cJava \u548c Nodejs \u662f\u6709\u5bf9\u5e94\u7684 SDK \u7684\uff0c\u800c\u5176\u4ed6\u8bed\u8a00\u662f\u6ca1\u6709\u7684\u5bf9\u5e94\u7684 SDK \u7684\u3002\u6709\u4e86\u5e94\u7528\u8fd0\u884c\u65f6\u4e4b\u540e\uff0c\u8fd9\u4e9b\u5f02\u6784\u8bed\u8a00\u5c31\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 gRPC Client \u8c03\u7528\u8fd0\u884c\u65f6\uff0c\u5bf9\u63a5\u4e0a\u8682\u8681\u7684\u57fa\u7840\u8bbe\u65bd\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u89e3\u9664\u5382\u5546\u7ed1\u5b9a"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*eVoqRbkTFFwAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u521a\u624d\u63d0\u5230\uff0c\u8682\u8681\u7684\u533a\u5757\u94fe\u3001\u98ce\u63a7\u3001\u667a\u80fd\u5ba2\u670d\u3001\u91d1\u878d\u4e2d\u53f0\u7b49\u7b49\u4e1a\u52a1\u662f\u65e2\u5728\u4e3b\u7ad9\u90e8\u7f72\uff0c\u53c8\u6709\u963f\u91cc\u4e91\u6216\u8005\u4e13\u6709\u4e91\u90e8\u7f72\u7684\u573a\u666f\u3002\u6709\u4e86\u8fd0\u884c\u65f6\u4e4b\u540e\uff0c\u5e94\u7528\u53ef\u4ee5\u4e00\u5957\u4ee3\u7801\u548c\u8fd0\u884c\u65f6\u4e00\u8d77\u51fa\u4e00\u4e2a\u955c\u50cf\uff0c\u901a\u8fc7\u914d\u7f6e\u53bb\u51b3\u5b9a\u8c03\u7528\u54ea\u4e2a\u5e95\u5c42\u7684\u5b9e\u73b0\uff0c\u4e0d\u8ddf\u5177\u4f53\u7684\u5b9e\u73b0\u7ed1\u5b9a\u3002\u4f8b\u5982\u5728\u8682\u8681\u5185\u90e8\u5bf9\u63a5\u7684\u662f SOFARegistry \u548c SOFAMQ \u7b49\u4ea7\u54c1\uff0c\u800c\u5230\u4e91\u4e0a\u5bf9\u63a5\u7684\u662f Nacos\u3001RocketMQ \u7b49\u4ea7\u54c1\uff0c\u5230\u4e13\u6709\u4e91\u5bf9\u63a5\u7684\u53c8\u662f Zookeeper\u3001Kafka \u7b49\u3002\u8fd9\u4e2a\u573a\u666f\u6211\u4eec\u6b63\u5728\u843d\u5730\u5f53\u4e2d\u3002\u5f53\u7136\u8fd9\u4e2a\u4e5f\u53ef\u4ee5\u7528\u5728\u9057\u7559\u7cfb\u7edf\u6cbb\u7406\u4e0a\uff0c\u4f8b\u5982\u4ece SOFAMQ 1.0 \u5347\u7ea7\u5230 SOFAMQ 2.0\uff0c\u63a5\u4e86\u8fd0\u884c\u65f6\u7684\u5e94\u7528\u4e5f\u65e0\u9700\u5347\u7ea7\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"FaaS \u51b7\u542f\u9884\u70ed\u6c60"})}),"\n",(0,c.jsx)(n.p,{children:"FaaS \u51b7\u542f\u9884\u70ed\u6c60\u4e5f\u662f\u6211\u4eec\u8fd1\u671f\u5728\u63a2\u7d22\u7684\u4e00\u4e2a\u573a\u666f\uff0c\u5927\u5bb6\u77e5\u9053 FaaS \u91cc\u7684 Function \u5728\u51b7\u542f\u7684\u65f6\u5019\uff0c\u662f\u9700\u8981\u4ece\u521b\u5efa Pod \u5230\u4e0b\u8f7d Function \u518d\u5230\u542f\u52a8\u7684\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u6bd4\u8f83\u957f\u3002\u6709\u4e86\u8fd0\u884c\u65f6\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u63d0\u524d\u628a Pod \u521b\u5efa\u51fa\u6765\u5e76\u542f\u52a8\u597d\u8fd0\u884c\u65f6\uff0c\u7b49\u5230\u5e94\u7528\u542f\u52a8\u7684\u65f6\u5019\u5176\u5b9e\u5df2\u7ecf\u975e\u5e38\u7b80\u5355\u7684\u5e94\u7528\u903b\u8f91\u4e86\uff0c\u7ecf\u8fc7\u6d4b\u8bd5\u53d1\u73b0\u53ef\u4ee5\u5c06\u4ece 5s \u7f29\u77ed 80% \u5230 1s\u3002\u8fd9\u4e2a\u65b9\u5411\u6211\u4eec\u8fd8\u4f1a\u6301\u7eed\u63a2\u7d22\u5f53\u4e2d\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u89c4\u5212\u548c\u5c55\u671b",children:"\u89c4\u5212\u548c\u5c55\u671b"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"API \u5171\u5efa"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd0\u884c\u65f6\u91cc\u6700\u4e3b\u8981\u7684\u4e00\u90e8\u5206\u5c31\u662f API \u7684\u5b9a\u4e49\uff0c\u4e3a\u4e86\u843d\u5730\u5185\u90e8\uff0c\u6211\u4eec\u5df2\u7ecf\u6709\u4e00\u5957\u8f83\u4e3a\u5b8c\u6574\u7684 API\uff0c\u4f46\u662f\u6211\u4eec\u4e5f\u770b\u5230\u4e1a\u754c\u7684\u5f88\u591a\u4ea7\u54c1\u6709\u7c7b\u4f3c\u7684\u8bc9\u6c42\uff0c\u4f8b\u5982 dapr\u3001envoy \u7b49\u7b49\u3002\u6240\u4ee5\u63a5\u4e0b\u6765\u6211\u4eec\u4f1a\u53bb\u505a\u7684\u4e00\u4ef6\u4e8b\u60c5\u5c31\u662f\u8054\u5408\u5404\u4e2a\u793e\u533a\u53bb\u63a8\u51fa\u4e00\u5957\u5927\u5bb6\u90fd\u8ba4\u53ef\u7684\u4e91\u539f\u751f\u5e94\u7528 API\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*d2BORogVotoAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6301\u7eed\u5f00\u6e90"})}),"\n",(0,c.jsx)(n.p,{children:"\u53e6\u5916\u6211\u4eec\u8fd1\u671f\u4e5f\u4f1a\u5c06\u5185\u90e8\u7684\u8fd0\u884c\u65f6\u5b9e\u8df5\u9010\u6b65\u5f00\u53d1\u51fa\u6765\uff0c\u9884\u8ba1\u4e94\u516d\u6708\u4efd\u4f1a\u53d1\u5e03 0.1 \u7248\u672c\uff0c\u5e76\u4fdd\u6301\u6bcf\u6708\u53d1\u5e03\u4e00\u4e2a\u5c0f\u7248\u672c\u7684\u8282\u594f\uff0c\u4e89\u53d6\u5e74\u5e95\u4e4b\u524d\u53d1\u5e03 1.0 \u7248\u672c\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://gw.alipayobjects.com/mdn/rms_1c90e8/afts/img/A*Kgr9QLc5TH4AAAAAAAAAAAAAARQnAQ",alt:""})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6700\u540e\u505a\u4e00\u4e0b\u5c0f\u7ed3\uff1a"})}),"\n",(0,c.jsx)(n.p,{children:"1.Service Mesh \u6a21\u5f0f\u7684\u5f15\u5165\u662f\u5b9e\u73b0\u5e94\u7528\u539f\u4e91\u751f\u7684\u5173\u952e\u8def\u5f84\uff1b"}),"\n",(0,c.jsx)(n.p,{children:"2.\u4efb\u4f55\u4e2d\u95f4\u4ef6\u517c\u53ef Mesh \u5316\uff0c\u4f46\u7814\u53d1\u6548\u7387\u95ee\u9898\u4f9d\u7136\u90e8\u5206\u5b58\u5728\uff1b"}),"\n",(0,c.jsx)(n.p,{children:"3.Mesh \u5927\u89c4\u6a21\u843d\u5730\u662f\u5de5\u7a0b\u5316\u7684\u4e8b\u60c5\uff0c\u9700\u8981\u5b8c\u6574\u7684\u914d\u5957\u4f53\u7cfb\uff1b"}),"\n",(0,c.jsx)(n.p,{children:"4.\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u5c06\u662f\u4e2d\u95f4\u4ef6\u7b49\u57fa\u7840\u6280\u672f\u7684\u672a\u6765\u5f62\u6001\uff0c\u8fdb\u4e00\u6b65\u89e3\u8026\u5e94\u7528\u4e0e\u5206\u5e03\u5f0f\u80fd\u529b\uff1b"}),"\n",(0,c.jsx)(n.p,{children:"5.\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u6838\u5fc3\u662f API\uff0c\u671f\u671b\u793e\u533a\u5171\u5efa\u4e00\u4e2a\u6807\u51c6\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5ef6\u4f38\u9605\u8bfb"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://mp.weixin.qq.com/s?__biz=MzUzMzU5Mjc1Nw==&mid=2247488044&idx=1&sn=ef6300d4b451723aa5001cd3deb17fbc&chksm=faa0fdf6cdd774e03ccd9130099674720a81e7e109ecf810af147e08778c6582636769646490&scene=21",children:"\u5e26\u4f60\u8d70\u8fdb\u4e91\u539f\u751f\u6280\u672f\uff1a\u4e91\u539f\u751f\u5f00\u653e\u8fd0\u7ef4\u4f53\u7cfb\u63a2\u7d22\u548c\u5b9e\u8df5"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://mp.weixin.qq.com/s?__biz=MzUzMzU5Mjc1Nw==&mid=2247487717&idx=1&sn=ca9452cdc10989f61afbac2f012ed712&chksm=faa0ff3fcdd77629d8e5c8f6c42af3b4ea227ee3da3d5cdf297b970f51d18b8b1580aac786c3&scene=21",children:"\u79ef\u8dec\u6b65\u81f3\u5343\u91cc\uff1aQUIC \u534f\u8bae\u5728\u8682\u8681\u96c6\u56e2\u843d\u5730\u4e4b\u7efc\u8ff0"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://mp.weixin.qq.com/s?__biz=MzUzMzU5Mjc1Nw==&mid=2247487576&idx=1&sn=0d0575395476db930dab4e0f75e863e5&chksm=faa0ff82cdd77694a6fc42e47d6f20c20310b26cedc13f104f979acd1f02eb5a37ea9cdc8ea5&scene=21",children:"Rust \u5927\u5c55\u62f3\u811a\u7684\u65b0\u5174\u9886\u57df\uff1a\u673a\u5bc6\u8ba1\u7b97"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://mp.weixin.qq.com/s?__biz=MzUzMzU5Mjc1Nw==&mid=2247487546&idx=1&sn=72c3f1ede27ca4ace7988e11ca20d5f9&chksm=faa0ffe0cdd776f6d17323466b500acee50a371663f18da34d8e4cbe32304d7681cf58ff9b45&scene=21",children:"Protocol Extension Base On Wasm\u2014\u2014\u534f\u8bae\u6269\u5c55\u7bc7"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>A,x:()=>l});var c=s(6540);const i={},r=c.createContext(i);function A(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:A(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);