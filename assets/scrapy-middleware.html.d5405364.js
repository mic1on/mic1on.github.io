import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.3ad2f83b.js";const p={},t=e(`<h3 id="\u5B9E\u73B0\u4E00\u4E2Aua\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2Aua\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2AUA\u4E2D\u95F4\u4EF6</h3><p>\u4F7F\u7528scrapy\u6846\u67B6\u5F00\u53D1\u4E00\u6B3E\u722C\u866B\uFF0C\u6216\u591A\u6216\u5C11\u90FD\u4F1A\u7528\u5230\u4E2D\u95F4\u4EF6\u3002\u5E38\u89C1\u7684\u4E2D\u95F4\u4EF6\u6709UserAgent\u4E2D\u95F4\u4EF6\u3001\u4EE3\u7406\u4E2D\u95F4\u4EF6\u7B49\u7B49\u3002\u5176\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\u5728\u722C\u866B\u8BF7\u6C42\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u901A\u8FC7\u81EA\u5B9A\u4E49\u5185\u7F6E\u7684\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u6765\u6539\u53D8\u5982\u8BF7\u6C42\u7684\u7ED3\u6784\uFF0C\u4ECE\u800C\u4F2A\u88C5\u8BF7\u6C42\u5BA2\u6237\u7AEF\u3002 \u6BD4\u5982\uFF0C\u5728UserAgent\u4E2D\u95F4\u4EF6\u4E2D\uFF0C\u901A\u8FC7\u7F16\u5199<code>process_request</code>\u65B9\u6CD5\uFF0C\u5C06\u8BF7\u6C42\u4E2D\u7684headers\u6DFB\u52A0\u81EA\u5B9A\u4E49ua\uFF0C\u6216\u8005\u968F\u673Aua\u6765\u5B9E\u73B0\u52A8\u6001UserAgent\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">UserAgentMiddleware</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">process_request</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
        request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">,</span> random_ua<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u4EC5\u4EC5\u7F16\u5199\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u662F\u4E0D\u591F\u7684\u3002\u8FD8\u9700\u8981\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5F00\u542F\u8BE5\u4E2D\u95F4\u4EF6\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>DOWNLOADER_MIDDLEWARES <span class="token operator">=</span> <span class="token punctuation">{</span>
    \u2026\u2026<span class="token punctuation">,</span>
    <span class="token string">&#39;SpiderPorject.middlewares.UserAgentMiddleware&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E24\u6B65\u8D70\uFF1A1.\u7F16\u5199\u4E2D\u95F4\u4EF6\uFF1B2.\u5F00\u542F\u4E2D\u95F4\u4EF6\u3002\u5373\u53EF\u5B9E\u73B0\u7B80\u5355\u7684\u4E2D\u95F4\u4EF6\u5F00\u53D1\u3002\u6846\u67B6\u5F00\u53D1\u8005\u5DF2\u7ECF\u8DB3\u591F\u7CBE\u7B80\u4E1A\u52A1\u7F16\u5199\u7684\u6D41\u7A0B\u3002\u63A5\u4E0B\u6765\u62B1\u7740\u5B66\u4E60\u7684\u6001\u5EA6\uFF0C\u770B\u770B\u5230\u5E95\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u3002</p><h3 id="middlewaremanager" tabindex="-1"><a class="header-anchor" href="#middlewaremanager" aria-hidden="true">#</a> MiddlewareManager</h3><p><code>MiddlewareManager</code>\u662F\u6240\u6709\u4E2D\u95F4\u4EF6\u7684\u57FA\u7C7B\uFF0C\u6240\u6709\u4E2D\u95F4\u4EF6\u6307\u7684\u662F\uFF1A</p><ul><li>DownloaderMiddlewareManager\uFF1A\u4E0B\u8F7D\u4E2D\u95F4\u4EF6</li><li>SpiderMiddlewareManager\uFF1A\u722C\u866B\u4E2D\u95F4\u4EF6</li><li>ExtensionManager\uFF1A\u6269\u5C55\u4E2D\u95F4\u4EF6</li><li>ItemPipelineManager\uFF1A\u6570\u636E\u7BA1\u9053\u4E2D\u95F4\u4EF6</li></ul><p>\u6211\u4EEC\u5148\u4ECE\u6700\u521D\u7684\u7236\u7C7B_MiddlewareManager_\u6765\u770B\u3002 \u8BE5\u7C7B\u6709\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5<code>from_settings</code>\u6765\u521D\u59CB\u5316\u8FD9\u4E2A\u7C7B\uFF0C\u5728\u91CC\u9762\u4E3B\u8981\u505A\u4E00\u4EF6\u4E8B\uFF0C\u5C31\u662F\u83B7\u53D6\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u4E2D\u95F4\u4EF6path\u3002\u4F55\u4E3A\u4E2D\u95F4\u4EF6path?\u770B\u770B\u4E0A\u9762\uFF0C\u6211\u4EEC\u662F\u5982\u4F55\u542F\u7528UserAgent\u4E2D\u95F4\u4EF6\u7684\u3002\u5728<code>DOWNLOADER_MIDDLEWARES</code>\u4E2D<code>SpiderPorject.middlewares.UserAgentMiddleware</code>\u5C31\u662F\u8FD9\u4E2A\u4E2D\u95F4\u4EF6\u7684\u8DEF\u5F84\u3002\u901A\u8FC7\u65B9\u6CD5<code>load_object</code>\u628A\u8DEF\u5F84\u6620\u5C04\u6210\u7C7B\uFF0C\u5E76\u901A\u8FC7<code>create_instance</code>\u5B9E\u4F8B\u5316\u8BE5\u7C7B\uFF0C\u5B58\u5165\u6570\u7EC4<code>middlewares</code>\u4E2D\u3002\u6700\u540E\u628A<code>middlewares</code>\u4EA4\u7ED9_MiddlewareManager_\u3002\u7136\u540E\u7C7B\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u904D\u5386<code>middlewares</code>\u8C03\u7528\u65B9\u6CD5<code>_add_middleware</code>\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MiddlewareManager</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>middlewares<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>middlewares <span class="token operator">=</span> middlewares
        self<span class="token punctuation">.</span>methods <span class="token operator">=</span> defaultdict<span class="token punctuation">(</span>deque<span class="token punctuation">)</span>
        <span class="token keyword">for</span> mw <span class="token keyword">in</span> middlewares<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>_add_middleware<span class="token punctuation">(</span>mw<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">from_settings</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> settings<span class="token punctuation">,</span> crawler<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        mwlist <span class="token operator">=</span> cls<span class="token punctuation">.</span>_get_mwlist_from_settings<span class="token punctuation">(</span>settings<span class="token punctuation">)</span>
        middlewares <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        enabled <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> clspath <span class="token keyword">in</span> mwlist<span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                mwcls <span class="token operator">=</span> load_object<span class="token punctuation">(</span>clspath<span class="token punctuation">)</span>
                mw <span class="token operator">=</span> create_instance<span class="token punctuation">(</span>mwcls<span class="token punctuation">,</span> settings<span class="token punctuation">,</span> crawler<span class="token punctuation">)</span>
                middlewares<span class="token punctuation">.</span>append<span class="token punctuation">(</span>mw<span class="token punctuation">)</span>
                enabled<span class="token punctuation">.</span>append<span class="token punctuation">(</span>clspath<span class="token punctuation">)</span>
            <span class="token keyword">except</span> NotConfigured <span class="token keyword">as</span> e<span class="token punctuation">:</span>
               \u2026\u2026
        <span class="token keyword">return</span> cls<span class="token punctuation">(</span><span class="token operator">*</span>middlewares<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>_add_middleware</code>\u5728\u7236\u7C7B\u9ED8\u8BA4\u505A\u4E86\u54EA\u4E9B\u4E8B\uFF1F\u5B83\u5C31\u662F\u5728\u4E2D\u95F4\u4EF6\u7C7B\u4E2D\u628A<code>open_spider</code>\u548C<code>close_spider</code>(\u5982\u6709)\u653E\u5230methods\u91CC\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    <span class="token keyword">def</span> <span class="token function">_add_middleware</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> mw<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>mw<span class="token punctuation">,</span> <span class="token string">&#39;open_spider&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>methods<span class="token punctuation">[</span><span class="token string">&#39;open_spider&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>mw<span class="token punctuation">.</span>open_spider<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>mw<span class="token punctuation">,</span> <span class="token string">&#39;close_spider&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>methods<span class="token punctuation">[</span><span class="token string">&#39;close_spider&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>appendleft<span class="token punctuation">(</span>mw<span class="token punctuation">.</span>close_spider<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u7684\u4E2D\u95F4\u4EF6\u53EA\u9700\u8981\u57FA\u4E8E\u7236\u7C7B\uFF0C\u901A\u8FC7\u91CD\u5199\u90E8\u5206\u65B9\u6CD5\uFF0C\u5373\u53EF\u8FBE\u5230\u5176\u76EE\u7684\u3002</p><h3 id="downloadermiddlewaremanager" tabindex="-1"><a class="header-anchor" href="#downloadermiddlewaremanager" aria-hidden="true">#</a> DownloaderMiddlewareManager</h3><p>\u6709\u4E86\u4E0A\u9762\u7684\u7ECF\u9A8C\uFF0C\u518D\u770B_DownloaderMiddlewareManager_\u5C31\u6BD4\u8F83\u6E05\u6670\u4E86\u3002\u5B83\u4E3B\u8981\u5C31\u662F\u91CD\u5199\u4E86\u7236\u7C7B\u7684<code>_get_mwlist_from_settings</code>\uFF08\u4ECE\u914D\u7F6E\u9879\u4E2D\u83B7\u53D6\u4E2D\u95F4\u4EF6\u8DEF\u5F84\uFF09\uFF0C\u7531\u4E8E\u5B83\u662F\u4E0B\u8F7D\u4E2D\u95F4\u4EF6\uFF0C\u6240\u4EE5\u5B83\u53EA\u9700\u8981\u62FF\u5230<strong>DOWNLOADER_MIDDLEWARES</strong>\u4E2D\u914D\u7F6E\u7684\u4E2D\u95F4\u4EF6\u8DEF\u5F84\u3002 \u7EE7\u7EED\u91CD\u5199\u7236\u7C7B\u7684<code>_add_middleware</code>\uFF0C\u62FF\u5230\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u4E2D<code>process_request</code>\u3001<code>process_response</code>\u3001<code>process_exception</code>\uFF08\u5982\u6709\uFF09\u52A0\u5165\u5230methods\u4E2D\u3002\u901A\u8FC7<code>download</code>\u65B9\u6CD5\u7684Deferred\u673A\u5236\u89E6\u53D1methods\u4E2D\u9700\u8981\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u5305\u62EC\u65B9\u6CD5\u56DE\u8C03\uFF0C\u65B9\u6CD5\u5F02\u5E38\u89E6\u53D1\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    <span class="token keyword">def</span> <span class="token function">download</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> download_func<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@defer<span class="token punctuation">.</span>inlineCallbacks</span>
        <span class="token keyword">def</span> <span class="token function">process_request</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
            \u2026\u2026
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">yield</span> download_func<span class="token punctuation">(</span>request<span class="token operator">=</span>request<span class="token punctuation">,</span> spider<span class="token operator">=</span>spider<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token decorator annotation punctuation">@defer<span class="token punctuation">.</span>inlineCallbacks</span>
        <span class="token keyword">def</span> <span class="token function">process_response</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">:</span>
            \u2026\u2026
            <span class="token keyword">return</span> response

        <span class="token decorator annotation punctuation">@defer<span class="token punctuation">.</span>inlineCallbacks</span>
        <span class="token keyword">def</span> <span class="token function">process_exception</span><span class="token punctuation">(</span>failure<span class="token punctuation">)</span><span class="token punctuation">:</span>
            \u2026\u2026
            <span class="token keyword">return</span> failure

        deferred <span class="token operator">=</span> mustbe_deferred<span class="token punctuation">(</span>process_request<span class="token punctuation">,</span> request<span class="token punctuation">)</span>
        deferred<span class="token punctuation">.</span>addErrback<span class="token punctuation">(</span>process_exception<span class="token punctuation">)</span>
        deferred<span class="token punctuation">.</span>addCallback<span class="token punctuation">(</span>process_response<span class="token punctuation">)</span>
        <span class="token keyword">return</span> deferred
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3<code>download</code>\u53C8\u662F\u901A\u8FC7\u8C01\u6765\u6267\u884C\u7684\u5462\uFF1F\u719F\u6089\u7684\u670B\u53CB\u90FD\u77E5\u9053scrapy\u7684\u4E00\u5927\u7EC4\u4EF6\u53EB\u4E0B\u8F7D\u5668<strong>Downloader</strong>\uFF0C\u5728\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6default_settings\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>DOWNLOADER <span class="token operator">=</span> <span class="token string">&#39;scrapy.core.downloader.Downloader&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8D70\u8FDB\u8FD9\u4E2A\u6267\u884C\u6587\u4EF6\u4E2D\u89C2\u5BDF\uFF0C\u8FD9\u4E2A_Downloader_\u7C7B\u5728\u521D\u59CB\u5316\u65F6\u5019\u540C\u6837\u58F0\u660E\u4E86DownloaderMiddlewareManager\uFF0C\u5E76\u6709\u4E00\u4E2A\u53EB<code>fetch</code>\u7684\u65B9\u6CD5\uFF0C\u8C03\u7528\u4E86middleware.download()</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Downloader</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> crawler<span class="token punctuation">)</span><span class="token punctuation">:</span>
        \u2026\u2026
        self<span class="token punctuation">.</span>middleware <span class="token operator">=</span> DownloaderMiddlewareManager<span class="token punctuation">.</span>from_crawler<span class="token punctuation">(</span>crawler<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">fetch</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">_deactivate</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># \u91CA\u653E\u8BF7\u6C42</span>
            self<span class="token punctuation">.</span>active<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
            <span class="token keyword">return</span> response
        <span class="token comment"># \u8FD9\u91CC\u662F\u4E3A\u4E86\u8BB0\u5F55\u540C\u65F6\u5E76\u53D1\u8BF7\u6C42\u6570\u91CF\u7684</span>
        self<span class="token punctuation">.</span>active<span class="token punctuation">.</span>add<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
        dfd <span class="token operator">=</span> self<span class="token punctuation">.</span>middleware<span class="token punctuation">.</span>download<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_enqueue_request<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span>
        <span class="token keyword">return</span> dfd<span class="token punctuation">.</span>addBoth<span class="token punctuation">(</span>_deactivate<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spidermiddlewaremanager" tabindex="-1"><a class="header-anchor" href="#spidermiddlewaremanager" aria-hidden="true">#</a> SpiderMiddlewareManager</h3><p>\u518D\u770B<em>SpiderMiddlewareManager</em>\u5C31\u66F4\u5BB9\u6613\u4E86\uFF0C<code>_get_mwlist_from_settings</code>\u4ECE\u914D\u7F6E\u9879\u4E2D\u62FF\u5230\u5C5E\u6027\u4E3A<code>SPIDER_MIDDLEWARES</code>\u7684\u4E2D\u95F4\u4EF6\u8DEF\u5F84\u3002<code>_add_middleware</code>\u63D0\u53D6\u81EA\u5B9A\u4E49Spider\u4E2D\u95F4\u4EF6\u4E2D\u7684<code>process_spider_input</code>\u3001<code>process_start_requests</code>\u3001<code>process_spider_output</code>\u3001<code>process_spider_exception</code>\uFF08\u5982\u6709\uFF09\u52A0\u5165methods\u4E2D\u3002\u5916\u90E8\u5F15\u64CE(<em>ExecutionEngine</em>)\u901A\u8FC7\u8C03\u7528<code>scrape_response</code>\u6765\u6267\u884C\u5DE5\u4F5C\u6D41\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">SpiderMiddlewareManager</span><span class="token punctuation">(</span>MiddlewareManager<span class="token punctuation">)</span><span class="token punctuation">:</span>

    component_name <span class="token operator">=</span> <span class="token string">&#39;spider middleware&#39;</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">_get_mwlist_from_settings</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> settings<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> build_component_list<span class="token punctuation">(</span>settings<span class="token punctuation">.</span>getwithbase<span class="token punctuation">(</span><span class="token string">&#39;SPIDER_MIDDLEWARES&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_add_middleware</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> mw<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_add_middleware<span class="token punctuation">(</span>mw<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>mw<span class="token punctuation">,</span> <span class="token string">&#39;process_spider_input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>methods<span class="token punctuation">[</span><span class="token string">&#39;process_spider_input&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>mw<span class="token punctuation">.</span>process_spider_input<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>mw<span class="token punctuation">,</span> <span class="token string">&#39;process_start_requests&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>methods<span class="token punctuation">[</span><span class="token string">&#39;process_start_requests&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>appendleft<span class="token punctuation">(</span>mw<span class="token punctuation">.</span>process_start_requests<span class="token punctuation">)</span>
        process_spider_output <span class="token operator">=</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>mw<span class="token punctuation">,</span> <span class="token string">&#39;process_spider_output&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>methods<span class="token punctuation">[</span><span class="token string">&#39;process_spider_output&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>appendleft<span class="token punctuation">(</span>process_spider_output<span class="token punctuation">)</span>
        process_spider_exception <span class="token operator">=</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>mw<span class="token punctuation">,</span> <span class="token string">&#39;process_spider_exception&#39;</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>methods<span class="token punctuation">[</span><span class="token string">&#39;process_spider_exception&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>appendleft<span class="token punctuation">(</span>process_spider_exception<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">scrape_response</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> scrape_func<span class="token punctuation">,</span> response<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token keyword">def</span> <span class="token function">process_spider_input</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">:</span>
            \u2026\u2026
            <span class="token keyword">return</span> scrape_func<span class="token punctuation">(</span>response<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span>

        <span class="token keyword">def</span> <span class="token function">process_spider_exception</span><span class="token punctuation">(</span>_failure<span class="token punctuation">,</span> start_index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            \u2026\u2026
            <span class="token keyword">return</span> _failure

        <span class="token keyword">def</span> <span class="token function">process_spider_output</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> start_index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            \u2026\u2026
            <span class="token keyword">return</span> MutableChain<span class="token punctuation">(</span>result<span class="token punctuation">,</span> recovered<span class="token punctuation">)</span>

        <span class="token keyword">def</span> <span class="token function">process_callback_output</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">:</span>
            \u2026\u2026
            <span class="token keyword">return</span> MutableChain<span class="token punctuation">(</span>process_spider_output<span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span> recovered<span class="token punctuation">)</span>

        dfd <span class="token operator">=</span> mustbe_deferred<span class="token punctuation">(</span>process_spider_input<span class="token punctuation">,</span> response<span class="token punctuation">)</span>
        dfd<span class="token punctuation">.</span>addCallbacks<span class="token punctuation">(</span>callback<span class="token operator">=</span>process_callback_output<span class="token punctuation">,</span> errback<span class="token operator">=</span>process_spider_exception<span class="token punctuation">)</span>
        <span class="token keyword">return</span> dfd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extensionmanager" tabindex="-1"><a class="header-anchor" href="#extensionmanager" aria-hidden="true">#</a> ExtensionManager</h3><p>\u6269\u5C55\uFF0C\u5B83\u5176\u5B9E\u4E5F\u662F\u4E2A\u4E2D\u95F4\u4EF6\u3002\u6269\u5C55\u7684\u5E94\u7528\u573A\u666F\u4E00\u822C\u90FD\u662F\u5728\u722C\u866B\u542F\u52A8\u548C\u5173\u95ED\u7684\u65F6\u5019\u7ED1\u5B9A\u4FE1\u53F7\u91CF\uFF0C\u89E6\u53D1\u5BF9\u5E94\u7684\u4E8B\u4EF6\u3002 \u5B83\u7684\u7C7B\u5B9E\u73B0\u53CA\u5176\u7B80\u5355\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ExtensionManager</span><span class="token punctuation">(</span>MiddlewareManager<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">_get_mwlist_from_settings</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> settings<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> build_component_list<span class="token punctuation">(</span>settings<span class="token punctuation">.</span>getwithbase<span class="token punctuation">(</span><span class="token string">&#39;EXTENSIONS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EC5\u4EC5\u5C31\u662F\u91CD\u5199\u6269\u5C55\u4E2D\u95F4\u4EF6\u83B7\u53D6\u65B9\u5F0F\u3002 \u5C3D\u7BA1\u8FD9\u6837\uFF0C\u4ED6\u4E00\u6837\u62E5\u6709\u4E86\u7236\u7C7B\u81EA\u5E26\u7684<code>open_spider</code>\u548C<code>close_spider</code>\u3002\u6BD4\u5982\u4F60\u53EF\u4EE5\u5728\u81EA\u5B9A\u4E49\u6269\u5C55\u4E2D\uFF0C\u4F7F\u7528<code>open_spider</code>\u6765open\u4E00\u4E2A\u8D44\u6E90\uFF0C\u5728<code>close_spider</code>\u7684\u65F6\u5019\u9500\u6BC1\u3002</p><h3 id="itempipelinemanager" tabindex="-1"><a class="header-anchor" href="#itempipelinemanager" aria-hidden="true">#</a> ItemPipelineManager</h3><p>\u6570\u636E\u7BA1\u9053\uFF0C\u5B83\u5176\u5B9E\u4E5F\u662F\u4E2A\u4E2D\u95F4\u4EF6\uFF01\u5B83\u5728\u91CD\u5199<code>_add_middleware</code>\u7684\u65F6\u5019\u5148\u8FD0\u884C\u4E86\u7236\u7C7B\u7684<code>_add_middleware</code>\uFF08\u4E5F\u5C31\u662F\u589E\u52A0\u4E86<code>open_spider</code>\u548C<code>close_spider</code>\u65B9\u6CD5\uFF09\uFF0C\u518D\u589E\u52A0\u4E86<code>process_item</code>\u65B9\u6CD5\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ItemPipelineManager</span><span class="token punctuation">(</span>MiddlewareManager<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">_get_mwlist_from_settings</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> settings<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> build_component_list<span class="token punctuation">(</span>settings<span class="token punctuation">.</span>getwithbase<span class="token punctuation">(</span><span class="token string">&#39;ITEM_PIPELINES&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_add_middleware</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> pipe<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>ItemPipelineManager<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>_add_middleware<span class="token punctuation">(</span>pipe<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>pipe<span class="token punctuation">,</span> <span class="token string">&#39;process_item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>methods<span class="token punctuation">[</span><span class="token string">&#39;process_item&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>deferred_f_from_coro_f<span class="token punctuation">(</span>pipe<span class="token punctuation">.</span>process_item<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u5F80\u5F80\u6211\u4EEC\u5728\u81EA\u5DF1\u5B9A\u4E49ItemPipeline\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u5B9E\u73B0\u65B9\u6CD5<code>process_item</code>\u6765\u62FF\u5230\u6211\u4EEC\u6293\u53D6\u7684\u6570\u636E\u3002</p><h3 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h3><p><img src="https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20220607220443.png" alt="" loading="lazy"></p>`,34),o=[t];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","scrapy-middleware.html.vue"]]);export{r as default};