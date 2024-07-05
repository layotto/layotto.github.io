"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[3017],{4409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>A,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(4848),s=n(8453);const i={},o="Source Parsing 7 Layer Traffic Governance, Interface Limit",a={permalink:"/en-US/blog/code/flowcontrol/flowcontrol_code_analyze",editUrl:"https://github.com/mosn/layotto/edit/main//i18n/en-US/docusaurus-plugin-content-blog/code/flowcontrol/flowcontrol_code_analyze.md",source:"@site/i18n/en-US/docusaurus-plugin-content-blog/code/flowcontrol/flowcontrol_code_analyze.md",title:"Source Parsing 7 Layer Traffic Governance, Interface Limit",description:"Author Profile\uff1a",date:"2024-07-05T05:47:11.000Z",tags:[],readingTime:1.475,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"MOSN subproject Layotto\uff1aopens the service grid + new chapter when app runs",permalink:"/en-US/blog/mosn-subproject-layotto-opening-a-new-chapter-in-service-grid-application-runtime"},nextItem:{title:"Layotto Source Parsing \u2014 Processing RPC requests",permalink:"/en-US/blog/code/layotto-rpc"}},l={authorsImageUrls:[]},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisite\uff1a",id:"prerequisite",level:2},{value:"Source analysis",id:"source-analysis",level:2},{value:"Overall analysis",id:"overall-analysis",level:3},{value:"Code in\uff1a flowcontrol\u4ee3\u7801",id:"code-in-flowcontrol\u4ee3\u7801",level:3},{value:"stream_filter_factory.go analysis",id:"stream_filter_factorygo-analysis",level:3},{value:"Stream_filter.go Analysis",id:"stream_filtergo-analysis",level:3},{value:"Overall process\uff1a",id:"overall-process",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Author Profile\uff1a\nwas a fester of an open source community committed to embracing open sources and hoping to interact with each other\u2019s open-source enthusiasts for progress and growth."}),"\n",(0,r.jsx)(t.p,{children:"Writing Time: 20 April 2022"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"The purpose of this document is to analyze the implementation of the interface flow"}),"\n",(0,r.jsx)(t.h2,{id:"prerequisite",children:"Prerequisite\uff1a"}),"\n",(0,r.jsx)(t.p,{children:"Document content refers to the following version of the code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/mosn/mosn",children:"https://github.com/mosn/mosn"})}),"\n",(0,r.jsx)(t.p,{children:"Mosn d11b5a638a137045c2fb03d9d8ca36ecc0def11 (Division Develop)"}),"\n",(0,r.jsx)(t.h2,{id:"source-analysis",children:"Source analysis"}),"\n",(0,r.jsx)(t.h3,{id:"overall-analysis",children:"Overall analysis"}),"\n",(0,r.jsxs)(t.p,{children:["Reference to ",(0,r.jsx)("br",{}),(0,r.jsx)(t.a,{href:"https://mosn.io/docs/concept/extensions/",children:"https://mosn.io/docs/concept/extensions/"})]}),"\n",(0,r.jsx)(t.p,{children:"Mosn Stream Filter Extension"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*tSn4SpIkAa4AAAAAAAAAAAAAARQnAQ",alt:"01.png"})}),"\n",(0,r.jsxs)(t.h3,{id:"code-in-flowcontrol\u4ee3\u7801",children:["Code in\uff1a ",(0,r.jsx)(t.a,{href:"https://github.com/mosn/mosn/tree/master/pkg/filter/stream/flowcontrol",children:"flowcontrol\u4ee3\u7801"})]}),"\n",(0,r.jsx)(t.h3,{id:"stream_filter_factorygo-analysis",children:"stream_filter_factory.go analysis"}),"\n",(0,r.jsx)(t.p,{children:"This class is a factory class to create StreamFilter."}),"\n",(0,r.jsx)(t.p,{children:"Some constant values are defined for default values"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*PAWCTL6MS40AAAAAAAAAAAAAARQnAQ",alt:"02.png"})}),"\n",(0,r.jsx)(t.p,{children:"Defines the restricted stream config class to load yaml definition and parse production corresponding functions"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*Ua32SokhILEAAAAAAAAAAAAAARQnAQ",alt:"03.png"})}),"\n",(0,r.jsx)(t.p,{children:"init() Inner initialization is the storage of name and corresponding constructor to the filter blocking plant map"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*kb3qRqWnqxYAAAAAAAAAAAAAARQnAQ",alt:"04.png"})}),"\n",(0,r.jsx)(t.p,{children:"Highlight createRpcFlowControlFilterFactory Production rpc Current Factory"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*u5rkS54zkgAAAAAAAAAAAAAAARQnAQ",alt:"05.png"})}),"\n",(0,r.jsx)(t.p,{children:"Before looking at streamfilter, we see how factory classes are producing restricted streamers"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*cj0nT5O69OYAAAAAAAAAAAAAARQnAQ",alt:"06.png"})}),"\n",(0,r.jsx)(t.p,{children:"Limit the streaming to the restricted stream chain structure to take effect in sequential order."}),"\n",(0,r.jsx)(t.p,{children:"CreateFilterChain method adds multiple filters to the link structure"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*a8ClQ76odpEAAAAAAAAAAAAAARQnAQ",alt:"07.png"})}),"\n",(0,r.jsx)(t.p,{children:"We can see that this interface is achieved by a wide variety of plant types, including those that we are studying today."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*sBDbT44r2vgAAAAAAAAAAAAAARQnAQ",alt:"08.png"})}),"\n",(0,r.jsx)(t.h3,{id:"stream_filtergo-analysis",children:"Stream_filter.go Analysis"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://gw.alipayobjects.com/mdn/rms_5891a1/afts/img/A*wsw3RKe1GH8AAAAAAAAAAAAAARQnAQ",alt:"09.png"})}),"\n",(0,r.jsx)(t.h2,{id:"overall-process",children:"Overall process\uff1a"}),"\n",(0,r.jsx)(t.p,{children:"Finally, we look back at the overall process progress:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Starting from the initialization function of stream_filter_factory.go, the program inserted createRpcFlowControlFilterFactory."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Mosn created a filter chain (code position",(0,r.jsx)(t.a,{href:"https://github.com/mosn/mosn/tree/master/pkg/streamfilter/factory.go",children:"factory.go"}),") by circulating CreateFilterChain to include all filters in the chain structure, including our master restricted streaming today."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create Limiter NewStreamFilter()."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"OnReceive() and eventually by sentinel (whether the threshold has been reached, whether to release traffic or stop traffic, StreamFilterStop or StreamFilterContinue)."}),"\n"]}),"\n"]})]})}function A(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);