import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as p,c as i,a as n,b as t,d as s,e}from"./app.285d9b98.js";const l={},u=n("h1",{id:"fastapi-rpc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fastapi-rpc","aria-hidden":"true"},"#"),s(" FastAPI RPC")],-1),r=s("\u5F00\u6E90\u5730\u5740: "),d={href:"https://github.com/mic1on/fastapi_rpc",target:"_blank",rel:"noopener noreferrer"},h=s("Github"),k=n("p",null,"\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E FastAPI \u7684 \u6D4F\u89C8\u5668 RPC \u670D\u52A1\u7AEF\u3002",-1),_=n("blockquote",null,[n("p",null,"\u6B64\u6D4F\u89C8\u5668\u53EF\u4EE5\u662F\u4EFB\u4F55\u7AEF(pc/\u624B\u673A/\u5E73\u677F)\u7684\u4EFB\u610F\u6D4F\u89C8\u5668")],-1),m=n("p",null,"\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2AWS\u670D\u52A1\u548C\u4E00\u4E2AHTTP\u670D\u52A1\u3002WS\u670D\u52A1\u8D1F\u8D23\u6D4F\u89C8\u5668\u7FA4\u548C\u670D\u52A1\u7AEF\u7684\u901A\u4FE1\uFF1BHTTP\u670D\u52A1\u8D1F\u8D23\u63D0\u4F9B\u4E00\u4E2AHTTP\u63A5\u53E3\uFF0C\u7528\u6237\u901A\u8FC7\u8C03\u7528\u63A5\u53E3\u5B9E\u73B0\u8C03\u7528\u8FDC\u7A0B\u6D4F\u89C8\u5668\u7FA4\u7684\u65B9\u6CD5\u3002",-1),v=s("\u6B64\u9879\u76EE\u4E3B\u8981\u601D\u8DEF\u6765\u81EA\u4E8E "),g={href:"https://github.com/virjar/sekiro",target:"_blank",rel:"noopener noreferrer"},b=s("sekiro"),f=s("\u3002\u9879\u76EE\u7684\u521D\u8877\u662F\u5B66\u4E60\u5E76\u5206\u4EAB\u5B66\u4E60\u6210\u679C\uFF0C\u8BF7\u52FF\u7528\u4E8E\u975E\u6CD5\u7528\u9014\u3002"),j=e(`<h3 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h3><p>\u5F53\u4F60\u82E6\u4E8E\u7F51\u7AD9\u5C42\u5C42\u52A0\u5BC6\u65E0\u6CD5\u89E3\u5BC6\u65F6\uFF0C\u5F53\u4F60\u9047\u5230\u8BF8\u5982\u52A8\u6001cookie\u52A0\u5BC6\u65F6\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u6B64\u9879\u76EE\uFF0C\u8FD9\u662F\u89E3\u51B3\u65B9\u6848\u4E4B\u4E00\u3002</p><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><ul><li>\u65B9\u5F0F1\uFF1Adocker</li></ul><blockquote><p>docker run --name rpc -p 8000:8000 -d miclon/fastapi_rpc</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u652F\u6301\u73AF\u5883\u53D8\u91CF\uFF1A
WORKERS_PER_CORE: \u6BCF\u4E2ACPU\u6838\u5DE5\u4F5C\u7EBF\u7A0B\u6570\u91CF\uFF0C\u9ED8\u8BA4\u4E3A1
MAX_WORKERS\uFF1A\u5DE5\u4F5C\u8FDB\u7A0B\uFF0C\u9ED8\u8BA4\u662F\u6309CPU\u6838\u5FC3\u6570\u91CF*WORKERS_PER_CORE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u65B9\u5F0F2\uFF1Aclone\u672C\u5730\u8FD0\u884C</li></ul><ol><li>\u9996\u5148\u4F60\u9700\u8981\u786E\u4FDD\u6210\u529F\u8FD0\u884Cpython\u4E3B\u7A0B\u5E8F<code>main.py</code></li><li>\u5C06\u63D0\u4F9B\u7ED9\u4F60\u7684<code>client.js</code>\u6CE8\u5165\u5230\u6D4F\u89C8\u5668\u4E2D\u3002\u6CE8\u5165\u65B9\u5F0F\u4F5C\u8005\u7528\u7684\u662F\u6CB9\u7334\u3002</li><li>\u5C06\u6D4F\u89C8\u5668\u6253\u5F00\u4EFB\u610F\u7F51\u7AD9\uFF0C\u6BD4\u5982\u767E\u5EA6\u3002\uFF08\u8FD9\u65F6\u5019\u6CB9\u7334\u811A\u672C\u662F\u5C06client.js\u6CE8\u5165\u5230\u9875\u9762\u91CC\u7684\uFF09</li><li>\u6B64\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5728\u7535\u8111\u7EC8\u7AEF\u4E2D\u6267\u884C\uFF1A</li></ol>`,8),x=s("curl "),q={href:"http://localhost:8000/do/cookies",target:"_blank",rel:"noopener noreferrer"},y=s("http://localhost:8000/do/cookies"),R=e(`<p>\u4F60\u5C06\u5728\u7EC8\u7AEF\u770B\u5230\u4F60\u8BBF\u95EE\u767E\u5EA6\u7559\u4E0B\u7684cookies</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220705232431.png" alt="" loading="lazy"></p><p>\u4EE5\u4E0A\u5C31\u662F\u4E00\u6B21\u9879\u76EE\u7684\u521D\u4F53\u9A8C\uFF0C\u5982\u679C\u4EE5\u4E0A\u6B65\u9AA4\u975E\u5E38\u987A\u5229\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5411\u4E0B\u770B\u3002</p><h3 id="\u65B0\u589E\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u529F\u80FD" aria-hidden="true">#</a> \u65B0\u589E\u529F\u80FD</h3><p>\u521A\u521A\u770B\u5230\u4E86\uFF0C\u6211\u4EEC\u5728API\u63A5\u53E3\u8C03\u7528\u4E86/do/cookies\uFF0C\u90A3\u662F\u56E0\u4E3A\u6211\u4EEC\u5728<code>client.js</code>\u4E2D\u6CE8\u518C\u4E86\u6B64\u65B9\u6CD5\u540D\u79F0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span><span class="token string">&quot;cookies&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span>reject</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u987A\u7406\u6210\u7AE0\u5730\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5176\u4ED6\u4EFB\u610F\u64CD\u4F5C\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span>reject</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>outerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u968F\u540E\uFF0C\u6211\u4EEC\u8C03\u7528\uFF1A</p>`,9),P=s("curl "),E={href:"http://localhost:8000/do/html",target:"_blank",rel:"noopener noreferrer"},z=s("http://localhost:8000/do/html"),S=s(" -o baidu.txt"),T=e(`<p>ps: -o \u8F93\u51FA\u5230\u6587\u4EF6baidu.txt</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220705234115.png" alt="" loading="lazy"></p><h3 id="\u4E3E\u4F8B\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4F8B\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E3E\u4F8B\u5E94\u7528\u573A\u666F</h3><h5 id="\u67D0\u7F51\u7AD9\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u67D0\u7F51\u7AD9\u767B\u5F55" aria-hidden="true">#</a> \u67D0\u7F51\u7AD9\u767B\u5F55</h5><p>\u5176\u7F51\u7AD9\u767B\u5F55\u7684\u65F6\u5019\u5BC6\u7801\u662F\u52A0\u5BC6\u7684\u3002</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220705234828.png" alt="" loading="lazy"></p><p>\u5C1D\u8BD5\u627E\u5230\u8C03\u7528\u5904\u3002</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220705234952.png" alt="" loading="lazy"></p><p>\u8FD9\u91CC\u5C31\u662F\u5B83\u7684\u52A0\u5BC6\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">encryptedString</span><span class="token punctuation">(</span>key_to_encode<span class="token punctuation">,</span> that<span class="token punctuation">.</span>password<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE5\u5F80\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u9700\u8981\u8FDB\u5165\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u62A0\u51FA\u5B83\u7684\u5B9E\u73B0\u8FC7\u7A0B\u3002\u8981\u4E48\u8FD8\u539F\u8981\u4E48node\u8C03\u7528\u6267\u884C\u3002</p><p>\u73B0\u5728\uFF0C\u4E0D\u9700\u8981\u8FD9\u4E9B\uFF0C\u76F4\u63A5\u590D\u5236\u8FD9\u4E2A\u52A0\u5BC6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span><span class="token string">&quot;mm&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span>reject</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">encryptedString</span><span class="token punctuation">(</span>key_to_encode<span class="token punctuation">,</span> <span class="token string">&quot;qq1234&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\uFF1A</p>`,14),A=s("curl "),C={href:"http://localhost:8000/do/mm",target:"_blank",rel:"noopener noreferrer"},I=s("http://localhost:8000/do/mm"),O=n("p",null,"\u5F97\u5230\u52A0\u5BC6\u7ED3\u679C\uFF1A",-1),W=n("p",null,[n("img",{src:"https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220705235309.png",alt:"",loading:"lazy"})],-1),w=n("h3",{id:"\u66F4\u591A\u573A\u666F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u66F4\u591A\u573A\u666F","aria-hidden":"true"},"#"),s(" \u66F4\u591A\u573A\u666F")],-1),H=n("p",null,"\u2026\u2026",-1);function N(V,B){const a=c("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[r,n("a",d,[h,t(a)])]),k,_,m,n("p",null,[v,n("a",g,[b,t(a)]),f]),j,n("blockquote",null,[n("p",null,[x,n("a",q,[y,t(a)])])]),R,n("blockquote",null,[n("p",null,[P,n("a",E,[z,t(a)]),S])]),T,n("blockquote",null,[n("p",null,[A,n("a",C,[I,t(a)])])]),O,W,w,H])}var F=o(l,[["render",N],["__file","fastapi-rpc.html.vue"]]);export{F as default};
