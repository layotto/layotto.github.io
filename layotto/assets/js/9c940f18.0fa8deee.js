"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[5817],{1745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=t(4848),s=t(8453);const c={},o="\u53ef\u89c2\u6d4b\u6027",a={id:"start/trace/trace",title:"\u53ef\u89c2\u6d4b\u6027",description:"1. Trace\u7ba1\u7406",source:"@site/docs/start/trace/trace.md",sourceDirName:"start/trace",slug:"/start/trace/",permalink:"/layotto/docs/start/trace/",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/start/trace/trace.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u4f7f\u7528Layotto Actuator\u8fdb\u884c\u5065\u5eb7\u68c0\u67e5\u548c\u5143\u6570\u636e\u67e5\u8be2",permalink:"/layotto/docs/start/actuator/start"},next:{title:"Skywalking trace \u63a5\u5165",permalink:"/layotto/docs/start/trace/skywalking"}},i={},l=[{value:"1. Trace\u7ba1\u7406",id:"1-trace\u7ba1\u7406",level:2},{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:3},{value:"\u914d\u7f6e\u53c2\u6570\u8bf4\u660e",id:"\u914d\u7f6e\u53c2\u6570\u8bf4\u660e",level:3},{value:"Trace \u539f\u7406",id:"trace-\u539f\u7406",level:3},{value:"Trace \u6846\u67b6\u7684\u8bbe\u8ba1",id:"trace-\u6846\u67b6\u7684\u8bbe\u8ba1",level:3},{value:"Span\u7ed3\u6784\uff1a",id:"span\u7ed3\u6784",level:4},{value:"Generator\u63a5\u53e3\uff1a",id:"generator\u63a5\u53e3",level:4},{value:"Exporter\u63a5\u53e3\uff1a",id:"exporter\u63a5\u53e3",level:4},{value:"Span\u7684\u4e0a\u4e0b\u6587\u4f20\u9012\uff1a",id:"span\u7684\u4e0a\u4e0b\u6587\u4f20\u9012",level:4},{value:"Layotto\u4fa7",id:"layotto\u4fa7",level:5},{value:"Component\u4fa7",id:"component\u4fa7",level:5},{value:"2. Metrics\u7ba1\u7406",id:"2-metrics\u7ba1\u7406",level:2},{value:"\u914d\u7f6e\u89e3\u91ca",id:"\u914d\u7f6e\u89e3\u91ca",level:3},{value:"\u57cb\u70b9\u3001\u7edf\u8ba1",id:"\u57cb\u70b9\u7edf\u8ba1",level:4},{value:"\u5c55\u793ametrics\u6570\u636e",id:"\u5c55\u793ametrics\u6570\u636e",level:4},{value:"\u66f4\u591a\u7ec6\u8282",id:"\u66f4\u591a\u7ec6\u8282",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u53ef\u89c2\u6d4b\u6027",children:"\u53ef\u89c2\u6d4b\u6027"}),"\n",(0,r.jsx)(n.h2,{id:"1-trace\u7ba1\u7406",children:"1. Trace\u7ba1\u7406"}),"\n",(0,r.jsx)(n.h3,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/configs/config_standalone.json",children:"config_standalone.json"})," \u4e2d\uff0c\u6709\u4e00\u6bb5\u5173\u4e8etrace\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  "tracing": {\n    "enable": true,\n    "driver": "SOFATracer",\n    "config": {\n      "generator": "mosntracing",\n      "exporter": ["stdout"]\n    }\n  }\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u6bb5\u914d\u7f6e\u53ef\u4ee5\u5f00\u542flayotto\u7684trace\u80fd\u529b\uff0c\u8ba9layotto\u5728\u63a5\u5230\u8bf7\u6c42\u540e\u6253\u5370\u94fe\u8def\u8ffd\u8e2a\u65e5\u5fd7\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6765\u6307\u5b9atrace\u65e5\u5fd7\u4e0a\u62a5\u7684\u65b9\u5f0f\uff0c\u4ee5\u53caspanId,traceId\u7b49\u5b57\u6bb5\u7684\u751f\u6210\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u542f\u52a8\u4e00\u4e2alayotto\u7684server\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u6784\u5efa:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd cmd/layotto_multiple_api/\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"# build it\ngo build -o layotto\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd0\u884c:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/config_standalone.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u5e94\u7684\u8c03\u7528\u7aef\u4ee3\u7801\u5728",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/demo/flowcontrol/client.go",children:"client.go"})," \u4e2d\uff0c\u8fd0\u884c\u5b83\u4f1a\u8c03\u7528layotto\u7684SayHello\u63a5\u53e3\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:" cd ${project_path}/demo/flowcontrol/\n go build -o client\n ./client\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770blayotto\u7684\u65e5\u5fd7\uff0c\u4f1a\u770b\u5230\u6253\u5370\u51fa\u8be6\u7ec6\u7684\u94fe\u8def\u8ffd\u8e2a\u65e5\u5fd7\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:t(3922).A+"",width:"2481",height:"389"})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e\u53c2\u6570\u8bf4\u660e",children:"\u914d\u7f6e\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"trace\u914d\u7f6e\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5b57\u6bb5\u540d"}),(0,r.jsx)(n.th,{children:"\u5b57\u6bb5\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enable"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"\u5168\u5c40\u5f00\u5173\uff0c\u662f\u5426\u5f00\u542ftrace"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"driver"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"driver\u662f\u4ee3\u8868trace\u7684\u7c7b\u578b\uff0cmosn\u73b0\u6709SOFATracer\u548cskywalking\uff0c\u7528\u6237\u53ef\u4ee5\u62d3\u5c55"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"config"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"trace\u7684\u62d3\u5c55\u914d\u7f6e"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"trace\u62d3\u5c55\u914d\u7f6e\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5b57\u6bb5\u540d"}),(0,r.jsx)(n.th,{children:"\u5b57\u6bb5\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"generator"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"spanId,traceId\u7b49\u8d44\u6e90\u7684\u751f\u6210\u65b9\u5f0f\uff0c\u7528\u6237\u53ef\u81ea\u884c\u62d3\u5c55"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exporter"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u7528\u6237\u9700\u8981trace\u4e0a\u62a5\u7684\u65b9\u5f0f\uff0c\u53ef\u81ea\u884c\u5b9e\u73b0\u548c\u62d3\u5c55"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"trace-\u539f\u7406",children:"Trace \u539f\u7406"}),"\n",(0,r.jsxs)(n.p,{children:["Layotto\u4e2d\u7684 Tracing \u4f1a\u5bf9grpc\u8c03\u7528\u8fdb\u884c\u8bb0\u5f55\uff0c\u4f9d\u8d56\u4e8e\u5728grpc\u91cc\u6dfb\u52a0\u7684\u4e24\u4e2a\u62e6\u622a\u5668\uff1a ",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/diagnostics/grpc_tracing.go",children:"UnaryInterceptorFilter"})," \u3001 ",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/diagnostics/grpc_tracing.go",children:"StreamInterceptorFilter"})]}),"\n",(0,r.jsx)(n.p,{children:"\u62e6\u622a\u5668\u5728\u6bcf\u6b21grpc\u65b9\u6cd5\u8c03\u7528\u65f6\u90fd\u4f1a\u5f00\u542f\u4e00\u6b21tracing\uff0c\u751f\u6210traceId spanId\u3001\u65b0\u7684context\uff0c\u8bb0\u5f55\u65b9\u6cd5\u540d\u3001\u65f6\u95f4\uff0c\u5e76\u4e14\u4f1a\u5c06tracing\u4fe1\u606f\u901a\u8fc7context\u900f\u4f20\u4e0b\u53bb\uff0c\u8bf7\u6c42\u5904\u7406\u7ed3\u675f\u540e\u4f1a\u5c06span\u4fe1\u606f\u5bfc\u51fa\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"trace-\u6846\u67b6\u7684\u8bbe\u8ba1",children:"Trace \u6846\u67b6\u7684\u8bbe\u8ba1"}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u4f53\u7ed3\u6784\u56fe:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:t(5678).A+"",width:"757",height:"314"})}),"\n",(0,r.jsx)(n.h4,{id:"span\u7ed3\u6784",children:"Span\u7ed3\u6784\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Span struct {\n    StartTime     time.Time //\u6536\u5230\u8bf7\u6c42\u7684\u65f6\u95f4\n    EndTime       time.Time //\u8fd4\u56de\u7684\u65f6\u95f4\n    traceId       string   //traceId\n    spanId        string  //spanId\n    parentSpanId  string  //\u7236spanId\n    tags          [xprotocol.TRACE_END]string //\u62d3\u5c55\u5b57\u6bb5\uff0ccomponent\u53ef\u4ee5\u5c06\u81ea\u5df1\u7684\u4fe1\u606f\u5b58\u653e\u5230\u8be5\u5b57\u6bb5\n    operationName string\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Span\u7ed3\u6784\u5b9a\u4e49\u4e86layotto\u548c\u5176component\u4e4b\u95f4\u4f20\u9012\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0ccomponent\u53ef\u4ee5\u901a\u8fc7tags\u5c06\u81ea\u5df1\u7684\u4fe1\u606f\u4f20\u9012\u5230layotto\uff0clayotto\u505a\n\u7edf\u4e00\u7684trace\u4e0a\u62a5\uff1a"}),"\n",(0,r.jsx)(n.h4,{id:"generator\u63a5\u53e3",children:"Generator\u63a5\u53e3\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Generator interface {\n    GetTraceId(ctx context.Context) string\n    GetSpanId(ctx context.Context) string\n    GenerateNewContext(ctx context.Context, span api.Span) context.Context\n    GetParentSpanId(ctx context.Context) string\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u5bf9\u5e94\u4e0a\u9762\u7684generator\u914d\u7f6e\uff0c\u8be5\u63a5\u53e3\u4e3b\u8981\u7528\u6765\u6839\u636e\u6536\u5230\u7684context\u751f\u6210traceId,spanId,\u83b7\u5f97\u7236spanId\u4ee5\u53ca\u4f20\u9012\u7ed9\u7ec4\u4ef6\u7684context\u7684\u529f\u80fd\uff0c\u7528\u6237\n\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5df1\u7684Generator\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee3\u7801\u4e2d\u7684",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/diagnostics/genetator.go",children:"OpenGenerator"})," \u7684\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"exporter\u63a5\u53e3",children:"Exporter\u63a5\u53e3\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Exporter interface {\n    ExportSpan(s *Span)\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["exporter\u63a5\u53e3\u5b9a\u4e86\u5982\u4f55\u5c06Span\u7684\u4fe1\u606f\u4e0a\u62a5\u7ed9\u8fdc\u7aef\uff0c\u5bf9\u5e94\u914d\u7f6e\u4e2d\u7684exporter\u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u662f\u4e2a\u6570\u7ec4\uff0c\u53ef\u4ee5\u4e0a\u62a5\u7ed9\u591a\u4e2a\u670d\u52a1\u7aef\u3002\u53ef\u4ee5\n\u53c2\u7167",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/diagnostics/exporter_iml/stdout.go",children:"StdoutExporter"})," \u7684\u5b9e\u73b0,\u8be5\u5b9e\u73b0\u5c06trace\u7684\u4fe1\u606f\u6253\u5370\u5230\u6807\u51c6\u8f93\u51fa\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"span\u7684\u4e0a\u4e0b\u6587\u4f20\u9012",children:"Span\u7684\u4e0a\u4e0b\u6587\u4f20\u9012\uff1a"}),"\n",(0,r.jsx)(n.h5,{id:"layotto\u4fa7",children:"Layotto\u4fa7"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"GenerateNewContext(ctx context.Context, span api.Span) context.Context\n"})}),"\n",(0,r.jsx)(n.p,{children:"GenerateNewContext\u7528\u4e8e\u751f\u6210\u65b0\u7684context\uff0cLayotto\u901a\u8fc7Mosn\u7684variable\u80fd\u529b\u5b9e\u73b0Span\u4fe1\u606f\u5728\u4e0a\u4e0b\u6587\u4e4b\u95f4\u7684\u4f20\u9012\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"_ = variable.Set(ctx, types.VariableTraceSpan, span)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u53c2\u8003\u4ee3\u7801\u4e2d\u7684",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/diagnostics/genetator.go",children:"OpenGenerator"})," \u7684\u5b9e\u73b0"]}),"\n",(0,r.jsx)(n.h5,{id:"component\u4fa7",children:"Component\u4fa7"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728Component\u4fa7\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/components/trace/utils.go",children:"SetExtraComponentInfo"})," \u585e\u5165component\u7684\u4fe1\u606f\uff0c\n\u6bd4\u5982\u5728",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/components/configstores/etcdv3/etcdv3.go",children:"etcd configStore\u7ec4\u4ef6"})," \u6267\u884c\u4e86\u4ee5\u4e0b\u64cd\u4f5c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'\ttrace.SetExtraComponentInfo(ctx, fmt.Sprintf("method: %+v, store: %+v", "Get", "etcd"))\n'})}),"\n",(0,r.jsx)(n.p,{children:"trace\u6253\u5370\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:t(3922).A+"",width:"2481",height:"389"})}),"\n",(0,r.jsx)(n.h2,{id:"2-metrics\u7ba1\u7406",children:"2. Metrics\u7ba1\u7406"}),"\n",(0,r.jsx)(n.p,{children:"layotto \u590d\u7528\u4e86 mosn \u7684 Metrics \u529f\u80fd\uff0c\u53ef\u4ee5\u5bf9\u63a5\u5404\u79cd Metrics \u5e73\u53f0\uff0c\u6bd4\u5982 prometheus\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/configs/config_standalone.json",children:"config_standalone.json"})," \u4e2d\u63d0\u4f9b\u4e86metric\u914d\u7f6e\u7684\u793a\u4f8b\uff0c\u6309\u7167\u4e0a\u8ff0\u6b65\u9aa4\u542f\u52a8layotto\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6307\u4ee4\u8bfb\u53d6 metrics \u4fe1\u606f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl --location --request GET 'http://127.0.0.1:34903/metrics' \n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:t(2397).A+"",width:"1412",height:"262"})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e\u89e3\u91ca",children:"\u914d\u7f6e\u89e3\u91ca"}),"\n",(0,r.jsxs)(n.p,{children:["\u89e3\u91ca\u4e00\u4e0b",(0,r.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/main/configs/config_standalone.json",children:"config_standalone.json"})," \u91cc metrics \u76f8\u5173\u914d\u7f6e"]}),"\n",(0,r.jsx)(n.h4,{id:"\u57cb\u70b9\u7edf\u8ba1",children:"\u57cb\u70b9\u3001\u7edf\u8ba1"}),"\n",(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/26001097/151318373-632e93bc-108d-47ae-b401-6092ed66bcdc.png",width:"50%",height:"50%"}),"\n",(0,r.jsx)(n.p,{children:'\u56fe\u4e2d\u6807\u7ea2\u7684\u8fd9\u6bb5\u914d\u7f6e\u4f1a\u542f\u7528mosn\u7684"grpc_metric" filter\u3002\u8fd9\u4e2afilter\u7684\u4f5c\u7528\u662f\u5728\u6bcf\u6b21\u5904\u7406\u5b8cgrpc\u8bf7\u6c42\u540e\uff0c\u7edf\u8ba1\u670d\u52a1\u540d\u3001\u6210\u529f\u8fd8\u662f\u5931\u8d25\u7b49\u4fe1\u606f\uff0c\u5b58\u5728\u5185\u5b58\u4e2d\u3002'}),"\n",(0,r.jsxs)(n.p,{children:["\u8be6\u89c1 ",(0,r.jsx)(n.a,{href:"https://github.com/mosn/mosn/blob/70751eae7a13dd1b3ac84c31b1ba85c45945ef69/pkg/filter/stream/grpcmetric/metric.go#L54",children:"mosn\u4ee3\u7801"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u5c55\u793ametrics\u6570\u636e",children:"\u5c55\u793ametrics\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'  "metrics": {\n    "sinks": [\n      {\n        "type": "prometheus",\n        "config": {\n          "port": 34903\n        }\n      }\n    ]\n  }\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u6bb5\u5176\u5b9e\u4e5f\u662fmosn\u7684\u914d\u7f6e\uff0c\u4f1a\u6253\u5f0034903\u7aef\u53e3\uff0c\u6309 prometheus \u7684\u6570\u636e\u683c\u5f0f\u8fd4\u56de\u5185\u5b58\u4e2d\u7684 metrics \u6307\u6807\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u66f4\u591a\u7ec6\u8282",children:"\u66f4\u591a\u7ec6\u8282"}),"\n",(0,r.jsxs)(n.p,{children:["mosn\u7684 metrics \u539f\u7406\u53ef\u4ee5\u53c2\u7167 ",(0,r.jsx)(n.a,{href:"https://mosn.io/blog/code/mosn-log/",children:"mosn\u5b98\u65b9\u6587\u6863"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2397:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/metric-7fbf97bc1de45cd7194171fccecf8ccc.png"},5678:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/structure-98be342f9c3b45d878a6ae91f34f83bc.png"},3922:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/trace-fbcc4bcfecd0557f71a0a59d59aa600d.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);