"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[6434],{9363:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var t=o(4848),c=o(8453);const s={},i="Comment specification of proto file",r={id:"api_reference/comment_spec_of_proto",title:"Comment specification of proto file",description:"Avoid adding empty lines between comments  symbols //.If there is a blank line in the comments, the tool(protoc-gen-doc) will generate malformed documents.",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/api_reference/comment_spec_of_proto.md",sourceDirName:"api_reference",slug:"/api_reference/comment_spec_of_proto",permalink:"/layotto/en-US/docs/api_reference/comment_spec_of_proto",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/docs/i18n/en-US/docusaurus-plugin-content-docs/current/api_reference/comment_spec_of_proto.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"How to generate code and documentation from the .proto files",permalink:"/layotto/en-US/docs/api_reference/how_to_generate_api_doc"},next:{title:"Development specification when adding API",permalink:"/layotto/en-US/docs/development/developing-api"}},d={},a=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"comment-specification-of-proto-file",children:"Comment specification of proto file"}),"\n",(0,t.jsxs)(n.p,{children:["Avoid adding empty lines between comments  symbols ",(0,t.jsx)(n.code,{children:"//"}),".If there is a blank line in the comments, the tool(protoc-gen-doc) will generate malformed documents.\nbad case:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// XXXXXXXX\nmessage BadCase{\n  // XXXXXXXX\n  //\n  // XX\n  //\n  // XXXXXX\n  field A\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"good case:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// XXXXXXXX\nmessage GoodCase{\n  // XXXXXXXX\n  // XX\n  // XXXXXX\n  field A\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or you can use another annotation symbol directly ",(0,t.jsx)(n.code,{children:"/*  */"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to have some comment in your proto files, but don't want them to be part of the docs, you can simply prefix the comment with ",(0,t.jsx)(n.code,{children:"@exclude"}),".\nExample: include only the comment for the id field"]}),"\n",(0,t.jsxs)(n.p,{children:["Attention: ",(0,t.jsx)(n.code,{children:"/*  */"})," comments do not count towards passing ci ",(0,t.jsx)(n.code,{children:"Proto Validation"}),". ",(0,t.jsx)(n.a,{href:"https://docs.buf.build/lint/rules#comments",children:"refence"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/**\n * @exclude\n * This comment won't be rendered\n */\nmessage ExcludedMessage {\n  string id   = 1; // the id of this message.\n  string name = 2; // @exclude the name of this message\n  /* @exclude the value of this message. */\n  int32 value = 3;\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(6540);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);