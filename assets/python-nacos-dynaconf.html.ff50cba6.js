import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as i,c as l,a as s,b as a,w as u,d as n,e as o}from"./app.3ad2f83b.js";const r={},d=s("h2",{id:"\u6982\u8FF0",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6982\u8FF0","aria-hidden":"true"},"#"),n(" \u6982\u8FF0")],-1),k={href:"https://nacos.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"},v=n("Nacos"),m=n(" \u662F\u4E00\u4E2A\u52A8\u6001\u670D\u52A1\u53D1\u73B0\u3001\u914D\u7F6E\u7BA1\u7406\u548C\u670D\u52A1\u7BA1\u7406\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u79CD\u670D\u52A1\u7C7B\u578B\u548C\u7279\u6027\uFF0C\u5E2E\u52A9\u60A8\u5FEB\u901F\u6784\u5EFA\u3001\u4EA4\u4ED8\u548C\u7BA1\u7406\u4E91\u539F\u751F\u5E94\u7528\u3002 "),b={href:"https://www.dynaconf.com/",target:"_blank",rel:"noopener noreferrer"},h=n("Dynaconf"),_=n(" \u662F\u4E00\u4E2A\u7528 Python \u5B9E\u73B0\u7684\u8F7B\u91CF\u7EA7\u914D\u7F6E\u7BA1\u7406\u5E93\uFF0C\u5B83\u652F\u6301\u591A\u79CD\u683C\u5F0F\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u4E14\u53EF\u4EE5\u52A8\u6001\u4FEE\u6539\u914D\u7F6E\u3002"),g=s("p",null,"\u8FD9\u4E2A\u4E24\u4F4D\u4E00\u7EC4\u5408\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7EAF\u52A8\u6001\u914D\u7F6E\uFF0C\u65E0\u9700\u91CD\u542F\u670D\u52A1\uFF0C\u5C31\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u3002",-1),f=s("h2",{id:"nacos-sdk",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nacos-sdk","aria-hidden":"true"},"#"),n(" nacos sdk")],-1),y=n("\u5728\u9605\u8BFB\u4E86\u5B98\u65B9\u4ED3\u5E93\u7684"),w={href:"https://github.com/nacos-group/nacos-sdk-python",target:"_blank",rel:"noopener noreferrer"},q=n("nacos-sdk-python"),x=n("\u6E90\u7801\u4E4B\u540E\u603B\u611F\u89C9\u5DEE\u5F3A\u4EBA\u610F\uFF0C\u4E0D\u652F\u6301\u5F02\u6B65\uFF0Cissues\u548CPR\u4E5F\u5F88\u591A\u6CA1\u4EBA\u5904\u7406\u3002\u770B\u4E86\u5B9E\u73B0\u4E5F\u4E0D\u7B97\u96BE\uFF0C\u82B1\u4E86\u51E0\u5929\u65F6\u95F4\u81EA\u5DF1\u5B9E\u73B0\u4E86\u4E00\u4E2A"),A={href:"https://github.com/use-py/use-nacos/",target:"_blank",rel:"noopener noreferrer"},P=n("use-nacos"),N=o(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> use_nacos <span class="token keyword">import</span> NacosClient

client <span class="token operator">=</span> NacosClient<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

<span class="token comment"># publish config</span>
client<span class="token punctuation">.</span>config<span class="token punctuation">.</span>publish<span class="token punctuation">(</span><span class="token string">&quot;test_config&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DEFAULT_GROUP&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test_value&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># get config</span>
<span class="token keyword">assert</span> client<span class="token punctuation">.</span>config<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;test_config&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DEFAULT_GROUP&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;test_value&quot;</span>


<span class="token comment"># subscribe config</span>

<span class="token keyword">def</span> <span class="token function">config_update</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>


client<span class="token punctuation">.</span>config<span class="token punctuation">.</span>subscribe<span class="token punctuation">(</span>
    <span class="token string">&quot;test_config&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;DEFAULT_GROUP&quot;</span><span class="token punctuation">,</span>
    callback<span class="token operator">=</span>config_update
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u914D\u7F6E\u8FD9\u5757\uFF0C\u5185\u7F6E\u4E86\u57FA\u4E8E\u5185\u5B58\u548C\u672C\u5730\u6587\u4EF6\u7684\u7F13\u5B58\uFF0C\u53EF\u4EE5\u5E94\u5BF9\u914D\u7F6E\u4E2D\u5FC3\u670D\u52A1\u5B95\u673A\u7684\u60C5\u51B5\u3002</p><h2 id="\u5237\u65B0\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5237\u65B0\u914D\u7F6E" aria-hidden="true">#</a> \u5237\u65B0\u914D\u7F6E</h2><p><code>config_update</code> \u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E91\u7AEF\u914D\u7F6E\u66F4\u6539\u540E\u7ACB\u523B\u62FF\u5230\u6700\u65B0\u914D\u7F6E\u3002</p><p>\u4F46\u662F\u5982\u4F55\u5728\u4E0D\u91CD\u542F\u670D\u52A1\u7684\u60C5\u51B5\u4E0B\u66F4\u65B0\u7A0B\u5E8F\u7684\u914D\u7F6E\u5462\uFF1F</p>`,5),F=n("\u5728\u4E4B\u524D\u5199"),L=n("\u591A\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u7BA1\u7406"),U=n("\u7684\u65F6\u5019\u3002\u6211\u63D0\u5230\u4E86\u4F7F\u7528"),E=s("code",null,"dynaconf",-1),I=n("\uFF0C\u800C\u7B14\u8005\u4E00\u76F4\u4EE5\u6765\u9879\u76EE\u4E2D\u914D\u7F6E\u7BA1\u7406\u4E5F\u90FD\u662F\u5728\u7528\u5B83\u3002(\u7B14\u8005\u8FD8\u662F\u8D21\u732E\u8005\u4E4B\u4E00\u{1F601})\u5B83\u652F\u6301\u52A8\u6001\u4FEE\u6539\u914D\u7F6E\uFF0C\u5E76\u4E14\u652F\u6301\u591A\u79CD\u683C\u5F0F\u7684\u914D\u7F6E\u6587\u4EF6\u3002"),R=o(`<p>\u6709\u4E86\u5B83\u6211\u4E0D\u4EC5\u53EF\u4EE5\u73AF\u5883\u53D8\u91CF\u4FEE\u6539\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7nacos\u52A8\u6001\u4FEE\u6539\u914D\u7F6E\u540E\u5237\u65B0\u7A0B\u5E8F\u914D\u7F6E\u3002</p><p>\u4E0B\u9762\u6F14\u793A\u4E0B\u5728<code>FastAPI</code>\u4E2D\u4F7F\u7528<code>dynaconf</code>\u548C<code>use-nacos</code>\u5B9E\u73B0\u52A8\u6001\u914D\u7F6E\u5237\u65B0\u3002</p><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> dynaconf use-nacos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> asynccontextmanager

<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token keyword">from</span> config <span class="token keyword">import</span> settings
<span class="token keyword">from</span> use_nacos <span class="token keyword">import</span> NacosAsyncClient


<span class="token decorator annotation punctuation">@asynccontextmanager</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">lifespan</span><span class="token punctuation">(</span>app<span class="token punctuation">:</span> FastAPI<span class="token punctuation">)</span><span class="token punctuation">:</span>
    nacos <span class="token operator">=</span> NacosAsyncClient<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

    config_subscriber <span class="token operator">=</span> <span class="token keyword">await</span> nacos<span class="token punctuation">.</span>config<span class="token punctuation">.</span>subscribe<span class="token punctuation">(</span>
        data_id<span class="token operator">=</span><span class="token string">&quot;test-config&quot;</span><span class="token punctuation">,</span>
        group<span class="token operator">=</span><span class="token string">&quot;DEFAULT_GROUP&quot;</span><span class="token punctuation">,</span>
        callback<span class="token operator">=</span><span class="token keyword">lambda</span> conf<span class="token punctuation">:</span> settings<span class="token punctuation">.</span>update<span class="token punctuation">(</span>conf<span class="token punctuation">)</span><span class="token punctuation">,</span>
        serialized<span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">yield</span>
    config_subscriber<span class="token punctuation">.</span>cancel<span class="token punctuation">(</span><span class="token punctuation">)</span>


app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span>lifespan<span class="token operator">=</span>lifespan<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">home</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> settings<span class="token punctuation">.</span>kwargs<span class="token punctuation">}</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> uvicorn
    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&quot;app:app&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20231212172835.png" alt="" loading="lazy"></p><p>\u5F53\u6211\u5728nacos\u4E2D\u4FEE\u6539\u914D\u7F6E\u540E\uFF0CFastAPI\u4F1A\u7ACB\u523B\u62FF\u5230\u6700\u65B0\u7684\u914D\u7F6E\u3002</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20231212172929.png" alt="" loading="lazy"></p>`,9);function z(C,D){const t=e("ExternalLinkIcon"),c=e("RouterLink");return i(),l("div",null,[d,s("p",null,[s("a",k,[v,a(t)]),m,s("a",b,[h,a(t)]),_]),g,f,s("p",null,[y,s("a",w,[q,a(t)]),x,s("a",A,[P,a(t)])]),N,s("p",null,[F,a(c,{to:"/posts/language/python/python-settings2.html"},{default:u(()=>[L]),_:1}),U,E,I]),R])}var O=p(r,[["render",z],["__file","python-nacos-dynaconf.html.vue"]]);export{O as default};