"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[1745],{7441:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(4848),l=i(8453);const t={},o="Layotto\u96c6\u6210 Istio 1.5.x \u6f14\u793a",r={id:"start/istio/start",title:"Layotto\u96c6\u6210 Istio 1.5.x \u6f14\u793a",description:"\u4e00\u3001\u80cc\u666f\u4ecb\u7ecd",source:"@site/docs/start/istio/start.md",sourceDirName:"start/istio",slug:"/start/istio/start",permalink:"/layotto/docs/start/istio/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/start/istio/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u96c6\u6210 Istio 1.10.6 \u6f14\u793a",permalink:"/layotto/docs/start/istio/"},next:{title:"Dump TCP\u6d41\u91cf",permalink:"/layotto/docs/start/network_filter/tcpcopy"}},c={},d=[{value:"\u4e00\u3001\u80cc\u666f\u4ecb\u7ecd",id:"\u4e00\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u51c6\u5907\u5de5\u4f5c",id:"\u4e8c\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u4e09\u3001\u542f\u52a8\u793a\u4f8b",id:"\u4e09\u542f\u52a8\u793a\u4f8b",level:2},{value:"\u56db\u3001\u4f7f\u7528Istio\u52a8\u6001\u6539\u53d8\u8def\u7531\u7b56\u7565",id:"\u56db\u4f7f\u7528istio\u52a8\u6001\u6539\u53d8\u8def\u7531\u7b56\u7565",level:2},{value:"A\u3001\u6309version\u8def\u7531\u80fd\u529b",id:"a\u6309version\u8def\u7531\u80fd\u529b",level:3},{value:"B\u3001\u6309header\u4fe1\u606f\u8fdb\u884c\u8def\u7531",id:"b\u6309header\u4fe1\u606f\u8fdb\u884c\u8def\u7531",level:3},{value:"\u4e94\u3001\u6ce8\u610f\u4e8b\u9879",id:"\u4e94\u6ce8\u610f\u4e8b\u9879",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"layotto\u96c6\u6210-istio-15x-\u6f14\u793a",children:"Layotto\u96c6\u6210 Istio 1.5.x \u6f14\u793a"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e00\u80cc\u666f\u4ecb\u7ecd",children:"\u4e00\u3001\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:"Layotto\u652f\u6301\u7684RPC\u80fd\u529b\u5e95\u5c42\u662f\u4f7f\u7528MOSN\u5b9e\u73b0\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ef\u4ee5\u590d\u7528MOSN\u591a\u5e74\u6765\u5728\u670d\u52a1\u6cbb\u7406\u9886\u57df\u5efa\u8bbe\u7684\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"MOSN\u4f5c\u4e3aIstio\u5b98\u65b9\u8ba4\u53ef\u7684\u6570\u636e\u9762\u5b9e\u73b0\uff0c\u8fd9\u91cc\u5c31\u5bf9Layotto\u5982\u4f55\u8ddfIstio\u7ed3\u5408\uff0c\u901a\u8fc7XDS\u534f\u8bae\u6765\u52a8\u6001\u8c03\u6574\u670d\u52a1\u8def\u7531\u8fdb\u884c\u8bf4\u660e\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8c\u51c6\u5907\u5de5\u4f5c",children:"\u4e8c\u3001\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsx)(n.p,{children:"\u60f3\u8981\u542f\u52a8\u793a\u4f8b\uff0c\u5fc5\u987b\u5b89\u88c5\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})}),"\n",(0,s.jsx)(n.p,{children:"\u76f4\u63a5\u5b98\u7f51\u4e0b\u8f7d\u5b89\u88c5\u5305\u5b89\u88c5\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"minikube"})}),"\n",(0,s.jsx)(n.p,{children:"\u6309\u7167\u5b98\u7f51\u64cd\u4f5c\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/istio/istio/releases/tag/1.5.2",children:"Istio-1.5.x"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u4e0b\u8f7d",(0,s.jsx)(n.code,{children:"1.5.x"}),"\u7248\u672c\u7684",(0,s.jsx)(n.code,{children:"istio"}),"\uff0c\u89e3\u538b\u540e\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\u65b9\u4fbf\u540e\u7eed\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export PATH=$PATH:${\u4f60\u7684istio\u76ee\u5f55}/bin\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e09\u542f\u52a8\u793a\u4f8b",children:"\u4e09\u3001\u542f\u52a8\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u542f\u52a8Docker Desktop"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u542f\u52a8",(0,s.jsx)(n.code,{children:"minikube"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"minikube start\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u542f\u52a8demo\u4e2d\u7684client\u3001server\uff08\u6240\u4f9d\u8d56\u7684\u955c\u50cf\u5df2\u7ecf\u5168\u90e8\u4e0a\u4f20docker hub\uff09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl apply -f layotto-injected.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d",(0,s.jsx)(n.code,{children:"layotto-injected.yaml"}),"\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u5728",(0,s.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/istio-1.5.x/demo/istio/layotto-injected.yaml",children:"\u8fd9\u91cc"})," \uff0c\u590d\u5236\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u547d\u4ee4",(0,s.jsx)(n.code,{children:"kubectl get pod"}),"\u67e5\u770b\u542f\u52a8\u72b6\u6001\uff08\u9996\u6b21\u542f\u52a8\u9700\u8981\u4e0b\u8f7d\u4f9d\u8d56\u955c\u50cf\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff09"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NAME                         READY   STATUS    RESTARTS   AGE\nclient-665c5cc4f-tfxrk       2/2     Running   0          49m\nserver-v1-685966b499-8hnqp   2/2     Running   0          49m\nserver-v2-6cfff5dbb5-4hlgb   2/2     Running   0          49m\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4\u6267\u884c\u5b8c\u540e\u770b\u5230\u7c7b\u4f3c\u4e0a\u8ff0\u5185\u5bb9\u5219\u8868\u793a\u542f\u52a8\u6210\u529f\uff0c\u6211\u4eec\u90e8\u7f72\u4e86\u4e00\u4e2aclient\u7aef\u4ee5\u53ca\u4e00\u4e2aserver\u7aef\uff0c\u5176\u4e2dserver\u7aef\u5206\u4e3a\u4e86v1,v2\u4e24\u4e2a\u7248\u672c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u539f\u751f\u7684",(0,s.jsx)(n.code,{children:"Istio"}),"\u5982\u679c\u60f3\u8981\u4ece\u5916\u90e8\u8bbf\u95ee\u96c6\u7fa4\u91cc\u9762\u7684\u670d\u52a1\u9700\u8981\u914d\u7f6e",(0,s.jsx)(n.code,{children:"istio-ingressgateway"}),"\u670d\u52a1\uff0c\u8fd9\u4f1a\u589e\u52a0\u5927\u5bb6\u4f7f\u7528\u6f14\u793a\u7684\u6210\u672c\uff0c\u56e0\u6b64\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4ee3\u7406\u547d\u540d\u8fdb\u884c\u8bbf\u95ee\uff0c\n\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl port-forward svc/client 9080:9080\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\u76f4\u63a5\u8bbf\u95ee\u5982\u4e0b\u94fe\u63a5\u5373\u53ef\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl localhost:9080/grpc\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u770b\u5230\u5982\u4e0b\u54cd\u5e94\u65f6\u5c31\u8868\u793a\u793a\u4f8b\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GET /hello \nhello, i am layotto v1\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u56db\u4f7f\u7528istio\u52a8\u6001\u6539\u53d8\u8def\u7531\u7b56\u7565",children:"\u56db\u3001\u4f7f\u7528Istio\u52a8\u6001\u6539\u53d8\u8def\u7531\u7b56\u7565"}),"\n",(0,s.jsx)(n.h3,{id:"a\u6309version\u8def\u7531\u80fd\u529b",children:"A\u3001\u6309version\u8def\u7531\u80fd\u529b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u521b\u5efadestination rules"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl apply -f destination-rule-all.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d",(0,s.jsx)(n.code,{children:"destination-rule-all.yaml"}),"\u6587\u4ef6\u5185\u5bb9\u5728",(0,s.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/istio-1.5.x/demo/istio/layotto-destination-rule-all.yaml",children:"\u8fd9\u91cc"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u6307\u5b9a\u53ea\u8bbf\u95eeV1\u670d\u52a1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl apply -f layotto-virtual-service-all-v1.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d",(0,s.jsx)(n.code,{children:"layotto-virtual-service-all-v1.yaml"}),"\u6587\u4ef6\u5185\u5bb9\u5728",(0,s.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/istio-1.5.x/demo/istio/layotto-virtual-service-all-v1.yaml",children:"\u8fd9\u91cc"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0a\u8ff0\u547d\u4ee4\u6267\u884c\u5b8c\u4ee5\u540e\uff0c\u540e\u7eed\u8bf7\u6c42\u53ea\u4f1a\u62ff\u5230v1\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GET /hello \nhello, i am layotto v1\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"b\u6309header\u4fe1\u606f\u8fdb\u884c\u8def\u7531",children:"B\u3001\u6309header\u4fe1\u606f\u8fdb\u884c\u8def\u7531"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u628a\u8def\u7531\u89c4\u5219\u4fee\u6539\u4e3a\u8bf7\u6c42header\u4e2d\u5305\u542b",(0,s.jsx)(n.code,{children:"name:layotto"}),"\u65f6\u4f1a\u8bbf\u95eev1\u670d\u52a1\uff0c\u5176\u4ed6\u5219\u8bbf\u95eev2\u670d\u52a1"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl apply -f layotto-header-route.yaml\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53d1\u9001\u8bf7\u6c42\u5373\u53ef\u770b\u5230\u6548\u679c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -H 'name: layotto' localhost:9080/grpc\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e94\u6ce8\u610f\u4e8b\u9879",children:"\u4e94\u3001\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684\u662f",(0,s.jsx)(n.code,{children:"istio 1.5.2"}),"\uff0c\u5c5e\u4e8e\u4e00\u4e2a\u6bd4\u8f83\u8001\u7684\u7248\u672c\uff0c\u56e0\u6b64\u8be5\u6f14\u793a\u4e0d\u4f1a\u5408\u5e76\u5230\u4e3b\u5e72\uff0c\u800c\u662f\u4ee5\u4e00\u4e2a\u72ec\u7acb\u7684\u5206\u652f",(0,s.jsx)(n.code,{children:"istio-1.5.x"}),"\u5b58\u5728\u3002\u76ee\u524d main \u5206\u652f\u4ee3\u7801\u5df2\u7ecf\u96c6\u6210\u4e86 ",(0,s.jsx)(n.code,{children:"istio 1.10.x"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684client\u3001server\u6e90\u7801\u53ef\u4ee5\u53c2\u8003",(0,s.jsx)(n.a,{href:"https://github.com/mosn/layotto/tree/istio-1.5.x/demo/istio",children:"\u8fd9\u91cc"})," \u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u4e0a\u624b\u7b80\u5355\uff0c\u4e0a\u8ff0\u4f7f\u7528\u5230\u7684",(0,s.jsx)(n.code,{children:"layotto-injected.yaml"}),"\u6587\u4ef6\u662f\u5df2\u7ecf\u901a\u8fc7istio\u5b8c\u6210\u6ce8\u5165\u7684\uff0c\u6574\u4e2a\u6ce8\u5165\u8fc7\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u6307\u5b9a",(0,s.jsx)(n.code,{children:"istio"}),"\u4f7f\u7528",(0,s.jsx)(n.code,{children:"Layotto"}),"\u4f5c\u4e3a\u6570\u636e\u9762"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'istioctl manifest apply  --set .values.global.proxy.image="mosnio/proxyv2:layotto"   --set meshConfig.defaultConfig.binaryPath="/usr/local/bin/mosn"\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7",(0,s.jsx)(n.code,{children:"kube-inject"}),"\u7684\u65b9\u5f0f\u5b9e\u73b0Sidecar\u6ce8\u5165"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"istioctl kube-inject -f layotto.yaml > layotto-injected.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d",(0,s.jsx)(n.code,{children:"layotto.yaml"}),"\u6587\u4ef6\u5185\u5bb9\u5728",(0,s.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/istio-1.5.x/demo/istio/layotto.yaml",children:"\u8fd9\u91cc"})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\u628a",(0,s.jsx)(n.code,{children:"layotto-injected.yaml"}),"\u4e2d\u6240\u6709\u7684",(0,s.jsx)(n.code,{children:"/usr/local/bin/envoy"}),"\u66ff\u6362\u4e3a",(0,s.jsx)(n.code,{children:"/usr/local/bin/mosn"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'sed -i "s/\\/usr\\/local\\/bin\\/envoy/\\/usr\\/local\\/bin\\/mosn/g" ./layotto-injected.yaml\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(6540);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);