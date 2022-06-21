<template><div><h1 id="markdown-syntax-guide" tabindex="-1"><a class="header-anchor" href="#markdown-syntax-guide" aria-hidden="true">#</a> Markdown syntax guide</h1>
<h2 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> Headers</h2>
<h1 id="this-is-a-heading-h1" tabindex="-1"><a class="header-anchor" href="#this-is-a-heading-h1" aria-hidden="true">#</a> This is a Heading h1</h1>
<h2 id="this-is-a-heading-h2" tabindex="-1"><a class="header-anchor" href="#this-is-a-heading-h2" aria-hidden="true">#</a> This is a Heading h2</h2>
<h6 id="this-is-a-heading-h6" tabindex="-1"><a class="header-anchor" href="#this-is-a-heading-h6" aria-hidden="true">#</a> This is a Heading h6</h6>
<h2 id="emphasis" tabindex="-1"><a class="header-anchor" href="#emphasis" aria-hidden="true">#</a> Emphasis</h2>
<p><em>This text will be italic</em><br>
<em>This will also be italic</em></p>
<p><strong>This text will be bold</strong><br>
<strong>This will also be bold</strong></p>
<p><em>You <strong>can</strong> combine them</em></p>
<h2 id="lists" tabindex="-1"><a class="header-anchor" href="#lists" aria-hidden="true">#</a> Lists</h2>
<h3 id="unordered" tabindex="-1"><a class="header-anchor" href="#unordered" aria-hidden="true">#</a> Unordered</h3>
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 2a</li>
<li>Item 2b</li>
</ul>
<h3 id="ordered" tabindex="-1"><a class="header-anchor" href="#ordered" aria-hidden="true">#</a> Ordered</h3>
<ol>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 3a</li>
<li>Item 3b</li>
</ol>
<h2 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h2>
<p><img src="/image/sample.png" alt="This is a alt text." title="This is a sample image."></p>
<h2 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h2>
<p>You may be using <a href="https://markdownlivepreview.com/" target="_blank" rel="noopener noreferrer">Markdown Live Preview<ExternalLinkIcon/></a>.</p>
<h2 id="blockquotes" tabindex="-1"><a class="header-anchor" href="#blockquotes" aria-hidden="true">#</a> Blockquotes</h2>
<blockquote>
<p>Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.</p>
<blockquote>
<p>Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</p>
</blockquote>
</blockquote>
<h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2>
<table>
<thead>
<tr>
<th>Left columns</th>
<th style="text-align:center">Right columns</th>
</tr>
</thead>
<tbody>
<tr>
<td>left foo</td>
<td style="text-align:center">right foo</td>
</tr>
<tr>
<td>left bar</td>
<td style="text-align:center">right bar</td>
</tr>
<tr>
<td>left baz</td>
<td style="text-align:center">right baz</td>
</tr>
</tbody>
</table>
<h2 id="blocks-of-code" tabindex="-1"><a class="header-anchor" href="#blocks-of-code" aria-hidden="true">#</a> Blocks of code</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let message = 'Hello world';
alert(message);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inline-code" tabindex="-1"><a class="header-anchor" href="#inline-code" aria-hidden="true">#</a> Inline code</h2>
<p>This web site is using <code v-pre>markedjs/marked</code>.</p>
</div></template>
