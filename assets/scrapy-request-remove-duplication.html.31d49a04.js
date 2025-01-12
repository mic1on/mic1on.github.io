import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.285d9b98.js";const t={},p=e(`<h3 id="\u8BF7\u6C42\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u53BB\u91CD" aria-hidden="true">#</a> \u8BF7\u6C42\u53BB\u91CD</h3><p>\u8FD9\u662F\u722C\u866B\u5C97\u4E00\u9053\u9AD8\u9891\u51FA\u73B0\u7684\u9762\u8BD5\u9898\uFF1A</p><p>Q\uFF1A\u5BF9\u4E8E\u91CD\u590D\u7684\u8BF7\u6C42\uFF0Cscrapy\u662F\u5982\u4F55\u53BB\u91CD\u7684\uFF1F\u53BB\u91CD\u539F\u7406\u662F\u4EC0\u4E48\uFF1F\u8BF7\u6C42\u662F\u5982\u4F55\u8BA1\u7B97\u552F\u4E00\u6027\u7684\uFF1F</p><p>\u5E26\u7740\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8FDB\u5165\u4ECA\u5929\u7684\u4E3B\u9898\u3002</p><h3 id="dupefilter-class" tabindex="-1"><a class="header-anchor" href="#dupefilter-class" aria-hidden="true">#</a> DUPEFILTER_CLASS</h3><p>\u5728scrapy\u9879\u76EE\u914D\u7F6E\u4E2D\uFF0C<code>DUPEFILTER_CLASS</code>\u662F\u6846\u67B6\u5BF9\u8BF7\u6C42\u53BB\u91CD\u89C4\u5219\u7684\u8BBE\u7F6E\u9879\u3002\u9ED8\u8BA4\u7684\u7C7B\u8DEF\u5F84\uFF1A<code>scrapy.dupefilters.RFPDupeFilter</code>\u3002</p><p>\u8FDB\u5165\u5230\u6587\u4EF6\u4E2D\uFF0C\u89C2\u5BDF\u5230\u7C7B<em>RFPDupeFilter</em>\u7EE7\u627F\u81EA<em>BaseDupeFilter</em>\uFF0C\u800C<em>BaseDupeFilter</em>\u4F3C\u4E4E\u4EC0\u4E48\u90FD\u6CA1\u505A\uFF0C\u53EA\u662F\u5B9A\u4E49\u4E86\u4E00\u4E9B\u65B9\u6CD5\u3002\u6240\u4EE5\uFF0C\u771F\u6B63\u7684\u53BB\u91CD\u6838\u5FC3\u4EE3\u7801\u90FD\u5728<em>RFPDupeFilter</em>\u7C7B\u4E2D\u3002\u9010\u884C\u5206\u6790\u4E0B\u5176\u539F\u7406\u3002</p><h3 id="rfpdupefilter" tabindex="-1"><a class="header-anchor" href="#rfpdupefilter" aria-hidden="true">#</a> RFPDupeFilter</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">RFPDupeFilter</span><span class="token punctuation">(</span>BaseDupeFilter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Request Fingerprint duplicates filter&quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">file</span> <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token comment"># \u7528python\u5185\u7F6Eset()\u4F5C\u4E3A\u8BF7\u6C42\u7684\u6307\u7EB9</span>
        <span class="token comment"># set\u7684\u7279\u6027\uFF1A\u65E0\u5E8F\u4E0D\u91CD\u590D\u5143\u7D20\u96C6</span>
        self<span class="token punctuation">.</span>fingerprints <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>logdupes <span class="token operator">=</span> <span class="token boolean">True</span>
        self<span class="token punctuation">.</span>debug <span class="token operator">=</span> debug
        self<span class="token punctuation">.</span>logger <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
        <span class="token comment"># \u672C\u5730\u6301\u4E45\u5316\u8BF7\u6C42\u6307\u7EB9</span>
        <span class="token keyword">if</span> path<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&#39;requests.seen&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;a+&#39;</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>fingerprints<span class="token punctuation">.</span>update<span class="token punctuation">(</span>x<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> self<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">from_settings</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> settings<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u914D\u7F6E\u4E2D\u5F00\u542FDEBUG\uFF0C\u5C31\u4F1A\u6301\u4E45\u5316\u6587\u4EF6</span>
        debug <span class="token operator">=</span> settings<span class="token punctuation">.</span>getbool<span class="token punctuation">(</span><span class="token string">&#39;DUPEFILTER_DEBUG&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">(</span>job_dir<span class="token punctuation">(</span>settings<span class="token punctuation">)</span><span class="token punctuation">,</span> debug<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">request_seen</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \uFF01\uFF01\uFF01\u6838\u5FC3\uFF0C\u7528\u4E8E\u68C0\u6D4B\u6307\u7EB9\u662F\u5426\u5B58\u5728\u3002</span>
        <span class="token comment"># \u4F7F\u7528request_fingerprint\u6765\u83B7\u53D6\u8BF7\u6C42\u7684\u6307\u7EB9</span>
        fp <span class="token operator">=</span> self<span class="token punctuation">.</span>request_fingerprint<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
        <span class="token comment"># \u6307\u7EB9\u5728\u96C6\u5408\u4E2D\uFF0C\u8FD4\u56DETrue</span>
        <span class="token keyword">if</span> fp <span class="token keyword">in</span> self<span class="token punctuation">.</span>fingerprints<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token comment"># \u4E0D\u5728\u96C6\u5408\u4E2D\uFF0C\u8FFD\u52A0\u5230\u96C6\u5408\u91CC</span>
        self<span class="token punctuation">.</span>fingerprints<span class="token punctuation">.</span>add<span class="token punctuation">(</span>fp<span class="token punctuation">)</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>fp <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">request_fingerprint</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u8C03\u7528scrapy\u7684request_fingerprint\u6765\u8FDB\u884C\u6307\u7EB9\u8BA1\u7B97</span>
        <span class="token keyword">return</span> request_fingerprint<span class="token punctuation">(</span>request<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">close</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> reason<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u8D44\u6E90\u9500\u6BC1</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u65E5\u5FD7\u7684\u8F93\u51FA\u548C\u8BB0\u5F55</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>debug<span class="token punctuation">:</span>
            msg <span class="token operator">=</span> <span class="token string">&quot;Filtered duplicate request: %(request)s (referer: %(referer)s)&quot;</span>
            args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">:</span> request<span class="token punctuation">,</span> <span class="token string">&#39;referer&#39;</span><span class="token punctuation">:</span> referer_str<span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">}</span>
            self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span>msg<span class="token punctuation">,</span> args<span class="token punctuation">,</span> extra<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;spider&#39;</span><span class="token punctuation">:</span> spider<span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>logdupes<span class="token punctuation">:</span>
            msg <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;Filtered duplicate request: %(request)s&quot;</span>
                   <span class="token string">&quot; - no more duplicates will be shown&quot;</span>
                   <span class="token string">&quot; (see DUPEFILTER_DEBUG to show all duplicates)&quot;</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">:</span> request<span class="token punctuation">}</span><span class="token punctuation">,</span> extra<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;spider&#39;</span><span class="token punctuation">:</span> spider<span class="token punctuation">}</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>logdupes <span class="token operator">=</span> <span class="token boolean">False</span>

        spider<span class="token punctuation">.</span>crawler<span class="token punctuation">.</span>stats<span class="token punctuation">.</span>inc_value<span class="token punctuation">(</span><span class="token string">&#39;dupefilter/filtered&#39;</span><span class="token punctuation">,</span> spider<span class="token operator">=</span>spider<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u975E\u5E38\u7B80\u5355\uFF0C\u7B80\u5355\u5230\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u81EA\u5DF1\u8F7B\u677E\u5199\u4E00\u4E2A\u3002\u5176\u4E2D<code>request_seen</code>\u65B9\u6CD5\u7528\u4E8E\u68C0\u6D4B\u8BF7\u6C42\u662F\u5426\u91CD\u590D\uFF0C\u8FD4\u56DETrue\u5219\u91CD\u590D\uFF0C\u5426\u5219\u901A\u8FC7\u3002\u5176\u4E2D\u6838\u5FC3\u7684\u662F\u8C03\u7528\u4E86<code>request_fingerprint</code>\u6765\u8BA1\u7B97\u6307\u7EB9\u3002\u8FDB\u53BB\u770B\u770B\u3002</p><h3 id="request-fingerprint" tabindex="-1"><a class="header-anchor" href="#request-fingerprint" aria-hidden="true">#</a> request_fingerprint</h3><blockquote><p>The request fingerprint is a hash that uniquely identifies the resource the request points to \u8BF7\u6C42\u6307\u7EB9\u662F\u552F\u4E00\u6807\u8BC6\u8BF7\u6C42\u6307\u5411\u7684\u8D44\u6E90\u7684\u54C8\u5E0C\u503C</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">request_fingerprint</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> include_headers<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> keep_fragments<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u662F\u5426\u8BA1\u7B97headers</span>
    <span class="token keyword">if</span> include_headers<span class="token punctuation">:</span>
        include_headers <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>to_bytes<span class="token punctuation">(</span>h<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> h <span class="token keyword">in</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>include_headers<span class="token punctuation">)</span><span class="token punctuation">)</span>
    cache <span class="token operator">=</span> _fingerprint_cache<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    cache_key <span class="token operator">=</span> <span class="token punctuation">(</span>include_headers<span class="token punctuation">,</span> keep_fragments<span class="token punctuation">)</span>
    <span class="token keyword">if</span> cache_key <span class="token keyword">not</span> <span class="token keyword">in</span> cache<span class="token punctuation">:</span>
        <span class="token comment"># \u5F00\u59CB\u8BA1\u7B97\uFF0C\u52A0\u5BC6\u7B97\u6CD5sha1</span>
        fp <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>sha1<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># \u5C06\u8BF7\u6C42\u65B9\u5F0F\u548C\u8BF7\u6C42url\uFF0C\u8BF7\u6C42\u7684body\u52A0\u5165\u8BA1\u7B97\uFF0C</span>
        <span class="token comment"># \u6B64\u5904\u7684url\u5982\u679C\u6307\u5411\u540C\u4E00\u4E2A\u8D44\u6E90\uFF0C\u540C\u6837\u8BA4\u4E3A\u4E00\u6837\uFF0C\u6BD4\u5982\uFF1A</span>
             <span class="token comment"># http://www.example.com/query?id=111&amp;cat=222</span>
            <span class="token comment"># http://www.example.com/query?cat=222&amp;id=111</span>
        <span class="token comment"># \u8FD9\u4E24\u4E2Aurl\u6307\u5411\u540C\u4E00\u76EE\u6807\uFF0C\u6211\u4EEC\u4E5F\u8BA4\u4E3A\u662F\u91CD\u590D\u7684request.url</span>
        fp<span class="token punctuation">.</span>update<span class="token punctuation">(</span>to_bytes<span class="token punctuation">(</span>request<span class="token punctuation">.</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span>
        fp<span class="token punctuation">.</span>update<span class="token punctuation">(</span>to_bytes<span class="token punctuation">(</span>canonicalize_url<span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> keep_fragments<span class="token operator">=</span>keep_fragments<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        fp<span class="token punctuation">.</span>update<span class="token punctuation">(</span>request<span class="token punctuation">.</span>body <span class="token keyword">or</span> <span class="token string">b&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># headers\u52A0\u5165\u8BA1\u7B97</span>
        <span class="token keyword">if</span> include_headers<span class="token punctuation">:</span>
            <span class="token keyword">for</span> hdr <span class="token keyword">in</span> include_headers<span class="token punctuation">:</span>
                <span class="token keyword">if</span> hdr <span class="token keyword">in</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">:</span>
                    fp<span class="token punctuation">.</span>update<span class="token punctuation">(</span>hdr<span class="token punctuation">)</span>
                    <span class="token keyword">for</span> v <span class="token keyword">in</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>getlist<span class="token punctuation">(</span>hdr<span class="token punctuation">)</span><span class="token punctuation">:</span>
                        fp<span class="token punctuation">.</span>update<span class="token punctuation">(</span>v<span class="token punctuation">)</span>
        cache<span class="token punctuation">[</span>cache_key<span class="token punctuation">]</span> <span class="token operator">=</span> fp<span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>cache_key<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8C03\u5EA6\u5668\u7684\u6267\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8C03\u5EA6\u5668\u7684\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a> \u8C03\u5EA6\u5668\u7684\u6267\u884C\u6D41\u7A0B</h3><p>\u5728scrapy\u7684\u8C03\u5EA6\u5668\u4EE3\u7801\u4E2D<em>Scheduler</em>\uFF0C\u901A\u8FC7\u7C7B\u65B9\u6CD5<code>from_crawler</code>\u8BFB\u53D6\u914D\u7F6E\u9879\u4E2D<code>DUPEFILTER_CLASS</code>\u7684\u7C7B\u8DEF\u5F84\uFF0C\u4F7F\u7528<code>load_object</code>\u52A0\u8F7D\u5E76\u901A\u8FC7<code>create_instance</code>\u5B9E\u4F8B\u5316\u5BF9\u8C61\u3002\u8D4B\u7ED9\u5C5E\u6027<code>self.df</code></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Scheduler</span><span class="token punctuation">:</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> dupefilter<span class="token punctuation">,</span> jobdir<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> dqclass<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> mqclass<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                 logunser<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> stats<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> pqclass<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> crawler<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>df <span class="token operator">=</span> dupefilter
        \u2026\u2026

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">from_crawler</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> crawler<span class="token punctuation">)</span><span class="token punctuation">:</span>
        settings <span class="token operator">=</span> crawler<span class="token punctuation">.</span>settings
        dupefilter_cls <span class="token operator">=</span> load_object<span class="token punctuation">(</span>settings<span class="token punctuation">[</span><span class="token string">&#39;DUPEFILTER_CLASS&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        dupefilter <span class="token operator">=</span> create_instance<span class="token punctuation">(</span>dupefilter_cls<span class="token punctuation">,</span> settings<span class="token punctuation">,</span> crawler<span class="token punctuation">)</span>
        \u2026\u2026
        <span class="token keyword">return</span> cls<span class="token punctuation">(</span>dupefilter<span class="token punctuation">,</span> jobdir<span class="token operator">=</span>job_dir<span class="token punctuation">(</span>settings<span class="token punctuation">)</span><span class="token punctuation">,</span> logunser<span class="token operator">=</span>logunser<span class="token punctuation">,</span>
                   stats<span class="token operator">=</span>crawler<span class="token punctuation">.</span>stats<span class="token punctuation">,</span> pqclass<span class="token operator">=</span>pqclass<span class="token punctuation">,</span> dqclass<span class="token operator">=</span>dqclass<span class="token punctuation">,</span>
                   mqclass<span class="token operator">=</span>mqclass<span class="token punctuation">,</span> crawler<span class="token operator">=</span>crawler<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">open</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
        \u2026\u2026
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>df<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">close</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> reason<span class="token punctuation">)</span><span class="token punctuation">:</span>
        \u2026\u2026
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>df<span class="token punctuation">.</span>close<span class="token punctuation">(</span>reason<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">enqueue_request</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> request<span class="token punctuation">.</span>dont_filter <span class="token keyword">and</span> self<span class="token punctuation">.</span>df<span class="token punctuation">.</span>request_seen<span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>df<span class="token punctuation">.</span>log<span class="token punctuation">(</span>request<span class="token punctuation">,</span> self<span class="token punctuation">.</span>spider<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        \u2026\u2026
        <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u5EA6\u5668\u88AB\u6253\u5F00open\u3001\u5173\u95EDclose\u3001\u8BF7\u6C42\u5165\u5217enqueue_request\u7684\u65F6\u5019 \u5206\u522B\u89E6\u53D1\u8FC7\u6EE4\u5668\u7684\u6253\u5F00open\u3001\u5173\u95EDclose\u3001\u8BA1\u7B97\u6307\u7EB9request_seen\u3002</p><p>\u5F53\u6784\u9020\u8BF7\u6C42\u65F6\uFF0C\u53C2\u6570<code>dont_filter</code>\u4E3AFalse\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u8FDB\u5165\u53BB\u91CD\u8BA1\u7B97\u3002</p><p>\u65B0\u624B\u7ECF\u5E38\u72AF\u7684\u9519\u3002<code>dont_filter</code>=True\u8BA4\u4E3A\u662F\u53BB\u91CD\u3002\u5B9E\u9645\u4E0A\u56FD\u5916\u4EBA\u601D\u7EF4\u548C\u6211\u4EEC\u76F4\u63A5\u8868\u8FBE\u4E0D\u540C\u3002\u53EF\u80FD\u6211\u4EEC\u505A\u53C2\u6570\u5C31<code>filter</code>=True\u662F\u8FC7\u6EE4\uFF0C<code>filter</code>=False\u5C31\u4E0D\u8FC7\u6EE4\u3002\u52A0\u4E86dont\uFF0Cdont_filter=True \u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F\uFF1A\u4E0D\u8FC7\u6EE4\uFF1F\u662F\u7684\u3002</p><h3 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h3><p>\u73B0\u5728\u518D\u6765\u56DE\u7B54\u9762\u8BD5\u5B98\u7684\u95EE\u9898\uFF1A</p><p>Q\uFF1A\u5BF9\u4E8E\u91CD\u590D\u7684\u8BF7\u6C42\uFF0Cscrapy\u662F\u5982\u4F55\u53BB\u91CD\u7684\uFF1F\u53BB\u91CD\u539F\u7406\u662F\u4EC0\u4E48\uFF1F\u8BF7\u6C42\u662F\u5982\u4F55\u8BA1\u7B97\u552F\u4E00\u6027\u7684\uFF1F</p><p>A\uFF1Ascrapy\u662F\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u4E2DDUPEFILTER_CLASS\u5C5E\u6027\u6765\u9009\u62E9\u53BB\u91CD\u7684\u65B9\u6CD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u662F\u8C03\u7528scrapy.dupefilters.RFPDupeFilter\u3002 scrapy\u8BF7\u6C42\u662F\u901A\u8FC7Python\u5185\u7F6Eset\u4E0D\u91CD\u590D\u96C6\u5408\u7684\u7279\u6027\u6765\u505A\u672C\u5730\u53BB\u91CD\u7684\u3002 \u5176\u52A0\u5BC6\u7B97\u6CD5\u662Fsha1\u3002\u9ED8\u8BA4\u60C5\u51B5\u9488\u5BF9\u8BF7\u6C42\u7684\u65B9\u5F0F\u3001url\u3001body\u6765\u505A\u552F\u4E00\u6027\u8BA1\u7B97\u3002</p><p>\u6838\u5FC3\u4E24\u70B9\uFF1Aset \u6307\u7EB9\u53BB\u91CD\uFF0Csha1\u52A0\u5BC6\u8BA1\u7B97\u6307\u7EB9\u3002</p>`,24),o=[p];function c(l,i){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","scrapy-request-remove-duplication.html.vue"]]);export{k as default};
