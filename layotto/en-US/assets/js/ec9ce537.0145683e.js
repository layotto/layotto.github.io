"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[4175],{1205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=n(4848),o=n(8453);const r={},d="Use Sequencer API to generate distributed unique and self-incrementing id",a={id:"start/sequencer/start",title:"Use Sequencer API to generate distributed unique and self-incrementing id",description:"What is Sequencer API",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/start/sequencer/start.md",sourceDirName:"start/sequencer",slug:"/start/sequencer/start",permalink:"/layotto/en-US/docs/start/sequencer/start",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/start/sequencer/start.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Distributed Lock API demo with redis",permalink:"/layotto/en-US/docs/start/lock/start"},next:{title:"use Secret API to obtain secret",permalink:"/layotto/en-US/docs/start/secret/start"}},c={},i=[{value:"What is Sequencer API",id:"what-is-sequencer-api",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"step 1. Deploy etcd and Layotto",id:"step-1-deploy-etcd-and-layotto",level:3},{value:"<strong>With Docker Compose</strong>",id:"with-docker-compose",level:4},{value:"<strong>Compile locally (not for Windows)</strong>",id:"compile-locally-not-for-windows",level:4},{value:"step 1.1 Deploy the storage system (Etcd)",id:"step-11-deploy-the-storage-system-etcd",level:4},{value:"step 1.2 Run Layotto",id:"step-12-run-layotto",level:4},{value:"step 2. Run the client program and call Layotto to generate a unique id",id:"step-2-run-the-client-program-and-call-layotto-to-generate-a-unique-id",level:3},{value:"<strong>Go</strong>",id:"go",level:4},{value:"<strong>Java</strong>",id:"java",level:4},{value:"step 3. Stop containers and release resources",id:"step-3-stop-containers-and-release-resources",level:3},{value:"<strong>Docker Compose</strong>",id:"docker-compose",level:4},{value:"<strong>Destroy the etcd container</strong>",id:"destroy-the-etcd-container",level:4},{value:"Next step",id:"next-step",level:3},{value:"What does this client program do?",id:"what-does-this-client-program-do",level:4},{value:"Want to learn more about Sequencer API?",id:"want-to-learn-more-about-sequencer-api",level:4},{value:"Details later, let&#39;s continue to experience other APIs",id:"details-later-lets-continue-to-experience-other-apis",level:4}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"use-sequencer-api-to-generate-distributed-unique-and-self-incrementing-id",children:"Use Sequencer API to generate distributed unique and self-incrementing id"}),"\n",(0,s.jsx)(t.h2,{id:"what-is-sequencer-api",children:"What is Sequencer API"}),"\n",(0,s.jsx)(t.p,{children:"The Sequencer API is used to generate distributed unique, self-incrementing IDs."}),"\n",(0,s.jsx)(t.p,{children:"The Sequencer API supports the declaration of demand for self-increment, including trend increase (WEAK) and strictly global increment (STRONG)"}),"\n",(0,s.jsx)(t.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,s.jsx)(t.p,{children:"This example shows how to call Etcd through Layotto to generate a distributed unique, self-increasing id."}),"\n",(0,s.jsx)(t.p,{children:"The architecture of this example is shown in the figure below, and the processes started are: Etcd, Layotto, and client programs"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img.png",src:n(8979).A+"",width:"476",height:"154"})}),"\n",(0,s.jsx)(t.h3,{id:"step-1-deploy-etcd-and-layotto",children:"step 1. Deploy etcd and Layotto"}),"\n",(0,s.jsx)(t.h4,{id:"with-docker-compose",children:(0,s.jsx)(t.strong,{children:"With Docker Compose"})}),"\n",(0,s.jsx)(t.p,{children:"You can start etcd and Layotto with docker-compose"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd docker/layotto-etcd\n# Start etcd and layotto with docker-compose\ndocker-compose up -d\n"})}),"\n",(0,s.jsx)(t.h4,{id:"compile-locally-not-for-windows",children:(0,s.jsx)(t.strong,{children:"Compile locally (not for Windows)"})}),"\n",(0,s.jsx)(t.p,{children:"You can run etcd with Docker, then compile and run Layotto locally."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"[!TIP|label: Not for Windows users]\nLayotto fails to compile under Windows. Windows users are recommended to deploy using docker-compose"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"step-11-deploy-the-storage-system-etcd",children:"step 1.1 Deploy the storage system (Etcd)"}),"\n",(0,s.jsxs)(t.p,{children:["For the deployment of etcd, please refer to etcd's ",(0,s.jsx)(t.a,{href:"https://etcd.io/docs/v3.5/quickstart/",children:"Official Document"})]}),"\n",(0,s.jsx)(t.p,{children:"Brief description:"}),"\n",(0,s.jsxs)(t.p,{children:["Visit ",(0,s.jsx)(t.a,{href:"https://github.com/etcd-io/etcd/releases",children:"https://github.com/etcd-io/etcd/releases"})," to download etcd of the corresponding operating system (docker is also available)"]}),"\n",(0,s.jsx)(t.p,{children:"Once the download is finished,execute the command to start:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./etcd\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The default listening address is ",(0,s.jsx)(t.code,{children:"localhost:2379"})]}),"\n",(0,s.jsx)(t.h4,{id:"step-12-run-layotto",children:"step 1.2 Run Layotto"}),"\n",(0,s.jsx)(t.p,{children:"After downloading the project code to the local, switch the code directory and compile:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/cmd/layotto\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist layotto",children:"go build\n"})}),"\n",(0,s.jsx)(t.p,{children:"Once finished, the layotto file will be generated in the directory, run it:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@background",children:"./layotto start -c ../../configs/runtime_config.json\n"})}),"\n",(0,s.jsx)(t.h3,{id:"step-2-run-the-client-program-and-call-layotto-to-generate-a-unique-id",children:"step 2. Run the client program and call Layotto to generate a unique id"}),"\n",(0,s.jsx)(t.h4,{id:"go",children:(0,s.jsx)(t.strong,{children:"Go"})}),"\n",(0,s.jsx)(t.p,{children:"Build and run the golang demo:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:' cd ${project_path}/demo/sequencer/common/\n go build -o client\n ./client -s "sequencer_demo"\n'})}),"\n",(0,s.jsx)(t.p,{children:"If the following information is printed, the demo is successful:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"Try to get next id.Key:key666 \nNext id:next_id:1  \nNext id:next_id:2  \nNext id:next_id:3  \nNext id:next_id:4  \nNext id:next_id:5  \nNext id:next_id:6  \nNext id:next_id:7  \nNext id:next_id:8  \nNext id:next_id:9  \nNext id:next_id:10  \nDemo success!\n"})}),"\n",(0,s.jsx)(t.h4,{id:"java",children:(0,s.jsx)(t.strong,{children:"Java"})}),"\n",(0,s.jsx)(t.p,{children:"Download java sdk and examples:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist java-sdk",children:"git clone https://github.com/layotto/java-sdk\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"cd java-sdk\n"})}),"\n",(0,s.jsx)(t.p,{children:"Build the demo:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"@if.not.exist examples-sequencer/target/examples-sequencer-jar-with-dependencies.jar",children:"# build example jar\nmvn -f examples-sequencer/pom.xml clean package\n"})}),"\n",(0,s.jsx)(t.p,{children:"Run it:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"java -jar examples-sequencer/target/examples-sequencer-jar-with-dependencies.jar\n"})}),"\n",(0,s.jsx)(t.p,{children:"If the following information is printed, the demo is successful:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"Try to get next id.Key: examples\nNext id: 1\nTry to get next id.Key: examples\nNext id: 2\nTry to get next id.Key: examples\nNext id: 3\nTry to get next id.Key: examples\nNext id: 4\nTry to get next id.Key: examples\nNext id: 5\nTry to get next id.Key: examples\nNext id: 6\nTry to get next id.Key: examples\nNext id: 7\nTry to get next id.Key: examples\nNext id: 8\nTry to get next id.Key: examples\nNext id: 9\nTry to get next id.Key: examples\nNext id: 10\n"})}),"\n",(0,s.jsx)(t.h3,{id:"step-3-stop-containers-and-release-resources",children:"step 3. Stop containers and release resources"}),"\n",(0,s.jsx)(t.h4,{id:"docker-compose",children:(0,s.jsx)(t.strong,{children:"Docker Compose"})}),"\n",(0,s.jsx)(t.p,{children:"If you started etcd and Layotto with docker-compose, you can shut them down as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd ${project_path}/docker/layotto-etcd\ndocker-compose stop\n"})}),"\n",(0,s.jsx)(t.h4,{id:"destroy-the-etcd-container",children:(0,s.jsx)(t.strong,{children:"Destroy the etcd container"})}),"\n",(0,s.jsx)(t.p,{children:"If you started etcd with Docker, you can destroy the etcd container as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"docker rm -f etcd\n"})}),"\n",(0,s.jsx)(t.h3,{id:"next-step",children:"Next step"}),"\n",(0,s.jsx)(t.h4,{id:"what-does-this-client-program-do",children:"What does this client program do?"}),"\n",(0,s.jsx)(t.p,{children:"The demo client program uses the SDK provided by Layotto, calls the Layotto Sequencer API, and generates a distributed unique, self-increasing id."}),"\n",(0,s.jsxs)(t.p,{children:["The golang sdk is located in the ",(0,s.jsx)(t.code,{children:"sdk"})," directory, and the java sdk is in ",(0,s.jsx)(t.a,{href:"https://github.com/layotto/java-sdk",children:"https://github.com/layotto/java-sdk"})]}),"\n",(0,s.jsx)(t.p,{children:"In addition to using sdk, you can also interact with Layotto directly through grpc in any language you like."}),"\n",(0,s.jsx)(t.p,{children:"In fact, sdk is only a very thin package for grpc, using sdk is about equal to directly using grpc."}),"\n",(0,s.jsx)(t.h4,{id:"want-to-learn-more-about-sequencer-api",children:"Want to learn more about Sequencer API?"}),"\n",(0,s.jsx)(t.p,{children:"What does the Sequencer API do, what problems it solves, and in what scenarios should I use it?"}),"\n",(0,s.jsxs)(t.p,{children:["If you are confused and want to know more details about the use of Sequencer API, you can read ",(0,s.jsx)(t.a,{href:"api_reference/sequencer/reference",children:"Sequencer API Usage Document"})]}),"\n",(0,s.jsx)(t.h4,{id:"details-later-lets-continue-to-experience-other-apis",children:"Details later, let's continue to experience other APIs"}),"\n",(0,s.jsx)(t.p,{children:"Explore other Quickstarts through the navigation bar on the left."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8979:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdwAAACaCAYAAAAD1fkwAAAbGklEQVR4Xu3djXcU1R3G8f5NhSMEjhLQAxTKUbQUDXJQEQQtYFtbKkoRefGFN5XiCy2ghIqiBLCICKWIiCJqqaBF0RpQ3uVN0fBS8Fef23N3h8lsspnsTDKz38859yi7SUg2P+4z987de39iAAAgcT8JPwAAACqPwAUAIAUELgAAKSBwAQBIAYELAEAKCFwAAFJA4AIAkAICFwCAFBC4AACkgMAFACAFBC4AACkgcAEASAGBCwBACghcAABSQOACAJACAhcAgBQQuAAApIDABQAgBQQuAAApIHABAO126dIl+/bbb+3QoUO2d+9e27Vrl73//vv29ttv25YtW2zjxo22bt06W716ta1YscJWrlxpr7zyiq1fv942bdpkb731lr377ru2c+dO+/jjj61xX6N9/fXX1tTUFP6rMovABQC06MKFC3bixAkXggrStWvX2ty5c+2ee+6x4cOHW79+/eynP/1pYq2mpsYGDx5sY8aMscmTJ9vixYtt27Zt9sknn7iAP3PmjAv8zo7ABQAUXLx40c6ePeuCbMmSJTZkyJBmAViqde3a1a644grr3r27C8kePXpYz5497corr7SrrrrKevXq5Vptba1r+n89rufV9LH6HH1ut27d3Nfq0qVLs78nqulzf/vb39rWrVvt+++/dxcJP/zwQ/jH61AELgDATf1Onz7dBgwY4IKwpaBTuI0bN84WLFhgq1atsu3bt9u+ffvsyJEjdvz4cTt9+rQbdSr4NCV87tw5F4AK80sXL7kgVNOf//vf/9r58+ddyOvjv/vuOzc1ferUKTelfPjwYduzZ4+bdq6vr7eHHnrIhg4d2ux7CjaF9dVXX20jRoywpUuX2ldffRX+cTtERQL3jjvuaPYD07LRevfubcuXLw//SgHknELuzTfftAkTJtjPfvazZn2D2i9+8QubM2eOu8/6wQcfWGNjo33zzTfhL9UhFNRHjx51Yazp5RdeeMFNcWvEHP45NFKuq6uzp556yl0YdJSKBG74h6Nlq/3+978P/0qrGheQ2W1cQLbuiy++sMcff9wGDhx42WunUa1qf968eW6R07Fjx8KfmgkaNevebkNDg91///3NpsQ17a2fc8OGDe6iI00VDVxki+536PdG4F4u3InTstWo5+YU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AACkgMAFACAFBC4AACkgcAEASAGBCwBACghcAEAsZ8+edds5lmqVtmHDBreFZFYRuACAWPbs2eNO8tFJP1FNeyyLQnLRokWhz267AQMGuMMKsorABQDEosDV8Xmt+eCDD+yGG24IP9xmBC4AoCqVE7jvvPOOOwmob9++9uqrr7rw9T777DNbtmyZLV++3BobG4uf9COdZbtlyxZ75plnbOPGjXb+/HkCFwBQncoJ3IaGBps0aZLV1ta6Y/p07J68/vrr7oD5pUuXunbjjTe6o/m8qVOnugPp9fk6+3bGjBnWv39/AhcAUH38PdzRo0c3azoL1wtPKX/77bcugDX69Q4fPmxXX321nT592nbs2GE9evSwpqamwvNr1651B9ETuACAqqPAVTDu3r27Wfvyyy8LHxcOXB+omiYO0kHzFy9edIfW33333Zc9d/LkSevSpQuBCwCoPuVMKUs4cHVPdsiQIYGPuNwjjzxis2bNCj9sffr0IXABANUnbuB+9NFHbno4+J5avYVo5syZbmpZC6nq6uoKz0njvkamlAEA1ckHrsIyqmmlsWg1su7P+ilkPadA9Yuk9HG6Rzt27Fj352PHjllNTY3t3Lmz8Pzs2bOtW7duBC4AoPoocDXqLNWCgTl58mQXzvX19e6xAwcOuFXI1113nWsTJkywvXv3Fr729u3b3SrmYcOGudGxPk8hTeACABCDFkNp1XIUBfWhQ4eaLa7KKgIXAIAUELgAAKSAwAUAIAUELgAAKSBwAQBIAYELAEAKCFwAAFJA4AIAkAICFwCAFBC4AACkgMAFACAFBC4AACkgcAEASAGBCwBACghcAABSQOACAJACAhcAgBQQuAAApIDABQAgBQQuAAApIHABAEgBgQsAQAoIXAAAUvA/rA9u+oZwHAYAAAAASUVORK5CYII="},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);