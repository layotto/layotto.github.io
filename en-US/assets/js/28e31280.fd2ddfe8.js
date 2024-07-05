"use strict";(self.webpackChunklayotto_docusaurus=self.webpackChunklayotto_docusaurus||[]).push([[6560],{5581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),s=n(8453);const o={},a="Layotto object storage (OSS) and collection of API interface definitions and design",r={id:"design/oss/design",title:"Layotto object storage (OSS) and collection of API interface definitions and design",description:"Background",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/design/oss/design.md",sourceDirName:"design/oss",slug:"/design/oss/design",permalink:"/en-US/docs/design/oss/design",draft:!1,unlisted:!1,editUrl:"https://github.com/mosn/layotto/edit/main/design/oss/design.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"dapr_api",permalink:"/en-US/docs/design/api_plugin/dapr_api"},next:{title:"Pluggable Component Design Document",permalink:"/en-US/docs/design/pluggable/design"}},c={},l=[{value:"Background",id:"background",level:2},{value:"Interface Design",id:"interface-design",level:2},{value:"Configure Module Design",id:"configure-module-design",level:2},{value:"Interface Design",id:"interface-design-1",level:2},{value:"PutObject",id:"putobject",level:3},{value:"GetObject",id:"getobject",level:3},{value:"DeleteObject",id:"deleteobject",level:3},{value:"PutObjectTagging",id:"putobjecttagging",level:3},{value:"DeleteObjectTagging",id:"deleteobjecttagging",level:3},{value:"GetObjectTagging",id:"getobjecttagging",level:3},{value:"CopyObject",id:"copyobject",level:3},{value:"DeleteObjects",id:"deleteobjects",level:3},{value:"ListObjects",id:"listobjects",level:3},{value:"GetObjectCannedAcl",id:"getobjectcannedacl",level:3},{value:"PutObjectCannedAcl",id:"putobjectcannedacl",level:3},{value:"RestoreObject",id:"restoreobject",level:3},{value:"CreateMultipartUpload",id:"createmultipartupload",level:3},{value:"Upload Part",id:"upload-part",level:3},{value:"Upload PartCopy",id:"upload-partcopy",level:3},{value:"CompleteMultipartUpload",id:"completemultipartupload",level:3},{value:"AbortMultipartUpload",id:"abortmultipartupload",level:3},{value:"ListMultipartUpload",id:"listmultipartupload",level:3},{value:"ListObjectVersions",id:"listobjectversions",level:3},{value:"HeadObject",id:"headobject",level:3},{value:"IsObjectExist",id:"isobjectexist",level:3},{value:"SignURL",id:"signurl",level:3},{value:"UpdateDownloadBandwidthRateLimit",id:"updatedownloadbandwidthratelimit",level:3},{value:"UpdateBandwidthRatteLimit",id:"updatebandwidthrattelimit",level:3},{value:"AppendObject",id:"appendobject",level:3},{value:"ListParts",id:"listparts",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"layotto-object-storage-oss-and-collection-of-api-interface-definitions-and-design",children:"Layotto object storage (OSS) and collection of API interface definitions and design"}),"\n",(0,i.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,i.jsx)(t.p,{children:"In order for layotto support object storage capability, an abstract interface of oss is required.Abstracts of interfaces need to satisfy the theoretical \u201cportable\u201d and to give the interface a clear terminology."}),"\n",(0,i.jsx)(t.h2,{id:"interface-design",children:"Interface Design"}),"\n",(0,i.jsx)(t.p,{children:"The design of the entire interface will follow the following principle\uff1a"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Semantical, i.e. abstract interfaces have a clear semantic meaning."})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Functional completeness, i.e. abstract interfaces need to satisfy different kinds of abilities as much as possible."})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Maximum portability, i.e. abstract interfaces need to meet the transplantability requirement to the maximum extent possible."})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These principles are designed at a high and low level of priority.In order to meet the above requirements, there may be the following question\uff1a"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The field is redundant, entry and exit may have fields corresponding to specific manufacturers."}),"\n",(0,i.jsx)(t.li,{children:"Some of the interfaces may be supported only by some of the oss manufacturers, i.e. \u201cmaximum portability possible\u201d."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configure-module-design",children:"Configure Module Design"}),"\n",(0,i.jsx)(t.p,{children:"The fields of the original configuration module are abstract as shown below in\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'/OssMetadata wraps the configuration of loss implementation\ntype OssMetadata structure LO\n\tEndpoint string `json:`endpoint`\n\tAccessKeyID string`json:`accessKeyID``\n\tAccessKeySecret string `json:"accessKeySecret``\n\tRegion string `json:"region"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"EndPoint, AccessKeyID, AccessKeySecretariat and Regions are all of the concepts available to them and are not explained at length here."}),"\n",(0,i.jsx)(t.h2,{id:"interface-design-1",children:"Interface Design"}),"\n",(0,i.jsx)(t.p,{children:"The definition of the interface is primarily divided into one of the main fields\uff1a"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Generic interfaces are those that are similar to those supported by all of PutObject, GetObject and others."}),"\n",(0,i.jsx)(t.li,{children:"Non-common interfaces are those that are only partially supported by the oss service.For example, ListParts interfaces, aws cannot support."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The design of the interface primarily refers to the aliyun and aws and the minio interface definitions."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/API/API_GetObject.html",children:"https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/API/API_GetObject.html"}),"\n",(0,i.jsx)(t.a,{href:"https://help.aliyun.com/document_detail/31980.html",children:"https://help.aliyun.com/document_detail/31980.html"}),"\n",(0,i.jsx)(t.a,{href:"https://docs.min.io/docs/golang-client-api-reference.html",children:"https://docs.min.io/docs/golang-client-api-reference.html"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"putobject",children:"PutObject"}),"\n",(0,i.jsx)(t.p,{children:"Object upload interface, used as file upload, is the most basic ability of the goss."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/en_cn/AmazonS3/latest/API/API_PutObject.html",children:"https://docs.aws.amazon.com/en_cn/AmazonS3/latest/API/API_PutObject.html"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://help.aliyun.com/document_detail/31978.html",children:"https://help.aliyun.com/document_detail/31978.html"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"getobject",children:"GetObject"}),"\n",(0,i.jsx)(t.p,{children:"Object download interface, used as file downloads, is the most basic ability of oss."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/en_cn/AmazonS3/latest/API/API_GetObject.html",children:"https://docs.aws.amazon.com/en_cn/AmazonS3/latest/API/API_GetObject.html"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://help.aliyun.com/document_detail/31980.html",children:"https://help.aliyun.com/document_detail/31980.html"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"deleteobject",children:"DeleteObject"}),"\n",(0,i.jsx)(t.p,{children:"Object delete interface, used as file deletion, is the most basic ability of the goss.For the definition of the interface please find the link or pb definition above."}),"\n",(0,i.jsx)(t.h3,{id:"putobjecttagging",children:"PutObjectTagging"}),"\n",(0,i.jsx)(t.p,{children:"Label an object as the most basic ability of oss.For the definition of the interface please find the link or pb definition above."}),"\n",(0,i.jsx)(t.h3,{id:"deleteobjecttagging",children:"DeleteObjectTagging"}),"\n",(0,i.jsx)(t.p,{children:"Removing the tag of an object is the most basic ability of the oss.For the definition of the interface please find the link or pb definition above."}),"\n",(0,i.jsx)(t.h3,{id:"getobjecttagging",children:"GetObjectTagging"}),"\n",(0,i.jsx)(t.p,{children:"Get the tag of the object, which is the most basic ability of the oss.For the definition of the interface please find the link or pb definition above."}),"\n",(0,i.jsx)(t.h3,{id:"copyobject",children:"CopyObject"}),"\n",(0,i.jsx)(t.p,{children:"Duplicate an existing object, is the most basic ability of the mass.For the definition of the interface please find the link or pb definition above."}),"\n",(0,i.jsx)(t.h3,{id:"deleteobjects",children:"DeleteObjects"}),"\n",(0,i.jsx)(t.p,{children:"Deleting multiple objects, is the most basic ability of the mass.For the definition of the interface please find the link or pb definition above."}),"\n",(0,i.jsx)(t.h3,{id:"listobjects",children:"ListObjects"}),"\n",(0,i.jsx)(t.p,{children:"Query all objects below bucket, supporting pagination queries, is the most basic ability of the mass.For the definition of the interface please find the link or pb definition above."}),"\n",(0,i.jsx)(t.h3,{id:"getobjectcannedacl",children:"GetObjectCannedAcl"}),"\n",(0,i.jsx)(t.p,{children:"Reading the object's announced acl. Users can set an object's action to control the object's access. First issue is the first issue. The following question\uff1a needs to be considered when designing the interface."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Whether to allow users to set object's action by api."}),"\n",(0,i.jsx)(t.li,{children:"Whether the announced acl is portable"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For the first issue, Aliyun is allowed to specify an object's action when uploading and to modify the object dynamically at any time."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Aliyun acl defines the following\uff1a"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Right Limit"}),(0,i.jsx)(t.th,{children:"Permissions Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"public-read-write"}),(0,i.jsx)(t.td,{children:"Public read/write and write to\uff1aanyone (including anonymous visitors)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Public-read"}),(0,i.jsx)(t.td,{children:"Public reading\uff1acan only be written by the owner of the Object, and anyone (including anonymous visitors) can read the object."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Private"}),(0,i.jsx)(t.td,{children:"Private\uff1aonly the owner of an object can read and write the object. No one else can access the object."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"default"}),(0,i.jsx)(t.td,{children:"Default\uff1athis object follows the write permissions of Bucket, which permissions are for Bucket, what permissions are for the Object."})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Tencent cloud defined below\uff1a"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Right Limit"}),(0,i.jsx)(t.th,{children:"Permissions Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"default"}),(0,i.jsx)(t.td,{children:"Empty description, at this time you determine whether requests are allowed (default) based on the explicit settings of the various levels of directories and the bucket settings"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Private"}),(0,i.jsx)(t.td,{children:"Has FULL_CONTROL permissions for the creator (master account). Others don't have permission"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Public-read"}),(0,i.jsx)(t.td,{children:"FULL_CONTROL permissions for creator, READ permissions for anonymous user groups"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"authenticated - read"}),(0,i.jsx)(t.td,{children:"FULL_CONTROL permissions for creator, READ permissions for authentication user groups"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bucket-owner-read"}),(0,i.jsx)(t.td,{children:"FULL_CONTROL permissions for creator, READ permissions for bucket owners"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bucket-owner-full-control"}),(0,i.jsx)(t.td,{children:"Has both creator and bucket owner FULL_CONTROL permissions"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Description\uff1a"}),"\nobjects do not support granting public-read-write permissions."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"aws defined below\uff1a"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Canned ACL"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Applies to"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Permissions added to ACL"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Private"}),(0,i.jsx)(t.td,{children:"Bucket and object"}),(0,i.jsx)(t.td,{children:"Owner gets FULL_CONTROL. No one else has access rights (default)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Public-read"}),(0,i.jsx)(t.td,{children:"Bucket and object"}),(0,i.jsxs)(t.td,{children:["Owner gotsFULL_CONTROL. The AllUser group (see ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#specifying-grante",children:"Who is a grante?"}),")) gets READ access."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"public-read-write"}),(0,i.jsx)(t.td,{children:"Bucket and object"}),(0,i.jsx)(t.td,{children:"Owner getsFULL_CONTROL. The AllUsers group gets READ and WRITE. Granting this on a bucket is generally not recommended."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"aws-exec-read"}),(0,i.jsx)(t.td,{children:"Bucket and object"}),(0,i.jsx)(t.td,{children:"Owner gets FULL_CONTROL. Amazon EC2 gets READ access to GET an Amazon Machine Image (AMI) bundle from Amazon S3."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"authenticated - read"}),(0,i.jsx)(t.td,{children:"Bucket and object"}),(0,i.jsx)(t.td,{children:"Owner gets FULL_CONTROL. The AuthenticatedUser group gets READ access."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bucket-owner-read"}),(0,i.jsx)(t.td,{children:"Object"}),(0,i.jsx)(t.td,{children:"Object owner gets FULL_CONTROL. Bucket owner gets READ access. If you specify this ACL when creating a bucket, Amazon S3 ignores it."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bucket-owner-full-control"}),(0,i.jsx)(t.td,{children:"Object"}),(0,i.jsx)(t.td,{children:"Both the object owner and the bucket owner get FULL_CONTROL over the object. If you specify this announced ACL when creating a bucket, Amazon S3 ignores it."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"log-delivery-write"}),(0,i.jsx)(t.td,{children:"Bucket"}),(0,i.jsxs)(t.td,{children:["For more information about logs, see (",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userLogs.html",children:"Logging requests using server access loging"}),")."]})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"As can be seen from the above list, the definition of acl is differentiated by different oss-manufacturers, but the concept of canned acl exists and therefore the interface belongs to an interface that does not guarantee portability,\nthis requires a judgement on the value of acl in the implementation of a specific component.For example, during the migration of users from Tencent to Aliyun\nto assign ACls to public-read-write and return to Aliyun like \u201cnot supported acl\u201d,\nas long as it can be done to remind users that the interface does not fit the portable."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Layotto offers acl, but users need to be cautious about the use of acl, because differences in the service may lead to unanticipated results."})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["[",(0,i.jsx)(t.a,{href:"https://help.aliyun.com/document_detail/100676.html",children:"https://help.aliyun.com/document_detail/100676.html"}),"]"," (",(0,i.jsx)(t.a,{href:"https://help.aliun.com/document_detail/100676.html",children:"https://help.aliun.com/document_detail/100676.html"}),") Aliyun object acl type",(0,i.jsx)(t.br,{}),"\n","[",(0,i.jsx)(t.a,{href:"https://cloud.tencent.com/document/product/436/30752#E9.A2.84.E8.E7.E7.9A.84-acl",children:"https://cloud.tencent.com/document/product/436/30752#E9.A2.84.E8.E7.E7.9A.84-acl"}),"]"," (",(0,i.jsx)(t.a,{href:"https://cloud.tenent.com/document/product/436/30752#E9.A2.84.E.84.E.8.BE.7.9A.84-acl",children:"https://cloud.tenent.com/document/product/436/30752#E9.A2.84.E.84.E.8.BE.7.9A.84-acl"}),") Tencast cloud acltype",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#CannedACL",children:"https://docs.aws.amazon.com/AmazonS3/useruide/acl-overview.html#CannedACL"}),"\n",(0,i.jsx)(t.a,{href:"https://github.com/minio/minio/issues/8195",children:"https://github.com/minio/minio/issues/8195"})," \u5bf9\u4e8eminio\u662f\u5426\u5e94\u8be5\u652f\u6301acl\u7684\u8ba8\u8bba"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"putobjectcannedacl",children:"PutObjectCannedAcl"}),"\n",(0,i.jsx)(t.p,{children:"This corresponds to the above-mentioned GetObjectCannedAcl, which is used to set an object."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Layotto offers acl, but users need to be cautious about the use of acl, because differences in the service may lead to unanticipated results."})}),"\n",(0,i.jsx)(t.h3,{id:"restoreobject",children:"RestoreObject"}),"\n",(0,i.jsx)(t.p,{children:"Launch the RestoreObject interface to unfreeze files of Archive Type (Archive) or Cold Archive.For the definition of the corresponding interface,\nplease find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"createmultipartupload",children:"CreateMultipartUpload"}),"\n",(0,i.jsx)(t.p,{children:"Creating a split upload interface, is the most basic ability of oss.For the definition of the corresponding interface, please find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"upload-part",children:"Upload Part"}),"\n",(0,i.jsx)(t.p,{children:"Snippet upload interface, is the most basic ability of oss.For the definition of the corresponding interface, please find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"upload-partcopy",children:"Upload PartCopy"}),"\n",(0,i.jsx)(t.p,{children:"The decimal copy interface, is the most basic ability of oss.For the definition of the corresponding interface, please find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"completemultipartupload",children:"CompleteMultipartUpload"}),"\n",(0,i.jsx)(t.p,{children:"Finish the split upload interface, which is the most basic ability of oss.For the definition of the corresponding interface, please find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"abortmultipartupload",children:"AbortMultipartUpload"}),"\n",(0,i.jsx)(t.p,{children:"Disconnect the particle upload interface, which is the most basic ability of oss.For the definition of the corresponding interface, please find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"listmultipartupload",children:"ListMultipartUpload"}),"\n",(0,i.jsx)(t.p,{children:"Query for uploaded fragments is the most basic ability of oss.For the definition of the corresponding interface, please find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"listobjectversions",children:"ListObjectVersions"}),"\n",(0,i.jsx)(t.p,{children:"Query all version information for the object is the most basic ability of the goss.For the definition of the corresponding interface, please find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"headobject",children:"HeadObject"}),"\n",(0,i.jsx)(t.p,{children:"Returns the metadata data of the object, which is the most basic ability of the goss.For the definition of the corresponding interface, please find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"isobjectexist",children:"IsObjectExist"}),"\n",(0,i.jsx)(t.p,{children:"The interface is not clearly defined in s3, and users can determine whether an object exists by way of the http's standard error code returned by HeadObject, which is abstracted separately to make the interface more semicolon."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"ttp://biercoff.com/how-to-check-with-aws-cli-if-file-exists-in-s3/",children:"http://biercoff.com/how-to-check-with-aws-cli-if-file-exiss-in-s3/"}),"\n",(0,i.jsx)(t.a,{href:"https://stackoverflow.com/questions/41871948/aws-on-to-the-file-existing-bash",children:"https://stackoverflow.com/questions/41871948/aws-s3-how-to-check-if-a-file-exiss-in-a-bucket-using-bash"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"signurl",children:"SignURL"}),"\n",(0,i.jsx)(t.p,{children:"This interface generates an url for object upload and downloads, mainly for unauthorized users.It is the most basic ability of oss.For the definition of the corresponding interface,\nplease find in the above link or in the reference to the pb interface definition annotation."}),"\n",(0,i.jsx)(t.h3,{id:"updatedownloadbandwidthratelimit",children:"UpdateDownloadBandwidthRateLimit"}),"\n",(0,i.jsx)(t.p,{children:"This interface provides an interface for Aliyun that can limit the download speed of customers.For specific information, reference may be made to annotations in the pb definition."}),"\n",(0,i.jsx)(t.h3,{id:"updatebandwidthrattelimit",children:"UpdateBandwidthRatteLimit"}),"\n",(0,i.jsx)(t.p,{children:"This interface provides an interface for Aliyun that can limit the upload speed of customers.For specific information, reference may be made to annotations in the pb definition."}),"\n",(0,i.jsx)(t.h3,{id:"appendobject",children:"AppendObject"}),"\n",(0,i.jsx)(t.p,{children:"The interface is an additional interface mainly used for the application of the file, which is not supported by aw but is provided by both Aliyun and Tencent clouds and minio."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://help.aliyun.com/document_detail/31981.html",children:"https://help.aliyun.com/document_detail/31981.html"}),"\n",(0,i.jsx)(t.a,{href:"https://github.com/minio/minio-java/issues/980",children:"https://github.com/minio/minio-java/issues/980"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"listparts",children:"ListParts"}),"\n",(0,i.jsx)(t.p,{children:"Query for uploaded fragments is the most basic ability of oss.For the definition of the corresponding interface, please find in the above link or in the reference to the pb interface definition annotation."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);