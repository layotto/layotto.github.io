"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[7777],{3821:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(4848),i=n(8453);const s={},o="\u6e90\u7801\u89e3\u6790  layotto\u542f\u52a8\u6d41\u7a0b",c={permalink:"/layotto/blog/code/start_process/start_process",editUrl:"https://github.com/mosn/layotto/edit/main//blog/code/start_process/start_process.md",source:"@site/blog/code/start_process/start_process.md",title:"\u6e90\u7801\u89e3\u6790  layotto\u542f\u52a8\u6d41\u7a0b",description:"\u4f5c\u8005\u7b80\u4ecb\uff1a",date:"2024-07-08T02:36:12.000Z",tags:[],readingTime:5.89,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Layotto \u6e90\u7801\u89e3\u6790 \u2014\u2014 \u5904\u7406 RPC \u8bf7\u6c42",permalink:"/layotto/blog/code/layotto-rpc"},nextItem:{title:"Layotto \u6e90\u7801\u89e3\u6790 \u2014\u2014 WebAssembly",permalink:"/layotto/blog/code/webassembly"}},a={authorsImageUrls:[]},l=[{value:"Overview",id:"overview",level:2},{value:"\u6e90\u7801\u5206\u6790",id:"\u6e90\u7801\u5206\u6790",level:2},{value:"1.cmd\u5206\u6790",id:"1cmd\u5206\u6790",level:3},{value:"2.\u56de\u8c03\u51fd\u6570NewRuntimeGrpcServer\u5206\u6790",id:"2\u56de\u8c03\u51fd\u6570newruntimegrpcserver\u5206\u6790",level:3},{value:"3.runtime\u5206\u6790",id:"3runtime\u5206\u6790",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function p(t){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u4f5c\u8005\u7b80\u4ecb\uff1a\n\u5f20\u7acb\u658c\uff0c",(0,r.jsx)(e.a,{href:"https://github.com/ZLBer",children:"https://github.com/ZLBer"})]}),"\n",(0,r.jsx)(e.p,{children:"\u5199\u4f5c\u65f6\u95f4: 2022\u5e745\u67084\u65e5"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#Overview",children:"Overview"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"#%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90",children:"\u6e90\u7801\u5206\u6790"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#1.cmd%E5%88%86%E6%9E%90",children:"1.cmd\u5206\u6790"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#2.%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0NewRuntimeGrpcServer%E5%88%86%E6%9E%90",children:"2.\u56de\u8c03\u51fd\u6570NewRuntimeGrpcServer\u5206\u6790"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#3.runtime%E5%88%86%E6%9E%90",children:"3.runtime\u5206\u6790"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#%E6%80%BB%E7%BB%93",children:"\u603b\u7ed3"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(e.p,{children:"Layotto \u201c\u5bc4\u751f\u201d\u5728 MOSN \u91cc\uff0c\u542f\u52a8\u6d41\u7a0b\u5176\u5b9e\u662f\u5148\u542f\u52a8 MOSN, MOSN \u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\u56de\u8c03 Layotto \uff0c\u8ba9 Layotto \u542f\u52a8\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6e90\u7801\u5206\u6790",children:"\u6e90\u7801\u5206\u6790"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e00\u5207\u8d77\u6e90\u4e8e\u6211\u4eec\u7684\u547d\u4ee4\u884c: layotto start  -c  ",(0,r.jsx)(e.code,{children:"configpath"})]}),"\n",(0,r.jsx)(e.h3,{id:"1cmd\u5206\u6790",children:"1.cmd\u5206\u6790"}),"\n",(0,r.jsx)(e.p,{children:"main \u7684 init \u51fd\u6570\u9996\u5148\u8fd0\u884c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'func init() {   \n     //\u5c06layotto\u7684\u521d\u59cb\u5316\u51fd\u6570\u4f20\u7ed9mosn\uff0c\u8ba9mosn\u542f\u52a8\u7684\u65f6\u5019\u8fdb\u884c\u56de\u8c03\n\tmgrpc.RegisterServerHandler("runtime", NewRuntimeGrpcServer)\n     ....\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"cmd \u7684 action \u5f00\u59cb\u6267\u884c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'\tAction: func(c *cli.Context) error {\n\t\tapp := mosn.NewMosn()\n\t\t//stagemanager\u7528\u4e8e\u7ba1\u7406mosn\u542f\u52a8\u7684\u6bcf\u4e2a\u9636\u6bb5\uff0c\u53ef\u4ee5\u6dfb\u52a0\u76f8\u5e94\u7684\u9636\u6bb5\u51fd\u6570\uff0c\u6bd4\u5982\u4e0b\u9762\u7684ParamsParsedStage\u3001InitStage\u3001PreStartStage\u3001AfterStartStage\n\t\t//\u8fd9\u91cc\u662f\u5c06configpath\u4f20\u7ed9mosn\uff0c\u4e0b\u9762\u90fd\u662fmosn\u76f8\u5173\u7684\u903b\u8f91\n\t\tstm := stagemanager.InitStageManager(c, c.String("config"), app) \n\t\tstm.AppendParamsParsedStage(ExtensionsRegister)\n\t\tstm.AppendParamsParsedStage(func(c *cli.Context) {\n\t\t\terr := featuregate.Set(c.String("feature-gates"))\n\t\t\tif err != nil {\n\t\t\t\tos.Exit(1)\n\t\t\t}\n\t\t})\xb7\n\t\tstm.AppendInitStage(mosn.DefaultInitStage)\n\t\tstm.AppendPreStartStage(mosn.DefaultPreStartStage)\n\t\tstm.AppendStartStage(mosn.DefaultStartStage)\n\t\t//\u8fd9\u91cc\u6dfb\u52a0layotto\u7684\u5065\u5eb7\u68c0\u67e5\u673a\u5236\n\t\tstm.AppendAfterStartStage(SetActuatorAfterStart)\n\t\tstm.Run()\n\t\t// wait mosn finished\n\t\tstm.WaitFinish()\n\t\treturn nil\n\t},\n'})}),"\n",(0,r.jsx)(e.h3,{id:"2\u56de\u8c03\u51fd\u6570newruntimegrpcserver\u5206\u6790",children:"2.\u56de\u8c03\u51fd\u6570NewRuntimeGrpcServer\u5206\u6790"}),"\n",(0,r.jsx)(e.p,{children:"MOSN \u542f\u52a8\u7684\u65f6\u5019\u56de\u8c03 NewRuntimeGrpcServer \uff0cdata \u662f\u672a\u89e3\u6790\u7684\u914d\u7f6e\u6587\u4ef6\uff0copts \u662f grpc \u7684\u914d\u7f6e\u9879\uff0c\u8fd4\u56de Grpc server"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'func NewRuntimeGrpcServer(data json.RawMessage, opts ...grpc.ServerOption) (mgrpc.RegisteredServer, error) {\n\t// \u5c06\u539f\u59cb\u7684\u914d\u7f6e\u6587\u4ef6\u89e3\u6790\u6210\u7ed3\u6784\u4f53\u5f62\u5f0f\u3002\n\tcfg, err := runtime.ParseRuntimeConfig(data)\n    // \u65b0\u5efalayotto runtime\uff0c runtime\u5305\u542b\u5404\u79cd\u7ec4\u4ef6\u7684\u6ce8\u518c\u5668\u548c\u5404\u79cd\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u3002\n\trt := runtime.NewMosnRuntime(cfg)\n\t// 3.runtime\u5f00\u59cb\u542f\u52a8\n\tserver, err := rt.Run(\n\t       ...\n        // 4. \u6dfb\u52a0\u6240\u6709\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u51fd\u6570\n\t \t// \u6211\u4eec\u53ea\u770b\u4e0bFile\u7ec4\u4ef6\u7684\uff0c\u5c06NewXXX()\u6dfb\u52a0\u5230\u7ec4\u4ef6Factory\u91cc\n\t\truntime.WithFileFactory(\n\t\t\tfile.NewFileFactory("aliyun.oss", alicloud.NewAliCloudOSS),\n\t\t\tfile.NewFileFactory("minio", minio.NewMinioOss),\n\t\t\tfile.NewFileFactory("aws.s3", aws.NewAwsOss),\n\t\t\tfile.NewFileFactory("tencent.oss", tencentcloud.NewTencentCloudOSS),\n\t\t\tfile.NewFileFactory("local", local.NewLocalStore),\n\t\t\tfile.NewFileFactory("qiniu.oss", qiniu.NewQiniuOSS),\n\t\t),\n\t     ...\n   return server, err\t\t \n\t\n\t)\n\t\n\t//\n}\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"3runtime\u5206\u6790",children:"3.runtime\u5206\u6790"}),"\n",(0,r.jsx)(e.p,{children:"\u770b\u4e00\u4e0b runtime \u7684\u7ed3\u6784\u4f53\uff0c\u4ece\u6574\u4f53\u4e0a\u628a\u63e1 runtime \u7684\u6784\u6210\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"type MosnRuntime struct {\n\t// \u5305\u62ec\u7ec4\u4ef6\u7684config\n\truntimeConfig *MosnRuntimeConfig\n\tinfo          *info.RuntimeInfo\n\tsrv           mgrpc.RegisteredServer\n\t// \u7ec4\u4ef6\u6ce8\u518c\u5668\uff0c\u7528\u6765\u6ce8\u518c\u548c\u65b0\u5efa\u7ec4\u4ef6\uff0c\u91cc\u9762\u6709\u7ec4\u4ef6\u7684NewXXX()\u51fd\u6570\n\thelloRegistry           hello.Registry\n\tconfigStoreRegistry     configstores.Registry\n\trpcRegistry             rpc.Registry\n\tpubSubRegistry          runtime_pubsub.Registry\n\tstateRegistry           runtime_state.Registry\n\tlockRegistry            runtime_lock.Registry\n\tsequencerRegistry       runtime_sequencer.Registry\n\tfileRegistry            file.Registry\n\tbindingsRegistry        mbindings.Registry\n\tsecretStoresRegistry    msecretstores.Registry\n\tcustomComponentRegistry custom.Registry\n\thellos map[string]hello.HelloService\n\t// \u5404\u79cd\u7ec4\u4ef6\n\tconfigStores map[string]configstores.Store\n\trpcs         map[string]rpc.Invoker\n\tpubSubs      map[string]pubsub.PubSub\n\tstates          map[string]state.Store\n\tfiles           map[string]file.File\n\tlocks           map[string]lock.LockStore\n\tsequencers      map[string]sequencer.Store\n\toutputBindings  map[string]bindings.OutputBinding\n\tsecretStores    map[string]secretstores.SecretStore\n\tcustomComponent map[string]map[string]custom.Component\n\tAppCallbackConn *rawGRPC.ClientConn\n\terrInt            ErrInterceptor\n\tstarted           bool\n\t//\u521d\u59cb\u5316\u51fd\u6570\n\tinitRuntimeStages []initRuntimeStage\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"runtime \u7684 run \u51fd\u6570\u903b\u8f91\u5982\u4e0b:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func (m *MosnRuntime) Run(opts ...Option) (mgrpc.RegisteredServer, error) {\n\t// \u542f\u52a8\u6807\u5fd7\n\tm.started = true\n\t// \u65b0\u5efaruntime\u914d\u7f6e\n\to := newRuntimeOptions()\n\t//\u8fd9\u91cc\u8fd0\u884c\u6211\u4eec\u4e4b\u524d\u4f20\u5165\u7684option\u51fd\u6570\uff0c\u5176\u5b9e\u5c31\u662f\u5c06\u5404\u79cd\u7ec4\u4ef6Factory\u6ce8\u518c\u8fdb\u6765\n\tfor _, opt := range opts {\n\t\topt(o)\n\t}\n\t//\u521d\u59cb\u5316\u7ec4\u4ef6\n\tif err := m.initRuntime(o); err != nil {\n\t\treturn nil, err\n\t}\n\t\n\t//\u521d\u59cb\u5316Grpc\uff0capi\u8d4b\u503c\n\tvar grpcOpts []grpc.Option\n\tif o.srvMaker != nil {\n\t\tgrpcOpts = append(grpcOpts, grpc.WithNewServer(o.srvMaker))\n\t}\n\tvar apis []grpc.GrpcAPI\n\tac := &grpc.ApplicationContext{\n\t\tm.runtimeConfig.AppManagement.AppId,\n\t\tm.hellos,\n\t\tm.configStores,\n\t\tm.rpcs,\n\t\tm.pubSubs,\n\t\tm.states,\n\t\tm.files,\n\t\tm.locks,\n\t\tm.sequencers,\n\t\tm.sendToOutputBinding,\n\t\tm.secretStores,\n\t\tm.customComponent,\n\t}\n     //\u8c03\u7528\u7ec4\u4ef6\u7684factory\u751f\u6210\u6bcf\u4e2a\u7ec4\u4ef6\n\tfor _, apiFactory := range o.apiFactorys {\n\t\tapi := apiFactory(ac)\n\t\t// init the GrpcAPI\n\t\tif err := api.Init(m.AppCallbackConn); err != nil {\n\t\t\treturn nil, err\n\t\t}\n\t\tapis = append(apis, api)\n\t}\n\t// \u5c06api\u63a5\u53e3\u548c\u914d\u7f6e\u4f20\u7ed9grpc\n\tgrpcOpts = append(grpcOpts,\n\t\tgrpc.WithGrpcOptions(o.options...),\n\t\tgrpc.WithGrpcAPIs(apis),\n\t)\n\t//\u542f\u52a8grpc\n\tvar err error = nil\n\tm.srv, err = grpc.NewGrpcServer(grpcOpts...)\n\treturn m.srv, err\n}\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u51fd\u6570 initRuntime \uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func (m *MosnRuntime) initRuntime(r *runtimeOptions) error {\n\tst := time.Now()\n\tif len(m.initRuntimeStages) == 0 {\n\t\tm.initRuntimeStages = append(m.initRuntimeStages, DefaultInitRuntimeStage)\n\t}\n\t// \u8c03\u7528DefaultInitRuntimeStage\n\tfor _, f := range m.initRuntimeStages {\n\t\terr := f(r, m)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t}\n    ...\n\treturn nil\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"DefaultInitRuntimeStage \u7ec4\u4ef6\u521d\u59cb\u5316\u903b\u8f91\uff0c\u8c03\u7528\u6bcf\u4e2a\u7ec4\u4ef6\u7684 init \u65b9\u6cd5:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func DefaultInitRuntimeStage(o *runtimeOptions, m *MosnRuntime) error {\n\t ...\n\t //\u521d\u59cb\u5316config/state/file/lock/sequencer/secret\u7b49\u5404\u79cd\u7ec4\u4ef6\n\tif err := m.initCustomComponents(o.services.custom); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initHellos(o.services.hellos...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initConfigStores(o.services.configStores...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initStates(o.services.states...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initRpcs(o.services.rpcs...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initOutputBinding(o.services.outputBinding...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initPubSubs(o.services.pubSubs...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initFiles(o.services.files...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initLocks(o.services.locks...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initSequencers(o.services.sequencers...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initInputBinding(o.services.inputBinding...); err != nil {\n\t\treturn err\n\t}\n\tif err := m.initSecretStores(o.services.secretStores...); err != nil {\n\t\treturn err\n\t}\n\treturn nil\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5 file \u7ec4\u4ef6\u4e3a\u4f8b\uff0c\u770b\u4e0b\u521d\u59cb\u5316\u51fd\u6570\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'func (m *MosnRuntime) initFiles(files ...*file.FileFactory) error {\n\n\t//\u5c06\u914d\u7f6e\u7684\u7ec4\u4ef6\u6ce8\u518c\u8fdb\u53bb\n\tm.fileRegistry.Register(files...)\n\tfor name, config := range m.runtimeConfig.Files {\n\t    //create\u8c03\u7528NewXXX()\u51fd\u6570\u65b0\u5efa\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\n\t\tc, err := m.fileRegistry.Create(name)\n\t\tif err != nil {\n\t\t\tm.errInt(err, "create files component %s failed", name)\n\t\t\treturn err\n\t\t}\n\t\tif err := c.Init(context.TODO(), &config); err != nil {\n\t\t\tm.errInt(err, "init files component %s failed", name)\n\t\t\treturn err\n\t\t}\n\t\t//\u8d4b\u503c\u7ed9runtime\n\t\tm.files[name] = c\n\t}\n\treturn nil\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u81f3\u6b64 MOSN\u3001Grpc\u3001Layotto \u90fd\u5df2\u7ecf\u542f\u52a8\u5b8c\u6210\uff0c\u901a\u8fc7 Grpc \u7684\u63a5\u53e3\u5c31\u53ef\u4ee5\u8c03\u7528\u5230\u7ec4\u4ef6\u7684\u4ee3\u7801\u903b\u8f91\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,r.jsx)(e.p,{children:"\u603b\u89c8\u6574\u4e2a\u542f\u52a8\u6d41\u7a0b\uff0cLayotto \u7ed3\u5408 MOSN \u6765\u505a\u542f\u52a8\uff0c\u89e3\u6790\u914d\u7f6e\u6587\u4ef6\uff0c\u751f\u6210\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u7ec4\u4ef6\u7c7b\uff0c\u5c06 Grpc \u7684 api \u66b4\u9732\u51fa\u53bb\u3002"})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>c});var r=n(6540);const i={},s=r.createContext(i);function o(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);