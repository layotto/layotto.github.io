"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[4944],{4036:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=e(4848),i=e(8453);const s={},o="Source parsing layotto startup process",a={permalink:"/en-US/blog/code/start_process/start_process",editUrl:"https://github.com/mosn/layotto/edit/main//i18n/en-US/docusaurus-plugin-content-blog/code/start_process/start_process.md",source:"@site/i18n/en-US/docusaurus-plugin-content-blog/code/start_process/start_process.md",title:"Source parsing layotto startup process",description:"Author Intro to\uff1a",date:"2024-07-05T05:47:11.000Z",tags:[],readingTime:5.175,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Layotto Source Parsing \u2014 Processing RPC requests",permalink:"/en-US/blog/code/layotto-rpc"},nextItem:{title:"Layotto Source Parsing \u2014 WebAssembly",permalink:"/en-US/blog/code/webassembly"}},c={authorsImageUrls:[]},l=[{value:"Overview",id:"overview",level:2},{value:"Source analysis",id:"source-analysis",level:2},{value:"1.cmd analysis",id:"1cmd-analysis",level:3},{value:"NewRuntimeGrpcServer Analysis",id:"newruntimegrpcserver-analysis",level:3},{value:"runtime analysis",id:"runtime-analysis",level:3},{value:"Summary",id:"summary",level:2}];function u(t){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Author Intro to\uff1a\nLibin, ",(0,r.jsx)(n.a,{href:"https://github.com/ZLBer",children:"https://github.com/ZLBer"})]}),"\n",(0,r.jsx)(n.p,{children:"Writing: 4 May 2022"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#Overview",children:"Overview"})}),"\n",(0,r.jsxs)(n.li,{children:["[source analysis](#source analysis)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[1.cmd analysis](#1.cmd analysis)"}),"\n",(0,r.jsx)(n.li,{children:"[2.Callback functionNewRuntimeGrpcServer\u5206\u6790](#2.callback function NewRuntimeGrpcServer analysis)"}),"\n",(0,r.jsx)(n.li,{children:"[3.runtimeanalyze](#3.runtime analyse)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#summary",children:"summary"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:'Layotto "Parasite" in MOSN. The start process is in effect starting MOSN, MOSN back Layotto during startup to get Layotto start.'}),"\n",(0,r.jsx)(n.h2,{id:"source-analysis",children:"Source analysis"}),"\n",(0,r.jsxs)(n.p,{children:["Everything originating from our command line: layotto start -c ",(0,r.jsx)(n.code,{children:"configpath"})]}),"\n",(0,r.jsx)(n.h3,{id:"1cmd-analysis",children:"1.cmd analysis"}),"\n",(0,r.jsx)(n.p,{children:"Main init function starts with\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func init() {   \n     //\u5c06layotto\u7684\u521d\u59cb\u5316\u51fd\u6570\u4f20\u7ed9mosn\uff0c\u8ba9mosn\u542f\u52a8\u7684\u65f6\u5019\u8fdb\u884c\u56de\u8c03\n\tmgrpc.RegisterServerHandler("runtime", NewRuntimeGrpcServer)\n     ....\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"cmd action starts to execute\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'\tAction: func(c *cli.Context) error {\n\t\tapp := mosn.NewMosn()\n\t\t//stagemanager\u7528\u4e8e\u7ba1\u7406mosn\u542f\u52a8\u7684\u6bcf\u4e2a\u9636\u6bb5\uff0c\u53ef\u4ee5\u6dfb\u52a0\u76f8\u5e94\u7684\u9636\u6bb5\u51fd\u6570\uff0c\u6bd4\u5982\u4e0b\u9762\u7684ParamsParsedStage\u3001InitStage\u3001PreStartStage\u3001AfterStartStage\n\t\t//\u8fd9\u91cc\u662f\u5c06configpath\u4f20\u7ed9mosn\uff0c\u4e0b\u9762\u90fd\u662fmosn\u76f8\u5173\u7684\u903b\u8f91\n\t\tstm := stagemanager.InitStageManager(c, c.String("config"), app) \n\t\tstm.AppendParamsParsedStage(ExtensionsRegister)\n\t\tstm.AppendParamsParsedStage(func(c *cli.Context) {\n\t\t\terr := featuregate.Set(c.String("feature-gates"))\n\t\t\tif err != nil {\n\t\t\t\tos.Exit(1)\n\t\t\t}\n\t\t})\xb7\n\t\tstm.AppendInitStage(mosn.DefaultInitStage)\n\t\tstm.AppendPreStartStage(mosn.DefaultPreStartStage)\n\t\tstm.AppendStartStage(mosn.DefaultStartStage)\n\t\t//\u8fd9\u91cc\u6dfb\u52a0layotto\u7684\u5065\u5eb7\u68c0\u67e5\u673a\u5236\n\t\tstm.AppendAfterStartStage(SetActuatorAfterStart)\n\t\tstm.Run()\n\t\t// wait mosn finished\n\t\tstm.WaitFinish()\n\t\treturn nil\n\t},\n'})}),"\n",(0,r.jsx)(n.h3,{id:"newruntimegrpcserver-analysis",children:"NewRuntimeGrpcServer Analysis"}),"\n",(0,r.jsx)(n.p,{children:"Returns NewRuntimeGrpcServer when MOSN is launched, data is an unparsed configuration, opts is a grpc configuration, returning Gpc server"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func NewRuntimeGrpcServer(data json.RawMessage, opts ...grpc.ServerOption) (mgrpc.RegisteredServer, error) {\n\t// \u5c06\u539f\u59cb\u7684\u914d\u7f6e\u6587\u4ef6\u89e3\u6790\u6210\u7ed3\u6784\u4f53\u5f62\u5f0f\u3002\n\tcfg, err := runtime.ParseRuntimeConfig(data)\n    // \u65b0\u5efalayotto runtime\uff0c runtime\u5305\u542b\u5404\u79cd\u7ec4\u4ef6\u7684\u6ce8\u518c\u5668\u548c\u5404\u79cd\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u3002\n\trt := runtime.NewMosnRuntime(cfg)\n\t// 3.runtime\u5f00\u59cb\u542f\u52a8\n\tserver, err := rt.Run(\n\t       ...\n        // 4. \u6dfb\u52a0\u6240\u6709\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u51fd\u6570\n\t \t// \u6211\u4eec\u53ea\u770b\u4e0bFile\u7ec4\u4ef6\u7684\uff0c\u5c06NewXXX()\u6dfb\u52a0\u5230\u7ec4\u4ef6Factory\u91cc\n\t\truntime.WithFileFactory(\n\t\t\tfile.NewFileFactory("aliyun.oss", alicloud.NewAliCloudOSS),\n\t\t\tfile.NewFileFactory("minio", minio.NewMinioOss),\n\t\t\tfile.NewFileFactory("aws.s3", aws.NewAwsOss),\n\t\t\tfile.NewFileFactory("tencent.oss", tencentcloud.NewTencentCloudOSS),\n\t\t\tfile.NewFileFactory("local", local.NewLocalStore),\n\t\t\tfile.NewFileFactory("qiniu.oss", qiniu.NewQiniuOSS),\n\t\t),\n\t     ...\n   return server, err\t\t \n\t\n\t)\n\t\n\t//\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"runtime-analysis",children:"runtime analysis"}),"\n",(0,r.jsxs)(n.p,{children:["Look at the structure of runtime, the composition of the ",(0,r.jsx)(n.code,{children:"runtime' at the aggregate level of the"}),"\uff1a'"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"type MosnRuntime struct {\n\t// \u5305\u62ec\u7ec4\u4ef6\u7684config\n\truntimeConfig *MosnRuntimeConfig\n\tinfo          *info.RuntimeInfo\n\tsrv           mgrpc.RegisteredServer\n\t// \u7ec4\u4ef6\u6ce8\u518c\u5668\uff0c\u7528\u6765\u6ce8\u518c\u548c\u65b0\u5efa\u7ec4\u4ef6\uff0c\u91cc\u9762\u6709\u7ec4\u4ef6\u7684NewXXX()\u51fd\u6570\n\thelloRegistry           hello.Registry\n\tconfigStoreRegistry     configstores.Registry\n\trpcRegistry             rpc.Registry\n\tpubSubRegistry          runtime_pubsub.Registry\n\tstateRegistry           runtime_state.Registry\n\tlockRegistry            runtime_lock.Registry\n\tsequencerRegistry       runtime_sequencer.Registry\n\tfileRegistry            file.Registry\n\tbindingsRegistry        mbindings.Registry\n\tsecretStoresRegistry    msecretstores.Registry\n\tcustomComponentRegistry custom.Registry\n\thellos map[string]hello.HelloService\n\t// \u5404\u79cd\u7ec4\u4ef6\n\tconfigStores map[string]configstores.Store\n\trpcs         map[string]rpc.Invoker\n\tpubSubs      map[string]pubsub.PubSub\n\tstates          map[string]state.Store\n\tfiles           map[string]file.File\n\tlocks           map[string]lock.LockStore\n\tsequencers      map[string]sequencer.Store\n\toutputBindings  map[string]bindings.OutputBinding\n\tsecretStores    map[string]secretstores.SecretStore\n\tcustomComponent map[string]map[string]custom.Component\n\tAppCallbackConn *rawGRPC.ClientConn\n\terrInt            ErrInterceptor\n\tstarted           bool\n\t//\u521d\u59cb\u5316\u51fd\u6570\n\tinitRuntimeStages []initRuntimeStage\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"runtime is the run function logic as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"func (m *MosnRuntime) Run(opts..Option) (mgrpc.RegisteredServer, error) um\n\t// launch flag\n\tm. targeted = true\n\t// newly created runtime configuration\n\to := newRuntimeOptions()\n\t// run our previously imported option,. Really register various components Factory with\n\tfor _, opt := range opts {\n\t\topt(o)\n\t}\n\t//initialization component\n\tif err := m. nitRuntime(o); err != nil {\n\t\treturn nil, err\n\t}\n\t\n\t//initialize Grpc,api assignment\n\tvar grpcOpts[]grpc. Absorption\n\tif o.srvMaker != nil LO\n\t\tgrpcOpts = append(grpcOpts, grpc.GithNewServer(o.srvMaker))\n\t}\n\tvar apis []grpc.GrpcAPI\n\tac := &grpc. pimplicationContextFe\n\t\tm.runtimeConfig.AppManagement.AppId,\n\t\tm.hellos,\n\t\tm.configStories,\n\t\tm.rpcs,\n\t\tm.pubSubs,\n\t\tm. tates,\n\t\tm.files,\n\t\tm.locks,\n\t\tm.sequencers,\n\t\tm.sendToOutputBinding,\n\t\tm.secretStories,\n\t\tm. ustomCompany,\n\t}\n     // Factor generation of each component\n\tfor _, apiFactory := range o. piFactorys LOR\n\t\tapi := apiFactory(ac)\n\t\t// init the GrpcAPI\n\t\tif err := api.Init(m. ppCallbackCon); err != nil {\n\t\t\treturn nil, err\n\t\t}\n\t\tapis = append(apis, api)\n\t}\n\t// pass the api interface and configuration to grpc\n\tgrpcOpts = append(grpcOpts,\n\t\tgrpc.GrpOptions(o.options... ,\n\t\tgrpc.MithGrpcAPIs(apis),\n\t)\n\t//start grpc\n\tvar err error = nil\n\tm. rv, err = grpc.NewGrpServer (grpcOpts...)\n\treturn m.srv, err\n}\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Component initialization function initRuntime \uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"func (m *MosnRuntime) initRuntime (r *runtimeOptions) errant error LO\n\tst := time.Now()\n\tif len(m.initRuntimeStages) === 0 56\n\t\tm.initRuntimeStages = append(m. nitRuntimeStages, DefaultInitRuntimeStage\n\t}\n\t// Call DefaultInitRuntimeStage\n\tfor _, f := range m. nitRuntime Stages FEM\n\t\terr := f(r, m)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t}\n    . .\n\treturn nil\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"DefaultInitRuntimeStage component initialization logic, call init method for each component:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"func DefaultInitRuntimeStage(o *runtimeOptions, m *MosnRuntime) error {\n\t ...\n\t //\u521d\u59cb\u5316config/state/file/lock/sequencer/secret\u7b49\u5404\u79cd\u7ec4\u4ef6\n\tif err := m.initCustomComponents(o.services.custom); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initHellos(o.services.hellos...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initConfigStores(o.services.configStores...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initStates(o.services.states...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initRpcs(o.services.rpcs...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initOutputBinding(o.services.outputBinding...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initPubSubs(o.services.pubSubs...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initFiles(o.services.files...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initLocks(o.services.locks...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initSequencers(o.services.sequencers...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initInputBinding(o.services.inputBinding...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initSecretStores(o.services.secretStores...); err != nil {\n\t\treturn err\n\t}\n\treturn nil\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example file component, see initialization function\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func (m *MosnRuntime) initFiles(files ...file.FileFactory) ERRORY ERROR LO\n\n\t//register configured components on\n\tm.fileRegistry.Register(files...)\n\tfor name, config := range m. untimesConfig.Files Fact\n\t    //create/create a new component instance\n\t\tc, err := m.fileRegistry.Create(name)\n\t\tif err !=nil L/\n\t\t\tm. rrInt(err, "creation files component %s failed", name)\n\t\t\treturn err\n\t\t}\n\t\tif err := c. nit(context.TODO(), &config); err != nil LO\n\t\t\tm. rrInt(err, "init files component %s failed", name)\n\t\t\treturn err\n\t\t}\n\t\t//assignment to runtime\n\t\tm. files[name] = c\n\t}\n\treturn nil\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Here MOSN, Grpc and Layotto are all started, and the code logic of the component can be called through the Gypc interface."}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"Overall view of the entire startup process, Layotto integration with MOSN to start, parse configuration files, generate component classes in the configuration file and expose the api of Grpc."})]})}function p(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>o,x:()=>a});var r=e(6540);const i={},s=r.createContext(i);function o(t){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),r.createElement(s.Provider,{value:n},t.children)}}}]);