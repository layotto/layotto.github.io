"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[7986],{9707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(4848),i=t(8453);const r={},l="Layotto go-sdk \u4f7f\u7528\u6307\u5357",s={id:"sdk_reference/go/start",title:"Layotto go-sdk \u4f7f\u7528\u6307\u5357",description:"\u4ece HelloWorld \u5165\u624b",source:"@site/docs/sdk_reference/go/start.md",sourceDirName:"sdk_reference/go",slug:"/sdk_reference/go/start",permalink:"/layotto/docs/sdk_reference/go/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/docs/sdk_reference/go/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"gRPC API \u63a5\u53e3\u6587\u6863",permalink:"/layotto/docs/api_reference/"},next:{title:"Layotto \u914d\u7f6e\u6587\u4ef6\u4ecb\u7ecd",permalink:"/layotto/docs/configuration/overview"}},c={},d=[{value:"\u4ece HelloWorld \u5165\u624b",id:"\u4ece-helloworld-\u5165\u624b",level:2},{value:"\u5feb\u8bfb\u4f53\u9a8c\u4e00\u4e0b go-sdk \u4f7f\u7528",id:"\u5feb\u8bfb\u4f53\u9a8c\u4e00\u4e0b-go-sdk-\u4f7f\u7528",level:3},{value:"go-sdk \u4f7f\u7528\u4ee3\u7801",id:"go-sdk-\u4f7f\u7528\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u914d\u7f6e\u6587\u4ef6",id:"\u76f8\u5173\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u521d\u59cb\u5316\u5b9e\u4f8b",id:"\u521d\u59cb\u5316\u5b9e\u4f8b",level:2},{value:"\u4f53\u9a8c\u5176\u4ed6\u63a5\u53e3\u51fd\u6570",id:"\u4f53\u9a8c\u5176\u4ed6\u63a5\u53e3\u51fd\u6570",level:2},{value:"\u539f\u751f GRPC \u8fde\u63a5\u8c03\u7528\u63a5\u53e3 <code>go-sdk</code> \u672a\u5305\u542b\u63a5\u53e3",id:"\u539f\u751f-grpc-\u8fde\u63a5\u8c03\u7528\u63a5\u53e3-go-sdk-\u672a\u5305\u542b\u63a5\u53e3",level:2},{value:"runtimeAPI \u63a5\u53e3",id:"runtimeapi-\u63a5\u53e3",level:3},{value:"extension \u63a5\u53e3",id:"extension-\u63a5\u53e3",level:2},{value:"\u66f4\u591a\u793a\u4f8b",id:"\u66f4\u591a\u793a\u4f8b",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"layotto-go-sdk-\u4f7f\u7528\u6307\u5357",children:"Layotto go-sdk \u4f7f\u7528\u6307\u5357"}),"\n",(0,o.jsx)(n.h2,{id:"\u4ece-helloworld-\u5165\u624b",children:"\u4ece HelloWorld \u5165\u624b"}),"\n",(0,o.jsx)(n.h3,{id:"\u5feb\u8bfb\u4f53\u9a8c\u4e00\u4e0b-go-sdk-\u4f7f\u7528",children:"\u5feb\u8bfb\u4f53\u9a8c\u4e00\u4e0b go-sdk \u4f7f\u7528"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# 1. \u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6309\u5e8f\u6267\u884c\uff0c\u521b\u5efa layotto \u4e8c\u8fdb\u5236\u7a0b\u5e8f\uff0c\u52a0\u5165\u5230\u73af\u5883\u53d8\u91cf\u4e2d\u65b9\u4fbf\u540e\u7eed\u64cd\u4f5c\ncd cmd/layotto\ngo build -o layotto\nexport PATH=$PATH:$(pwd)/layotto\n\n# 2.\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u542f\u52a8 layotto.\nlayotto start -c ../../configs/config_standalone.json\n\n# 3.\u53e6\u8d77\u4e00\u4e2a\u7ec8\u7aef\uff0c\u542f\u52a8 go-sdk \u5ba2\u6237\u7aef\u7a0b\u5e8f\ncd demo/hello/common\ngo build -o client\n./client -s helloworld\n\n## \u8f93\u51fa\u7ed3\u679c output:\nruntime client initializing for: 127.0.0.1:34904\ngreeting\n"})}),"\n",(0,o.jsx)(n.h3,{id:"go-sdk-\u4f7f\u7528\u4ee3\u7801",children:"go-sdk \u4f7f\u7528\u4ee3\u7801"}),"\n",(0,o.jsxs)(n.p,{children:["\u7b80\u5355\u89c2\u5bdf\u4e00\u4e0b ",(0,o.jsx)(n.code,{children:"client"})," \u7684\u4f7f\u7528\u6d41\u7a0b\uff0c\u4ee3\u7801\u653e\u5728 ",(0,o.jsx)(n.code,{children:"demo/hello/common/client.go"})," \u4e2d\uff0c\u4e0b\u9762\u662f\u7f29\u7565\u7248\u7684\u5185\u5bb9\uff0c\u5185\u5bb9\u5982\u4e0b"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'var storeName string\n\nfunc init() {\n\tflag.StringVar(&storeName, "s", "", "set `storeName`")\n}\n\nfunc main() {\n    flag.Parse()\n    if storeName == "" {\n\t\tpanic("storeName is empty.")\n\t}\n    \n    // \u521b\u5efa\u8fde\u63a5\uff0c\u91c7\u7528\u9ed8\u8ba4IP\u7aef\u53e3 127.0.0.1:34904\uff0c\u4e5f\u662f\u672c\u5730 layotto \u7684\u9ed8\u8ba4\u542f\u52a8\u7aef\u53e3\n\tcli, err := client.NewClient()\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\n    // \u5173\u95ed grpc \u8fde\u63a5\n\tdefer cli.Close()\t\n\t\n    // \u8c03\u7528 go-sdk \u63a5\u53e3\uff0c\u53d1\u9001\u8bf7\u6c42\n\tres, err := cli.SayHello(context.Background(), &client.SayHelloRequest{\n\t\tServiceName: storeName,\n\t})\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\n\tfmt.Println(res.Hello)\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\u76f8\u5173\u914d\u7f6e\u6587\u4ef6",children:"\u76f8\u5173\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,o.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u4e00\u4e2a\u6700\u7b80\u5355\u914d\u7f6e\u6587\u4ef6\u6765\u542f\u52a8 Layotto,\u6d4b\u8bd5\u4e0a\u9762\u7684 HelloWorld \u7a0b\u5e8f. \u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u6709\u5173\u914d\u7f6e\u6587\u4ef6\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003 ",(0,o.jsx)(n.a,{href:"/layotto/docs/configuration/overview",children:"Layotto \u914d\u7f6e\u6587\u4ef6\u4ecb\u7ecd"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "servers": [\n    {\n      "default_log_path": "stdout",\n      "default_log_level": "DEBUG",\n      "listeners": [\n        {\n          "name": "grpc",\n          "address": "127.0.0.1:34904",\n          "bind_port": true,\n          "filter_chains": [\n            {\n              "filters": [\n                {\n                  "type": "grpc",\n                  "config": {\n                    "server_name": "runtime",\n                    "grpc_config": {  \n                      "hellos": {\n                        "helloworld": {\n                          "type": "helloworld",\n                          "hello": "greeting"\n                        }\n                      }\n                    }\n                  }\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4e0a\u8ff0\u6d41\u7a0b\u4e2d\uff0cLayotto \u6ce8\u518c\u4e86\u914d\u7f6e\u6587\u4ef6\u4e2d ",(0,o.jsx)(n.code,{children:"grpc_config"})," \u5c5e\u6027\u91cc\u7684\u7ec4\u4ef6."]}),"\n",(0,o.jsxs)(n.p,{children:["\u7ec4\u4ef6\u7684\u5b9e\u73b0\u7684\u63a5\u53e3\u7c7b\u578b\u662f ",(0,o.jsx)(n.code,{children:"hellos"}),"\uff0c\u4e0b\u9762\u53ef\u4ee5\u652f\u6301\u591a\u4e2a instance \u5b9e\u4f8b\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\uff0c\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 instance \u5c5e\u6027\u662f\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u5b9e\u73b0\u8be5\u63a5\u53e3\u7684\u5b9e\u4f8b\u540d\u79f0. \u4e0a\u8ff0\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u53ea\u6d89\u53ca\u5230\u4e00\u4e2a instance ",(0,o.jsx)(n.code,{children:"helloworld"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 go-sdk \u8c03\u7528 hello \u76f8\u5173\u7684\u670d\u52a1\uff0c\u4f8b\u5982\u7a0b\u5e8f\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"SayHello"}),"\uff0c\u9700\u8981\u6307\u5b9a instance \u7684\u540d\u79f0\uff0c\u4e0a\u8ff0\u4ee3\u7801\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"ServiceName"})," \u53c2\u6570\u4f20\u9012 instance \u540d\u79f0\uff0c\u8868\u660e\u4f7f\u7528\u6307\u5b9a instance \u6765\u64cd\u4f5c\u8fd9\u6b21\u8bf7\u6c42."]}),"\n",(0,o.jsxs)(n.p,{children:["instance \u5c5e\u6027\u91cc\u8fd8\u6709 ",(0,o.jsx)(n.code,{children:"type"})," \u548c ",(0,o.jsx)(n.code,{children:"hello"})," \u4e24\u4e2a\u5b50\u5c5e\u6027\uff1a"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"type"})," \u5c5e\u6027\u662f\u6bcf\u4e2a instance \u90fd\u6709\u7684\uff0c\u8868\u660e\u4f7f\u7528\u4ec0\u4e48\u7c7b\u578b\u6765\u5b9e\u73b0\u4e86\u8be5\u63a5\u53e3\uff0c\u8fd9\u91cc\u662f ",(0,o.jsx)(n.code,{children:"helloworld"})," \u7c7b\u578b. \u8fd9\u4e2a ",(0,o.jsx)(n.code,{children:"type"})," \u76ee\u524d\u8981\u6c42\u662f\u5df2\u7ecf\u6ce8\u518c\u5230 Layotto \u4e2d\u7ec4\u4ef6\u7c7b\u578b\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/6f6508b11783f1e4fa947ff47632e74064333384/cmd/layotto/main.go#LL275C1-L275C1",children:"cmd/layotto/main.go"})," \u4e2d\u67e5\u770b\u6ce8\u518c\u7684\u7ec4\u4ef6\u7c7b\u578b.\n\u4e5f\u53ef\u4ee5\u67e5\u770b\u5404\u79cd\u7c7b\u578b\u7ec4\u4ef6\u914d\u7f6e\u6587\u4ef6\u7684",(0,o.jsx)(n.a,{href:"/layotto/docs/configuration/overview",children:"\u6587\u6863"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"hello"})," \u5c5e\u6027\u7528\u4e8e\u521d\u59cb\u5316\u7ec4\u4ef6\uff0c\u4e0d\u540c\u7c7b\u578b\u7684\u63a5\u53e3\u6709\u4e0d\u540c\u7684\u5c5e\u6027\u5b57\u6bb5. \u4e0d\u540c ",(0,o.jsx)(n.code,{children:"type"})," \u7684 instance \u4e5f\u6709\u4e0d\u540c\u7684\u5c5e\u6027\u5b57\u6bb5\u6765\u521d\u59cb\u5316. \u53ef\u4ee5\u901a\u8fc7",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/6f6508b11783f1e4fa947ff47632e74064333384/components/hello/hello.go#L32-L36",children:"\u4ee3\u7801"}),"\u67e5\u770b\u76f8\u5173\u914d\u7f6e\u5c5e\u6027\u7684\u7528\u6cd5."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u521d\u59cb\u5316\u5b9e\u4f8b",children:"\u521d\u59cb\u5316\u5b9e\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["\u76ee\u524d ",(0,o.jsx)(n.code,{children:"go-sdk"})," \u652f\u6301\u7684\u521d\u59cb\u5316\u65b9\u5f0f"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u4f7f\u7528\u9ed8\u8ba4\u7684\u7aef\u53e3 "34904"\uff0c\u4e5f\u53ef\u4ee5\u7528 runtime_GRPC_PORT \u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u7aef\u53e3\uff0c\u540c\u65f6\u4f7f\u7528\u9ed8\u8ba4\u7684 IP \u5730\u5740 "127.0.0.1"\uff0c\u5185\u90e8\u8c03\u7528 NewClientWithPort \u51fd\u6570\nNewClient() (client Client, err error)\n\n// \u53ef\u4ee5\u8bbe\u7f6e\u7aef\u53e3\uff0c\u4f7f\u7528\u9ed8\u8ba4\u7684 IP \u5730\u5740 "127.0.0.1"\uff0c\u5185\u90e8\u8c03\u7528 NewClientWithAddress \u51fd\u6570\nNewClientWithPort(port string) (client Client, err error)\n\n// \u8981\u6c42\u4f20\u5165 Address, \u5373 <ip:port> \u7684\u5f62\u5f0f\uff0c\u521b\u5efa\u5b8c GRPC conn \u540e\u8c03\u7528 NewClientWithConnection\nNewClientWithAddress(address string) (client Client, err error)\n\n// \u4f20\u5165\u7528\u6237\u81ea\u5df1\u521b\u5efa\u597d\u7684 GRPC \u8fde\u63a5\u5c01\u88c5\u6210 Client\nNewClientWithConnection(conn *grpc.ClientConn) Client\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u4f53\u9a8c\u5176\u4ed6\u63a5\u53e3\u51fd\u6570",children:"\u4f53\u9a8c\u5176\u4ed6\u63a5\u53e3\u51fd\u6570"}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee5\u5206\u5e03\u5f0fid ",(0,o.jsx)(n.code,{children:"sequencer"})," \u4e3a\u4f8b\uff0c\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"redis"})," \u7c7b\u578b\uff0c\u76f8\u5173\u53c2\u6570\u8bf7\u53c2\u8003\u8fd9\u7bc7",(0,o.jsx)(n.a,{href:"/layotto/docs/component_specs/sequencer/redis",children:"\u6587\u6863"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["\u5177\u4f53\u4ee3\u7801\u914d\u7f6e\u53c2\u8003 ",(0,o.jsx)(n.code,{children:"demo/sequencer/common/client.go"}),"\uff0c\u5185\u5bb9\u5982\u4e0b."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'const (\n    key = "key666"\n)\n\nvar storeName string\n\nfunc init() {\n    flag.StringVar(&storeName, "s", "", "set `storeName`")\n}\n\nfunc main() {\n    cli, err := client.NewClient()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tdefer cli.Close()\n\tctx := context.Background()\n\tfmt.Printf("Try to get next id.Key:%s \\n", key)\n\tfor i := 0; i < 10; i++ {\n        \n        // \u83b7\u53d6\u4e0b\u4e00\u4e2a\u5206\u5e03\u5f0fid\n\t\tid, err := cli.GetNextId(ctx, &runtimev1pb.GetNextIdRequest{\n\t\t\tStoreName: storeName, // \u8fd9\u91cc\u662f storename \u5c31\u662f\u4e0a\u6587\u4e2d\u63d0\u5230\u7684 instance \u540d\u79f0, \u9700\u8981\u4e0e\u914d\u7f6e\u6587\u4ef6\u4e2d\u586b\u5199\u7684 instance \u4fdd\u6301\u4e00\u81f4.\n\t\t\tKey:       key,\n\t\t\tOptions:   nil,\n\t\t\tMetadata:  nil,\n\t\t})\n\t\tif err != nil {\n\t\t\tpanic(err)\n\t\t}\n\t\tfmt.Printf("Next id:%v \\n", id)\n\t}\n\tfmt.Println("Demo success!")\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"GetNextId"})," \u51fd\u6570\u63a5\u53e3\u65f6\u4f20\u9012\u4e86\u4e00\u4e0b\u51e0\u4e2a\u53c2\u6570\uff1a"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["StoreName\uff1a \u8868\u660e\u5904\u7406\u6b64\u6b21\u8bf7\u6c42\u7684 instance \u540d\u79f0\uff0c\u4e0e\u4e0a\u6587\u4e2d ",(0,o.jsx)(n.code,{children:"SayHello"})," \u63a5\u53e3\u4e2d ",(0,o.jsx)(n.code,{children:"ServiceName"})," \u7684\u4f5c\u7528\u4e00\u81f4."]}),"\n",(0,o.jsx)(n.li,{children:"Key\uff1a \u5206\u5e03\u5f0f id \u7684 namespace\uff0c\u4e0d\u540c\u7684 namespace \u5141\u8bb8\u4f7f\u7528\u76f8\u540c\u7684\u5206\u5e03\u5f0f id."}),"\n",(0,o.jsx)(n.li,{children:"Options\uff1a \u586b\u5199id\u751f\u6210\u7684\u6a21\u5f0f\uff0c\u6709 strong \u548c weak \u53ef\u4f9b\u9009\u62e9. \u524d\u8005\u751f\u6210\u7684id\u662f\u7edd\u5bf9\u6bd4\u524d\u4e00\u6b21\u8bf7\u6c42\u7684 id \u5927\uff0c\u4f46\u6027\u80fd\u4e0a\u4f1a\u6709\u6240\u635f\u8017. \u540e\u8005\u5728\u6027\u80fd\u4e0a\u6709\u4f18\u52bf\uff0c\u4f46\u662f\u65e0\u6cd5\u6ee1\u8db3 id \u7edd\u5bf9\u6bd4\u524d\u4e00\u4e2a\u5927. \u9ed8\u8ba4\u4f7f\u7528 weak \u6a21\u5f0f\u751f\u6210 id."}),"\n",(0,o.jsxs)(n.li,{children:["Metadata\uff1a \u5176\u4ed6\u53c2\u6570. \u4e0d\u540c\u7c7b\u578b\u7684 instance \u9700\u8981\u4e0d\u540c\u7684 metadata \u8fdb\u884c\u5b9a\u5236\u5316\u6784\u5efa. \u4f8b\u5982\uff0c",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/6f6508b11783f1e4fa947ff47632e74064333384/components/pkg/utils/mysql.go#L42-L60",children:"mysql \u7c7b\u578b"}),"\u7684 sequencer \u652f\u6301\u4f7f\u7528 metadata \u4f20\u9012 ",(0,o.jsx)(n.code,{children:"tableName"}),"\uff0c",(0,o.jsx)(n.code,{children:"defaultPassword"})," ",(0,o.jsx)(n.code,{children:"userName"})," \u7b49\u4fe1\u606f\uff0c\u800c redis \u7c7b\u578b\u7684 instance \u5219\u4e0d\u9700\u8981\u4f20\u9012 metadata."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u8fd4\u56de\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"next_id\uff1a \u5206\u5e03\u5f0fid."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5173\u4e8e\u63a5\u53e3\u7684\u8be6\u7ec6\u4f7f\u7528\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b",(0,o.jsx)(n.a,{href:"https://mosn.io/layotto/docs/design/sequencer/design",children:"API\u8bbe\u8ba1\u6587\u6863"}),". \u53ef\u80fd\u6587\u6863\u8fd8\u672a\u5373\u4f7f\u8865\u5145\uff0c\u4e5f\u53ef\u4ee5\u67e5\u770b",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/6f6508b11783f1e4fa947ff47632e74064333384/spec/proto/runtime/v1/runtime.pb.go#L1118-L1131",children:"\u76f8\u5173\u4ee3\u7801\u6ce8\u91ca"}),"\uff0c\u53ca",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/blob/6f6508b11783f1e4fa947ff47632e74064333384/pkg/grpc/default_api/api_sequencer.go#L99-L119",children:"\u7ec4\u4ef6\u5185\u90e8\u5b9e\u73b0"}),"\u83b7\u6089."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u76f8\u5173\u53c2\u6570\u914d\u7f6e\u53c2\u6570\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"sequencer": {\n    "sequencer_demo": {\n        "type": "redis",\n        "metadata": {\n            "redisHost": "127.0.0.1:6380",\n            "redisPassword": ""\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u9a8c\u8bc1."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'# docker \u542f\u52a8 redis\ndocker run --name layotto-redis -itd -p 6380:6379 redis \n\n# \u542f\u52a8 layotto\ncd configs\nlayotto start -c config_redis.json \n\n# \u53e6\u8d77\u4e00\u4e2a\u7ec8\u7aef\uff0c\u5f00\u542f\u7a0b\u5e8f\ncd demo/sequencer/common\ngo build -o client\n./client -s sequencer_demo\n\n# output\nruntime client initializing for: 127.0.0.1:34904\nTry to get next id.Key:key666\nNext id:next_id:1\nNext id:next_id:2\nNext id:next_id:3\nNext id:next_id:4\nNext id:next_id:5\nNext id:next_id:6\nNext id:next_id:7\nNext id:next_id:8\nNext id:next_id:9\nNext id:next_id:10\nDemo success!\n\n\n# \u8fdb\u5165 redis \u5bb9\u5668\uff0c\u67e5\u770b\u76f8\u5173\u4fee\u6539\u3002\ndocker exec -it layotto-redis redis-cli -h localhost -p 6379\nlocalhost:6379> keys *\n1) "sequencer|||app1||key666"\nlocalhost:6379> get "sequencer|||app1||key666"\n"10000"\n\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"\u539f\u751f-grpc-\u8fde\u63a5\u8c03\u7528\u63a5\u53e3-go-sdk-\u672a\u5305\u542b\u63a5\u53e3",children:["\u539f\u751f GRPC \u8fde\u63a5\u8c03\u7528\u63a5\u53e3 ",(0,o.jsx)(n.code,{children:"go-sdk"})," \u672a\u5305\u542b\u63a5\u53e3"]}),"\n",(0,o.jsx)(n.p,{children:"\u76ee\u524d\uff0cgo-sdk \u53ea\u662f\u5bf9 grpc \u505a\u4e86\u4e00\u5c42\u5f88\u8584\u7684\u5c01\u88c5\uff0c\u6240\u4ee5\u5bf9\u4e8e\u4f7f\u7528\u672a\u5728 go-sdk \u540c\u6b65\u7684\u63a5\u53e3\uff0c\u53ef\u4ee5\u91c7\u7528 grpc \u7684\u65b9\u5f0f\u8fdb\u884c\u8c03\u7528."}),"\n",(0,o.jsx)(n.h3,{id:"runtimeapi-\u63a5\u53e3",children:"runtimeAPI \u63a5\u53e3"}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u91cc\u4ee5 ",(0,o.jsx)(n.code,{children:"file"})," \u63a5\u53e3\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"local"})," \u7ec4\u4ef6\u7c7b\u578b\u4e3a\u4f8b\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u901a\u8fc7\u53ef\u4ee5\u67e5\u770b ",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/tree/main/spec/proto/runtime/v1",children:(0,o.jsx)(n.code,{children:"spec/proto/runtime"})})," \u4e2d\u7684 proto \u6587\u4ef6\u6216",(0,o.jsx)(n.a,{href:"/layotto/docs/api_reference/",children:"GRPC API\u6587\u6863"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5b8c\u6574\u4ee3\u7801\u53c2\u8003 ",(0,o.jsx)(n.code,{children:"demo/file/local/client.go"}),"\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u521b\u5efa grpc \u8fde\u63a5\uff0c\u5305\u88c5 runtimeclient\nfunc main() {\n\t// conn to layotto grpc server with row grpc client\n\tconn, err := grpc.Dial("127.0.0.1:34904", grpc.WithInsecure())\n\tif err != nil {\n\t\tfmt.Printf("conn build failed,err:%+v", err)\n\t\treturn\n\t}\n\n \tc := runtimev1pb.NewRuntimeClient(conn)\n    \n    // \u8c03\u7528 file \u7684\u76f8\u5173\u63a5\u53e3\n    // ....\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 local \u6a21\u5f0f\u4e0b\u7684 ",(0,o.jsx)(n.code,{children:"Put"})," \u521b\u5efa\u9700\u8981\u8bbe\u7f6e Metadata \u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"FileMode"})," \u548c ",(0,o.jsx)(n.code,{children:"FileFlag"})," \u53c2\u6570\uff0c\u6765\u521b\u5efa\u6587\u4ef6\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// layotto server\nfunc (lf *LocalStore) Put(ctx context.Context, f *file.PutFileStu) error {\n\t// \u8fd9\u91cc\u9700\u8981 f \u4e2d\u7684 Metadata \u8bbe\u7f6e FileMode \u548c FileFlag \u53c2\u6570\n    mode, ok := f.Metadata[FileMode]\n\tif !ok {\n\t\treturn fmt.Errorf("fileMode is required for put file")\n\t}\n\tflag, ok := f.Metadata[FileFlag]\n\tif !ok {\n\t\treturn fmt.Errorf("fileFlag is required for put file")\n\t}\n\t// ....\n}\n\n\n// client\nfunc main() {\n    // grpc conn and set runtime client\n    \n    // \u8fd9\u91cc\u6211\u4eec\u5c31\u8981\u8bbe\u7f6e\u76f8\u5173\u7684 FileMode \u548c FileFlag\n\tmeta := make(map[string]string)\n\tmeta["FileMode"] = "0644"\n\tmeta["FileFlag"] = strconv.Itoa(os.O_CREATE | os.O_RDWR)\n\treq := &runtimev1pb.PutFileRequest{StoreName: StoreName, Name: FileName, Metadata: meta}\n\tstream, err := c.PutFile(context.Background())\n\t// ...\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"extension-\u63a5\u53e3",children:"extension \u63a5\u53e3"}),"\n",(0,o.jsxs)(n.p,{children:["\u76ee\u524d go-sdk \u6709\u90e8\u5206",(0,o.jsx)(n.strong,{children:"\u5efa\u8bbe\u4e2d"}),"\u63a5\u53e3\u5982 sms\uff0ccryption\uff0cemail \u7b49\u5e76\u672a\u653e\u5728 ",(0,o.jsx)(n.code,{children:"runtimeAPI"})," service \u4e2d\uff0c\u800c\u662f\u4f7f\u7528 proto \u751f\u6210\u7684 interface \u63a5\u53e3. \u6240\u4ee5\u5728\u4f7f\u7528\u6b64\u7c7b\u63a5\u53e3\u65f6\uff0c\u53ef\u4ee5\u50cf file \u63a5\u53e3\u76f4\u63a5\u8c03\u7528 grpc \u63a5\u53e3\u63a5\u53e3. \u76f8\u5173\u63a5\u53e3\u6587\u6863\u53c2\u8003 ",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/tree/main/spec/proto/extension/v1",children:"spec \u76ee\u5f55\u4e0b\u7684 proto \u6587\u4ef6"})]}),"\n",(0,o.jsx)(n.p,{children:"\u4e0b\u9762\u4ee5 email \u63a5\u53e3\u4e3a\u4f8b\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u63a5\u53e3\u8fd8\u5904\u4e8e\u5efa\u8bbe\u4e2d\uff0c\u6ca1\u6709 component \u5b9e\u73b0\uff0c\u6240\u4ee5\u65e0\u6cd5\u771f\u6b63\u8c03\u7528\uff0c\u4e0b\u9762\u4ec5\u4e3a\u7b80\u5355\u793a\u4f8b\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func main() {\n\tcli, err := client.NewClient()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\t\n\tdefer cli.Close()\n\n\ttemplate, err := cli.SendEmailWithTemplate(context.TODO(), &pb.SendEmailWithTemplateRequest{})\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn \n\t}\n\t\n\tfmt.Println(template.String())\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u66f4\u591a\u793a\u4f8b",children:"\u66f4\u591a\u793a\u4f8b"}),"\n",(0,o.jsxs)(n.p,{children:["sdk \u5176\u4ed6\u63a5\u53e3\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003 ",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/tree/main/demo",children:"demo\u76ee\u5f55\u4e0b\u7684\u4ee3\u7801\u793a\u4f8b"})," \u53ca ",(0,o.jsx)(n.a,{href:"/layotto/docs/start/",children:"quick-start \u542f\u52a8\u6587\u6863"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u67e5\u770b\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u7f16\u5199\u53ef\u4ee5\u53c2\u8003 ",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/tree/main/configs",children:"configs\u793a\u4f8b"})," \u53ca ",(0,o.jsx)(n.a,{href:"/layotto/docs/configuration/overview",children:"\u7ec4\u4ef6\u914d\u7f6e\u6587\u6863"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var o=t(6540);const i={},r=o.createContext(i);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);