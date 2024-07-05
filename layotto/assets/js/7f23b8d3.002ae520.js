"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[792],{2903:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=n(4848),o=n(8453);const i={},a="FaaS\u8bbe\u8ba1\u6587\u6863",r={id:"design/faas/faas-poc-design",title:"FaaS\u8bbe\u8ba1\u6587\u6863",description:"\u4e00\u3001\u67b6\u6784\u8bbe\u8ba1",source:"@site/docs/design/faas/faas-poc-design.md",sourceDirName:"design/faas",slug:"/design/faas/faas-poc-design",permalink:"/docs/design/faas/faas-poc-design",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/design/faas/faas-poc-design.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"File API \u8bbe\u8ba1\u6587\u6863",permalink:"/docs/design/file/file-design"},next:{title:"API \u63d2\u4ef6\u8bbe\u8ba1\u6587\u6863 & \u4f7f\u7528\u6307\u5357",permalink:"/docs/design/api_plugin/design"}},d={},l=[{value:"\u4e00\u3001\u67b6\u6784\u8bbe\u8ba1",id:"\u4e00\u67b6\u6784\u8bbe\u8ba1",level:2},{value:"\u4e8c\u3001\u6838\u5fc3\u7ec4\u4ef6",id:"\u4e8c\u6838\u5fc3\u7ec4\u4ef6",level:3},{value:"A\u3001WebAssembly\uff08wasm\uff09",id:"awebassemblywasm",level:4},{value:"B\u3001Layotto",id:"blayotto",level:4},{value:"C\u3001Containerd",id:"ccontainerd",level:4},{value:"D\u3001Containerd-shim-layotto-v2",id:"dcontainerd-shim-layotto-v2",level:4},{value:"E\u3001Kubernetes",id:"ekubernetes",level:4},{value:"\u4e09\u3001Runtime ABI",id:"\u4e09runtime-abi",level:3},{value:"A. proxy-wasm-go-sdk",id:"a-proxy-wasm-go-sdk",level:4},{value:"B. proxy-wasm-go-host",id:"b-proxy-wasm-go-host",level:4}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"faas\u8bbe\u8ba1\u6587\u6863",children:"FaaS\u8bbe\u8ba1\u6587\u6863"}),"\n",(0,t.jsx)(s.h2,{id:"\u4e00\u67b6\u6784\u8bbe\u8ba1",children:"\u4e00\u3001\u67b6\u6784\u8bbe\u8ba1"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(9947).A+"",width:"1744",height:"849"})}),"\n",(0,t.jsx)(s.p,{children:"\u6574\u5957FaaS\u7684\u65b9\u6848\u4e2d\uff0c\u4e3b\u8981\u89e3\u51b3\u4e86\u4ee5\u4e0b\u4e24\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\u7f16\u8bd1\u4ea7\u751f\u7684 wasm \u6587\u4ef6\u8ddf\u955c\u50cf\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f","\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"\u76ee\u6807 wasm \u6587\u4ef6\u6700\u7ec8\u88ab\u6784\u5efa\u5230\u4e00\u4e2a\u666e\u901a\u955c\u50cf\u4e2d\uff0c\u63a8\u9001\u5230 Dockerhub \u91cc\uff0c\u62c9\u53d6\u955c\u50cf\u7684\u8fc7\u7a0b\u4e5f\u8ddf\u539f\u751f\u7684\u955c\u50cf\u4fdd\u6301\u4e00\u81f4\uff0c\u53ea\u4e0d\u8fc7\u5b9e\u9645\u8fd0\u884c\u65f6\u4f1a\u628a\u76ee\u6807 wasm \u6587\u4ef6\u4ece\u955c\u50cf\u4e2d\u63d0\u53d6\u51fa\u6765\u5355\u72ec\u52a0\u8f7d\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\u5982\u4f55\u8ba9k8s\u7ba1\u7406\u90e8\u7f72 wasm \u6587\u4ef6\uff1f","\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"\u57fa\u4e8ek8s\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\u53ca\u8c03\u5ea6\u7b56\u7565\uff0c\u7ed3\u5408Containerd\u7684v2\u63a5\u53e3\u5b9a\u4e49\uff0c\u81ea\u5b9a\u4e49\u4e86Containerd-shim-layotto-v2\u63d2\u4ef6\uff0c\u628a\u5bb9\u5668\u8fd0\u884c\u65f6\u6539\u9020\u4e3aLayotto Runtime\uff0c\u6bd4\u5982k8s\u521b\u5efa\u5bb9\u5668\u7684\u52a8\u4f5c\u53d8\u6210\u4e86\u52a0\u8f7d wasm \u5f62\u6001\u7684\u51fd\u6570\u5e76\u8fd0\u884c\u3002"}),"\n",(0,t.jsx)(s.li,{children:"\u5f97\u76ca\u4e8e WebAssembly \u4f18\u79c0\u7684\u6c99\u7bb1\u9694\u79bb\u73af\u5883\uff0cLayotto \u4f5c\u4e3a\u57fa\u5ea7\u53ef\u4ee5\u52a0\u8f7d\u8fd0\u884c\u591a\u4e2a wasm \u5f62\u6001\u7684\u51fd\u6570\uff0c\u5b83\u4eec\u867d\u7136\u90fd\u8dd1\u5728\u4e00\u4e2a\u8fdb\u7a0b\u91cc\u4f46\u4e92\u4e0d\u5f71\u54cd\uff0c\u8fd9\u79cd nanoprocess \u7684\u601d\u8def\u76f8\u6bd4\u4e8e docker \u53ef\u4ee5\u8fdb\u4e00\u6b65\u5145\u5206\u5229\u7528\u8d44\u6e90\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\u4e8c\u6838\u5fc3\u7ec4\u4ef6",children:"\u4e8c\u3001\u6838\u5fc3\u7ec4\u4ef6"}),"\n",(0,t.jsxs)(s.h4,{id:"awebassemblywasm",children:["A\u3001",(0,t.jsx)(s.a,{href:"https://webassembly.org/",children:"WebAssembly\uff08wasm\uff09"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u5bf9\u5e94\u67b6\u6784\u56fe\u4e2d\u7684 wasm1\uff0cwasm2\uff0c\u5b83\u4eec\u4f5c\u4e3a\u51fd\u6570\u5b58\u5728\u7684\u5f62\u5f0f\uff0c\u628a\u5f00\u53d1\u597d\u7684\u51fd\u6570\u7f16\u8bd1\u6210",(0,t.jsx)(s.code,{children:"*.wasm"}),"\u5f62\u5f0f\u5e76\u8fd0\u884c\uff0c\u5145\u5206\u5229\u7528 WebAssembly \u8fd9\u9879\u6280\u672f\u63d0\u4f9b\u7684\u6c99\u7bb1\u9694\u79bb\u73af\u5883\uff0c\u8fbe\u5230\u51fd\u6570\u4e4b\u95f4\u4e92\u4e0d\u5f71\u54cd\u7684\u76ee\u7684\u3002"]}),"\n",(0,t.jsxs)(s.h4,{id:"blayotto",children:["B\u3001",(0,t.jsx)(s.a,{href:"https://github.com/mosn/layotto",children:"Layotto"})]}),"\n",(0,t.jsx)(s.p,{children:"\u5b9a\u4f4d\u662f\u4e3a\u51fd\u6570\u63d0\u4f9b\u670d\u52a1\uff0c\u8d44\u6e90\uff0c\u5b89\u5168\u4e09\u5927\u4fdd\u969c\u3002\u4f5c\u4e3a\u51fd\u6570\u8fd0\u884c\u7684\u57fa\u5ea7\uff0c\u63d0\u4f9b\u5305\u62ec WebAssembly \u8fd0\u884c\u65f6\uff0c\u57fa\u7840\u8bbe\u65bd\u8bbf\u95ee\u5165\u53e3\uff0c\u51fd\u6570\u53ef\u4f7f\u7528\u6700\u5927\u8d44\u6e90\u9650\u5236\uff0c\u51fd\u6570\u8fdb\u884c\u7cfb\u7edf\u8c03\u7528\u6743\u9650\u9a8c\u8bc1\u7b49\u529f\u80fd\u3002"}),"\n",(0,t.jsxs)(s.h4,{id:"ccontainerd",children:["C\u3001",(0,t.jsx)(s.a,{href:"https://containerd.io/",children:"Containerd"})]}),"\n",(0,t.jsx)(s.p,{children:"\u5b98\u65b9\u652f\u6301\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff0cdocker \u662f\u76ee\u524d\u4f7f\u7528\u573a\u666f\u6700\u591a\u7684\u4e00\u79cd\u5b9e\u73b0\uff0c\u6b64\u5916kata, gvisor\u7b49\u5b89\u5168\u5bb9\u5668\u4e5f\u4f7f\u7528\u4e86\u8be5\u6280\u672f\uff0cLayotto\u4e5f\u501f\u9274\u4e86\u5b83\u4eec\u7684\u5b9e\u73b0\u601d\u8def\uff0c\u628a\u51fd\u6570\u52a0\u8f7d\u8fd0\u884c\u7684\u8fc7\u7a0b\u878d\u5165\u5230\u5bb9\u5668\u8fd0\u884c\u65f6\u7684\u5177\u4f53\u5b9e\u73b0\u4e2d\u3002"}),"\n",(0,t.jsxs)(s.h4,{id:"dcontainerd-shim-layotto-v2",children:["D\u3001",(0,t.jsx)(s.a,{href:"https://github.com/layotto/containerd-wasm",children:"Containerd-shim-layotto-v2"})]}),"\n",(0,t.jsx)(s.p,{children:"\u57fa\u4e8eContainerd\u7684V2\u63a5\u53e3\u5b9a\u4e49\uff0c\u5b9a\u5236\u4e86\u5bb9\u5668\u8fd0\u884c\u65f6\u903b\u8f91\uff0c\u6bd4\u5982\u521b\u5efa\u5bb9\u5668\u7684\u52a8\u4f5c\u5b9e\u73b0\u4e3a\u8ba9Layotto\u52a0\u8f7d\u5e76\u8fd0\u884cwasm\u51fd\u6570\u3002"}),"\n",(0,t.jsxs)(s.h4,{id:"ekubernetes",children:["E\u3001",(0,t.jsx)(s.a,{href:"https://kubernetes.io/",children:"Kubernetes"})]}),"\n",(0,t.jsx)(s.p,{children:"\u5f53\u524d\u5bb9\u5668\u8c03\u5ea6\u7684\u4e8b\u5b9e\u6807\u51c6\uff0c\u751f\u547d\u5468\u671f\u7ba1\u7406\u53ca\u8c03\u5ea6\u7b56\u7565\u8db3\u591f\u4f18\u79c0\uff0c\u57fa\u4e8econtainerd\u7684\u65b9\u6848\u4e5f\u662f\u4e3a\u4e86\u80fd\u8ba9\u51fd\u6570\u7684\u8c03\u5ea6\u8ddfk8s\u751f\u6001\u5b8c\u7f8e\u7ed3\u5408\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"\u4e09runtime-abi",children:"\u4e09\u3001Runtime ABI"}),"\n",(0,t.jsxs)(s.h4,{id:"a-proxy-wasm-go-sdk",children:["A. ",(0,t.jsx)(s.a,{href:"https://github.com/layotto/proxy-wasm-go-sdk",children:"proxy-wasm-go-sdk"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u5b9a\u4e49\u4e86\u51fd\u6570\u8bbf\u95ee\u7cfb\u7edf\u8d44\u6e90\u53ca\u57fa\u7840\u8bbe\u65bd\u670d\u52a1\u7684\u63a5\u53e3\uff0c\u57fa\u4e8e\u793e\u533a\u7684 ",(0,t.jsx)(s.a,{href:"https://github.com/proxy-wasm/spec",children:"proxy-wasm/spec"})," \u5b9e\u73b0\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u7ed3\u5408",(0,t.jsx)(s.a,{href:"https://github.com/mosn/layotto/blob/main/spec/proto/runtime/v1/runtime.proto",children:"Runtime API"})," \u7684\u601d\u8def\uff0c\u589e\u52a0\u4e86\u5bf9\u57fa\u7840\u8bbe\u65bd\u8bbf\u95ee\u7684ABI\u3002"]}),"\n",(0,t.jsxs)(s.h4,{id:"b-proxy-wasm-go-host",children:["B. ",(0,t.jsx)(s.a,{href:"https://github.com/layotto/proxy-wasm-go-host",children:"proxy-wasm-go-host"})]}),"\n",(0,t.jsx)(s.p,{children:"\u7528\u4e8e\u5728 Layotto \u4e2d\u5b9e\u73b0Runtime ABI\u7684\u5177\u4f53\u903b\u8f91\u3002"})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9947:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/faas-design-7e8dc7f7bfa1edcf1efdbe5c17266018.jpg"},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var t=n(6540);const o={},i=t.createContext(o);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);