const e={key:"v-2ddc8bcd",path:"/posts/other/rabbitmq-delay-queue.html",title:"RabbitMQ\u4E2D\u5EF6\u8FDF\u961F\u5217\u7684\u4F7F\u7528",lang:"zh-CN",frontmatter:{title:"RabbitMQ\u4E2D\u5EF6\u8FDF\u961F\u5217\u7684\u4F7F\u7528",shortTitle:"RabbitMQ\u5EF6\u8FDF\u961F\u5217",icon:"rabbitmq",order:1,date:"2022-08-21T00:00:00.000Z",category:["rabbitmq"],tag:["rabbitmq","dead-letter-queue","delay-queue","plugin"],sticky:!0,star:!0,isOriginal:!0,summary:"\u524D\u8A00 \u5DE5\u4F5C\u4E2D\u6709\u4E9B\u573A\u666F\u9700\u8981\u7528\u5230\u5EF6\u8FDF\u961F\u5217\uFF0C\u5927\u6982\u5BF9RabbitMQ\u5EF6\u8FDF\u961F\u5217\u573A\u666F\u6709\u4E00\u4E9B\u4E86\u89E3\uFF0C\u7F51\u4E0A\u5927\u90E8\u5206\u7684\u573A\u666F\u5E94\u7528\u4E8E\uFF1A\u8BA2\u5355\u8D85\u65F6\u3001\u5B9A\u65F6\u6267\u884C\u7B49\u3002 \u800C\u6211\u9700\u8981\u5EF6\u8FDF\u961F\u5217\u7684\u573A\u666F\u662F\uFF1A\u6709\u4E00\u6279\u673A\u5668\u9700\u8981\u76D1\u63A7\u8FD9\u4E2A\u5EF6\u8FDF\u961F\u5217\u957F\u5EA6\uFF0C\u4E00\u65E6\u6EE1\u8DB3\u5C31\u63D0\u524D\u9884\u5907\u673A\u5668\uFF0C\u51C6\u5907\u6267\u884C\u4EFB\u52A1\u3002\u901A\u8FC7\u76D1\u63A7\u5EF6\u8FDF\u961F\u5217\uFF0C\u6211\u53EF\u4EE5\u51C6\u786E\u3001\u53EF\u9760\u7684\u6E05\u695A\uFF0C\u63A5\u4E0B\u6765\u7684\u67D0\u4E2A\u65F6\u95F4\u6211\u4E00\u5B9A\u4F1A\u6267\u884C\u54EA\u4E9B\u4EFB\u52A1\u3002\u76F8\u8F83\u4E8E\u4F20\u7EDF\u901A\u8FC7API\u6765\u5524\u9192\u8BBE\u5907\uFF0C\u63D0\u5347\u4E86\u7A33\u5B9A\u6027\u3002\u6211",head:[["meta",{property:"og:url",content:"https://52caiji.com/posts/other/rabbitmq-delay-queue.html"}],["meta",{property:"og:site_name",content:"MicLon's Blog"}],["meta",{property:"og:title",content:"RabbitMQ\u4E2D\u5EF6\u8FDF\u961F\u5217\u7684\u4F7F\u7528"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-08-22T00:33:41.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"rabbitmq"}],["meta",{property:"article:tag",content:"dead-letter-queue"}],["meta",{property:"article:tag",content:"delay-queue"}],["meta",{property:"article:tag",content:"plugin"}],["meta",{property:"article:published_time",content:"2022-08-21T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-08-22T00:33:41.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u524D\u8A00",slug:"\u524D\u8A00",children:[]},{level:2,title:"\u6B7B\u4FE1\u961F\u5217",slug:"\u6B7B\u4FE1\u961F\u5217",children:[{level:3,title:"\u95EE\u9898\uFF1A\u4E0D\u540C\u6D88\u606F\u4E0D\u540C\u5EF6\u8FDF",slug:"\u95EE\u9898-\u4E0D\u540C\u6D88\u606F\u4E0D\u540C\u5EF6\u8FDF",children:[]},{level:3,title:"\u95EE\u9898\uFF1A\u6D88\u606FTTL\u8D85\u8FC7\u961F\u5217TTL",slug:"\u95EE\u9898-\u6D88\u606Fttl\u8D85\u8FC7\u961F\u5217ttl",children:[]},{level:3,title:"\u65E0TTL\u961F\u5217+\u6D88\u606FTTL",slug:"\u65E0ttl\u961F\u5217-\u6D88\u606Fttl",children:[]},{level:3,title:"\u95EE\u9898\uFF1A\u961F\u5217\u4F18\u5148\u7EA7",slug:"\u95EE\u9898-\u961F\u5217\u4F18\u5148\u7EA7",children:[]}]},{level:2,title:"\u5EF6\u8FDF\u961F\u5217\u63D2\u4EF6",slug:"\u5EF6\u8FDF\u961F\u5217\u63D2\u4EF6",children:[{level:3,title:"\u5B89\u88C5\u5EF6\u8FDF\u961F\u5217\u63D2\u4EF6",slug:"\u5B89\u88C5\u5EF6\u8FDF\u961F\u5217\u63D2\u4EF6",children:[]},{level:3,title:"\u5EF6\u8FDF\u961F\u5217\u5B9E\u73B0",slug:"\u5EF6\u8FDF\u961F\u5217\u5B9E\u73B0",children:[]}]},{level:2,title:"\u603B\u7ED3",slug:"\u603B\u7ED3",children:[]}],git:{createdTime:1661128421e3,updatedTime:1661128421e3,contributors:[{name:"miclon",email:"jcnd@163.com",commits:1}]},readingTime:{minutes:7.04,words:2111},filePathRelative:"posts/other/rabbitmq-delay-queue.md"};export{e as data};