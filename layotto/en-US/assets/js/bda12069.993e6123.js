"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[946],{664:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=i(4848),o=i(8453);const l={},r="Layotto GitHub Workflows",s={id:"development/github-workflows",title:"Layotto GitHub Workflows",description:"This document explains Layotto's four workflows in Github:",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/development/github-workflows.md",sourceDirName:"development",slug:"/development/github-workflows",permalink:"/layotto/en-US/docs/development/github-workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/development/github-workflows.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Development specification when adding API",permalink:"/layotto/en-US/docs/development/developing-api"},next:{title:"Layotto Commands Guidelines\uff1a",permalink:"/layotto/en-US/docs/development/commands"}},a={},c=[{value:"Layotto Env Pipeline \ud83c\udf0a",id:"layotto-env-pipeline-",level:2},{value:"Job Task Content",id:"job-task-content",level:3},{value:"Job Trigger Event",id:"job-trigger-event",level:3},{value:"Layotto Dev Pipeline \ud83c\udf0a (Before Merged)",id:"layotto-dev-pipeline--before-merged",level:2},{value:"Job Task Content",id:"job-task-content-1",level:3},{value:"Job Trigger Event",id:"job-trigger-event-1",level:3},{value:"Layotto Dev Pipeline \ud83c\udf0a (After Merged)",id:"layotto-dev-pipeline--after-merged",level:2},{value:"Job Task Content",id:"job-task-content-2",level:3},{value:"Job Trigger Event",id:"job-trigger-event-2",level:3},{value:"Layotto Release Pipeline \ud83c\udf0a",id:"layotto-release-pipeline-",level:2},{value:"Job Task Content",id:"job-task-content-3",level:3},{value:"Job Trigger Event",id:"job-trigger-event-3",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"layotto-github-workflows",children:"Layotto GitHub Workflows"}),"\n",(0,t.jsx)(n.p,{children:"This document explains Layotto's four workflows in Github:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Layotto Env Pipeline \ud83c\udf0a"}),"\n",(0,t.jsx)(n.li,{children:"Layotto Dev Pipeline \ud83c\udf0a (Before Merged)"}),"\n",(0,t.jsx)(n.li,{children:"Layotto Dev Pipeline \ud83c\udf0a (After Merged)"}),"\n",(0,t.jsx)(n.li,{children:"Layotto Release Pipeline \ud83c\udf0a"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The workflow contains one or more tasks, It improves the standardization and security of the code in layotto, simplifies repetitive steps of development / build / release. The following is a detailed explanation of the above four workflows."}),"\n",(0,t.jsx)(n.h2,{id:"layotto-env-pipeline-",children:"Layotto Env Pipeline \ud83c\udf0a"}),"\n",(0,t.jsx)(n.h3,{id:"job-task-content",children:"Job Task Content"}),"\n",(0,t.jsx)(n.p,{children:"Layotto Env Pipeline is mainly responsible for the project of layotto and the specification of relevant environment,it current contains the following tasks\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Title Validation (Check the specification of PR title based on semantic style)"}),"\n",(0,t.jsx)(n.li,{children:"Quickstart Validation (Verification of QuickStart documents)"}),"\n",(0,t.jsx)(n.li,{children:"Update Stale Status (Update of issue / PR status)"}),"\n",(0,t.jsx)(n.li,{children:"License Validation (Verification of license)"}),"\n",(0,t.jsx)(n.li,{children:"DeadLink Validation (Check the deadLink in document)"}),"\n",(0,t.jsx)(n.li,{children:"CodeQL (Analysis of CodeQL)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"job-trigger-event",children:"Job Trigger Event"}),"\n",(0,t.jsx)(n.p,{children:"Layotto Env Pipeline Task Trigger Events:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Title Validation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pull_request:\n    types:\n    - opened open PR \n    - edited edit PR\n    - synchronize synchronize PR\n    - labeled PR add Label\n    - unlabeled PR cancel Label\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Quickstart Validation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"push:\n    branches:\n    - main merge PR\npull_request:\n    branches:\n    - main commit PR\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update Stale Status:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"on:\nschedule:\n    - cron: '30 1 * * *' timed tasks\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"License Validation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"push:\n    branches:\n    - main merge PR\npull_request:\n    branches:\n    - main commit PR\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"DeadLink Validation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pull_request:\n    branches:\n    - main commit PR\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"CodeQL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"schedule:\n    - cron: '0 4 * * 5' timed tasks\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"layotto-dev-pipeline--before-merged",children:"Layotto Dev Pipeline \ud83c\udf0a (Before Merged)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"release.png",src:i(8166).A+"",width:"3806",height:"1366"})}),"\n",(0,t.jsx)(n.h3,{id:"job-task-content-1",children:"Job Task Content"}),"\n",(0,t.jsx)(n.p,{children:"The layotto dev pipeline (before merged)  is mainly responsible for verifying the code after submitting the PR, which currently includes the following tasks:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go Style Check : Check the style of the code"}),"\n",(0,t.jsx)(n.li,{children:"Go CI Linter : Perform linter specification of verification on the code"}),"\n",(0,t.jsx)(n.li,{children:"Go Unit Test : Unit test the code"}),"\n",(0,t.jsx)(n.li,{children:"Coverage Analysis : Coverage analysis of the code"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with WASM : WASM integration test on the code"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with Runtime : Run time integration test on the code"}),"\n",(0,t.jsx)(n.li,{children:"Darwin AMD64 Artifact : Build Darwin AMD64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Darwin ARM64 Artifact : Build Darwin arm64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Linux AMD64 Artifact : Build linux amd64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Linux ARM64 Artifact : Build linux arm64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Linux AMD64 WASM Artifact : Build linux AMD64 binary verification for layotto wasm"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"job-trigger-event-1",children:"Job Trigger Event"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    on:\n    push:\n        branches: [main] merge PR\n        paths-ignore: ignore the following changes: docs directory files\uff0cmarkdown files\n        - 'docs/**'\n        - '**/*.md'\n    pull_request:\n        branches: \"*\" merge PR\n        paths-ignore: ignore the following changes: docs directory files\uff0cmarkdown files\n        - 'docs/**'\n        - '**/*.md'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"layotto-dev-pipeline--after-merged",children:"Layotto Dev Pipeline \ud83c\udf0a (After Merged)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"release.png",src:i(9743).A+"",width:"3806",height:"1350"})}),"\n",(0,t.jsx)(n.h3,{id:"job-task-content-2",children:"Job Task Content"}),"\n",(0,t.jsx)(n.p,{children:"The layotto dev pipeline (after merged)  is mainly responsible for the verification and release of the combined layotto code, which currently includes the following tasks\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go Style Check : Check the style of the code"}),"\n",(0,t.jsx)(n.li,{children:"Go CI Linter : Perform linter specification of verification on the code"}),"\n",(0,t.jsx)(n.li,{children:"Go Unit Test : Unit test the code"}),"\n",(0,t.jsx)(n.li,{children:"Coverage Analysis : Coverage analysis of the code"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with WASM : WASM integration test on the code"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with Runtime : Run time integration test on the code"}),"\n",(0,t.jsx)(n.li,{children:"Darwin AMD64 Artifact : Build Darwin AMD64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Darwin ARM64 Artifact : Build Darwin arm64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Linux AMD64 Artifact : Build linux amd64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Linux ARM64 Artifact : Build linux arm64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Linux AMD64 WASM Artifact : Build linux AMD64 binary verification for layotto wasm"}),"\n",(0,t.jsxs)(n.li,{children:["Linux AMD64 WASM Image : Release the latest version of layotto wasm image. The image specification is layotto/faas-amd64",":latest"]}),"\n",(0,t.jsxs)(n.li,{children:["Linux AMD64 Image : Release the latest version of layotto wasm image. The image specification is layotto/layotto",":latest"]}),"\n",(0,t.jsxs)(n.li,{children:["Linux ARMD64 Image : Release the latest version of layotto wasm image. The image specification is layotto/layotto.arm64",":latest"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"job-trigger-event-2",children:"Job Trigger Event"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    on:\n    push:\n        branches: [main] merge PR\n        paths-ignore: ignore the following changes\uff1a docs directory files\uff0cmarkdown files\n        - 'docs/**'\n        - '**/*.md'\n    pull_request:\n        branches: \"*\" create a PR\n        paths-ignore: ignore the following changes\uff1a docs directory files\uff0cmarkdown files\n        - 'docs/**'\n        - '**/*.md'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"layotto-release-pipeline-",children:"Layotto Release Pipeline \ud83c\udf0a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"release.png",src:i(4396).A+"",width:"3810",height:"1356"})}),"\n",(0,t.jsx)(n.h3,{id:"job-task-content-3",children:"Job Task Content"}),"\n",(0,t.jsx)(n.p,{children:"The layotto release pipeline  is mainly responsible for the release and verification of the new version of layotto, which currently includes the following tasks :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go Style Check : Check the style of the code"}),"\n",(0,t.jsx)(n.li,{children:"Go CI Linter : Perform linter specification of verification on the code"}),"\n",(0,t.jsx)(n.li,{children:"Go Unit Test : Unit test the code"}),"\n",(0,t.jsx)(n.li,{children:"Coverage Analysis : Coverage analysis of the code"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with WASM : WASM integration test on the code"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with Runtime : Run time integration test on the code"}),"\n",(0,t.jsx)(n.li,{children:"Darwin AMD64 Artifact : Build Darwin AMD64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Darwin ARM64 Artifact : Build Darwin arm64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Linux AMD64 Artifact : Build linux amd64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Linux ARM64 Artifact : Build linux arm64 binary verification for code"}),"\n",(0,t.jsx)(n.li,{children:"Linux AMD64 WASM Artifact : Build linux AMD64 binary verification for layotto wasm"}),"\n",(0,t.jsxs)(n.li,{children:["Linux AMD64 WASM Image : Release the latest version of layotto wasm image. The image specification is ",(0,t.jsx)(n.code,{children:"layotto/faas-amd64:{latest_tagname}"})]}),"\n",(0,t.jsxs)(n.li,{children:["Linux AMD64 Image : Release the latest version of layotto wasm image. The image specification is ",(0,t.jsx)(n.code,{children:"layotto/layotto:{latest_tagname}"})]}),"\n",(0,t.jsxs)(n.li,{children:["Linux ARMD64 Image : Release the latest version of layotto wasm image. The image specification is ",(0,t.jsx)(n.code,{children:"layotto/layotto.arm64:{latest_tagname}"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"job-trigger-event-3",children:"Job Trigger Event"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    on:\n    create  Tag or Branch,combined with the following conditions\n\n    if: ${{ startsWith(github.ref, 'refs/tags/') }} changes to Tag(Ignore creation of new branch)\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The configuration file of Layotto's GitHub workflow is in ",(0,t.jsx)(n.a,{href:"https://github.com/mosn/layotto/tree/main/.github/workflows",children:"here"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8166:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/workflow-dev-23e6a16dd4f21e2b377405ddf391ce92.png"},9743:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/workflow-merge-a9b0c33ce5dc1d1e94f82500bf06acc1.png"},4396:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/workflow-release-c792cbbdc5da1ecc6a1a9b23b0715c97.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(6540);const o={},l=t.createContext(o);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);