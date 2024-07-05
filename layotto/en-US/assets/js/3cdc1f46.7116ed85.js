"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[7157],{419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(4848),i=t(8453);const r={},d="Sequencer API design document",o={id:"design/sequencer/design",title:"Sequencer API design document",description:'This document discusses the API "Generate Distributed Unique (auto-ad) id"',source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/design/sequencer/design.md",sourceDirName:"design/sequencer",slug:"/design/sequencer/design",permalink:"/en-US/docs/design/sequencer/design",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/design/sequencer/design.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Add TryLock and Unlock API",permalink:"/en-US/docs/design/lock/lock-api-design"},next:{title:"File API design documentation",permalink:"/en-US/docs/design/file/file-design"}},a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Generating global unique id",id:"generating-global-unique-id",level:3},{value:"There is an incremental need for this id.More specifically there are various\uff1a",id:"there-is-an-incremental-need-for-this-idmore-specifically-there-are-various",level:3},{value:"There may be a need for custom id schema",id:"there-may-be-a-need-for-custom-id-schema",level:3},{value:"Possible information security related requirements",id:"possible-information-security-related-requirements",level:3},{value:"Product research",id:"product-research",level:2},{value:"3. grpc API design",id:"3-grpc-api-design",level:2},{value:"Proto definition",id:"proto-definition",level:3},{value:"Disputes concerning singularity",id:"disputes-concerning-singularity",level:3},{value:"Component API",id:"component-api",level:2},{value:"References",id:"references",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sequencer-api-design-document",children:"Sequencer API design document"}),"\n",(0,s.jsx)(n.p,{children:'This document discusses the API "Generate Distributed Unique (auto-ad) id"'}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.h3,{id:"generating-global-unique-id",children:"Generating global unique id"}),"\n",(0,s.jsx)(n.p,{children:"Q: When does a global unique id be generated?"}),"\n",(0,s.jsx)(n.p,{children:"A: db does not help you automatically generate it.Like\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"db has a split table that does not help you create id automatically, you need a global unique business id"}),"\n",(0,s.jsx)(n.li,{children:"No db, like request to generate a traceId"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"there-is-an-incremental-need-for-this-idmore-specifically-there-are-various",children:"There is an incremental need for this id.More specifically there are various\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["No increment required.This situation can be resolved by UUID, although the disadvantage is lengthy.",(0,s.jsx)(n.strong,{children:"This API does not consider this for the time"})]}),"\n",(0,s.jsx)(n.li,{children:"\u201cGrowing trends\u201d.Without a certain increase, most of the cases are on the increase."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Q: What scenarios require trend incremental?"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For b+ tree db (e.g. MYSQL), the incremental main key can make better use of the cache (cache friendly)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sort the most recent data.For example, needs are up to 100 news. Developers do not want to add timestamp fields or indexes. If the id itself is incremental, the latest 100 messages are sorted by id and sorted directly to\uff1a"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Select * from message order by message-id limit 100\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is common when using nosql, because nosql has difficulty indexing the timestamp field"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Increase in lone transfer in sharding.e.g.",(0,s.jsx)(n.a,{href:"https://docs.pingcap.com/zh/tidb/stable/auto-increment",children:"Tidb\u7684\u81ea\u589eid"})," ensures the ID increment generated on a single server and does not guarantee a global (multi-servers) one-tone."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Global monochrome"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The desired id is necessarily incremental, and there is no regression."}),"\n",(0,s.jsx)(n.h3,{id:"there-may-be-a-need-for-custom-id-schema",children:"There may be a need for custom id schema"}),"\n",(0,s.jsx)(n.p,{children:'For example, the required id is in the format "Uid first 8 and auto-id"'}),"\n",(0,s.jsx)(n.h3,{id:"possible-information-security-related-requirements",children:"Possible information security related requirements"}),"\n",(0,s.jsx)(n.p,{children:"If the ID is continuous, the pick-ups of malicious users will be very easy and the specified URL will be downloaded directly in order;"}),"\n",(0,s.jsx)(n.p,{children:"If an order number is more dangerous, competing for a direct knowledge of the user's volume of one day.So in some application scenarios, IDs are unruly and unruly."}),"\n",(0,s.jsx)(n.h2,{id:"product-research",children:"Product research"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"System"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Securing the generated id unique"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Trends"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Strict increment"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Availability"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Information Security"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Solo Redis"}),(0,s.jsxs)(n.td,{children:["yes.",(0,s.jsx)(n.a,{href:"https://redis.io/topics/persistence",children:"Special configuration needs to be configured to redis, open and write disks for each of the two disk policies"})," to avoid data loss"]}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes.premised on delay restarting without data"}),(0,s.jsx)(n.td,{children:"has single point failure risk"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"redis main copy from +sentinel"}),(0,s.jsxs)(n.td,{children:["no.Copy is asynchronous, that is, waiting for sync copy using Wait command or may drop data after fo, see",(0,s.jsx)(n.a,{href:"https://redis.io/topics/reapplication",children:"\u6587\u6863"})]}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"Depending on which data will not be lost"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"redis cluster"}),(0,s.jsx)(n.td,{children:"Id."}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"Id."}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"snowflake"}),(0,s.jsx)(n.td,{children:"no.(Clock callbacks, etc, can cause idrepeat; need to rely on external storage; or declare that NTP must be closed or reliable NTP used to prevent callbacks)"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Good"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leaf snowflake"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Good"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leaf segment"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Leaf segment only one Leaf server"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"has single point failure risk"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zookeeper"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"etcd"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mysql Single Library Table"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"yes"}),(0,s.jsx)(n.td,{children:"has single point failure risk"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"3-grpc-api-design",children:"3. grpc API design"}),"\n",(0,s.jsx)(n.h3,{id:"proto-definition",children:"Proto definition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:'// Sequencer API\nrpc GetNextIdd (GetNextIdReques) returnns (GetNextIdResponse) {}\n\n\nmessage GetNextIdest Lum\n  string store_name = 1;\n  /key is the identification of a consequence.\n  string key = 2;\n  \n  Sequencer options = 3;\n  // The metadata which will be sent to the component.\n  map<string, string> metadata = 4;\n}\n\n/// Sequencer Options requirements for increased and unproductive guarantees\nmessage Sequencer Options Fact  \n  enum AutoAddition\n    // WEAK meaning a "best forest" increasing service. t there is no strict guarantee   \n    WAK = 0;\n    // STRONG means a strict guarantee of global monotonically increasing\n    STRONG = 1;\n  }\n  \n/// enum Uniqueness$6\n// / WEAK means a "best ffort" unqueness guarantee.\n/// But it might duplicate in some corner cases.\n// WEAK = 0;\n// STRONG means a strict guarantee of global unity\n// STRONG = 1;\n// }\n\n  AutoIncreasing revenue = 1;\n// Uniqueness union=2;\n}\n\nmessage GetNextIdResponse\n  int64 next_id=1;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Explanation\uff1a"}),"\n",(0,s.jsx)(n.p,{children:'In fact, a GetNextId interface requires a key to be passed as a namespace (e.g. an order form name, "order_table"), and a sequencer ensures that the id generated is unique and incremental in that naming space.'}),"\n",(0,s.jsx)(n.p,{children:"SequencerOptions. AutoCreation is used to state user demand for incremental increments, whether trend increase (WEAK) or strict global increment (STRONG)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: Do you want to spell the user as needed?"})}),"\n",(0,s.jsx)(n.p,{children:"A: The API and Layotto run regardless of this, are handled by the sdk or the user themselves, or a special component can do the feature."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: Return type string or int64"})}),"\n",(0,s.jsx)(n.p,{children:"If you return string, if a user uses a return int64 implementation to convert the returned string into int64 in the user's code, then migrate to another component, this conversion may be misreported"}),"\n",(0,s.jsx)(n.p,{children:"If you return int64, the component does not help the user to make some customized spelling."}),"\n",(0,s.jsx)(n.p,{children:"Select int64 for portability.Do things spelling in sdk"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: What to do with the int64 spill?"})}),"\n",(0,s.jsx)(n.p,{children:"Do not consider this for now"}),"\n",(0,s.jsx)(n.h3,{id:"disputes-concerning-singularity",children:"Disputes concerning singularity"}),"\n",(0,s.jsx)(n.p,{children:"The API was originally defined as the user sender's SequencerOptions. Uniqueness enumeration, in which the WEAK representative is \"trying to ensure global uniqueness, but the very low probability is likely to be repeat\", requires business code to be prepared for repeating and retrying if you get an id to write the library; and STRONG's representatives are strictly global and the user code does not take into account the need for repetition, retry."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Defines the reason for this enumeration value (benefits)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If strict uniqueness is to be assured, the component will be more productive.For example, a one-stop cron policy will not work and may cause data to be lost and a repeat id to be generated when the machine is restarted; for example, writing a snowflake algorithm directly in the sidecar will not work because there may be a clock-back problem that leads to duplicate calls (NTP clock-synchronization, leap seconds, etc.).",(0,s.jsx)(n.a,{href:"https://tech.meituan.com/2017/04/21/mt-leaf.html",children:"Leaf\u7684snowflake\u5b9e\u73b0"})," relies on zookeper's callback to the clock;"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Define the disadvantage of this enumeration"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"More understanding costs for users"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Conclusion"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"There is a controversy. No value is added for this period.The result of the default return must be a global unique (STRONG)."}),"\n",(0,s.jsx)(n.h2,{id:"component-api",children:"Component API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"package sequencer\n\ntype Store interface {\n\t// Init this component.\n\t//\n\t// The number 'BiggerThan' means that the id generated by this component must be bigger than this number.\n\t//\n\t// If the component find that currently the storage can't guarantee this,\n\t// it can do some initialization like inserting a new id equal to or bigger than this 'BiggerThan' into the storage,\n\t// or just return an error\n\tInit(config Configuration) error\n\n\tGetNextId(*GetNextIdRequest) (*GetNextIdResponse, error)\n\n\t// GetSegment returns a range of id.\n\t// 'support' indicates whether this method is supported by the component.\n\t// Layotto runtime will cache the result if this method is supported.\n\tGetSegment(*GetSegmentRequest) (support bool, result *GetSegmentResponse, err error)\n}\n\ntype GetNextIdRequest struct {\n\tKey      string\n\tOptions  SequencerOptions\n\tMetadata map[string]string\n}\n\ntype SequencerOptions struct {\n\tAutoIncrement AutoIncrementOption\n}\n\ntype AutoIncrementOption string\n\nconst (\n\tWEAK   AutoIncrementOption = \"weak\"\n\tSTRONG AutoIncrementOption = \"strong\"\n)\n\ntype GetNextIdResponse struct {\n\tNextId int64\n}\n\ntype GetSegmentRequest struct {\n\tSize     int\n\tKey      string\n\tOptions  SequencerOptions\n\tMetadata map[string]string\n}\n\ntype GetSegmentResponse struct {\n\tSegment []int64\n}\n\ntype Configuration struct {\n\tBiggerThan map[string]int64\n\tProperties map[string]string\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: What is the BiggerThan's field?"})}),"\n",(0,s.jsx)(n.p,{children:'All IDs that require components to generate are larger than "biggerThan".'}),"\n",(0,s.jsx)(n.p,{children:"This configuration item is designed to facilitate transplantation by users.For example, the system originally used mysql for hairdressing, id has been generated to 1000 and later migrated to PostgreSQL, and BiggerThan needs to be configured for 1000 so that the PostgreSQL components will be set up at initialization, force id above 1000 or report errors when the id is not found to meet the requirements and direct start."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: What BiggerThan is a map?"})}),"\n",(0,s.jsx)(n.p,{children:"Because each key may have its own biggerThan."}),"\n",(0,s.jsx)(n.p,{children:"For example, the original app1 made a split table, used some kind of distribution service to generate orders and commodity table ids, which reached 1000 and reached 2000."}),"\n",(0,s.jsx)(n.p,{children:"The app1 then wants to replace the store as a sequence, then he would like to state that the order form id is over 1,000 and the product table id is above 2000."}),"\n",(0,s.jsxs)(n.p,{children:["Another example is",(0,s.jsx)(n.a,{href:"https://tech.meituan.com/2017/04/21/mt-leaf.htm",children:"Leaf\u7684\u8bbe\u8ba1"})," and one max_id per biz_tag (Leaf's max_id is our biggerThan)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"leaf_max_id.png",src:t(9399).A+"",width:"2434",height:"1442"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q: Do not cache at runtime layer?"})}),"\n",(0,s.jsx)(n.p,{children:"Component implementation method\uff1a if runtime is cached"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"GetSegment (*GetSegmentRequest) (support bool, result *GetSegmentResponse, err error)\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can define interfaces first, components are not implemented first, and there is performance need to implement them later"}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.jianshu.com/p/fb9478687e55",children:"\u8bbe\u8ba1\u5206\u5e03\u5f0f\u552f\u4e00id\u751f\u6210"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.w3cschool.cn/architectroad/architectroad-distributed-id.html",children:"Architectural Chat ID generation"})}),"\n",(0,s.jsxs)(n.p,{children:["[Leaf - USG point ID generation system] (",(0,s.jsx)(n.a,{href:"https://tech.meituan.com/2017/04/21/mt-leaf.html",children:"https://tech.meituan.com/2017/04/21/mt-leaf.html"}),")"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9399:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/leaf_max_id-e39c29408a24d99885d5534759942654.png"},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);