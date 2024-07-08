"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[3895],{7788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(4848),a=n(8453);const s={},i="Automate testing of Quickstart documentation with tools",l={id:"development/test-quickstart",title:"Automate testing of Quickstart documentation with tools",description:"Quickstart is the face of the project, so if a new user enters the repository and finds that the Quickstart documentation doesn't work, they may be disappointed and walk away.",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/development/test-quickstart.md",sourceDirName:"development",slug:"/development/test-quickstart",permalink:"/layotto/en-US/docs/development/test-quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/development/test-quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Document Contribution Guide",permalink:"/layotto/en-US/docs/development/contributing-doc"},next:{title:"Component Development Guide",permalink:"/layotto/en-US/docs/development/developing-component"}},d={},c=[{value:"Principle",id:"principle",level:2},{value:"step 1. Install <code>mdx</code>",id:"step-1-install-mdx",level:2},{value:"step 2. Close local software that may cause conflicts",id:"step-2-close-local-software-that-may-cause-conflicts",level:2},{value:"step 3. Running documentation",id:"step-3-running-documentation",level:2},{value:"step 4. Reported an error? Test-driven development, optimize your documentation!",id:"step-4-reported-an-error-test-driven-development-optimize-your-documentation",level:2},{value:"Q: How to write &quot;testable&quot; documents",id:"q-how-to-write-testable-documents",level:3},{value:"The demo code should panic when it doesn&#39;t meet expectations",id:"the-demo-code-should-panic-when-it-doesnt-meet-expectations",level:4},{value:"It is best to delete the container and free resources at the end of the document",id:"it-is-best-to-delete-the-container-and-free-resources-at-the-end-of-the-document",level:4},{value:"What should I do if I don&#39;t want a certain command to be executed?",id:"what-should-i-do-if-i-dont-want-a-certain-command-to-be-executed",level:4},{value:"A certain shell command will hang and affect the test, what should I do?",id:"a-certain-shell-command-will-hang-and-affect-the-test-what-should-i-do",level:4},{value:"Solution 1:",id:"solution-1",level:5},{value:"Solution 2:",id:"solution-2",level:5},{value:"Solution 1:",id:"solution-1-1",level:5},{value:"Solution 2:",id:"solution-2-1",level:5},{value:"Other markdown annotations",id:"other-markdown-annotations",level:3},{value:"Fix the error and see the effect!",id:"fix-the-error-and-see-the-effect",level:3},{value:"step 5. Modify CI to automatically test the newly written quickstart document",id:"step-5-modify-ci-to-automatically-test-the-newly-written-quickstart-document",level:2}];function r(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"automate-testing-of-quickstart-documentation-with-tools",children:"Automate testing of Quickstart documentation with tools"}),"\n",(0,o.jsx)(t.p,{children:"Quickstart is the face of the project, so if a new user enters the repository and finds that the Quickstart documentation doesn't work, they may be disappointed and walk away."}),"\n",(0,o.jsx)(t.p,{children:"So we need to test Quickstart regularly to make sure it works."}),"\n",(0,o.jsx)(t.p,{children:"But the process of manually testing Quickstart periodically and fixing exceptions in the documentation is too time-consuming."}),"\n",(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*fTI5RbfAK3gAAAAAAAAAAAAAARQnAQ",width:"30%",height:"30%"}),"\n",(0,o.jsx)(t.p,{children:"It's a pain in the ass!"}),"\n",(0,o.jsx)(t.p,{children:"Let's use the tool to test the documentation automatically!"}),"\n",(0,o.jsx)(t.h2,{id:"principle",children:"Principle"}),"\n",(0,o.jsx)(t.p,{children:"Use the tool to execute all shell scripts in a markdown file sequentially, i.e. all scripts wrapped in:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-markdown",children:"```shell\n```\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Note: The script wrapped in ",(0,o.jsx)(t.code,{children:"bash"})," blocks will NOT be run."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-markdown",children:"```bash\n```\n"})}),"\n",(0,o.jsxs)(t.h2,{id:"step-1-install-mdx",children:["step 1. Install ",(0,o.jsx)(t.code,{children:"mdx"})]}),"\n",(0,o.jsxs)(t.p,{children:["see ",(0,o.jsx)(t.a,{href:"https://github.com/seeflood/mdx#installation",children:"https://github.com/seeflood/mdx#installation"})]}),"\n",(0,o.jsx)(t.h2,{id:"step-2-close-local-software-that-may-cause-conflicts",children:"step 2. Close local software that may cause conflicts"}),"\n",(0,o.jsx)(t.p,{children:"Close the local Layotto, to avoid port conflicts when running the document."}),"\n",(0,o.jsx)(t.p,{children:"Similarly, if the documentation will start containers like Redis with Docker, you need to shut down and remove containers that may cause port conflicts and container name conflicts first."}),"\n",(0,o.jsx)(t.h2,{id:"step-3-running-documentation",children:"step 3. Running documentation"}),"\n",(0,o.jsx)(t.p,{children:"As an example, run the Quickstart documentation for the state API:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"mdx docs/en/start/state/start.md \n"})}),"\n",(0,o.jsx)(t.h2,{id:"step-4-reported-an-error-test-driven-development-optimize-your-documentation",children:"step 4. Reported an error? Test-driven development, optimize your documentation!"}),"\n",(0,o.jsx)(t.p,{children:"You can think of each document as a UT, which should have 4 phases: prepare, execute, verify, and release resources."}),"\n",(0,o.jsx)(t.p,{children:"If the document runs with an error, it means that the case needs to be optimized."}),"\n",(0,o.jsx)(t.p,{children:'This is also the idea of "test-driven development", optimizing the documentation to make it "testable", right?'}),"\n",(0,o.jsx)(t.p,{children:"For example, I ran the Quickstart documentation for the state API and found an error:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"SaveState succeeded.key:key1 , value: hello world \nGetState succeeded.[key:key1 etag:1]: hello world\nSaveBulkState succeeded.[key:key1 etag:2]: hello world\nSaveBulkState succeeded.[key:key2 etag:2]: hello world\nGetBulkState succeeded.key:key2 ,value:hello world ,etag:1 ,metadata:map[] \nGetBulkState succeeded.key:key1 ,value:hello world ,etag:2 ,metadata:map[] \nGetBulkState succeeded.key:key3 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key4 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key5 ,value: ,etag: ,metadata:map[] \npanic: error deleting state: rpc error: code = Aborted desc = failed deleting state with key key1: possible etag mismatch. error from state store: ERR Error running script (call to f_9b5da7354cb61e2ca9faff50f6c43b81c73c0b94): @user_script:1: user_script:1: failed to delete key1\n\ngoroutine 1 [running]:\nmain.testDelete(0x16bc760, 0xc0000ac000, 0x16c56a0, 0xc0000b90e0, 0x15f30e1, 0x5, 0x15f2539, 0x4)\n        /Users/qunli/projects/layotto/demo/state/redis/client.go:73 +0x13d\nmain.main()\n        /Users/qunli/projects/layotto/demo/state/redis/client.go:57 +0x2f4\nexit status 2\n"})}),"\n",(0,o.jsxs)(t.p,{children:["After some troubleshooting, we found that the demo client did not pass the ",(0,o.jsx)(t.code,{children:"etag"})," field when deleting the specified key, which caused the demo to run abnormally."]}),"\n",(0,o.jsx)(t.p,{children:"See, through the automated testing documentation, we found a Quickstart bug :)"}),"\n",(0,o.jsx)(t.h3,{id:"q-how-to-write-testable-documents",children:'Q: How to write "testable" documents'}),"\n",(0,o.jsx)(t.p,{children:"Note: You can refer to the sample documentation that runs the test: docs/en/start/state/start.md"}),"\n",(0,o.jsx)(t.p,{children:"Some common details are explained below."}),"\n",(0,o.jsx)(t.h4,{id:"the-demo-code-should-panic-when-it-doesnt-meet-expectations",children:"The demo code should panic when it doesn't meet expectations"}),"\n",(0,o.jsxs)(t.p,{children:["For example, in the demo ",(0,o.jsx)(t.code,{children:"demo/state/redis/client.go"}),", if you get an error when calling Layotto, you should just panic:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"if err := cli.SaveBulkState(ctx, store, item, &item2); err != nil {\n\tpanic(err)\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"In addition to judging errors, the demo should also verify the test results, and panic directly if it does not meet expectations. This is equivalent to UT, after calling a method, the result of the call needs to be verified."}),"\n",(0,o.jsx)(t.p,{children:'The advantage of this is that once the Quickstart does not meet expectations, the demo will exit abnormally, allowing automated tools to find "the test failed! Find someone to fix it!"'}),"\n",(0,o.jsx)(t.h4,{id:"it-is-best-to-delete-the-container-and-free-resources-at-the-end-of-the-document",children:"It is best to delete the container and free resources at the end of the document"}),"\n",(0,o.jsx)(t.p,{children:'When writing UT, we do things like release resources, restore mocks, etc. in the final stages; to make the document "testable", do something similar.'}),"\n",(0,o.jsx)(t.p,{children:"For example to delete the redis Docker container at the end of the document:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"docker rm -f redis-test\n"})}),"\n",(0,o.jsx)(t.p,{children:"Note: Layotto's github workflow deletes all containers and closes applications such as layotto, etcd after each md is executed.\nSo even if the container is not deleted in the document, it will not affect the github workflow to run the test."}),"\n",(0,o.jsx)(t.h4,{id:"what-should-i-do-if-i-dont-want-a-certain-command-to-be-executed",children:"What should I do if I don't want a certain command to be executed?"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"mdx"})," by default will only execute shell code blocks, i.e. code blocks written like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"```shell\n"})}),"\n",(0,o.jsx)(t.p,{children:"If you don't want a block of code to be executed, you can change the shell to something else, for example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"```bash\n"})}),"\n",(0,o.jsx)(t.h4,{id:"a-certain-shell-command-will-hang-and-affect-the-test-what-should-i-do",children:"A certain shell command will hang and affect the test, what should I do?"}),"\n",(0,o.jsx)(t.p,{children:"Again, take docs/en/start/state/start.md as an example."}),"\n",(0,o.jsx)(t.p,{children:"One of the scripts will run Layotto, but if you run it it will hang, preventing the test tool from continuing to run the next command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"./layotto start -c ../../configs/config_redis.json\n"})}),"\n",(0,o.jsx)(t.p,{children:"How to do it?"}),"\n",(0,o.jsx)(t.h5,{id:"solution-1",children:"Solution 1:"}),"\n",(0,o.jsxs)(t.p,{children:["Annotated with @background, see ",(0,o.jsx)(t.a,{href:"https://github.com/seeflood/mdx#background",children:"https://github.com/seeflood/mdx#background"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"```shell @background\n./layotto start -c ../../configs/config_standalone.json\n```\n"})}),"\n",(0,o.jsx)(t.h5,{id:"solution-2",children:"Solution 2:"}),"\n",(0,o.jsxs)(t.p,{children:['Don\'t run this script, add a "hidden script" that "runs Layotto in the background", this hidden script is wrapped in a comment, so it won\'t be seen by people reading the documentation, but ',(0,o.jsx)(t.code,{children:"mdx"})," will still run it:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"    ```bash\n    ./layotto start -c ../../configs/config_redis.json\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"\n#### How to deal with the command to switch directories?\n\nWe can assume that the current directory is the project's root path.\n\n\nThen the switch path can be written like this:\n\n```bash\n# change directory to ${your project path}/demo/state/redis/\n cd demo/state/redis/\n go run .\n"})}),"\n",(0,o.jsx)(t.p,{children:"What if you want to go back to the root path after running this command?"}),"\n",(0,o.jsx)(t.h5,{id:"solution-1-1",children:"Solution 1:"}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"${project_path}"})," variable to represent the project root path, see ",(0,o.jsx)(t.a,{href:"https://github.com/seeflood/mdx#cd-project_path",children:"https://github.com/seeflood/mdx#cd-project_path"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"cd ${project_path}/demo/state/redis/\n"})}),"\n",(0,o.jsx)(t.h5,{id:"solution-2-1",children:"Solution 2:"}),"\n",(0,o.jsx)(t.p,{children:"Add a hidden script to switch directories. For example, write:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"# open a new terminal tab\n# change directory to ${your project path}/demo/state/redis/\ncd demo/state/redis/\ngo run .\n"})}),"\n",(0,o.jsx)(t.h3,{id:"other-markdown-annotations",children:"Other markdown annotations"}),"\n",(0,o.jsxs)(t.p,{children:['The mdx tool provides many "markdown annotations" to help you write "runnable markdown files". If you are interested, you can check the ',(0,o.jsx)(t.a,{href:"https://github.com/seeflood/mdx#usage",children:"mdx documentation"})]}),"\n",(0,o.jsx)(t.h3,{id:"fix-the-error-and-see-the-effect",children:"Fix the error and see the effect!"}),"\n",(0,o.jsx)(t.p,{children:"After a fix, I ran the document again:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"mdx docs/en/start/state/start.md\n"})}),"\n",(0,o.jsx)(t.p,{children:"The document does not report an error, it can run normally and exit:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"admindeMacBook-Pro-2:layotto qunli$ mdx docs/en/start/state/start.md\nlatest: Pulling from library/redis\nDigest: sha256:69a3ab2516b560690e37197b71bc61ba245aafe4525ebdece1d8a0bc5669e3e2\nStatus: Image is up to date for redis:latest\ndocker.io/library/redis:latest\nREPOSITORY                     TAG         IMAGE ID       CREATED         SIZE\nredis                          latest      bba24acba395   3 days ago      113MB\npseudomuto/protoc-gen-doc      latest      35472df9ecbb   6 weeks ago     39.5MB\napache/skywalking-oap-server   8.0.1-es7   887769fd3bf6   21 months ago   191MB\napache/skywalking-ui           8.0.1       42b3b496616e   21 months ago   127MB\n5835d4652c057ce7ea109564c3e36351335ec53c3dedb02650f2056d3cc3edd5\nappending output to nohup.out\nruntime client initializing for: 127.0.0.1:34904\nSaveState succeeded.key:key1 , value: hello world \nGetState succeeded.[key:key1 etag:1]: hello world\nSaveBulkState succeeded.[key:key1 etag:2]: hello world\nSaveBulkState succeeded.[key:key2 etag:2]: hello world\nGetBulkState succeeded.key:key1 ,value:hello world ,etag:2 ,metadata:map[] \nGetBulkState succeeded.key:key4 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key3 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key5 ,value: ,etag: ,metadata:map[] \nGetBulkState succeeded.key:key2 ,value:hello world ,etag:1 ,metadata:map[] \nDeleteState succeeded.key:key1\nDeleteState succeeded.key:key2\nredis-test\n"})}),"\n",(0,o.jsx)(t.h2,{id:"step-5-modify-ci-to-automatically-test-the-newly-written-quickstart-document",children:"step 5. Modify CI to automatically test the newly written quickstart document"}),"\n",(0,o.jsx)(t.p,{children:'If you have written a new quickstart document, and the self-test can run normally, the next step is to modify the CI to achieve "every time someone submits a pull request, the tool automatically tests that this quickstart document can run through".'}),"\n",(0,o.jsx)(t.p,{children:"The modification method is:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Modify the script ",(0,o.jsx)(t.code,{children:"etc/script/test-quickstart.sh"})," to add your documentation to it:"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*ZPRlRa7a-0QAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:'If you need to automatically release some resources before and after the document runs (such as automatically killing the process, deleting the docker container), you can add the resources to be released in the script. For example, if you want to implement "automatically kill the etcd process every time a document is run", you can add to the script:'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*0th0Q7yn5MIAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsx)(t.li,{children:"After making the above changes, it is time to test the new CI."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Run in the project root directory"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"make style.quickstart\n"})}),"\n",(0,o.jsx)(t.p,{children:"These documents will be tested:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*I7LRSryXwWYAAAAAAAAAAAAAARQnAQ",alt:""})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["[!TIP|label: run locally with caution, this script will delete some docker containers]\nThis command will delete the Docker containers that contain the keywords in the image. If you don't want to delete these containers, don't run them locally:\n",(0,o.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*N3CIRb0883kAAAAAAAAAAAAAARQnAQ",alt:""})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"whereas if you run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"make style.quickstart QUICKSTART_VERSION=1.17\n"})}),"\n",(0,o.jsx)(t.p,{children:"The following documents will be tested (these documents can only run successfully in golang 1.17 and above):"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*X3F9QJSKq3QAAAAAAAAAAAAAARQnAQ",alt:""})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(6540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);