"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[6912],{9121:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=i(4848),t=i(8453);const s={},a="Dynamically configure the sending, component heated reload",r={id:"design/lifecycle/apply_configuration",title:"Dynamically configure the sending, component heated reload",description:"Issues addressed",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/design/lifecycle/apply_configuration.md",sourceDirName:"design/lifecycle",slug:"/design/lifecycle/apply_configuration",permalink:"/layotto/en-US/docs/design/lifecycle/apply_configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/design/lifecycle/apply_configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"How to Debugging Locally",permalink:"/layotto/en-US/docs/operation/local"},next:{title:"Actuator Design Document",permalink:"/layotto/en-US/docs/design/actuator/actuator-design-doc"}},c={},l=[{value:"Issues addressed",id:"issues-addressed",level:2},{value:"Product design",id:"product-design",level:2},{value:"User story",id:"user-story",level:3},{value:"Programming UI",id:"programming-ui",level:3},{value:"High-level design",id:"high-level-design",level:2},{value:"Exposes UpdateConfiguration API after startup",id:"exposes-updateconfiguration-api-after-startup",level:3},{value:"Agent is responsible for interacting and calling the UpdateConfiguration API",id:"agent-is-responsible-for-interacting-and-calling-the-updateconfiguration-api",level:3},{value:"Component Hot Reload",id:"component-hot-reload",level:3},{value:"Detailed design",id:"detailed-design",level:2},{value:"GRPC API design",id:"grpc-api-design",level:3},{value:"ComponentConfig Field Design",id:"componentconfig-field-design",level:4},{value:"Design of a common updating interface",id:"design-of-a-common-updating-interface",level:5},{value:"b. Structured definitions of each class configuration",id:"b-structured-definitions-of-each-class-configuration",level:5},{value:"Conclusion",id:"conclusion",level:5},{value:"Q: A separate API plugin or an existing API plugin",id:"q-a-separate-api-plugin-or-an-existing-api-plugin",level:4},{value:"Q: Was to configure vs active pull configuration vs push back",id:"q-was-to-configure-vs-active-pull-configuration-vs-push-back",level:4},{value:"Q: API accepts full or incremental configuration",id:"q-api-accepts-full-or-incremental-configuration",level:4},{value:"Component API design",id:"component-api-design",level:3},{value:"Future work",id:"future-work",level:2},{value:"pubsub subscriber service",id:"pubsub-subscriber-service",level:3},{value:"Component Hot Reload",id:"component-hot-reload-1",level:3}];function d(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"dynamically-configure-the-sending-component-heated-reload",children:"Dynamically configure the sending, component heated reload"}),"\n",(0,o.jsx)(n.h2,{id:"issues-addressed",children:"Issues addressed"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Now the producer user has a customized set of initialization configurations\uff1awith some configurations in the app, after app starts, sidecar, allowing sidecar to be initialized based on these configurations.Programmes are not common enough and are more common to do"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/26001097/168947177-6a26397e-4648-47f0-a8df-e898285cd8f9.png",alt:"image"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['Support "Dynamically Down Configuration".',"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"One idea is to couple the configuration file and mirror to the container via disk.For example, Dapr config item is released into Configuration CRD, CRD changes will require the carrier to reboot the cluster via k8s scroll."}),"\n",(0,o.jsxs)(n.li,{children:["Another line of thought is [inject config_store components into other components] (",(0,o.jsx)(n.a,{href:"https://github.com/mosn/layotto/issues/500#issuomment-1119390497",children:"https://github.com/mosn/layotto/issues/500#issuomment-1119390497"}),") but has some disadvantages:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Users who want to use the "Dynamic Configuration" function have no means of extending hands, no community ready-made components, and have to develop their components.\nThe runtime level is best used for some common features, "empowerment" all components, community maintenance of ready-made components, support for dynamic configuration, and user-friendliness and open boxes.'}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Another line of thought is to split the configuration between the first expert\uff1abootstrap configuration (static configuration), which is not placed in mirrors, and the dynamic configuration which supports the release of the configuration and heated reload based on the configuration."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"product-design",children:"Product design"}),"\n",(0,o.jsx)(n.h3,{id:"user-story",children:"User story"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The user changed the disaster switching configuration to Redis on the apollo page, so that the Redis component received the new configuration and switches the traffic to the Disaster Preparedness Cluster"}),"\n",(0,o.jsx)(n.li,{children:"There are already producing users who can migrate the initialization process to a new model that will be compatible downward."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"programming-ui",children:"Programming UI"}),"\n",(0,o.jsxs)(n.p,{children:["For example, the start configuration for state.redis now has the following (screenshot taken from ",(0,o.jsx)(n.a,{href:"https://docs.dapr.io/reference/components-reference/supported-state-stores/setup-redis/",children:"dapr documents"}),"\n",(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/26001097/168946975-9804d792-8851-463f-80ee-26231468f0aa.png",alt:"image"})]}),"\n",(0,o.jsx)(n.p,{children:"The status quo is that these configurations kv are initialized when the\uff1aredis component startup; all configurations are static configurations, only once, and no subsequent configuration changes are listened."}),"\n",(0,o.jsx)(n.p,{children:"But we can change\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"These kv can be dynamically employed"}),"\n",(0,o.jsxs)(n.li,{children:["layotto listen to these kv changes, except for changes that ",(0,o.jsx)(n.strong,{children:"Reinitialize component with the latest configuration"})]}),"\n",(0,o.jsx)(n.li,{children:"Dynamic update interface can be implemented if the component feels too small to reinitialize"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Advantage and disadvantages analysis\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["pros","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'runtime layer can perform some general functionality, "empowerment" all components; easy access for users, community maintenance of ready-made components, and dynamic configuration support, user open boxes'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Cons","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Realization is complex.How do you ensure that traffic does not damage during reinitialization?"}),"\n",(0,o.jsx)(n.li,{children:"I am not aware that this will not meet users' production needs, worries about early design, over-design"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"high-level-design",children:"High-level design"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/26001097/168949648-3f440a84-45d3-45c1-89ef-79cb25d49713.png",alt:"image"})}),"\n",(0,o.jsx)(n.h3,{id:"exposes-updateconfiguration-api-after-startup",children:"Exposes UpdateConfiguration API after startup"}),"\n",(0,o.jsx)(n.p,{children:"Sidear starts up or uses json files to make a new API for configuration thermal changes once it is passed:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:"rpc UpdateConfiguration( RuntimeConfig) returns (UpdateResponse)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"agent-is-responsible-for-interacting-and-calling-the-updateconfiguration-api",children:"Agent is responsible for interacting and calling the UpdateConfiguration API"}),"\n",(0,o.jsx)(n.p,{children:"That is, Sidecar is just opening an interface and waiting for others to configure it.And things that interact with the face and subscribe to configuration changes can be done with an agent 2 on the map, which subscribes to the apollo configuration change, which changes the interface with Sidecar to make Sidecar hot updates."}),"\n",(0,o.jsx)(n.p,{children:"For existing production users, you can listen to the app feeding configuration, dump configuration, load configuration on reboot and push configuration to Sidecar."}),"\n",(0,o.jsx)(n.p,{children:"For example, you can write a File Agent issue, listen to file changes, read the new configuration and notify Sidecar to reload."}),"\n",(0,o.jsx)(n.p,{children:"Agent does not have to be a separate process but also start a separate process in the main one."}),"\n",(0,o.jsx)(n.h3,{id:"component-hot-reload",children:"Component Hot Reload"}),"\n",(0,o.jsx)(n.p,{children:"When Sidecar is brought to an UpdateConfiguration API, it will:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'No "Increment Update" interface has been implemented by the judging component:'}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"UpdateConfig(ctx context.Context, metadata map[string]string) (err error, needReload bool)\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"runtime tries to update components if they have an interface, runtime"}),"\n",(0,o.jsxs)(n.li,{children:["runtime ",(0,o.jsx)(n.strong,{children:"Reinitialize component based on full configuration"})," if incremental update fails, or if the interface is not implemented"]}),"\n",(0,o.jsx)(n.li,{children:"After the new component has been reinitialized (check through readability), take over traffic from the original component"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"detailed-design",children:"Detailed design"}),"\n",(0,o.jsx)(n.h3,{id:"grpc-api-design",children:"GRPC API design"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:"Service Lifecycle L/\n\n  rpc ApplyConfiguration(DynamicConfiguration) returnns (ApplyConfigurationResponse) {}\n\n}\n\nmessage Dynamic Configuration{\n\n  Component_config = 1;\n\n} } }\n\nmessage ApplyConfigurationResponse\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"componentconfig-field-design",children:"ComponentConfig Field Design"}),"\n",(0,o.jsx)(n.h5,{id:"design-of-a-common-updating-interface",children:"Design of a common updating interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:"message Composiconfig Fact\n\n  // For example, `lock`, `state`\n  string type = 1;\n\n  // The component name. For example, `state_demo`\n  string name = 2;\n\n  map<string, string> metadata = 3;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.del,{children:["With google/protobuf/struct.proto describe dynamic json see ",(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/5296644/is-google-proto-the-best-way-to-send-dynamic-json-over-grpc",children:"https://stackoverflow.com/questions/5296644/is-google-proto-the-best-way-to-send-dynamic-json-over-grpc"})]}),"!"]}),"\n",(0,o.jsxs)(n.p,{children:["Upload configuration with ",(0,o.jsx)(n.code,{children:"map<string, string>"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Advantages\nDo not change the sdk of each language for each new API or configuration structure to allow users to pass through and sidecar side to deserialize"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The\nfield format does not show definitions, are not clear, and does not have enough personnel"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"b-structured-definitions-of-each-class-configuration",children:"b. Structured definitions of each class configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:"// Component configuration\nmessage ComponentConfigure\n  // For example, `lock`, `state`\n  string kind = 1;\n  // The component name. For example, `state_demo`\n  string name = 2;\n\n  google. Rotobuf. Cart metadata = 3;\n\n  one of common_config LO\n    LockCommonConfigurationlock_config = 4;\n\n    StateCommonConfiguration state_config = 5;\n\n    // .\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Advantage and disadvantages above"}),"\n",(0,o.jsx)(n.h5,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Select A, reduce the cost of SDK maintenance"}),"\n",(0,o.jsx)(n.h4,{id:"q-a-separate-api-plugin-or-an-existing-api-plugin",children:"Q: A separate API plugin or an existing API plugin"}),"\n",(0,o.jsx)(n.p,{children:"Write a separate API plugin"}),"\n",(0,o.jsx)(n.h4,{id:"q-was-to-configure-vs-active-pull-configuration-vs-push-back",children:"Q: Was to configure vs active pull configuration vs push back"}),"\n",(0,o.jsx)(n.p,{children:"Wait Push Configuration"}),"\n",(0,o.jsx)(n.h4,{id:"q-api-accepts-full-or-incremental-configuration",children:"Q: API accepts full or incremental configuration"}),"\n",(0,o.jsx)(n.p,{children:"Additions, sequencing issues are guaranteed by stream."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:"service Lifecycle {\n\n  rpc UpdateComponentConfiguration(stream ComponentConfig) returns (UpdateResponse){}\n\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"b. Full amount"}),"\n",(0,o.jsx)(n.p,{children:"Conclusion: b, simplerYou can add an additional interface to make incremental changes via stream, if needed."}),"\n",(0,o.jsx)(n.h3,{id:"component-api-design",children:"Component API design"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"Type Dynamic interface of Jean-Marie\n    ApplyConfig(ctx context.Context, metadata map[string]string) (err error, needReload bool)\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"future-work",children:"Future work"}),"\n",(0,o.jsx)(n.h3,{id:"pubsub-subscriber-service",children:"pubsub subscriber service"}),"\n",(0,o.jsx)(n.p,{children:"Requires some more structured configuration data to be released"}),"\n",(0,o.jsx)(n.h3,{id:"component-hot-reload-1",children:"Component Hot Reload"}),"\n",(0,o.jsx)(n.p,{children:"//TODO"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"How to ensure the loss of data during reinitialization"}),"\n",(0,o.jsx)(n.li,{children:"Config Priority\uff1ahas some configurations that are customized for a single app and some are common configurations for all app utilities, with priority for both parties"}),"\n",(0,o.jsx)(n.li,{children:"Configure transaction reading and writing to avoid dirty reading"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var o=i(6540);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);