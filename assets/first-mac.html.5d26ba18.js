import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as c,c as t,a as s,b as i,e as n,d as e}from"./app.285d9b98.js";const o={},r=n(`<h2 id="\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883</h2><h3 id="\u914D\u7F6Epip\u56FD\u5185\u6E90" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Epip\u56FD\u5185\u6E90" aria-hidden="true">#</a> \u914D\u7F6Epip\u56FD\u5185\u6E90</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">mkdir</span> .pip
<span class="token builtin class-name">cd</span> .pip
<span class="token function">vim</span> pip.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">global</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">index-url</span> <span class="token punctuation">=</span> <span class="token value attr-value">https://pypi.tuna.tsinghua.edu.cn/simple</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">trusted-host</span><span class="token punctuation">=</span><span class="token value attr-value">pypi.tuna.tsinghua.edu.cn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6Essh" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Essh" aria-hidden="true">#</a> \u914D\u7F6ESSH</h3><blockquote><p>\u68C0\u67E5\u662F\u5426\u5B58\u5728ssh key</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -al ~/.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u521B\u5EFASSH Key(\u5B58\u5728\u5373\u8DF3\u8FC7\u6B64\u6B65\u9AA4)</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">&quot;jcnd@163.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06SSH Key\u6DFB\u52A0\u5230ssh-agent</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">$(</span>ssh-agent -s<span class="token variable">)</span></span>
ssh-add ~/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u590D\u5236key</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pbcopy <span class="token operator">&lt;</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06ssh key\u6DFB\u52A0\u81F3github</p></blockquote><blockquote><p>\u9A8C\u8BC1\u8FDE\u63A5</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5F00\u53D1\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u8F6F\u4EF6" aria-hidden="true">#</a> \u5F00\u53D1\u8F6F\u4EF6</h2><h3 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> homebrew</h3>`,18),p=e("\u5B98\u7F51\uFF1A"),u={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},h=e("https://brew.sh/"),v=n(`<ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/bin/bash -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5E38\u7528\u547D\u4EE4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u8F6F\u4EF6</span>
brew <span class="token function">install</span> <span class="token function">curl</span>

<span class="token comment"># \u5378\u8F7D\u8F6F\u4EF6</span>
brew uninstall <span class="token function">curl</span>

<span class="token comment"># \u66F4\u65B0\u81EA\u5DF1</span>
brew update

<span class="token comment"># \u66F4\u65B0\u8F6F\u4EF6</span>
brew upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iterm2-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#iterm2-oh-my-zsh" aria-hidden="true">#</a> iTerm2 + oh-my-zsh</h3>`,5),b=e("\u6BD4\u8F83\u597D\u7684\u6559\u7A0B\uFF0C\u8FD9\u91CC\u4E0D\u505A\u8D58\u8FF0\uFF1A"),m={href:"https://zhuanlan.zhihu.com/p/290737828",target:"_blank",rel:"noopener noreferrer"},g=e("https://zhuanlan.zhihu.com/p/290737828"),k=n(`<ul><li>\u914D\u7F6Eagnoster\u4E3B\u9898\u540E\u5982\u4F55\u9690\u85CF\u76EE\u5F55</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/.oh-my-zsh/themes/agnoster.zsh-theme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u627E\u5230<code>prompt_dir</code>\u51FD\u6570</p><p>old:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">prompt_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  prompt_segment blue <span class="token variable">$CURRENT_FG</span> <span class="token string">&#39;%~&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>new:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">prompt_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  prompt_segment blue <span class="token variable">$CURRENT_FG</span> <span class="token string">&#39;%c&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>alias</li></ul><div class="language-ssh ext-ssh line-numbers-mode"><pre class="language-ssh"><code>alias goproxy=&#39;export HTTP_PROXY=http://127.0.0.1:7890; export HTTPS_PROXY=http://127.0.0.1:7890; export ALL_PROXY=socks5://127.0.0.1:7891; git config --global http.proxy http://127.0.0.1:7890; git config --global https.proxy http://127.0.0.1:7890&#39;

alias disproxy=&#39;unset http_proxy https_proxy; git config --global --unset http.proxy; git config --global --unset https.proxy&#39;

alias gc=&#39;git clone&#39;
alias pi=&#39;poetry install&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5node\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5node\u76F8\u5173" aria-hidden="true">#</a> \u5B89\u88C5node\u76F8\u5173</h3><ul><li>\u5B89\u88C5\u591A\u73AF\u5883node\u7BA1\u7406\u5DE5\u5177<code>n</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u8FDC\u7AEFnode\u7248\u672C</span>
n ls-remote

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684node</span>
n i <span class="token number">20.5</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>pnpm</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token function">pnpm</span> -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> vscode</h3><h4 id="\u5E73\u6ED1\u79FB\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5E73\u6ED1\u79FB\u52A8" aria-hidden="true">#</a> \u5E73\u6ED1\u79FB\u52A8</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># For VSCode</span>
defaults <span class="token function">write</span> com.microsoft.VSCode ApplePressAndHoldEnabled -bool <span class="token boolean">false</span>

<span class="token comment"># For VSCode Insiders</span>
defaults <span class="token function">write</span> com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539 <code>\u7CFB\u7EDF\u504F\u597D\u8BBE\u7F6E</code> &gt; <code>\u952E\u76D8</code> \u66F4\u6539 <code>\u6309\u952E\u91CD\u590D</code> \u4E0E <code>\u91CD\u590D\u524D\u5EF6\u8FDF</code></p><h2 id="\u5E38\u7528\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8F6F\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u8F6F\u4EF6</h2><h3 id="alfred" tabindex="-1"><a class="header-anchor" href="#alfred" aria-hidden="true">#</a> Alfred</h3><p>Mac\u7684\u6548\u7387\u795E\u5668</p><h3 id="snippetslab" tabindex="-1"><a class="header-anchor" href="#snippetslab" aria-hidden="true">#</a> SnippetsLab</h3><h3 id="termius" tabindex="-1"><a class="header-anchor" href="#termius" aria-hidden="true">#</a> Termius</h3>`,24);function f(x,_){const a=d("ExternalLinkIcon");return c(),t("div",null,[r,s("p",null,[p,s("a",u,[h,i(a)])]),v,s("p",null,[b,s("a",m,[g,i(a)])]),k])}var w=l(o,[["render",f],["__file","first-mac.html.vue"]]);export{w as default};
