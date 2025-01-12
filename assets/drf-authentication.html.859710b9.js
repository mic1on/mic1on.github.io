import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e as t}from"./app.285d9b98.js";const e={},o=t(`<h3 id="\u8BA4\u8BC1\u7EC4\u4EF6authentication" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1\u7EC4\u4EF6authentication" aria-hidden="true">#</a> \u8BA4\u8BC1\u7EC4\u4EF6Authentication</h3><blockquote><p>All authentication classes should extend BaseAuthentication. \u6240\u6709\u8BA4\u8BC1\u7C7B\u90FD\u5E94\u8BE5\u7EE7\u627F\u4E8EBaseAuthentication \u2014\u2014 \u6765\u81EABaseAuthentication\u7C7B\u6CE8\u91CA</p></blockquote><h4 id="_1-baseauthentication" tabindex="-1"><a class="header-anchor" href="#_1-baseauthentication" aria-hidden="true">#</a> 1.BaseAuthentication</h4><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220607222145.png" alt="" loading="lazy"></p><p>BaseAuthentication\u4E3A\u8BA4\u8BC1\u7C7B\u7684\u57FA\u7C7B\uFF0C\u5176\u4E2D\u6709\u4E24\u4E2A\u65B9\u6CD5\uFF1A</p><ul><li>authenticate <ul><li>\u8FD9\u4E2A\u65B9\u6CD5\u5FC5\u987B\u88AB\u5B50\u7C7B\u5B9E\u73B0\uFF0C\u7528\u4E8E\u68C0\u6D4B\u8BA4\u8BC1\u662F\u5426\u901A\u8FC7\uFF0C\u4E14\u5FC5\u987B\u8FD4\u56DE\u5143\u7956(user, token)\uFF0C\u503C\u5F97\u6CE8\u610F\u7684\u4E00\u70B9\uFF0C\u5F53\u65B9\u6CD5\u8FD4\u56DENone\u7684\u65F6\u5019\u4F1A\u8DF3\u8FC7\u6B64\u9A8C\u8BC1\uFF0C\u7EE7\u7EED\u4E0B\u4E00\u4E2A\u9A8C\u8BC1\uFF0C\u5982\u679C\u60F3\u8BA4\u8BC1\u4E0D\u901A\u8FC7\uFF0C\u5219\u9700\u8981\u629B\u51FAAuthenticationFailed\u5F02\u5E38\u3002</li></ul></li><li>authenticate_header <ul><li>\u8FD9\u4E2A\u65B9\u6CD5\u5B50\u7C7B\u4E5F\u53EF\u4EE5\u4E0D\u53BB\u8986\u76D6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u6388\u6743\u672A\u901A\u8FC7\uFF0C\u5C55\u793A\u8FD4\u56DEheaders\u4E2Dkey\u4E3A<strong>WWW-Authenticate</strong>\u7684value</li></ul></li></ul><h4 id="_2-\u7F16\u5199\u81EA\u5DF1\u7684\u8BA4\u8BC1\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u7F16\u5199\u81EA\u5DF1\u7684\u8BA4\u8BC1\u7EC4\u4EF6" aria-hidden="true">#</a> 2.\u7F16\u5199\u81EA\u5DF1\u7684\u8BA4\u8BC1\u7EC4\u4EF6</h4><p>\u5728\u8FD9\u91CC\u6211\u76F4\u63A5\u6700\u7B80\u6613\u7684\u5224\u65ADheader\u6765\u68C0\u6D4B\u8BA4\u8BC1</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyAuthentication</span><span class="token punctuation">(</span>BaseAuthentication<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5B9E\u73B0\u7236\u7C7B\u4E2D\u7684authenticate\u65B9\u6CD5</span>
    <span class="token keyword">def</span> <span class="token function">authenticate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> request<span class="token punctuation">.</span>META<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;HTTP_AUTHORIZATION&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;miclon&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
        <span class="token keyword">raise</span> AuthenticationFailed<span class="token punctuation">(</span><span class="token string">&#39;\u8BA4\u8BC1\u4E0D\u901A\u8FC7&#39;</span><span class="token punctuation">)</span>
        
    <span class="token keyword">def</span> <span class="token function">authenticate_header</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;get out&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u542F\u7528header\u7684\u65F6\u5019\uFF1A <img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220607222244.png" alt="" loading="lazy"> \u5F53\u5173\u95ED\u6B64header\u7684\u65F6\u5019\uFF1A <img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220607222301.png" alt="" loading="lazy"> \u540C\u65F6\u53EF\u4EE5\u5728\u8FD4\u56DEheader\u4E2D\u89C2\u5BDF\u5230\uFF1A <img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220607222314.png" alt="" loading="lazy"></p><h4 id="_3-\u8BA4\u8BC1\u7EC4\u4EF6\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u8BA4\u8BC1\u7EC4\u4EF6\u539F\u7406" aria-hidden="true">#</a> 3.\u8BA4\u8BC1\u7EC4\u4EF6\u539F\u7406</h4><p>\u5728APIView\u7C7B\u4E2D\uFF0C\u8BA4\u8BC1\u7EC4\u4EF6\u8BFB\u53D6Django\u8BBE\u7F6E\u9879\u4E2D<code>DEFAULT_AUTHENTICATION_CLASSES</code>\u7684\u5217\u8868\u4F5C\u4E3A\u9ED8\u8BA4\u8BA4\u8BC1\u7C7B</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">APIView</span><span class="token punctuation">(</span>View<span class="token punctuation">)</span><span class="token punctuation">:</span>
	\u2026\u2026
	authentication_classes <span class="token operator">=</span> api_settings<span class="token punctuation">.</span>DEFAULT_AUTHENTICATION_CLASSES
    \u2026\u2026
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u5F53\u7EE7\u627FAPIView\u7684\u5B50\u7C7B\uFF0C\u4F7F\u7528\u8986\u76D6<code>authentication_classes</code>\u7684\u65B9\u5F0F\uFF0C\u5373\u53EF\u81EA\u5B9A\u4E49\u8BE5\u5B50\u7C7B\u7684\u8BA4\u8BC1\u7C7B</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TestView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    authentication_classes <span class="token operator">=</span> <span class="token punctuation">[</span>MyAuthentication<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> JsonResponse<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C8\u7531\u4E8EAPIView\u662F\u7EE7\u627F\u81EADjango\u7684View\uFF0CDjango\u7684View\u662F\u7531<code>dispatch</code>\u65B9\u6CD5\u6765\u8C03\u5EA6\u7684\uFF0CAPIView\u91CD\u5199\u4E86\u6B64\u65B9\u6CD5\uFF0C\u5728\u521D\u59CB\u5316\u83B7\u53D6request\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u5C06\u5B50\u7C7B\u4E2D\u6240\u6709\u7684\u8BA4\u8BC1\u7C7B\u4F20\u9012\u7ED9Request\u7C7B</p><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220607222331.png" alt="" loading="lazy"></p><p>\u6765\u770B\u770BRequest\u7C7B\u5E72\u4E86\u4EC0\u4E48\u4E8B\u3002 <img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220607222353.png" alt="" loading="lazy"> \u4E0D\u96BE\u770B\u51FA\uFF0C\u5B83for\u5FAA\u73AF\u904D\u5386\u4E86\u6240\u6709\u8BA4\u8BC1\u7EC4\u4EF6\uFF0C\u5206\u522B\u53BB\u6267\u884C\u5176\u4E2D\u7684<code>authenticate</code>\u65B9\u6CD5\uFF0C\u5F53\u51FA\u73B0APIException\u5F02\u5E38\u7684\u65F6\u5019\u629B\u51FA\u9519\u8BEF\u3002 \u518D\u56DE\u8FC7\u5934\u770B\u770B\uFF0C\u5F53\u6211\u4EEC\u8BA4\u8BC1\u4E0D\u5141\u8BB8\u901A\u8FC7\u7684\u65F6\u5019\uFF0C\u629B\u51FA<strong>AuthenticationFailed</strong>\u7684\u5F02\u5E38\uFF0C\u800C\u5B83\u5B9E\u9645\u4E0A\u662F\u7EE7\u627F\u81EAAPIException\uFF0C\u4E14\u8986\u76D6\u4E86\u51FA\u9519\u7684\u72B6\u6001\u7801\u4E3A401 <img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220607222408.png" alt="" loading="lazy"></p><p>\u4EE5\u4E0A\u5C31\u662F\u9488\u5BF9DjangoRestFramework\u4E2D\u8BA4\u8BC1\u7EC4\u4EF6\u7684\u7B80\u8981\u89E3\u8BFB\u3002</p>`,19),i=[o];function c(p,l){return a(),s("div",null,i)}var r=n(e,[["render",c],["__file","drf-authentication.html.vue"]]);export{r as default};
