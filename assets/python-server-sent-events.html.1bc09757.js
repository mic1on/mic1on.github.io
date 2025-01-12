import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as i,a as n,b as e,e as t,d as s}from"./app.285d9b98.js";const l={},u=t(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u6700\u8FD1\u516C\u53F8\u7684web\u9879\u76EE\u4E2D\u9700\u8981\u4F7F\u7528\u5230\u6D88\u606F\u5B9E\u65F6\u63A8\u9001\uFF0C\u80FD\u591F\u53CA\u65F6\u5C06\u91CD\u8981\u7EBF\u7D22\u63A8\u9001\u7ED9\u8D23\u4EFB\u4EBA\uFF0C\u4E00\u5F00\u59CB\u60F3\u7684\u662F\u91C7\u7528\u8F83\u4E3A\u6210\u719F\u7684WS\u65B9\u6848\u3002\u4F46\u7ECF\u8FC7\u9700\u6C42\u5206\u6790\u540E\u6211\u8BA4\u4E3A\u5728\u8FD9\u4E2A\u573A\u666F\u4E0B\uFF0C\u4F7F\u7528SSE\u66F4\u5408\u9002\u3002</p><h2 id="\u6280\u672F\u6808\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u6808\u9009\u62E9" aria-hidden="true">#</a> \u6280\u672F\u6808\u9009\u62E9</h2><p>\u4E3B\u8981\u539F\u56E0\u5982\u4E0B\uFF1A</p><ol><li>\u6D88\u606F\u4E1A\u52A1\u662F\u5355\u5411\u7684\uFF0C\u4E0D\u9700\u8981\u53CC\u5411\u7684\u6D88\u606F\u63A8\u9001\uFF1B\u76F8\u8F83\u4E8Ews\u53CC\u5DE5\u901A\u9053\u6709\u66F4\u4F4E\u7684\u5F00\u9500\u3002</li><li>\u9700\u6C42\u5B9E\u73B0\u76F8\u8F83\u4E8EWS\u66F4\u4E3A\u7B80\u5355\uFF0C\u53EA\u9700\u5F88\u5C11\u91CF\u7684\u4EE3\u7801\u96C6\u6210\u5373\u53EF\u5B9E\u73B0\u3002</li><li>\u4E0D\u9650\u5236\u5F00\u53D1\u8BED\u8A00\uFF0CJAVA\u3001Python\u7B49\u90FD\u53EF\u4EE5\u5B9E\u73B0\u3002</li><li>\u6D4F\u89C8\u5668\u652F\u6301SSE\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u7684\u4EE3\u7801\u3002</li><li>\u76F8\u6BD4\u4E8E\u4F20\u7EDF\u7684http\u8F6E\u8BE2\uFF0CSSE\u66F4\u4E3A\u51CF\u8F7B\u670D\u52A1\u7AEF\u538B\u529B\u548C\u6570\u636E\u65F6\u6548\u6027\u3002</li></ol><p>\u5176\u4E2D\uFF0C\u6700\u6838\u5FC3\u7684\u4E5F\u5C31\u662F\uFF1A\u6211\u4EEC\u7684\u9700\u6C42\u662F\u5355\u5411\u7684\u6D88\u606F\u63A8\u9001\u3002</p><p>\u76EE\u524D\u4E1A\u52A1\u4EE3\u7801\u662F\u6709JAVA\u540C\u5B66\u6765\u5B9E\u73B0\u7684\uFF0C\u4F46\u662F\u6211\u4E0D\u59A8\u4F7F\u7528python\u4E5F\u5B9E\u73B0\u4E00\u4E0B\uFF0C\u4E07\u4E00\u4EE5\u540E\u9700\u8981\u5462\uFF1F</p><h2 id="\u57FA\u4E8Efastapi\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Efastapi\u5B9E\u73B0" aria-hidden="true">#</a> \u57FA\u4E8EFastAPI\u5B9E\u73B0</h2><ul><li>\u5B89\u88C5\u4F9D\u8D56\u5305</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token string">&quot;fastapi[all]&quot;</span>
pip <span class="token function">install</span> sse-starlette
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B8C\u6574\u4EE3\u7801\u5B9E\u73B0\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">import</span> random
<span class="token keyword">import</span> asyncio

<span class="token keyword">import</span> uvicorn
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">,</span> Request
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>middleware<span class="token punctuation">.</span>cors <span class="token keyword">import</span> CORSMiddleware
<span class="token keyword">from</span> sse_starlette<span class="token punctuation">.</span>sse <span class="token keyword">import</span> EventSourceResponse

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># \u8DE8\u57DF\u8BBE\u7F6E\uFF0C\u56E0\u4E3A\u6D4B\u8BD5\u9700\u8981\u524D\u7AEF\u8BBF\u95EE\uFF0C\u6240\u4EE5\u5141\u8BB8\u6240\u6709\u57DF\u8BBF\u95EE</span>
app<span class="token punctuation">.</span>add_middleware<span class="token punctuation">(</span>
    CORSMiddleware<span class="token punctuation">,</span>
    allow_origins<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    allow_credentials<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    allow_methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    allow_headers<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&#39;/stream&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">stream</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">new_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">event_generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        index <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            index <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">if</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span>is_disconnected<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span>
            <span class="token comment"># \u6D4B\u8BD5\u53D6\u968F\u673A\u6570\u636E\uFF0C\u6BCF\u6B21\u53D6\u4E00\u4E2A\u968F\u673A\u6570</span>
            <span class="token keyword">if</span> count <span class="token operator">:=</span> new_count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">yield</span> <span class="token punctuation">{</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">:</span> count<span class="token punctuation">}</span>

            <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> EventSourceResponse<span class="token punctuation">(</span>event_generator<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&#39;main:app&#39;</span><span class="token punctuation">,</span> <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u5F00\u542F\u670D\u52A1\uFF0C\u5728\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF1A</p>`,13),r={href:"http://127.0.0.1:8000/stream",target:"_blank",rel:"noopener noreferrer"},d=s("http://127.0.0.1:8000/stream"),k=t(`<p>\u53EF\u4EE5\u89C2\u5BDF\u5230\uFF0C\u968F\u673A\u6570\u5B57\u95F4\u9694\u4E00\u79D2\u8F93\u51FA\u3002</p><p>\u65E2\u7136\u6211\u4EEC\u90FD\u5F00\u542F\u4E86\u8DE8\u8D8A\u4E86\uFF0C\u90A3\u8BD5\u7740\u5C06\u8FD9\u4E2A\u63A5\u53E3\u63A5\u5165\u5230web\u524D\u7AEF\u670D\u52A1\u4E2D\u3002</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/demo-2022-07-23.gif" alt="" loading="lazy"></p><h2 id="\u57FA\u4E8Eflask\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Eflask\u5B9E\u73B0" aria-hidden="true">#</a> \u57FA\u4E8EFlask\u5B9E\u73B0</h2><p>\u76F8\u8F83\u4E8Efastapi\uFF0Cflask\u66F4\u4E3A\u6781\u7B80\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> flask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">import</span> random
<span class="token keyword">import</span> time

<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> Response

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/stream&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">new_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">eventStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> count <span class="token operator">:=</span> new_count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">yield</span> <span class="token string">&#39;id: %d\\n&#39;</span> <span class="token operator">%</span> <span class="token builtin">id</span> <span class="token operator">+</span> <span class="token string">&#39;data: %s\\n\\n&#39;</span> <span class="token operator">%</span> count
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> Response<span class="token punctuation">(</span>eventStream<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mimetype<span class="token operator">=</span><span class="token string">&quot;text/event-stream&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">8888</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#javascript\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> Javascript\u5BA2\u6237\u7AEF</h2><p>\u4E3A\u4E86\u80FD\u591F\u76F4\u63A5\u4F53\u9A8C\u5230SSE\u7684\u9B45\u529B\uFF0C\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u952E\u5165\u4EE5\u4E0B\u4EE3\u7801\u5373\u53EF\u94FE\u63A5\u670D\u52A1\u7AEF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/stream&quot;</span><span class="token punctuation">)</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u8BED" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a> \u7ED3\u8BED</h2><p>\u4EE5\u4E0A\u662Fpython\u5B9E\u73B0sse\u7684\u6838\u5FC3\u57FA\u7840\u4EE3\u7801\uFF0C\u800C\u771F\u6B63\u9879\u76EE\u4E2D\u5219\u9700\u8981\u7528\u5230\u6570\u636E\u5E93\u7B49\u7CFB\u5217\u64CD\u4F5C\uFF0C\u5305\u62EC\u6D88\u606F\u5206\u53D1\u7ED9\u6307\u5B9A\u7684\u63A5\u6536\u4EBA\u7B49\u7B49\u3002\u672C\u6587\u4E3B\u8981\u662F\u5C31\u4E1A\u52A1\u573A\u666F\u800C\u8A00\uFF0C\u9009\u62E9\u5408\u9002\u7684\u6280\u672F\u6765\u5B9E\u73B0\u9700\u6C42\u3002</p><p>end.</p>`,13),v=s("\u53C2\u8003\uFF1A "),m={href:"https://www.npmjs.com/package/event-source-polyfill",target:"_blank",rel:"noopener noreferrer"},b=s("event-source-polyfill");function h(w,_){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[d,e(a)])])]),k,n("p",null,[v,n("a",m,[b,e(a)])])])}var g=p(l,[["render",h],["__file","python-server-sent-events.html.vue"]]);export{g as default};
