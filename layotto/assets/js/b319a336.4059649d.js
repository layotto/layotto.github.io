"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[2871],{8025:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(4848),r=n(8453);const i={},c="\u6e90\u7801\u89e3\u6790 4\u5c42\u6d41\u91cf\u6cbb\u7406\uff0ctcp\u6d41\u91cfdump",a={permalink:"/layotto/blog/tcpcopy_code_analyze",editUrl:"https://github.com/mosn/layotto/edit/main//blog/tcpcopy_code_analyze.md",source:"@site/blog/tcpcopy_code_analyze.md",title:"\u6e90\u7801\u89e3\u6790 4\u5c42\u6d41\u91cf\u6cbb\u7406\uff0ctcp\u6d41\u91cfdump",description:"\u4f5c\u8005\u7b80\u4ecb\uff1a",date:"2024-07-08T02:36:12.000Z",tags:[],readingTime:4.28,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"\u8682\u8681\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u884c\u65f6\u7684\u63a2\u7d22\u548c\u5b9e\u8df5 - ArchSummit \u4e0a\u6d77",permalink:"/layotto/blog/exploration-and-practice-of-antcloud-native-application-runtime-archsummit-shanghai"},nextItem:{title:"MOSN \u5b50\u9879\u76ee Layotto\uff1a\u5f00\u542f\u670d\u52a1\u7f51\u683c+\u5e94\u7528\u8fd0\u884c\u65f6\u65b0\u7bc7\u7ae0",permalink:"/layotto/blog/mosn-subproject-layotto-opening-a-new-chapter-in-service-grid-application-runtime"}},l={authorsImageUrls:[]},p=[{value:"Overview",id:"overview",level:2},{value:"\u524d\u63d0\uff1a",id:"\u524d\u63d0",level:2},{value:"\u6e90\u7801\u5206\u6790",id:"\u6e90\u7801\u5206\u6790",level:2},{value:"\u4ee3\u7801\u5747\u5728\uff1a tcpcopy\u4ee3\u7801",id:"\u4ee3\u7801\u5747\u5728-tcpcopy\u4ee3\u7801",level:3},{value:"model.go\u5206\u6790",id:"modelgo\u5206\u6790",level:3},{value:"persistence.go\u5206\u6790",id:"persistencego\u5206\u6790",level:3},{value:"tcpcopy.go\u5206\u6790",id:"tcpcopygo\u5206\u6790",level:3}];function s(t){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"\u4f5c\u8005\u7b80\u4ecb\uff1a\n\u9f9a\u4e2d\u5f3a\uff0c\u662f\u5f00\u6e90\u793e\u533a\u7684\u7231\u597d\u8005\uff0c\u81f4\u529b\u4e8e\u62e5\u62b1\u5f00\u6e90\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u5199\u4f5c\u65f6\u95f4: 2022\u5e744\u670826\u65e5"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(e.p,{children:"\u6b64\u6587\u6863\u7684\u76ee\u7684\u5728\u4e8e\u5206\u6790 tcp \u6d41\u91cf dump \u7684\u5b9e\u73b0"}),"\n",(0,o.jsx)(e.h2,{id:"\u524d\u63d0",children:"\u524d\u63d0\uff1a"}),"\n",(0,o.jsx)(e.p,{children:"\u6587\u6863\u5185\u5bb9\u6240\u6d89\u53ca\u4ee3\u7801\u7248\u672c\u5982\u4e0b"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/mosn/layotto",children:"https://github.com/mosn/layotto"})}),"\n",(0,o.jsx)(e.p,{children:"Layotto   0e97e970dc504e0298017bd956d2841c44c0810b\uff08main\u5206\u652f\uff09"}),"\n",(0,o.jsx)(e.h2,{id:"\u6e90\u7801\u5206\u6790",children:"\u6e90\u7801\u5206\u6790"}),"\n",(0,o.jsxs)(e.h3,{id:"\u4ee3\u7801\u5747\u5728-tcpcopy\u4ee3\u7801",children:["\u4ee3\u7801\u5747\u5728\uff1a ",(0,o.jsx)(e.a,{href:"https://github.com/mosn/layotto/tree/main/pkg/filter/network/tcpcopy",children:"tcpcopy\u4ee3\u7801"})]}),"\n",(0,o.jsx)(e.h3,{id:"modelgo\u5206\u6790",children:"model.go\u5206\u6790"}),"\n",(0,o.jsx)(e.p,{children:"\u6b64\u7c7b\u662f tcpcopy \u7684\u914d\u7f6e\u5bf9\u8c61\u7684\u6838\u5fc3\u7c7b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'type DumpConfig struct {\n\tSwitch     string  `json:"switch"`       // dump \u5f00\u5173.\u914d\u7f6e\u503c\uff1a\'ON\' \u6216 \'OFF\'\n\tInterval   int     `json:"interval"`     // dump \u91c7\u6837\u95f4\u9694\uff0c \u5355\u4f4d: \u79d2\n\tDuration   int     `json:"duration"`     // \u5355\u4e2a\u91c7\u6837\u5468\u671f\uff0c \u5355\u4f4d: \u79d2\n\tCpuMaxRate float64 `json:"cpu_max_rate"` // cpu \u6700\u5927\u4f7f\u7528\u7387\u3002\u5f53\u8d85\u8fc7\u6b64\u9608\u503c,dump \u529f\u80fd\u5c06\u505c\u6b62\n\tMemMaxRate float64 `json:"mem_max_rate"` // mem \u6700\u5927\u4f7f\u7528\u7387\u3002\u5f53\u8d85\u8fc7\u6b64\u9608\u503c,dump \u529f\u80fd\u5c06\u505c\u6b62\n}\n\ntype DumpUploadDynamicConfig struct {\n\tUnique_sample_window string             // \u6307\u5b9a\u91c7\u6837\u7a97\u53e3\n\tBusinessType         _type.BusinessType // \u4e1a\u52a1\u7c7b\u578b\n\tPort                 string             // \u7aef\u53e3\n\tBinary_flow_data     []byte             // \u4e8c\u8fdb\u5236\u6570\u636e\n\tPortrait_data        string             // \u7528\u6237\u4e0a\u4f20\u7684\u6570\u636e\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"persistencego\u5206\u6790",children:"persistence.go\u5206\u6790"}),"\n",(0,o.jsx)(e.p,{children:"\u6b64\u7c7b\u662f tcpcopy \u7684 dump \u6301\u4e45\u5316\u6838\u5fc3\u5904\u7406\u7c7b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'// \u8be5\u65b9\u6cd5\u5728 tcpcopy.go \u4e2d OnData \u4e2d\u8c03\u7528\nfunc IsPersistence() bool {\n\t// \u5224\u65ad dump \u5f00\u5173\u662f\u5426\u5f00\u542f\n\tif !strategy.DumpSwitch {\n\t\tif log.DefaultLogger.GetLogLevel() >= log.DEBUG {\n\t\t\tlog.DefaultLogger.Debugf("%s the dump switch is %t", model.LogDumpKey, strategy.DumpSwitch)\n\t\t}\n\t\treturn false\n\t}\n\n\t// \u5224\u65ad\u662f\u5426\u5728\u91c7\u6837\u7a97\u53e3\u4e2d\n\tif atomic.LoadInt32(&strategy.DumpSampleFlag) == 0 {\n\t\tif log.DefaultLogger.GetLogLevel() >= log.DEBUG {\n\t\t\tlog.DefaultLogger.Debugf("%s the dump sample flag is %d", model.LogDumpKey, strategy.DumpSampleFlag)\n\t\t}\n\t\treturn false\n\t}\n\n\t// \u5224\u65ad\u662f\u5426 dump \u529f\u80fd\u505c\u6b62\uff08\u83b7\u53d6\u7cfb\u7edf\u8d1f\u8f7d\u5224\u65ad\u5904\u7406\u5668\u548c\u5185\u5b58\u662f\u5426\u8d85\u8fc7 tcpcopy \u7684\u9608\u503c\uff0c\u5982\u679c\u8d85\u8fc7\u5219\u505c\u6b62\uff09\n\tif !strategy.IsAvaliable() {\n\t\tif log.DefaultLogger.GetLogLevel() >= log.DEBUG {\n\t\t\tlog.DefaultLogger.Debugf("%s the system usages are beyond max rate.", model.LogDumpKey)\n\t\t}\n\t\treturn false\n\t}\n\n\treturn true\n}\n\n// \u6839\u636e\u914d\u7f6e\u4fe1\u606f\u6301\u4e45\u5316\u6570\u636e\nfunc persistence(config *model.DumpUploadDynamicConfig) {\n\t// 1.\u6301\u4e45\u5316\u4e8c\u8fdb\u5236\u6570\u636e\n\tif config.Binary_flow_data != nil && config.Port != "" {\n\t\tif GetTcpcopyLogger().GetLogLevel() >= log.INFO {\n\t\t\tGetTcpcopyLogger().Infof("[%s][%s]% x", config.Unique_sample_window, config.Port, config.Binary_flow_data)\n\t\t}\n\t}\n\tif config.Portrait_data != "" && config.BusinessType != "" {\n\t\t// 2. \u6301\u4e45\u5316\u7528\u6237\u5b9a\u4e49\u7684\u6570\u636e\n\t\tif GetPortraitDataLogger().GetLogLevel() >= log.INFO {\n\t\t\tGetPortraitDataLogger().Infof("[%s][%s][%s]%s", config.Unique_sample_window, config.BusinessType, config.Port, config.Portrait_data)\n\t\t}\n\n\t\t// 3. \u589e\u91cf\u6301\u4e45\u5316\u5185\u5b58\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\u7684\u53d8\u52a8\u5185\u5bb9\n\t\tbuf, err := configmanager.DumpJSON()\n\t\tif err != nil {\n\t\t\tif log.DefaultLogger.GetLogLevel() >= log.DEBUG {\n\t\t\t\tlog.DefaultLogger.Debugf("[dump] Failed to load mosn config mem.")\n\t\t\t}\n\t\t\treturn\n\t\t}\n\t\t// 3.1. \u5982\u679c\u6570\u636e\u53d8\u5316\u5219 dump \n\t\ttmpMd5ValueOfMemDump := common.CalculateMd5ForBytes(buf)\n\t\tmemLogger := GetMemLogger()\n\t\tif tmpMd5ValueOfMemDump != md5ValueOfMemDump ||\n\t\t\t(tmpMd5ValueOfMemDump == md5ValueOfMemDump && common.GetFileSize(getMemConfDumpFilePath()) <= 0) {\n\t\t\tmd5ValueOfMemDump = tmpMd5ValueOfMemDump\n\t\t\tif memLogger.GetLogLevel() >= log.INFO {\n\t\t\t\tmemLogger.Infof("[%s]%s", config.Unique_sample_window, buf)\n\t\t\t}\n\t\t} else {\n\t\t\tif memLogger.GetLogLevel() >= log.INFO {\n\t\t\t\tmemLogger.Infof("[%s]%+v", config.Unique_sample_window, incrementLog)\n\t\t\t}\n\t\t}\n\t}\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"tcpcopygo\u5206\u6790",children:"tcpcopy.go\u5206\u6790"}),"\n",(0,o.jsx)(e.p,{children:"\u6b64\u7c7b\u4e3a\u662f tcpcopy \u7684\u6838\u5fc3\u7c7b\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'// \u5411 Mosn \u6ce8\u518c NetWork \nfunc init() {\n\tapi.RegisterNetwork("tcpcopy", CreateTcpcopyFactory)\n}\n\n// \u8fd4\u56de tcpcopy \u5de5\u5382\nfunc CreateTcpcopyFactory(cfg map[string]interface{}) (api.NetworkFilterChainFactory, error) {\n\ttcpConfig := &config{}\n\t// dump \u7b56\u7565\u8f6c\u9759\u6001\u914d\u7f6e\n\tif stg, ok := cfg["strategy"]; ok {\n\t...\n\t}\n\t// TODO extract some other fields\n\treturn &tcpcopyFactory{\n\t\tcfg: tcpConfig,\n\t}, nil\n}\n\n// \u4f9b pkg/configmanager/parser.go \u8c03\u7528\u6dfb\u52a0\u6216\u8005\u66f4\u65b0Network filter factory\nfunc (f *tcpcopyFactory) Init(param interface{}) error {\n\t// \u8bbe\u7f6e\u76d1\u542c\u7684\u5730\u5740\u548c\u7aef\u53e3\u914d\u7f6e\n\t...\n\treturn nil\n}\n\n// \u5b9e\u73b0\u7684\u662f ReadFilter \u7684 OnData \u63a5\u53e3\uff0c\u6bcf\u6b21\u4ece\u8fde\u63a5\u62ff\u5230\u6570\u636e\u90fd\u8fdb\u65b9\u6cd5\u8fdb\u884c\u5904\u7406\nfunc (f *tcpcopyFactory) OnData(data types.IoBuffer) (res api.FilterStatus) {\n\t// \u5224\u65ad\u5f53\u524d\u8bf7\u6c42\u6570\u636e\u662f\u5426\u9700\u8981\u91c7\u6837 dump \n\tif !persistence.IsPersistence() {\n\t\treturn api.Continue\n\t}\n\n\t// \u5f02\u6b65\u7684\u91c7\u6837 dump\n\tconfig := model.NewDumpUploadDynamicConfig(strategy.DumpSampleUuid, "", f.cfg.port, data.Bytes(), "")\n\tpersistence.GetDumpWorkPoolInstance().Schedule(config)\n\treturn api.Continue\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6700\u540e\u6211\u4eec\u518d\u6765\u56de\u987e\u4e00\u4e0b\u6574\u4f53\u6d41\u7a0b\u8d70\u5411:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u4ece tcpcopy.go \u7684\u521d\u59cb\u5316\u51fd\u6570init() \u5f00\u59cb,\u7a0b\u5e8f\u5411 CreateGRPCServerFilterFactory \u4f20\u5165 CreateTcpcopyFactory."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Mosn \u521b\u5efa\u51fa\u4e00\u4e2afilter chain(\u4ee3\u7801\u4f4d\u7f6e",(0,o.jsx)(e.a,{href:"https://github.com/mosn/mosn/tree/master/pkg/filter/network/proxy/factory.go",children:"factory.go"}),") ,\u901a\u8fc7\u5faa\u73af\u8c03\u7528CreateFilterChain\u5c06\u6240\u6709\u7684filter\u52a0\u5165\u5230\u94fe\u8def\u7ed3\u6784\u5305\u62ec\u672c\u6587\u7684 tcpcopy."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u5f53\u6d41\u91cf\u901a\u8fc7 mosn \u5c06\u4f1a\u8fdb\u5165\u5230 tcpcopy.go \u7684 OnData \u65b9\u6cd5\u8fdb\u884c tcpdump \u7684\u903b\u8f91\u5904\u7406."}),"\n"]}),"\n"]})]})}function g(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(s,{...t})}):s(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>a});var o=n(6540);const r={},i=o.createContext(r);function c(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);