import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.285d9b98.js";const t={},p=e(`<h2 id="datetrigger" tabindex="-1"><a class="header-anchor" href="#datetrigger" aria-hidden="true">#</a> DateTrigger</h2><p>\u628A<code>DateTrigger</code>\u653E\u672C\u7BC7\u6700\u524D\u9762\u5C06\u662F\u56E0\u4E3A\u5B83\u76F8\u5BF9\u6765\u8BF4\u6700\u4E3A\u7B80\u5355\u3002\u4E00\u53E5\u8BDD\u5C31\u662F\u6307\u5B9A\u65F6\u95F4\u7684\u4E00\u6B21\u89E6\u53D1\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> run_date<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> timezone<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    timezone <span class="token operator">=</span> astimezone<span class="token punctuation">(</span>timezone<span class="token punctuation">)</span> <span class="token keyword">or</span> get_localzone<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u65F6\u533A</span>
    <span class="token keyword">if</span> run_date <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5C06\u5B57\u7B26\u4E32\u65F6\u95F4\u6216datetime\u65F6\u95F4\u8F6C\u4E3A\u65F6\u533A\u65F6\u95F4</span>
        self<span class="token punctuation">.</span>run_date <span class="token operator">=</span> convert_to_datetime<span class="token punctuation">(</span>run_date<span class="token punctuation">,</span> timezone<span class="token punctuation">,</span> <span class="token string">&#39;run_date&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5982\u679C\u672A\u8BBE\u7F6Erun_date\uFF0C\u5219\u4F7F\u7528\u5F53\u524D\u65F6\u95F4</span>
        self<span class="token punctuation">.</span>run_date <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span>timezone<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_next_fire_time</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> previous_fire_time<span class="token punctuation">,</span> now<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u91CD\u5199get_next_fire_time\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u9884\u8BBE\u7684\u8FD0\u884C\u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F\u4E0B\u4E00\u6B21\u8FD0\u884C\u65F6\u95F4\u3002</span>
    <span class="token comment"># \u5982\u679C\u4E0A\u4E00\u6B21\u5DF2\u7ECF\u8FD0\u884C\u4E86\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DENone\u7ED3\u675FJob</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>run_date <span class="token keyword">if</span> previous_fire_time <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">else</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u89E6\u53D1\u5668\u5B9E\u4F8B\u5316\u65F6\u4EC0\u4E48\u90FD\u4E0D\u4F20\uFF0C\u90A3\u5C31\u662F\u9ED8\u8BA4\u5F53\u524D\u65F6\u95F4\u53BB\u6267\u884C\u3002</p><h2 id="intervaltrigger" tabindex="-1"><a class="header-anchor" href="#intervaltrigger" aria-hidden="true">#</a> IntervalTrigger</h2><p>\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u4E0A\u89E6\u53D1\uFF0C\u5982\u679C\u6307\u5B9A\uFF0C\u5219\u4ECE <code>start_date</code> \u5F00\u59CB\uFF0C\u5426\u5219\u4ECE <code>datetime.now()</code> + \u65F6\u95F4\u95F4\u9694\u5F00\u59CB\u3002</p><p>\u540C\u6837\u5730\uFF0C<code>IntervalTrigger</code>\u7EE7\u627F\u81EA<code>BaseTrigger</code>\u3002\u5728\u5B83\u521D\u59CB\u5316\u7684\u65F6\u5019\u5C31\u7EA6\u5B9A\u4E86\u65F6\u95F4\u95F4\u9694\uFF0C\u4EE5\u53CA\u89E6\u53D1\u65F6\u95F4\u7684\u8D77\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> weeks<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> days<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> hours<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> minutes<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> seconds<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> start_date<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                end_date<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> timezone<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> jitter<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u521B\u5EFA\u65F6\u95F4\u95F4\u9694</span>
    self<span class="token punctuation">.</span>interval <span class="token operator">=</span> timedelta<span class="token punctuation">(</span>weeks<span class="token operator">=</span>weeks<span class="token punctuation">,</span> days<span class="token operator">=</span>days<span class="token punctuation">,</span> hours<span class="token operator">=</span>hours<span class="token punctuation">,</span> minutes<span class="token operator">=</span>minutes<span class="token punctuation">,</span>
                                seconds<span class="token operator">=</span>seconds<span class="token punctuation">)</span>
    <span class="token comment"># \u5C06\u65F6\u95F4\u95F4\u9694\u8F6C\u5316\u4E3A\u79D2</span>
    self<span class="token punctuation">.</span>interval_length <span class="token operator">=</span> timedelta_seconds<span class="token punctuation">(</span>self<span class="token punctuation">.</span>interval<span class="token punctuation">)</span>
    <span class="token keyword">if</span> self<span class="token punctuation">.</span>interval_length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5982\u679C\u65F6\u95F4\u95F4\u9694\u4E3A0\uFF0C\u5219\u9ED8\u8BA4\u4E3A1\u79D2</span>
        self<span class="token punctuation">.</span>interval <span class="token operator">=</span> timedelta<span class="token punctuation">(</span>seconds<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>interval_length <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token comment"># \u53D6\u5F97\u65F6\u533A</span>
    <span class="token keyword">if</span> timezone<span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>timezone <span class="token operator">=</span> astimezone<span class="token punctuation">(</span>timezone<span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>start_date<span class="token punctuation">,</span> datetime<span class="token punctuation">)</span> <span class="token keyword">and</span> start_date<span class="token punctuation">.</span>tzinfo<span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>timezone <span class="token operator">=</span> start_date<span class="token punctuation">.</span>tzinfo
    <span class="token keyword">elif</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>end_date<span class="token punctuation">,</span> datetime<span class="token punctuation">)</span> <span class="token keyword">and</span> end_date<span class="token punctuation">.</span>tzinfo<span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>timezone <span class="token operator">=</span> end_date<span class="token punctuation">.</span>tzinfo
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>timezone <span class="token operator">=</span> get_localzone<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># \u5F00\u59CB\u65F6\u95F4 \u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u5F53\u524D\u65F6\u95F4\u52A0\u4E0A\u65F6\u95F4\u95F4\u9694(\u5F53\u6CA1\u6709\u65F6\u95F4\u95F4\u9694\u65F6\uFF0C\u9ED8\u8BA4\u4E3A1\u79D2)</span>
    start_date <span class="token operator">=</span> start_date <span class="token keyword">or</span> <span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span>self<span class="token punctuation">.</span>timezone<span class="token punctuation">)</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>interval<span class="token punctuation">)</span>
    <span class="token comment"># \u5C06\u5F00\u59CB\u65F6\u95F4\u8F6C\u5316\u4E3A\u65F6\u533A\u65F6\u95F4</span>
    self<span class="token punctuation">.</span>start_date <span class="token operator">=</span> convert_to_datetime<span class="token punctuation">(</span>start_date<span class="token punctuation">,</span> self<span class="token punctuation">.</span>timezone<span class="token punctuation">,</span> <span class="token string">&#39;start_date&#39;</span><span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>end_date <span class="token operator">=</span> convert_to_datetime<span class="token punctuation">(</span>end_date<span class="token punctuation">,</span> self<span class="token punctuation">.</span>timezone<span class="token punctuation">,</span> <span class="token string">&#39;end_date&#39;</span><span class="token punctuation">)</span>

    self<span class="token punctuation">.</span>jitter <span class="token operator">=</span> jitter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D<code>timedelta_seconds</code>\u662F\u4E00\u4E2A\u8F85\u52A9\u51FD\u6570\uFF0C\u7528\u4E8E\u5C06\u65F6\u95F4\u95F4\u9694\u8F6C\u5316\u4E3A\u79D2\u3002(\u5077\u8D70\u{1F60B})</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">timedelta_seconds</span><span class="token punctuation">(</span>delta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> delta<span class="token punctuation">.</span>days <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">+</span> delta<span class="token punctuation">.</span>seconds <span class="token operator">+</span> \\
        delta<span class="token punctuation">.</span>microseconds <span class="token operator">/</span> <span class="token number">1000000.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u6700\u6838\u5FC3\u7684\uFF0C\u8FD8\u662F\u9700\u8981\u5B9E\u73B0<code>get_next_fire_time</code>\u65B9\u6CD5\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_next_fire_time</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> previous_fire_time<span class="token punctuation">,</span> now<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5982\u679C\u5DF2\u77E5\u4E0A\u6B21\u6267\u884C\u65F6\u95F4\uFF0C\u5219\u76F4\u63A5\u8BA1\u7B97\u4E0B\u6B21\u6267\u884C\u65F6\u95F4</span>
    <span class="token keyword">if</span> previous_fire_time<span class="token punctuation">:</span>
        <span class="token comment"># \u5373\uFF1A\u4E0A\u6B21\u6267\u884C\u65F6\u95F4 + \u65F6\u95F4\u95F4\u9694</span>
        next_fire_time <span class="token operator">=</span> previous_fire_time <span class="token operator">+</span> self<span class="token punctuation">.</span>interval
    <span class="token comment"># \u5982\u679C\u5F00\u59CB\u65F6\u95F4\u5927\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u5F00\u59CB\u65F6\u95F4</span>
    <span class="token keyword">elif</span> self<span class="token punctuation">.</span>start_date <span class="token operator">&gt;</span> now<span class="token punctuation">:</span>
        next_fire_time <span class="token operator">=</span> self<span class="token punctuation">.</span>start_date
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token comment"># \u80FD\u8FD0\u884C\u5230\u8FD9\u91CC\uFF0C\u8BF4\u660E\u9884\u8BBE\u4E86\u8D77\u59CB\u65F6\u95F4\u662F\u5F53\u524D\u65F6\u95F4\u6216\u4E4B\u524D\u7684</span>
        timediff_seconds <span class="token operator">=</span> timedelta_seconds<span class="token punctuation">(</span>now <span class="token operator">-</span> self<span class="token punctuation">.</span>start_date<span class="token punctuation">)</span>
        <span class="token comment"># \u8BA1\u7B97\u5F00\u59CB\u65F6\u95F4\u9664\u4EE5\u65F6\u95F4\u95F4\u9694\uFF0C\u5411\u4E0A\u53D6\u6574\uFF0C\u6C42\u51FA\u4E00\u5171\u5DEE\u4E86\u591A\u5C11\u6B21\u8F6E\u8BE2</span>
        next_interval_num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>ceil<span class="token punctuation">(</span>timediff_seconds <span class="token operator">/</span> self<span class="token punctuation">.</span>interval_length<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># \u8BA1\u7B97\u4E0B\u6B21\u6267\u884C\u65F6\u95F4\uFF0C\u5373\uFF1A\u8D77\u59CB\u65F6\u95F4 + \u65F6\u95F4\u95F4\u9694 * \u6B21\u6570</span>
        next_fire_time <span class="token operator">=</span> self<span class="token punctuation">.</span>start_date <span class="token operator">+</span> self<span class="token punctuation">.</span>interval <span class="token operator">*</span> next_interval_num

    <span class="token keyword">if</span> self<span class="token punctuation">.</span>jitter <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        next_fire_time <span class="token operator">=</span> self<span class="token punctuation">.</span>_apply_jitter<span class="token punctuation">(</span>next_fire_time<span class="token punctuation">,</span> self<span class="token punctuation">.</span>jitter<span class="token punctuation">,</span> now<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token keyword">not</span> self<span class="token punctuation">.</span>end_date <span class="token keyword">or</span> next_fire_time <span class="token operator">&lt;=</span> self<span class="token punctuation">.</span>end_date<span class="token punctuation">:</span>
        <span class="token keyword">return</span> normalize<span class="token punctuation">(</span>next_fire_time<span class="token punctuation">)</span>
    <span class="token comment"># \u8D85\u51FA\u7ED3\u675F\u65F6\u95F4\uFF0C\u9690\u5F0F\u8FD4\u56DENone</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\uFF0C\u524D\u9762\u4E24\u4E2A\u5224\u65AD\u6BD4\u8F83\u597D\u7406\u89E3\uFF1A</p><ul><li><code>if previous_fire_time:</code>\uFF0C\u8BF4\u660E\u5DF2\u7ECF\u6709\u4E0A\u6B21\u6267\u884C\u65F6\u95F4\uFF0C\u5219\u76F4\u63A5\u8BA1\u7B97\u4E0B\u6B21\u6267\u884C\u65F6\u95F4\uFF1B</li><li><code>elif self.start_date &gt; now:</code>\uFF0C\u8BF4\u660E\u5F00\u59CB\u65F6\u95F4\u5927\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u5F00\u59CB\u65F6\u95F4\uFF1B</li></ul><p>\u6700\u540E\u4E00\u4E2Aelse\u5982\u679C\u88AB\u6267\u884C\uFF0C\u8BF4\u660E\u7528\u6237\u8BBE\u7F6E\u4E86start_date\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u65F6\u95F4\u65E9\u4E8E\u5F53\u524D\u65F6\u95F4\u7684\u3002 \u90A3\u4E48\u6211\u4EEC\u9700\u8981\u4E09\u6B65\u8BA1\u7B97\u4E0B\u6B21\u6267\u884C\u65F6\u95F4\uFF1A</p><ol><li>\u8BA1\u7B97\u5F53\u524D\u65F6\u95F4\u548C\u8BBE\u7F6E\u7684start_date\u76F4\u63A5\u5DEE\u4E86\u591A\u5C11\u79D2\u3002</li><li>\u628A\u76F8\u5DEE\u7684\u79D2\u6570\u9664\u4EE5\u65F6\u95F4\u95F4\u9694\uFF0C\u5411\u4E0A\u53D6\u6574\uFF0C\u6C42\u51FA\u4E00\u5171\u5DEE\u4E86\u591A\u5C11\u6B21\u8F6E\u8BE2\u3002</li><li>\u6700\u540E\u8BA1\u7B97\u4E0B\u6B21\u6267\u884C\u65F6\u95F4\uFF0C\u5373\uFF1A\u8D77\u59CB\u65F6\u95F4 + \u65F6\u95F4\u95F4\u9694 * \u6B21\u6570</li></ol><p>\u4E3E\u4E2A\u4F8B\u5B50\u5427\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u4ECA\u5929\u662F2022\u5E7408\u670805\u65E5\uFF0C\u8BBE\u7F6E\u7684\u8D77\u59CB\u65F6\u95F4\u662F2022\u5E7408\u670801\u65E5\uFF0C\u8FD0\u884C\u65F6\u95F4\u95F4\u9694\u662F1\u5929\u3002</span>
trigger <span class="token operator">=</span> IntervalTrigger<span class="token punctuation">(</span>days<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> start_date<span class="token operator">=</span><span class="token string">&#39;2022-08-01&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u90A3\u4E48\u5B83\u5FC5\u7136\u4F1A\u6765\u5230\u6700\u540E\u4E00\u4E2Aelse\u53BB\u6267\u884C\u3002</span>
<span class="token comment"># 1. \u8BA1\u7B97\u5F53\u524D\u7684\u65F6\u95F42022\u5E7408\u670805\u65E514:17:23\u548C\u8BBE\u7F6E\u7684\u8D77\u59CB\u65F6\u95F42022\u5E7408\u670801\u65E5\u76F4\u63A5\u5DEE\u4E86\u591A\u5C11\u79D2\u3002</span>
<span class="token comment"># 2. \u628A\u76F8\u5DEE\u7684\u79D2\u6570\u9664\u4EE5\u65F6\u95F4\u95F4\u9694\uFF0C1\u5929\u5C31\u662F86400\u79D2\uFF0C\u5411\u4E0A\u53D6\u6574\uFF0C\u6C42\u51FA\u4E00\u5171\u5DEE\u4E86\u591A\u5C11\u6B21\u8F6E\u8BE2\u3002\u7ED3\u679C\u662F5\u6B21\u3002</span>
<span class="token comment"># 3. \u6700\u540E\u8BA1\u7B97\u4E0B\u6B21\u6267\u884C\u65F6\u95F4\uFF0C\u5373\uFF1A2022\u5E7408\u670801\u65E5 + 1\u5929 * 5\u6B21\u3002 = 2022\u5E7408\u670806\u65E5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u5C31\u662F\u5F80\u5E38\u7684\u5982\u679C\u6709\u6D6E\u52A8\u65F6\u95F4\u5C31\u8BA1\u7B97\u4E0B\u3002</p><p>\u6700\u540E\u4E00\u6B65\u5C31\u662F\u68C0\u67E5\u662F\u5426\u8D85\u51FA<code>end_date</code>\uFF0C\u5982\u679C\u8D85\u51FA\uFF0C\u5219\u9690\u5F0F\u8FD4\u56DENone\u3002\u4E5F\u5C31\u610F\u5473\u7740\u4E0D\u518D\u7EE7\u7EED\u8FD0\u884C\u4E86\u3002 \u8FD9\u4E00\u6B65\u5FC5\u987B\u5728\u8BA1\u7B97\u5B8C\u4E0B\u6B21\u6267\u884C\u65F6\u95F4\u4E4B\u540E\u518D\u8FD0\u884C\u3002\u56E0\u4E3A\u5B83\u5224\u65AD\u7684\u662F\uFF1A\u4E0B\u6B21\u8FD0\u884C\u65F6\u95F4\u548C<code>end_date</code>\u7684\u5173\u7CFB\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u7BC7\u4E3B\u8981\u8BB2\u89E3\u4E86<code>DateTrigger</code>\u548C<code>IntervalTrigger</code>\u7684\u6E90\u7801\u3002\u76F8\u5BF9\u6765\u8BF4\uFF0C<code>DateTrigger</code>\u7684\u5B9E\u73B0\u5341\u5206\u7B80\u5355\uFF0C\u56E0\u4E3A\u5B83\u5C5E\u4E8E\u4E00\u6B21\u6027\u4EFB\u52A1\uFF0C\u8FBE\u5230\u9884\u5B9A\u65F6\u95F4\u8FD0\u884C\u540E\u5C31\u7ED3\u675F\u4E86\u3002\u800C<code>IntervalTrigger</code>\u56E0\u4E3A\u5B83\u5C5E\u4E8E\u5468\u671F\u6027\u4EFB\u52A1\uFF0C\u6BCF\u6B21\u8FD0\u884C\u90FD\u4F1A\u8BA1\u7B97\u4E0B\u6B21\u8FD0\u884C\u65F6\u95F4\u3002</p><p>\u4E0B\u4E00\u7BC7\u5C06\u4F1A\u5BF9\u6700\u540E\u4E00\u4E2A\u89E6\u53D1\u5668<code>CronTrigger</code>\u8FDB\u884C\u8BB2\u89E3\u3002\u8FD9\u4E5F\u662F\u76F8\u5BF9\u6700\u590D\u6742\u7684\u4E00\u4E2A\u89E6\u53D1\u5668\u3002\u6709\u5FC5\u8981\u7684\u8BDD\u6700\u597D\u63D0\u524D\u4E86\u89E3\u4E0BCron\u8868\u8FBE\u5F0F\u3002</p>`,23),o=[p];function c(l,i){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","trigger-2.html.vue"]]);export{d as default};
